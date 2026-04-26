/**
 * Email nurture sequences — customized drips based on lead source.
 *
 * Called after a lead is captured (newsletter, exit-intent, blog inline, industry pages).
 * Uses Resend's scheduled send feature to space emails over days.
 *
 * Sequences:
 *   Generic investor — 3 part over 5 days
 *   Logistics tenant — 5 part over 14 days (space sourcing focus)
 *   Logistics investor — 5 part over 14 days (portfolio building focus)
 */

import { getResend, FROM_EMAIL, REPLY_TO } from "./resend";
import { emailShell } from "./emailTemplates";

interface NurtureParams {
  email: string;
  name?: string | null;
  source: string;
  sourceRef?: string | null;
}

const genericInvestorEmails = [
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
    delayMs: 2 * 24 * 60 * 60 * 1000,
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
    delayMs: 5 * 24 * 60 * 60 * 1000,
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

const logisticsTenantEmails = [
  {
    delayMs: 0,
    subject: "[Company] + Florida Growth — Let's talk space",
    body: (name?: string | null) => emailShell({
      title: "Quick question about your expansion",
      preheader: "Florida logistics space — fast sourcing",
      body: `
        <p>${name ? `Hi ${name},` : "Hi,"}</p>
        <p>I specialize in industrial and logistics space across Florida — Jacksonville, Lakeland, and Orlando. We help 3PLs and operators find the right distribution centers, last-mile facilities, and build-to-suit sites fast.</p>
        <p>When you're ready to expand or consolidate — whether it's 25k sf or 250k sf — let's talk about what you need.</p>
        <p>I can usually get you 3-4 solid options (on- and off-market) within 48 hours.</p>
        <p>Best,<br>Ryan<br>(321) 586-2121</p>
      `,
      ctaHref: "tel:3215862121",
      ctaLabel: "Call Ryan Direct",
    }),
  },
  {
    delayMs: 3 * 24 * 60 * 60 * 1000,
    subject: "Available now: Industrial space in your market",
    body: (name?: string | null) => emailShell({
      title: "Space just came off-market",
      preheader: "Distribution center — your footprint",
      body: `
        <p>We just sourced availability that might fit what you're looking for — I won't share the specifics via email, but it's worth a quick call.</p>
        <p>Asking is competitive. If it's a fit, we can move on it fast.</p>
        <p>Interested in a 15-minute call to discuss?</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/contact",
      ctaLabel: "Schedule a Call",
    }),
  },
  {
    delayMs: 6 * 24 * 60 * 60 * 1000,
    subject: "Why 3PLs choose us for industrial space",
    body: (name?: string | null) => emailShell({
      title: "Why fast logistics sourcing matters",
      preheader: "Operators who moved fast won better terms",
      body: `
        <p>We worked with a major 3PL last year who needed 75k sf in Lakeland in 90 days. Most brokers would've taken 3+ months just to build a list.</p>
        <p>We had 6 solid options in 2 weeks. They locked in 3-year lease at $8.50/sf NNN (market was asking $9.25+).</p>
        <p>Why? Speed. Landlords reward brokers who can close fast.</p>
        <p>When you're ready to move, we're ready to deliver.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/industries/logistics-distribution",
      ctaLabel: "Learn More",
    }),
  },
  {
    delayMs: 9 * 24 * 60 * 60 * 1000,
    subject: "Your market snapshot: Jacksonville/Lakeland/Orlando",
    body: (name?: string | null) => emailShell({
      title: "Industrial market update",
      preheader: "Vacancy, rents, and cap rates — your market",
      body: `
        <p>Florida's industrial corridor is hot right now:</p>
        <ul style="padding-left:20px">
          <li style="margin-bottom:6px"><strong>Jacksonville</strong>: 5.2% vacancy, $8.75/sf avg, Port activity up 12%</li>
          <li style="margin-bottom:6px"><strong>Lakeland</strong>: 4.1% vacancy, $8-12/sf (varies by class), heavy I-4 traffic</li>
          <li style="margin-bottom:6px"><strong>Orlando</strong>: 5.8% vacancy, $9.50/sf, strong last-mile demand</li>
        </ul>
        <p>If you're thinking about timing your move, now is the window. Rents are still reasonable but vacancy is tightening.</p>
        <p>Reply or call and we can dig into your specific market.</p>
      `,
      ctaHref: "tel:3215862121",
      ctaLabel: "Call Ryan",
    }),
  },
  {
    delayMs: 12 * 24 * 60 * 60 * 1000,
    subject: "One more thing — let's lock this in",
    body: (name?: string | null) => emailShell({
      title: "Let's move forward",
      preheader: "Industrial sourcing — no pressure",
      body: `
        <p>This is my last email. I just wanted to make sure you knew: whenever you're ready to move on space, I'm the fastest option in Florida.</p>
        <p>3PL expansion, consolidation, new market entry — same process. We get you options fast, negotiate hard, and close clean.</p>
        <p>If it's not the right time now, no worries. Reach out when you're ready: (321) 586-2121 or Ryan@MaxLifeRealty.com</p>
        <p>I'll be here.</p>
      `,
      ctaHref: "tel:3215862121",
      ctaLabel: "Call When Ready",
    }),
  },
];

const logisticsInvestorEmails = [
  {
    delayMs: 0,
    subject: "Industrial portfolio sourcing — Florida's fastest-growing market",
    body: (name?: string | null) => emailShell({
      title: "Logistics investment opportunity",
      preheader: "Sector-focused industrial deals — Florida",
      body: `
        <p>${name ? `Hi ${name},` : "Hi,"}</p>
        <p>I source off-market industrial deals across Florida's logistics corridor — Jacksonville, Lakeland, and Orlando. Class A bulk distribution, last-mile infill, net-leased properties with credit-grade tenants.</p>
        <p>Typical deals: $3-15M, 5.5-7% cap rates, 10-15 year lease terms with investment-grade operators and 3PLs.</p>
        <p>If you're building a sector-focused industrial portfolio, let's talk about what you're targeting.</p>
        <p>Best,<br>Ryan<br>(321) 586-2121</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/industries/logistics-distribution",
      ctaLabel: "View Opportunities",
    }),
  },
  {
    delayMs: 3 * 24 * 60 * 60 * 1000,
    subject: "Off-market deal just listed: $5.2M Lakeland distribution",
    body: (name?: string | null) => emailShell({
      title: "Off-market opportunity",
      preheader: "Lakeland — Class A bulk distribution",
      body: `
        <p>We just got exclusivity on a 42k sf bulk distribution facility in Lakeland — occupied by a regional 3PL on 10-year triple-net lease.</p>
        <p>Asking 6.8% cap rate. Won't hit the market for 2-3 weeks.</p>
        <p>If this fits your portfolio criteria, let's talk numbers before it goes broad market.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/contact",
      ctaLabel: "Request Details",
    }),
  },
  {
    delayMs: 6 * 24 * 60 * 60 * 1000,
    subject: "Why logistics investors are moving to Florida now",
    body: (name?: string | null) => emailShell({
      title: "Logistics market tailwinds",
      preheader: "Why Florida logistics is outperforming",
      body: `
        <p>Florida's industrial market is outpacing the national average:</p>
        <ul style="padding-left:20px">
          <li style="margin-bottom:6px"><strong>Port activity</strong>: Jacksonville is Top 12 US; Tampa growing 8% annually</li>
          <li style="margin-bottom:6px"><strong>Rent growth</strong>: 4-6% annually (national avg 2.5%)</li>
          <li style="margin-bottom:6px"><strong>Supply chain</strong>: Last-mile dominance — density + highway access = pricing power</li>
          <li style="margin-bottom:6px"><strong>Operators</strong>: Credit-grade tenants (J.B. Hunt, XPO, ArcBest) expanding footprint</li>
        </ul>
        <p>Cap rates staying 50-75 bps higher than coastal markets, but rent growth is accelerating. Now is the window.</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/market-reports",
      ctaLabel: "Read Market Report",
    }),
  },
  {
    delayMs: 9 * 24 * 60 * 60 * 1000,
    subject: "Portfolio strategy: How to build logistics holdings in Florida",
    body: (name?: string | null) => emailShell({
      title: "Building a 3-5 property portfolio",
      preheader: "Logistics portfolio thesis",
      body: `
        <p>Most institutional investors we work with follow this pattern for building Florida logistics portfolios:</p>
        <ol style="padding-left:20px">
          <li style="margin-bottom:6px"><strong>Anchor deal</strong>: Lakeland bulk distribution (widest selection, best pricing)</li>
          <li style="margin-bottom:6px"><strong>Last-mile</strong>: Orlando or Tampa infill (higher cap rate, strong upside)</li>
          <li style="margin-bottom:6px"><strong>Port play</strong>: Jacksonville property (lower cap, long-term appreciation)</li>
        </ol>
        <p>We can build this portfolio over 12-18 months with staggered acquisitions. Each deal feeds the next as market knowledge deepens.</p>
        <p>Want to talk through a strategy for your capital?</p>
      `,
      ctaHref: "https://maxlifedevelopment.com/contact",
      ctaLabel: "Schedule Strategy Call",
    }),
  },
  {
    delayMs: 12 * 24 * 60 * 60 * 1000,
    subject: "Let's build your Florida logistics portfolio",
    body: (name?: string | null) => emailShell({
      title: "Ready to move forward",
      preheader: "Off-market sourcing — your criteria",
      body: `
        <p>This is my last touchpoint. Here's what we do: you tell us your target (property type, geography, cap rate, tenant profile), and we source off-market deals that fit.</p>
        <p>Most investors see 3-4 deals per month in their specific criteria. Some they pass on, some are serious candidates.</p>
        <p>If you want to see what's moving in Florida logistics right now, call me: (321) 586-2121</p>
        <p>Or reply here and let me know what you're looking for.</p>
      `,
      ctaHref: "tel:3215862121",
      ctaLabel: "Call Ryan",
    }),
  },
];

/**
 * Enqueue nurture sequence based on lead source and sourceRef.
 * Routes to logistics-specific sequences if from /industries/logistics-distribution.
 *
 * Non-blocking — errors are logged but don't propagate.
 */
export async function enqueueNurtureSequence({ email, name, source, sourceRef }: NurtureParams) {
  try {
    const resend = getResend();

    // Select email sequence based on source
    let emails = genericInvestorEmails;
    if (sourceRef?.includes("logistics-distribution")) {
      if (sourceRef.includes("audience=tenant")) {
        emails = logisticsTenantEmails;
      } else if (sourceRef.includes("audience=investor")) {
        emails = logisticsInvestorEmails;
      } else {
        // Default to tenant if no audience specified
        emails = logisticsTenantEmails;
      }
    }

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
          "X-Source-Page": sourceRef || "unknown",
        },
      });
    }
  } catch (err) {
    console.error("[nurture] Failed to enqueue sequence:", err);
  }
}
