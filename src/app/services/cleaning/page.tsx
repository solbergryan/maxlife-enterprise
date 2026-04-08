import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cleaning Services | MaxLife Enterprise",
  description:
    "Professional cleaning services in Orlando and Melbourne, FL. Deep cleaning, move-in/out, office cleaning, post-construction cleanup, and recurring maintenance.",
};

export default function CleaningPage() {
  return (
    <ServicePageLayout
      title="Cleaning Services"
      subtitle="Property Services"
      description="Professional cleaning for homes, offices, and commercial spaces. We deliver spotless results with attention to detail and take pride in leaving every space better than we found it. Serving Orlando, Melbourne, and surrounding areas."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      }
      features={[
        {
          title: "Deep Cleaning",
          description:
            "Thorough top-to-bottom cleaning that reaches every corner, surface, and fixture. Kitchens, bathrooms, floors, baseboards — nothing is overlooked.",
        },
        {
          title: "Move-In / Move-Out Cleaning",
          description:
            "Get your security deposit back or welcome new tenants with a spotless property. We handle the heavy lifting so you can focus on the move.",
        },
        {
          title: "Office & Commercial Cleaning",
          description:
            "Professional workspace cleaning that keeps your business looking sharp. Lobbies, restrooms, kitchens, cubicles, and common areas.",
        },
        {
          title: "Recurring Maintenance Cleaning",
          description:
            "Weekly, bi-weekly, or monthly service to keep your home or office consistently clean without lifting a finger.",
        },
        {
          title: "Post-Construction Cleanup",
          description:
            "Dust, debris, and construction residue removed after renovations or new builds. We get your space move-in ready.",
        },
        {
          title: "Specialty Cleaning",
          description:
            "Carpet cleaning, window washing, pressure washing, and other targeted cleaning services for specific needs.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Request a Quote",
          description:
            "Tell us about your space — size, type, and what you need. We'll provide a clear price with no hidden fees.",
        },
        {
          step: "02",
          title: "Schedule",
          description:
            "Pick a date and time that works for you. We offer flexible scheduling including weekends.",
        },
        {
          step: "03",
          title: "We Clean",
          description:
            "Our team arrives on time with all supplies and equipment. We work efficiently and thoroughly.",
        },
        {
          step: "04",
          title: "Walk-Through",
          description:
            "We do a final inspection and invite you to check our work. Not satisfied? We'll make it right on the spot.",
        },
      ]}
      benefits={[
        "Eco-friendly cleaning products available",
        "All supplies and equipment included",
        "Background-checked and insured",
        "Flexible scheduling (including weekends)",
        "Satisfaction guaranteed",
        "Bundled with move-in/out real estate services",
      ]}
    />
  );
}
