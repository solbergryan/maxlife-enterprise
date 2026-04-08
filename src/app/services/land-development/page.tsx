import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Land Brokerage & Development | MaxLife Enterprise",
  description:
    "Land brokerage and development services in Central Florida. Raw land acquisitions, entitlements, zoning, site planning, and development consulting in Orlando and Melbourne.",
};

export default function LandDevelopmentPage() {
  return (
    <ServicePageLayout
      title="Land Brokerage & Development"
      subtitle="Development Services"
      description="From raw land acquisitions to entitled, development-ready sites — we navigate the complexities of land deals in Central Florida. Whether you're a developer looking for your next project or a landowner ready to sell, MaxLife Enterprise delivers results."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      }
      features={[
        {
          title: "Raw Land Acquisitions & Dispositions",
          description:
            "Buy or sell vacant land with confidence. We identify parcels with development potential, analyze highest and best use, and negotiate deals that maximize value.",
        },
        {
          title: "Entitlements & Zoning",
          description:
            "Navigate the entitlement process from rezoning applications to site plan approvals. We work with local municipalities to get your project approved.",
        },
        {
          title: "Site Planning & Due Diligence",
          description:
            "Environmental assessments, surveys, geotechnical reports, utility availability, and flood zone analysis — all the homework before you break ground.",
        },
        {
          title: "Development Consulting",
          description:
            "Feasibility studies, pro forma analysis, and development strategy. We help you determine if a project pencils before you invest.",
        },
        {
          title: "Buyer & Tenant Sourcing for Developers",
          description:
            "Already developing? We source end-users, pad site tenants, and outparcel buyers to help you monetize your project.",
        },
        {
          title: "1031 Exchange into Land",
          description:
            "Looking to park 1031 exchange funds into land? We identify qualifying properties and manage the timeline to keep your exchange compliant.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Site Selection",
          description:
            "Identify target areas, review available parcels, and analyze market demand for the intended use.",
        },
        {
          step: "02",
          title: "Due Diligence",
          description:
            "Zoning verification, environmental review, survey, title search, and feasibility analysis.",
        },
        {
          step: "03",
          title: "Entitlement & Approvals",
          description:
            "Manage rezoning, site plan approval, and permitting processes with local government.",
        },
        {
          step: "04",
          title: "Close or Develop",
          description:
            "Execute the acquisition, coordinate with builders/engineers, or sell the entitled site at a premium.",
        },
      ]}
      benefits={[
        "Deep knowledge of Central Florida land markets",
        "Relationships with local municipalities",
        "Experience with Orange, Brevard & Seminole counties",
        "Engineering background for technical due diligence",
        "Buyer/tenant network for developed sites",
        "Full-service from raw land to finished product",
      ]}
    />
  );
}
