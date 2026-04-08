import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MaxLife Enterprise",
  description:
    "Explore our full range of services: commercial real estate, residential brokerage, handyman, engineering, cleaning, and more.",
};

const services = [
  {
    title: "Commercial Real Estate Brokerage",
    description:
      "Full-service commercial real estate representation for buyers, sellers, landlords, and tenants. We handle office spaces, retail locations, industrial properties, and investment opportunities.",
    features: [
      "Property acquisitions & dispositions",
      "Lease negotiations",
      "Market analysis & valuations",
      "Investment consulting",
      "Tenant & landlord representation",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Residential Real Estate Brokerage",
    description:
      "Whether you're buying your first home, selling a property, or building an investment portfolio, we provide hands-on guidance through every step of the transaction.",
    features: [
      "Home buying & selling",
      "Comparative market analysis",
      "First-time buyer guidance",
      "Investment property sourcing",
      "Negotiation & closing support",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Handyman Services",
    description:
      "Reliable, skilled, and efficient. From minor repairs to major renovations, we handle the full spectrum of home and commercial maintenance tasks.",
    features: [
      "Plumbing repairs & installations",
      "Electrical work",
      "Drywall & painting",
      "Fixture installations",
      "General repairs & maintenance",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Engineering Services",
    description:
      "Technical expertise for complex challenges. We bring engineering discipline to every project — from structural assessments to system design and implementation.",
    features: [
      "Structural assessments",
      "System design & optimization",
      "Project management",
      "Technical consulting",
      "Problem diagnosis & resolution",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Cleaning Services",
    description:
      "Professional cleaning for homes, offices, and commercial spaces. We deliver spotless results with attention to detail and environmentally conscious practices.",
    features: [
      "Deep cleaning",
      "Move-in / move-out cleaning",
      "Office & commercial cleaning",
      "Recurring maintenance cleaning",
      "Post-construction cleanup",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "Have a project that doesn't fit neatly into one category? That's our specialty. We bring the same professionalism and problem-solving to any challenge you throw our way.",
    features: [
      "Property management",
      "Renovation coordination",
      "Vendor management",
      "Emergency services",
      "And more — just ask",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need. <span className="text-gold">One Company.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            MaxLife Enterprise offers a comprehensive suite of professional
            services. Each one is backed by real expertise and a commitment to
            getting it done right.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-dark-card border border-dark-border rounded-xl p-8 flex flex-col lg:flex-row gap-8 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Request This Service
                </Link>
              </div>
              <div className="lg:w-80 shrink-0">
                <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
                  What&apos;s Included
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            No problem. Reach out and tell us about your situation — we&apos;ll
            figure out the best approach together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
