import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { listListings, formatPrice, formatPercent } from "@/lib/listings";
import {
  PROPERTY_TYPE_LABELS,
  TRANSACTION_TYPE_LABELS,
  LISTING_TYPE_LABELS,
  STATUS_LABELS,
  type PropertyType,
} from "@/types/listing";

export const metadata: Metadata = {
  title: "Central Florida CRE Marketplace | Listings by Owners & Brokers",
  description:
    "Browse user-submitted commercial real estate listings in Orlando and Central Florida. NNN, retail, office, industrial, multifamily, and land for sale or lease — post your own listing for free.",
  openGraph: {
    title: "MaxLife CRE Marketplace",
    description:
      "User-submitted Central Florida commercial real estate listings. FSBO, broker co-listings, investor deals.",
  },
};

interface PageProps {
  searchParams: Promise<{
    type?: string;
    city?: string;
    min?: string;
    max?: string;
  }>;
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maxlifedevelopment.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Marketplace",
      item: "https://maxlifedevelopment.com/marketplace",
    },
  ],
};

export default async function MarketplacePage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const propertyType =
    sp.type && sp.type in PROPERTY_TYPE_LABELS ? (sp.type as PropertyType) : undefined;

  const listings = await listListings({
    propertyType,
    city: sp.city,
    minPrice: sp.min ? Number(sp.min) : undefined,
    maxPrice: sp.max ? Number(sp.max) : undefined,
    limit: 100,
  });

  const propertyTypeOptions = Object.entries(PROPERTY_TYPE_LABELS) as [
    PropertyType,
    string,
  ][];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-skyscrapers-skyline-city-buildings-high-rise-450793.webp"
          alt="Commercial real estate marketplace listings"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Marketplace
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Central Florida CRE <span className="text-gold">Listings</span>
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg">
                User-submitted commercial properties for sale and lease across
                Orlando and Central Florida. Brokers, owners, and investors —
                post a listing and reach a growing audience of qualified buyers.
              </p>
            </div>
            <Link
              href="/marketplace/submit"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Post a Listing →
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-dark-border bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <form
            method="GET"
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm"
          >
            <select
              name="type"
              defaultValue={propertyType ?? ""}
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-white focus:border-gold focus:outline-none"
            >
              <option value="">All property types</option>
              {propertyTypeOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="city"
              placeholder="City"
              defaultValue={sp.city ?? ""}
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            />
            <input
              type="number"
              name="min"
              placeholder="Min price"
              defaultValue={sp.min ?? ""}
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            />
            <input
              type="number"
              name="max"
              placeholder="Max price"
              defaultValue={sp.max ?? ""}
              className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-gold focus:outline-none"
            />
            <div className="col-span-2 sm:col-span-4 flex gap-3">
              <button
                type="submit"
                className="bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Apply filters
              </button>
              <Link
                href="/marketplace"
                className="text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                Reset
              </Link>
              <span className="ml-auto text-gray-500 self-center">
                {listings.length} listing{listings.length === 1 ? "" : "s"}
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {listings.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">
              No listings match those filters yet.
            </p>
            <Link
              href="/marketplace/submit"
              className="text-gold hover:underline font-medium"
            >
              Be the first to post one →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((l) => (
              <Link
                key={l.id}
                href={`/marketplace/${l.slug}`}
                className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/40 transition-all"
              >
                {/* Primary photo or placeholder */}
                {l.photo_urls.length > 0 ? (
                  <div className="h-44 bg-dark relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={l.photo_urls[0]}
                      alt={l.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-44 bg-gradient-to-br from-gold/10 via-dark-card to-navy-dark/40 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gold/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M9 14h6M9 18h6"
                      />
                    </svg>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="text-gold font-semibold uppercase tracking-wider bg-gold/10 px-2 py-0.5 rounded">
                      {PROPERTY_TYPE_LABELS[l.property_type]}
                    </span>
                    <span className="text-gray-500">
                      {TRANSACTION_TYPE_LABELS[l.transaction_type]}
                    </span>
                    {l.status !== "active" && (
                      <span className="text-gray-400 border border-dark-border px-2 py-0.5 rounded">
                        {STATUS_LABELS[l.status]}
                      </span>
                    )}
                  </div>
                  <h2 className="text-white font-semibold text-lg mb-1 group-hover:text-gold transition-colors line-clamp-2">
                    {l.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">
                    {l.city}
                    {l.state ? `, ${l.state}` : ""}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-gold text-xl font-bold leading-none">
                        {formatPrice(l.price)}
                      </p>
                      {l.cap_rate != null && (
                        <p className="text-gray-500 text-xs mt-1">
                          {formatPercent(l.cap_rate)} cap rate
                        </p>
                      )}
                    </div>
                    <span className="text-gray-500 text-xs">
                      {LISTING_TYPE_LABELS[l.listing_type]}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-dark-card/30 border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Selling Commercial Property?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            List it here for free. Owners, brokers, and investors welcome. Your
            contact info appears directly on the listing so buyers can reach
            you without a middleman.
          </p>
          <Link
            href="/marketplace/submit"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Post a Free Listing
          </Link>
        </div>
      </section>
    </>
  );
}
