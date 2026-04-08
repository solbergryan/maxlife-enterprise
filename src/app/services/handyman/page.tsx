import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Handyman Services | MaxLife Enterprise",
  description:
    "Reliable handyman services in Orlando and Melbourne, FL. Plumbing, electrical, drywall, painting, fixtures, and general repairs for homes and businesses.",
};

export default function HandymanPage() {
  return (
    <ServicePageLayout
      title="Handyman Services"
      subtitle="Property Services"
      description="Reliable, skilled, and efficient. From minor repairs to major renovations, we handle the full spectrum of home and commercial maintenance tasks across the Orlando and Melbourne areas. No job too small."
      icon={
        <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      features={[
        {
          title: "Plumbing Repairs & Installations",
          description:
            "Leaky faucets, running toilets, pipe repairs, fixture replacements, and water heater maintenance. We fix it right the first time.",
        },
        {
          title: "Electrical Work",
          description:
            "Outlet installations, light fixture swaps, ceiling fan installs, switch replacements, and minor wiring repairs.",
        },
        {
          title: "Drywall & Painting",
          description:
            "Hole patching, drywall repair, texture matching, and interior/exterior painting for a fresh, clean look.",
        },
        {
          title: "Fixture & Appliance Installation",
          description:
            "TV mounts, shelving, blinds, door hardware, smart home devices, and appliance hookups installed correctly.",
        },
        {
          title: "Carpentry & Trim Work",
          description:
            "Crown molding, baseboards, door frames, cabinet repairs, and custom shelving built and installed.",
        },
        {
          title: "General Maintenance & Repairs",
          description:
            "Pressure washing, gutter cleaning, screen repair, weather stripping, and all those to-do list items you've been putting off.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Describe the Job",
          description:
            "Call or message us with what you need. Photos help us give a faster, more accurate estimate.",
        },
        {
          step: "02",
          title: "Get a Quote",
          description:
            "We provide a clear, upfront estimate. No hidden fees, no surprises. You approve before we start.",
        },
        {
          step: "03",
          title: "We Get It Done",
          description:
            "We show up on time, do the work right, and clean up after ourselves. Period.",
        },
        {
          step: "04",
          title: "Walk-Through",
          description:
            "We walk you through the completed work and make sure you're 100% satisfied before we leave.",
        },
      ]}
      benefits={[
        "Same-week scheduling available",
        "Upfront, honest pricing",
        "Clean, respectful work in your space",
        "One call for multiple repairs",
        "Residential and commercial properties",
        "Emergency repairs available",
      ]}
    />
  );
}
