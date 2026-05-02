import type { Metadata } from "next";
import Link from "next/link";
import { careerStats, closedDeals, propertyTypeBreakdown } from "@/data/results";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Track Record — Career Stats & Closed Deals | MaxLife Realty",
  description:
    "Ryan Solberg's career results: $100M+ in Florida commercial real estate transactions, 6 counties served, and a portfolio of closed deals across NNN, industrial, office, retail, and land.",
  keywords: [
    "MaxLife Realty track record",
    "Ryan Solberg closed deals",
    "Florida commercial real estate results",
    "CRE broker performance Florida",
  ],
  alternates: { canonical: "/results" },
};

const ryan = teamMembers[0];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Track Record
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Career Results &amp;{" "}
            <span className="text-gold">Closed Deals</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A results-oriented look at what MaxLife Realty has helped clients
            buy, sell, and close across Florida&apos;s commercial real estate
            markets since 2015.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {careerStats.map((stat) => (
              <div key={stat.label} className="py-4">
                <p className="text-3xl sm:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-white font-medium text-sm">{stat.label}</p>
                {stat.subtext && (
                  <p className="text-gray-500 text-xs mt-0.5">{stat.subtext}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closed deals grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Closed Transactions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {closedDeals.map((deal, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-gold text-xs font-medium uppercase tracking-wide">
                  {deal.type}
                </span>
                <span className="text-gray-500 text-xs">{deal.location.split(",")[1]?.trim()}</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{deal.title}</h3>
              <p className="text-gold font-bold text-xl mb-2">{deal.value}</p>
              <p className="text-gray-500 text-xs mb-2">{deal.location}</p>
              {deal.outcome && (
                <p className="text-gray-400 text-xs italic border-t border-white/10 pt-2 mt-2">
                  {deal.outcome}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Property type breakdown */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-white mb-6 text-center">
            Transaction Mix by Property Type
          </h2>
          <div className="space-y-3">
            {propertyTypeBreakdown.map((item) => (
              <div key={item.type}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{item.type}</span>
                  <span className="text-gold font-semibold">{item.pct}%</span>
                </div>
                <div className="h-2 bg-white/[0.08] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold rounded-full transition-all duration-700"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-white mb-5">
          Service Area Coverage
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ryan.serviceAreas.map((area) => (
            <div
              key={area}
              className="bg-white/[0.04] border border-white/10 rounded-lg p-3 text-center text-sm text-gray-300 hover:border-gold/30 hover:text-gold transition-colors"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-bold text-white mb-5">Licenses &amp; Credentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ryan.licenses.map((lic) => (
              <div
                key={lic.number}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-4"
              >
                <p className="text-gold font-semibold text-xs uppercase tracking-wide mb-1">
                  {lic.issuer}
                </p>
                <p className="text-white text-sm font-medium">{lic.type}</p>
                <p className="text-gray-500 text-xs mt-1">#{lic.number}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Let&apos;s Add Your Deal to{" "}
          <span className="text-gold">This List</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          Whether you&apos;re buying, selling, or repositioning a commercial
          asset in Florida, let&apos;s talk strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/opportunities#request-valuation"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Request a Valuation
          </Link>
          <Link
            href="/testimonials"
            className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
          >
            Read Client Reviews
          </Link>
        </div>
      </section>
    </>
  );
}
