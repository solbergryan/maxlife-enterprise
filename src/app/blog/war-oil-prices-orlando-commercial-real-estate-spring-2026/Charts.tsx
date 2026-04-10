"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

// ── Chart 1: Construction hard cost exposure to oil-linked inputs ──────────
// Industry-level illustrative estimates. Numbers are directional.
const constructionCostData = [
  { category: "Steel (energy-intensive)", pct: 18, fill: "#EFBF04" },
  { category: "Concrete & Cement", pct: 12, fill: "#EFBF04" },
  { category: "Asphalt & Roofing", pct: 8, fill: "#EFBF04" },
  { category: "Plastics, Insulation, Coatings", pct: 7, fill: "#EFBF04" },
  { category: "Diesel & Job-Site Fuel", pct: 5, fill: "#EFBF04" },
  { category: "Transport & Logistics", pct: 5, fill: "#EFBF04" },
];

// ── Chart 2: Orlando CRE sector sensitivity to an oil/geopolitical shock ──
// Higher = more exposure to downside. Illustrative directional scoring (1-10).
const sectorSensitivityData = [
  { sector: "Tourism Hospitality", score: 9, fill: "#ef4444" },
  { sector: "Tourism-Linked Retail", score: 8, fill: "#f97316" },
  { sector: "Speculative Class B Office", score: 7, fill: "#f97316" },
  { sector: "Industrial / Logistics", score: 5, fill: "#f59e0b" },
  { sector: "Class A Office", score: 5, fill: "#f59e0b" },
  { sector: "Multifamily", score: 4, fill: "#eab308" },
  { sector: "Medical Office", score: 3, fill: "#84cc16" },
  { sector: "Grocery-Anchored Retail", score: 2, fill: "#4ade80" },
  { sector: "NNN w/ Credit Tenant", score: 2, fill: "#4ade80" },
];

// ── Chart 3: What a 100bps cap rate move does to a $5M NNN property ─────
// Math: Value = NOI / Cap Rate. Base NOI = $300k (6.0% cap on $5M).
const NOI = 300_000;
const capRateImpactData = [
  { cap: "5.5%", value: Math.round(NOI / 0.055) },
  { cap: "6.0%", value: Math.round(NOI / 0.06) }, // $5,000,000 base
  { cap: "6.5%", value: Math.round(NOI / 0.065) },
  { cap: "7.0%", value: Math.round(NOI / 0.07) },
  { cap: "7.5%", value: Math.round(NOI / 0.075) },
];

const fmtUsd = (v: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);

const tooltipStyle = {
  backgroundColor: "#141414",
  border: "1px solid #1e2d3d",
  borderRadius: "8px",
  fontSize: 12,
};

export default function WarOilChartsSection() {
  return (
    <div className="space-y-8 my-12">
      {/* Chart 1: Construction Cost Exposure */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6">
        <h3 className="text-white font-semibold text-lg mb-1">
          Construction Hard Costs Exposed to Oil-Linked Inputs
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Share of a typical commercial construction budget that moves with
          oil and petrochemical prices. Illustrative industry-level estimates.
        </p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={constructionCostData}
              layout="vertical"
              margin={{ top: 5, right: 40, bottom: 5, left: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2d3d" />
              <XAxis
                type="number"
                domain={[0, 22]}
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#1e2d3d" }}
                tickFormatter={(v: number) => `${v}%`}
              />
              <YAxis
                type="category"
                dataKey="category"
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#1e2d3d" }}
                width={180}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={{ color: "#9ca3af" }}
                formatter={(value) => [`${Number(value ?? 0)}% of hard costs`, ""]}
              />
              <Bar dataKey="pct" radius={[0, 4, 4, 0]}>
                {constructionCostData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.fill} />
                ))}
                <LabelList
                  dataKey="pct"
                  position="right"
                  fill="#d1d5db"
                  fontSize={11}
                  formatter={(v) => `${Number(v ?? 0)}%`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          Combined oil-linked exposure across these categories can account
          for roughly half of a commercial project&apos;s hard cost budget —
          which is why even a modest sustained oil spike flows through to
          development pro formas.
        </p>
      </div>

      {/* Chart 2: Sector Sensitivity */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6">
        <h3 className="text-white font-semibold text-lg mb-1">
          Orlando CRE Sector Sensitivity to an Oil / Geopolitical Shock
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Directional sensitivity score (1 = low exposure, 10 = high
          exposure) based on tenant demand, debt profile, and pricing power.
          Illustrative.
        </p>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sectorSensitivityData}
              layout="vertical"
              margin={{ top: 5, right: 40, bottom: 5, left: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2d3d" />
              <XAxis
                type="number"
                domain={[0, 10]}
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#1e2d3d" }}
              />
              <YAxis
                type="category"
                dataKey="sector"
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#1e2d3d" }}
                width={190}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={{ color: "#9ca3af" }}
                formatter={(value) => [
                  `${Number(value ?? 0)}/10 sensitivity`,
                  "",
                ]}
              />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {sectorSensitivityData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.fill} />
                ))}
                <LabelList
                  dataKey="score"
                  position="right"
                  fill="#d1d5db"
                  fontSize={11}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          Necessity retail, medical office, and NNN credit-tenant properties
          tend to hold pricing power through macro volatility. Hospitality
          and tourism-linked assets are the most exposed in the Orlando
          market.
        </p>
      </div>

      {/* Chart 3: Cap Rate Sensitivity on a $5M NNN deal */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6">
        <h3 className="text-white font-semibold text-lg mb-1">
          Cap Rate Sensitivity: $300k NOI NNN Property
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          How a 100 basis point move in cap rates changes the value of a
          hypothetical Orlando NNN deal priced at $5M / 6.0% cap. Pure math
          example — value = NOI ÷ cap rate.
        </p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={capRateImpactData}
              margin={{ top: 20, right: 5, bottom: 5, left: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2d3d" />
              <XAxis
                dataKey="cap"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "#1e2d3d" }}
                label={{
                  value: "Cap Rate",
                  position: "insideBottom",
                  offset: -2,
                  fill: "#6b7280",
                  fontSize: 11,
                }}
              />
              <YAxis
                tick={{ fill: "#9ca3af", fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#1e2d3d" }}
                tickFormatter={(v: number) => `$${(v / 1_000_000).toFixed(1)}M`}
                domain={[3_500_000, 5_800_000]}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={{ color: "#9ca3af" }}
                formatter={(value) => [fmtUsd(Number(value ?? 0)), "Value"]}
                labelFormatter={(label) => `Cap rate: ${label}`}
              />
              <Bar dataKey="value" fill="#EFBF04" radius={[4, 4, 0, 0]}>
                <LabelList
                  dataKey="value"
                  position="top"
                  fill="#d1d5db"
                  fontSize={11}
                  formatter={(v) =>
                    `$${(Number(v ?? 0) / 1_000_000).toFixed(2)}M`
                  }
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          A 100bps cap rate expansion — a realistic move in a risk-off
          environment — wipes roughly $700k off this deal&apos;s value. For
          leveraged owners, the equity impact is amplified. This is why
          stress-testing exit cap rates matters more than most other
          underwriting assumptions right now.
        </p>
      </div>
    </div>
  );
}
