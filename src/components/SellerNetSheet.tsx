"use client";

import { useState, useMemo, useCallback } from "react";
import {
  calcSeller,
  fmt,
  LOAN_TYPES,
  PAID_BY_OPTIONS,
  COUNTIES,
  DEFAULT_COUNTY,
  getCountyConfig,
  type PaidBy,
  type County,
} from "@/lib/netSheetCalc";
import { generateSellerPDF } from "@/lib/netSheetPdf";

const inputWrap =
  "flex items-center bg-dark border border-dark-border rounded-lg overflow-hidden focus-within:border-gold transition-colors";
const inputCls = "flex-1 px-3 py-2 bg-transparent outline-none text-white text-sm";
const affixCls = "px-3 py-2 bg-navy/60 text-gold font-semibold text-sm border-r border-dark-border";
const labelCls = "block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide";

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
          className={`px-3 py-2 text-sm font-semibold border-r border-dark-border transition-colors ${
            isPct ? "bg-navy/60 text-gold" : "bg-transparent text-gray-500"
          }`}
        >
          %
        </button>
        <button
          type="button"
          onClick={() => onModeChange(false)}
          className={`px-3 py-2 text-sm font-semibold border-r border-dark-border transition-colors ${
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

function PctWithPaidBy({
  label,
  value,
  onValueChange,
  paidBy,
  onPaidByChange,
}: {
  label: string;
  value: number;
  onValueChange: (v: number) => void;
  paidBy: PaidBy;
  onPaidByChange: (p: PaidBy) => void;
}) {
  return (
    <div className="mb-4">
      <label className={labelCls}>{label}</label>
      <div className="flex items-center gap-2">
        <div className={`${inputWrap} flex-1`}>
          <span className={affixCls}>%</span>
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
        <select
          className="bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
          value={paidBy}
          onChange={(e) => onPaidByChange(e.target.value as PaidBy)}
        >
          {PAID_BY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
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
  const total = data.reduce((s, d) => s + Math.abs(d.value), 0);
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

function DetailSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: number | string }[];
}) {
  return (
    <div className="mb-5">
      <h4 className="font-bold text-gold text-xs uppercase tracking-widest mb-2 border-b border-dark-border pb-1.5">
        {title}
      </h4>
      {items.map((it, i) => (
        <div key={i} className="flex justify-between py-1 text-sm">
          <span className="text-gray-400">{it.label}</span>
          <span
            className={`font-medium ${
              typeof it.value === "number" && it.value < 0 ? "text-red-400" : "text-white"
            }`}
          >
            {typeof it.value === "number" ? fmt(it.value) : it.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function SellerNetSheet({
  initialCounty = DEFAULT_COUNTY,
}: {
  initialCounty?: County;
} = {}) {
  const [county, setCounty] = useState<County>(initialCounty);
  const [loanType, setLoanType] = useState("conventional");
  const [salesPrice, setSalesPrice] = useState(0);
  const [sellerBrokerFee, setSellerBrokerFee] = useState(3);
  const [buyerBrokerFee, setBuyerBrokerFee] = useState(3);
  const [buyerBrokerPaidBy, setBuyerBrokerPaidBy] = useState<PaidBy>("seller");
  const [sellerConcession, setSellerConcession] = useState(0);
  const [sellerConcessionIsPct, setSellerConcessionIsPct] = useState(true);
  const [misc, setMisc] = useState(0);
  const [reTax, setReTax] = useState(getCountyConfig(initialCounty).defaultTaxRatePct);
  const [reTaxIsPct, setReTaxIsPct] = useState(true);
  const [reTaxEdited, setReTaxEdited] = useState(false);
  const [loanBalance, setLoanBalance] = useState(0);
  const [reissueRate, setReissueRate] = useState(false);
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
    if (salesPrice <= 0) return null;
    return calcSeller({
      salesPrice,
      sellerBrokerFee,
      buyerBrokerFee,
      buyerBrokerPaidBy,
      sellerConcession,
      sellerConcessionIsPct,
      misc,
      reTax,
      reTaxIsPct,
      loanBalance,
      reissueRate,
      county,
    });
  }, [
    salesPrice,
    sellerBrokerFee,
    buyerBrokerFee,
    buyerBrokerPaidBy,
    sellerConcession,
    sellerConcessionIsPct,
    misc,
    reTax,
    reTaxIsPct,
    loanBalance,
    reissueRate,
    county,
  ]);

  const handleCompute = () => setComputed(true);

  const handlePDF = useCallback(() => {
    if (!calc) return;
    generateSellerPDF(salesPrice, loanType, calc, {
      sellerBrokerFee,
      buyerBrokerFee,
      buyerBrokerPaidBy,
      reissueRate,
      county,
      clientName: clientName || undefined,
      propertyAddress: propertyAddress || undefined,
    });
  }, [
    calc,
    salesPrice,
    loanType,
    sellerBrokerFee,
    buyerBrokerFee,
    buyerBrokerPaidBy,
    reissueRate,
    county,
    clientName,
    propertyAddress,
  ]);

  const COLORS = ["#EFBF04", "#80c342", "#5E81C1", "#d00000", "#BF6A00", "#22c55e"];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Form */}
      <div className="lg:w-96 flex-shrink-0">
        <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-1">Seller Net Sheet</h2>
          <p className="text-xs text-gray-500 mb-5">
            {getCountyConfig(county).fullLabel} closing estimate
          </p>

          <div className="mb-4">
            <label className={labelCls}>County</label>
            <select
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
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
            label="Sales Price"
            value={salesPrice}
            onChange={(v) => {
              setSalesPrice(v);
              setComputed(false);
            }}
            placeholder="Required"
          />

          <div className="mb-4">
            <label className={labelCls}>Loan Type (Buyer)</label>
            <select
              className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
              value={loanType}
              onChange={(e) => {
                setLoanType(e.target.value);
                setComputed(false);
              }}
            >
              {LOAN_TYPES.map((lt) => (
                <option key={lt.value} value={lt.value}>
                  {lt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className={labelCls}>Seller Broker Fee</label>
            <div className={inputWrap}>
              <span className={affixCls}>%</span>
              <input
                type="text"
                className={inputCls}
                value={sellerBrokerFee}
                onChange={(e) => {
                  setSellerBrokerFee(parseFloat(e.target.value.replace(/[^0-9.]/g, "")) || 0);
                  setComputed(false);
                }}
              />
            </div>
          </div>

          <PctWithPaidBy
            label="Buyer Broker Fee"
            value={buyerBrokerFee}
            onValueChange={(v) => {
              setBuyerBrokerFee(v);
              setComputed(false);
            }}
            paidBy={buyerBrokerPaidBy}
            onPaidByChange={(v) => {
              setBuyerBrokerPaidBy(v);
              setComputed(false);
            }}
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
          <CurrencyInput
            label="Miscellaneous"
            value={misc}
            onChange={(v) => {
              setMisc(v);
              setComputed(false);
            }}
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
            label="Seller Loan Balance"
            value={loanBalance}
            onChange={(v) => {
              setLoanBalance(v);
              setComputed(false);
            }}
          />

          <div className="mb-4 flex items-center justify-between pt-1">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Reissue Rate (30% off)
            </label>
            <button
              type="button"
              onClick={() => {
                setReissueRate(!reissueRate);
                setComputed(false);
              }}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                reissueRate ? "bg-gold" : "bg-dark-border"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  reissueRate ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          <div className="border-t border-dark-border pt-4 mt-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
              Optional (for PDF)
            </p>
            <div className="mb-3">
              <label className={labelCls}>Client Name</label>
              <input
                type="text"
                className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className={labelCls}>Property Address</label>
              <input
                type="text"
                className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white text-sm focus:border-gold outline-none transition-colors"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleCompute}
            disabled={salesPrice <= 0}
            className="w-full mt-4 py-3 rounded-lg font-bold text-dark bg-gold hover:bg-gold-dark shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            COMPUTE
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 min-w-0">
        {!computed || !calc ? (
          <div className="flex items-center justify-center h-64 bg-dark-card border border-dark-border rounded-2xl">
            <p className="text-gray-500 text-lg text-center px-6">
              Enter a sales price and click{" "}
              <span className="font-bold text-gold">COMPUTE</span> to see your net at close.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-dark-card border border-dark-border rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm text-gray-400 uppercase tracking-widest">Net at Close</h3>
                <button
                  onClick={handlePDF}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 text-gold font-semibold text-sm hover:bg-gold/20 transition-colors border border-gold/30"
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
              </div>
              <p
                className={`text-4xl sm:text-5xl font-bold mb-6 ${
                  calc.netAtClose >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {fmt(calc.netAtClose)}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <DonutChart
                  data={[
                    { value: calc.totalCommission, color: COLORS[0] },
                    { value: calc.totalTitleFees, color: COLORS[1] },
                    { value: calc.totalOtherFees, color: COLORS[2] },
                    { value: calc.proratedTaxDebit, color: COLORS[3] },
                    { value: calc.loanBalance, color: COLORS[4] },
                    { value: Math.max(calc.netAtClose, 0), color: COLORS[5] },
                  ]}
                  size={180}
                />
                <div className="flex-1 w-full space-y-2">
                  {[
                    { label: "Sales Price", value: salesPrice, color: null as string | null },
                    { label: "Loan Payoff", value: -calc.loanBalance, color: COLORS[4] },
                    { label: "Property Tax Debit", value: -calc.proratedTaxDebit, color: COLORS[3] },
                    { label: "Total Closing Costs", value: -calc.totalClosingCosts, color: COLORS[2] },
                  ].map((it, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {it.color ? (
                        <span
                          className="w-3 h-3 rounded-full inline-block flex-shrink-0"
                          style={{ backgroundColor: it.color }}
                        />
                      ) : (
                        <span className="w-3 h-3 inline-block flex-shrink-0" />
                      )}
                      <span className="text-gray-400 flex-1">{it.label}</span>
                      <span
                        className={`font-semibold ${
                          it.value < 0 ? "text-red-400" : "text-white"
                        }`}
                      >
                        {fmt(it.value)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-dark-border pt-2 flex items-center gap-2 text-sm">
                    <span
                      className="w-3 h-3 rounded-full inline-block flex-shrink-0"
                      style={{ backgroundColor: COLORS[5] }}
                    />
                    <span className="text-white font-bold flex-1">Net at Close</span>
                    <span
                      className={`font-bold ${
                        calc.netAtClose >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {fmt(calc.netAtClose)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Talk to a real broker CTA */}
            <a
              href="/opportunities#request-valuation"
              className="w-full py-4 mb-4 bg-gradient-to-r from-gold to-gold-dark text-dark font-bold rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Talk to a Real Broker About This Property
            </a>

            <button
              onClick={() => setShowDetail(!showDetail)}
              className="w-full py-3 bg-dark-card border border-dark-border rounded-xl text-gold font-semibold hover:bg-dark-hover transition-colors mb-4"
            >
              {showDetail ? "Hide" : "Show"} Detailed Closing Costs
            </button>

            {showDetail && (
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Detailed Closing Costs</h3>
                <div className="text-sm text-gray-500 mb-4">
                  Loan Type:{" "}
                  <span className="font-semibold text-gray-300">
                    {LOAN_TYPES.find((l) => l.value === loanType)?.label}
                  </span>
                  {reissueRate && (
                    <span className="ml-2 text-gold font-semibold">(Reissue Rate Applied)</span>
                  )}
                </div>
                <DetailSection
                  title="Commissions"
                  items={[
                    {
                      label: `Seller Broker Fee (${sellerBrokerFee}%)`,
                      value: calc.sellerCommission,
                    },
                    {
                      label: `Buyer Broker Fee (${buyerBrokerFee}% — ${
                        buyerBrokerPaidBy === "seller"
                          ? "Seller pays"
                          : buyerBrokerPaidBy === "split"
                          ? "Split 50/50"
                          : "Buyer pays"
                      })`,
                      value: calc.buyerCommSellerPays,
                    },
                  ]}
                />
                <DetailSection
                  title="Title Fees"
                  items={[
                    {
                      label: `Owner's Title Policy${reissueRate ? " (Reissue)" : ""}`,
                      value: calc.titlePremium,
                    },
                    { label: "Title Search Fee", value: calc.searchFee },
                    { label: "Closing Fee", value: calc.closingFee },
                    { label: "Lien Search", value: calc.lienSearch },
                    { label: "Estoppel Fee", value: calc.estoppelFee },
                  ]}
                />
                <DetailSection
                  title="Other Fees"
                  items={[
                    { label: "Documentary Stamp Tax (Deed)", value: calc.docStampAmount },
                    { label: "Recording Fee", value: calc.recordingFee },
                    ...(calc.misc > 0 ? [{ label: "Miscellaneous", value: calc.misc }] : []),
                    ...(calc.concessionDollar > 0
                      ? [{ label: "Seller Concession", value: calc.concessionDollar }]
                      : []),
                  ]}
                />
                <DetailSection
                  title="Debits"
                  items={[
                    { label: "Property Tax Proration (~4 mo)", value: calc.proratedTaxDebit },
                    ...(calc.loanBalance > 0
                      ? [{ label: "Mortgage Payoff", value: calc.loanBalance }]
                      : []),
                  ]}
                />
                <div className="border-t-2 border-dark-border pt-3 mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Total Closing Costs</span>
                    <span className="font-semibold text-white">{fmt(calc.totalClosingCosts)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-2">
                    <span className="text-gray-300">Net at Close</span>
                    <span className={calc.netAtClose >= 0 ? "text-green-400" : "text-red-400"}>
                      {fmt(calc.netAtClose)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
