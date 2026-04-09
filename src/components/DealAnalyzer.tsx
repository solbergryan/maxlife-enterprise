"use client";

import { useState, useMemo } from "react";

// ── Types ──────────────────────────────────────────────────────────
type AssetType = "NNN" | "Multifamily" | "SFR";

interface Inputs {
  assetType: AssetType;
  purchasePrice: string;
  buildingSF: string;
  units: string;
  // Revenue
  annualRent: string;        // NNN
  monthlyRentPerUnit: string; // MF/SFR
  rentGrowth: string;
  vacancyRate: string;
  // Expenses (MF/SFR)
  opexRatio: string;
  propertyTaxes: string;
  insurance: string;
  repairs: string;
  mgmtPct: string;
  // Financing
  downPaymentPct: string;
  interestRate: string;
  amortization: string;
  closingCosts: string;
  loanOrigFee: string;
  // Hold & Exit
  holdPeriod: string;
  exitCapSpread: string;
}

const DEFAULT_INPUTS: Inputs = {
  assetType: "NNN",
  purchasePrice: "",
  buildingSF: "",
  units: "1",
  annualRent: "",
  monthlyRentPerUnit: "",
  rentGrowth: "2.0",
  vacancyRate: "0",
  opexRatio: "",
  propertyTaxes: "",
  insurance: "",
  repairs: "",
  mgmtPct: "8",
  downPaymentPct: "25",
  interestRate: "6.75",
  amortization: "30",
  closingCosts: "15000",
  loanOrigFee: "1.0",
  holdPeriod: "10",
  exitCapSpread: "0.50",
};

// ── Helpers ────────────────────────────────────────────────────────
function fmt(v: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);
}
function pct(v: number, d = 2): string {
  return (v * 100).toFixed(d) + "%";
}
function p(s: string): number {
  return parseFloat(s) || 0;
}

function calcMonthlyPayment(principal: number, annualRate: number, years: number): number {
  if (principal <= 0 || annualRate <= 0 || years <= 0) return 0;
  const r = annualRate / 12;
  const n = years * 12;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calcLoanBalance(principal: number, annualRate: number, totalYears: number, afterYears: number): number {
  if (principal <= 0 || annualRate <= 0 || totalYears <= 0) return 0;
  const r = annualRate / 12;
  const n = totalYears * 12;
  const k = afterYears * 12;
  const pmt = calcMonthlyPayment(principal, annualRate, totalYears);
  return principal * Math.pow(1 + r, k) - pmt * ((Math.pow(1 + r, k) - 1) / r);
}

function calcIRR(cashFlows: number[], guess = 0.1): number {
  let rate = guess;
  for (let iter = 0; iter < 200; iter++) {
    let npv = 0, dnpv = 0;
    for (let t = 0; t < cashFlows.length; t++) {
      const d = Math.pow(1 + rate, t);
      npv += cashFlows[t] / d;
      dnpv -= t * cashFlows[t] / (d * (1 + rate));
    }
    if (Math.abs(dnpv) < 1e-12) break;
    const newRate = rate - npv / dnpv;
    if (Math.abs(newRate - rate) < 1e-9) return newRate;
    rate = newRate;
  }
  return rate;
}

// ── Scoring ────────────────────────────────────────────────────────
type Grade = "excellent" | "good" | "fair" | "marginal" | "fail";

function scoreIRR(irr: number): { stars: number; grade: Grade; label: string } {
  if (irr >= 0.15) return { stars: 5, grade: "excellent", label: "Exceptional return" };
  if (irr >= 0.12) return { stars: 4, grade: "excellent", label: "Strong return" };
  if (irr >= 0.09) return { stars: 3, grade: "good", label: "Solid return" };
  if (irr >= 0.06) return { stars: 2, grade: "fair", label: "Below target" };
  return { stars: 1, grade: "fail", label: "Insufficient return" };
}

function scoreDSCR(dscr: number): { stars: number; grade: Grade; label: string } {
  if (dscr >= 1.5) return { stars: 5, grade: "excellent", label: "Very strong coverage" };
  if (dscr >= 1.35) return { stars: 4, grade: "good", label: "Strong coverage" };
  if (dscr >= 1.25) return { stars: 3, grade: "good", label: "Meets lender minimum" };
  if (dscr >= 1.10) return { stars: 2, grade: "marginal", label: "Below lender minimum" };
  return { stars: 1, grade: "fail", label: "Negative cash flow risk" };
}

function scoreCoC(coc: number): { stars: number; grade: Grade; label: string } {
  if (coc >= 0.10) return { stars: 5, grade: "excellent", label: "Excellent cash yield" };
  if (coc >= 0.08) return { stars: 4, grade: "good", label: "Strong cash yield" };
  if (coc >= 0.05) return { stars: 3, grade: "good", label: "Acceptable cash yield" };
  if (coc >= 0.02) return { stars: 2, grade: "fair", label: "Low cash yield" };
  return { stars: 1, grade: "fail", label: "Near zero cash flow" };
}

function scoreEM(em: number): { stars: number; grade: Grade; label: string } {
  if (em >= 3.0) return { stars: 5, grade: "excellent", label: "Exceptional wealth creation" };
  if (em >= 2.0) return { stars: 4, grade: "excellent", label: "Doubled your equity" };
  if (em >= 1.5) return { stars: 3, grade: "good", label: "Solid equity growth" };
  if (em >= 1.2) return { stars: 2, grade: "fair", label: "Modest equity growth" };
  return { stars: 1, grade: "fail", label: "Minimal or negative return" };
}

function overallGrade(irr: number, dscr: number, coc: number, em: number): string {
  const avg = (scoreIRR(irr).stars + scoreDSCR(dscr).stars + scoreCoC(coc).stars + scoreEM(em).stars) / 4;
  if (avg >= 4.5) return "A+";
  if (avg >= 4.0) return "A";
  if (avg >= 3.5) return "A-";
  if (avg >= 3.0) return "B+";
  if (avg >= 2.5) return "B";
  if (avg >= 2.0) return "B-";
  if (avg >= 1.5) return "C";
  return "D";
}

// ── Stars component ────────────────────────────────────────────────
function Stars({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <span className="text-gold text-lg tracking-wider">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < count ? "text-gold" : "text-gray-700"}>&#9733;</span>
      ))}
    </span>
  );
}

// ── Traffic light ──────────────────────────────────────────────────
function TrafficLight({ status }: { status: "pass" | "watch" | "fail" }) {
  const colors = {
    pass: "bg-green-500",
    watch: "bg-yellow-500",
    fail: "bg-red-500",
  };
  const labels = { pass: "PASS", watch: "WATCH", fail: "FAIL" };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-bold text-black ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}

// ── Input Field Component (must be outside main component to preserve focus) ──
const INPUT_CLASS = "w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors text-sm";
const LABEL_CLASS = "text-gray-400 text-xs uppercase tracking-wider mb-1 block";

function InputField({ label, value, onChange, placeholder, step, prefix, suffix }: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; step?: string; prefix?: string; suffix?: string;
}) {
  return (
    <div>
      <label className={LABEL_CLASS}>{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">{prefix}</span>}
        <input
          type="number"
          step={step || "any"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${INPUT_CLASS} ${prefix ? "pl-7" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">{suffix}</span>}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────
export default function DealAnalyzer() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [showCashFlows, setShowCashFlows] = useState(false);

  const set = (field: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setInputs(prev => ({ ...prev, [field]: e.target.value }));

  // ── Core calculations ────────────────────────────────────────────
  const analysis = useMemo(() => {
    const price = p(inputs.purchasePrice);
    const holdYrs = Math.max(1, Math.round(p(inputs.holdPeriod)));
    const rateAnn = p(inputs.interestRate) / 100;
    const downPct = p(inputs.downPaymentPct) / 100;
    const amortYrs = p(inputs.amortization);
    const vacRate = p(inputs.vacancyRate) / 100;
    const rentGrowth = p(inputs.rentGrowth) / 100;
    const exitSpread = p(inputs.exitCapSpread) / 100;
    const origFee = p(inputs.loanOrigFee) / 100;
    const closingCosts = p(inputs.closingCosts);
    const units = Math.max(1, Math.round(p(inputs.units)));

    if (price <= 0) return null;

    // Year 1 revenue
    let gpr: number;
    if (inputs.assetType === "NNN") {
      gpr = p(inputs.annualRent);
    } else {
      gpr = p(inputs.monthlyRentPerUnit) * 12 * units;
    }
    if (gpr <= 0) return null;

    const egi1 = gpr * (1 - vacRate);

    // Year 1 OPEX
    let opex1: number;
    if (inputs.assetType === "NNN") {
      opex1 = 0;
    } else if (inputs.opexRatio) {
      opex1 = egi1 * (p(inputs.opexRatio) / 100);
    } else {
      opex1 = p(inputs.propertyTaxes) + p(inputs.insurance) + p(inputs.repairs) +
              egi1 * (p(inputs.mgmtPct) / 100);
    }

    const noi1 = egi1 - opex1;
    const entranceCap = noi1 / price;
    const exitCap = entranceCap + exitSpread;

    // Financing
    const loanAmount = price * (1 - downPct);
    const downPayment = price * downPct;
    const equity = downPayment + closingCosts + loanAmount * origFee;
    const monthlyPmt = calcMonthlyPayment(loanAmount, rateAnn, amortYrs);
    const annualDS = monthlyPmt * 12;

    // Year 1 metrics
    const cf1 = noi1 - annualDS;
    const dscr = annualDS > 0 ? noi1 / annualDS : 0;
    const coc1 = equity > 0 ? cf1 / equity : 0;
    const yoc = noi1 / price;

    // Year-by-year projection
    const cashFlows: number[] = [-equity];
    const yearlyData: { year: number; noi: number; ds: number; cf: number; cumCF: number }[] = [];
    let totalNOI = 0, totalCF = 0, cumCF = 0;

    for (let yr = 1; yr <= holdYrs; yr++) {
      const noiYr = noi1 * Math.pow(1 + rentGrowth, yr - 1);
      const cfYr = noiYr - annualDS;
      totalNOI += noiYr;
      totalCF += cfYr;
      cumCF += cfYr;
      yearlyData.push({ year: yr, noi: noiYr, ds: annualDS, cf: cfYr, cumCF });

      if (yr < holdYrs) {
        cashFlows.push(cfYr);
      } else {
        // Exit year: cash flow + net sale proceeds
        const exitNOI = noi1 * Math.pow(1 + rentGrowth, holdYrs);
        const exitValue = exitCap > 0 ? exitNOI / exitCap : 0;
        const sellingCosts = exitValue * 0.03;
        const loanPayoff = calcLoanBalance(loanAmount, rateAnn, amortYrs, holdYrs);
        const netSaleProceeds = exitValue - sellingCosts - Math.max(0, loanPayoff);
        cashFlows.push(cfYr + netSaleProceeds);

        const totalReturn = totalCF + netSaleProceeds;
        const em = equity > 0 ? (totalCF + netSaleProceeds) / equity : 0;
        const avgCoC = equity > 0 ? (totalCF / holdYrs) / equity : 0;

        let irr = 0;
        try { irr = calcIRR(cashFlows); } catch { irr = 0; }
        if (!isFinite(irr) || isNaN(irr)) irr = 0;

        // Suggested offer for 1.25x DSCR
        const maxADS_125 = noi1 / 1.25;
        const maxMonthly = maxADS_125 / 12;
        let suggestedLoan = 0;
        if (rateAnn > 0 && amortYrs > 0) {
          const r = rateAnn / 12;
          const n = amortYrs * 12;
          suggestedLoan = maxMonthly * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
        }
        const suggestedPrice = suggestedLoan / (1 - downPct);
        const discount = price > 0 ? (price - suggestedPrice) / price : 0;

        // Metrics at suggested price
        const sugDown = suggestedPrice * downPct;
        const sugLoan = suggestedPrice * (1 - downPct);
        const sugEquity = sugDown + closingCosts + sugLoan * origFee;
        const sugMonthlyPmt = calcMonthlyPayment(sugLoan, rateAnn, amortYrs);
        const sugADS = sugMonthlyPmt * 12;
        const sugDSCR = sugADS > 0 ? noi1 / sugADS : 0;
        const sugCap = suggestedPrice > 0 ? noi1 / suggestedPrice : 0;
        const sugCF1 = noi1 - sugADS;
        const sugCoC1 = sugEquity > 0 ? sugCF1 / sugEquity : 0;

        const suggestedMetrics = {
          price: suggestedPrice,
          downPayment: sugDown,
          loanAmount: sugLoan,
          equity: sugEquity,
          monthlyPmt: sugMonthlyPmt,
          annualDS: sugADS,
          dscr: sugDSCR,
          entranceCap: sugCap,
          coc1: sugCoC1,
          cf1: sugCF1,
        };

        return {
          price, equity, loanAmount, downPayment, monthlyPmt, annualDS,
          noi1, egi1, opex1, entranceCap, exitCap, cf1, dscr, coc1, yoc, avgCoC,
          holdYrs, exitNOI, exitValue, sellingCosts, loanPayoff, netSaleProceeds,
          totalNOI, totalCF, totalReturn, em, irr,
          yearlyData,
          suggestedPrice, discount, suggestedMetrics,
          grade: overallGrade(irr, dscr, avgCoC, em),
          scores: {
            irr: scoreIRR(irr),
            dscr: scoreDSCR(dscr),
            coc: scoreCoC(avgCoC),
            em: scoreEM(em),
          },
        };
      }
    }
    return null;
  }, [inputs]);

  // ── Sensitivity matrix ───────────────────────────────────────────
  const sensitivity = useMemo(() => {
    if (!analysis) return null;
    const exitCaps = [-1.0, -0.5, 0, 0.5, 1.0].map(s => analysis.entranceCap + s / 100);
    const growths = [0, 1, 2, 3, 4].map(g => g / 100);
    const grid: { exitCap: number; growth: number; exitValue: number; profit: boolean }[][] = [];

    for (const ec of exitCaps) {
      const row: typeof grid[0] = [];
      for (const g of growths) {
        const exitNOI = analysis.noi1 * Math.pow(1 + g, analysis.holdYrs);
        const ev = ec > 0 ? exitNOI / ec : 0;
        row.push({ exitCap: ec, growth: g, exitValue: ev, profit: ev > analysis.price });
      }
      grid.push(row);
    }
    return { exitCaps, growths, grid };
  }, [analysis]);

  // ── Input helpers ─────────────────────────────────────────────────

  return (
    <div className="space-y-8">
      {/* ── Asset Type Selector ──────────────────────────── */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Property Type</h3>
        <div className="grid grid-cols-3 gap-3">
          {(["NNN", "Multifamily", "SFR"] as AssetType[]).map(type => (
            <button
              key={type}
              onClick={() => setInputs(prev => ({
                ...prev,
                assetType: type,
                vacancyRate: type === "NNN" ? "0" : "5",
              }))}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                inputs.assetType === type
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-dark-border text-gray-400 hover:border-gray-600"
              }`}
            >
              {type === "NNN" ? "Commercial NNN" : type === "Multifamily" ? "Multifamily" : "SFR Rental"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Inputs Grid ──────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Property & Revenue */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Property &amp; Revenue</h3>
          <div className="space-y-4">
            <InputField label="Purchase Price" value={inputs.purchasePrice} onChange={set("purchasePrice")} placeholder="1,000,000" prefix="$" />
            <InputField label="Building SF" value={inputs.buildingSF} onChange={set("buildingSF")} placeholder="7,000" />
            {inputs.assetType === "NNN" ? (
              <InputField label="Annual Rent (NNN)" value={inputs.annualRent} onChange={set("annualRent")} placeholder="60,000" prefix="$" />
            ) : (
              <>
                {inputs.assetType === "Multifamily" && (
                  <InputField label="Number of Units" value={inputs.units} onChange={set("units")} placeholder="10" />
                )}
                <InputField label="Monthly Rent / Unit" value={inputs.monthlyRentPerUnit} onChange={set("monthlyRentPerUnit")} placeholder="1,500" prefix="$" />
              </>
            )}
            <InputField label="Annual Rent Growth" value={inputs.rentGrowth} onChange={set("rentGrowth")} placeholder="2.0" suffix="%" />
            <InputField label="Vacancy Rate" value={inputs.vacancyRate} onChange={set("vacancyRate")} placeholder={inputs.assetType === "NNN" ? "0" : "5"} suffix="%" />
          </div>
        </div>

        {/* Expenses (MF/SFR only) or Financing */}
        {inputs.assetType !== "NNN" ? (
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Operating Expenses</h3>
            <div className="space-y-4">
              <div>
                <label className={LABEL_CLASS}>Expense Method</label>
                <p className="text-gray-500 text-xs mb-3">Enter an expense ratio OR individual line items below</p>
              </div>
              <InputField label="Expense Ratio (% of EGI)" value={inputs.opexRatio} onChange={set("opexRatio")} placeholder="40" suffix="%" />
              <div className="border-t border-dark-border pt-3 mt-3">
                <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Or Line Items</p>
              </div>
              <InputField label="Property Taxes" value={inputs.propertyTaxes} onChange={set("propertyTaxes")} placeholder="4,800" prefix="$" />
              <InputField label="Insurance" value={inputs.insurance} onChange={set("insurance")} placeholder="1,800" prefix="$" />
              <InputField label="Repairs & Maintenance" value={inputs.repairs} onChange={set("repairs")} placeholder="2,400" prefix="$" />
              <InputField label="Management Fee" value={inputs.mgmtPct} onChange={set("mgmtPct")} placeholder="8" suffix="%" />
            </div>
          </div>
        ) : null}

        {/* Financing */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Financing</h3>
          <div className="space-y-4">
            <InputField label="Down Payment" value={inputs.downPaymentPct} onChange={set("downPaymentPct")} placeholder="25" suffix="%" />
            <InputField label="Interest Rate" value={inputs.interestRate} onChange={set("interestRate")} placeholder="6.75" suffix="%" step="0.125" />
            <InputField label="Amortization" value={inputs.amortization} onChange={set("amortization")} placeholder="30" suffix="yrs" />
            <InputField label="Closing Costs" value={inputs.closingCosts} onChange={set("closingCosts")} placeholder="15,000" prefix="$" />
            <InputField label="Loan Origination Fee" value={inputs.loanOrigFee} onChange={set("loanOrigFee")} placeholder="1.0" suffix="%" />
          </div>
        </div>

        {/* Hold & Exit */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Hold Period &amp; Exit</h3>
          <div className="space-y-4">
            <InputField label="Hold Period" value={inputs.holdPeriod} onChange={set("holdPeriod")} placeholder="10" suffix="yrs" />

            {/* Exit Cap Spread — improved UX */}
            <div>
              <label className={LABEL_CLASS}>Exit Market Outlook</label>
              <p className="text-gray-500 text-xs mb-3">
                When you sell, will the market be hotter, the same, or cooler than today?
                This determines your exit cap rate and sale price.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {([
                  { label: "Hotter Market", value: "-0.50", desc: "Prices rise", color: "text-green-400" },
                  { label: "Same Market", value: "0", desc: "Prices hold", color: "text-gold" },
                  { label: "Cooler Market", value: "0.50", desc: "Prices drop", color: "text-red-400" },
                ] as const).map(preset => (
                  <button
                    key={preset.value}
                    onClick={() => setInputs(prev => ({ ...prev, exitCapSpread: preset.value }))}
                    className={`py-2.5 px-2 rounded-lg border text-center transition-all ${
                      inputs.exitCapSpread === preset.value
                        ? "border-gold bg-gold/10"
                        : "border-dark-border hover:border-gray-600"
                    }`}
                  >
                    <span className={`text-xs font-semibold block ${inputs.exitCapSpread === preset.value ? "text-gold" : preset.color}`}>
                      {preset.label}
                    </span>
                    <span className="text-gray-600 text-xs">{preset.desc}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <label className="text-gray-500 text-xs whitespace-nowrap">Custom spread:</label>
                <div className="relative flex-1">
                  <input
                    type="number"
                    step="0.25"
                    placeholder="0.50"
                    value={inputs.exitCapSpread}
                    onChange={set("exitCapSpread")}
                    className={`${INPUT_CLASS} pr-8`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
                </div>
              </div>
            </div>

            {/* Live exit cap preview */}
            {(() => {
              const price = p(inputs.purchasePrice);
              const rent = inputs.assetType === "NNN" ? p(inputs.annualRent) : p(inputs.monthlyRentPerUnit) * 12 * Math.max(1, Math.round(p(inputs.units)));
              const vac = p(inputs.vacancyRate) / 100;
              const egi = rent * (1 - vac);
              const noi = inputs.assetType === "NNN" ? egi : (inputs.opexRatio ? egi * (1 - p(inputs.opexRatio) / 100) : egi - p(inputs.propertyTaxes) - p(inputs.insurance) - p(inputs.repairs) - egi * (p(inputs.mgmtPct) / 100));
              const eCap = price > 0 && noi > 0 ? noi / price : 0;
              const spread = p(inputs.exitCapSpread) / 100;
              const xCap = eCap + spread;
              if (eCap <= 0) return null;
              return (
                <div className="bg-dark/50 border border-dark-border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Your entrance cap rate</span>
                    <span className="text-white font-medium">{(eCap * 100).toFixed(2)}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Spread at exit</span>
                    <span className={`font-medium ${spread > 0 ? "text-red-400" : spread < 0 ? "text-green-400" : "text-gold"}`}>
                      {spread >= 0 ? "+" : ""}{(spread * 100).toFixed(2)}%
                    </span>
                  </div>
                  <div className="border-t border-dark-border pt-2 flex items-center justify-between text-sm">
                    <span className="text-white font-semibold">Exit cap rate</span>
                    <span className="text-gold font-bold text-lg">{(xCap * 100).toFixed(2)}%</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {spread > 0
                      ? "Conservative — you assume the market cools and buyers pay less per dollar of income. This is the safer assumption most lenders and institutional investors use."
                      : spread < 0
                      ? "Aggressive — you assume the market heats up and buyers pay more per dollar of income. This boosts your projected returns but carries more risk."
                      : "Flat — you assume market conditions stay the same. The property sells at the same cap rate you bought it at."}
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* ── Results ──────────────────────────────────────── */}
      {analysis && (
        <>
          {/* Deal Grade */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Overall Deal Grade</p>
            <p className={`text-6xl font-black ${
              analysis.grade.startsWith("A") ? "text-green-400" :
              analysis.grade.startsWith("B") ? "text-gold" :
              analysis.grade.startsWith("C") ? "text-yellow-500" : "text-red-400"
            }`}>{analysis.grade}</p>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {([
              { label: "IRR", value: pct(analysis.irr), score: analysis.scores.irr },
              { label: "DSCR", value: analysis.dscr.toFixed(2) + "x", score: analysis.scores.dscr },
              { label: "Cash-on-Cash", value: pct(analysis.avgCoC), score: analysis.scores.coc },
              { label: "Equity Multiple", value: analysis.em.toFixed(2) + "x", score: analysis.scores.em },
            ] as const).map(item => (
              <div key={item.label} className="bg-dark-card border border-dark-border rounded-xl p-5 text-center">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className={`text-3xl font-bold mb-2 ${
                  item.score.grade === "excellent" || item.score.grade === "good" ? "text-green-400" :
                  item.score.grade === "fair" ? "text-gold" :
                  item.score.grade === "marginal" ? "text-yellow-500" : "text-red-400"
                }`}>{item.value}</p>
                <Stars count={item.score.stars} />
                <p className="text-gray-500 text-xs mt-1">{item.score.label}</p>
              </div>
            ))}
          </div>

          {/* Key Metrics Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Income & NOI */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Income &amp; NOI</h4>
              <dl className="space-y-3 text-sm">
                {[
                  ["Year 1 EGI", fmt(analysis.egi1)],
                  ["Year 1 OPEX", fmt(analysis.opex1)],
                  ["Year 1 NOI", fmt(analysis.noi1)],
                  ["Entrance Cap Rate", pct(analysis.entranceCap)],
                  ["Yield on Cost", pct(analysis.yoc)],
                  [`${analysis.holdYrs}-Yr Total NOI`, fmt(analysis.totalNOI)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt className="text-gray-400">{k}</dt>
                    <dd className="text-white font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Financing */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Financing</h4>
              <dl className="space-y-3 text-sm">
                {[
                  ["Purchase Price", fmt(analysis.price)],
                  ["Down Payment", fmt(analysis.downPayment)],
                  ["Total Equity Invested", fmt(analysis.equity)],
                  ["Loan Amount", fmt(analysis.loanAmount)],
                  ["Monthly Payment", fmt(analysis.monthlyPmt)],
                  ["Annual Debt Service", fmt(analysis.annualDS)],
                  ["DSCR", analysis.dscr.toFixed(2) + "x"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt className="text-gray-400">{k}</dt>
                    <dd className="text-white font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Exit & Returns */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Exit &amp; Returns</h4>
              <dl className="space-y-3 text-sm">
                {[
                  ["Exit Cap Rate", pct(analysis.exitCap)],
                  ["Exit Year NOI", fmt(analysis.exitNOI)],
                  ["Exit Value", fmt(analysis.exitValue)],
                  ["Selling Costs (3%)", fmt(analysis.sellingCosts)],
                  ["Loan Payoff", fmt(analysis.loanPayoff)],
                  ["Net Sale Proceeds", fmt(analysis.netSaleProceeds)],
                  ["Total Profit", fmt(analysis.totalReturn)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <dt className="text-gray-400">{k}</dt>
                    <dd className="text-white font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Traffic Light Benchmarks */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h4 className="text-white font-semibold mb-4">Benchmark Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-border text-gray-400 text-xs uppercase">
                    <th className="text-left py-3 pr-4">Metric</th>
                    <th className="text-right py-3 px-4">Your Deal</th>
                    <th className="text-left py-3 px-4">Benchmark</th>
                    <th className="text-center py-3 px-4">Status</th>
                    <th className="text-left py-3 pl-4">Insight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-border">
                  {[
                    {
                      metric: "IRR",
                      value: pct(analysis.irr),
                      bench: "> 12% strong",
                      status: analysis.irr >= 0.12 ? "pass" as const : analysis.irr >= 0.08 ? "watch" as const : "fail" as const,
                      insight: analysis.irr >= 0.12 ? "Strong annualized return" : analysis.irr >= 0.08 ? "Moderate return" : "Below target for illiquid real estate",
                    },
                    {
                      metric: "DSCR",
                      value: analysis.dscr.toFixed(2) + "x",
                      bench: "> 1.25x lender min",
                      status: analysis.dscr >= 1.25 ? "pass" as const : analysis.dscr >= 1.10 ? "watch" as const : "fail" as const,
                      insight: analysis.dscr >= 1.25 ? "Meets lender requirements" : "Below lender minimum — refinancing risk",
                    },
                    {
                      metric: "Cash-on-Cash",
                      value: pct(analysis.avgCoC),
                      bench: "> 6% target",
                      status: analysis.avgCoC >= 0.06 ? "pass" as const : analysis.avgCoC >= 0.03 ? "watch" as const : "fail" as const,
                      insight: analysis.avgCoC >= 0.06 ? "Good annual cash yield" : "Low cash yield — appreciation play",
                    },
                    {
                      metric: "Equity Multiple",
                      value: analysis.em.toFixed(2) + "x",
                      bench: "> 2.0x strong",
                      status: analysis.em >= 2.0 ? "pass" as const : analysis.em >= 1.5 ? "watch" as const : "fail" as const,
                      insight: analysis.em >= 2.0 ? "Doubled equity or better" : "Modest total return",
                    },
                    {
                      metric: "Yield on Cost vs Exit Cap",
                      value: pct(analysis.yoc),
                      bench: pct(analysis.exitCap) + " exit cap",
                      status: analysis.yoc >= analysis.exitCap ? "pass" as const : analysis.yoc >= analysis.exitCap * 0.9 ? "watch" as const : "fail" as const,
                      insight: analysis.yoc >= analysis.exitCap ? "Buying below exit cap — good basis" : "Buying above exit cap — assumes compression",
                    },
                  ].map(row => (
                    <tr key={row.metric}>
                      <td className="py-3 pr-4 text-white font-medium">{row.metric}</td>
                      <td className="py-3 px-4 text-right text-white">{row.value}</td>
                      <td className="py-3 px-4 text-gray-400">{row.bench}</td>
                      <td className="py-3 px-4 text-center"><TrafficLight status={row.status} /></td>
                      <td className="py-3 pl-4 text-gray-500">{row.insight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Suggested Offer Price — Full Scorecard */}
          {analysis.suggestedPrice > 0 && analysis.suggestedPrice < analysis.price && (
            <div className="bg-dark-card border border-gold/30 rounded-xl p-6 space-y-6">
              <div>
                <h4 className="text-gold font-semibold text-lg mb-1">Suggested Offer Price</h4>
                <p className="text-gray-400 text-sm">
                  What to pay for this to be a great deal — backed into from Year 1 NOI and your financing terms so the deal meets a 1.25x DSCR lender requirement on day one.
                </p>
              </div>

              {/* Price comparison cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-dark rounded-lg p-4 text-center">
                  <p className="text-gold text-2xl font-bold">{fmt(analysis.suggestedPrice)}</p>
                  <p className="text-gray-500 text-xs mt-1">Suggested Price</p>
                  <p className="text-gray-600 text-xs">at 1.25x DSCR</p>
                </div>
                <div className="bg-dark rounded-lg p-4 text-center">
                  <p className="text-white text-2xl font-bold">{fmt(analysis.price)}</p>
                  <p className="text-gray-500 text-xs mt-1">Current Asking Price</p>
                </div>
                <div className="bg-dark rounded-lg p-4 text-center">
                  <p className="text-green-400 text-2xl font-bold">{fmt(analysis.price - analysis.suggestedPrice)}</p>
                  <p className="text-gray-500 text-xs mt-1">You Save</p>
                </div>
                <div className="bg-dark rounded-lg p-4 text-center">
                  <p className="text-green-400 text-2xl font-bold">{(analysis.discount * 100).toFixed(1)}%</p>
                  <p className="text-gray-500 text-xs mt-1">Discount Off Asking</p>
                </div>
              </div>

              {/* Deal Metrics at Suggested Price */}
              <div>
                <h5 className="text-white font-semibold mb-3">Deal Metrics at Suggested Price</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-dark-border text-gray-400 text-xs uppercase">
                        <th className="text-left py-3 pr-4">Metric</th>
                        <th className="text-right py-3 px-4">At Suggested</th>
                        <th className="text-right py-3 px-4">vs Current</th>
                        <th className="text-center py-3 px-4">Status</th>
                        <th className="text-left py-3 pl-4">What This Means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-dark-border">
                      <tr>
                        <td className="py-3 pr-4 text-white font-medium">DSCR (Year 1)</td>
                        <td className="py-3 px-4 text-right text-white">{analysis.suggestedMetrics.dscr.toFixed(2)}x</td>
                        <td className="py-3 px-4 text-right text-green-400">+{(analysis.suggestedMetrics.dscr - analysis.dscr).toFixed(2)}x</td>
                        <td className="py-3 px-4 text-center"><TrafficLight status="pass" /></td>
                        <td className="py-3 pl-4 text-gray-500">Bank-ready — meets standard lender minimum</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-white font-medium">Entrance Cap Rate</td>
                        <td className="py-3 px-4 text-right text-white">{pct(analysis.suggestedMetrics.entranceCap)}</td>
                        <td className="py-3 px-4 text-right text-green-400">+{pct(analysis.suggestedMetrics.entranceCap - analysis.entranceCap)}</td>
                        <td className="py-3 px-4 text-center"><TrafficLight status="pass" /></td>
                        <td className="py-3 pl-4 text-gray-500">Higher yield = more income per dollar invested</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-white font-medium">Year 1 Cash-on-Cash</td>
                        <td className="py-3 px-4 text-right text-white">{pct(analysis.suggestedMetrics.coc1)}</td>
                        <td className="py-3 px-4 text-right text-green-400">+{pct(analysis.suggestedMetrics.coc1 - analysis.coc1)}</td>
                        <td className="py-3 px-4 text-center">
                          <TrafficLight status={analysis.suggestedMetrics.coc1 >= 0.06 ? "pass" : analysis.suggestedMetrics.coc1 >= 0.03 ? "watch" : "fail"} />
                        </td>
                        <td className="py-3 pl-4 text-gray-500">
                          {analysis.suggestedMetrics.coc1 >= 0.06 ? "Strong first-year cash yield" : "Modest income — grows with rent bumps"}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-white font-medium">Down Payment</td>
                        <td className="py-3 px-4 text-right text-white">{fmt(analysis.suggestedMetrics.downPayment)}</td>
                        <td className="py-3 px-4 text-right text-green-400">{fmt(analysis.suggestedMetrics.downPayment - analysis.downPayment)} less</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold text-green-400 bg-green-400/10">SAVINGS</span>
                        </td>
                        <td className="py-3 pl-4 text-gray-500">
                          {fmt(analysis.suggestedMetrics.downPayment)} down + {fmt(p(inputs.closingCosts) + analysis.suggestedMetrics.loanAmount * (p(inputs.loanOrigFee) / 100))} closing = {fmt(analysis.suggestedMetrics.equity)} total cash to close
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-white font-medium">Loan Amount</td>
                        <td className="py-3 px-4 text-right text-white">{fmt(analysis.suggestedMetrics.loanAmount)}</td>
                        <td className="py-3 px-4 text-right text-green-400">{fmt(analysis.suggestedMetrics.loanAmount - analysis.loanAmount)}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center text-xs text-gray-400">{fmt(analysis.suggestedMetrics.monthlyPmt)}/mo</span>
                        </td>
                        <td className="py-3 pl-4 text-gray-500">
                          {fmt(analysis.suggestedMetrics.loanAmount)} loan at {inputs.interestRate}% = {fmt(analysis.suggestedMetrics.monthlyPmt)}/mo debt service
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary callout */}
              <div className="bg-gold/5 border border-gold/20 rounded-lg p-4">
                <p className="text-gold text-sm font-medium">
                  Offer {fmt(analysis.suggestedPrice)} ({(analysis.discount * 100).toFixed(1)}% below asking) to hit 1.25x DSCR.
                  You&apos;d need {fmt(analysis.suggestedMetrics.downPayment)} down vs {fmt(analysis.downPayment)} today — saving {fmt(analysis.downPayment - analysis.suggestedMetrics.downPayment)} in equity.
                  Monthly payment drops from {fmt(analysis.monthlyPmt)} to {fmt(analysis.suggestedMetrics.monthlyPmt)}.
                </p>
              </div>
            </div>
          )}

          {/* Sensitivity Matrix */}
          {sensitivity && (
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h4 className="text-white font-semibold mb-2">Sensitivity Matrix</h4>
              <p className="text-gray-500 text-xs mb-4">Exit value at different cap rate and NOI growth combinations</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-3 text-gray-400 text-xs">Exit Cap / Growth</th>
                      {sensitivity.growths.map(g => (
                        <th key={g} className="text-right py-2 px-3 text-gray-400 text-xs">{(g * 100).toFixed(0)}% Growth</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-border">
                    {sensitivity.grid.map((row, i) => (
                      <tr key={i}>
                        <td className="py-2 px-3 text-gray-400 text-xs">{pct(sensitivity.exitCaps[i])}</td>
                        {row.map((cell, j) => (
                          <td key={j} className={`py-2 px-3 text-right text-xs font-medium ${
                            cell.profit ? "text-green-400" : "text-red-400"
                          }`}>
                            {fmt(cell.exitValue)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-xs mt-3">Green = exit value exceeds purchase price. Red = exit value below purchase price.</p>
            </div>
          )}

          {/* Cash Flow Table */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Year-by-Year Cash Flows</h4>
              <button
                onClick={() => setShowCashFlows(!showCashFlows)}
                className="text-gold text-sm hover:underline"
              >
                {showCashFlows ? "Hide" : "Show"} Table
              </button>
            </div>
            {showCashFlows && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-dark-border text-gray-400 text-xs uppercase">
                      <th className="text-left py-2 px-3">Year</th>
                      <th className="text-right py-2 px-3">NOI</th>
                      <th className="text-right py-2 px-3">Debt Service</th>
                      <th className="text-right py-2 px-3">Cash Flow</th>
                      <th className="text-right py-2 px-3">Cumulative CF</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-border">
                    {analysis.yearlyData.map(yr => (
                      <tr key={yr.year} className={yr.year === analysis.holdYrs ? "bg-gold/5" : ""}>
                        <td className="py-2 px-3 text-white">{yr.year}{yr.year === analysis.holdYrs ? " (Exit)" : ""}</td>
                        <td className="py-2 px-3 text-right text-white">{fmt(yr.noi)}</td>
                        <td className="py-2 px-3 text-right text-gray-400">{fmt(yr.ds)}</td>
                        <td className={`py-2 px-3 text-right font-medium ${yr.cf >= 0 ? "text-green-400" : "text-red-400"}`}>
                          {fmt(yr.cf)}
                        </td>
                        <td className={`py-2 px-3 text-right ${yr.cumCF >= 0 ? "text-green-400" : "text-red-400"}`}>
                          {fmt(yr.cumCF)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Glossary */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h4 className="text-white font-semibold mb-4">Metric Glossary</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {[
                ["IRR", "Internal Rate of Return — the annualized return on every dollar you invest, accounting for timing of cash flows."],
                ["Equity Multiple", "Total money returned divided by total money invested. 2.0x = you doubled your money."],
                ["Cash-on-Cash", "Annual cash flow as a percentage of your invested equity. Measures what the property pays you now."],
                ["DSCR", "Debt Service Coverage Ratio — how many times NOI covers the mortgage. Lenders require 1.25x minimum."],
                ["Cap Rate", "NOI divided by property value. The return assuming all-cash purchase. Lower cap = higher price."],
                ["NOI", "Net Operating Income — rent minus operating expenses, before mortgage payments."],
                ["Yield on Cost", "Year 1 NOI divided by purchase price. The cap rate you created for yourself as a buyer."],
                ["Exit Cap", "The assumed cap rate when you sell. Higher exit cap = lower sale price (conservative)."],
              ].map(([term, def]) => (
                <div key={term} className="bg-dark/50 rounded-lg p-3">
                  <p className="text-gold font-medium mb-1">{term}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-600 text-xs text-center">
            For informational and educational purposes only. Not financial or investment advice.
            Consult a licensed professional before making investment decisions.
          </p>
        </>
      )}

      {/* No results state */}
      {!analysis && (
        <div className="bg-dark-card border border-dark-border rounded-xl p-12 text-center">
          <div className="text-gray-600 text-5xl mb-4">&#9889;</div>
          <p className="text-gray-400 text-lg mb-2">Enter your deal details above</p>
          <p className="text-gray-600 text-sm">
            Fill in the purchase price and rent to see a full investment analysis with deal scoring, cash flow projections, and sensitivity analysis.
          </p>
        </div>
      )}
    </div>
  );
}
