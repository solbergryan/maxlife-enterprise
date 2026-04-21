import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MaxLife Realty",
  description:
    "Commercial real estate, NNN investments, land brokerage & development, residential real estate, property services, and custom solutions in Central Florida.",
};

const services = [
  {
    slug: "commercial-real-estate",
    title: "Commercial Real Estate",
    description:
      "Full-service commercial brokerage for acquisitions, dispositions, and lease negotiations. Office, retail, industrial, and NNN investment properties.",
    features: [
      "Property acquisitions & dispositions",
      "Lease negotiations",
      "Market analysis & valuations",
      "NNN property brokerage",
      "Tenant & landlord representation",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: "nnn-investments",
    title: "NNN Investment Properties",
    description:
      "Build passive income through triple net lease investments. We help investors acquire and sell NNN properties backed by national credit tenants.",
    features: [
      "NNN property acquisitions & sales",
      "Cap rate & NOI analysis",
      "Tenant credit evaluation",
      "1031 exchange guidance",
      "Portfolio strategy",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: "land-development",
    title: "Land Brokerage & Development",
    description:
      "From raw land acquisitions to entitled, development-ready sites. Zoning, entitlements, site planning, and development consulting across Central Florida.",
    features: [
      "Raw land acquisitions & dispositions",
      "Entitlements & rezoning",
      "Site planning & due diligence",
      "Development consulting",
      "Buyer & tenant sourcing",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    slug: "residential-real-estate",
    title: "Residential Real Estate",
    description:
      "Buying, selling, or investing in homes. Personalized service from listing to closing across the Orlando and Melbourne markets.",
    features: [
      "Home buying & selling",
      "Comparative market analysis",
      "First-time buyer guidance",
      "Investment property sourcing",
      "Relocation assistance",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    slug: "property-services",
    title: "Property Services",
    description:
      "Comprehensive maintenance, cleaning, and engineering services for investors, landlords, and homeowners. One call covers it all.",
    features: [
      "Maintenance & handyman repairs",
      "Professional cleaning",
      "Engineering & technical consulting",
      "Post-construction cleanup",
      "Property preparation",
    ],
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    slug: "custom-solutions",
    title: "Custom Solutions",
    description:
      "Unique projects, property management, renovation coordination, vendor management, and emergency services. We tackle what others won't.",
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
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-building-architecture-modern-exterior-skyscraper-facade-5535464.webp"
          alt="MaxLife Realty commercial real estate services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Estate. Development.{" "}
            <span className="text-gold">Full Service.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            From NNN investment properties and land development to residential
            brokerage and property services — MaxLife Realty delivers
            results across the full spectrum of real estate.
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
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Request This Service
                  </Link>
                </div>
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
