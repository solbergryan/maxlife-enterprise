"use client";

import { useMemo, useState } from "react";

type Mode = "compute-cap" | "compute-price" | "compute-noi";

function money(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function pct(n: number): string {
  return `${(n * 100).toFixed(2)}%`;
}

export default function CapRateCalculator() {
  const [mode, setMode] = useState<Mode>("compute-cap");
  const [noi, setNoi] = useState(125000);
  const [price, setPrice] = useState(2000000);
  const [capRate, setCapRate] = useState(6.0);

  const result = useMemo(() => {
    switch (mode) {
      case "compute-cap":
        return {
          label: "Cap Rate",
          value: noi / price,
          formula: `${money(noi)} / ${money(price)} = ${pct(noi / price)}`,
        };
      case "compute-price":
        return {
          label: "Implied Purchase Price / Value",
          value: noi / (capRate / 100),
          formula: `${money(noi)} / ${capRate}% = ${money(
            noi / (capRate / 100)
          )}`,
        };
      case "compute-noi":
        return {
          label: "Required NOI",
          value: price * (capRate / 100),
          formula: `${money(price)} × ${capRate}% = ${money(
            price * (capRate / 100)
          )}`,
        };
    }
  }, [mode, noi, price, capRate]);

  return (
    <div className="space-y-6">
      {/* Mode Switcher */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4">
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
          What do you want to calculate?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { key: "compute-cap", label: "Cap Rate", desc: "NOI + Price" },
            { key: "compute-price", label: "Purchase Price", desc: "NOI + Cap Rate" },
            { key: "compute-noi", label: "Required NOI", desc: "Price + Cap Rate" },
          ].map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key as Mode)}
              className={`text-left p-3 rounded-lg border transition-colors ${
                mode === m.key
                  ? "bg-gold text-dark border-gold"
                  : "bg-dark border-white/10 text-gray-300 hover:border-gold/40"
              }`}
            >
              <p className="font-semibold text-sm">{m.label}</p>
              <p className={`text-xs ${mode === m.key ? "text-dark/70" : "text-gray-500"}`}>
                {m.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 space-y-5">
        {(mode === "compute-cap" || mode === "compute-price") && (
          <label className="block">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Net Operating Income (NOI) — Annual
            </span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={noi}
                onChange={(e) => setNoi(Math.max(0, Number(e.target.value)))}
                className="w-full bg-dark border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-gold/50"
              />
            </div>
            <p className="text-gray-500 text-xs mt-1">
              Annual rent minus operating expenses (or just base rent for
              absolute NNN deals)
            </p>
          </label>
        )}

        {(mode === "compute-cap" || mode === "compute-noi") && (
          <label className="block">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Purchase Price
            </span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                $
              </span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                className="w-full bg-dark border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-gold/50"
              />
            </div>
          </label>
        )}

        {(mode === "compute-price" || mode === "compute-noi") && (
          <label className="block">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Cap Rate
            </span>
            <div className="relative">
              <input
                type="number"
                value={capRate}
                step={0.25}
                min={0}
                max={20}
                onChange={(e) => setCapRate(Number(e.target.value))}
                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
            <p className="text-gray-500 text-xs mt-1">
              Typical NNN cap rates in 2026: 5.5% – 7.0%
            </p>
          </label>
        )}
      </div>

      {/* Result */}
      <div className="bg-gradient-to-br from-gold/20 to-transparent border border-gold/40 rounded-xl p-8 text-center">
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
          {result.label}
        </p>
        <p className="text-5xl sm:text-6xl font-bold text-white mb-3">
          {mode === "compute-cap" ? pct(result.value) : money(result.value)}
        </p>
        <p className="text-gray-300 text-sm font-mono">{result.formula}</p>
      </div>

      {/* Cap Rate Reference */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
        <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
          2026 Florida Cap Rate Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-gray-300 text-xs font-medium pb-2">
                  Asset Type
                </th>
                <th className="text-left text-gray-300 text-xs font-medium pb-2">
                  Typical Cap Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Chick-fil-A (ground lease)", "3.75% - 4.75%"],
                ["McDonald's (ground lease)", "4.50% - 5.25%"],
                ["Starbucks NNN", "4.75% - 5.50%"],
                ["AutoZone / O'Reilly NNN", "5.25% - 6.00%"],
                ["CVS Pharmacy", "5.50% - 6.50%"],
                ["Dollar General NNN", "5.75% - 6.50%"],
                ["Walgreens Pharmacy", "6.00% - 7.00%"],
                ["Family Dollar NNN", "6.00% - 6.75%"],
                ["Multifamily Class A", "5.00% - 5.75%"],
                ["Industrial / Warehouse", "5.50% - 6.50%"],
                ["Retail Shopping Center", "6.50% - 7.50%"],
                ["Suburban Office", "7.00% - 8.50%"],
                ["Medical Office Building", "6.00% - 6.75%"],
              ].map(([asset, rate]) => (
                <tr key={asset} className="border-b border-white/10/50">
                  <td className="py-2 text-white">{asset}</td>
                  <td className="py-2 text-gold font-medium">{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
