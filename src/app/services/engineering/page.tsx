import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Engineering Services | MaxLife Enterprise",
  description:
    "Engineering services in Central Florida. Structural assessments, system design, project management, and technical consulting for complex projects.",
};

export default function EngineeringPage() {
  return (
    <ServicePageLayout
      title="Engineering Services"
      subtitle="Technical Services"
      description="Technical expertise for complex challenges. We bring engineering discipline to every project — from structural assessments to system design and implementation. Hands-on problem solving backed by real-world experience."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      }
      features={[
        {
          title: "Structural Assessments",
          description:
            "Thorough evaluation of building structures, load-bearing systems, and foundations. We identify issues early and recommend solutions before they become costly problems.",
        },
        {
          title: "System Design & Optimization",
          description:
            "Design and optimize mechanical, electrical, and plumbing systems for residential and commercial properties. Efficiency meets functionality.",
        },
        {
          title: "Project Management",
          description:
            "End-to-end project coordination from planning to completion. We manage timelines, budgets, vendors, and quality control so you don't have to.",
        },
        {
          title: "Technical Consulting",
          description:
            "Expert advice on construction methods, material selection, code compliance, and feasibility studies for new builds and renovations.",
        },
        {
          title: "Problem Diagnosis & Resolution",
          description:
            "When something isn't working and nobody can figure out why, we dig in. Systematic troubleshooting backed by engineering fundamentals.",
        },
        {
          title: "Energy Efficiency & Sustainability",
          description:
            "Assessments and recommendations to reduce energy costs and environmental impact. From insulation audits to HVAC optimization.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Assessment",
          description:
            "We evaluate the situation on-site, review documentation, and understand the full scope of the challenge.",
        },
        {
          step: "02",
          title: "Analysis & Design",
          description:
            "Engineering analysis, calculations, and solution design. We present options with clear trade-offs.",
        },
        {
          step: "03",
          title: "Implementation",
          description:
            "Hands-on execution or close oversight of contractors. We stay involved until the solution is in place.",
        },
        {
          step: "04",
          title: "Verification",
          description:
            "Testing, inspection, and documentation to confirm everything meets specifications and code requirements.",
        },
      ]}
      benefits={[
        "Hands-on engineering background",
        "Cross-disciplinary problem solving",
        "Code compliance expertise",
        "Clear, jargon-free communication",
        "Residential and commercial projects",
        "Integrated with our other service lines",
      ]}
    />
  );
}
