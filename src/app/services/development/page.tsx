import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Development Services Orlando FL",
  description:
    "Find expert commercial development services in Orlando. Central Florida land development, site selection, entitlements & investor partnerships by MaxLife.",
  openGraph: {
    title: "Orlando Commercial Development & Land Development Services",
    description:
      "Full-service commercial development consulting in Central Florida. Site selection, land acquisition, entitlements, and investor partnerships.",
  },
};

export default function DevelopmentServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/real-estate-development/maxlife-real-estate-development-architect-plan-construction-protective-helmet-engineering-3979490.webp"
          alt="Commercial development architect planning with construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/services"
            className="text-gold hover:underline text-sm mb-4 inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Development Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial <span className="text-gold">Development Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            More than a broker — a development partner. From site selection
            through project delivery, we guide investors and developers through
            every phase of commercial development in Central Florida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Site Selection & Analysis",
              desc: "Data-driven site selection considering traffic counts, demographics, competition, zoning, and growth projections. We identify sites that align with your development program and investment criteria.",
            },
            {
              title: "Land Acquisition",
              desc: "On-market and off-market land sourcing with full due diligence support. We negotiate acquisition terms, coordinate environmental and survey work, and manage the closing process.",
            },
            {
              title: "Highest & Best Use Analysis",
              desc: "Comprehensive analysis of what a site can support based on zoning, market demand, comparable developments, and financial feasibility. We help you maximize the value of every parcel.",
            },
            {
              title: "Entitlements & Permitting",
              desc: "Navigation of local zoning codes, comprehensive plan requirements, and permitting processes. We coordinate with municipal planning departments to secure the approvals you need.",
            },
            {
              title: "Investor Partnerships",
              desc: "Connecting development projects with qualified investors. We structure partnerships that align incentives and provide the capital needed to move projects forward.",
            },
            {
              title: "Development Consulting",
              desc: "End-to-end consulting from concept through delivery. We coordinate architects, engineers, contractors, and other professionals to keep your project on schedule and on budget.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-white font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed pl-8">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understand your development goals, investment criteria, and target market.",
              },
              {
                step: "02",
                title: "Site Identification",
                desc: "Source and analyze potential sites with full market and feasibility assessment.",
              },
              {
                step: "03",
                title: "Entitlement & Planning",
                desc: "Secure approvals, coordinate design, and prepare for construction.",
              },
              {
                step: "04",
                title: "Execution & Delivery",
                desc: "Manage the development process through completion and tenant placement.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <span className="text-gold text-3xl font-bold">
                  {item.step}
                </span>
                <h3 className="text-white font-semibold mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Work With Us
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Most brokers focus exclusively on transactions. We bring a
            development operator&apos;s perspective to every engagement —
            understanding not just the deal, but the entire development lifecycle
            from dirt to delivery. This means better site selection, more
            realistic pro formas, and fewer surprises during execution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Operator mindset — not just transaction focus",
              "Local market knowledge across 6 counties",
              "Municipal relationships and zoning expertise",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-gray-300 text-sm"
              >
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have a Development Project in Mind?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Whether you&apos;re acquiring land, planning a new development, or
            exploring feasibility — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/markets"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Markets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
