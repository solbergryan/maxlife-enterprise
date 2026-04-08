"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    purchasePrice: "",
    annualNOI: "",
    downPaymentPct: "25",
    interestRate: "7.0",
    loanTermYears: "25",
  });

  const price = parseFloat(inputs.purchasePrice) || 0;
  const noi = parseFloat(inputs.annualNOI) || 0;
  const downPct = parseFloat(inputs.downPaymentPct) || 0;
  const rate = parseFloat(inputs.interestRate) || 0;
  const termYears = parseFloat(inputs.loanTermYears) || 0;

  const downPayment = price * (downPct / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const totalPayments = termYears * 12;

  let monthlyPayment = 0;
  if (monthlyRate > 0 && totalPayments > 0 && loanAmount > 0) {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }

  const annualDebtService = monthlyPayment * 12;
  const annualCashFlow = noi - annualDebtService;
  const capRate = price > 0 ? (noi / price) * 100 : 0;
  const cashOnCash = downPayment > 0 ? (annualCashFlow / downPayment) * 100 : 0;

  const hasInputs = price > 0 && noi > 0;

  const inputClass =
    "w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors";

  function formatCurrency(val: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  }

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-6">
      <h3 className="text-white text-xl font-semibold mb-6">
        Investment ROI Calculator
      </h3>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
            Purchase Price ($)
          </label>
          <input
            type="number"
            placeholder="1,500,000"
            value={inputs.purchasePrice}
            onChange={(e) =>
              setInputs({ ...inputs, purchasePrice: e.target.value })
            }
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
            Annual NOI ($)
          </label>
          <input
            type="number"
            placeholder="100,000"
            value={inputs.annualNOI}
            onChange={(e) =>
              setInputs({ ...inputs, annualNOI: e.target.value })
            }
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
            Down Payment (%)
          </label>
          <input
            type="number"
            placeholder="25"
            value={inputs.downPaymentPct}
            onChange={(e) =>
              setInputs({ ...inputs, downPaymentPct: e.target.value })
            }
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
            Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="7.0"
            value={inputs.interestRate}
            onChange={(e) =>
              setInputs({ ...inputs, interestRate: e.target.value })
            }
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
            Loan Term (Years)
          </label>
          <input
            type="number"
            placeholder="25"
            value={inputs.loanTermYears}
            onChange={(e) =>
              setInputs({ ...inputs, loanTermYears: e.target.value })
            }
            className={inputClass}
          />
        </div>
      </div>

      {/* Results */}
      {hasInputs ? (
        <div className="border-t border-dark-border pt-6">
          <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-4">
            Investment Analysis
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-dark rounded-lg p-4 text-center">
              <p className="text-gold text-2xl font-bold">
                {capRate.toFixed(2)}%
              </p>
              <p className="text-gray-500 text-xs mt-1">Cap Rate</p>
            </div>
            <div className="bg-dark rounded-lg p-4 text-center">
              <p
                className={`text-2xl font-bold ${cashOnCash >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                {cashOnCash.toFixed(2)}%
              </p>
              <p className="text-gray-500 text-xs mt-1">Cash-on-Cash Return</p>
            </div>
            <div className="bg-dark rounded-lg p-4 text-center">
              <p className="text-white text-2xl font-bold">
                {formatCurrency(monthlyPayment)}
              </p>
              <p className="text-gray-500 text-xs mt-1">Monthly Payment</p>
            </div>
            <div className="bg-dark rounded-lg p-4 text-center">
              <p className="text-white text-2xl font-bold">
                {formatCurrency(annualDebtService)}
              </p>
              <p className="text-gray-500 text-xs mt-1">Annual Debt Service</p>
            </div>
            <div className="bg-dark rounded-lg p-4 text-center">
              <p
                className={`text-2xl font-bold ${annualCashFlow >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                {formatCurrency(annualCashFlow)}
              </p>
              <p className="text-gray-500 text-xs mt-1">Annual Cash Flow</p>
            </div>
            <div className="bg-dark rounded-lg p-4 text-center">
              <p className="text-white text-2xl font-bold">
                {formatCurrency(downPayment)}
              </p>
              <p className="text-gray-500 text-xs mt-1">Down Payment</p>
            </div>
          </div>

          {/* Formulas */}
          <div className="mt-6 bg-dark/50 border border-dark-border rounded-lg p-4 text-xs text-gray-500 space-y-1">
            <p>
              Cap Rate = NOI / Purchase Price = {formatCurrency(noi)} /{" "}
              {formatCurrency(price)} = {capRate.toFixed(2)}%
            </p>
            <p>
              Cash-on-Cash = Annual Cash Flow / Down Payment ={" "}
              {formatCurrency(annualCashFlow)} / {formatCurrency(downPayment)} ={" "}
              {cashOnCash.toFixed(2)}%
            </p>
          </div>
        </div>
      ) : (
        <div className="border-t border-dark-border pt-6 text-center text-gray-500 text-sm">
          Enter a purchase price and annual NOI to see your investment analysis.
        </div>
      )}
    </div>
  );
}
