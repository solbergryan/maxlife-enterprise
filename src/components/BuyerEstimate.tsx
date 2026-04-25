"use client";

import { useState, useMemo, useCallback } from "react";
import {
  calcBuyer,
  fmt,
  BUYER_LOAN_TYPES,
  COUNTIES,
  DEFAULT_COUNTY,
  getCountyConfig,
  type BuyerLoanType,
  type County,
} from "@/lib/netSheetCalc";
import { generateBuyerPDF } from "@/lib/netSheetPdf";

const inputWrap =
  "flex items-center bg-dark border border-white/10 rounded-lg overflow-hidden focus-within:border-gold transition-colors";
const inputCls = "flex-1 px-3 py-2 bg-transparent outline-none text-white text-sm";
const affixCls = "px-3 py-2 bg-navy/60 text-gold font-semibold text-sm border-r border-white/10";
const labelCls = "block text-xs font-medium text-gray-300 mb-1.5 uppercase tracking-wide";

function CurrencyInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label className={labelCls}>{label}</label>
      <div className={inputWrap}>
        <span className={affixCls}>$</span>
        <input
          type="text"
          className={inputCls}
          placeholder={placeholder || "0"}
          value={value === 0 ? "" : value.toLocaleString()}
          onChange={(e) => {
            const r = e.target.value.replace(/[^0-9.]/g, "");
            onChange(r === "" ? 0 : parseFloat(r));
          }}
        />
      </div>
    </div>
  );
}

function PctOrDollarInput({
  label,
  value,
  isPct,
  onValueChange,
  onModeChange,
}: {
  label: string;
  value: number;
  isPct: boolean;
  onValueChange: (v: number) => void;
  onModeChange: (p: boolean) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelCls}>{label}</label>
      <div className={inputWrap}>
        <button
          type="button"
          onClick={() => onModeChange(true)}
          className={`px-3 py-2 text-sm font-semibold border-r border-white/10 transition-colors ${
            isPct ? "bg-navy/60 text-gold" : "bg-transparent text-gray-500"
          }`}
        >
          %
        </button>
        <button
          type="button"
          onClick={() => onModeChange(false)}
          className={`px-3 py-2 text-sm font-semibold border-r border-white/10 transition-colors ${
            !isPct ? "bg-navy/60 text-gold" : "bg-transparent text-gray-500"
          }`}
        >
          $
        </button>
        <input
          type="text"
          className={inputCls}
          value={value === 0 ? "" : value}
          onChange={(e) => {
            const r = e.target.value.replace(/[^0-9.]/g, "");
            onValueChange(r === "" ? 0 : parseFloat(r));
          }}
        />
      </div>
    </div>
  );
}

function DonutChart({
  data,
  size = 200,
}: {
  data: { value: number; color: string }[];
  size?: number;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) return null;
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;
  const sw = size * 0.18;
  let cum = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data
        .filter((d) => d.value > 0)
        .map((d, i) => {
          const pct = d.value / total;
          const da = 2 * Math.PI * r;
          const doff = da * (1 - pct);
          const rot = cum * 360 - 90;
          cum += pct;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={sw}
              strokeDasharray={da}
              strokeDashoffset={doff}
              transform={`rotate(${rot} ${cx} ${cy})`}
              style={{ transition: "all 0.5s ease" }}
            />
          );
        })}
      <circle cx={cx} cy={cy} r={r - sw / 2 + 1} fill="#0a0a0a" />
    </svg>
  );
}

function ResultCard({
  title,
  amount,
  items,
  colors,
}: {
  title: string;
  amount: number;
  items: { label: string; value: number }[];
  colors: string[];
}) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 mb-6">
      <h3 className="text-sm text-gray-300 uppercase tracking-widest mb-1">{title}</h3>
      <p className="text-4xl sm:text-5xl font-bold text-gold mb-5">{fmt(amount)}</p>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <DonutChart
          data={items.map((it, i) => ({ value: it.value, color: colors[i % colors.length] }))}
          size={160}
        />
        <div className="flex-1 w-full space-y-2">
          {items
            .filter((it) => it.value > 0)
            .map((it, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span
                  className="w-3 h-3 rounded-full inline-block flex-shrink-0"
                  style={{ backgroundColor: colors[i % colors.length] }}
                />
                <span className="text-gray-300 flex-1">{it.label}</span>
                <span className="font-semibold text-white">{fmt(it.value)}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function DetailSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: number | string }[];
}) {
  return (
    <div className="mb-5">
      <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-2 border-b border-white/10 pb-1.5">
        {title}
      </h4>
      {items.map((it, i) => (
        <div key={i} className="flex justify-between py-1 text-sm">
          <span className="text-gray-300">{it.label}</span>
          <span className="font-medium text-white">
            {typeof it.value === "number" ? fmt(it.value) : it.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function BuyerEstimate({
  initialCounty = DEFAULT_COUNTY,
}: {
  initialCounty?: County;
} = {}) {
  const [county, setCounty] = useState<County>(initialCounty);
  const [loanType, setLoanType] = useState<BuyerLoanType>("conventional");
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
  const [reTax, setReTax] = useState(getCountyConfig(initialCounty).defaultTaxRatePct);
  const [reTaxIsPct, setReTaxIsPct] = useState(true);
  const [reTaxEdited, setReTaxEdited] = useState(false);
  const [hoaMonthly, setHoaMonthly] = useState(0);
  const [clientName, setClientName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [computed, setComputed] = useState(false);

  const handleCountyChange = (c: County) => {
    setCounty(c);
    setComputed(false);
    if (!reTaxEdited) {
      setReTax(getCountyConfig(c).defaultTaxRatePct);
      setReTaxIsPct(true);
    }
  };

  const calc = useMemo(() => {
    if (homePrice <= 0) return null;
    return calcBuyer({
      homePrice,
      downPmt,
      downPmtIsPct,
      interestRate,
      termYears,
      loanType,
      buyerBrokerFee,
      buyerBrokerIsPct,
      sellerConcession,
      sellerConcessionIsPct,
      hazardIns,
      hazardInsIsPct,
      reTax,
      reTaxIsPct,
      hoaMonthly,
      county,
    });
  }, [
    homePrice,
    downPmt,
    downPmtIsPct,
    interestRate,
    termYears,
    loanType,
    hazardIns,
    hazardInsIsPct,
    reTax,
    reTaxIsPct,
    hoaMonthly,
    buyerBrokerFee,
    buyerBrokerIsPct,
    sellerConcession,
    sellerConcessionIsPct,
    county,
  ]);

  const handleCompute = () => setComputed(true);

  const handlePDF = useCallback(() => {
    if (!calc) return;
    generateBuyerPDF(homePrice, loanType, calc, {
      downPmt,
      downPmtIsPct,
      interestRate,
      termYears,
      county,
      clientName: clientName || undefined,
      propertyAddress: propertyAddress || undefined,
    });
  }, [
    calc,
    homePrice,
    loanType,
    downPmt,
    downPmtIsPct,
    interestRate,
    termYears,
    county,
    clientName,
    propertyAddress,
  ]);

  const COLORS_MONTHLY = ["#EFBF04", "#80c342", "#5E81C1", "#BF6A00"];
  const COLORS_BTC = ["#EFBF04", "#80c342", "#5E81C1", "#22c55e", "#BF6A00", "#d00000"];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Form */}
      <div className="lg:w-96 flex-shrink-0">
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-1">Buyer Estimate</h2>
          <p className="text-xs text-gray-500 mb-5">
            {getCountyConfig(county).fullLabel} closing estimate
          </p>

          <div className="mb-4">
            <label className={labelCls}>County</label>
            <select
              className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
              value={county}
              onChange={(e) => handleCountyChange(e.target.value as County)}
            >
              {COUNTIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <CurrencyInput
            label="Home Price"
            value={homePrice}
            onChange={(v) => {
              setHomePrice(v);
              setComputed(false);
            }}
            placeholder="Required"
          />

          <div className="mb-4">
            <label className={labelCls}>Loan Type</label>
            <select
              className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
              value={loanType}
              onChange={(e) => {
                setLoanType(e.target.value as BuyerLoanType);
                setComputed(false);
              }}
            >
              {BUYER_LOAN_TYPES.map((lt) => (
                <option key={lt.value} value={lt.value}>
                  {lt.label}
                </option>
              ))}
            </select>
          </div>

          <PctOrDollarInput
            label="Down Payment"
            value={downPmt}
            isPct={downPmtIsPct}
            onValueChange={(v) => {
              setDownPmt(v);
              setComputed(false);
            }}
            onModeChange={setDownPmtIsPct}
          />

          <div className="mb-4">
            <label className={labelCls}>Interest Rate</label>
            <div className={inputWrap}>
              <span className={affixCls}>%</span>
              <input
                type="text"
                className={inputCls}
                value={interestRate}
                onChange={(e) => {
                  setInterestRate(parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0);
                  setComputed(false);
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className={labelCls}>Term (Years)</label>
            <select
              className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
              value={termYears}
              onChange={(e) => {
                setTermYears(parseInt(e.target.value));
                setComputed(false);
              }}
            >
              <option value={30}>30</option>
              <option value={25}>25</option>
              <option value={20}>20</option>
              <option value={15}>15</option>
              <option value={10}>10</option>
            </select>
          </div>

          <PctOrDollarInput
            label="Buyer Broker Fee"
            value={buyerBrokerFee}
            isPct={buyerBrokerIsPct}
            onValueChange={(v) => {
              setBuyerBrokerFee(v);
              setComputed(false);
            }}
            onModeChange={setBuyerBrokerIsPct}
          />
          <PctOrDollarInput
            label="Seller Concession"
            value={sellerConcession}
            isPct={sellerConcessionIsPct}
            onValueChange={(v) => {
              setSellerConcession(v);
              setComputed(false);
            }}
            onModeChange={setSellerConcessionIsPct}
          />
          <PctOrDollarInput
            label="Hazard Insurance"
            value={hazardIns}
            isPct={hazardInsIsPct}
            onValueChange={(v) => {
              setHazardIns(v);
              setComputed(false);
            }}
            onModeChange={setHazardInsIsPct}
          />
          <PctOrDollarInput
            label="Property Tax (Annual)"
            value={reTax}
            isPct={reTaxIsPct}
            onValueChange={(v) => {
              setReTax(v);
              setReTaxEdited(true);
              setComputed(false);
            }}
            onModeChange={(p) => {
              setReTaxIsPct(p);
              setReTaxEdited(true);
            }}
          />
          <CurrencyInput
            label="HOA (Monthly)"
            value={hoaMonthly}
            onChange={(v) => {
              setHoaMonthly(v);
              setComputed(false);
            }}
          />

          <div className="border-t border-white/10 pt-4 mt-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
              Optional (for PDF)
            </p>
            <div className="mb-3">
              <label className={labelCls}>Client Name</label>
              <input
                type="text"
                className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className={labelCls}>Property Address</label>
              <input
                type="text"
                className="w-full bg-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleCompute}
            disabled={homePrice <= 0}
            className="w-full mt-4 py-3 rounded-lg font-bold text-dark bg-gold hover:bg-gold-dark shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            COMPUTE
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 min-w-0">
        {!computed || !calc ? (
          <div className="flex items-center justify-center h-64 bg-white/[0.04] border border-white/10 rounded-2xl">
            <p className="text-gray-500 text-lg text-center px-6">
              Enter a home price and click{" "}
              <span className="font-bold text-gold">COMPUTE</span> to see your estimate.
            </p>
          </div>
        ) : (
          <>
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

            <ResultCard
              title="Bring to Close"
              amount={calc.bringToClose}
              items={[
                { label: "Down Payment", value: calc.downDollar },
                { label: "Prepaid Costs", value: calc.totalPrepaid },
                { label: "Title Fees", value: calc.totalTitleFees },
                { label: "Lender Fees", value: calc.totalLenderFees },
                { label: "Other Fees", value: calc.totalOtherFees },
                ...(calc.specialFee > 0
                  ? [{ label: calc.specialFeeLabel, value: calc.specialFee }]
                  : []),
                ...(calc.brokerDollar > 0
                  ? [{ label: "Buyer Broker Fee", value: calc.brokerDollar }]
                  : []),
              ]}
              colors={COLORS_BTC}
            />

            <button
              onClick={handlePDF}
              className="w-full py-3 bg-gold hover:bg-gold-dark rounded-xl text-dark font-bold mb-4 flex items-center justify-center gap-2 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
              Download Branded PDF
            </button>

            <button
              onClick={() => setShowDetail(!showDetail)}
              className="w-full py-3 bg-white/[0.04] border border-white/10 rounded-xl text-gold font-semibold hover:bg-white/10 transition-colors mb-4"
            >
              {showDetail ? "Hide" : "Show"} Detailed Closing Costs
            </button>

            {showDetail && (
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Detailed Closing Costs</h3>
                <div className="text-sm text-gray-500 mb-4">
                  Loan Type:{" "}
                  <span className="font-semibold text-gray-300">
                    {BUYER_LOAN_TYPES.find((l) => l.value === loanType)?.label}
                  </span>{" "}
                  | Loan Amount:{" "}
                  <span className="font-semibold text-gray-300">{fmt(calc.loanAmount)}</span>
                </div>
                <DetailSection
                  title="Prepaid Costs"
                  items={[
                    {
                      label: `Hazard Insurance (${calc.cc.prepaid.monthsInsurance} mo)`,
                      value: calc.prepaidInsurance,
                    },
                    {
                      label: `Property Tax (${calc.cc.prepaid.monthsTaxes} mo)`,
                      value: calc.prepaidTax,
                    },
                    {
                      label: `Prepaid Interest (${calc.cc.prepaid.daysInterest} days)`,
                      value: calc.prepaidInterest,
                    },
                  ]}
                />
                <DetailSection
                  title="Title Fees"
                  items={[
                    { label: "Loan Title Policy (simo rate)", value: calc.loanTitle },
                    { label: "Title Search Fee", value: calc.searchFee },
                    { label: "Title Endorsement (form 9)", value: calc.titleEndForm9 },
                    { label: "Title Endorsement (form 9.2)", value: calc.titleEndForm92 },
                    { label: "Closing Fee", value: calc.cc.titleFees.closingFee },
                    { label: "Tax Service Fee", value: calc.cc.titleFees.taxServiceFee },
                    { label: "Flood Cert.", value: calc.cc.titleFees.floodCert },
                    { label: "Title Endorsement (8.1)", value: calc.cc.titleFees.titleEndorsement81 },
                  ].filter((it) => (typeof it.value === "number" ? it.value > 0 : true))}
                />
                <DetailSection
                  title="Lender Fees"
                  items={[
                    {
                      label: `Origination Fee (${calc.cc.lenderFees.originationPct}%)`,
                      value: calc.originationFee,
                    },
                    { label: "Termite Inspection", value: calc.cc.lenderFees.termiteInspection },
                    { label: "Underwriting", value: calc.cc.lenderFees.underwriting },
                    { label: "Appraisal", value: calc.cc.lenderFees.appraisal },
                    { label: "Credit Report", value: calc.cc.lenderFees.creditReport },
                    { label: "Survey", value: calc.cc.lenderFees.survey },
                  ].filter((it) => (typeof it.value === "number" ? it.value > 0 : true))}
                />
                <DetailSection
                  title="Other Fees"
                  items={[
                    ...(calc.docStampAmount > 0
                      ? [{ label: "Documentary Stamp Tax (Notes)", value: calc.docStampAmount }]
                      : []),
                    ...(calc.intangibleAmount > 0
                      ? [{ label: "Intangible Tax", value: calc.intangibleAmount }]
                      : []),
                    ...(calc.proratedTaxAmount > 0
                      ? [{ label: "Prorated Tax", value: calc.proratedTaxAmount }]
                      : []),
                    { label: "Recording Fee (Deed)", value: calc.cc.otherFees.recordingDeed },
                    ...(calc.cc.otherFees.recordingMortgage > 0
                      ? [
                          {
                            label: "Recording Fee (Mortgage)",
                            value: calc.cc.otherFees.recordingMortgage,
                          },
                        ]
                      : []),
                  ]}
                />
                {calc.specialFee > 0 && (
                  <DetailSection
                    title="Special Fees"
                    items={[{ label: calc.specialFeeLabel, value: calc.specialFee }]}
                  />
                )}
                <div className="border-t-2 border-white/10 pt-3 mt-4 flex justify-between font-bold text-lg">
                  <span className="text-gray-300">Total Closing Costs</span>
                  <span className="text-gold">{fmt(calc.totalClosingCosts)}</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
