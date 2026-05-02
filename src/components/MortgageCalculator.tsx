"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CalcInputs {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTermYears: number;
  propertyTaxRate: number;
  annualInsurance: number;
  pmiRate: number;
}

const defaults: CalcInputs = {
  homePrice: 380000,
  downPayment: 38000,
  interestRate: 7.0,
  loanTermYears: 30,
  propertyTaxRate: 1.0,
  annualInsurance: 2400,
  pmiRate: 0.5,
};

function formatCurrency(v: number, decimals = 0) {
  return "$" + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function calcMonthlyPayment(principal: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  min?: number;
}) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <div className="flex items-center bg-dark border border-white/10 rounded-lg overflow-hidden focus-within:border-gold/60 transition-colors">
        {prefix && (
          <span className="px-3 py-2.5 text-gray-500 text-sm border-r border-white/10 select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          step={step}
          min={min}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="flex-1 bg-transparent px-3 py-2.5 text-white text-sm focus:outline-none"
        />
        {suffix && (
          <span className="px-3 py-2.5 text-gray-500 text-sm border-l border-white/10 select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function MortgageCalculator() {
  const [inputs, setInputs] = useState<CalcInputs>(defaults);

  function set(field: keyof CalcInputs, value: number) {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }

  const results = useMemo(() => {
    const { homePrice, downPayment, interestRate, loanTermYears, propertyTaxRate, annualInsurance, pmiRate } = inputs;

    const loanAmount = Math.max(0, homePrice - downPayment);
    const ltv = homePrice > 0 ? (loanAmount / homePrice) * 100 : 0;
    const needsPMI = ltv > 80;

    const monthlyPI = calcMonthlyPayment(loanAmount, interestRate, loanTermYears);
    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = annualInsurance / 12;
    const monthlyPMI = needsPMI ? (loanAmount * (pmiRate / 100)) / 12 : 0;
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;

    const totalPayments = monthlyPI * loanTermYears * 12;
    const totalInterest = totalPayments - loanAmount;

    // Build amortization chart data (yearly)
    const monthlyRate = interestRate / 100 / 12;
    let remainingBalance = loanAmount;
    const amortData: { year: number; principal: number; interest: number }[] = [];

    for (let y = 1; y <= loanTermYears; y++) {
      let yearPrincipal = 0;
      let yearInterest = 0;
      for (let m = 0; m < 12; m++) {
        const interestPmt = remainingBalance * monthlyRate;
        const principalPmt = Math.min(monthlyPI - interestPmt, remainingBalance);
        yearInterest += interestPmt;
        yearPrincipal += principalPmt;
        remainingBalance -= principalPmt;
        if (remainingBalance <= 0) { remainingBalance = 0; break; }
      }
      amortData.push({
        year: y,
        principal: Math.round(yearPrincipal),
        interest: Math.round(yearInterest),
      });
      if (remainingBalance <= 0) break;
    }

    return {
      loanAmount,
      ltv,
      needsPMI,
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      monthlyPMI,
      totalMonthly,
      totalInterest,
      totalPayments,
      amortData,
    };
  }, [inputs]);

  const LOAN_TERMS = [15, 20, 30];

  const breakdownItems = [
    { label: "Principal & Interest", value: results.monthlyPI, color: "#C9A84C" },
    { label: "Property Tax", value: results.monthlyTax, color: "#6b7280" },
    { label: "Insurance", value: results.monthlyInsurance, color: "#4b5563" },
    ...(results.needsPMI
      ? [{ label: "PMI", value: results.monthlyPMI, color: "#374151" }]
      : []),
  ];

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
        <h2 className="text-white font-semibold text-lg mb-5">Loan Details</h2>

        {/* Loan term selector */}
        <div className="mb-4">
          <label className="block text-xs text-gray-400 mb-1">Loan Term</label>
          <div className="flex gap-2">
            {LOAN_TERMS.map((t) => (
              <button
                key={t}
                onClick={() => set("loanTermYears", t)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  inputs.loanTermYears === t
                    ? "bg-gold text-dark"
                    : "border border-white/10 text-gray-300 hover:border-gold/40"
                }`}
              >
                {t}-year
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NumberInput
            label="Home Price"
            value={inputs.homePrice}
            onChange={(v) => set("homePrice", v)}
            prefix="$"
            step={5000}
          />
          <NumberInput
            label="Down Payment"
            value={inputs.downPayment}
            onChange={(v) => set("downPayment", v)}
            prefix="$"
            step={1000}
          />
          <NumberInput
            label="Interest Rate"
            value={inputs.interestRate}
            onChange={(v) => set("interestRate", v)}
            suffix="%"
            step={0.125}
            min={0}
          />
          <NumberInput
            label="Property Tax Rate"
            value={inputs.propertyTaxRate}
            onChange={(v) => set("propertyTaxRate", v)}
            suffix="%"
            step={0.1}
            min={0}
          />
          <NumberInput
            label="Annual Home Insurance"
            value={inputs.annualInsurance}
            onChange={(v) => set("annualInsurance", v)}
            prefix="$"
            step={100}
          />
          {results.needsPMI && (
            <NumberInput
              label="PMI Rate (LTV > 80%)"
              value={inputs.pmiRate}
              onChange={(v) => set("pmiRate", v)}
              suffix="%"
              step={0.05}
              min={0}
            />
          )}
        </div>

        {results.needsPMI && (
          <p className="mt-3 text-xs text-amber-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            LTV is {results.ltv.toFixed(1)}% — PMI applies until you reach 20% equity.
          </p>
        )}
      </div>

      {/* Monthly payment breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Total */}
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 flex flex-col justify-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
            Estimated Monthly Payment
          </p>
          <p className="text-4xl font-bold text-gold">
            {formatCurrency(results.totalMonthly, 0)}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {inputs.loanTermYears}-year fixed ·{" "}
            {formatCurrency(results.loanAmount)} loan
          </p>
        </div>

        {/* Breakdown */}
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
            Payment Breakdown
          </p>
          <div className="space-y-2.5">
            {breakdownItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-300 text-sm truncate">{item.label}</span>
                </div>
                <span className="text-white text-sm font-medium tabular-nums">
                  {formatCurrency(item.value, 0)}/mo
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-sm">
            <span className="text-gray-400">Total interest paid</span>
            <span className="text-white font-medium">
              {formatCurrency(Math.max(0, results.totalInterest), 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Amortization chart */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-4">Annual Principal vs. Interest</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={results.amortData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              tickFormatter={(v) => `Yr ${v}`}
              interval={Math.floor(results.amortData.length / 8)}
            />
            <YAxis
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [formatCurrency(Number(value ?? 0)), ""]}
              labelFormatter={(l) => `Year ${l}`}
            />
            <Legend wrapperStyle={{ color: "#9ca3af", fontSize: 13 }} />
            <Bar dataKey="principal" name="Principal" fill="#C9A84C" radius={[2, 2, 0, 0]} />
            <Bar dataKey="interest" name="Interest" fill="#374151" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
