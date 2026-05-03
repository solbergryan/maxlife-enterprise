/**
 * PDF Deal Analyzer — accepts a CRE offering memorandum (or any deal PDF)
 * via Vercel Blob URL, uses Claude Haiku to extract the underwriting
 * parameters, runs the full deal-math, and returns a complete analysis.
 *
 * Flow:
 *   1. Browser uploads PDF directly to Vercel Blob via /api/analyze-pdf/upload
 *      (bypasses the 4.5MB Vercel serverless body limit — supports up to 25 MB)
 *   2. Browser POSTs the resulting blob URL to /api/analyze-pdf
 *   3. We fetch the PDF from Blob, run Claude extraction + analysis, return JSON
 *   4. Blob is deleted after analysis (cleanup)
 *
 * POST /api/analyze-pdf
 *   JSON body: {
 *     blobUrl: string,                 // required — from /api/analyze-pdf/upload
 *     downPaymentPct?: number,
 *     interestRate?: number,
 *     holdPeriod?: number,
 *     purchasePrice?: number,          // override if extraction misses it
 *     annualRent?: number,             // override if extraction misses it
 *   }
 *
 * Returns: { extracted: {...}, analysis: {...} }
 */

import Anthropic from "@anthropic-ai/sdk";
import { del, get } from "@vercel/blob";
import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const NOTIFY_TO = process.env.CONTACT_TO_EMAIL ?? "ryan@maxliferealty.com";
const NOTIFY_FROM = process.env.CONTACT_FROM_EMAIL ?? "MaxLife Development <notifications@maxlifedevelopment.com>";

export const runtime = "nodejs";
export const maxDuration = 60;

// ── Deal analyzer math (mirrors /api/mcp) ──────────────────────────────────────

function calcMonthlyPayment(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || annualRate <= 0 || years <= 0) return 0;
  const r = annualRate / 12;
  const n = years * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calcLoanBalance(principal: number, annualRate: number, totalYears: number, afterYears: number) {
  if (principal <= 0 || annualRate <= 0 || totalYears <= 0) return 0;
  const r = annualRate / 12;
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
      dnpv -= (t * cashFlows[t]) / (d * (1 + rate));
    }
    if (Math.abs(dnpv) < 1e-12) break;
    const next = rate - npv / dnpv;
    if (Math.abs(next - rate) < 1e-9) return next;
    rate = next;
  }
  return rate;
}

type DealParams = {
  purchasePrice: number;
  annualRent?: number;
  monthlyRentPerUnit?: number;
  units?: number;
  vacancyRate?: number;
  opexRatio?: number;
  downPaymentPct: number;
  interestRate: number;
  amortization: number;
  closingCosts: number;
  loanOrigFee: number;
  holdPeriod: number;
  exitCapSpread: number;
  rentGrowth: number;
  assetType: "NNN" | "Multifamily" | "SFR";
};

function analyzeDeal(p: DealParams) {
  const price = p.purchasePrice;
  const holdYrs = Math.max(1, Math.round(p.holdPeriod ?? 10));
  const rateAnn = (p.interestRate ?? 6.75) / 100;
  const downPct = (p.downPaymentPct ?? 25) / 100;
  const amortYrs = p.amortization ?? 30;
  const vacRate = (p.vacancyRate ?? 0) / 100;
  const rentGrowth = (p.rentGrowth ?? 2.0) / 100;
  const exitSpread = (p.exitCapSpread ?? 0.5) / 100;
  const origFee = (p.loanOrigFee ?? 1.0) / 100;
  const closingCosts = p.closingCosts ?? 15000;
  const units = Math.max(1, Math.round(p.units ?? 1));
  const assetType = p.assetType ?? "NNN";

  if (!price || price <= 0) return { error: "purchasePrice is required" };

  const gpr = assetType === "NNN"
    ? (p.annualRent ?? 0)
    : (p.monthlyRentPerUnit ?? 0) * 12 * units;

  if (!gpr || gpr <= 0) return { error: "annualRent or monthlyRentPerUnit is required" };

  const egi1 = gpr * (1 - vacRate);
  const opex1 = assetType === "NNN" ? 0 : (p.opexRatio ? egi1 * (p.opexRatio / 100) : egi1 * 0.35);

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
  let exitValue = 0, totalReturn = 0, em = 0, irr = 0, avgCoC = 0;

  for (let yr = 1; yr <= holdYrs; yr++) {
    const noiYr = noi1 * Math.pow(1 + rentGrowth, yr - 1);
    const cfYr = noiYr - annualDS;
    totalCF += cfYr;
    if (yr < holdYrs) {
      irfCF.push(cfYr);
    } else {
      const exitNOI = noi1 * Math.pow(1 + rentGrowth, holdYrs);
      exitValue = exitCap > 0 ? exitNOI / exitCap : 0;
      const loanPayoff = calcLoanBalance(loanAmount, rateAnn, amortYrs, holdYrs);
      const netSaleProceeds = exitValue - exitValue * 0.03 - Math.max(0, loanPayoff);
      irfCF.push(cfYr + netSaleProceeds);
      totalReturn = totalCF + netSaleProceeds;
      em = equity > 0 ? totalReturn / equity : 0;
      avgCoC = equity > 0 ? totalCF / holdYrs / equity : 0;
      try { irr = calcIRR(irfCF); } catch { irr = 0; }
      if (!isFinite(irr) || isNaN(irr)) irr = 0;
    }
  }

  const irrS = irr >= 0.15 ? 5 : irr >= 0.12 ? 4 : irr >= 0.09 ? 3 : irr >= 0.06 ? 2 : 1;
  const dscrS = dscr >= 1.5 ? 5 : dscr >= 1.35 ? 4 : dscr >= 1.25 ? 3 : dscr >= 1.10 ? 2 : 1;
  const cocS = avgCoC >= 0.10 ? 5 : avgCoC >= 0.08 ? 4 : avgCoC >= 0.05 ? 3 : avgCoC >= 0.02 ? 2 : 1;
  const emS = em >= 3.0 ? 5 : em >= 2.0 ? 4 : em >= 1.5 ? 3 : em >= 1.2 ? 2 : 1;
  const avgScore = (irrS + dscrS + cocS + emS) / 4;
  const grade = avgScore >= 4.5 ? "A+" : avgScore >= 4.0 ? "A" : avgScore >= 3.5 ? "A-" :
                avgScore >= 3.0 ? "B+" : avgScore >= 2.5 ? "B" : avgScore >= 2.0 ? "B-" :
                avgScore >= 1.5 ? "C" : "D";

  return {
    grade,
    rawNumbers: {
      purchasePrice: price,
      noi: noi1,
      entranceCap,
      irr,
      dscr,
      avgCashOnCash: avgCoC,
      equityMultiple: em,
      yearOneCashFlow: cf1,
      totalEquityInvested: equity,
      exitValue,
      totalReturn,
      annualDebtService: annualDS,
      loanAmount,
      downPayment,
    },
    benchmarks: {
      irr: { value: irr, status: irr >= 0.12 ? "PASS" : irr >= 0.08 ? "WATCH" : "FAIL", target: ">12%" },
      dscr: { value: dscr, status: dscr >= 1.25 ? "PASS" : dscr >= 1.10 ? "WATCH" : "FAIL", target: ">1.25x" },
      cashOnCash: { value: avgCoC, status: avgCoC >= 0.06 ? "PASS" : avgCoC >= 0.03 ? "WATCH" : "FAIL", target: ">6%" },
      equityMultiple: { value: em, status: em >= 2.0 ? "PASS" : em >= 1.5 ? "WATCH" : "FAIL", target: ">2.0x" },
    },
  };
}

// ── PDF extraction via Claude Haiku ────────────────────────────────────────────

const EXTRACTION_PROMPT = `You are an expert commercial real estate underwriter. Extract the key deal parameters from this PDF (typically an Offering Memorandum, broker package, or property listing).

Return ONLY a JSON object with these fields (use null if not stated):
{
  "propertyName": string | null,
  "address": string | null,
  "city": string | null,
  "state": string | null,
  "assetType": "NNN" | "Multifamily" | "SFR",
  "purchasePrice": number | null,
  "annualRent": number | null,
  "noi": number | null,
  "capRate": number | null,
  "buildingSqft": number | null,
  "lotAcres": number | null,
  "units": number | null,
  "yearBuilt": number | null,
  "tenant": string | null,
  "leaseType": string | null,
  "leaseTermRemaining": string | null,
  "summary": string
}

Rules:
- assetType: "NNN" for net-leased single-tenant, "Multifamily" for apartments/MF, "SFR" for single-family rental
- purchasePrice: ASKING price in dollars (not millions, e.g. 2500000 not 2.5)
- annualRent: gross annual rent in dollars
- noi: net operating income in dollars per year
- capRate: as a percentage number (e.g. 6.5 not 0.065)
- summary: 2-3 sentence plain-English description of the deal

Return ONLY the JSON object — no preamble, no markdown fences, no commentary.`;

type ExtractedDeal = {
  propertyName: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  assetType: "NNN" | "Multifamily" | "SFR";
  purchasePrice: number | null;
  annualRent: number | null;
  noi: number | null;
  capRate: number | null;
  buildingSqft: number | null;
  lotAcres: number | null;
  units: number | null;
  yearBuilt: number | null;
  tenant: string | null;
  leaseType: string | null;
  leaseTermRemaining: string | null;
  summary: string;
};

async function extractDealFromPdf(pdfBuffer: Buffer): Promise<ExtractedDeal> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const base64 = pdfBuffer.toString("base64");

  const response = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document",
            source: { type: "base64", media_type: "application/pdf", data: base64 },
          },
          { type: "text", text: EXTRACTION_PROMPT },
        ],
      },
    ],
  });

  const text = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON found in Claude response");
  return JSON.parse(jsonMatch[0]);
}

// ── Supabase analytics logging ─────────────────────────────────────────────────

async function logSubmission(args: {
  filename: string | null;
  pdfSizeBytes: number;
  extracted: ExtractedDeal;
  analysis: ReturnType<typeof analyzeDeal>;
  params: DealParams;
  uploaderEmail: string | null;
  uploaderName: string | null;
  userAgent: string | null;
  referer: string | null;
  ip: string | null;
}) {
  // Need server-side Supabase access. Skip silently if not configured.
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  // analyzeDeal can return { error } on bad inputs — bail silently
  const a = "rawNumbers" in args.analysis ? args.analysis.rawNumbers : null;
  if (!a) return;

  const e = args.extracted;
  const supabase = createClient(url, key);
  const { error } = await supabase.from("pdf_analyzer_submissions").insert({
    filename: args.filename,
    pdf_size_bytes: args.pdfSizeBytes,
    property_name: e.propertyName,
    address: e.address,
    city: e.city,
    state: e.state,
    asset_type: e.assetType,
    tenant: e.tenant,
    lease_type: e.leaseType,
    building_sqft: e.buildingSqft,
    units: e.units,
    year_built: e.yearBuilt,
    purchase_price: e.purchasePrice,
    annual_rent: e.annualRent,
    noi: e.noi,
    stated_cap_rate: e.capRate,
    grade: args.analysis.grade,
    irr: a.irr,
    dscr: a.dscr,
    avg_coc: a.avgCashOnCash,
    equity_multiple: a.equityMultiple,
    yr1_cashflow: a.yearOneCashFlow,
    exit_value: a.exitValue,
    total_return: a.totalReturn,
    down_payment_pct: args.params.downPaymentPct,
    interest_rate: args.params.interestRate,
    hold_period: args.params.holdPeriod,
    uploader_name: args.uploaderName,
    uploader_email: args.uploaderEmail,
    user_agent: args.userAgent,
    referer: args.referer,
    ip: args.ip,
  });

  // Swallow "table doesn't exist" until the migration is run
  if (error && !error.message.includes("does not exist")) {
    console.error("logSubmission insert failed:", error.message);
  }
}

// ── Email notification ─────────────────────────────────────────────────────────

type AnalysisResult = ReturnType<typeof analyzeDeal>;

async function notifyRyan(args: {
  buffer: Buffer;
  filename: string;
  uploaderEmail: string | null;
  uploaderName: string | null;
  extracted: ExtractedDeal;
  analysis: AnalysisResult;
}) {
  if (!process.env.RESEND_API_KEY) return;

  const { buffer, filename, uploaderEmail, uploaderName, extracted, analysis } = args;
  // analyzeDeal can return { error } on bad inputs — bail on that path
  if ("error" in analysis || !analysis.rawNumbers) return;

  const a = analysis.rawNumbers;
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

  const propertyName = extracted.propertyName ?? "Untitled deal";
  const location = [extracted.city, extracted.state].filter(Boolean).join(", ");

  // Clean subject — no brackets, no special chars (those trigger spam filters)
  const subject = `Deal submission: ${propertyName}${location ? ` in ${location}` : ""} (Grade ${analysis.grade})`;

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_") || "deal.pdf";

  // Decide whether to attach the PDF. Big attachments are the #1 spam trigger.
  // Cap at 1.5 MB so most of the time we deliver to the inbox.
  const ATTACH_MAX = 1.5 * 1024 * 1024;
  const tooBigToAttach = buffer.length > ATTACH_MAX;
  const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);

  // Plain-text body (Gmail prefers having both — multipart messages score lower)
  const text = `New deal analyzer submission

Property: ${propertyName}${extracted.address ? `, ${extracted.address}` : ""}${location ? `, ${location}` : ""}
${extracted.tenant ? `Tenant: ${extracted.tenant}\n` : ""}${extracted.leaseType ? `Lease: ${extracted.leaseType}\n` : ""}
Grade: ${analysis.grade}
Purchase price: ${fmt(a.purchasePrice)}
NOI: ${fmt(a.noi)}
Entrance cap: ${pct(a.entranceCap)}
IRR: ${pct(a.irr)}
DSCR: ${a.dscr.toFixed(2)}x
Cash-on-cash: ${pct(a.avgCashOnCash)}
Equity multiple: ${a.equityMultiple.toFixed(2)}x
Year 1 cash flow: ${fmt(a.yearOneCashFlow)}

${uploaderName || uploaderEmail ? `Uploader: ${uploaderName ?? "(no name)"} ${uploaderEmail ? `<${uploaderEmail}>` : ""}` : "Uploader chose to stay anonymous."}

Summary: ${extracted.summary ?? ""}

PDF: ${tooBigToAttach ? `${sizeMB} MB — too large to attach. Reply to this email to request the original.` : "attached"}

Submitted via maxlifedevelopment.com/pdf-analyzer
`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:640px;line-height:1.55;color:#1a1a1a">
      <p style="margin:0 0 16px;font-size:16px">Hi Ryan — a new deal came through your PDF analyzer.</p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:14px">
        <tr><td style="padding:6px 0;color:#666;width:130px">Property</td><td style="padding:6px 0"><strong>${escapeHtml(propertyName)}</strong></td></tr>
        ${extracted.address ? `<tr><td style="padding:6px 0;color:#666">Address</td><td style="padding:6px 0">${escapeHtml(extracted.address)}${location ? `, ${escapeHtml(location)}` : ""}</td></tr>` : ""}
        ${extracted.tenant ? `<tr><td style="padding:6px 0;color:#666">Tenant</td><td style="padding:6px 0">${escapeHtml(extracted.tenant)}</td></tr>` : ""}
        ${extracted.assetType ? `<tr><td style="padding:6px 0;color:#666">Asset type</td><td style="padding:6px 0">${escapeHtml(extracted.assetType)}</td></tr>` : ""}
        ${extracted.leaseType ? `<tr><td style="padding:6px 0;color:#666">Lease</td><td style="padding:6px 0">${escapeHtml(extracted.leaseType)}</td></tr>` : ""}
      </table>

      <div style="background:#f4f4f4;border-radius:8px;padding:16px;margin-bottom:16px">
        <div style="font-size:36px;font-weight:600;margin-bottom:8px">Grade: ${analysis.grade}</div>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:4px 0;color:#666">Purchase price</td><td style="padding:4px 0;text-align:right"><strong>${fmt(a.purchasePrice)}</strong></td></tr>
          <tr><td style="padding:4px 0;color:#666">NOI</td><td style="padding:4px 0;text-align:right">${fmt(a.noi)}</td></tr>
          <tr><td style="padding:4px 0;color:#666">Entrance cap</td><td style="padding:4px 0;text-align:right">${pct(a.entranceCap)}</td></tr>
          <tr><td style="padding:4px 0;color:#666">IRR</td><td style="padding:4px 0;text-align:right"><strong>${pct(a.irr)}</strong></td></tr>
          <tr><td style="padding:4px 0;color:#666">DSCR</td><td style="padding:4px 0;text-align:right">${a.dscr.toFixed(2)}x</td></tr>
          <tr><td style="padding:4px 0;color:#666">Cash-on-cash</td><td style="padding:4px 0;text-align:right">${pct(a.avgCashOnCash)}</td></tr>
          <tr><td style="padding:4px 0;color:#666">Equity multiple</td><td style="padding:4px 0;text-align:right">${a.equityMultiple.toFixed(2)}x</td></tr>
          <tr><td style="padding:4px 0;color:#666">Year 1 cash flow</td><td style="padding:4px 0;text-align:right">${fmt(a.yearOneCashFlow)}</td></tr>
        </table>
      </div>

      ${
        uploaderEmail || uploaderName
          ? `<div style="background:#fff8e6;border:1px solid #f5d68a;border-radius:8px;padding:12px;margin-bottom:16px">
              <div style="font-size:12px;color:#8a6d1a;font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Uploader wants follow-up</div>
              ${uploaderName ? `<div style="margin-top:6px;font-size:14px"><strong>${escapeHtml(uploaderName)}</strong></div>` : ""}
              ${uploaderEmail ? `<div style="margin-top:2px;font-size:14px"><a href="mailto:${escapeHtml(uploaderEmail)}">${escapeHtml(uploaderEmail)}</a> — just hit reply, this email&rsquo;s reply-to is set to them.</div>` : ""}
            </div>`
          : `<div style="color:#888;font-size:13px;margin-bottom:16px;font-style:italic">Uploader chose to stay anonymous (no contact info provided).</div>`
      }

      <div style="background:#f9f9f9;border-radius:8px;padding:12px;font-size:13px;color:#555">
        <div style="font-weight:600;margin-bottom:6px;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#888">Summary from the OM</div>
        ${escapeHtml(extracted.summary ?? "")}
      </div>

      <p style="margin-top:20px;font-size:13px;color:#666">
        ${tooBigToAttach
          ? `<strong>PDF:</strong> ${sizeMB} MB — too large to attach safely. Reply to this email if you need the original file.`
          : `<strong>PDF:</strong> attached (${sizeMB} MB).`}
      </p>

      <hr style="margin:24px 0;border:0;border-top:1px solid #eee" />
      <p style="font-size:11px;color:#999;line-height:1.4">
        This email was sent because someone used the deal analyzer at maxlifedevelopment.com/pdf-analyzer. You set this up yourself — it&rsquo;s a transactional notification, not marketing.
      </p>
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  type Attachment = { filename: string; content: string };
  const attachments: Attachment[] = tooBigToAttach
    ? []
    : [{ filename: safeName, content: buffer.toString("base64") }];

  await resend.emails.send({
    from: NOTIFY_FROM,
    to: NOTIFY_TO,
    replyTo: uploaderEmail ?? undefined,
    subject,
    text,
    html,
    attachments,
    headers: {
      // Mark as transactional — Gmail uses this signal
      "X-Entity-Ref-ID": `pdf-analyzer-${Date.now()}`,
      // Helps Gmail group/thread these correctly
      "List-Id": "MaxLife Deal Analyzer Submissions <pdf-analyzer.maxlifedevelopment.com>",
    },
  });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ── Route handler ──────────────────────────────────────────────────────────────

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function POST(req: NextRequest) {
  let blobUrl: string | undefined;
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json({ error: "Server not configured (ANTHROPIC_API_KEY missing)" }, { status: 500, headers: CORS });
    }

    const body = (await req.json()) as Record<string, unknown>;
    blobUrl = typeof body.blobUrl === "string" ? body.blobUrl : undefined;

    if (!blobUrl) {
      return Response.json({ error: "Missing blobUrl. Upload your PDF first." }, { status: 400, headers: CORS });
    }

    // Fetch the uploaded PDF from Vercel Blob (private store — needs auth)
    const blobResult = await get(blobUrl, { access: "private" });
    if (!blobResult || blobResult.statusCode !== 200 || !blobResult.stream) {
      return Response.json({ error: "Could not fetch uploaded PDF from storage" }, { status: 400, headers: CORS });
    }
    const chunks: Uint8Array[] = [];
    const reader = blobResult.stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) chunks.push(value);
    }
    const buffer = Buffer.concat(chunks);
    if (buffer.length > 25 * 1024 * 1024) {
      return Response.json({ error: "PDF too large (max 25 MB)" }, { status: 400, headers: CORS });
    }

    // Extract deal params from PDF
    const extracted = await extractDealFromPdf(buffer);

    // Apply optional overrides from JSON body
    const num = (key: string) => {
      const v = body[key];
      return v != null && v !== "" ? Number(v) : undefined;
    };

    const purchasePrice = num("purchasePrice") ?? extracted.purchasePrice ?? 0;
    const annualRent = num("annualRent") ?? extracted.annualRent ?? extracted.noi ?? 0;

    if (!purchasePrice) {
      return Response.json({
        extracted,
        error: "Could not detect a purchase price. Please enter it manually below and re-submit.",
      }, { headers: CORS });
    }

    if (!annualRent) {
      return Response.json({
        extracted,
        error: "Could not detect rent or NOI. Please enter annual rent manually below and re-submit.",
      }, { headers: CORS });
    }

    const params: DealParams = {
      purchasePrice,
      annualRent: extracted.assetType === "NNN" ? annualRent : undefined,
      monthlyRentPerUnit: extracted.assetType !== "NNN" && extracted.units
        ? annualRent / 12 / extracted.units
        : undefined,
      units: extracted.units ?? 1,
      vacancyRate: extracted.assetType === "NNN" ? 0 : 5,
      opexRatio: extracted.assetType === "NNN" ? undefined : 35,
      downPaymentPct: num("downPaymentPct") ?? 25,
      interestRate: num("interestRate") ?? 6.75,
      amortization: 30,
      closingCosts: 15000,
      loanOrigFee: 1.0,
      holdPeriod: num("holdPeriod") ?? 10,
      exitCapSpread: num("exitCapSpread") ?? 0.5,
      rentGrowth: 2.0,
      assetType: extracted.assetType,
    };

    const analysis = analyzeDeal(params);

    // Notify Ryan with the original PDF + analysis summary (best-effort, never block the response)
    notifyRyan({
      buffer,
      filename: typeof body.filename === "string" ? body.filename : "deal.pdf",
      uploaderEmail: typeof body.uploaderEmail === "string" ? body.uploaderEmail : null,
      uploaderName: typeof body.uploaderName === "string" ? body.uploaderName : null,
      extracted,
      analysis,
    }).catch((e) => console.error("notifyRyan failed:", e));

    // Log submission to Supabase for analytics (best-effort, never block the response)
    logSubmission({
      filename: typeof body.filename === "string" ? body.filename : null,
      pdfSizeBytes: buffer.length,
      extracted,
      analysis,
      params,
      uploaderEmail: typeof body.uploaderEmail === "string" ? body.uploaderEmail : null,
      uploaderName: typeof body.uploaderName === "string" ? body.uploaderName : null,
      userAgent: req.headers.get("user-agent") ?? null,
      referer: req.headers.get("referer") ?? null,
      ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
    }).catch((e) => console.error("logSubmission failed:", e));

    return Response.json({ extracted, params, analysis }, { headers: CORS });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 500, headers: CORS });
  } finally {
    // Best-effort blob cleanup — don't fail the request if delete fails
    if (blobUrl) {
      try { await del(blobUrl); } catch { /* ignore */ }
    }
  }
}
