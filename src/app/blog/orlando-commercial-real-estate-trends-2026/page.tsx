import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orlando Commercial Real Estate Market Trends 2026 | MaxLife Enterprise",
  description:
    "Analysis of the Orlando commercial real estate market heading into 2026. Trends, cap rates, investment opportunities, and outlook across retail, industrial, multifamily, and NNN sectors.",
};

export default function OrlandoTrends2026() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-gold hover:underline text-sm mb-6 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Insights
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
              Market Report
            </span>
            <span className="text-gray-500 text-sm">2026</span>
            <span className="text-gray-600 text-sm">&middot; 8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Orlando Commercial Real Estate Market Trends 2026
          </h1>
          <p className="text-gray-400 text-lg">
            Key trends, investment opportunities, and market outlook for
            commercial real estate investors in the Orlando metro area.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Market Overview
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The Orlando commercial real estate market enters 2026 on solid
              footing. After navigating interest rate uncertainty over the past
              two years, cap rates have stabilized across most asset classes, and
              transaction volume is rebounding. Investors who were sidelined are
              re-entering the market, particularly in the NNN, multifamily, and
              industrial sectors where fundamentals remain strong.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Orlando&apos;s population growth continues to outpace national
              averages, fueled by domestic migration from higher-cost markets.
              This demographic tailwind supports demand across all commercial
              property types — from retail and dining to housing and employment
              space.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Sector-by-Sector Outlook
            </h2>

            <h3 className="text-lg font-semibold text-gold mb-2">
              NNN Investments
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              NNN investment properties remain one of the most active segments in
              the Orlando market. National credit tenants continue expanding
              across Central Florida, providing a steady supply of investment
              opportunities. Cap rates for credit-tenant NNN deals have settled
              in the 5.5%-6.5% range, with strong demand from 1031 exchange
              buyers and passive income investors.
            </p>

            <h3 className="text-lg font-semibold text-gold mb-2">
              Multifamily
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Rental demand remains robust as homeownership affordability
              challenges persist. Value-add multifamily — particularly Class B
              and C assets with below-market rents — continues to offer
              attractive risk-adjusted returns. Investors who can renovate units
              and push rents to market rate are seeing meaningful NOI growth.
            </p>

            <h3 className="text-lg font-semibold text-gold mb-2">
              Industrial & Logistics
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Industrial remains one of the tightest sectors in Central Florida.
              E-commerce growth and Orlando&apos;s central location as a
              distribution hub keep vacancy rates near historic lows. New
              construction is being absorbed quickly, and rental rates continue
              trending upward.
            </p>

            <h3 className="text-lg font-semibold text-gold mb-2">Retail</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Reports of retail&apos;s demise have been greatly exaggerated —
              especially in high-growth markets like Orlando. Population growth
              is driving demand for service-oriented retail, restaurants, and
              medical uses. Multi-tenant strip centers in high-growth corridors
              with below-market rents offer compelling value-add opportunities.
            </p>

            <h3 className="text-lg font-semibold text-gold mb-2">
              Land & Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              As residential development pushes into suburban and exurban areas,
              commercially zoned land in the path of growth continues to
              appreciate. The southeast Orange County corridor and the US-27
              corridor into Lake County are among the most active development
              areas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Submarkets to Watch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                {
                  market: "Lake Nona / Medical City",
                  why: "Healthcare and life sciences driving office and retail demand",
                },
                {
                  market: "I-4 Corridor / Sanford",
                  why: "Corporate relocations and multifamily growth",
                },
                {
                  market: "US-192 / Kissimmee",
                  why: "Tourism retail and value-add multifamily opportunities",
                },
                {
                  market: "Clermont / West Orange",
                  why: "Residential growth creating commercial development demand",
                },
              ].map((item) => (
                <div
                  key={item.market}
                  className="bg-dark-card border border-dark-border rounded-lg p-4"
                >
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {item.market}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.why}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What This Means for Investors
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              For investors targeting the Orlando market in 2026, the
              opportunity set is strong but requires discipline. Stabilized cap
              rates mean pricing is more predictable, but the best risk-adjusted
              returns will come from investors who can identify value-add
              opportunities, source off-market deals, and execute efficiently.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you&apos;re a first-time commercial investor or expanding
              an existing portfolio, working with a broker who understands the
              nuances of Orlando&apos;s submarkets is critical to finding the
              right opportunities and avoiding overpriced assets.
            </p>
          </section>

          {/* Mid-article CTA */}
          <div className="bg-dark-card border border-gold/20 rounded-xl p-8 my-8 text-center">
            <h3 className="text-white text-xl font-bold mb-2">
              Looking to Invest in Orlando?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get access to current opportunities and off-market deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/opportunities"
                className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                View Current Deals
              </Link>
              <Link
                href="/investor-access"
                className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Get Off-Market Access
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
