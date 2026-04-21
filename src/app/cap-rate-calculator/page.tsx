import type { Metadata } from "next";
import Link from "next/link";
import CapRateCalculator from "@/components/CapRateCalculator";

export const metadata: Metadata = {
  title: "Cap Rate Calculator — Free CRE Capitalization Rate Tool",
  description:
    "Free cap rate calculator for commercial real estate investors. Compute cap rate, implied price, or required NOI. Includes 2026 Florida cap rate reference by asset class.",
  keywords: [
    "cap rate calculator",
    "capitalization rate calculator",
    "commercial real estate cap rate",
    "NNN cap rate calculator",
    "Florida cap rates",
    "Orlando cap rates",
    "CRE valuation calculator",
  ],
  alternates: { canonical: "/cap-rate-calculator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cap Rate Calculator",
  description:
    "Commercial real estate cap rate calculator — compute cap rate from NOI and price, or work backwards.",
  url: "https://maxlifedevelopment.com/cap-rate-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Development",
    url: "https://maxlifedevelopment.com",
  },
};

export default function CapRateCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cap Rate <span className="text-gold">Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Calculate capitalization rate, implied value, or required NOI for
            any commercial real estate investment. Instant calculations with
            2026 Florida cap rate reference by asset class.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CapRateCalculator />
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is a Cap Rate?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Capitalization rate (cap rate) is the ratio of a property&apos;s
            Net Operating Income (NOI) to its purchase price or current value.
            It&apos;s the most widely used metric for comparing commercial
            real estate investments — essentially the unlevered yield of the
            property.
          </p>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <code className="text-gold text-sm block">
              Cap Rate = NOI ÷ Purchase Price
            </code>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Use Cap Rates
          </h2>
          <ul className="space-y-3">
            {[
              {
                title: "Compare Properties",
                desc: "At the same cap rate, two properties with similar NOIs should trade at similar prices. Different cap rates reflect perceived risk, location quality, tenant credit, and lease term.",
              },
              {
                title: "Estimate Value from NOI",
                desc: "If you know a property's NOI and the typical cap rate for its asset class, you can estimate value. This is how appraisers apply the 'income approach' to valuation.",
              },
              {
                title: "Set an Offer Price",
                desc: "Divide the NOI by your target cap rate to determine your maximum offer price. If market cap rates are 6.0% and NOI is $120K, offer no more than $2M.",
              },
              {
                title: "Understand Market Dynamics",
                desc: "Cap rates move inversely with prices. When cap rates compress (go down), prices rise. When cap rates expand (go up), prices fall. Interest rates, tenant demand, and investor sentiment drive cap rate movement.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="bg-dark-card border border-dark-border rounded-xl p-4"
              >
                <p className="text-gold font-semibold text-sm mb-1">
                  {item.title}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h3 className="text-white font-semibold text-lg mb-3">
            Cap Rate Limitations
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Cap rate is a snapshot — it doesn&apos;t account for future rent
            growth, leverage, tax benefits, tenant credit changes, or capital
            expenditures. Always combine cap rate analysis with cash-on-cash
            return, DSCR, IRR projections, and tenant credit analysis for a
            complete picture.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready for a <span className="text-gold">Full Deal Analysis</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Cap rate is just the start. Use our Deal Analyzer for a complete
            institutional-grade underwriting with IRR, DSCR, cash-on-cash, and
            sensitivity analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/deal-analyzer"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Open Deal Analyzer
            </Link>
            <Link
              href="/blog/cap-rate-vs-cash-on-cash-return"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Cap Rate vs Cash-on-Cash
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
