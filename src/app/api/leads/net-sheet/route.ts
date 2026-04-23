import { NextRequest, NextResponse } from "next/server";
import { FROM_EMAIL, REPLY_TO, getResend } from "@/lib/leads/resend";
import { insertLead } from "@/lib/leads/store";
import { netSheetEmail } from "@/lib/leads/emailTemplates";
import { enforce, getClientKey, leadLimiter } from "@/lib/ratelimit";

export const runtime = "nodejs";

/**
 * Net sheet "email me this report" handler.
 *
 * The client generates a PNG of the report (the existing canvas-based
 * renderer in src/components/net-sheet/pdfGenerator.js), base64-encodes
 * it, and POSTs it here with the email + salesPrice + side.
 *
 * We email the PNG as an attachment via Resend and log the lead.
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
    side?: "seller" | "buyer";
    salesPrice?: number;
    imageBase64?: string;
    metadata?: Record<string, unknown>;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const side = body.side === "buyer" ? "buyer" : "seller";
  const salesPrice = Number(body.salesPrice) || 0;
  const imageBase64 = body.imageBase64 || "";
  const name = body.name?.trim() || null;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!imageBase64) {
    return NextResponse.json({ error: "Report image required" }, { status: 400 });
  }

  // Strip data URL prefix if present ("data:image/png;base64,....")
  const base64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  let pngBuffer: Buffer;
  try {
    pngBuffer = Buffer.from(base64, "base64");
  } catch {
    return NextResponse.json({ error: "Invalid image data" }, { status: 400 });
  }
  // Sanity-check size — PNGs from the canvas are typically 100-400 KB.
  if (pngBuffer.length < 1000 || pngBuffer.length > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Image size out of range" }, { status: 400 });
  }

  const { subject, html } = netSheetEmail(side, salesPrice);
  const filename = `MaxLife-${side === "seller" ? "Seller-Net-Sheet" : "Buyer-Estimate"}.png`;

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: REPLY_TO,
      subject,
      html,
      attachments: [{ filename, content: pngBuffer }],
    });
    if (error) {
      console.error("[net-sheet] resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }
  } catch (e) {
    console.error("[net-sheet] send threw:", e);
    return NextResponse.json({ error: "Email service unavailable" }, { status: 502 });
  }

  void insertLead({
    email,
    name,
    source: side === "seller" ? "net-sheet-seller" : "net-sheet-buyer",
    sourceRef: salesPrice ? String(salesPrice) : null,
    metadata: { side, salesPrice, ...(body.metadata || {}) },
    userAgent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
  });

  return NextResponse.json({ ok: true });
}
