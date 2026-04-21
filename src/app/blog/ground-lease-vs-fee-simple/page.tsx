import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ground Lease vs Fee Simple: Which Commercial Real Estate Structure?",
  description:
    "Understand the difference between ground lease and fee simple commercial real estate ownership — cap rates, risk, tax treatment, and which structure fits your strategy.",
  alternates: { canonical: "/blog/ground-lease-vs-fee-simple" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Ground Lease vs Fee Simple: Which Commercial Real Estate Structure Is Right?",
  description:
    "Comparing ground lease and fee simple ownership structures for commercial real estate.",
  datePublished: "2026-04-21",
  author: { "@type": "Person", name: "Ryan Solberg", url: "https://maxlifedevelopment.com/about" },
  publisher: { "@type": "Organization", name: "MaxLife Development", url: "https://maxlifedevelopment.com" },
};

export default function GroundLeaseVsFeeSimple() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/blog" className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">Comparison</span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ground Lease vs Fee Simple: Which CRE Structure Is Right?
          </h1>
          <p className="text-gray-400 text-lg">
            The ownership structure of a commercial property has more impact
            on risk and returns than most investors realize. Here&apos;s the breakdown.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What&apos;s the Difference?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Fee simple ownership</strong> is
            what most people think of when they buy real estate: you own both
            the land <em>and</em> the building. If you sell, you sell
            everything. If the tenant leaves, you have an empty building on
            land you own.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Ground lease</strong> structure
            splits the ownership: one party owns the land (the lessor), a
            different party owns the building improvements (the lessee /
            tenant). The land owner leases the land to the tenant for a long
            term — typically 40-99 years — while the tenant builds, owns, and
            operates the building.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why Tenants Choose Ground Leases</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Major NNN tenants like McDonald&apos;s, Chase Bank, Chick-fil-A, and
            some pharmacy chains prefer ground leases for specific reasons:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">
              <strong className="text-white">Control over the building:</strong> They can modify, expand, or rebuild without landlord approval.
            </li>
            <li className="text-gray-300 text-sm">
              <strong className="text-white">Tax benefits:</strong> Building depreciation belongs to the tenant (lessee).
            </li>
            <li className="text-gray-300 text-sm">
              <strong className="text-white">Capital efficiency:</strong> Land stays on the balance sheet of the investor, not the tenant.
            </li>
            <li className="text-gray-300 text-sm">
              <strong className="text-white">Easier lease restructuring:</strong> If the site needs redevelopment, tenant has more flexibility.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">Factor</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">Ground Lease</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3">Fee Simple</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ownership", "Land only", "Land + building"],
                  ["Typical Cap Rate", "50–75 bps TIGHTER than fee simple", "Market-rate"],
                  ["Tenant Risk", "Lower (only leasing land)", "Full building risk"],
                  ["Building Depreciation", "Tenant claims", "Owner claims (39-year)"],
                  ["Reversion Value", "Land + improvements at lease end", "N/A (you always own)"],
                  ["Typical Term", "40–99 years", "Full ownership"],
                  ["Financing", "Simpler for land", "Standard CRE financing"],
                  ["Environmental Liability", "Lower (tenant operates)", "Full owner liability"],
                  ["Control", "Limited during lease term", "Full control"],
                  ["Best For", "Passive income, long horizon", "Value-add, development, full ownership"],
                ].map(([f, gl, fs]) => (
                  <tr key={f} className="border-b border-dark-border/50">
                    <td className="py-3 pr-4 text-white font-medium">{f}</td>
                    <td className="py-3 pr-4 text-gray-300">{gl}</td>
                    <td className="py-3 text-gray-300">{fs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Investors Love Ground Leases
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            From the landlord&apos;s perspective, ground leases are the safest
            structure in commercial real estate. You&apos;re renting <em>land</em>,
            not a building. Land doesn&apos;t depreciate, doesn&apos;t need
            maintenance, and doesn&apos;t become functionally obsolete. If the
            tenant defaults, you get the land back{" "}
            <em className="text-white">plus the building improvements</em> at
            the end of the lease (called the reversion).
          </p>
          <p className="text-gray-300 leading-relaxed">
            This is why ground leases — particularly for McDonald&apos;s,
            Chick-fil-A, Starbucks, and Chase Bank — trade at the tightest cap
            rates in commercial real estate (3.75-5%). Investors accept lower
            current yield in exchange for essentially risk-free land ownership
            with inflation-protected rent bumps.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Reversion Value Upside</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            At the end of a ground lease (in 40-99 years), the building
            improvements typically revert to the land owner — free. This can
            be extraordinarily valuable if the building was well-constructed
            and the location has appreciated.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Example: A 50-year ground lease on a Chase Bank at a signalized
            corner in Orlando. In year 50, you get not only 50 years of rent
            payments (with bumps), but also a building that, even at
            end-of-life, may have redevelopment value of $1M+. The
            multi-generational wealth-building potential is significant.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">When Fee Simple Wins</h2>
          <p className="text-gray-300 leading-relaxed mb-3">Ground lease isn&apos;t always better. Fee simple wins when:</p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">You want depreciation benefits for the building (39-year schedule)</li>
            <li className="text-gray-300 text-sm">You want cash-on-cash yield (fee simple typically 50-100 bps higher)</li>
            <li className="text-gray-300 text-sm">You want control to modify, redevelop, or reposition the asset</li>
            <li className="text-gray-300 text-sm">You&apos;re doing a value-add play</li>
            <li className="text-gray-300 text-sm">You want to 1031 exchange into something comparable (ground leases are specialized)</li>
          </ul>
        </section>

        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Which Structure Fits You?</h2>
          <p className="text-gray-300 leading-relaxed">
            If you want truly passive, minimal-risk commercial real estate and
            you&apos;re willing to accept tighter current yield, ground leases
            are the gold standard. If you want higher current yield,
            depreciation benefits, and control over the asset, fee simple is
            the better fit. Most diversified CRE portfolios include both — the
            stability of ground lease income balanced against the higher yield
            and control of fee simple assets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { slug: "what-is-nnn-lease", title: "What Is a Triple Net (NNN) Lease?" },
              { slug: "orlando-cap-rates-investor-guide", title: "Orlando Cap Rates Investor Guide" },
              { slug: "how-to-buy-commercial-property-orlando", title: "How to Buy Commercial Property in Orlando" },
              { slug: "orlando-nnn-properties-for-sale", title: "Orlando NNN Properties for Sale" },
            ].map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors text-sm text-gray-300 hover:text-gold">
                {r.title} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
