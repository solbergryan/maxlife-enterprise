import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { markets } from "@/data/markets";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Florida Commercial Real Estate Markets | Statewide Coverage",
  description:
    "Florida commercial real estate market analysis across Orlando, Tampa Bay, Jacksonville, Miami, Fort Lauderdale, West Palm Beach, and the Space Coast. Statewide CRE intelligence for investors.",
  openGraph: {
    title: "Florida CRE Markets | Orlando, Tampa, Jacksonville, South Florida",
    description:
      "In-depth commercial real estate market intelligence across Florida's major metros. Data-driven insights for CRE investors statewide.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://maxlifedevelopment.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Markets",
      item: "https://maxlifedevelopment.com/markets",
    },
  ],
};

export default function MarketsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-city-buildings-houston-texas-office-business-3779038.webp"
          alt="Florida commercial real estate markets"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Markets
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Florida{" "}
            <span className="text-gold">Commercial Real Estate Markets</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            In-depth market intelligence across Orlando, Tampa Bay, Jacksonville,
            Miami, Fort Lauderdale, West Palm Beach, Naples, Sarasota,
            Gainesville, Tallahassee, Pensacola, and the Space Coast.
            Understand the opportunity before you invest.
          </p>
        </div>
      </section>

      {/* Coverage map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/florida-coverage-map.svg"
            alt="Map of Florida showing all commercial real estate markets served by MaxLife Realty"
            width={800}
            height={720}
            className="w-full h-auto block"
          />
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Statewide Florida coverage — Orlando headquarters with market depth
          across Tampa Bay, Jacksonville, South Florida, and the Space Coast.
        </p>
      </section>

      {/* Market Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="group bg-white/[0.04] border border-white/10 rounded-xl p-8 hover:border-gold/40 transition-colors"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-2">
                {market.heroHeading}
              </h2>
              <p className="text-gray-300 text-sm mb-6 line-clamp-2">
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
                    className="text-xs bg-white/10 border border-white/10 rounded-full px-2.5 py-1 text-gray-300"
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
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Invest Anywhere in Florida?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
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
