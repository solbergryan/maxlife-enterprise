import type { Metadata } from "next";
import { deals } from "@/data/deals";
import { listings } from "@/data/listings";
import DealFilter from "@/components/DealFilter";
import ListingGrid from "@/components/ListingGrid";
import InvestorSignupForm from "@/components/InvestorSignupForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Commercial Real Estate Opportunities | Central Florida | MaxLife Enterprise",
  description:
    "Browse 1,000+ commercial real estate investment opportunities across Central Florida and the Space Coast. NNN, retail, office, industrial, multifamily, and land.",
};

export default function OpportunitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investment Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate{" "}
            <span className="text-gold">Opportunities</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Browse 1,000+ active commercial real estate listings across Central
            Florida and the Space Coast. Filter by property type, county, or
            search by name.
          </p>
        </div>
      </section>

      {/* Our Featured Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Featured Opportunities
        </h2>
        <p className="text-gray-500 mb-6">
          Properties sourced and represented by MaxLife Enterprise
        </p>
        <DealFilter deals={deals} />
      </section>

      {/* Market Listings from Crexi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-dark-border">
        <h2 className="text-2xl font-bold text-white mb-2">
          Central Florida Market Listings
        </h2>
        <p className="text-gray-500 mb-8">
          Active commercial properties across Orange, Seminole, Osceola, Lake,
          Polk, and Brevard counties
        </p>
        <ListingGrid listings={listings} />

        {/* Broker Compliance Disclaimer */}
        <div className="mt-10 bg-dark-card border border-dark-border rounded-lg p-4">
          <p className="text-gray-500 text-xs leading-relaxed">
            The listings above are sourced from Crexi and may be listed by
            third-party brokers. Listing information is deemed reliable but not
            guaranteed. Each listing links to its original Crexi page where full
            broker and brokerage details are available. MaxLife Enterprise is not
            the listing broker for third-party listings unless otherwise noted.
            Contact us or visit the original listing for complete broker
            information, terms, and conditions. FL Broker License #3354351.
          </p>
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
