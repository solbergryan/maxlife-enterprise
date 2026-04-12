/**
 * Email nurture sequence — 3-part welcome drip for new leads.
 *
 * Called after a lead is captured (newsletter, exit-intent, blog inline).
 * Uses Resend's scheduled send feature to space emails over 3 days.
 *
 * Sequence:
 *   Day 0 — Welcome + top 3 resources
 *   Day 2 — Deal Analyzer + market report CTA
 *   Day 5 — Personal note from Ryan + consultation offer
 */

import { getResend, FROM_EMAIL, REPLY_TO } from "./resend";
import { emailShell } from "./emailTemplates";

interface NurtureParams {
  email: string;
  name?: string | null;
  source: string;
}

const emails = [
  {
    delayMs: 0,
    subject: "Welcome to MaxLife — here's where to start",
    body: (name?: string | null) => emailShell({
      title: name ? `Welcome, ${name}` : "Welcome to MaxLife Realty",
      preheader: "Your Central Florida CRE toolkit",
      body: `
        <p>Thanks for joining the MaxLife investor list. Here are the three most popular resources our investors use:</p>
        <ol style="padding-left:20px">
          <li style="margin-bottom:8px"><strong>Deal Analyzer</strong> — underwrite any commercial deal in 60 seconds with IRR, cash-on-cash, DSCR, and equity multiple.</li>
          <li style="margin-bottom:8px"><strong>MaxLife Academy</strong> — 20 free courses from CRE fundamentals to syndication and 1031 exchanges.</li>
          <li style="margin-bottom:8px"><strong>Market Reports</strong> — quarterly data on cap rates, absorption, and vacancy across Central Florida.</li>
        </ol>
        <p>I'll follow up later this week with a few more tools. In the meantime, reply to this email anytime — I read every response.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/deal-analyzer",
      ctaLabel: "Try the Deal Analyzer",
    }),
  },
  {
    delayMs: 2 * 24 * 60 * 60 * 1000, // 2 days
    subject: "Two tools most investors don't know about",
    body: (_name?: string | null) => emailShell({
      title: "Two tools worth bookmarking",
      preheader: "Seller Net Sheet + Market Reports",
      body: `
        <p>Quick follow-up — two resources that our most active investors use weekly:</p>
        <p><strong>1. Seller Net Sheet Calculator</strong><br>
        Estimate exact net proceeds for any Florida property sale. Buyers have a version too. Both generate a branded PDF you can share with clients or partners.</p>
        <p><strong>2. Quarterly Market Reports</strong><br>
        Our latest report covers cap rate trends, vacancy rates, and rent growth across Orlando, Brevard County, and Lake County — broken down by property type.</p>
        <p>Both are free, no login required. Let me know if you want me to run numbers on a specific deal.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/market-reports",
      ctaLabel: "Read the Latest Report",
    }),
  },
  {
    delayMs: 5 * 24 * 60 * 60 * 1000, // 5 days
    subject: "Quick question from Ryan",
    body: (name?: string | null) => emailShell({
      title: name ? `${name}, quick question` : "Quick question",
      preheader: "15-minute CRE strategy call",
      body: `
        <p>I wanted to reach out personally. I'm Ryan Solberg — I run MaxLife Realty, a commercial real estate brokerage in Orlando.</p>
        <p>I work with investors across Central Florida on NNN deals, multifamily, land development, and 1031 exchanges. If you're actively looking at deals — or thinking about it — I'd love to hear what you're focused on.</p>
        <p>A few things I can help with:</p>
        <ul style="padding-left:20px">
          <li style="margin-bottom:4px">Off-market deal sourcing in Central Florida</li>
          <li style="margin-bottom:4px">Underwriting review on a deal you're considering</li>
          <li style="margin-bottom:4px">1031 exchange replacement property identification</li>
          <li style="margin-bottom:4px">Market-specific questions (cap rates, rent trends, submarkets)</li>
        </ul>
        <p>No pressure, no pitch — just hit reply or book a 15-minute call below.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/contact",
      ctaLabel: "Book a 15-Min Call",
    }),
  },
];

/**
 * Enqueue the 3-part nurture sequence for a new lead.
 * Fires email 1 immediately, emails 2 and 3 are scheduled via Resend.
 *
 * Non-blocking — errors are logged but don't propagate.
 */
export async function enqueueNurtureSequence({ email, name, source }: NurtureParams) {
  try {
    const resend = getResend();

    for (const step of emails) {
      const html = step.body(name);
      const sendAt = step.delayMs > 0
        ? new Date(Date.now() + step.delayMs).toISOString()
        : undefined;

      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        replyTo: REPLY_TO,
        subject: step.subject,
        html,
        ...(sendAt ? { scheduledAt: sendAt } : {}),
        headers: {
          "X-Entity-Ref-ID": `nurture-${source}-${Date.now()}`,
        },
      });
    }
  } catch (err) {
    console.error("[nurture] Failed to enqueue sequence:", err);
  }
}
