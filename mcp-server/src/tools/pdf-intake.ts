import { z } from "zod";
import Anthropic from "@anthropic-ai/sdk";
import { analyzeDeal, type DealInputs } from "../lib/calculations.js";
import { runDealAnalysis } from "./deal-analyzer.js";

export const analyzeDealFromPdfSchema = z.object({
  pdfBase64: z.string().describe(
    "Base64-encoded PDF bytes. The PDF should be a deal memo, OM (offering memorandum), rent roll, or any document containing property financials."
  ),
  filename: z.string().optional().describe("Original filename for reference, e.g. 'oakwood-plaza-om.pdf'"),
  // Optional overrides — user can correct what Claude extracts
  purchasePriceOverride: z.number().positive().optional().describe("Override the extracted purchase price"),
  downPaymentPctOverride: z.number().min(0).max(100).optional().describe("Override down payment %"),
  interestRateOverride: z.number().min(0).max(30).optional().describe("Override interest rate %"),
  holdPeriodOverride: z.number().int().min(1).max(30).optional().describe("Override hold period in years"),
  exitCapSpreadOverride: z.number().optional().describe("Override exit cap spread in percentage points"),
});

export type AnalyzeDealFromPdfInput = z.infer<typeof analyzeDealFromPdfSchema>;

const EXTRACTION_PROMPT = `You are a commercial real estate analyst. Extract deal parameters from this document.

Return a JSON object with these fields (use null for anything not found):
{
  "propertyName": string | null,
  "address": string | null,
  "assetType": "NNN" | "Multifamily" | "SFR" | null,
  "purchasePrice": number | null,
  "askingPrice": number | null,
  "buildingSF": number | null,
  "units": number | null,
  "annualRent": number | null,
  "monthlyRentPerUnit": number | null,
  "vacancyRate": number | null,
  "noi": number | null,
  "grossIncome": number | null,
  "operatingExpenses": number | null,
  "opexRatio": number | null,
  "propertyTaxes": number | null,
  "insurance": number | null,
  "capRate": number | null,
  "tenant": string | null,
  "leaseType": string | null,
  "leaseTermRemaining": string | null,
  "rentGrowth": number | null,
  "yearBuilt": number | null,
  "extractionNotes": string
}

Rules:
- annualRent is the TOTAL annual rent for NNN (all tenants combined)
- If you see NOI and cap rate but not price, compute price = NOI / capRate
- If you see NOI and price but not cap rate, compute capRate = NOI / price * 100
- opexRatio is operating expenses as % of effective gross income
- Determine assetType: NNN if single-tenant with net lease, Multifamily if apartments, SFR if single house
- extractionNotes should summarize what data was found and what was missing or uncertain
- Return ONLY the JSON object, no other text`;

function getAnthropicClient() {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY env var is required for PDF analysis");
  return new Anthropic({ apiKey: key });
}

export async function analyzeDealFromPdf(input: AnalyzeDealFromPdfInput) {
  // Extract text and key data from the PDF using Claude's vision/PDF capability
  const client = getAnthropicClient();

  // Use Claude's document API to read the PDF
  const extractionResponse = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document",
            source: {
              type: "base64",
              media_type: "application/pdf",
              data: input.pdfBase64,
            },
          },
          {
            type: "text",
            text: EXTRACTION_PROMPT,
          },
        ],
      },
    ],
  });

  const rawText = extractionResponse.content[0].type === "text"
    ? extractionResponse.content[0].text
    : "";

  // Parse the JSON extraction
  let extracted: Record<string, unknown>;
  try {
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    extracted = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
  } catch {
    extracted = {};
  }

  // Build deal inputs from extracted data + any overrides
  const assetType = (extracted.assetType as "NNN" | "Multifamily" | "SFR") ?? "NNN";

  // Determine purchase price: use override > extracted purchasePrice > derive from NOI/cap
  let purchasePrice = input.purchasePriceOverride
    ?? (extracted.purchasePrice as number | null)
    ?? (extracted.askingPrice as number | null)
    ?? null;

  // If price still missing but we have NOI + capRate, back into it
  if (!purchasePrice && extracted.noi && extracted.capRate) {
    purchasePrice = (extracted.noi as number) / ((extracted.capRate as number) / 100);
  }

  if (!purchasePrice) {
    return {
      error: "Could not determine purchase price from the document. Please provide purchasePriceOverride.",
      extractedData: extracted,
    };
  }

  // Determine annual rent
  let annualRent: number | undefined;
  let monthlyRentPerUnit: number | undefined;

  if (assetType === "NNN") {
    // For NNN: use annualRent directly, or derive from NOI (NNN has ~zero opex)
    annualRent = (extracted.annualRent as number | null)
      ?? (extracted.grossIncome as number | null)
      ?? (extracted.noi as number | null)  // NNN: NOI ≈ gross rent
      ?? undefined;
  } else {
    // For MF/SFR: derive monthly rent per unit from gross income or use extracted value
    monthlyRentPerUnit = (extracted.monthlyRentPerUnit as number | null) ?? undefined;
    if (!monthlyRentPerUnit && extracted.grossIncome && extracted.units) {
      monthlyRentPerUnit = (extracted.grossIncome as number) / 12 / (extracted.units as number);
    }
    if (!monthlyRentPerUnit && extracted.noi && extracted.opexRatio && extracted.units) {
      const egi = (extracted.noi as number) / (1 - (extracted.opexRatio as number) / 100);
      monthlyRentPerUnit = egi / 12 / (extracted.units as number);
    }
  }

  const dealInputs = {
    assetType,
    purchasePrice,
    buildingSF: (extracted.buildingSF as number | null) ?? undefined,
    units: (extracted.units as number | null) ?? undefined,
    annualRent,
    monthlyRentPerUnit,
    vacancyRate: (extracted.vacancyRate as number | null) ?? (assetType === "NNN" ? 0 : 5),
    opexRatio: (extracted.opexRatio as number | null) ?? undefined,
    propertyTaxes: (extracted.propertyTaxes as number | null) ?? undefined,
    insurance: (extracted.insurance as number | null) ?? undefined,
    rentGrowth: (extracted.rentGrowth as number | null) ?? 2.0,
    downPaymentPct: input.downPaymentPctOverride ?? 25,
    interestRate: input.interestRateOverride ?? 6.75,
    amortization: 30,
    closingCosts: 15000,
    loanOrigFee: 1.0,
    holdPeriod: input.holdPeriodOverride ?? 10,
    exitCapSpread: input.exitCapSpreadOverride ?? 0.5,
  };

  const analysis = runDealAnalysis(dealInputs as Parameters<typeof runDealAnalysis>[0]);

  return {
    source: input.filename ?? "uploaded PDF",
    extractedProperty: {
      name: (extracted.propertyName as string | null) ?? null,
      address: (extracted.address as string | null) ?? null,
      tenant: (extracted.tenant as string | null) ?? null,
      leaseType: (extracted.leaseType as string | null) ?? null,
      leaseTermRemaining: (extracted.leaseTermRemaining as string | null) ?? null,
      yearBuilt: (extracted.yearBuilt as number | null) ?? null,
    },
    extractedFinancials: {
      purchasePrice: `$${purchasePrice.toLocaleString()}`,
      noi: extracted.noi ? `$${(extracted.noi as number).toLocaleString()}/yr` : "derived",
      capRate: extracted.capRate ? `${extracted.capRate}%` : "calculated",
      grossIncome: extracted.grossIncome ? `$${(extracted.grossIncome as number).toLocaleString()}/yr` : null,
    },
    extractionNotes: (extracted.extractionNotes as string) ?? "No notes",
    assumptionsUsed: {
      downPaymentPct: `${dealInputs.downPaymentPct}% ${input.downPaymentPctOverride ? "(your override)" : "(default)"}`,
      interestRate: `${dealInputs.interestRate}% ${input.interestRateOverride ? "(your override)" : "(default)"}`,
      holdPeriod: `${dealInputs.holdPeriod} years ${input.holdPeriodOverride ? "(your override)" : "(default)"}`,
      exitCapSpread: `+${dealInputs.exitCapSpread}% ${input.exitCapSpreadOverride ? "(your override)" : "(default — conservative)"}`,
    },
    analysis,
  };
}
