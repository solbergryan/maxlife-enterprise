"use client";

import { useMemo, useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();

// Bonus depreciation phase-out schedule per 2017 TCJA
function bonusDepreciationRate(year: number): number {
  if (year <= 2022) return 1.0;
  if (year === 2023) return 0.8;
  if (year === 2024) return 0.6;
  if (year === 2025) return 0.4;
  if (year === 2026) return 0.2;
  return 0; // 2027+
}

function money(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function CostSegCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(2000000);
  const [landPercent, setLandPercent] = useState(20);
  const [assetType, setAssetType] = useState<
    "nnn-retail" | "office" | "multifamily" | "industrial" | "hospitality"
  >("nnn-retail");
  const [acqYear, setAcqYear] = useState(CURRENT_YEAR);
  const [marginalTaxRate, setMarginalTaxRate] = useState(37);

  const results = useMemo(() => {
    const buildingValue = purchasePrice * (1 - landPercent / 100);
    const landValue = purchasePrice - buildingValue;

    // Asset-type-specific reclassification percentages based on typical cost seg study findings
    const reclassificationProfile: Record<
      typeof assetType,
      {
        pct5yr: number;
        pct15yr: number;
        usefulLife: number;
      }
    > = {
      "nnn-retail": { pct5yr: 0.15, pct15yr: 0.1, usefulLife: 39 },
      office: { pct5yr: 0.18, pct15yr: 0.12, usefulLife: 39 },
      multifamily: { pct5yr: 0.2, pct15yr: 0.1, usefulLife: 27.5 },
      industrial: { pct5yr: 0.1, pct15yr: 0.1, usefulLife: 39 },
      hospitality: { pct5yr: 0.25, pct15yr: 0.12, usefulLife: 39 },
    };

    const profile = reclassificationProfile[assetType];
    const reclass5yr = buildingValue * profile.pct5yr;
    const reclass15yr = buildingValue * profile.pct15yr;
    const remainingBuilding = buildingValue - reclass5yr - reclass15yr;

    // Without cost seg: straight-line over useful life
    const year1DepWithoutCostSeg = buildingValue / profile.usefulLife;

    // With cost seg: bonus + first year straight-line on remaining
    const bonusRate = bonusDepreciationRate(acqYear);
    const bonusDepYear1 = (reclass5yr + reclass15yr) * bonusRate;
    const nonBonusStraightLineYear1 =
      (reclass5yr * (1 - bonusRate)) / 5 +
      (reclass15yr * (1 - bonusRate)) / 15 +
      remainingBuilding / profile.usefulLife;
    const totalYear1WithCostSeg = bonusDepYear1 + nonBonusStraightLineYear1;

    const year1AcceleratedDeduction =
      totalYear1WithCostSeg - year1DepWithoutCostSeg;
    const year1TaxSavings = year1AcceleratedDeduction * (marginalTaxRate / 100);

    const studyCost = Math.min(Math.max(buildingValue * 0.0015, 5000), 25000);
    const netYear1Benefit = year1TaxSavings - studyCost;
    const roiMultiple = year1TaxSavings / studyCost;

    return {
      buildingValue,
      landValue,
      reclass5yr,
      reclass15yr,
      remainingBuilding,
      bonusRate,
      bonusDepYear1,
      year1DepWithoutCostSeg,
      totalYear1WithCostSeg,
      year1AcceleratedDeduction,
      year1TaxSavings,
      studyCost,
      netYear1Benefit,
      roiMultiple,
    };
  }, [purchasePrice, landPercent, assetType, acqYear, marginalTaxRate]);

  const bonusWarning = results.bonusRate === 0;

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 space-y-5">
        <h3 className="text-gold text-sm font-semibold uppercase tracking-wider">
          Property Inputs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                value={purchasePrice}
                onChange={(e) =>
                  setPurchasePrice(Math.max(0, Number(e.target.value)))
                }
                className="w-full bg-dark border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-gold/50"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Land Percentage
              <span className="text-gray-500 text-xs ml-2">
                (typical 15-25%)
              </span>
            </span>
            <div className="relative">
              <input
                type="number"
                value={landPercent}
                min={5}
                max={50}
                onChange={(e) =>
                  setLandPercent(
                    Math.max(5, Math.min(50, Number(e.target.value)))
                  )
                }
                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Property Type
            </span>
            <select
              value={assetType}
              onChange={(e) =>
                setAssetType(e.target.value as typeof assetType)
              }
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50"
            >
              <option value="nnn-retail">NNN Retail / Net Lease</option>
              <option value="office">Office Building</option>
              <option value="multifamily">Multifamily / Apartments</option>
              <option value="industrial">Industrial / Warehouse</option>
              <option value="hospitality">Hotel / Hospitality</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Acquisition Year
            </span>
            <select
              value={acqYear}
              onChange={(e) => setAcqYear(Number(e.target.value))}
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50"
            >
              {[
                CURRENT_YEAR - 2,
                CURRENT_YEAR - 1,
                CURRENT_YEAR,
                CURRENT_YEAR + 1,
              ].map((y) => (
                <option key={y} value={y}>
                  {y} (Bonus: {(bonusDepreciationRate(y) * 100).toFixed(0)}%)
                </option>
              ))}
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className="text-gray-300 text-sm font-medium mb-2 block">
              Marginal Tax Rate
              <span className="text-gray-500 text-xs ml-2">
                (federal + state combined)
              </span>
            </span>
            <div className="relative">
              <input
                type="number"
                value={marginalTaxRate}
                min={10}
                max={50}
                onChange={(e) =>
                  setMarginalTaxRate(
                    Math.max(10, Math.min(50, Number(e.target.value)))
                  )
                }
                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Headline Result */}
      <div className="bg-gradient-to-br from-gold/20 to-transparent border border-gold/40 rounded-xl p-8 text-center">
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
          Estimated First-Year Tax Savings
        </p>
        <p className="text-5xl sm:text-6xl font-bold text-white mb-3">
          {money(results.year1TaxSavings)}
        </p>
        <p className="text-gray-300 text-sm">
          Net of estimated {money(results.studyCost)} cost seg study cost:{" "}
          <strong className="text-white">
            {money(results.netYear1Benefit)}
          </strong>{" "}
          ({results.roiMultiple.toFixed(1)}x ROI)
        </p>
      </div>

      {/* Bonus Warning */}
      {bonusWarning && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
          <h4 className="text-amber-300 font-semibold text-sm mb-2">
            Bonus Depreciation Has Expired
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            For acquisitions in {acqYear}, federal bonus depreciation is 0%
            under the 2017 TCJA phase-out schedule. Cost segregation still
            provides meaningful acceleration through 5-year and 15-year MACRS
            depreciation — just without the additional bonus first-year kick.
            Pending tax legislation could restore 100% bonus depreciation;
            consult your CPA for the latest.
          </p>
        </div>
      )}

      {/* Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
          <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            Basis Allocation
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">Land</span>
              <span className="text-gray-300">{money(results.landValue)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">Building</span>
              <span className="text-gray-300">
                {money(results.buildingValue)}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">
                5-Year Reclassification (Personal Property)
              </span>
              <span className="text-gold font-medium">
                {money(results.reclass5yr)}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">
                15-Year Reclassification (Land Improvements)
              </span>
              <span className="text-gold font-medium">
                {money(results.reclass15yr)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-300">
                Remaining Building (39-yr or 27.5-yr)
              </span>
              <span className="text-gray-300">
                {money(results.remainingBuilding)}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
          <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            Year 1 Depreciation
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">Without Cost Segregation</span>
              <span className="text-gray-300">
                {money(results.year1DepWithoutCostSeg)}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">With Cost Segregation</span>
              <span className="text-white font-medium">
                {money(results.totalYear1WithCostSeg)}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">Accelerated Deduction</span>
              <span className="text-gold font-semibold">
                {money(results.year1AcceleratedDeduction)}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-gray-300">
                @ {marginalTaxRate}% marginal rate
              </span>
              <span className="text-gold">×</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-white font-semibold">
                Estimated Tax Savings
              </span>
              <span className="text-gold text-lg font-bold">
                {money(results.year1TaxSavings)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
