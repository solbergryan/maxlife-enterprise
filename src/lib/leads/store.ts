import { createClient } from "@/lib/supabase/server";

export type LeadSource =
  | "workbook"
  | "net-sheet-seller"
  | "net-sheet-buyer"
  | "deal-analyzer"
  | "newsletter";

export interface LeadInsert {
  email: string;
  name?: string | null;
  phone?: string | null;
  source: LeadSource;
  sourceRef?: string | null;
  metadata?: Record<string, unknown>;
  userAgent?: string | null;
  referer?: string | null;
  ip?: string | null;
}

/**
 * Insert a lead into Supabase. Uses the existing server-side Supabase
 * client (anon key). The `leads` table has INSERT policy for anon only —
 * reads require the service-role key / dashboard.
 *
 * Returns true on success, false on failure. Never throws — lead capture
 * must NEVER block the primary action (sending the PDF/email).
 */
export async function insertLead(lead: LeadInsert): Promise<boolean> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("leads").insert({
      email: lead.email.toLowerCase().trim(),
      name: lead.name ?? null,
      phone: lead.phone ?? null,
      source: lead.source,
      source_ref: lead.sourceRef ?? null,
      metadata: lead.metadata ?? {},
      user_agent: lead.userAgent ?? null,
      referer: lead.referer ?? null,
      ip: lead.ip ?? null,
    });
    if (error) {
      console.error("[leads] insert failed:", error.message);
      return false;
    }
    return true;
  } catch (e) {
    console.error("[leads] insert threw:", e);
    return false;
  }
}
