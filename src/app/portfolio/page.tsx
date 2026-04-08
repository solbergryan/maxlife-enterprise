import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | MaxLife Development",
  description:
    "Featured deals and closed transactions by MaxLife Development. NNN properties, land deals, and commercial real estate in Central Florida.",
};

const deals = [
  {
    title: "AutoZone — Goldenrod Road",
    location: "Orlando, FL",
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
  },
  {
    title: "Walgreens — Lake Nona",
    location: "Orlando, FL",
    type: "NNN Investment",
    tenant: "Walgreens",
    leaseType: "Absolute NNN",
    status: "SOLD",
    image: "/portfolio/walgreens-1.jpg",
    highlights: [
      "Walgreens — national credit tenant",
      "11+ year initial lease term",
      "Drive-thru equipped location",
      "Lake Nona growth corridor",
    ],
  },
  {
    title: "CVS Pharmacy — Margate",
    location: "Margate, FL",
    type: "NNN Investment",
    tenant: "CVS",
    leaseType: "Absolute NNN",
    status: "SOLD",
    image: "/portfolio/cvs-1.jpg",
    highlights: [
      "CVS Pharmacy — investment grade tenant",
      "11,169 SF freestanding building",
      "0.92-acre parcel",
      "Miami MSA market",
    ],
  },
  {
    title: "Dollar Tree — Sanford",
    location: "Sanford, FL",
    type: "NNN Investment",
    tenant: "Dollar Tree",
    leaseType: "Double Net (NN)",
    status: "SOLD",
    image: "/portfolio/dollartree-1.jpg",
    highlights: [
      "Dollar Tree — national credit tenant",
      "10-year lease term",
      "Seminole County location",
      "Central Florida market",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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
        </div>
      </section>

      {/* Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
                  {deal.image ? (
                    <Image
                      src={deal.image}
                      alt={`${deal.tenant} NNN investment property in ${deal.location} - ${deal.leaseType} lease`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dark-card flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gold/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-gold/30 text-sm font-medium">{deal.tenant}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-dark font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-md">
                      {deal.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {deal.type}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {deal.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{deal.location}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-dark border border-dark-border rounded-lg p-4">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Tenant
                      </p>
                      <p className="text-white font-semibold">{deal.tenant}</p>
                    </div>
                    <div className="bg-dark border border-dark-border rounded-lg p-4">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Lease Type
                      </p>
                      <p className="text-white font-semibold">
                        {deal.leaseType}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                    Deal Highlights
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {deal.highlights.map((h) => (
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
          ))}
        </div>
      </section>

      {/* Current Inventory */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Looking for <span className="text-gold">Available Properties</span>?
          </h2>
          <p className="text-gray-400 mb-4 max-w-lg mx-auto">
            We maintain an active pipeline of NNN properties, land parcels, and
            commercial listings — many of which are off-market. Contact us for
            current inventory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Request Current Inventory
            </Link>
            <a
              href="tel:3215862121"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-8 py-3.5 rounded-lg transition-colors"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want Your Property Featured Here?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Whether you&apos;re selling an NNN property, a piece of land, or a
            commercial building — we get deals done. Let&apos;s discuss your
            property.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            List Your Property
          </Link>
        </div>
      </section>
    </>
  );
}
