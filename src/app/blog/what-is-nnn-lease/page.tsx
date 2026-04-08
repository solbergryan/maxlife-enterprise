import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is a Triple Net (NNN) Lease? | MaxLife Enterprise",
  description:
    "A comprehensive guide to triple net lease investments. Learn how NNN leases work, their benefits and risks, and why investors love them for passive income.",
};

export default function NNNLeaseArticle() {
  return (
    <>
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
              NNN Investing
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Is a Triple Net (NNN) Lease? A Guide for Investors
          </h1>
          <p className="text-gray-400 text-lg">
            Everything you need to know about NNN lease investments — how they
            work, why investors love them, and what to watch out for.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              The Basics of a Triple Net Lease
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              A triple net lease — commonly written as &quot;NNN&quot; — is a commercial
              real estate lease agreement where the tenant is responsible for
              paying three key expenses on top of their base rent: property
              taxes, building insurance, and maintenance costs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For the property owner, this means a truly passive investment. You
              collect rent, and the tenant handles virtually everything else.
              It&apos;s as close to &quot;mailbox money&quot; as real estate investing gets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How NNN Leases Are Structured
            </h2>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-4">
              <div className="space-y-3">
                {[
                  { n: "Net 1", desc: "Tenant pays property taxes" },
                  { n: "Net 2", desc: "Tenant pays building insurance" },
                  { n: "Net 3", desc: "Tenant pays maintenance & repairs" },
                ].map((item) => (
                  <div key={item.n} className="flex items-center gap-3">
                    <span className="text-gold font-bold text-sm w-12">
                      {item.n}
                    </span>
                    <span className="text-gray-300">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Typical NNN lease terms range from 10 to 25 years, often with
              built-in rent escalations (increases) of 1-2% annually or every 5
              years. This means your income grows over time without
              renegotiating.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Who Are the Typical NNN Tenants?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              NNN properties are usually occupied by national or regional credit
              tenants — companies with strong balance sheets and brand
              recognition. Common examples include:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                "AutoZone",
                "Dollar General",
                "Walgreens",
                "CVS",
                "Starbucks",
                "7-Eleven",
                "Tractor Supply",
                "O'Reilly Auto Parts",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-dark-card border border-dark-border rounded-lg p-3 text-center text-gray-300 text-sm"
                >
                  {t}
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed">
              The creditworthiness of the tenant is one of the most important
              factors in evaluating an NNN investment. A lease backed by a
              Fortune 500 company carries very different risk than one backed by
              a local business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Benefits of NNN Investing
            </h2>
            <ul className="space-y-3">
              {[
                {
                  title: "Passive Income",
                  desc: "No tenant management, no maintenance calls, no surprise expenses.",
                },
                {
                  title: "Predictable Cash Flow",
                  desc: "Long-term leases with built-in escalations mean you know exactly what you'll earn.",
                },
                {
                  title: "1031 Exchange Friendly",
                  desc: "NNN properties are ideal for investors looking to defer capital gains taxes.",
                },
                {
                  title: "Low Management Overhead",
                  desc: "No need for a property manager — the tenant handles the property.",
                },
                {
                  title: "Recession Resilience",
                  desc: "Essential-service tenants (pharmacies, auto parts, dollar stores) perform well in downturns.",
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
              Key Metrics: Cap Rate & NOI
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Two numbers dominate NNN investing conversations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Cap Rate</h3>
                <p className="text-gray-400 text-sm">
                  The capitalization rate measures annual return relative to
                  purchase price. A 6% cap rate means you earn 6% of the
                  property&apos;s value in annual net income.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">NOI</h3>
                <p className="text-gray-400 text-sm">
                  Net Operating Income is the annual rent minus any
                  owner-responsible expenses. In a true NNN lease, NOI is
                  essentially the full rent amount.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What to Watch Out For
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              NNN investing isn&apos;t risk-free. Key considerations include:
            </p>
            <ul className="space-y-2">
              {[
                "Tenant credit risk — what if the tenant goes bankrupt?",
                "Lease term remaining — a lease with 3 years left is very different from 15 years",
                "Location fundamentals — the property still needs to be in a viable market",
                "Roof and structure responsibility — some NNN leases have landlord carve-outs",
                "Re-tenanting risk — can you find a new tenant if the current one leaves?",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-gray-400 text-sm">
                  <span className="text-gold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-dark-card border border-gold/20 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-white mb-3">
              Interested in NNN Investing?
            </h3>
            <p className="text-gray-400 mb-6">
              MaxLife Enterprise specializes in NNN property acquisitions and
              dispositions across Central Florida. Let&apos;s find your next
              investment.
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
