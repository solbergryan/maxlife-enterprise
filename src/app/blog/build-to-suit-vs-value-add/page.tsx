import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build-to-Suit vs Value-Add: Which CRE Strategy Wins?",
  description:
    "Comparing build-to-suit development vs value-add commercial real estate — risk, returns, timelines, capital requirements, and when each strategy outperforms.",
  alternates: { canonical: "/blog/build-to-suit-vs-value-add" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Build-to-Suit vs Value-Add: Which CRE Strategy Wins?",
  description:
    "Comparing ground-up build-to-suit development with value-add commercial real estate investments.",
  datePublished: "2026-04-21",
  author: {
    "@type": "Person",
    name: "Ryan Solberg",
    url: "https://maxlifedevelopment.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Development",
    url: "https://maxlifedevelopment.com",
  },
};

export default function BTSvsValueAdd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/blog"
            className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              Comparison
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Build-to-Suit vs Value-Add: Which CRE Strategy Wins?
          </h1>
          <p className="text-gray-300 text-lg">
            Two fundamentally different paths to CRE returns — one creates new
            supply, the other repositions existing inventory. Here&apos;s how to
            choose.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <p className="text-gray-300 leading-relaxed">
            Commercial real estate developers and investors generally fall into
            two camps: those who build new (build-to-suit) and those who buy and
            improve existing properties (value-add). Both strategies can
            generate 20-35% IRRs when executed well. But the capital
            requirements, timelines, and risk profiles couldn&apos;t be more
            different.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Build-to-Suit: The Development Spread
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            In a build-to-suit (BTS) deal, you acquire land, secure a tenant
            commitment (signed LOI or lease), build a property to the
            tenant&apos;s specifications, and sell the completed income-producing
            asset at a stabilized cap rate. Your profit is the{" "}
            <em className="text-white">development spread</em> — the difference
            between all-in project cost and disposition value.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Typical BTS economics in Florida:</strong>
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">
              Total development cost: $1.8M – $3M (typical single-tenant NNN)
            </li>
            <li className="text-gray-300 text-sm">
              Stabilized disposition price: $2.1M – $3.5M (at 5.75–6.5% cap)
            </li>
            <li className="text-gray-300 text-sm">
              Development spread: 150–250 basis points
            </li>
            <li className="text-gray-300 text-sm">
              Gross profit margin: 15–25% on total cost
            </li>
            <li className="text-gray-300 text-sm">
              Timeline: 12–18 months land-to-exit
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Value-Add: The Repositioning Spread
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Value-add investors buy underperforming commercial properties and
            increase value through rent growth, expense reduction, physical
            renovation, tenant improvements, or lease restructuring. Your
            profit is the{" "}
            <em className="text-white">repositioning spread</em> — the
            difference between stabilized value and total investment (purchase
            price + renovation costs).
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Typical value-add economics:</strong>
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">
              Purchase at 7.5–9% cap rate (underperforming asset)
            </li>
            <li className="text-gray-300 text-sm">
              Invest 15–25% of purchase price in improvements
            </li>
            <li className="text-gray-300 text-sm">
              Lease up / reposition over 12–36 months
            </li>
            <li className="text-gray-300 text-sm">
              Exit at 5.75–6.5% cap rate on higher NOI
            </li>
            <li className="text-gray-300 text-sm">
              Target IRR: 15–25% over 3-5 year hold
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">Factor</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">Build-to-Suit</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3">Value-Add</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Capital Required", "$300K–$750K equity (75% LTC)", "$400K–$2M equity (70% LTV + reno reserve)"],
                  ["Time to Exit", "12–18 months", "3–5 years typical"],
                  ["Primary Risk", "Tenant default before completion, cost overruns", "Lease-up failure, market softening"],
                  ["Return Profile", "Single profit event at exit", "Cash flow + appreciation over hold"],
                  ["Skill Required", "Entitlements, construction mgmt", "Market analysis, property mgmt"],
                  ["Tax Treatment", "Capital gain at sale", "Depreciation during hold + gain"],
                  ["Liquidity", "Low (illiquid until completion)", "Medium (can sell anytime)"],
                  ["Scalability", "Replicable with pipeline", "Deal-by-deal"],
                ].map(([factor, bts, va]) => (
                  <tr key={factor} className="border-b border-white/10/50">
                    <td className="py-3 pr-4 text-white font-medium">{factor}</td>
                    <td className="py-3 pr-4 text-gray-300">{bts}</td>
                    <td className="py-3 text-gray-300">{va}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            When Build-to-Suit Wins
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">BTS outperforms in:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">
              Growing markets with inadequate retail supply (most of Florida)
            </li>
            <li className="text-gray-300 text-sm">
              Declining cap rate environments (new product demanded at tight rates)
            </li>
            <li className="text-gray-300 text-sm">
              Active tenant expansion programs (dollar stores, auto parts, QSR, pharmacies)
            </li>
            <li className="text-gray-300 text-sm">
              Investors who want clean exits and repeatable pipelines
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            When Value-Add Wins
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">Value-add outperforms in:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">
              Markets with distressed / underperforming inventory
            </li>
            <li className="text-gray-300 text-sm">
              Rising rent environments where lease restructuring captures upside
            </li>
            <li className="text-gray-300 text-sm">
              Investors who want cash flow during the hold
            </li>
            <li className="text-gray-300 text-sm">
              Tax-sensitive investors who benefit from depreciation
            </li>
            <li className="text-gray-300 text-sm">
              Markets where land is expensive but existing assets are cheap
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            The Florida Reality Check
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Florida&apos;s population growth and underserved secondary markets
            heavily favor build-to-suit right now. With 300,000+ net new
            residents annually, tenant expansion programs in growth corridors,
            and tight retail supply, BTS developers are capturing strong
            development spreads on dollar stores, QSR, auto parts, and
            pharmacies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Value-add opportunities do exist — particularly in older Orlando
            retail centers, secondary market office, and underperforming
            multifamily — but competition is fierce and pricing often leaves
            little room for error.
          </p>
        </section>

        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Our Take</h2>
          <p className="text-gray-300 leading-relaxed">
            For most investors in 2026, build-to-suit offers better
            risk-adjusted returns in Florida thanks to the population tailwind
            and active tenant pipeline. But the best-performing CRE portfolios
            use both: BTS for capital velocity (12-18 month turns), value-add
            for compounding cash flow. If you want to understand which makes
            sense for your capital, let&apos;s talk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { slug: "build-to-suit-vs-existing-commercial-orlando", title: "Build-to-Suit vs Existing Commercial Orlando" },
              { slug: "central-florida-land-development", title: "Why Central Florida Is Hot for Land Development" },
              { slug: "what-is-nnn-lease", title: "What Is a Triple Net (NNN) Lease?" },
              { slug: "how-to-evaluate-commercial-real-estate-deal", title: "How to Evaluate a CRE Deal" },
            ].map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-4 transition-colors text-sm text-gray-300 hover:text-gold"
              >
                {r.title} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
