"use client";
import { useState, useMemo, useCallback } from "react";
import {
  calcBuyer, calcOwnerTitlePremium, calcLoanTitlePremium,
  fmt, BUYER_LOAN_TYPES,
} from "@/components/net-sheet/calcEngine";
import { generateBuyerPDF } from "@/components/net-sheet/pdfGenerator";
import EmailNetSheetButton from "@/components/leads/EmailNetSheetButton";

// ─── Input Components ───
function CurrencyInput({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <span className="px-3 py-2 bg-blue-50 text-blue-600 font-semibold text-sm border-r border-gray-300">$</span>
        <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800" placeholder={placeholder || "0"}
          value={value === 0 ? "" : value.toLocaleString()}
          onChange={(e) => { const r = e.target.value.replace(/[^0-9.]/g, ""); onChange(r === "" ? 0 : parseFloat(r)); }} />
      </div>
    </div>
  );
}

function PctOrDollarInput({ label, value, isPct, onValueChange, onModeChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <button onClick={() => onModeChange(true)} className={`px-3 py-2 text-sm font-semibold border-r border-gray-300 transition-colors ${isPct ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}>%</button>
        <button onClick={() => onModeChange(false)} className={`px-3 py-2 text-sm font-semibold border-r border-gray-300 transition-colors ${!isPct ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}>$</button>
        <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800"
          value={value === 0 ? "" : value}
          onChange={(e) => { const r = e.target.value.replace(/[^0-9.]/g, ""); onValueChange(r === "" ? 0 : parseFloat(r)); }} />
      </div>
    </div>
  );
}

// ─── Donut Chart ───
function DonutChart({ data, size = 200 }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) return null;
  const cx = size / 2, cy = size / 2, r = size * 0.38, strokeWidth = size * 0.18;
  let cumulative = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.filter(d => d.value > 0).map((d, i) => {
        const pct = d.value / total;
        const dashArray = 2 * Math.PI * r;
        const dashOffset = dashArray * (1 - pct);
        const rotation = cumulative * 360 - 90;
        cumulative += pct;
        return (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={strokeWidth}
            strokeDasharray={dashArray} strokeDashoffset={dashOffset}
            transform={`rotate(${rotation} ${cx} ${cy})`}
            style={{ transition: "all 0.5s ease" }} />
        );
      })}
      <circle cx={cx} cy={cy} r={r - strokeWidth / 2 + 1} fill="white" />
    </svg>
  );
}

function ResultCard({ title, amount, items, colors }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 mb-4">{fmt(amount)}</p>
      <div className="flex items-center gap-6">
        <DonutChart data={items.map((it, i) => ({ value: it.value, color: colors[i % colors.length] }))} size={160} />
        <div className="flex-1 space-y-2">
          {items.filter(it => it.value > 0).map((it, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: colors[i % colors.length] }}></span>
              <span className="text-gray-600 flex-1">{it.label}</span>
              <span className="font-semibold text-gray-800">{fmt(it.value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailSection({ title, items }) {
  return (
    <div className="mb-5">
      <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-2 border-b border-gray-200 pb-1">{title}</h4>
      {items.map((it, i) => (
        <div key={i} className="flex justify-between py-1 text-sm">
          <span className="text-gray-600">{it.label}</span>
          <span className="font-medium text-gray-800">{typeof it.value === "number" ? fmt(it.value) : it.value}</span>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════
// BUYER ESTIMATE COMPONENT
// ═══════════════════════════════════════════════════
export default function BuyerEstimate() {
  const [loanType, setLoanType] = useState("conventional");
  const [homePrice, setHomePrice] = useState(0);
  const [downPmt, setDownPmt] = useState(10);
  const [downPmtIsPct, setDownPmtIsPct] = useState(true);
  const [interestRate, setInterestRate] = useState(6.375);
  const [termYears, setTermYears] = useState(30);
  const [buyerBrokerFee, setBuyerBrokerFee] = useState(0);
  const [buyerBrokerIsPct, setBuyerBrokerIsPct] = useState(true);
  const [sellerConcession, setSellerConcession] = useState(0);
  const [sellerConcessionIsPct, setSellerConcessionIsPct] = useState(true);
  const [hazardIns, setHazardIns] = useState(1.5);
  const [hazardInsIsPct, setHazardInsIsPct] = useState(true);
  const [reTax, setReTax] = useState(1);
  const [reTaxIsPct, setReTaxIsPct] = useState(true);
  const [hoaMonthly, setHoaMonthly] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [computed, setComputed] = useState(false);

  const calc = useMemo(() => {
    if (homePrice <= 0) return null;
    return calcBuyer({
      homePrice, downPmt, downPmtIsPct, interestRate, termYears, loanType,
      buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct,
      hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly,
    });
  }, [homePrice, downPmt, downPmtIsPct, interestRate, termYears, loanType, hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly, buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct]);

  const handleCompute = () => setComputed(true);

  const handlePDF = useCallback(() => {
    if (!calc) return;
    generateBuyerPDF(homePrice, loanType, calc, {
      downPmt, downPmtIsPct, interestRate, termYears,
      buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct,
      hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly,
    });
  }, [calc, homePrice, loanType, downPmt, downPmtIsPct, interestRate, termYears, buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct, hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly]);

  const COLORS_MONTHLY = ["#5E81C1", "#35AB49", "#FDB415", "#BF6A00"];
  const COLORS_BTC = ["#5E81C1", "#53f400", "#35AB49", "#FDB415", "#d00000", "#BF6A00"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="bg-gradient-to-r from-red-400 to-orange-300 h-1.5"></div>
      <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">B</div>
          <div>
            <span className="text-xl font-bold text-gray-800">BuyerEstimate</span>
            <span className="ml-2 text-xs font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">PRO</span>
          </div>
        </div>
        <span className="text-sm text-gray-400">Brevard County, FL</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* ─── FORM ─── */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Buyer Estimate</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Loan Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
                value={loanType} onChange={(e) => { setLoanType(e.target.value); setComputed(false); }}>
                {BUYER_LOAN_TYPES.map(lt => <option key={lt.value} value={lt.value}>{lt.label}</option>)}
              </select>
            </div>
            <CurrencyInput label="Home Price" value={homePrice} onChange={(v) => { setHomePrice(v); setComputed(false); }} placeholder="Required" />
            <PctOrDollarInput label="Down Payment" value={downPmt} isPct={downPmtIsPct} onValueChange={(v) => { setDownPmt(v); setComputed(false); }} onModeChange={(p) => setDownPmtIsPct(p)} />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Interest Rate</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                <span className="px-3 py-2 bg-blue-50 text-blue-600 font-semibold text-sm border-r border-gray-300">%</span>
                <input type="text" className="flex-1 px-3 py-2 outline-none text-gray-800" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0); setComputed(false); }} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Term (Years)</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none" value={termYears} onChange={(e) => { setTermYears(parseInt(e.target.value)); setComputed(false); }}>
                <option value={30}>30</option>
                <option value={25}>25</option>
                <option value={20}>20</option>
                <option value={15}>15</option>
                <option value={10}>10</option>
              </select>
            </div>
            <PctOrDollarInput label="Buyer Broker Fee" value={buyerBrokerFee} isPct={buyerBrokerIsPct} onValueChange={(v) => { setBuyerBrokerFee(v); setComputed(false); }} onModeChange={(p) => setBuyerBrokerIsPct(p)} />
            <PctOrDollarInput label="Seller Concession" value={sellerConcession} isPct={sellerConcessionIsPct} onValueChange={(v) => { setSellerConcession(v); setComputed(false); }} onModeChange={(p) => setSellerConcessionIsPct(p)} />
            <PctOrDollarInput label="Hazard Insurance" value={hazardIns} isPct={hazardInsIsPct} onValueChange={(v) => { setHazardIns(v); setComputed(false); }} onModeChange={(p) => setHazardInsIsPct(p)} />
            <PctOrDollarInput label="RE Tax" value={reTax} isPct={reTaxIsPct} onValueChange={(v) => { setReTax(v); setComputed(false); }} onModeChange={(p) => setReTaxIsPct(p)} />
            <CurrencyInput label="HOA (Monthly)" value={hoaMonthly} onChange={(v) => { setHoaMonthly(v); setComputed(false); }} />
            <button onClick={handleCompute} disabled={homePrice <= 0}
              className="w-full mt-4 py-3 rounded-xl font-bold text-white text-lg transition-all bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed">
              COMPUTE
            </button>
          </div>
        </div>

        {/* ─── RESULTS ─── */}
        <div className="flex-1 min-w-0">
          {(!computed || !calc) ? (
            <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
              <p className="text-gray-400 text-lg">Enter a home price and hit <span className="font-bold text-blue-500">COMPUTE</span></p>
            </div>
          ) : (
            <>
              <ResultCard title="Monthly Payment" amount={calc.monthlyTotal}
                items={[
                  { label: "Principal & Interest", value: calc.monthlyPI },
                  { label: "Hazard Insurance", value: calc.monthlyInsurance },
                  { label: "Property Tax", value: calc.monthlyTax },
                  { label: "HOA", value: calc.monthlyHOA },
                ]}
                colors={COLORS_MONTHLY} />

              <ResultCard title="Bring to Close" amount={calc.bringToClose}
                items={[
                  { label: "Down Payment", value: calc.downDollar },
                  { label: "Prepaid Costs", value: calc.totalPrepaid },
                  { label: "Title Fees", value: calc.totalTitleFees },
                  { label: "Lender Fees", value: calc.totalLenderFees },
                  { label: "Other Fees", value: calc.totalOtherFees },
                  ...(calc.specialFee > 0 ? [{ label: calc.specialFeeLabel, value: calc.specialFee }] : []),
                  ...(calc.brokerDollar > 0 ? [{ label: "Buyer Broker Fee", value: calc.brokerDollar }] : []),
                  ...(calc.concessionDollar > 0 ? [{ label: "Seller Concession (credit)", value: -calc.concessionDollar }] : []),
                ]}
                colors={COLORS_BTC} />

              {/* PDF Download Button */}
              <button onClick={handlePDF}
                className="w-full py-3 bg-white rounded-xl shadow text-red-600 font-semibold hover:bg-red-50 transition-colors mb-4 flex items-center justify-center gap-2 border border-red-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                Download PDF
              </button>

              {/* Email lead magnet */}
              <div className="mb-4 flex gap-3">
                <EmailNetSheetButton
                  side="buyer"
                  salesPrice={homePrice}
                  disabled={!calc}
                  buildImage={() =>
                    generateBuyerPDF(homePrice, loanType, calc, {
                      downPmt, downPmtIsPct, interestRate, termYears,
                      buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct,
                      hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly,
                    }, { skipPrint: true })
                  }
                  metadata={{ loanType, downPmt, interestRate, termYears, buyerBrokerFee, hoaMonthly }}
                />
              </div>

              <button onClick={() => setShowDetail(!showDetail)}
                className="w-full py-3 bg-white rounded-xl shadow text-blue-600 font-semibold hover:bg-blue-50 transition-colors mb-4">
                {showDetail ? "Hide" : "Show"} Detailed Closing Costs
              </button>

              {showDetail && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Closing Costs</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    Loan Type: <span className="font-semibold text-gray-700">{BUYER_LOAN_TYPES.find(l => l.value === loanType)?.label}</span>
                    {" | "}Loan Amount: <span className="font-semibold text-gray-700">{fmt(calc.loanAmount)}</span>
                  </div>
                  <DetailSection title="Prepaid Costs" items={[
                    { label: `Hazard Insurance (${calc.cc.prepaid.monthsInsurance} mo)`, value: calc.prepaidInsurance },
                    { label: `Property Tax (${calc.cc.prepaid.monthsTaxes} mo)`, value: calc.prepaidTax },
                    { label: `Prepaid Interest (${calc.cc.prepaid.daysInterest} days)`, value: calc.prepaidInterest },
                  ]} />
                  <DetailSection title="Title Fees" items={[
                    { label: "Loan Title Policy (simo rate)", value: calc.loanTitle },
                    { label: "Title Search Fee", value: calc.searchFee },
                    { label: "Title Endorsement (form 9)", value: calc.titleEndForm9 },
                    { label: "Title Endorsement (form 9.2)", value: calc.titleEndForm92 },
                    { label: "Closing Fee", value: calc.cc.titleFees.closingFee },
                    { label: "Tax Service Fee", value: calc.cc.titleFees.taxServiceFee },
                    { label: "Flood Cert.", value: calc.cc.titleFees.floodCert },
                    { label: "Title Endorsement (8.1)", value: calc.cc.titleFees.titleEndorsement81 },
                  ].filter(it => it.value > 0)} />
                  <DetailSection title="Lender Fees" items={[
                    { label: `Origination Fee (${calc.cc.lenderFees.originationPct}%)`, value: calc.originationFee },
                    { label: "Termite Inspection", value: calc.cc.lenderFees.termiteInspection },
                    { label: "Underwriting", value: calc.cc.lenderFees.underwriting },
                    { label: "Appraisal", value: calc.cc.lenderFees.appraisal },
                    { label: "Credit Report", value: calc.cc.lenderFees.creditReport },
                    { label: "Survey", value: calc.cc.lenderFees.survey },
                  ].filter(it => it.value > 0)} />
                  <DetailSection title="Other Fees" items={[
                    ...(calc.docStampAmount > 0 ? [{ label: "Documentary Stamp Tax (Notes)", value: calc.docStampAmount }] : []),
                    ...(calc.intangibleAmount > 0 ? [{ label: "Intangible Tax", value: calc.intangibleAmount }] : []),
                    ...(calc.proratedTaxAmount > 0 ? [{ label: "Prorated Tax", value: calc.proratedTaxAmount }] : []),
                    { label: "Recording Fee (Deed)", value: calc.cc.otherFees.recordingDeed },
                    ...(calc.cc.otherFees.recordingMortgage > 0 ? [{ label: "Recording Fee (Mortgage)", value: calc.cc.otherFees.recordingMortgage }] : []),
                  ].filter(it => it.value > 0)} />
                  {calc.specialFee > 0 && (
                    <DetailSection title="Special Fees" items={[
                      { label: calc.specialFeeLabel, value: calc.specialFee },
                    ]} />
                  )}
                  <div className="border-t-2 border-gray-300 pt-3 mt-4 flex justify-between font-bold text-lg">
                    <span className="text-gray-700">Total Closing Costs</span>
                    <span className="text-blue-600">{fmt(calc.totalClosingCosts)}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <footer className="text-center text-xs text-gray-400 py-6">Buyer Estimate Calculator &mdash; Brevard County, FL &mdash; Rates are estimates only.</footer>
    </div>
  );
}
