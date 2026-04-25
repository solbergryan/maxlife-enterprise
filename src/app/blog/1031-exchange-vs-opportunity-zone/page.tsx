import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1031 Exchange vs Opportunity Zone: Which Tax Strategy Wins?",
  description:
    "Comparing 1031 exchanges and Opportunity Zones for deferring capital gains — eligibility, timelines, tax benefits, and which strategy fits your situation.",
  alternates: { canonical: "/blog/1031-exchange-vs-opportunity-zone" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "1031 Exchange vs Opportunity Zone: Which Tax Strategy Wins?",
  description:
    "Comparing 1031 like-kind exchanges and Qualified Opportunity Zone investments for deferring capital gains on commercial real estate.",
  datePublished: "2026-04-21",
  author: { "@type": "Person", name: "Ryan Solberg", url: "https://maxlifedevelopment.com/about" },
  publisher: { "@type": "Organization", name: "MaxLife Development", url: "https://maxlifedevelopment.com" },
};

export default function ExchangeVsOZ() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/blog" className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">Comparison</span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            1031 Exchange vs Opportunity Zone: Which Tax Strategy Wins?
          </h1>
          <p className="text-gray-300 text-lg">
            Both let you defer capital gains taxes — but they work completely
            differently. Here&apos;s how to pick the right tool for your
            situation.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <p className="text-gray-300 leading-relaxed">
            When you sell an appreciated investment — real estate, stock, a
            business — capital gains taxes can take 20-37% of your profit. Two
            powerful IRS-approved strategies let you defer (and potentially
            eliminate) those taxes: 1031 like-kind exchanges and Qualified
            Opportunity Zone (QOZ) investments. Both can be worth hundreds of
            thousands in tax savings. But they apply to different situations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Core Difference</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">1031 Exchange:</strong> You sell
            investment real estate and roll the{" "}
            <em className="text-white">entire proceeds</em> (basis + gain) into
            another real estate investment within 180 days. Deferral continues
            indefinitely if you keep exchanging.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Opportunity Zone:</strong> You take
            only the <em className="text-white">capital gain portion</em> (from
            any asset — real estate, stock, crypto, business sale) and invest
            it in a Qualified Opportunity Fund (QOF) within 180 days. Gain is
            deferred until 2026 (for current investments) with additional
            tax-free appreciation after a 10-year hold.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">Feature</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">1031 Exchange</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3">Opportunity Zone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Source Asset", "Real estate only", "Any appreciated asset"],
                  ["What You Reinvest", "Entire proceeds (basis + gain)", "Only capital gain portion"],
                  ["Where You Invest", "Any US investment real estate", "QOZ-designated census tract (via QOF)"],
                  ["Timeline", "45 days identify / 180 days close", "180 days from sale to QOF investment"],
                  ["Deferral Period", "Indefinite (chain exchanges)", "Until December 31, 2026"],
                  ["Final Tax Reduction", "None (deferral only)", "10% step-up after 5-yr hold (pre-2022)"],
                  ["10-Year Benefit", "None", "Tax-free appreciation on QOF gains"],
                  ["Geographic Constraint", "US-located real estate", "~8,700 designated QOZ tracts"],
                  ["Qualified Intermediary", "Required", "Not required (invest directly in QOF)"],
                  ["Complexity", "Medium", "High"],
                ].map(([f, a, b]) => (
                  <tr key={f} className="border-b border-white/10/50">
                    <td className="py-3 pr-4 text-white font-medium">{f}</td>
                    <td className="py-3 pr-4 text-gray-300">{a}</td>
                    <td className="py-3 text-gray-300">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">When 1031 Wins</h2>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">You&apos;re selling investment real estate (not stock or a business)</li>
            <li className="text-gray-300 text-sm">You want to defer indefinitely — potentially forever if you hold until death (step-up basis)</li>
            <li className="text-gray-300 text-sm">You want to deploy the entire sale proceeds (not just the gain)</li>
            <li className="text-gray-300 text-sm">You want maximum flexibility on replacement property location and type</li>
            <li className="text-gray-300 text-sm">You&apos;re upgrading from active to passive real estate (NNN)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">When Opportunity Zones Win</h2>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-300 text-sm">Your gain came from stock, crypto, or a business sale (1031 doesn&apos;t apply)</li>
            <li className="text-gray-300 text-sm">You want tax-free appreciation on the reinvestment (10-year hold)</li>
            <li className="text-gray-300 text-sm">You have only the gain to deploy (not the full proceeds)</li>
            <li className="text-gray-300 text-sm">You&apos;re comfortable investing in designated QOZ tracts</li>
            <li className="text-gray-300 text-sm">You have a 10-year investment horizon</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The 10-Year Tax-Free Benefit (QOZ Magic)</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The most powerful benefit of Opportunity Zones: if you hold the QOF
            investment for 10+ years, the appreciation on that investment is
            100% tax-free when sold. You still owe tax on your original
            deferred gain in 2026, but the gain on top of the QOF investment
            escapes tax entirely.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Example: You invest $500K of capital gain in a QOF that grows to
            $2M over 10 years. You pay tax on the original $500K in 2026 but
            the $1.5M appreciation is tax-free. On a $1.5M gain at 20% LTCG,
            that&apos;s $300K in saved taxes — plus the 8 years of deferral
            savings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Florida QOZ Opportunities</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Florida has 427 designated Opportunity Zone tracts — spanning
            Orlando neighborhoods like Parramore, Pine Hills, and parts of
            South Orlando, as well as Brevard County, Lake County, and
            designated tracts in every major Florida metro. Many are actively
            being redeveloped.
          </p>
          <p className="text-gray-300 leading-relaxed">
            QOZ investments must be in new development or substantial rehab of
            existing properties — you can&apos;t just buy an existing building and
            hold it. Typical QOZ projects include multifamily development,
            commercial redevelopment, and ground-up mixed-use.
          </p>
        </section>

        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Can You Use Both?</h2>
          <p className="text-gray-300 leading-relaxed">
            Yes — they&apos;re not mutually exclusive. You can 1031 exchange real
            estate gains <em>and</em> simultaneously deploy a separate stock or
            business sale gain into a QOF. The two strategies complement each
            other for investors with multiple sources of appreciated assets.
            Consult a qualified CPA familiar with both — this is advanced tax
            planning territory.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { slug: "1031-exchange-orlando-guide", title: "1031 Exchange Orlando Guide" },
              { slug: "what-is-nnn-lease", title: "What Is a Triple Net (NNN) Lease?" },
              { slug: "how-to-evaluate-commercial-real-estate-deal", title: "How to Evaluate a CRE Deal" },
              { slug: "orlando-cap-rates-investor-guide", title: "Orlando Cap Rates Investor Guide" },
            ].map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-4 transition-colors text-sm text-gray-300 hover:text-gold">
                {r.title} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
