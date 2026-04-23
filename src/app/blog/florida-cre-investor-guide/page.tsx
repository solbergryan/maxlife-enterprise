import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Florida Commercial Real Estate Investor Guide — Everything You Need to Know",
  description:
    "Complete guide for investors entering the Florida commercial real estate market. Markets, asset types, tax advantages, financing, and local considerations every FL CRE investor should know.",
  alternates: { canonical: "/blog/florida-cre-investor-guide" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Florida Commercial Real Estate Investor Guide — Everything You Need to Know",
  description:
    "Comprehensive guide for investors entering Florida's commercial real estate market.",
  datePublished: "2026-04-23",
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

export default function FloridaCREGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              Ultimate Guide
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">15 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Florida Commercial Real Estate Investor Guide
          </h1>
          <p className="text-gray-400 text-lg">
            Everything out-of-state investors and first-time Florida CRE buyers
            need to know about investing in the Sunshine State.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Florida for Commercial Real Estate?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Florida has become one of America&apos;s most attractive commercial
            real estate markets for five compounding reasons: population
            growth, no state income tax, business-friendly regulation, tourism
            gravity, and strong international capital flows. In 2026, Florida
            continues to add approximately 300,000 net new residents annually,
            placing it among the top three fastest-growing states in the
            country.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you&apos;re an out-of-state investor considering your first
            Florida deal, a 1031 exchange buyer looking at FL replacement
            properties, or a long-time Floridian expanding your CRE portfolio —
            this guide covers the essentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Florida&apos;s Top 5 CRE Markets
          </h2>
          <div className="space-y-4">
            {[
              {
                market: "Orlando / Central Florida",
                highlights:
                  "Theme parks, Lake Nona medical city, I-4 corridor, UCF — $2.9M MSA with 2.1% annual growth. Strong NNN, multifamily, hospitality, and development activity.",
              },
              {
                market: "Tampa Bay",
                highlights:
                  "Finance hub (Raymond James, Citigroup regional HQs), MacDill AFB, Port of Tampa, Water Street downtown redevelopment. $3.2M MSA, strong industrial/port demand.",
              },
              {
                market: "South Florida (Miami-Dade, Broward, Palm Beach)",
                highlights:
                  "Latin American capital gateway, luxury retail, international investment. Tightest cap rates in Florida. High barriers to entry and institutional competition.",
              },
              {
                market: "Jacksonville",
                highlights:
                  "Largest city by area in the continental US. Strong logistics hub (port, rail), lower land basis, growing tech sector. Undersupplied retail in growth corridors.",
              },
              {
                market: "Southwest Florida (Cape Coral, Fort Myers, Naples)",
                highlights:
                  "Fastest-growing metro in America by some measures. Hurricane recovery ongoing. Retirement migration driving retail and medical demand.",
              },
            ].map((m) => (
              <div
                key={m.market}
                className="bg-dark-card border border-dark-border rounded-lg p-5"
              >
                <h3 className="text-gold font-semibold mb-2">{m.market}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {m.highlights}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Florida&apos;s Tax Advantages
          </h2>
          <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-xl p-6 mb-4">
            <h3 className="text-emerald-300 font-semibold mb-3">
              No State Income Tax
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Florida is one of nine US states with no personal or trust-level
              state income tax. Your rental income, capital gains on property
              sales, and 1031 exchange gains are not taxed at the state level.
              For investors in high-tax states (CA, NY, IL, NJ), this alone
              can save 7-13% on gains vs. investing in those states.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                title: "Property Tax — Homestead Exemption",
                desc: "Only applies to primary residences, not investment property. Investment property in Florida is assessed at full market value.",
              },
              {
                title: "Documentary Stamp Tax",
                desc: "Florida charges $0.70 per $100 of consideration on deeds (~0.7% of purchase price). Note: Miami-Dade has additional surtax.",
              },
              {
                title: "Sales Tax on Commercial Rent",
                desc: "Florida is one of the few states that charges sales tax on commercial rent (currently 2.0% for 2026, reduced from 5.5%). This applies to most commercial leases but not residential.",
              },
              {
                title: "Hurricane Insurance",
                desc: "Property insurance costs in Florida are significantly higher than most states — especially in coastal counties. Budget 1-3% of property value annually for insurance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-card border border-dark-border rounded-lg p-4"
              >
                <p className="text-gold font-semibold mb-1">{item.title}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Florida-Specific Considerations
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Hurricane Building Code",
                desc: "Florida has among the strictest building codes in the US — all new commercial buildings must withstand 140+ mph wind loads (higher in coastal HVHZs). Expect 5-15% construction cost premium vs. non-hurricane states.",
              },
              {
                title: "Concurrency & Impact Fees",
                desc: "Florida requires developers to demonstrate adequate public infrastructure (concurrency) and often pay proportionate-share impact fees for roads, schools, fire, police. Impact fees range $5,000-$25,000 per commercial acre.",
              },
              {
                title: "Stormwater Management",
                desc: "All commercial development requires stormwater permits from the appropriate water management district (SFWMD, SWFWMD, SJRWMD, SRWMD, NWFWMD). Timeline: 60-180 days.",
              },
              {
                title: "Entitlement Timelines",
                desc: "Fast-track jurisdictions: 3-6 months. Typical FL jurisdictions: 6-12 months. Complex (Miami-Dade, coastal): 12-18+ months. Pre-zoned land commands premium.",
              },
              {
                title: "Flood Zones",
                desc: "Florida has extensive flood zones — verify flood zone designations before acquisition. Flood insurance requirements and costs vary significantly by zone.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-card border border-dark-border rounded-lg p-4"
              >
                <p className="text-gold font-semibold mb-1">{item.title}</p>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Asset Classes That Work in Florida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "NNN Single-Tenant", desc: "Population growth drives retail tenant expansion. Strong 1031 buyer pool.", good: true },
              { name: "Multifamily Class A/B", desc: "Strong rental demand; rent growth softening but fundamentals solid.", good: true },
              { name: "Industrial / Logistics", desc: "I-4 corridor + port access. Institutional capital active.", good: true },
              { name: "Medical Office", desc: "Aging demographics + population growth drive demand.", good: true },
              { name: "Grocery-Anchored Retail", desc: "Publix dominates; consistent performance.", good: true },
              { name: "Hospitality", desc: "Tourism-driven; Epic Universe opening = big tailwind.", good: true },
              { name: "Class B/C Office", desc: "Struggling post-COVID; highly selective strategy required.", good: false },
              { name: "Big-Box Retail", desc: "Tenant bankruptcies and ecommerce pressure create risk.", good: false },
            ].map((a) => (
              <div
                key={a.name}
                className={`${
                  a.good
                    ? "bg-emerald-500/5 border border-emerald-500/20"
                    : "bg-red-500/5 border border-red-500/20"
                } rounded-lg p-4`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={a.good ? "text-emerald-400" : "text-red-400"}>
                    {a.good ? "✓" : "⚠"}
                  </span>
                  <p className="text-white font-semibold text-sm">{a.name}</p>
                </div>
                <p className="text-gray-300 text-xs">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Financing Considerations in Florida
          </h2>
          <ul className="space-y-2 ml-6 text-gray-300 text-sm">
            <li>• <strong className="text-white">Local relationships matter:</strong> Florida community banks and credit unions often provide better terms than national lenders for $1-5M deals</li>
            <li>• <strong className="text-white">Hurricane insurance:</strong> Lenders require proof of wind and flood coverage — account for premium costs in underwriting</li>
            <li>• <strong className="text-white">Environmental:</strong> Florida has extensive coastal sites and potential contamination history — always get a Phase I ESA</li>
            <li>• <strong className="text-white">Appraisals:</strong> Florida appraisers are familiar with the market but busy — order early to hit closing timelines</li>
            <li>• <strong className="text-white">Tax prorations:</strong> Florida property tax bills are issued in November and discounted for early payment — understand proration structure at closing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Common Mistakes to Avoid
          </h2>
          <ul className="space-y-3">
            {[
              "Underestimating insurance costs (budget 1-3% of property value)",
              "Ignoring hurricane exposure and wind mitigation features",
              "Missing concurrency or impact fee calculations during underwriting",
              "Buying in flood zones without understanding implications",
              "Not verifying zoning / permitted use before LOI",
              "Assuming Florida rates are national — state-specific factors matter",
              "Overlooking the 2.0% sales tax on commercial rent",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <svg className="w-5 h-5 text-red-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            Get Local Expertise
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Florida CRE has nuances that national brokerages miss. MaxLife
            Development is a licensed Florida broker based in Central Florida
            with deep knowledge of local markets, tenants, lenders, and
            entitlement processes. Whether you&apos;re buying your first
            Florida property or expanding an existing portfolio, we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </section>
      </article>
    </>
  );
}
