/**
 * Shared email templates for lead magnet deliveries.
 * All emails use a simple inline-styled HTML shell branded to MaxLife.
 * Keep colors in sync with tailwind gold (#D4AF37) and dark (#0a0a0a).
 */

interface ShellOptions {
  title: string;
  preheader?: string;
  body: string; // already-escaped HTML
  ctaHref?: string;
  ctaLabel?: string;
}

const GOLD = "#D4AF37";
const DARK = "#0a0a0a";

export function emailShell({ title, preheader, body, ctaHref, ctaLabel }: ShellOptions): string {
  const cta =
    ctaHref && ctaLabel
      ? `
      <tr>
        <td align="center" style="padding:24px 0 8px">
          <a href="${ctaHref}"
             style="background:${GOLD};color:${DARK};text-decoration:none;font-weight:700;padding:14px 28px;border-radius:8px;display:inline-block;font-family:Helvetica,Arial,sans-serif">
            ${ctaLabel}
          </a>
        </td>
      </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Helvetica,Arial,sans-serif;color:#1f2937">
  ${preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0">${preheader}</div>` : ""}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06)">
          <tr>
            <td style="background:${DARK};padding:24px 32px">
              <div style="color:${GOLD};font-size:20px;font-weight:800;letter-spacing:1px">MAXLIFE REALTY</div>
              <div style="color:#9ca3af;font-size:12px;margin-top:4px">Orlando Commercial Real Estate</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px">
              <h1 style="margin:0 0 16px;font-size:22px;color:#111827">${title}</h1>
              <div style="font-size:15px;line-height:1.6;color:#374151">
                ${body}
              </div>
            </td>
          </tr>
          ${cta}
          <tr>
            <td style="padding:24px 32px 32px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;line-height:1.5">
              <div>Ryan Solberg · Broker · MaxLife Realty</div>
              <div>(321) 586-2121 · <a href="mailto:Ryan@MaxLifeRealty.com" style="color:${GOLD}">Ryan@MaxLifeRealty.com</a></div>
              <div style="margin-top:8px">You're receiving this because you requested a resource from <a href="https://maxlifedevelopment.com" style="color:${GOLD}">maxlifedevelopment.com</a>.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function workbookEmail(courseTitle: string): { subject: string; html: string } {
  return {
    subject: `Your ${courseTitle} workbook`,
    html: emailShell({
      title: `Your ${courseTitle} workbook is attached`,
      preheader: "Download your CRE workbook PDF",
      body: `
        <p>Thanks for grabbing the workbook — it's attached to this email as a PDF.</p>
        <p>This workbook is designed to be worked through alongside the free MaxLife Academy course. Print it, mark it up, and fill in the exercises as you go.</p>
        <p>If you get stuck on any of the exercises or want to talk through how they apply to a real Central Florida deal, hit reply — I read every response.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/academy",
      ctaLabel: "Continue the course →",
    }),
  };
}

export function netSheetEmail(
  side: "seller" | "buyer",
  salesPrice: number
): { subject: string; html: string } {
  const sideLabel = side === "seller" ? "Seller Net Sheet" : "Buyer Estimate";
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(salesPrice);

  return {
    subject: `Your ${sideLabel} — ${formatted}`,
    html: emailShell({
      title: `Your ${sideLabel} is attached`,
      preheader: `${sideLabel} for ${formatted}`,
      body: `
        <p>Attached is the ${sideLabel.toLowerCase()} you just ran for a ${formatted} transaction in Brevard County, FL.</p>
        <p>A few things worth knowing:</p>
        <ul>
          <li>These numbers are estimates based on standard Brevard County closing costs and customary title insurance rates.</li>
          <li>Exact figures depend on your title company, survey needs, and any seller concessions negotiated at contract.</li>
          <li>If you want me to sanity-check this against a real deal, reply to this email with the property address.</li>
        </ul>
        <p>I help buyers and sellers across Central Florida — residential and commercial — and I'm happy to be a second set of eyes on any transaction.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/contact",
      ctaLabel: "Book a 15-min call →",
    }),
  };
}

export interface DealAnalyzerSummary {
  propertyName?: string;
  purchasePrice: number;
  noi: number;
  capRate: number;
  cashOnCash: number;
  irr: number;
  dscr: number;
  equityMultiple: number;
  dealScore?: string;
}

export function dealAnalyzerEmail(summary: DealAnalyzerSummary): { subject: string; html: string } {
  const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const pct = (n: number) => `${(n * 100).toFixed(2)}%`;
  const name = summary.propertyName || "Your deal";

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;font-weight:600;text-align:right">${value}</td>
    </tr>`;

  return {
    subject: `${name} — underwriting summary`,
    html: emailShell({
      title: `${name} — Underwriting Summary`,
      preheader: `IRR ${pct(summary.irr)} · CoC ${pct(summary.cashOnCash)} · DSCR ${summary.dscr.toFixed(2)}`,
      body: `
        <p>Here's the full underwriting summary from the MaxLife Deal Analyzer. Save this for your records or forward it to your lender or partners.</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;border-top:2px solid #111827">
          ${row("Purchase Price", fmt.format(summary.purchasePrice))}
          ${row("Year 1 NOI", fmt.format(summary.noi))}
          ${row("Entry Cap Rate", pct(summary.capRate))}
          ${row("Cash-on-Cash (Y1)", pct(summary.cashOnCash))}
          ${row("Levered IRR", pct(summary.irr))}
          ${row("DSCR (Y1)", summary.dscr.toFixed(2))}
          ${row("Equity Multiple", `${summary.equityMultiple.toFixed(2)}x`)}
          ${summary.dealScore ? row("Deal Score", summary.dealScore) : ""}
        </table>
        <p style="margin-top:20px">Want me to pressure-test these assumptions, or source comparable deals at this basis? Reply with the property details — I'll send back real comps from Central Florida.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/contact",
      ctaLabel: "Book a deal review →",
    }),
  };
}
