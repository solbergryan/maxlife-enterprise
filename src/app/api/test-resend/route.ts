import { NextRequest, NextResponse } from "next/server";
import { getResend, FROM_EMAIL, REPLY_TO } from "@/lib/leads/resend";
import { emailShell } from "@/lib/leads/emailTemplates";

export const runtime = "nodejs";

/**
 * Verification send used to confirm Resend DNS (DKIM/SPF/DMARC) is configured.
 *
 * Usage:
 *   GET  /api/test-resend?to=you@gmail.com&secret=...
 *   POST /api/test-resend  body: { to, secret }
 *
 * Gated by RESEND_TEST_SECRET so a public route can't be abused to send mail
 * from the verified domain. Set RESEND_TEST_SECRET in .env.local before use.
 */

async function send(to: string) {
  const resend = getResend();
  const sentAt = new Date().toISOString();

  const html = emailShell({
    title: "Resend DNS verification",
    preheader: "If you can read this, DKIM/SPF/DMARC are working.",
    body: `
      <p>This is a deliverability test from <strong>${FROM_EMAIL}</strong>.</p>
      <p>Sent at: <code>${sentAt}</code></p>
      <p>To verify the headers in Gmail:</p>
      <ol style="padding-left:20px">
        <li>Open this email</li>
        <li>Click the three-dot menu → <strong>Show original</strong></li>
        <li>Confirm <strong>SPF: PASS</strong>, <strong>DKIM: PASS</strong>, <strong>DMARC: PASS</strong></li>
      </ol>
      <p>You can also forward this message to <a href="https://www.mail-tester.com">mail-tester.com</a> for a deliverability score.</p>
    `,
  });

  return resend.emails.send({
    from: FROM_EMAIL,
    to,
    replyTo: REPLY_TO,
    subject: `Resend DNS test — ${sentAt}`,
    html,
    text: `Resend DNS verification\n\nSent from: ${FROM_EMAIL}\nSent at: ${sentAt}\n\nIf you can read this, DKIM/SPF/DMARC are working.`,
    headers: {
      "X-Entity-Ref-ID": `dns-test-${Date.now()}`,
    },
  });
}

function checkSecret(provided: string | null): boolean {
  const expected = process.env.RESEND_TEST_SECRET;
  if (!expected) return false;
  return provided === expected;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const to = url.searchParams.get("to");
  const secret = url.searchParams.get("secret");

  if (!checkSecret(secret)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return NextResponse.json({ error: "Valid ?to= required" }, { status: 400 });
  }

  try {
    const result = await send(to);
    return NextResponse.json({ ok: true, id: result.data?.id ?? null, from: FROM_EMAIL, to });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Send failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  let body: { to?: string; secret?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!checkSecret(body.secret ?? null)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const to = (body.to || "").trim();
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return NextResponse.json({ error: "Valid 'to' required" }, { status: 400 });
  }

  try {
    const result = await send(to);
    return NextResponse.json({ ok: true, id: result.data?.id ?? null, from: FROM_EMAIL, to });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Send failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
