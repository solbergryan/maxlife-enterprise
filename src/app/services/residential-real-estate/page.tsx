import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Residential Real Estate Brokerage | MaxLife Realty",
  description:
    "Residential real estate services in Orlando and Melbourne, FL. Home buying, selling, investment properties, and first-time buyer guidance.",
};

export default function ResidentialRealEstatePage() {
  return (
    <ServicePageLayout
      title="Residential Real Estate Brokerage"
      subtitle="Real Estate Services"
      heroImage="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp"
      heroAlt="Central Florida residential apartment building exterior"
      description="Whether you're buying your first home, selling a property, or building an investment portfolio, we provide hands-on guidance through every step. Serving Orlando, Melbourne, and all of Central Florida."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      }
      features={[
        {
          title: "Home Buying Representation",
          description:
            "Full buyer representation from property search to closing. We help you find the right home at the right price and negotiate the best deal.",
        },
        {
          title: "Home Selling & Listing",
          description:
            "Strategic pricing, professional marketing, and skilled negotiation to sell your home quickly and at top dollar.",
        },
        {
          title: "Comparative Market Analysis",
          description:
            "Accurate home valuations based on recent sales, market conditions, and property-specific factors so you know exactly where you stand.",
        },
        {
          title: "First-Time Buyer Guidance",
          description:
            "Step-by-step support for first-time buyers. We explain the process, connect you with lenders, and make sure you feel confident every step of the way.",
        },
        {
          title: "Investment Property Sourcing",
          description:
            "Identify rental properties, fix-and-flips, and long-term holds that match your investment criteria and financial goals.",
        },
        {
          title: "Relocation Assistance",
          description:
            "Moving to Central Florida? We help you find the right neighborhood, school district, and home to fit your lifestyle.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Discovery Call",
          description:
            "We learn your needs, preferences, budget, and timeline. Buyers get a custom search; sellers get a pricing strategy.",
        },
        {
          step: "02",
          title: "Search & Prepare",
          description:
            "Buyers tour curated listings. Sellers prepare their home with staging advice and professional photography.",
        },
        {
          step: "03",
          title: "Offer & Negotiate",
          description:
            "We craft competitive offers or evaluate incoming bids, negotiating hard to protect your bottom line.",
        },
        {
          step: "04",
          title: "Close with Confidence",
          description:
            "Inspections, appraisals, title work, and closing day — we manage every detail so nothing falls through the cracks.",
        },
      ]}
      benefits={[
        "Licensed residential broker in Florida",
        "Local expertise across Central Florida",
        "Strong lender and title company relationships",
        "Available evenings and weekends",
        "Honest, no-pressure approach",
        "Full-service support (repairs, cleaning, move prep)",
      ]}
    />
  );
}
