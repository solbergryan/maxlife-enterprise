import { z } from "zod";
import { supabase } from "../lib/supabase.js";

export const captureLeadSchema = z.object({
  email: z.string().email().describe("Lead's email address"),
  name: z.string().optional().describe("Lead's full name"),
  phone: z.string().optional().describe("Lead's phone number"),
  source: z.enum([
    "mcp-deal-analyzer",
    "mcp-listing-inquiry",
    "mcp-pdf-analysis",
    "mcp-cap-rate",
    "mcp-general",
  ]).default("mcp-general").describe("Where this lead originated"),
  notes: z.string().optional().describe("Any relevant context: property they asked about, deal they analyzed, etc."),
  listingSlug: z.string().optional().describe("Listing slug if this is a listing inquiry"),
});

export type CaptureLeadInput = z.infer<typeof captureLeadSchema>;

export async function captureLead(input: CaptureLeadInput) {
  const { error } = await supabase.from("leads").insert({
    email: input.email,
    name: input.name ?? null,
    phone: input.phone ?? null,
    source: input.source,
    source_ref: input.listingSlug ?? null,
    metadata: {
      notes: input.notes ?? null,
      channel: "mcp",
      timestamp: new Date().toISOString(),
    },
  });

  if (error) throw new Error(`Failed to save lead: ${error.message}`);

  return {
    success: true,
    message: `Lead captured for ${input.email}. A MaxLife Realty advisor will follow up with ${input.name ?? "them"} shortly.`,
    nextSteps: "Ryan Solberg (ryan@maxliferealty.com) will reach out. You can also call 321-505-5571.",
  };
}
