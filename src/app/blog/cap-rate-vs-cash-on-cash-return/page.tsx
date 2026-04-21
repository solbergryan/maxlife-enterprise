import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cap Rate vs Cash-on-Cash Return: What's the Difference?",
  description:
    "Understand the difference between cap rate and cash-on-cash return — how each is calculated, which to use when, and why leverage changes everything for CRE investors.",
  alternates: { canonical: "/blog/cap-rate-vs-cash-on-cash-return" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cap Rate vs Cash-on-Cash Return: What's the Difference?",
  description:
    "Deep dive on capitalization rate vs cash-on-cash return — two critical real estate investment metrics that measure different things.",
  datePublished: "2026-04-21",
  author: { "@type": "Person", name: "Ryan Solberg", url: "https://maxlifedevelopment.com/about" },
  publisher: { "@type": "Organization", name: "MaxLife Development", url: "https://maxlifedevelopment.com" },
};

export default function CapRateVsCoC() {
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
            <span className="text-gray-500 text-xs">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cap Rate vs Cash-on-Cash Return: What&apos;s the Difference?
          </h1>
          <p className="text-gray-400 text-lg">
            New investors often confuse these two metrics. They measure totally
            different things — and confusing them can cost you money.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Short Answer</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Cap rate</strong> measures the
            unlevered return of the property — what it would yield in cash if
            you paid 100% cash.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Cash-on-cash return</strong> measures
            the levered return on <em>your</em> cash — what you&apos;re actually
            earning on the equity you invested.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Formulas</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5 space-y-4">
            <div>
              <p className="text-gold font-semibold text-sm mb-2">Cap Rate</p>
              <code className="text-white block bg-dark p-3 rounded text-sm">
                Cap Rate = Net Operating Income (NOI) / Purchase Price
              </code>
            </div>
            <div>
              <p className="text-gold font-semibold text-sm mb-2">Cash-on-Cash Return</p>
              <code className="text-white block bg-dark p-3 rounded text-sm">
                CoC = Annual Pre-Tax Cash Flow / Total Cash Invested
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Worked Example</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You buy a Dollar General NNN property:
          </p>
          <ul className="space-y-1 ml-6 mb-6">
            <li className="text-gray-300 text-sm">Purchase price: <strong className="text-white">$1,800,000</strong></li>
            <li className="text-gray-300 text-sm">Annual NOI: <strong className="text-white">$108,000</strong></li>
            <li className="text-gray-300 text-sm">Down payment (35%): <strong className="text-white">$630,000</strong></li>
            <li className="text-gray-300 text-sm">Loan ($1.17M at 6.5%, 25yr amort): <strong className="text-white">$94,620/yr debt service</strong></li>
          </ul>

          <div className="bg-dark-card border border-dark-border rounded-lg p-5 space-y-4">
            <div>
              <p className="text-gold text-sm font-semibold mb-1">Cap Rate</p>
              <p className="text-white">$108,000 / $1,800,000 = <strong>6.0%</strong></p>
            </div>
            <div className="border-t border-dark-border pt-4">
              <p className="text-gold text-sm font-semibold mb-1">Cash-on-Cash</p>
              <p className="text-gray-300 text-sm mb-1">Cash flow = NOI – Debt Service = $108,000 – $94,620 = $13,380</p>
              <p className="text-gray-300 text-sm mb-1">Cash invested = Down payment + closing costs = $630,000 + $50,000 = $680,000</p>
              <p className="text-white">$13,380 / $680,000 = <strong>1.97%</strong></p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mt-4">
            Same property, two radically different numbers. The cap rate (6%)
            tells you the unlevered yield. The cash-on-cash (2%) tells you
            what you&apos;re actually getting on your $680K after debt service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">When Does Leverage Help?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Leverage increases cash-on-cash return when the cap rate exceeds
            the borrowing cost — a concept called{" "}
            <em className="text-white">positive leverage</em>. In our example,
            the 6% cap rate vs. 6.5% borrowing cost creates{" "}
            <em className="text-white">negative leverage</em> — debt is
            hurting, not helping.
          </p>
          <p className="text-gray-300 leading-relaxed">
            At current interest rates (early 2026), most NNN deals have
            minimal or negative leverage from traditional bank financing.
            That&apos;s why many NNN investors are now buying all-cash or with
            minimal leverage — the economics only work when cap rates compress
            (likely as rates decline) or you accept lower current yield in
            exchange for long-term appreciation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Which Metric to Use When</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">Situation</th>
                  <th className="text-left text-gold text-xs uppercase tracking-wider py-3">Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Comparing properties at purchase", "Cap Rate (levels playing field)"],
                  ["Evaluating your actual ROI", "Cash-on-Cash"],
                  ["Deciding how much to offer", "Cap Rate (based on market)"],
                  ["Deciding whether to use debt", "Both (compare)"],
                  ["Comparing to other asset classes (stocks, bonds)", "Cash-on-Cash"],
                  ["Underwriting new BTS development", "Cap Rate (exit valuation)"],
                  ["Tax returns and depreciation", "Neither — use after-tax cash flow"],
                ].map(([s, u]) => (
                  <tr key={s} className="border-b border-dark-border/50">
                    <td className="py-3 pr-4 text-white font-medium">{s}</td>
                    <td className="py-3 text-gray-300">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Other Metrics Worth Knowing
          </h2>
          <ul className="space-y-3">
            {[
              { name: "Internal Rate of Return (IRR)", desc: "Measures total return (cash flow + sale proceeds) over the full hold period, time-weighted." },
              { name: "Debt Service Coverage Ratio (DSCR)", desc: "NOI / Debt Service. Lenders require 1.20–1.30+ typically. Key to loan approval." },
              { name: "Equity Multiple", desc: "Total cash distributions / cash invested. Simple multiplier — 2x means you doubled your money over the hold." },
              { name: "Yield on Cost", desc: "For development: Stabilized NOI / Total Development Cost. Used to measure the development spread vs. market cap rate." },
            ].map((m) => (
              <li key={m.name} className="bg-dark-card border border-dark-border rounded-lg p-4">
                <p className="text-white font-semibold text-sm mb-1">{m.name}</p>
                <p className="text-gray-400 text-sm">{m.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">The Bottom Line</h2>
          <p className="text-gray-300 leading-relaxed">
            Cap rate is about the property. Cash-on-cash is about your money.
            Both matter. When someone tells you a deal is a &quot;7 cap,&quot;
            that&apos;s an unlevered number. Ask for the cash-on-cash after
            debt service — that&apos;s what actually hits your pocket each month.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { slug: "orlando-cap-rates-investor-guide", title: "Orlando Cap Rates Investor Guide" },
              { slug: "how-to-evaluate-commercial-real-estate-deal", title: "How to Evaluate a CRE Deal" },
              { slug: "what-is-nnn-lease", title: "What Is a Triple Net (NNN) Lease?" },
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
