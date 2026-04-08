import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Solutions | MaxLife Enterprise",
  description:
    "Unique project? We've got you covered. Property management, renovation coordination, vendor management, emergency services, and more in Central Florida.",
};

export default function CustomSolutionsPage() {
  return (
    <ServicePageLayout
      title="Custom Solutions"
      subtitle="Specialty Services"
      description="Have a project that doesn't fit neatly into one category? That's our specialty. We bring the same professionalism, problem-solving, and follow-through to any challenge you throw our way."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      }
      features={[
        {
          title: "Property Management",
          description:
            "Tenant relations, rent collection, maintenance coordination, and property oversight for landlords and investors who want a hands-off experience.",
        },
        {
          title: "Renovation Coordination",
          description:
            "Managing full renovation projects from demolition to final walkthrough. We coordinate contractors, timelines, materials, and inspections.",
        },
        {
          title: "Vendor Management",
          description:
            "Need multiple trades on a project? We source, vet, schedule, and manage vendors so you have one point of contact instead of ten.",
        },
        {
          title: "Emergency Services",
          description:
            "Burst pipe at midnight? Lock yourself out? We respond to urgent property situations when you need help fast — 24/7.",
        },
        {
          title: "Property Preparation",
          description:
            "Getting a property rent-ready or sale-ready with coordinated repairs, cleaning, staging, and curb appeal improvements.",
        },
        {
          title: "Consulting & Advisory",
          description:
            "Not sure where to start? We'll assess your situation, outline options, and give you honest advice — whether or not it leads to a project for us.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Tell Us What You Need",
          description:
            "Describe your challenge or project. The more context you give, the better we can help — but even a vague idea is a starting point.",
        },
        {
          step: "02",
          title: "We Build a Plan",
          description:
            "We assess the situation, identify what's needed, and put together a clear scope, timeline, and cost estimate.",
        },
        {
          step: "03",
          title: "Execute & Manage",
          description:
            "We handle the work directly or coordinate the right people to get it done. You stay informed without being overwhelmed.",
        },
        {
          step: "04",
          title: "Deliver & Debrief",
          description:
            "Project completed, reviewed, and documented. We make sure you're satisfied and discuss any follow-up needs.",
        },
      ]}
      benefits={[
        "No project is too unusual",
        "Single point of contact for complex projects",
        "24/7 emergency availability",
        "Cross-service coordination built in",
        "Transparent pricing and timelines",
        "Long-term partnership approach",
      ]}
    />
  );
}
