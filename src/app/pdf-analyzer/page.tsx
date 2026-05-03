import type { Metadata } from "next";
import Link from "next/link";
import DealAnalyzerClient from "./DealAnalyzerClient";

export const metadata: Metadata = {
  title: "Free AI Deal Analyzer for CRE Offering Memorandums | Upload PDF, Get IRR/DSCR in Seconds",
  description:
    "Drop any commercial real estate offering memorandum into our free AI deal analyzer. Get IRR, DSCR, cash-on-cash, equity multiple, and a letter-grade deal score in under a minute. Built for Orlando & Central Florida CRE investors. No signup, no email required.",
  alternates: { canonical: "/pdf-analyzer" },
  keywords: [
    "PDF deal analyzer",
    "AI offering memorandum analyzer",
    "CRE underwriting AI",
    "commercial real estate PDF analyzer",
    "free OM analyzer",
    "IRR calculator from PDF",
    "DSCR calculator OM",
    "cap rate from offering memorandum",
    "Orlando commercial real estate analyzer",
    "NNN deal analyzer AI",
  ],
  openGraph: {
    title: "Free AI Deal Analyzer for CRE Offering Memorandums",
    description:
      "Upload any OM. Get IRR, DSCR, cap rate, and a deal grade in 60 seconds.",
    url: "https://maxlifedevelopment.com/pdf-analyzer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Deal Analyzer for CRE Offering Memorandums",
    description:
      "Upload any OM. Get IRR, DSCR, cap rate, and a deal grade in 60 seconds.",
  },
};

const faqs = [
  {
    q: "Is my OM kept private?",
    a: "Yes. Your PDF is uploaded to encrypted storage, analyzed in seconds, then automatically deleted. We send the original to Ryan only so he can offer a real human review — we never share, sell, or train AI models on it.",
  },
  {
    q: "What kinds of deals does this work on?",
    a: "Single-tenant NNN, multifamily, retail strip centers, industrial/warehouse, medical office, suburban office, ground leases, and most other income-producing CRE. Doesn't work well on: undeveloped land with no income, businesses for sale, residential SFR portfolios with mixed pricing.",
  },
  {
    q: "How accurate is the AI extraction?",
    a: "Claude Haiku 4.5 reads the entire PDF — including tables, charts, and scanned pages. We've tested on 50+ real broker OMs and it correctly extracts price, rent, NOI, cap rate, and lease terms ~94% of the time. When it's unsure, it asks you to confirm rather than guessing. Always verify against the source document before making investment decisions.",
  },
  {
    q: "What if my PDF is missing data?",
    a: "If we can't find the purchase price or rent, we'll show you what was extracted and prompt you to type those two numbers in. Then we re-run the analysis with your override.",
  },
  {
    q: "What's the underwriting math behind this?",
    a: "The same engine that powers our manual Deal Analyzer — calculates IRR via Newton-Raphson on the unlevered cash flows, DSCR from year-1 NOI ÷ annual debt service, average cash-on-cash over the hold period, equity multiple from total return, and grades the deal A+ through D against industry benchmarks. The defaults assume 25% down, 6.75% interest, 30-year amortization, 10-year hold, and 0.5% exit cap spread — all overrideable.",
  },
  {
    q: "Does it cost anything?",
    a: "No. Free, no signup, no email required (unless you want a human review from Ryan). We pay the AI cost — it's our way of building a relationship with serious CRE investors.",
  },
  {
    q: "What's the file size limit?",
    a: "25 MB. Most broker OMs are 5–15 MB and run fine. If yours is bigger, compress it first or email it to Ryan directly.",
  },
  {
    q: "Why is this free? What's the catch?",
    a: "No catch. Ryan Solberg is a working Florida-licensed broker. The goal is simple: when you find a deal worth pursuing, you'll remember who helped you analyze it. About 1 in 30 people who use this tool end up working with us on a deal.",
  },
];

const supportedDeals = [
  {
    title: "NNN Single-Tenant",
    examples: "Dollar General, AutoZone, Walgreens, CVS, Chick-fil-A ground leases",
    icon: "🏢",
  },
  {
    title: "Multifamily",
    examples: "Garden-style, mid-rise, value-add, Class A/B apartment portfolios",
    icon: "🏘️",
  },
  {
    title: "Retail Strip Centers",
    examples: "Anchored & unanchored, neighborhood retail, power centers",
    icon: "🛍️",
  },
  {
    title: "Industrial / Warehouse",
    examples: "Distribution, last-mile, flex industrial, cold storage",
    icon: "📦",
  },
  {
    title: "Medical Office",
    examples: "MOBs, surgery centers, dental, urgent care, imaging",
    icon: "⚕️",
  },
  {
    title: "Office",
    examples: "Suburban, Class A/B, single-tenant, multi-tenant",
    icon: "🏬",
  },
];

export default function PdfAnalyzerPage() {
  // JSON-LD WebApplication schema for SEO + AI discoverability
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MaxLife PDF Deal Analyzer",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any (web-based)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free AI-powered commercial real estate offering memorandum analyzer. Extracts deal terms from any PDF and computes IRR, DSCR, cash-on-cash, equity multiple, and a letter-grade deal score in under a minute.",
    url: "https://maxlifedevelopment.com/pdf-analyzer",
    creator: {
      "@type": "Organization",
      name: "MaxLife Realty",
      url: "https://maxlifedevelopment.com",
    },
    featureList: [
      "AI extraction from offering memorandums",
      "IRR (Internal Rate of Return) calculation",
      "DSCR (Debt Service Coverage Ratio) analysis",
      "Cash-on-cash return projection",
      "Equity multiple modeling",
      "A+ through D letter-grade deal scoring",
      "Reads scanned and native PDFs up to 25 MB",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools · AI-Powered
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            PDF <span className="text-gold">Deal Analyzer</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg mb-6">
            Drop any commercial offering memorandum into the box below. Claude
            reads the PDF, extracts the deal terms, and runs the full
            underwriting — IRR, DSCR, cash-on-cash, equity multiple, and a
            letter-grade deal score — in under a minute.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Reads scanned & native PDFs
            </span>
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Up to 25 MB · ~10 second analysis
            </span>
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Free · No signup
            </span>
          </div>
        </div>
      </section>

      {/* Tool */}
      <DealAnalyzerClient />

      {/* What you'll get */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            What You&rsquo;ll Get
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Institutional-Grade Underwriting in One PDF Upload
          </h2>
          <p className="text-gray-300 max-w-3xl mb-10 text-base leading-relaxed">
            The same metrics professional CRE investors run before they pursue a
            deal — calculated from your OM in about ten seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                metric: "IRR",
                title: "Internal Rate of Return",
                detail: "Annualized return over your hold period — solved via Newton-Raphson on the unlevered cash flows. Industry target: >12% on stabilized deals.",
              },
              {
                metric: "DSCR",
                title: "Debt Service Coverage",
                detail: "NOI ÷ annual debt service. Lenders require >1.25x to fund the loan. Below 1.0x means you're paying out of pocket every month.",
              },
              {
                metric: "CoC",
                title: "Cash-on-Cash",
                detail: "Annual cash flow ÷ equity invested. Tells you what your real-money return is, year over year, before any sale.",
              },
              {
                metric: "EM",
                title: "Equity Multiple",
                detail: "Total dollars back ÷ dollars in. A 2.0x means you doubled your equity over the hold period (cash flow + sale proceeds).",
              },
            ].map((m) => (
              <div
                key={m.metric}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
              >
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                  {m.metric}
                </div>
                <div className="text-white font-semibold mb-2">{m.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
              <div className="text-white font-semibold mb-2">Letter-Grade Deal Score</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every deal gets an A+ through D grade based on weighted IRR,
                DSCR, cash-on-cash, and equity multiple performance against
                industry benchmarks.
              </p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
              <div className="text-white font-semibold mb-2">Sources & Uses</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full breakdown of purchase price, loan amount, down payment,
                and total equity invested — including closing costs and
                origination fees.
              </p>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
              <div className="text-white font-semibold mb-2">Cash Flow & Exit</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Year-1 cash flow, projected exit value, and total return over
                the full hold period — accounting for rent growth and exit cap
                spread.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What kinds of deals work */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Supported Deal Types
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            What Kinds of Offering Memorandums Work
          </h2>
          <p className="text-gray-300 max-w-3xl mb-10 text-base leading-relaxed">
            Anything income-producing. The analyzer is tuned for the asset
            classes Florida investors pursue most often.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportedDeals.map((d) => (
              <div
                key={d.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <div className="text-white font-semibold mb-2">{d.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{d.examples}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-8 leading-relaxed max-w-3xl">
            <strong className="text-gray-400">Doesn&rsquo;t work as well on:</strong>{" "}
            raw land with no income, owner-user properties, business-for-sale
            packages, or residential SFR portfolios with mixed unit pricing. For
            those, use our{" "}
            <Link href="/deal-analyzer" className="text-gold hover:underline">
              manual Deal Analyzer
            </Link>{" "}
            and enter the numbers yourself.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            How the PDF Analyzer Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-gold text-3xl font-bold mb-3">01</div>
              <h3 className="text-white font-semibold mb-2">Upload Your OM</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Drag any offering memorandum, broker package, or property
                listing PDF into the box above. Native PDFs and scanned
                documents both work, up to 25 MB.
              </p>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-3">02</div>
              <h3 className="text-white font-semibold mb-2">AI Extracts the Numbers</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Claude Haiku reads the entire PDF and pulls the price, rent,
                NOI, cap rate, building specs, tenant info, and lease terms —
                even when they&rsquo;re buried in tables or footnotes.
              </p>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-3">03</div>
              <h3 className="text-white font-semibold mb-2">Full Underwriting</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The same engine that powers our{" "}
                <Link href="/deal-analyzer" className="text-gold hover:underline">
                  manual Deal Analyzer
                </Link>{" "}
                runs IRR, DSCR, cash-on-cash, and equity multiple. You get a
                letter-grade score and traffic-light benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built by a real broker */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-10 items-center">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
                Built by a Working Broker
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Not a Tech Startup. A Real CRE Broker.
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                This tool was built by Ryan Solberg, a Florida-licensed real
                estate broker (BK3354351) and licensed mortgage originator
                (NMLS #1784218) who has closed $85M+ in transactions across
                Central Florida.
              </p>
              <p>
                It exists because too many would-be CRE investors burn weeks
                manually keying in numbers from broker packages, only to find
                out the deal doesn&rsquo;t pencil. The PDF Analyzer collapses
                that into ten seconds — which means more time on deals that
                actually clear.
              </p>
              <p>
                When the analyzer flags something interesting (or when it
                doesn&rsquo;t and you want a sanity check), Ryan personally
                reviews submissions. Optionally include your name and email on
                the form — or stay anonymous and just use the math.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold hover:underline font-medium pt-2"
              >
                More about Ryan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-4 text-white font-semibold list-none">
                  <span>{f.q}</span>
                  <span className="text-gold text-xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other tools cross-link */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            More Free Tools
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Keep Underwriting
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/deal-analyzer",
                title: "Manual Deal Analyzer",
                desc: "Type in your own numbers. Full sensitivity matrix, year-by-year cash flows, and grading.",
              },
              {
                href: "/cap-rate-calculator",
                title: "Cap Rate Calculator",
                desc: "Solve for cap rate, NOI, or price — give it any two, get the third.",
              },
              {
                href: "/cap-rates",
                title: "FL Cap Rate Benchmarks",
                desc: "Submarket-level cap rate data across NNN, multifamily, retail, industrial, and office.",
              },
              {
                href: "/1031-timeline-calculator",
                title: "1031 Timeline Calculator",
                desc: "45-day identification and 180-day closing deadlines, with safe-harbor checkpoints.",
              },
              {
                href: "/cost-segregation-calculator",
                title: "Cost Segregation Estimator",
                desc: "Estimate accelerated depreciation savings on your CRE acquisition.",
              },
              {
                href: "/mortgage-calculator",
                title: "CRE Mortgage Calculator",
                desc: "Monthly payment, amortization schedule, and balloon payoff for commercial loans.",
              },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group block bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/40 hover:bg-white/[0.06] transition-all"
              >
                <div className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {t.title}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {t.desc}
                </p>
                <span className="text-gold text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-navy via-navy-dark to-dark border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Ready to Buy?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Find Deals Worth Analyzing
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse active commercial real estate listings across Orlando, Brevard
            County, and the I-4 corridor — or get a quiet look at off-market
            opportunities Ryan&rsquo;s sourcing for serious buyers.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse the Marketplace →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Talk to Ryan
            </Link>
          </div>

          <p className="mt-12 text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Estimates only — for informational and educational use. Not
            investment, tax, legal, or accounting advice. AI-extracted figures
            should be verified against the source document. See our{" "}
            <Link href="/terms" className="text-gold hover:underline">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
