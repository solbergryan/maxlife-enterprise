import { z } from "zod";
import {
  FL_CAP_RATES_2026,
  CENTRAL_FL_MARKETS,
  findCapRateBenchmark,
  getMarket,
} from "../lib/cap-rate-data.js";

export const getCapRateBenchmarksSchema = z.object({
  assetClass: z.string().optional().describe(
    "Filter by asset class, e.g. 'Dollar General', 'multifamily', 'industrial'. Omit to get all."
  ),
  market: z.string().optional().describe(
    "Market name, e.g. 'Orlando', 'Space Coast', 'Lakeland'. Returns market overview when provided."
  ),
});

export type GetCapRateBenchmarksInput = z.infer<typeof getCapRateBenchmarksSchema>;

export function getCapRateBenchmarks(input: GetCapRateBenchmarksInput) {
  const benchmarks = input.assetClass
    ? findCapRateBenchmark(input.assetClass)
    : FL_CAP_RATES_2026;

  const marketInfo = input.market ? getMarket(input.market) : undefined;

  return {
    asOf: "2026 Florida Market",
    benchmarks: benchmarks.map(b => ({
      assetClass: b.assetClass,
      capRateRange: `${(b.rangeLow * 100).toFixed(2)}% – ${(b.rangeHigh * 100).toFixed(2)}%`,
      midpoint: `${(((b.rangeLow + b.rangeHigh) / 2) * 100).toFixed(2)}%`,
      notes: b.notes ?? null,
    })),
    market: marketInfo
      ? {
          name: marketInfo.name,
          county: marketInfo.county,
          population: marketInfo.population,
          keyDrivers: marketInfo.keyDrivers,
          strongPropertyTypes: marketInfo.strongPropertyTypes,
          capRateComment: marketInfo.capRateComment,
        }
      : undefined,
    availableMarkets: input.market ? undefined : CENTRAL_FL_MARKETS.map(m => m.name),
  };
}

// ─────────────────────────────────────────────────────────────────────

export const calculateCapRateSchema = z.object({
  mode: z.enum(["cap_rate", "price", "noi"]).describe(
    "What to calculate: 'cap_rate' (from NOI and price), 'price' (from NOI and cap rate), 'noi' (from price and cap rate)"
  ),
  noi: z.number().positive().optional().describe("Net Operating Income in dollars per year"),
  price: z.number().positive().optional().describe("Property price / value in dollars"),
  capRate: z.number().positive().optional().describe("Cap rate as a percentage, e.g. 6.0"),
});

export type CalculateCapRateInput = z.infer<typeof calculateCapRateSchema>;

export function calculateCapRate(input: CalculateCapRateInput) {
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  switch (input.mode) {
    case "cap_rate": {
      if (!input.noi || !input.price) return { error: "noi and price are required for mode 'cap_rate'" };
      const cap = input.noi / input.price;
      return {
        result: `${(cap * 100).toFixed(2)}%`,
        formula: `Cap Rate = NOI / Price = ${fmt(input.noi)} / ${fmt(input.price)}`,
        noi: fmt(input.noi),
        price: fmt(input.price),
        capRate: `${(cap * 100).toFixed(2)}%`,
      };
    }
    case "price": {
      if (!input.noi || !input.capRate) return { error: "noi and capRate are required for mode 'price'" };
      const price = input.noi / (input.capRate / 100);
      return {
        result: fmt(price),
        formula: `Price = NOI / Cap Rate = ${fmt(input.noi)} / ${input.capRate}%`,
        noi: fmt(input.noi),
        capRate: `${input.capRate}%`,
        price: fmt(price),
      };
    }
    case "noi": {
      if (!input.price || !input.capRate) return { error: "price and capRate are required for mode 'noi'" };
      const noi = input.price * (input.capRate / 100);
      return {
        result: `${fmt(noi)}/yr`,
        formula: `NOI = Price × Cap Rate = ${fmt(input.price)} × ${input.capRate}%`,
        price: fmt(input.price),
        capRate: `${input.capRate}%`,
        noi: fmt(noi),
      };
    }
  }
}
