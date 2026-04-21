import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Industrial Property for Sale in Central Florida | MaxLife",
  description:
    "Industrial property and warehouse for sale across Central Florida and the I-4 corridor. Flex, distribution, and manufacturing space from MaxLife Realty.",
  alternates: { canonical: "/industrial-property-central-florida" },
  openGraph: {
    title: "Industrial Property for Sale in Central Florida | MaxLife",
    description:
      "Warehouse, flex, distribution, and manufacturing industrial property for sale across the I-4 corridor, Orlando Airport, Sanford, Apopka, and the Space Coast.",
  },
};

const submarkets = [
  {
    name: "Orlando Airport / SoDo",
    desc: "Flex and distribution space serving air cargo, logistics, and service trades. Direct access to OIA and SR-528.",
  },
  {
    name: "I-4 Corridor",
    desc: "The logistics backbone of Central Florida. Large-format warehouse and distribution buildings from Lakeland through Daytona.",
  },
  {
    name: "Apopka",
    desc: "Rapidly growing northwest industrial submarket with newer Class A warehouse product and strong land availability.",
  },
  {
    name: "Sanford",
    desc: "Established industrial market along the I-4 spine with rail access and proximity to Orlando Sanford International Airport.",
  },
  {
    name: "Space Coast / Melbourne",
    desc: "Aerospace and defense manufacturing demand driven by SpaceX, Blue Origin, L3Harris, and Northrop Grumman.",
  },
  {
    name: "Polk County / Lakeland",
    desc: "The fastest-growing industrial submarket in Florida — midway between Orlando and Tampa, serving distribution for the entire state.",
  },
];

const propertyTypes = [
  {
    title: "Warehouse & Distribution",
    desc: "Large-format distribution buildings with cross-dock loading, 28'–36' clear heights, and trailer parking. Ideal for regional and national logistics users.",
  },
  {
    title: "Flex / Industrial Flex",
    desc: "Multi-tenant buildings combining office, showroom, and warehouse components. Popular with service trades, contractors, and small-to-midsize operators.",
  },
  {
    title: "Manufacturing",
    desc: "Purpose-built or retrofit manufacturing space with heavy power, floor drains, ventilation, and clear-span interiors.",
  },
  {
    title: "Cold Storage",
    desc: "Refrigerated and freezer warehouse space — a supply-constrained niche with strong rent growth across Central Florida.",
  },
  {
    title: "Last-Mile Logistics",
    desc: "Smaller infill warehouse buildings near population centers, built for same-day and next-day delivery operations.",
  },
  {
    title: "Industrial Outdoor Storage (IOS)",
    desc: "Trailer, equipment, and container storage yards — one of the strongest-performing industrial sub-segments in Central Florida.",
  },
];

const trends = [
  {
    title: "Low Vacancy",
    desc: "Central Florida industrial vacancy has consistently tracked below state and national averages, creating upward pressure on rents.",
  },
  {
    title: "Rent Growth",
    desc: "Rent growth in modern Class A warehouse product has outpaced other commercial property types over the past several years.",
  },
  {
    title: "I-4 Corridor Demand",
    desc: "E-commerce and regional distribution continue to drive demand for well-located warehouse space on the I-4 spine.",
  },
  {
    title: "Space Coast Aerospace",
    desc: "The private space industry is creating a new wave of advanced manufacturing demand on the Space Coast.",
  },
];

export default function IndustrialPropertyCentralFloridaPage() {
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
              name: "Industrial Property for Sale in Central Florida",
              item: "https://maxlifedevelopment.com/industrial-property-central-florida",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Industrial Property Brokerage — Central Florida",
          provider: {
            "@type": "RealEstateAgent",
            name: "MaxLife Realty",
            url: "https://maxlifedevelopment.com",
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Central Florida" },
            { "@type": "City", name: "Orlando" },
            { "@type": "County", name: "Brevard County" },
            { "@type": "County", name: "Polk County" },
          ],
          serviceType: "Industrial property sales and leasing",
          description:
            "Industrial property brokerage across Central Florida and the I-4 corridor — warehouse, flex, distribution, manufacturing, cold storage, and industrial outdoor storage.",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp"
          alt="Central Florida industrial property with shipping containers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Industrial Brokerage
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Industrial Property for Sale{" "}
            <span className="text-gold">in Central Florida</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            Warehouse, flex, distribution, manufacturing, and cold storage
            across the I-4 corridor
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            MaxLife Realty represents industrial buyers, sellers, and
            investors across Central Florida — from Orlando and the airport
            submarkets to Apopka, Sanford, the Space Coast, and Polk County.
            We help users find the right building and help investors identify
            income-producing industrial assets with upside.
          </p>
          <div className="mt-8">
            <a
              href="#industrial-request"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Find Industrial Property
            </a>
          </div>
        </div>
      </section>

      {/* Submarkets */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Central Florida Industrial Submarkets
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Central Florida&apos;s industrial market spans from the I-4
            corridor to the Space Coast. Each submarket has its own rent
            dynamics and user profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submarkets.map((s) => (
              <div
                key={s.name}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Types of Industrial Property
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            The industrial category covers a wide range of building types —
            each with its own user base and investment profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyTypes.map((t) => (
              <div
                key={t.title}
                className="bg-dark border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Industrial Market Trends in Central Florida
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            The four dynamics driving industrial demand and pricing across the
            region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((t) => (
              <div
                key={t.title}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/blog/orlando-industrial-real-estate-guide"
              className="text-gold hover:underline text-sm font-medium"
            >
              Read our full Orlando industrial real estate guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Working With Us */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Working with a Central Florida Industrial Broker
          </h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
            Whether you&apos;re an owner-user looking for a warehouse to buy,
            an investor searching for income-producing industrial, or a
            developer sourcing land for a new build, MaxLife Realty brings
            local market knowledge, disciplined underwriting, and a deep
            network of owners and developers across Central Florida.
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            We handle acquisitions and dispositions, sale-leaseback structures,
            1031 exchange identifications, and build-to-suit site selection for
            industrial users.
          </p>
        </div>
      </section>

      {/* Lead Capture */}
      <section
        id="industrial-request"
        className="bg-dark-card/50 border-b border-dark-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Find Industrial Property
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Tell us your size, submarket, and use case — we&apos;ll source
              matching industrial properties across Central Florida.
            </p>
            <div className="bg-dark-card border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText="Request Industrial Listings"
                subjectPrefix="Industrial Property Central Florida"
                source="industrial-property-central-florida"
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
              href="/build-to-suit-orlando"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Build-to-Suit Orlando
            </Link>
            <Link
              href="/central-florida-land-for-development"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Land for Development
            </Link>
            <Link
              href="/orlando-commercial-real-estate-deals"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Off-Market CRE Deals
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
