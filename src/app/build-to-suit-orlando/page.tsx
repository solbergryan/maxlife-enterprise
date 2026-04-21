import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Build-to-Suit Orlando | Custom Commercial Development",
  description:
    "Build-to-suit development in Orlando and Central Florida. Site selection, entitlements, and custom commercial construction from MaxLife Realty.",
  alternates: { canonical: "/build-to-suit-orlando" },
  openGraph: {
    title: "Build-to-Suit Orlando | MaxLife Realty",
    description:
      "Custom build-to-suit commercial development in Orlando and Central Florida. Site selection, entitlements, construction, and delivery for retail, QSR, medical, and industrial users.",
  },
};

const process = [
  {
    step: "1",
    title: "Site Selection",
    desc: "We identify candidate sites that meet your demographics, traffic counts, zoning, and budget — including off-market land opportunities.",
  },
  {
    step: "2",
    title: "Entitlements & Approvals",
    desc: "We manage rezoning, site plan approval, utility coordination, and permitting with the city or county — getting your project shovel-ready.",
  },
  {
    step: "3",
    title: "Design & Construction",
    desc: "Working with architects and general contractors, we deliver a building that meets your operational spec, brand standards, and budget.",
  },
  {
    step: "4",
    title: "Delivery & Occupancy",
    desc: "Turnkey delivery with certificate of occupancy, signage, and commissioning — ready for your business to open on day one.",
  },
];

const idealUsers = [
  {
    title: "Retail Chains & Franchisees",
    desc: "National and regional retailers expanding across Central Florida — from soft-goods to service retail — where existing inventory doesn't fit the prototype.",
  },
  {
    title: "Quick-Service Restaurants (QSR)",
    desc: "Drive-thru QSR and coffee concepts looking for corner pad sites with the right access, visibility, and parking.",
  },
  {
    title: "Medical Office & Healthcare",
    desc: "Medical groups, dental, urgent care, and specialty practices that need custom floor plans and location control in Orlando and the Medical City corridor.",
  },
  {
    title: "Industrial Users",
    desc: "Distribution, manufacturing, and flex tenants that need specific clear heights, dock doors, power, or land area not available in the existing inventory.",
  },
  {
    title: "Office / Professional Services",
    desc: "Law firms, financial services, and professional groups building a long-term headquarters with an ownership or long-lease strategy.",
  },
  {
    title: "Automotive & Service",
    desc: "Auto service, collision, car wash, and tire/service retail that require specific site configurations and equipment.",
  },
];

const whatIsBts = `A build-to-suit (BTS) is a commercial development where the building is designed and constructed specifically for a single tenant or owner-user based on their exact requirements. Unlike leasing existing space, a BTS gives the end user full control over location, building size, layout, finishes, parking, signage, and delivery timeline. Build-to-suit deals are typically structured as either (1) a lease with the developer owning the finished building and the tenant signing a long-term lease, or (2) an owner-user purchase where the tenant owns the site and building from day one. BTS projects are especially common for retail chains, QSR operators, medical groups, industrial users, and any business that can't find the right existing space in the Orlando market.`;

export default function BuildToSuitOrlandoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://maxlifedevelopment.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Build-to-Suit Orlando",
              item: "https://maxlifedevelopment.com/build-to-suit-orlando",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Build-to-Suit Development — Orlando",
          provider: {
            "@type": "RealEstateAgent",
            name: "MaxLife Realty",
            url: "https://maxlifedevelopment.com",
          },
          areaServed: [
            { "@type": "City", name: "Orlando" },
            { "@type": "AdministrativeArea", name: "Central Florida" },
          ],
          serviceType: "Build-to-suit site selection and development",
          description:
            "Build-to-suit commercial development in Orlando and Central Florida. Site selection, entitlements, design, and construction management for retail, QSR, medical, and industrial users.",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-site-architect-work-building-housebuilding-2733678.webp"
          alt="Orlando build-to-suit commercial construction project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Custom Commercial Development
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Build-to-Suit Development{" "}
            <span className="text-gold">in Orlando</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            Site selection, entitlements, and turnkey commercial construction
            across Central Florida
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            MaxLife Realty delivers build-to-suit commercial development
            for retail, QSR, medical, office, and industrial users across
            Orlando and Central Florida. When the existing inventory
            doesn&apos;t fit, we find the site, manage the entitlement process,
            and deliver a building built specifically for your business.
          </p>
          <div className="mt-8">
            <a
              href="#bts-request"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request a Build-to-Suit Consultation
            </a>
          </div>
        </div>
      </section>

      {/* What is BTS */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            What Is a Build-to-Suit?
          </h2>
          <p className="text-gray-400 max-w-4xl leading-relaxed">
            {whatIsBts}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Our Build-to-Suit Process
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            A four-stage process from first site walk to certificate of
            occupancy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="bg-dark border border-dark-border rounded-xl p-6"
              >
                <span className="inline-flex w-10 h-10 rounded-full bg-gold/20 text-gold font-bold items-center justify-center mb-4 text-lg">
                  {p.step}
                </span>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Users */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ideal Build-to-Suit Users
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            The businesses and property types best suited for a build-to-suit
            strategy in Orlando.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealUsers.map((u) => (
              <div
                key={u.title}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-gold font-semibold mb-2">{u.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Sites */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Available Development Sites
          </h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
            We actively source both listed and off-market development sites
            across Orlando and Central Florida — including pad sites, full
            parcels, and entitled land ready for vertical construction. If you
            have a target submarket, tell us your requirements and we&apos;ll
            return a shortlist of candidate sites.
          </p>
          <Link
            href="/central-florida-land-for-development"
            className="inline-block text-gold hover:underline text-sm font-medium"
          >
            See our land for development page &rarr;
          </Link>
        </div>
      </section>

      {/* Lead Capture */}
      <section
        id="bts-request"
        className="bg-dark-card/50 border-b border-dark-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Request a Build-to-Suit Consultation
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Tell us your concept, target submarket, and building
              requirements — we&apos;ll schedule a call to walk through the
              opportunity.
            </p>
            <div className="bg-dark-card border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText="Start My BTS Project"
                subjectPrefix="Build-to-Suit Orlando"
                source="build-to-suit-orlando"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore More CRE Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/central-florida-land-for-development"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Land for Development
            </Link>
            <Link
              href="/services/development"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Development Services
            </Link>
            <Link
              href="/industrial-property-central-florida"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Industrial Property
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
