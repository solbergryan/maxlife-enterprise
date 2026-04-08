import type { Metadata } from "next";
import { deals } from "@/data/deals";
import DealFilter from "@/components/DealFilter";
import InvestorSignupForm from "@/components/InvestorSignupForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Commercial Real Estate Opportunities | Central Florida | MaxLife Enterprise",
  description:
    "Browse active commercial real estate investment opportunities across Central Florida and the Space Coast. NNN, retail, multifamily, land, and commercial properties.",
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
            Active and recent commercial real estate deals across Central
            Florida and the Space Coast. Filter by status, property type, or
            county.
          </p>
        </div>
      </section>

      {/* Deals Grid with Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <DealFilter deals={deals} />
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
