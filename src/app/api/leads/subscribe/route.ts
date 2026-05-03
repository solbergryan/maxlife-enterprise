import { NextRequest, NextResponse } from "next/server";
import { insertLead, type LeadSource } from "@/lib/leads/store";
import { enqueueNurtureSequence } from "@/lib/leads/nurture";
import { enforce, getClientKey, leadLimiter } from "@/lib/ratelimit";

export const runtime = "nodejs";

/**
 * Newsletter / blog / exit-intent signup handler.
 * POST { email, name?, source, source_page? }
 *
 * 1. Logs the lead to the database
 * 2. Triggers the 3-part email nurture sequence via Resend
 */
export async function POST(req: NextRequest) {
  const rl = await enforce(leadLimiter, getClientKey(req));
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.max(
            1,
            Math.ceil((rl.reset - Date.now()) / 1000),
          ).toString(),
        },
      },
    );
  }

  let body: { email?: string; name?: string; source?: string; source_page?: string; website?: string; _t?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot: real users can't see or tab to the hidden "website" field.
  // Silent 200 so bots don't retry with a different pattern.
  if ((body.website || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  // Timing check: humans take at least 1.5s to fill a form.
  if (typeof body._t === "number" && Date.now() - body._t < 1500) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email || "").trim();
  const source = (body.source || "newsletter").trim() as LeadSource;
  const sourcePage = body.source_page?.trim() || null;
  const name = body.name?.trim() || null;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // Log lead (non-blocking)
  void insertLead({
    email,
    name,
    source,
    sourceRef: sourcePage,
    metadata: { source_page: sourcePage },
    userAgent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
  });

  // Trigger nurture sequence (non-blocking)
  void enqueueNurtureSequence({ email, name, source, sourceRef: sourcePage });

  return NextResponse.json({ ok: true });
}
