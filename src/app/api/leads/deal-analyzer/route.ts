import { NextRequest, NextResponse } from "next/server";
import { FROM_EMAIL, REPLY_TO, getResend } from "@/lib/leads/resend";
import { insertLead } from "@/lib/leads/store";
import { dealAnalyzerEmail, type DealAnalyzerSummary } from "@/lib/leads/emailTemplates";
import { enforce, getClientKey, leadLimiter } from "@/lib/ratelimit";

export const runtime = "nodejs";

/**
 * Deal analyzer "email me this report" handler.
 * No PDF attachment — sends an HTML summary with all the key metrics
 * inline. The full report lives back on the site if the user wants to
 * tweak inputs.
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

  let body: {
    email?: string;
    name?: string;
    summary?: Partial<DealAnalyzerSummary>;
    inputs?: Record<string, unknown>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const name = body.name?.trim() || null;
  const s = body.summary || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (typeof s.purchasePrice !== "number") {
    return NextResponse.json({ error: "Deal summary required" }, { status: 400 });
  }

  const summary: DealAnalyzerSummary = {
    propertyName: s.propertyName,
    purchasePrice: s.purchasePrice,
    noi: Number(s.noi) || 0,
    capRate: Number(s.capRate) || 0,
    cashOnCash: Number(s.cashOnCash) || 0,
    irr: Number(s.irr) || 0,
    dscr: Number(s.dscr) || 0,
    equityMultiple: Number(s.equityMultiple) || 0,
    dealScore: s.dealScore,
  };

  const { subject, html } = dealAnalyzerEmail(summary);

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: REPLY_TO,
      subject,
      html,
    });
    if (error) {
      console.error("[deal-analyzer] resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }
  } catch (e) {
    console.error("[deal-analyzer] send threw:", e);
    return NextResponse.json({ error: "Email service unavailable" }, { status: 502 });
  }

  void insertLead({
    email,
    name,
    source: "deal-analyzer",
    sourceRef: summary.propertyName ?? null,
    metadata: { summary, inputs: body.inputs ?? {} },
    userAgent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
  });

  return NextResponse.json({ ok: true });
}
