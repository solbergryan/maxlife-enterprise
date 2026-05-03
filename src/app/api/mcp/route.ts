/**
 * MaxLife Realty MCP Server — Vercel HTTP endpoint
 *
 * Implements the Model Context Protocol over HTTP (JSON-RPC 2.0).
 * Compatible with Claude Desktop, Cursor, and any MCP client
 * that supports remote HTTP servers.
 *
 * Endpoint: POST https://maxliferealty.com/api/mcp
 *
 * Claude Desktop config:
 * {
 *   "mcpServers": {
 *     "maxlife-realty": {
 *       "type": "http",
 *       "url": "https://maxliferealty.com/api/mcp"
 *     }
 *   }
 * }
 */

import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

// ── Supabase ───────────────────────────────────────────────────────────────────

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// ── Cap rate reference data ────────────────────────────────────────────────────

const FL_CAP_RATES = [
  { assetClass: "Chick-fil-A Ground Lease", low: 3.75, high: 4.75, notes: "Absolute NNN, corporate guarantee" },
  { assetClass: "McDonald's Ground Lease", low: 4.50, high: 5.25, notes: "Absolute NNN, corporate guarantee" },
  { assetClass: "Starbucks NNN", low: 4.75, high: 5.50, notes: "Brand-new 10-yr leases trending lower" },
  { assetClass: "AutoZone / O'Reilly NNN", low: 5.25, high: 6.00, notes: "Investment-grade credit tenants" },
  { assetClass: "CVS Pharmacy", low: 5.50, high: 6.50, notes: "Varies by lease term remaining" },
  { assetClass: "Dollar General NNN", low: 5.75, high: 6.50, notes: "New construction lower end" },
  { assetClass: "Walgreens", low: 6.00, high: 7.00, notes: "Longer term = lower cap" },
  { assetClass: "Multifamily Class A", low: 5.00, high: 5.75, notes: "Orlando / Tampa metros" },
  { assetClass: "Multifamily Class B", low: 5.75, high: 6.50, notes: "Value-add opportunity" },
  { assetClass: "Industrial / Warehouse", low: 5.50, high: 6.50, notes: "Strong demand from logistics" },
  { assetClass: "Retail Strip Center", low: 6.50, high: 7.50, notes: "Anchored strips toward lower end" },
  { assetClass: "Medical Office", low: 6.00, high: 6.75, notes: "Lake Nona / hospital corridors lower" },
  { assetClass: "Suburban Office", low: 7.00, high: 8.50, notes: "Flex / medical hybrid trending lower" },
];

// ── Deal analyzer math ─────────────────────────────────────────────────────────

function calcMonthlyPayment(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || annualRate <= 0 || years <= 0) return 0;
  const r = annualRate / 12;
  const n = years * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calcLoanBalance(principal: number, annualRate: number, totalYears: number, afterYears: number) {
  if (principal <= 0 || annualRate <= 0 || totalYears <= 0) return 0;
  const r = annualRate / 12;
  const n = totalYears * 12;
  const k = afterYears * 12;
  const pmt = calcMonthlyPayment(principal, annualRate, totalYears);
  return principal * Math.pow(1 + r, k) - pmt * ((Math.pow(1 + r, k) - 1) / r);
}

function calcIRR(cashFlows: number[]) {
  let rate = 0.1;
  for (let i = 0; i < 200; i++) {
    let npv = 0, dnpv = 0;
    for (let t = 0; t < cashFlows.length; t++) {
      const d = Math.pow(1 + rate, t);
      npv += cashFlows[t] / d;
      dnpv -= t * cashFlows[t] / (d * (1 + rate));
    }
    if (Math.abs(dnpv) < 1e-12) break;
    const next = rate - npv / dnpv;
    if (Math.abs(next - rate) < 1e-9) return next;
    rate = next;
  }
  return rate;
}

function analyzeDeal(p: Record<string, number | string>) {
  const price = Number(p.purchasePrice);
  const holdYrs = Math.max(1, Math.round(Number(p.holdPeriod ?? 10)));
  const rateAnn = Number(p.interestRate ?? 6.75) / 100;
  const downPct = Number(p.downPaymentPct ?? 25) / 100;
  const amortYrs = Number(p.amortization ?? 30);
  const vacRate = Number(p.vacancyRate ?? 0) / 100;
  const rentGrowth = Number(p.rentGrowth ?? 2.0) / 100;
  const exitSpread = Number(p.exitCapSpread ?? 0.5) / 100;
  const origFee = Number(p.loanOrigFee ?? 1.0) / 100;
  const closingCosts = Number(p.closingCosts ?? 15000);
  const units = Math.max(1, Math.round(Number(p.units ?? 1)));
  const assetType = String(p.assetType ?? "NNN");

  if (!price || price <= 0) return { error: "purchasePrice is required" };

  const gpr = assetType === "NNN"
    ? Number(p.annualRent ?? 0)
    : Number(p.monthlyRentPerUnit ?? 0) * 12 * units;

  if (!gpr || gpr <= 0) return { error: "annualRent or monthlyRentPerUnit is required" };

  const egi1 = gpr * (1 - vacRate);
  const opex1 = assetType === "NNN" ? 0
    : p.opexRatio ? egi1 * (Number(p.opexRatio) / 100)
    : (Number(p.propertyTaxes ?? 0) + Number(p.insurance ?? 0) + Number(p.repairs ?? 0) + egi1 * (Number(p.mgmtPct ?? 8) / 100));

  const noi1 = egi1 - opex1;
  const entranceCap = noi1 / price;
  const exitCap = entranceCap + exitSpread;
  const loanAmount = price * (1 - downPct);
  const downPayment = price * downPct;
  const equity = downPayment + closingCosts + loanAmount * origFee;
  const monthlyPmt = calcMonthlyPayment(loanAmount, rateAnn, amortYrs);
  const annualDS = monthlyPmt * 12;
  const cf1 = noi1 - annualDS;
  const dscr = annualDS > 0 ? noi1 / annualDS : 0;

  const irfCF: number[] = [-equity];
  let totalCF = 0;
  let em = 0, irr = 0, avgCoC = 0;

  for (let yr = 1; yr <= holdYrs; yr++) {
    const noiYr = noi1 * Math.pow(1 + rentGrowth, yr - 1);
    const cfYr = noiYr - annualDS;
    totalCF += cfYr;
    if (yr < holdYrs) {
      irfCF.push(cfYr);
    } else {
      const exitNOI = noi1 * Math.pow(1 + rentGrowth, holdYrs);
      const exitValue = exitCap > 0 ? exitNOI / exitCap : 0;
      const loanPayoff = calcLoanBalance(loanAmount, rateAnn, amortYrs, holdYrs);
      const netSaleProceeds = exitValue - exitValue * 0.03 - Math.max(0, loanPayoff);
      irfCF.push(cfYr + netSaleProceeds);
      const totalReturn = totalCF + netSaleProceeds;
      em = equity > 0 ? totalReturn / equity : 0;
      avgCoC = equity > 0 ? (totalCF / holdYrs) / equity : 0;
      try { irr = calcIRR(irfCF); } catch { irr = 0; }
      if (!isFinite(irr) || isNaN(irr)) irr = 0;

      const grade = (() => {
        const irrS = irr >= 0.15 ? 5 : irr >= 0.12 ? 4 : irr >= 0.09 ? 3 : irr >= 0.06 ? 2 : 1;
        const dscrS = dscr >= 1.5 ? 5 : dscr >= 1.35 ? 4 : dscr >= 1.25 ? 3 : dscr >= 1.10 ? 2 : 1;
        const cocS = avgCoC >= 0.10 ? 5 : avgCoC >= 0.08 ? 4 : avgCoC >= 0.05 ? 3 : avgCoC >= 0.02 ? 2 : 1;
        const emS = em >= 3.0 ? 5 : em >= 2.0 ? 4 : em >= 1.5 ? 3 : em >= 1.2 ? 2 : 1;
        const avg = (irrS + dscrS + cocS + emS) / 4;
        return avg >= 4.5 ? "A+" : avg >= 4.0 ? "A" : avg >= 3.5 ? "A-" : avg >= 3.0 ? "B+" : avg >= 2.5 ? "B" : avg >= 2.0 ? "B-" : avg >= 1.5 ? "C" : "D";
      })();

      const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
      const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

      return {
        grade,
        summary: {
          purchasePrice: fmt(price),
          noi: fmt(noi1),
          entranceCap: pct(entranceCap),
          irr: pct(irr),
          dscr: `${dscr.toFixed(2)}x`,
          avgCashOnCash: pct(avgCoC),
          equityMultiple: `${em.toFixed(2)}x`,
          yearOneCashFlow: fmt(cf1),
          totalEquityInvested: fmt(equity),
          exitValue: fmt(exitValue),
          totalReturn: fmt(totalReturn),
        },
        benchmarks: {
          irr: { value: pct(irr), status: irr >= 0.12 ? "PASS" : irr >= 0.08 ? "WATCH" : "FAIL", benchmark: ">12% strong" },
          dscr: { value: `${dscr.toFixed(2)}x`, status: dscr >= 1.25 ? "PASS" : dscr >= 1.10 ? "WATCH" : "FAIL", benchmark: ">1.25x lender min" },
          cashOnCash: { value: pct(avgCoC), status: avgCoC >= 0.06 ? "PASS" : avgCoC >= 0.03 ? "WATCH" : "FAIL", benchmark: ">6% target" },
          equityMultiple: { value: `${em.toFixed(2)}x`, status: em >= 2.0 ? "PASS" : em >= 1.5 ? "WATCH" : "FAIL", benchmark: ">2.0x strong" },
        },
        disclaimer: "For informational and educational purposes only. Not financial or investment advice.",
      };
    }
  }
  return { error: "Calculation failed" };
}

// ── Tool definitions ───────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: "search_listings",
    description: "Search MaxLife Realty's commercial real estate marketplace. Filter by property type, location, cap rate, price, or keyword.",
    inputSchema: {
      type: "object",
      properties: {
        propertyType: { type: "string", enum: ["NNN","retail","office","industrial","multifamily","land","hospitality","medical_office","mixed_use","special_purpose","other"] },
        transactionType: { type: "string", enum: ["sale","lease","both"] },
        city: { type: "string" },
        county: { type: "string" },
        minCapRate: { type: "number" },
        maxCapRate: { type: "number" },
        minPrice: { type: "number" },
        maxPrice: { type: "number" },
        search: { type: "string" },
        limit: { type: "number", default: 10 },
      },
    },
  },
  {
    name: "get_listing",
    description: "Get full details on a specific MaxLife Realty listing by its URL slug.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Listing URL slug" },
      },
      required: ["slug"],
    },
  },
  {
    name: "analyze_deal",
    description: "Full CRE investment analysis — IRR, DSCR, cash-on-cash, equity multiple, deal grade A+–D, suggested offer price.",
    inputSchema: {
      type: "object",
      properties: {
        assetType: { type: "string", enum: ["NNN","Multifamily","SFR"], default: "NNN" },
        purchasePrice: { type: "number" },
        annualRent: { type: "number", description: "NNN: total annual rent" },
        monthlyRentPerUnit: { type: "number", description: "MF/SFR: monthly rent per unit" },
        units: { type: "number" },
        vacancyRate: { type: "number", default: 0 },
        opexRatio: { type: "number", description: "Operating expense % of EGI (MF/SFR)" },
        downPaymentPct: { type: "number", default: 25 },
        interestRate: { type: "number", default: 6.75 },
        amortization: { type: "number", default: 30 },
        closingCosts: { type: "number", default: 15000 },
        loanOrigFee: { type: "number", default: 1.0 },
        holdPeriod: { type: "number", default: 10 },
        exitCapSpread: { type: "number", default: 0.5, description: "Positive = market cools, negative = market heats" },
        rentGrowth: { type: "number", default: 2.0 },
      },
      required: ["purchasePrice"],
    },
  },
  {
    name: "get_cap_rate_benchmarks",
    description: "Florida 2026 cap rate benchmarks by asset class — NNN tenants, multifamily, industrial, retail, office, medical.",
    inputSchema: {
      type: "object",
      properties: {
        assetClass: { type: "string", description: "Filter by asset class name, e.g. 'Dollar General', 'multifamily'" },
      },
    },
  },
  {
    name: "calculate_cap_rate",
    description: "Solve cap rate ↔ NOI ↔ price. Given any two, calculate the third.",
    inputSchema: {
      type: "object",
      properties: {
        mode: { type: "string", enum: ["cap_rate","price","noi"] },
        noi: { type: "number" },
        price: { type: "number" },
        capRate: { type: "number", description: "Cap rate as a percentage, e.g. 6.0" },
      },
      required: ["mode"],
    },
  },
  {
    name: "capture_lead",
    description: "Log a contact for MaxLife Realty follow-up. Use when someone wants to connect with an advisor or inquire about a property.",
    inputSchema: {
      type: "object",
      properties: {
        email: { type: "string" },
        name: { type: "string" },
        phone: { type: "string" },
        notes: { type: "string" },
      },
      required: ["email"],
    },
  },
];

// ── Tool handlers ──────────────────────────────────────────────────────────────

async function handleTool(name: string, args: Record<string, unknown>) {
  const supabase = getSupabase();
  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  switch (name) {
    case "search_listings": {
      let q = supabase.from("listings").select(
        "slug,title,property_type,transaction_type,city,county,price,cap_rate,noi,building_sqft,lot_acres,units,tenant,description,highlights,contact_name,contact_phone,contact_email"
      ).eq("status", "active");
      if (args.propertyType) q = q.eq("property_type", args.propertyType);
      if (args.transactionType) q = q.eq("transaction_type", args.transactionType);
      if (args.city) q = q.ilike("city", `%${args.city}%`);
      if (args.county) q = q.ilike("county", `%${args.county}%`);
      if (args.minCapRate != null) q = q.gte("cap_rate", args.minCapRate);
      if (args.maxCapRate != null) q = q.lte("cap_rate", args.maxCapRate);
      if (args.minPrice != null) q = q.gte("price", args.minPrice);
      if (args.maxPrice != null) q = q.lte("price", args.maxPrice);
      if (args.search) q = q.or(`title.ilike.%${args.search}%,description.ilike.%${args.search}%`);
      q = q.order("created_at", { ascending: false }).limit(Number(args.limit ?? 10));
      const { data, error } = await q;
      if (error) throw new Error(error.message);
      if (!data?.length) return { count: 0, listings: [], message: "No active listings match your criteria." };
      return {
        count: data.length,
        listings: data.map((l: Record<string, unknown>) => ({
          slug: l.slug,
          title: l.title,
          propertyType: l.property_type,
          transactionType: l.transaction_type,
          city: l.city,
          county: l.county,
          price: l.price ? fmt(Number(l.price)) : "Call for pricing",
          capRate: l.cap_rate ? `${Number(l.cap_rate).toFixed(2)}%` : null,
          noi: l.noi ? `${fmt(Number(l.noi))}/yr` : null,
          buildingSqft: l.building_sqft ? `${Number(l.building_sqft).toLocaleString()} SF` : null,
          lotAcres: l.lot_acres ? `${l.lot_acres} ac` : null,
          highlights: l.highlights,
          contact: { name: l.contact_name, phone: l.contact_phone, email: l.contact_email },
          url: `https://maxliferealty.com/marketplace/${l.slug}`,
        })),
      };
    }

    case "get_listing": {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await (supabase.from("listings").select("*").eq("slug", args.slug).single() as any);
      if (error) return { error: "Listing not found." };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const l = data as any;
      return {
        title: l.title, slug: l.slug, status: l.status,
        propertyType: l.property_type, transactionType: l.transaction_type,
        location: { address: l.street_address, city: l.city, county: l.county, state: l.state, zip: l.zip },
        financials: { price: l.price ? fmt(Number(l.price)) : null, capRate: l.cap_rate, noi: l.noi ? fmt(Number(l.noi)) : null, grossIncome: l.gross_income },
        physical: { buildingSqft: l.building_sqft, lotAcres: l.lot_acres, zoning: l.zoning, yearBuilt: l.year_built },
        tenancy: { leaseType: l.lease_type, leaseTermRemaining: l.lease_term_remaining, escalations: l.escalations },
        description: l.description, highlights: l.highlights, upsidePotential: l.upside_potential,
        contact: { name: l.contact_name, email: l.contact_email, phone: l.contact_phone },
        url: `https://maxliferealty.com/marketplace/${l.slug}`,
      };
    }

    case "analyze_deal":
      return analyzeDeal(args as Record<string, number | string>);

    case "get_cap_rate_benchmarks": {
      const q = args.assetClass ? String(args.assetClass).toLowerCase() : null;
      const results = q
        ? FL_CAP_RATES.filter(b => b.assetClass.toLowerCase().includes(q))
        : FL_CAP_RATES;
      return {
        asOf: "2026 Florida Market",
        benchmarks: results.map(b => ({
          assetClass: b.assetClass,
          capRateRange: `${b.low.toFixed(2)}% – ${b.high.toFixed(2)}%`,
          midpoint: `${((b.low + b.high) / 2).toFixed(2)}%`,
          notes: b.notes,
        })),
      };
    }

    case "calculate_cap_rate": {
      const noi = Number(args.noi);
      const price = Number(args.price);
      const cap = Number(args.capRate) / 100;
      const f = (n: number) => fmt(n);
      if (args.mode === "cap_rate") {
        if (!noi || !price) return { error: "noi and price required" };
        return { result: `${(noi / price * 100).toFixed(2)}%`, formula: `${f(noi)} / ${f(price)}` };
      }
      if (args.mode === "price") {
        if (!noi || !cap) return { error: "noi and capRate required" };
        return { result: f(noi / cap), formula: `${f(noi)} / ${(cap*100).toFixed(2)}%` };
      }
      if (args.mode === "noi") {
        if (!price || !cap) return { error: "price and capRate required" };
        return { result: `${f(price * cap)}/yr`, formula: `${f(price)} × ${(cap*100).toFixed(2)}%` };
      }
      return { error: "Invalid mode" };
    }

    case "capture_lead": {
      const { error } = await supabase.from("leads").insert({
        email: args.email,
        name: args.name ?? null,
        phone: args.phone ?? null,
        source: "mcp-general",
        metadata: { notes: args.notes ?? null, channel: "mcp-http" },
      });
      if (error) throw new Error(error.message);
      return {
        success: true,
        message: `Lead captured. Ryan Solberg will follow up with ${args.name ?? "you"} shortly.`,
        contact: "Ryan@MaxLifeRealty.com | (855) 765-2374",
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// ── CORS headers ───────────────────────────────────────────────────────────────

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, mcp-session-id",
};

// ── Route handlers ─────────────────────────────────────────────────────────────

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function GET() {
  return Response.json({
    name: "maxlife-realty-mcp",
    version: "1.0.0",
    description: "MaxLife Realty MCP Server — deal analyzer, listings, cap rates, lead capture",
    tools: TOOLS.map(t => t.name),
    endpoint: "POST https://maxliferealty.com/api/mcp",
  }, { headers: CORS });
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }, { status: 400, headers: CORS });
  }

  const id = body.id ?? null;
  const method = String(body.method ?? "");
  const params = (body.params ?? {}) as Record<string, unknown>;

  try {
    // Handle JSON-RPC 2.0 batch
    if (Array.isArray(body)) {
      const results = await Promise.all(body.map(msg => POST(new NextRequest(req.url, { method: "POST", body: JSON.stringify(msg) }))));
      const json = await Promise.all(results.map(r => r.json()));
      return Response.json(json, { headers: CORS });
    }

    switch (method) {
      case "initialize":
        return Response.json({
          jsonrpc: "2.0", id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: { name: "maxlife-realty-mcp", version: "1.0.0" },
          },
        }, { headers: CORS });

      case "notifications/initialized":
        return new Response(null, { status: 204, headers: CORS });

      case "tools/list":
        return Response.json({ jsonrpc: "2.0", id, result: { tools: TOOLS } }, { headers: CORS });

      case "tools/call": {
        const toolName = String(params.name ?? "");
        const toolArgs = (params.arguments ?? {}) as Record<string, unknown>;
        const result = await handleTool(toolName, toolArgs);
        return Response.json({
          jsonrpc: "2.0", id,
          result: { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] },
        }, { headers: CORS });
      }

      case "ping":
        return Response.json({ jsonrpc: "2.0", id, result: {} }, { headers: CORS });

      default:
        return Response.json({
          jsonrpc: "2.0", id,
          error: { code: -32601, message: `Method not found: ${method}` },
        }, { status: 404, headers: CORS });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({
      jsonrpc: "2.0", id,
      error: { code: -32603, message },
    }, { status: 500, headers: CORS });
  }
}
