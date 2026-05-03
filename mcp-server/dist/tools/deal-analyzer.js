import { z } from "zod";
import { analyzeDeal } from "../lib/calculations.js";
export const analyzeDealSchema = z.object({
    assetType: z.enum(["NNN", "Multifamily", "SFR"]).default("NNN").describe("Property type: NNN (triple-net commercial), Multifamily (apartments), or SFR (single-family rental)"),
    purchasePrice: z.number().positive().describe("Purchase price in dollars"),
    buildingSF: z.number().positive().optional().describe("Building square footage"),
    units: z.number().int().positive().optional().describe("Number of units (Multifamily only)"),
    // Revenue
    annualRent: z.number().positive().optional().describe("Annual NNN rent in dollars (NNN leases)"),
    monthlyRentPerUnit: z.number().positive().optional().describe("Monthly rent per unit in dollars (Multifamily / SFR)"),
    rentGrowth: z.number().min(0).max(20).default(2.0).describe("Annual rent growth rate as a percentage, e.g. 2.0"),
    vacancyRate: z.number().min(0).max(100).default(0).describe("Vacancy rate as a percentage, e.g. 5"),
    // Expenses (Multifamily / SFR only — ignored for NNN)
    opexRatio: z.number().min(0).max(100).optional().describe("Operating expense ratio as % of EGI, e.g. 40. If omitted, use line items below."),
    propertyTaxes: z.number().min(0).optional().describe("Annual property taxes in dollars"),
    insurance: z.number().min(0).optional().describe("Annual insurance in dollars"),
    repairs: z.number().min(0).optional().describe("Annual repairs & maintenance in dollars"),
    mgmtPct: z.number().min(0).max(30).default(8).describe("Property management fee as % of EGI"),
    // Financing
    downPaymentPct: z.number().min(0).max(100).default(25).describe("Down payment as a percentage, e.g. 25"),
    interestRate: z.number().min(0).max(30).default(6.75).describe("Loan interest rate as a percentage, e.g. 6.75"),
    amortization: z.number().int().min(1).max(40).default(30).describe("Loan amortization period in years"),
    closingCosts: z.number().min(0).default(15000).describe("Total closing costs in dollars"),
    loanOrigFee: z.number().min(0).max(5).default(1.0).describe("Loan origination fee as a percentage, e.g. 1.0"),
    // Hold & Exit
    holdPeriod: z.number().int().min(1).max(30).default(10).describe("Investment hold period in years"),
    exitCapSpread: z.number().min(-3).max(5).default(0.5).describe("How much the exit cap rate differs from the entry cap rate, in percentage points. Positive = market cools (lower sale price), negative = market heats (higher sale price). E.g. 0.5 is conservative."),
});
export function runDealAnalysis(input) {
    const dealInputs = {
        assetType: input.assetType,
        purchasePrice: input.purchasePrice,
        buildingSF: input.buildingSF,
        units: input.units,
        annualRent: input.annualRent,
        monthlyRentPerUnit: input.monthlyRentPerUnit,
        rentGrowth: input.rentGrowth,
        vacancyRate: input.vacancyRate,
        opexRatio: input.opexRatio,
        propertyTaxes: input.propertyTaxes,
        insurance: input.insurance,
        repairs: input.repairs,
        mgmtPct: input.mgmtPct,
        downPaymentPct: input.downPaymentPct,
        interestRate: input.interestRate,
        amortization: input.amortization,
        closingCosts: input.closingCosts,
        loanOrigFee: input.loanOrigFee,
        holdPeriod: input.holdPeriod,
        exitCapSpread: input.exitCapSpread,
    };
    const result = analyzeDeal(dealInputs);
    if ("error" in result)
        return result;
    const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
    const pct = (n) => `${(n * 100).toFixed(2)}%`;
    return {
        summary: {
            grade: result.grade,
            irr: pct(result.irr),
            dscr: `${result.dscr.toFixed(2)}x`,
            avgCashOnCash: pct(result.avgCashOnCash),
            equityMultiple: `${result.equityMultiple.toFixed(2)}x`,
            entranceCap: pct(result.entranceCap),
            noi: fmt(result.noi),
            totalReturn: fmt(result.totalReturn),
        },
        scores: {
            irr: result.scores.irr,
            dscr: result.scores.dscr,
            cashOnCash: result.scores.coc,
            equityMultiple: result.scores.em,
        },
        income: {
            grossPotentialRent: fmt(result.grossPotentialRent),
            effectiveGrossIncome: fmt(result.effectiveGrossIncome),
            operatingExpenses: fmt(result.operatingExpenses),
            noi: fmt(result.noi),
            entranceCap: pct(result.entranceCap),
            yieldOnCost: pct(result.yieldOnCost),
        },
        financing: {
            purchasePrice: fmt(result.purchasePrice),
            downPayment: fmt(result.downPayment),
            totalEquityInvested: fmt(result.totalEquityInvested),
            loanAmount: fmt(result.loanAmount),
            monthlyPayment: fmt(result.monthlyPayment),
            annualDebtService: fmt(result.annualDebtService),
            dscr: `${result.dscr.toFixed(2)}x`,
        },
        exitAndReturns: {
            holdYears: result.holdYears,
            exitCap: pct(result.exitCap),
            exitNOI: fmt(result.exitNOI),
            exitValue: fmt(result.exitValue),
            sellingCosts: fmt(result.sellingCosts),
            loanPayoff: fmt(result.loanPayoff),
            netSaleProceeds: fmt(result.netSaleProceeds),
            totalCashFlow: fmt(result.totalCashFlow),
            totalReturn: fmt(result.totalReturn),
        },
        suggestedOffer: result.suggestedOfferPrice < result.purchasePrice ? {
            suggestedPrice: fmt(result.suggestedOfferPrice),
            discountFromAsk: `${(result.discountFromAsk * 100).toFixed(1)}%`,
            rationale: `Offer ${fmt(result.suggestedOfferPrice)} to achieve a 1.25x DSCR on day one with your financing terms.`,
            atSuggestedPrice: {
                dscr: `${result.suggestedMetrics.dscr.toFixed(2)}x`,
                capRate: pct(result.suggestedMetrics.entranceCap),
                cashOnCash: pct(result.suggestedMetrics.cashOnCash),
                downPayment: fmt(result.suggestedMetrics.downPayment),
                monthlyPayment: fmt(result.suggestedMetrics.monthlyPayment),
            },
        } : { note: "Current asking price already meets or beats 1.25x DSCR — no discount required." },
        yearByYear: result.yearlyData.map(y => ({
            year: y.year,
            noi: fmt(y.noi),
            debtService: fmt(y.debtService),
            cashFlow: fmt(y.cashFlow),
            cumulativeCF: fmt(y.cumulativeCF),
            loanBalance: fmt(y.loanBalance),
        })),
        benchmarks: {
            irr: { value: pct(result.irr), benchmark: "> 12% is strong", status: result.irr >= 0.12 ? "PASS" : result.irr >= 0.08 ? "WATCH" : "FAIL" },
            dscr: { value: `${result.dscr.toFixed(2)}x`, benchmark: "> 1.25x lender minimum", status: result.dscr >= 1.25 ? "PASS" : result.dscr >= 1.10 ? "WATCH" : "FAIL" },
            cashOnCash: { value: pct(result.avgCashOnCash), benchmark: "> 6% target", status: result.avgCashOnCash >= 0.06 ? "PASS" : result.avgCashOnCash >= 0.03 ? "WATCH" : "FAIL" },
            equityMultiple: { value: `${result.equityMultiple.toFixed(2)}x`, benchmark: "> 2.0x is strong", status: result.equityMultiple >= 2.0 ? "PASS" : result.equityMultiple >= 1.5 ? "WATCH" : "FAIL" },
        },
        disclaimer: "For informational and educational purposes only. Not financial or investment advice.",
    };
}
