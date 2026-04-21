import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSoldDeals } from "@/data/deals";
import DealCard from "@/components/DealCard";

export const metadata: Metadata = {
  title: "Orlando Commercial Real Estate Portfolio",
  description:
    "Browse our Central Florida CRE transaction portfolio. Featured closed deals including NNN properties, land acquisitions & commercial real estate investments.",
  openGraph: {
    title: "Closed CRE Deals | Orlando & Central Florida Portfolio",
    description:
      "Featured commercial real estate transactions by MaxLife Realty. NNN properties, land deals, and investment properties across Central Florida.",
  },
};

const featuredDeal = {
  title: "AutoZone — 801 S Goldenrod Rd",
  location: "Orlando, FL 32822",
  type: "NNN Investment",
  tenant: "AutoZone",
  leaseType: "Triple Net (NNN)",
  status: "SOLD",
  image: "/portfolio/autozone-1.jpg",
  highlights: [
    "National credit tenant",
    "Long-term NNN lease",
    "High-traffic Goldenrod Road corridor",
    "Orlando metro market",
  ],
};

export default function PortfolioPage() {
  const soldDeals = getSoldDeals();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-building-architecture-travel-tourism-facade-exterior-7114894.webp"
          alt="MaxLife Realty commercial real estate portfolio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-gold">Deals</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of transactions we&apos;ve closed. Each deal represents
            our commitment to finding the right opportunity and executing
            flawlessly.
          </p>
          <div className="mt-6">
            <Link
              href="/opportunities"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              View Active Opportunities &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Deal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
              <Image
                src={featuredDeal.image}
                alt={featuredDeal.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-dark font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-md">
                  {featuredDeal.status}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                  {featuredDeal.type}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {featuredDeal.title}
              </h2>
              <p className="text-gray-400 mb-6">{featuredDeal.location}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark border border-dark-border rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Tenant
                  </p>
                  <p className="text-white font-semibold">
                    {featuredDeal.tenant}
                  </p>
                </div>
                <div className="bg-dark border border-dark-border rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Lease Type
                  </p>
                  <p className="text-white font-semibold">
                    {featuredDeal.leaseType}
                  </p>
                </div>
              </div>

              <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                Deal Highlights
              </h3>
              <ul className="space-y-2 mb-6">
                {featuredDeal.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
              >
                Have a Similar Property? Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>

        {/* More Sold Deals */}
        {soldDeals.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-6">
              More Closed Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soldDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Looking for Active Deals?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Browse our current commercial real estate opportunities or sign up
            for off-market deal access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              View Active Deals
            </Link>
            <Link
              href="/investor-access"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get Off-Market Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
