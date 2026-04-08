import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Commercial Real Estate Brokerage | MaxLife Enterprise",
  description:
    "Full-service commercial real estate brokerage in Central Florida. Office, retail, industrial, and investment properties. Acquisitions, dispositions, and lease negotiations.",
};

export default function CommercialRealEstatePage() {
  return (
    <ServicePageLayout
      title="Commercial Real Estate Brokerage"
      subtitle="Real Estate Services"
      description="Full-service commercial real estate representation for buyers, sellers, landlords, and tenants across the Orlando and Melbourne metro areas. We handle office spaces, retail locations, industrial properties, and investment opportunities with a results-driven approach."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      }
      features={[
        {
          title: "Property Acquisitions & Dispositions",
          description:
            "Strategic guidance through every phase of buying or selling commercial property. We identify opportunities, negotiate terms, and manage due diligence to maximize your return.",
        },
        {
          title: "Lease Negotiations",
          description:
            "Expert representation for both landlords and tenants. We negotiate favorable lease terms, renewals, and restructurings that protect your interests.",
        },
        {
          title: "Market Analysis & Valuations",
          description:
            "Data-driven market research and property valuations so you make informed decisions. We analyze comparable sales, rental rates, and market trends.",
        },
        {
          title: "Investment Consulting",
          description:
            "Whether you're a first-time investor or growing a portfolio, we identify properties with strong ROI potential and help you build a strategy.",
        },
        {
          title: "Tenant & Landlord Representation",
          description:
            "Dedicated representation for either side of the transaction. We find the right tenants for your space or the right space for your business.",
        },
        {
          title: "1031 Exchange Guidance",
          description:
            "Navigate tax-deferred exchanges with confidence. We help you identify replacement properties and coordinate timelines to meet IRS requirements.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Consultation",
          description:
            "We discuss your goals, budget, timeline, and requirements to build a clear strategy.",
        },
        {
          step: "02",
          title: "Market Research",
          description:
            "Deep dive into market data, comparable properties, and opportunities that align with your criteria.",
        },
        {
          step: "03",
          title: "Negotiate & Execute",
          description:
            "Aggressive negotiation on your behalf, followed by meticulous contract management through closing.",
        },
        {
          step: "04",
          title: "Close & Follow Up",
          description:
            "Smooth closing coordination and ongoing support for any post-transaction needs.",
        },
      ]}
      benefits={[
        "Licensed commercial broker in Florida",
        "Deep knowledge of Central Florida market",
        "Access to off-market opportunities",
        "Transparent communication throughout",
        "No deal is too large or too small",
        "Cross-service support (inspections, repairs, cleaning)",
      ]}
    />
  );
}
