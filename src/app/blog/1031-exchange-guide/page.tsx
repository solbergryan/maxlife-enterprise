import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "1031 Exchanges: How to Defer Taxes on Commercial Real Estate",
  description:
    "Learn how 1031 exchanges work, key timelines and rules, why NNN properties are ideal replacement properties, and common mistakes to avoid.",
};

export default function ExchangeGuideArticle() {
  return (
    <>
      <ArticleJsonLd
        title="1031 Exchanges: How to Defer Taxes on Commercial Real Estate"
        description="Learn how 1031 exchanges work, key timelines and rules, why NNN properties are ideal replacement properties, and common mistakes to avoid."
        url="/blog/1031-exchange-guide"
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
              Investment Strategy
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            1031 Exchanges: How to Defer Taxes on Commercial Real Estate
          </h1>
          <p className="text-gray-400 text-lg">
            A practical guide to using Section 1031 of the IRS tax code to defer
            capital gains taxes when selling investment property — and why NNN
            properties are the ideal replacement asset.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Is a 1031 Exchange?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A 1031 exchange — named after Section 1031 of the Internal Revenue
              Code — allows an investor to sell a commercial or investment
              property and reinvest the proceeds into a &quot;like-kind&quot;
              replacement property while deferring all capital gains taxes. The
              key word is &quot;defer.&quot; You don&apos;t eliminate the tax — you
              postpone it until you eventually sell without exchanging.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This is one of the most powerful tools in commercial real estate
              investing. Instead of losing 20-30% of your gains to federal and
              state taxes, you redeploy the full amount into your next property,
              compounding your returns over time. Many investors use 1031
              exchanges repeatedly throughout their careers, effectively deferring
              taxes indefinitely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              The Critical Timelines
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A 1031 exchange has two strict deadlines that begin the day you
              close on the sale of your relinquished (old) property. Missing
              either deadline disqualifies the entire exchange.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">45-Day Identification Period</h3>
                <p className="text-gray-400 text-sm">
                  You have exactly 45 calendar days from the sale of your
                  relinquished property to formally identify potential replacement
                  properties in writing to your Qualified Intermediary. Most
                  investors use the &quot;3-Property Rule,&quot; which allows you
                  to identify up to three properties regardless of value.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">180-Day Closing Deadline</h3>
                <p className="text-gray-400 text-sm">
                  You must close on one or more of your identified replacement
                  properties within 180 calendar days of selling your
                  relinquished property. There are no extensions — not for
                  holidays, weekends, or unforeseen circumstances.
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              These timelines run concurrently, meaning the 45-day identification
              window falls within the 180-day closing window. Planning ahead is
              essential — ideally, you should begin shopping for replacement
              properties before you even close on the sale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Rules and Requirements
            </h2>
            <ul className="space-y-3">
              {[
                {
                  title: "Like-Kind Property",
                  desc: "The replacement property must be \"like-kind,\" which in real estate is broadly defined. You can exchange an office building for a retail center, raw land for a warehouse, or an apartment complex for a NNN property.",
                },
                {
                  title: "Qualified Intermediary (QI)",
                  desc: "You cannot touch the sale proceeds. A third-party QI must hold the funds between the sale and the purchase. If the money hits your account, the exchange is disqualified.",
                },
                {
                  title: "Equal or Greater Value",
                  desc: "To defer 100% of taxes, the replacement property must be equal to or greater in value than the property sold, and you must reinvest all net proceeds.",
                },
                {
                  title: "Investment Purpose Only",
                  desc: "Both the relinquished and replacement properties must be held for investment or business use. You cannot 1031 exchange your primary residence or a property you intend to flip.",
                },
                {
                  title: "Same Taxpayer",
                  desc: "The same entity or individual that sells the relinquished property must acquire the replacement property. You can't sell from an LLC and buy in your personal name.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-white font-medium">{item.title}</span>
                    <span className="text-gray-400 text-sm block">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why NNN Properties Are Ideal for 1031 Exchanges
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              NNN (triple net) properties are among the most popular replacement
              assets in 1031 exchanges, and for good reason. When you&apos;re
              under a 180-day clock, you need a property type that is
              straightforward to evaluate and close quickly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                {
                  title: "Abundant Inventory",
                  desc: "NNN properties from national tenants are consistently available across the market, giving you options within the 45-day window.",
                },
                {
                  title: "Simple Underwriting",
                  desc: "Single-tenant NNN deals have straightforward financials — one tenant, one lease, predictable NOI. Less complexity means faster due diligence.",
                },
                {
                  title: "Passive Ownership",
                  desc: "Many 1031 exchangers are looking to move from active management to passive income. NNN properties deliver exactly that.",
                },
                {
                  title: "Defined Pricing",
                  desc: "NNN properties trade on cap rates with widely understood market comparables, making valuation and negotiation more efficient.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-dark-card border border-dark-border rounded-xl p-5"
                >
                  <h3 className="text-gold font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Common 1031 Exchange Mistakes
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The benefits of a 1031 exchange are significant, but the process is
              unforgiving. Here are the most common pitfalls:
            </p>
            <ul className="space-y-2">
              {[
                "Starting the replacement property search too late — begin well before your sale closes",
                "Failing to use a Qualified Intermediary from the start, or accidentally receiving sale proceeds",
                "Missing the 45-day identification deadline, even by a single day",
                "Trading down in value and triggering partial tax liability (known as \"boot\")",
                "Confusing \"like-kind\" rules — personal residences and inventory properties do not qualify",
                "Not consulting a CPA and real estate attorney before initiating the exchange",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-gray-400 text-sm">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              The Bottom Line
            </h2>
            <p className="text-gray-400 leading-relaxed">
              A 1031 exchange is one of the most tax-efficient strategies
              available to commercial real estate investors. When executed
              correctly, it allows you to grow your portfolio and compound
              returns without giving up a significant portion of your gains to
              taxes. The key is preparation: line up your Qualified Intermediary,
              start your replacement property search early, and work with a
              broker who understands the timeline pressure and can help you
              identify and close on the right property quickly.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-dark-card border border-gold/20 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-white mb-3">
              Planning a 1031 Exchange?
            </h3>
            <p className="text-gray-400 mb-6">
              MaxLife Development helps investors identify and close on NNN
              replacement properties within 1031 exchange timelines. Let us help
              you make the most of your tax-deferred dollars.
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
