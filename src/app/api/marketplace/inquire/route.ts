import { NextRequest, NextResponse } from "next/server";
import { FROM_EMAIL, REPLY_TO, getResend } from "@/lib/leads/resend";
import { insertLead } from "@/lib/leads/store";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

/**
 * Marketplace inquiry handler.
 *
 * Flow:
 *   1. POST arrives with { listingId, name, email, phone?, message }
 *   2. Look up the listing (server-side) to get the owner contact fields.
 *   3. Send an HTML email:
 *        to:      listing.contact_email  (seller/broker)
 *        cc:      REPLY_TO               (MaxLife — so Ryan is kept in the loop)
 *        replyTo: inquirer.email         (so a Reply goes straight to the buyer)
 *   4. Record the inquiry in the shared leads table for CRM follow-up.
 *
 * We look up the listing server-side instead of trusting the POST body so a
 * malicious client can't change the recipient and spam arbitrary addresses.
 */
export async function POST(req: NextRequest) {
  let body: {
    listingId?: string;
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    website?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot: real users can't see or tab to the hidden "website" field.
  // If it's filled, pretend success so the bot doesn't retry with a new pattern.
  if ((body.website || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const listingId = (body.listingId || "").trim();
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!listingId) {
    return NextResponse.json({ error: "listingId required" }, { status: 400 });
  }
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  // Fetch the listing (respects RLS — public SELECT is allowed)
  const supabase = await createClient();
  const { data: listing, error: fetchErr } = await supabase
    .from("listings")
    .select("id, slug, title, city, state, contact_name, contact_email, status")
    .eq("id", listingId)
    .maybeSingle();

  if (fetchErr) {
    console.error("[inquire] fetch error:", fetchErr.message);
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }
  if (!listing || listing.status === "withdrawn") {
    return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  }

  const listingUrl = `https://maxlifedevelopment.com/marketplace/${listing.slug}`;
  const locale = listing.city + (listing.state ? `, ${listing.state}` : "");
  const subject = `MaxLife Marketplace inquiry: ${listing.title}`;

  const html = inquiryEmailHtml({
    inquirerName: name,
    inquirerEmail: email,
    inquirerPhone: phone || null,
    message,
    listingTitle: listing.title,
    listingLocale: locale,
    listingUrl,
    listingOwnerName: listing.contact_name,
  });

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: listing.contact_email,
      cc: REPLY_TO !== listing.contact_email ? [REPLY_TO] : undefined,
      replyTo: email,
      subject,
      html,
    });
    if (error) {
      console.error("[inquire] resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }
  } catch (e) {
    console.error("[inquire] send threw:", e);
    return NextResponse.json({ error: "Email service unavailable" }, { status: 502 });
  }

  // Track the inquiry in the leads table so it shows up in the same follow-up flow.
  void insertLead({
    email,
    name,
    source: "marketplace-inquiry",
    sourceRef: listing.slug,
    metadata: {
      listingId: listing.id,
      listingTitle: listing.title,
      phone: phone || null,
      message,
    },
    userAgent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
    ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
  });

  return NextResponse.json({ ok: true });
}

function inquiryEmailHtml(p: {
  inquirerName: string;
  inquirerEmail: string;
  inquirerPhone: string | null;
  message: string;
  listingTitle: string;
  listingLocale: string;
  listingUrl: string;
  listingOwnerName: string;
}): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const messageHtml = escape(p.message).replace(/\n/g, "<br>");

  return `
<!doctype html>
<html>
<body style="font-family:-apple-system,Segoe UI,Helvetica,sans-serif;color:#111;line-height:1.5;max-width:600px;margin:0 auto;padding:20px;">
  <h2 style="color:#111;margin:0 0 8px;">New inquiry on your listing</h2>
  <p style="color:#666;margin:0 0 24px;">
    Someone reached out through the MaxLife Marketplace about your property.
  </p>

  <div style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:20px;">
    <p style="margin:0 0 4px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Listing</p>
    <p style="margin:0;font-weight:600;"><a href="${p.listingUrl}" style="color:#b8860b;text-decoration:none;">${escape(p.listingTitle)}</a></p>
    <p style="margin:4px 0 0;color:#666;font-size:14px;">${escape(p.listingLocale)}</p>
  </div>

  <div style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:20px;">
    <p style="margin:0 0 4px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">From</p>
    <p style="margin:0;font-weight:600;">${escape(p.inquirerName)}</p>
    <p style="margin:4px 0 0;"><a href="mailto:${escape(p.inquirerEmail)}" style="color:#b8860b;">${escape(p.inquirerEmail)}</a></p>
    ${p.inquirerPhone ? `<p style="margin:4px 0 0;"><a href="tel:${escape(p.inquirerPhone)}" style="color:#b8860b;">${escape(p.inquirerPhone)}</a></p>` : ""}
  </div>

  <div style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:24px;">
    <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
    <p style="margin:0;white-space:pre-wrap;">${messageHtml}</p>
  </div>

  <p style="color:#666;font-size:13px;margin:0 0 8px;">
    Reply to this email to respond directly to ${escape(p.inquirerName)}. MaxLife Realty is CC'd so we can help coordinate if useful.
  </p>
  <p style="color:#999;font-size:12px;margin:24px 0 0;">
    MaxLife Realty · <a href="https://maxlifedevelopment.com" style="color:#b8860b;">maxlifedevelopment.com</a>
  </p>
</body>
</html>`;
}
