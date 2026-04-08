import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Understanding Cap Rates: What Every CRE Investor Should Know",
  description:
    "Learn what capitalization rates are, how to calculate them, what makes a good cap rate, and how Central Florida cap rates compare across property types.",
};

export default function CapRatesArticle() {
  return (
    <>
      <ArticleJsonLd
        title="Understanding Cap Rates: What Every CRE Investor Should Know"
        description="Learn what capitalization rates are, how to calculate them, what makes a good cap rate, and how Central Florida cap rates compare across property types."
        url="/blog/cap-rates-explained"
      />
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              Commercial Real Estate
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">4 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Understanding Cap Rates: What Every CRE Investor Should Know
          </h1>
          <p className="text-gray-400 text-lg">
            The capitalization rate is the most commonly used metric in
            commercial real estate. Here&apos;s how to calculate it, interpret
            it, and use it to make better investment decisions.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Is a Cap Rate?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A capitalization rate — or &quot;cap rate&quot; — is the ratio of a
              property&apos;s net operating income (NOI) to its purchase price or
              current market value. It&apos;s expressed as a percentage and
              represents the unleveraged annual return you would earn if you
              bought the property with all cash.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Cap rates are the universal language of commercial real estate
              pricing. When someone says a property is &quot;trading at a 6
              cap,&quot; they mean the annual NOI equals 6% of the purchase
              price. It&apos;s a quick, standardized way to compare properties
              regardless of size, location, or property type.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How to Calculate a Cap Rate
            </h2>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-4">
              <div className="text-center">
                <p className="text-gold font-semibold text-lg mb-3">Cap Rate Formula</p>
                <p className="text-white text-xl font-bold mb-4">
                  Cap Rate = Net Operating Income / Purchase Price
                </p>
                <div className="border-t border-dark-border pt-4 mt-4">
                  <p className="text-gray-400 text-sm mb-2">
                    <span className="text-white font-medium">Example:</span> A
                    property generates $90,000 in annual NOI and is listed at
                    $1,500,000.
                  </p>
                  <p className="text-gold font-semibold">
                    $90,000 / $1,500,000 = 6.0% Cap Rate
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              You can also work the formula in reverse. If you know the NOI and
              the market cap rate for similar properties, you can estimate
              value: Property Value = NOI / Cap Rate. This is how appraisers and
              brokers determine what a property is worth based on its income
              stream.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Is a &quot;Good&quot; Cap Rate?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              There&apos;s no single answer — it depends on the property type,
              location, tenant quality, lease term, and your investment goals.
              Generally, cap rates reflect the risk-return tradeoff:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  range: "4.0% – 5.5%",
                  label: "Lower Risk / Lower Return",
                  desc: "Credit tenants (Walgreens, Chick-fil-A), long lease terms, prime locations. Ideal for capital preservation.",
                },
                {
                  range: "5.5% – 7.0%",
                  label: "Moderate Risk / Moderate Return",
                  desc: "Strong regional tenants, mid-term leases, good secondary markets. The sweet spot for many investors.",
                },
                {
                  range: "7.0% – 9.0%+",
                  label: "Higher Risk / Higher Return",
                  desc: "Shorter lease terms, local tenants, tertiary markets, or value-add situations. More management and re-tenanting risk.",
                },
              ].map((item) => (
                <div
                  key={item.range}
                  className="bg-dark-card border border-dark-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold font-bold text-sm">{item.range}</span>
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed">
              A lower cap rate means you&apos;re paying more per dollar of
              income — but you&apos;re typically getting a safer, more
              predictable income stream. A higher cap rate offers more yield but
              comes with more risk. Neither is inherently better; it depends on
              your investment strategy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Cap Rate vs. Cash-on-Cash Return
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Cap rate and cash-on-cash return are related but measure different
              things. Understanding both is essential for evaluating deals
              properly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Cap Rate</h3>
                <p className="text-gray-400 text-sm">
                  Measures the property&apos;s return as if purchased with all
                  cash. Ignores financing entirely. Useful for comparing
                  properties on an apples-to-apples basis regardless of how
                  they&apos;re financed.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Cash-on-Cash Return</h3>
                <p className="text-gray-400 text-sm">
                  Measures the annual cash flow relative to the actual cash you
                  invested (your down payment plus closing costs). Accounts for
                  leverage. A 6% cap rate property financed with a loan might
                  yield 8-10% cash-on-cash.
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Use cap rate to compare and price properties. Use cash-on-cash
              return to evaluate how a specific deal performs relative to the
              capital you&apos;re actually deploying. Both metrics matter, and
              savvy investors look at each when analyzing an opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Central Florida Cap Rate Ranges
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Cap rates in Central Florida vary by property type, tenant
              strength, and submarket. Here&apos;s a general overview of where
              the market sits for common commercial property types in the
              Orlando and Space Coast regions:
            </p>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { type: "NNN Credit Retail (Walgreens, CVS)", range: "4.5% – 5.5%" },
                  { type: "NNN QSR / Fast Casual (Starbucks, Chick-fil-A)", range: "4.0% – 5.0%" },
                  { type: "NNN Auto Parts / Dollar Stores", range: "5.5% – 7.0%" },
                  { type: "Multi-Tenant Retail Strip Centers", range: "6.5% – 8.0%" },
                  { type: "Industrial / Flex Space", range: "5.5% – 7.5%" },
                  { type: "Medical / Dental Office (NNN)", range: "5.5% – 7.0%" },
                ].map((item) => (
                  <div key={item.type} className="flex items-center justify-between gap-4">
                    <span className="text-gray-300 text-sm">{item.type}</span>
                    <span className="text-gold font-semibold text-sm whitespace-nowrap">
                      {item.range}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mt-4">
              These are general ranges and will shift based on specific lease
              terms, location within the metro, and current market conditions.
              Central Florida has seen moderate cap rate compression over the
              past several years as demand from out-of-state investors continues
              to drive pricing.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-dark-card border border-gold/20 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-white mb-3">
              Need Help Analyzing a Deal?
            </h3>
            <p className="text-gray-400 mb-6">
              MaxLife Development can help you evaluate cap rates, run the
              numbers, and determine whether a property fits your investment
              goals. Central Florida is our market.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
