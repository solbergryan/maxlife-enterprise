import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultimate Guide to NNN Investing — Everything You Need to Know",
  description:
    "The complete guide to NNN (triple net) investing — how leases work, cap rates, tenant credit, financing, due diligence, 1031 exchanges, and building a passive income portfolio.",
  alternates: { canonical: "/blog/ultimate-guide-nnn-investing" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ultimate Guide to NNN Investing — Everything You Need to Know",
  description:
    "Comprehensive guide to triple net lease real estate investing for first-time and experienced CRE investors.",
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

export default function UltimateNNNGuide() {
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
              Ultimate Guide
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">18 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ultimate Guide to NNN Investing
          </h1>
          <p className="text-gray-300 text-lg">
            Everything you need to know about triple net lease real estate —
            from lease basics to building a multi-property portfolio. For
            first-time NNN buyers and experienced CRE investors alike.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
          <h2 className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
            Table of Contents
          </h2>
          <ol className="space-y-1.5 text-sm text-gray-300">
            {[
              { id: "what", label: "What Is NNN Investing?" },
              { id: "why", label: "Why Investors Love NNN" },
              { id: "structures", label: "Lease Structures (NNN vs. NN vs. Absolute NNN)" },
              { id: "tenants", label: "Tenant Credit and Quality" },
              { id: "cap-rates", label: "Cap Rates — What to Expect" },
              { id: "financing", label: "Financing NNN Acquisitions" },
              { id: "diligence", label: "Due Diligence Checklist" },
              { id: "1031", label: "NNN and 1031 Exchanges" },
              { id: "risks", label: "Risks and How to Mitigate Them" },
              { id: "build-portfolio", label: "Building an NNN Portfolio" },
              { id: "florida", label: "Why Florida for NNN" },
            ].map((item, i) => (
              <li key={item.id} className="flex gap-3">
                <span className="text-gold font-medium shrink-0">{i + 1}.</span>
                <a
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <section id="what" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            1. What Is NNN Investing?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A triple net (NNN) lease is a commercial real estate lease
            structure where the tenant pays all three major operating expenses
            — property taxes, insurance, and maintenance — in addition to base
            rent. This creates one of the most passive commercial real estate
            investments available: the landlord collects rent and the tenant
            handles essentially everything else.
          </p>
          <p className="text-gray-300 leading-relaxed">
            NNN properties are typically single-tenant buildings occupied by
            national brands — think Walgreens, CVS, Dollar General, AutoZone,
            Chick-fil-A, or Starbucks. These corporations sign long-term leases
            (often 10-25+ years) at properties developed specifically for them,
            then operate with minimal landlord involvement.
          </p>
        </section>

        <section id="why" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            2. Why Investors Love NNN
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            NNN has become one of the most popular commercial real estate
            strategies for several compelling reasons:
          </p>
          <ul className="space-y-3 ml-6">
            {[
              {
                t: "Truly passive income.",
                d: "No tenant calls, no maintenance coordination, no management headaches. The tenant handles everything.",
              },
              {
                t: "Creditworthy tenants.",
                d: "National corporations with investment-grade credit (BBB- or better) mean extremely low default risk.",
              },
              {
                t: "Long-term leases.",
                d: "10-25+ year initial terms with built-in rent escalations create decades of predictable income.",
              },
              {
                t: "Inflation protection.",
                d: "Most leases include 10% rent bumps every 5 years, providing income growth ahead of typical CPI.",
              },
              {
                t: "1031 exchange friendly.",
                d: "NNN is the most popular 1031 replacement property class — easy to acquire, easy to resell.",
              },
              {
                t: "Recession resilient.",
                d: "Essential-service tenants (pharmacies, auto parts, dollar stores) perform well in downturns.",
              },
            ].map((item) => (
              <li key={item.t} className="text-gray-300 text-sm">
                <strong className="text-white">{item.t}</strong> {item.d}
              </li>
            ))}
          </ul>
        </section>

        <section id="structures" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            3. Lease Structures — The Details Matter
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Not all "NNN" leases are created equal. Three common structures:
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Absolute NNN",
                desc: "Tenant pays EVERYTHING — taxes, insurance, maintenance, roof, structure. Landlord has zero responsibility. Gold standard for passive investors.",
              },
              {
                name: "NNN (Triple Net)",
                desc: "Tenant pays taxes, insurance, and all maintenance. Landlord may retain some structural responsibility depending on the specific lease.",
              },
              {
                name: "NN (Double Net)",
                desc: "Tenant pays taxes, insurance, and day-to-day maintenance. Landlord retains roof and structural responsibility. Slightly wider cap rates.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white/[0.04] border border-white/10 rounded-lg p-4"
              >
                <h3 className="text-gold font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mt-4">
            <strong className="text-white">Pro tip:</strong> Always read the
            specific lease. "NNN" in the listing title doesn&apos;t guarantee
            absolute NNN — confirm with the actual lease document during due
            diligence.
          </p>
        </section>

        <section id="tenants" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            4. Tenant Credit and Quality
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            With a single-tenant property, your income entirely depends on
            that tenant&apos;s ability to pay rent. Tenant credit analysis is
            critical:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">
                    Credit Rating
                  </th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">
                    Example Tenants
                  </th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3">
                    Cap Rate Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["A+ to AA", "Chase Bank, Walmart", "Tightest cap rates (4.5-5.5%)"],
                  ["BBB+ to BBB", "CVS, AutoZone, Dollar General, Chipotle", "Mid-range cap rates (5.5-6.5%)"],
                  ["BBB- to BB", "Walgreens, Wendy's, Dollar Tree", "Slightly wider (6-7%)"],
                  ["Below BB", "Franchisees, smaller chains", "Wider cap rates (7%+)"],
                ].map(([rating, tenants, impact]) => (
                  <tr key={rating} className="border-b border-white/10/50">
                    <td className="py-3 pr-4 text-white font-medium">{rating}</td>
                    <td className="py-3 pr-4 text-gray-300">{tenants}</td>
                    <td className="py-3 text-gray-300">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Investment-grade (BBB- or higher) is the benchmark for
            institutional-quality NNN. For first-time buyers, stick with
            investment-grade tenants unless you understand the specific
            business and franchise dynamics of a non-IG operator.
          </p>
        </section>

        <section id="cap-rates" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            5. Cap Rates — What to Expect
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cap rates in the NNN market reflect tenant credit, lease term
            remaining, location quality, and broader interest rates. As of
            2026, typical NNN cap rates range:
          </p>
          <ul className="space-y-1.5 ml-6 text-gray-300 text-sm">
            <li>• <strong className="text-white">Premium tenants / ground leases</strong> (Chick-fil-A, Chase): 3.75% – 5.25%</li>
            <li>• <strong className="text-white">Investment-grade QSR / Coffee</strong>: 4.75% – 5.75%</li>
            <li>• <strong className="text-white">Auto parts (AutoZone, O&apos;Reilly)</strong>: 5.25% – 6.0%</li>
            <li>• <strong className="text-white">CVS Pharmacy</strong>: 5.5% – 6.5%</li>
            <li>• <strong className="text-white">Dollar General</strong>: 5.75% – 6.5%</li>
            <li>• <strong className="text-white">Walgreens</strong>: 6.0% – 7.0%</li>
            <li>• <strong className="text-white">Medical (DaVita, Fresenius)</strong>: 6.0% – 7.0%</li>
            <li>• <strong className="text-white">Shorter-term or non-IG tenants</strong>: 6.75%+</li>
          </ul>
        </section>

        <section id="financing" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            6. Financing NNN Acquisitions
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            NNN is one of the easiest CRE categories to finance. Typical terms:
          </p>
          <ul className="space-y-1.5 ml-6 text-gray-300 text-sm mb-4">
            <li>• <strong className="text-white">LTV</strong>: 70-75% for investment-grade tenants</li>
            <li>• <strong className="text-white">DSCR required</strong>: 1.20-1.30x</li>
            <li>• <strong className="text-white">Term</strong>: 5-10 years with 25-year amortization</li>
            <li>• <strong className="text-white">Rate</strong>: ~6.0-7.5% (2026)</li>
            <li>• <strong className="text-white">Recourse</strong>: Usually personal guarantee under $3M; may be non-recourse on larger deals</li>
            <li>• <strong className="text-white">Typical close</strong>: 45-60 days from application</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Lenders who specialize in NNN (private banks, credit unions, life
            companies, CMBS) often underwrite aggressively on investment-grade
            tenants — sometimes reaching 75-80% LTV with strong DSCRs.
          </p>
        </section>

        <section id="diligence" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            7. Due Diligence Checklist
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Even on "simple" NNN properties, don&apos;t skip diligence. Key
            items to review:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Lease review (every page, every clause)",
              "Tenant estoppel certificate",
              "Tenant credit report / financial statements",
              "Rent roll verification",
              "Property Condition Assessment (PCA)",
              "Phase I Environmental Site Assessment",
              "ALTA survey",
              "Title commitment review",
              "Zoning verification",
              "Operating expense history (for NN properties)",
              "Loan documents (if assumed)",
              "Real estate tax assessment history",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/[0.04] border border-white/10 rounded-lg p-3 text-gray-300 text-sm flex items-start gap-2"
              >
                <svg
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="1031" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            8. NNN and 1031 Exchanges
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            NNN properties are the most popular 1031 exchange replacement
            property class — and for good reason. Long leases, creditworthy
            tenants, passive income, and strong buyer demand make NNN
            essentially a turnkey exchange target.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Key 1031 timelines: 45 days to identify replacement properties,
            180 days to close. You must engage a qualified intermediary BEFORE
            closing the sale of your original property. For NNN replacement
            property, work with a broker who can source inventory quickly and
            close within the timeline.
          </p>
          <Link
            href="/1031-timeline-calculator"
            className="text-gold hover:text-gold-light text-sm font-medium mt-3 inline-block"
          >
            Calculate your 1031 timeline &rarr;
          </Link>
        </section>

        <section id="risks" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            9. Risks and How to Mitigate Them
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            NNN is not risk-free. Main risks and mitigation:
          </p>
          <div className="space-y-3">
            {[
              {
                risk: "Tenant default / bankruptcy",
                mitigation: "Prioritize investment-grade tenants. Diversify across multiple tenants/categories over time.",
              },
              {
                risk: "Lease expiration without renewal",
                mitigation: "Buy properties with 10+ years remaining. Consider real estate value if tenant leaves.",
              },
              {
                risk: "Cap rate expansion at sale",
                mitigation: "Long holds or 1031 chains minimize sale timing risk. Hold through cycles.",
              },
              {
                risk: "Poor location",
                mitigation: "Strong trade area demographics, traffic counts, and redevelopment potential even if tenant leaves.",
              },
              {
                risk: "Deferred maintenance (older properties)",
                mitigation: "PCA during due diligence. Reserve for capex on NN leases.",
              },
            ].map((item) => (
              <div
                key={item.risk}
                className="bg-white/[0.04] border border-white/10 rounded-lg p-4"
              >
                <p className="text-red-300 font-semibold text-sm mb-1">
                  {item.risk}
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Mitigation:</strong>{" "}
                  {item.mitigation}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="build-portfolio" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            10. Building an NNN Portfolio
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most serious NNN investors build 5-15+ property portfolios over
            time. Key principles:
          </p>
          <ul className="space-y-1.5 ml-6 text-gray-300 text-sm">
            <li>• Start with 1-2 investment-grade properties you understand</li>
            <li>• Diversify by tenant, geography, and asset category over time</li>
            <li>• Use 1031 exchanges to trade up and compound wealth tax-deferred</li>
            <li>• Reinvest cash flow systematically (don&apos;t spend early rents)</li>
            <li>• Build relationships with NNN brokers (on- and off-market access)</li>
            <li>• Consider partnering with developers on BTS for higher returns</li>
          </ul>
        </section>

        <section id="florida" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-white mb-4">
            11. Why Florida for NNN
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Florida stands out for NNN investment for five reasons:
          </p>
          <ol className="space-y-2 ml-6 list-decimal text-gray-300 text-sm">
            <li>
              <strong className="text-white">Population growth:</strong> 300,000+ new residents annually drive retail demand
            </li>
            <li>
              <strong className="text-white">No state income tax:</strong> More rental income stays in your pocket
            </li>
            <li>
              <strong className="text-white">Business-friendly climate:</strong> National tenants expanding aggressively
            </li>
            <li>
              <strong className="text-white">Active BTS pipeline:</strong> Dollar General, AutoZone, Wawa all expanding
            </li>
            <li>
              <strong className="text-white">Strong buyer pool:</strong> 1031 buyers love Florida for its growth story
            </li>
          </ol>
        </section>

        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Ready to Invest?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MaxLife Development sources NNN investment properties across
            Florida — on-market and off-market. Whether you&apos;re a first-time
            NNN buyer, a 1031 exchange buyer on a deadline, or building a
            multi-property portfolio, we can help.
          </p>
          <Link
            href="/contact?interest=NNN Investment Properties"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Request NNN Inventory
          </Link>
        </section>
      </article>
    </>
  );
}
