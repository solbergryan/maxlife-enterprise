import { useState, useMemo, useCallback } from "react";

// ─── Florida / Brevard County Rate Tables ───
const FL_DOC_STAMP_NOTE = 0.35;    // per $100 on mortgage notes (buyer)
const FL_INTANGIBLE_TAX = 0.20;    // per $100 on mortgage (buyer)
const FL_TITLE_BASE_RATE_PER_1K = 5.75;   // first $100k
const FL_TITLE_EXCESS_RATE_PER_1K = 5.00; // above $100k

function calcOwnerTitlePremium(price) {
  if (price <= 0) return 0;
  if (price <= 100000) return price / 1000 * FL_TITLE_BASE_RATE_PER_1K;
  return 100 * FL_TITLE_BASE_RATE_PER_1K + (price - 100000) / 1000 * FL_TITLE_EXCESS_RATE_PER_1K;
}

function calcLoanTitlePremium(loanAmt, price) {
  // Simultaneous issue (simo) rate: significantly discounted
  if (loanAmt <= 0) return 0;
  const ownerPremium = calcOwnerTitlePremium(price);
  const loanAsOwner = calcOwnerTitlePremium(loanAmt);
  // Simo = 25% of what standalone loan policy would cost (FL standard)
  return Math.round(loanAsOwner * 0.25 * 100) / 100;
}

// ─── Default Closing Costs by Loan Type ───
const DEFAULT_CLOSING_COSTS = {
  conventional: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 70, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
  },
  fha: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 70, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
    upfrontMIP: 1.75, // % of loan amount
  },
  va: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 0, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
    vaFundingFee: 2.15, // % of loan amount (first use)
  },
  allCash: {
    prepaid: { monthsInsurance: 0, monthsTaxes: 4, daysInterest: 0 },
    titleFees: { closingFee: 225, taxServiceFee: 0, floodCert: 0, titleEndorsement81: 0 },
    lenderFees: { originationPct: 0, termiteInspection: 70, underwriting: 0, appraisal: 0, creditReport: 0, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 0 },
    docStamps: false, intangibleTax: false, proratedTax: true,
  },
  usda: {
    prepaid: { monthsInsurance: 14, monthsTaxes: 4, daysInterest: 15 },
    titleFees: { closingFee: 225, taxServiceFee: 78, floodCert: 20, titleEndorsement81: 45 },
    lenderFees: { originationPct: 1.0, termiteInspection: 70, underwriting: 250, appraisal: 350, creditReport: 35, survey: 350 },
    otherFees: { recordingDeed: 250, recordingMortgage: 19 },
    docStamps: true, intangibleTax: true, proratedTax: true,
    usdaGuaranteeFee: 1.0,
  },
};

const LOAN_TYPES = [
  { value: "conventional", label: "Conventional" },
  { value: "fha", label: "FHA" },
  { value: "va", label: "VA" },
  { value: "allCash", label: "All Cash" },
  { value: "usda", label: "USDA" },
];

const fmt = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
const fmtPct = (n) => `${n.toFixed(3)}%`;

// ─── Reusable Input Components ───
function CurrencyInput({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <span className="px-3 py-2 bg-blue-50 text-blue-600 font-semibold text-sm border-r border-gray-300">$</span>
        <input
          type="text"
          className="flex-1 px-3 py-2 outline-none text-gray-800"
          placeholder={placeholder || "0"}
          value={value === 0 ? "" : value.toLocaleString()}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9.]/g, "");
            onChange(raw === "" ? 0 : parseFloat(raw));
          }}
        />
      </div>
    </div>
  );
}

function PctOrDollarInput({ label, value, isPct, onValueChange, onModeChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <button
          onClick={() => onModeChange(true)}
          className={`px-3 py-2 text-sm font-semibold border-r border-gray-300 transition-colors ${isPct ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}
        >%</button>
        <button
          onClick={() => onModeChange(false)}
          className={`px-3 py-2 text-sm font-semibold border-r border-gray-300 transition-colors ${!isPct ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-400"}`}
        >$</button>
        <input
          type="text"
          className="flex-1 px-3 py-2 outline-none text-gray-800"
          value={value === 0 ? "" : value}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9.]/g, "");
            onValueChange(raw === "" ? 0 : parseFloat(raw));
          }}
        />
      </div>
    </div>
  );
}

// ─── Donut Chart Component ───
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
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={d.color}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            transform={`rotate(${rotation} ${cx} ${cy})`}
            style={{ transition: "all 0.5s ease" }}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r - strokeWidth / 2 + 1} fill="white" />
    </svg>
  );
}

// ─── Result Card ───
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

// ─── Detailed Breakdown ───
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

// ═══════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════
export default function BuyerEstimateApp() {
  // ─── Form State ───
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

  // ─── Derived Values ───
  const calc = useMemo(() => {
    if (homePrice <= 0) return null;
    const cc = DEFAULT_CLOSING_COSTS[loanType] || DEFAULT_CLOSING_COSTS.conventional;

    const downDollar = downPmtIsPct ? homePrice * (downPmt / 100) : downPmt;
    const loanAmount = Math.max(homePrice - downDollar, 0);
    const isAllCash = loanType === "allCash";

    // Monthly mortgage payment (P&I)
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = termYears * 12;
    let monthlyPI = 0;
    if (loanAmount > 0 && monthlyRate > 0) {
      monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    // Insurance & Taxes (annual)
    const annualInsurance = hazardInsIsPct ? homePrice * (hazardIns / 100) : hazardIns;
    const annualTax = reTaxIsPct ? homePrice * (reTax / 100) : reTax;
    const monthlyInsurance = annualInsurance / 12;
    const monthlyTax = annualTax / 12;
    const monthlyHOA = hoaMonthly;

    // ─── Prepaid Costs ───
    const prepaidInsurance = monthlyInsurance * cc.prepaid.monthsInsurance;
    const prepaidTax = monthlyTax * cc.prepaid.monthsTaxes;
    const dailyInterest = loanAmount > 0 ? (loanAmount * (interestRate / 100)) / 365 : 0;
    const prepaidInterest = dailyInterest * cc.prepaid.daysInterest;
    const totalPrepaid = prepaidInsurance + prepaidTax + prepaidInterest;

    // ─── Title Fees ───
    const ownerTitle = calcOwnerTitlePremium(homePrice);
    const loanTitle = isAllCash ? 0 : calcLoanTitlePremium(loanAmount, homePrice);
    const searchFee = ownerTitle > 0 ? Math.round(ownerTitle * 0.25) : 0; // typical estimate
    const titleEndForm9 = ownerTitle > 0 ? 25 : 0;
    const titleEndForm92 = ownerTitle > 0 ? 25 : 0;
    const titleFeeFixed = cc.titleFees.closingFee + cc.titleFees.taxServiceFee + cc.titleFees.floodCert + cc.titleFees.titleEndorsement81;
    const totalTitleFees = loanTitle + titleFeeFixed + titleEndForm9 + titleEndForm92 + searchFee;

    // ─── Lender Fees ───
    const originationFee = loanAmount * (cc.lenderFees.originationPct / 100);
    const lenderFeeFixed = cc.lenderFees.termiteInspection + cc.lenderFees.underwriting + cc.lenderFees.appraisal + cc.lenderFees.creditReport + cc.lenderFees.survey;
    const totalLenderFees = originationFee + lenderFeeFixed;

    // ─── Other Fees ───
    const docStampAmount = cc.docStamps ? Math.ceil(loanAmount / 100) * FL_DOC_STAMP_NOTE : 0;
    const intangibleAmount = cc.intangibleTax ? Math.ceil(loanAmount / 100) * FL_INTANGIBLE_TAX : 0;
    const proratedTaxAmount = cc.proratedTax ? monthlyTax * 2 : 0; // ~2 months estimate
    const recordingFees = cc.otherFees.recordingDeed + cc.otherFees.recordingMortgage;
    const totalOtherFees = docStampAmount + intangibleAmount + proratedTaxAmount + recordingFees;

    // ─── Special Loan Fees ───
    let specialFee = 0;
    let specialFeeLabel = "";
    if (cc.upfrontMIP) { specialFee = loanAmount * (cc.upfrontMIP / 100); specialFeeLabel = "Upfront MIP (FHA)"; }
    if (cc.vaFundingFee) { specialFee = loanAmount * (cc.vaFundingFee / 100); specialFeeLabel = "VA Funding Fee"; }
    if (cc.usdaGuaranteeFee) { specialFee = loanAmount * (cc.usdaGuaranteeFee / 100); specialFeeLabel = "USDA Guarantee Fee"; }

    // Broker fee
    const brokerDollar = buyerBrokerIsPct ? homePrice * (buyerBrokerFee / 100) : buyerBrokerFee;

    // Seller concession (reduces buyer costs)
    const concessionDollar = sellerConcessionIsPct ? homePrice * (sellerConcession / 100) : sellerConcession;

    // ─── Totals ───
    const totalClosingCosts = totalPrepaid + totalTitleFees + totalLenderFees + totalOtherFees + specialFee + brokerDollar;
    const bringToClose = downDollar + totalClosingCosts - concessionDollar;

    // Monthly PITI
    const monthlyTotal = monthlyPI + monthlyInsurance + monthlyTax + monthlyHOA;

    return {
      loanAmount, downDollar, monthlyPI, monthlyInsurance, monthlyTax, monthlyHOA, monthlyTotal,
      prepaidInsurance, prepaidTax, prepaidInterest, totalPrepaid,
      ownerTitle, loanTitle, searchFee, titleEndForm9, titleEndForm92, titleFeeFixed, totalTitleFees,
      originationFee, lenderFeeFixed, totalLenderFees,
      docStampAmount, intangibleAmount, proratedTaxAmount, recordingFees, totalOtherFees,
      specialFee, specialFeeLabel, brokerDollar, concessionDollar,
      totalClosingCosts, bringToClose,
      cc,
    };
  }, [homePrice, downPmt, downPmtIsPct, interestRate, termYears, loanType, hazardIns, hazardInsIsPct, reTax, reTaxIsPct, hoaMonthly, buyerBrokerFee, buyerBrokerIsPct, sellerConcession, sellerConcessionIsPct]);

  const handleCompute = () => setComputed(true);

  const COLORS_MONTHLY = ["#5E81C1", "#35AB49", "#FDB415", "#BF6A00"];
  const COLORS_BTC = ["#5E81C1", "#53f400", "#35AB49", "#FDB415", "#d00000", "#BF6A00"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
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
        {/* ─── LEFT: FORM ─── */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Buyer Estimate</h2>

            {/* Loan Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Loan Type</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
                value={loanType}
                onChange={(e) => { setLoanType(e.target.value); setComputed(false); }}
              >
                {LOAN_TYPES.map(lt => <option key={lt.value} value={lt.value}>{lt.label}</option>)}
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

            <button
              onClick={handleCompute}
              disabled={homePrice <= 0}
              className="w-full mt-4 py-3 rounded-xl font-bold text-white text-lg transition-all bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              COMPUTE
            </button>
          </div>
        </div>

        {/* ─── RIGHT: RESULTS ─── */}
        <div className="flex-1 min-w-0">
          {(!computed || !calc) ? (
            <div className="flex items-center justify-center h-64 bg-white rounded-2xl shadow-lg">
              <p className="text-gray-400 text-lg">Enter a home price and hit <span className="font-bold text-blue-500">COMPUTE</span></p>
            </div>
          ) : (
            <>
              {/* Monthly Payment Card */}
              <ResultCard
                title="Monthly Payment"
                amount={calc.monthlyTotal}
                items={[
                  { label: "Principal & Interest", value: calc.monthlyPI },
                  { label: "Hazard Insurance", value: calc.monthlyInsurance },
                  { label: "Property Tax", value: calc.monthlyTax },
                  { label: "HOA", value: calc.monthlyHOA },
                ]}
                colors={COLORS_MONTHLY}
              />

              {/* Bring to Close Card */}
              <ResultCard
                title="Bring to Close"
                amount={calc.bringToClose}
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
                colors={COLORS_BTC}
              />

              {/* Toggle Detail */}
              <button
                onClick={() => setShowDetail(!showDetail)}
                className="w-full py-3 bg-white rounded-xl shadow text-blue-600 font-semibold hover:bg-blue-50 transition-colors mb-4"
              >
                {showDetail ? "Hide" : "Show"} Detailed Closing Costs
              </button>

              {showDetail && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Closing Costs</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    Loan Type: <span className="font-semibold text-gray-700">{LOAN_TYPES.find(l => l.value === loanType)?.label}</span>
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

      <footer className="text-center text-xs text-gray-400 py-6">
        Buyer Estimate Calculator &mdash; Brevard County, FL &mdash; Rates are estimates only.
      </footer>
    </div>
  );
}
