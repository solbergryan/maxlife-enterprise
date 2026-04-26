import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Residential Investment Real Estate | MaxLife Realty",
  description:
    "Investor-focused residential real estate services across Florida. Rental portfolios, BRRRR, fix-and-flips, and build-to-rent — underwritten like a commercial deal. Traditional home buying and selling through our sister brand MaxLife Realty.",
};

export default function ResidentialRealEstatePage() {
  return (
    <ServicePageLayout
      title="Residential Investment Real Estate"
      subtitle="Real Estate Services"
      heroImage="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp"
      heroAlt="Florida residential investment property exterior"
      description="We treat residential real estate as an investment asset class — not just a home you live in. Whether you're building a rental portfolio, running a BRRRR strategy, scaling fix-and-flips, or acquiring build-to-rent communities, we underwrite every deal like commercial: cap rate, DSCR, cash-on-cash, and exit-driven. For traditional home buying and selling, we refer to our sister brand."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      }
      sisterSite={{
        name: "Looking for a home to live in? Visit MaxLifeRealty.com",
        url: "https://www.maxliferealty.com",
        blurb:
          "Our sister brokerage handles traditional residential real estate — primary homes, first-time buyers, and lifestyle relocation across Orlando and Melbourne. This page is specifically for investor-grade residential assets. If you're buying a home to live in, you'll get faster, more focused service there.",
      }}
      features={[
        {
          title: "Rental Portfolio Acquisition",
          description:
            "Source single-family rentals and small multifamily (2–20 units) priced against real rent comps and cap rates. We underwrite every acquisition with Deal Analyzer so you see DSCR, cash-on-cash, and 5-year projected returns before you write an offer.",
        },
        {
          title: "BRRRR & Value-Add Sourcing",
          description:
            "Buy, Rehab, Rent, Refinance, Repeat. We source distressed and under-managed residential assets where forced appreciation through capex and rent repositioning pencils to a cash-out refi event.",
        },
        {
          title: "Fix-and-Flip Deal Flow",
          description:
            "Access to off-market and MLS-sourced properties with the spread to make a flip work. We model ARV, holding costs, and disposition timeline so you know your profit before you close.",
        },
        {
          title: "Build-to-Rent & Small Development",
          description:
            "Infill lots and small-scale BTR projects in growth corridors across Central Florida. Help with land acquisition, entitlements, GC selection, and lease-up strategy.",
        },
        {
          title: "1031 Exchange Into Residential",
          description:
            "Defer capital gains by exchanging commercial equity into residential rental portfolios. We identify replacement properties that meet your 45/180-day windows and match your income requirements.",
        },
        {
          title: "Disposition & Cash-Out",
          description:
            "Strategic listing of investor-owned residential — tenant-occupied sales to other investors, or vacate-and-retail pricing to maximize owner-user demand. We pick the exit that nets the most.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Investment Thesis",
          description:
            "We align on strategy — cash flow, appreciation, BRRRR, flip, BTR — plus your capital, leverage appetite, and target markets across Florida.",
        },
        {
          step: "02",
          title: "Sourcing & Underwriting",
          description:
            "Curated deal flow (MLS, off-market, wholesaler networks). Every property runs through Deal Analyzer with real rent comps, cap rate, DSCR, and projected IRR.",
        },
        {
          step: "03",
          title: "Offer, Diligence, Close",
          description:
            "Structured offers tied to numbers — not emotion. Inspection, rent-roll verification, title review, and financing coordination all managed.",
        },
        {
          step: "04",
          title: "Portfolio Strategy",
          description:
            "Ongoing support — refi timing, rent increases, disposition triggers, and 1031 planning. We treat your residential holdings like a commercial portfolio.",
        },
      ]}
      benefits={[
        "Deals underwritten with Deal Analyzer (DSCR, cap rate, IRR)",
        "Off-market residential investor pipeline",
        "Lender relationships for DSCR and portfolio loans",
        "1031 exchange coordination",
        "Build-to-rent and small multifamily expertise",
        "Tenant-occupied sale strategy when disposing",
      ]}
    />
  );
}
