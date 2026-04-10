import type { Metadata } from "next";
import { listings } from "@/data/listings";
import ListingCard from "@/components/ListingCard";
import ListingGrid from "@/components/ListingGrid";
import ListingDisclaimer from "@/components/ListingDisclaimer";
import InvestorSignupForm from "@/components/InvestorSignupForm";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

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
      name: "Opportunities",
      item: "https://maxlifedevelopment.com/opportunities",
    },
  ],
};

export const metadata: Metadata = {
  title: "Central Florida Commercial Property Directory | MaxLife Realty",
  description:
    "Link-only directory of third-party commercial real estate listings across Orlando, Brevard, Lake, Seminole, Osceola, Volusia, and Polk counties. Click through to each source for pricing, photos, and the listing brokerage of record.",
  openGraph: {
    title: "Central Florida Commercial Property Directory | MaxLife Realty",
    description:
      "Address-only directory of third-party Central Florida commercial listings. MaxLife Realty is not the listing broker; click through to each listing source for full details.",
  },
};

export default function OpportunitiesPage() {
  const featured = listings.filter((l) => l.featured);
  const allListings = listings;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investment Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Central Florida Commercial{" "}
            <span className="text-gold">Directory</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Address-only directory of third-party commercial properties
            across Central Florida and the Space Coast. Each entry links to
            the original listing source where pricing, photos, and the
            listing brokerage of record are shown. MaxLife Realty is not the
            listing broker for any entry in this directory.
          </p>
        </div>
      </section>

      {/* Persistent top-of-page compliance banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ListingDisclaimer />
      </section>

      {/* Featured Picks */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Featured Directory Entries
          </h2>
          <p className="text-gray-500 mb-6">
            Third-party properties of interest &mdash; click through to each
            source for pricing, photos, and the listing brokerage of record.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((listing, i) => (
              <ListingCard key={`featured-${i}`} listing={listing} />
            ))}
          </div>
        </section>
      )}

      {/* All Market Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-dark-border">
        <h2 className="text-2xl font-bold text-white mb-2">
          Full Directory
        </h2>
        <p className="text-gray-500 mb-8">
          Address-only entries for third-party commercial properties across
          Orange, Seminole, Osceola, Lake, Polk, Volusia, and Brevard
          counties. Click any entry to view the original listing on Crexi.
        </p>
        <ListingGrid listings={allListings} />

        {/* Broker Compliance Disclaimer (full legal text) */}
        <div className="mt-10 bg-dark-card border border-gold/20 rounded-lg p-5">
          <h3 className="text-gold font-semibold text-sm mb-2">
            Broker Attribution &amp; Disclaimer
          </h3>
          <div className="text-gray-500 text-xs leading-relaxed space-y-2">
            <p>
              All properties displayed above are syndicated third-party
              listings sourced from Crexi and are marketed by their respective
              listing brokerages.{" "}
              <span className="text-gray-300 font-semibold">
                MaxLife Realty is not the listing broker for any third-party
                listing on this page.
              </span>{" "}
              Each listing card links directly to the original listing source
              where the full listing brokerage of record, listing agent, terms,
              conditions, and contact information are available.
            </p>
            <p>
              Listing information, including price, square footage, cap rate,
              NOI, tenant data, and property details, is deemed reliable but
              is not guaranteed and may have changed since syndication. Buyers
              and investors must verify all information directly with the
              listing brokerage of record and conduct their own due diligence
              before acting on any information shown here.
            </p>
            <p>
              MaxLife Realty &middot; Florida Licensed Real Estate Brokerage
              &middot; Ryan Solberg, Managing Broker &middot; FL Broker License
              #3354351 &middot; Equal Housing Opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Off-Market Signup */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Don&apos;t See What You&apos;re Looking For?
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Many of our best deals never make it to the open market. Sign up
              for off-market deal access and be the first to know.
            </p>
            <InvestorSignupForm />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have a Property to Sell?"
        description="We help commercial property owners maximize value through strategic marketing and qualified buyer access."
        primaryCTA={{ label: "Submit a Property", href: "/contact" }}
        secondaryCTA={{ label: "Schedule a Call", href: "/contact" }}
      />
    </>
  );
}
