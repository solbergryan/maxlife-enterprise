"use client";

import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface CalcInputs {
  monthlyRent: number;
  homePrice: number;
  downPaymentPct: number;
  interestRate: number;
  propertyTaxRate: number;
  annualInsurance: number;
  maintenanceRate: number;
  annualRentIncrease: number;
  homeAppreciation: number;
  investmentReturn: number;
  years: number;
}

const defaults: CalcInputs = {
  monthlyRent: 2200,
  homePrice: 380000,
  downPaymentPct: 10,
  interestRate: 7.0,
  propertyTaxRate: 1.0,
  annualInsurance: 2400,
  maintenanceRate: 1.0,
  annualRentIncrease: 3.0,
  homeAppreciation: 3.5,
  investmentReturn: 7.0,
  years: 10,
};

function calcMonthlyMortgage(principal: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function formatCurrency(v: number) {
  return "$" + Math.round(v).toLocaleString();
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

export default function RentVsBuyCalculator() {
  const [inputs, setInputs] = useState<CalcInputs>(defaults);

  function set(field: keyof CalcInputs, value: number) {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }

  const { chartData, breakevenYear, summaryBuy, summaryRent } = useMemo(() => {
    const {
      monthlyRent,
      homePrice,
      downPaymentPct,
      interestRate,
      propertyTaxRate,
      annualInsurance,
      maintenanceRate,
      annualRentIncrease,
      homeAppreciation,
      investmentReturn,
      years,
    } = inputs;

    const downPayment = homePrice * (downPaymentPct / 100);
    const loanAmount = homePrice - downPayment;
    const monthlyMortgage = calcMonthlyMortgage(loanAmount, interestRate, 30);

    let cumulativeRentCost = 0;
    let cumulativeBuyCost = downPayment; // opportunity cost of down payment starts here
    let currentRent = monthlyRent;
    let currentHomeValue = homePrice;
    let remainingLoan = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    let breakevenYear = -1;

    const data: { year: number; renting: number; buying: number }[] = [];

    for (let y = 1; y <= years; y++) {
      // Renting costs for the year
      const annualRentCost = currentRent * 12;
      // Opportunity cost on down payment & on accumulated equity (invested returns)
      // We track cumulative costs net of equity
      cumulativeRentCost += annualRentCost;

      // Buying costs for the year (mortgage P+I, taxes, insurance, maintenance)
      const annualTax = currentHomeValue * (propertyTaxRate / 100);
      const annualMaintenance = currentHomeValue * (maintenanceRate / 100);
      const annualBuyCost =
        monthlyMortgage * 12 + annualTax + annualInsurance + annualMaintenance;

      // Equity gained from principal paydown over year
      let yearPrincipal = 0;
      for (let m = 0; m < 12; m++) {
        const interestPmt = remainingLoan * monthlyRate;
        const principalPmt = monthlyMortgage - interestPmt;
        yearPrincipal += principalPmt;
        remainingLoan -= principalPmt;
        if (remainingLoan < 0) remainingLoan = 0;
      }

      // Home appreciation
      currentHomeValue *= 1 + homeAppreciation / 100;
      const equityGained = currentHomeValue - remainingLoan - downPayment;

      // Net buying cost = actual costs - equity built
      cumulativeBuyCost += annualBuyCost - yearPrincipal;

      // Opportunity cost of down payment (invested return the renter would earn)
      const opportunityCost = downPayment * (Math.pow(1 + investmentReturn / 100, y) - 1);
      const netBuying = cumulativeBuyCost + opportunityCost - equityGained;
      const netRenting = cumulativeRentCost;

      if (breakevenYear === -1 && netBuying <= netRenting) {
        breakevenYear = y;
      }

      data.push({
        year: y,
        renting: Math.round(netRenting),
        buying: Math.round(netBuying),
      });

      currentRent *= 1 + annualRentIncrease / 100;
    }

    const finalData = data[data.length - 1];

    return {
      chartData: data,
      breakevenYear,
      summaryBuy: finalData?.buying ?? 0,
      summaryRent: finalData?.renting ?? 0,
    };
  }, [inputs]);

  const isBuyingBetter = summaryBuy < summaryRent;

  return (
    <div className="space-y-8">
      {/* Inputs grid */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
        <h2 className="text-white font-semibold text-lg mb-5">Your Scenario</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NumberInput
            label="Monthly Rent"
            value={inputs.monthlyRent}
            onChange={(v) => set("monthlyRent", v)}
            prefix="$"
            step={50}
          />
          <NumberInput
            label="Home Purchase Price"
            value={inputs.homePrice}
            onChange={(v) => set("homePrice", v)}
            prefix="$"
            step={5000}
          />
          <NumberInput
            label="Down Payment"
            value={inputs.downPaymentPct}
            onChange={(v) => set("downPaymentPct", v)}
            suffix="%"
            step={1}
            min={0}
          />
          <NumberInput
            label="Mortgage Interest Rate"
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
          <NumberInput
            label="Annual Maintenance Rate"
            value={inputs.maintenanceRate}
            onChange={(v) => set("maintenanceRate", v)}
            suffix="%"
            step={0.1}
            min={0}
          />
          <NumberInput
            label="Annual Rent Increase"
            value={inputs.annualRentIncrease}
            onChange={(v) => set("annualRentIncrease", v)}
            suffix="%"
            step={0.5}
            min={0}
          />
          <NumberInput
            label="Home Appreciation Rate"
            value={inputs.homeAppreciation}
            onChange={(v) => set("homeAppreciation", v)}
            suffix="%"
            step={0.5}
            min={0}
          />
          <NumberInput
            label="Investment Return (Opportunity Cost)"
            value={inputs.investmentReturn}
            onChange={(v) => set("investmentReturn", v)}
            suffix="%"
            step={0.5}
            min={0}
          />
          <NumberInput
            label="Time Horizon"
            value={inputs.years}
            onChange={(v) => set("years", Math.max(2, Math.min(30, Math.round(v))))}
            suffix="yrs"
            step={1}
            min={2}
          />
        </div>
      </div>

      {/* Results summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`rounded-xl p-5 border ${isBuyingBetter ? "border-gold/40 bg-gold/10" : "border-white/10 bg-white/[0.04]"}`}
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Net Cost — Buying
          </p>
          <p className={`text-2xl font-bold ${isBuyingBetter ? "text-gold" : "text-white"}`}>
            {formatCurrency(summaryBuy)}
          </p>
          <p className="text-xs text-gray-500 mt-1">over {inputs.years} years</p>
        </div>
        <div
          className={`rounded-xl p-5 border ${!isBuyingBetter ? "border-gold/40 bg-gold/10" : "border-white/10 bg-white/[0.04]"}`}
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Net Cost — Renting
          </p>
          <p className={`text-2xl font-bold ${!isBuyingBetter ? "text-gold" : "text-white"}`}>
            {formatCurrency(summaryRent)}
          </p>
          <p className="text-xs text-gray-500 mt-1">over {inputs.years} years</p>
        </div>
        <div className="rounded-xl p-5 border border-white/10 bg-white/[0.04]">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            Breakeven Point
          </p>
          <p className="text-2xl font-bold text-white">
            {breakevenYear > 0
              ? `Year ${breakevenYear}`
              : breakevenYear === -1
              ? `> ${inputs.years} yrs`
              : "Immediate"}
          </p>
          <p className="text-xs text-gray-500 mt-1">buying becomes cheaper</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-4">Cumulative Net Cost Over Time</h3>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis
              dataKey="year"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={(v) => `Yr ${v}`}
            />
            <YAxis
              tick={{ fill: "#9ca3af", fontSize: 12 }}
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
            <Line
              type="monotone"
              dataKey="buying"
              name="Buying"
              stroke="#C9A84C"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="renting"
              name="Renting"
              stroke="#6b7280"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recommendation */}
      <div
        className={`rounded-xl p-5 border ${isBuyingBetter ? "border-gold/30 bg-gold/5" : "border-white/10 bg-white/[0.04]"}`}
      >
        <p className="text-white font-semibold mb-1">
          {isBuyingBetter
            ? "📈 Buying appears more cost-effective over your time horizon."
            : "🏠 Renting appears more cost-effective over your time horizon."}
        </p>
        <p className="text-gray-400 text-sm">
          {isBuyingBetter
            ? `After ${inputs.years} years, buying saves an estimated ${formatCurrency(Math.abs(summaryRent - summaryBuy))} net of equity and opportunity costs.`
            : `After ${inputs.years} years, renting costs an estimated ${formatCurrency(Math.abs(summaryRent - summaryBuy))} less — though buying builds equity that renting doesn't.`}{" "}
          Results depend heavily on your assumptions. Consult a financial advisor
          before making a decision.
        </p>
      </div>
    </div>
  );
}
