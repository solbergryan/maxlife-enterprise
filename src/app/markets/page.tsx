import Link from "next/link";
import type { Metadata } from "next";
import { markets } from "@/data/markets";

export const metadata: Metadata = {
  title: "Commercial Real Estate Markets | Central Florida | MaxLife Enterprise",
  description:
    "Explore commercial real estate markets across Central Florida including Orlando, Brevard County, Lake County, and the broader Central Florida region.",
};

export default function MarketsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Markets
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Central Florida{" "}
            <span className="text-gold">Commercial Real Estate Markets</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            In-depth market intelligence across Orange, Seminole, Osceola, Lake,
            Polk, and Brevard counties. Understand the opportunity before you
            invest.
          </p>
        </div>
      </section>

      {/* Market Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="group bg-dark-card border border-dark-border rounded-xl p-8 hover:border-gold/30 transition-colors"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-2">
                {market.heroHeading}
              </h2>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {market.heroSubheading}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {market.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-gold font-bold">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Property Types */}
              <div className="flex flex-wrap gap-2">
                {market.propertyTypes.slice(0, 4).map((type) => (
                  <span
                    key={type}
                    className="text-xs bg-dark-hover border border-dark-border rounded-full px-2.5 py-1 text-gray-400"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Invest in Central Florida?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss which market is the best fit for your investment
            strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Available Deals
            </Link>
            <Link
              href="/investor-access"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Off-Market Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
