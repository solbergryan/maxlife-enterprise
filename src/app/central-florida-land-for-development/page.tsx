import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title:
    "Central Florida Land for Development | Florida Land Investment Opportunities",
  description:
    "Development-ready land in Central Florida growth corridors. Entitled and pre-entitled parcels for residential and commercial investment.",
  keywords: [
    "central florida land for development",
    "florida land investment",
    "development land orlando",
    "entitled land florida",
    "land for sale central florida",
    "orlando development parcels",
  ],
  openGraph: {
    title: "Development-Ready Land in Central Florida | MaxLife Development",
    description:
      "Entitled and pre-entitled parcels in the path of progress. Explore Central Florida's highest-growth land corridors.",
  },
};

const breadcrumbSchema = {
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
      name: "Central Florida Land for Development",
      item: "https://maxlifedevelopment.com/central-florida-land-for-development",
    },
  ],
};

const growthCorridors = [
  {
    name: "Wellness Way",
    county: "South Lake / Orange County",
    drivers:
      "Master-planned communities, Wellness Way Sector Plan covering 16,000+ acres, proximity to Walt Disney World and major employment centers.",
    status:
      "Active entitlement and horizontal development. Multiple phases under construction with thousands of rooftops in the pipeline.",
  },
  {
    name: "US-192 / Poinciana Corridor",
    county: "Osceola County",
    drivers:
      "SunRail extension, Poinciana Parkway interchange, explosive population growth, and affordable housing demand driving residential permitting.",
    status:
      "Rapid absorption of entitled lots. New commercial nodes forming around transportation hubs and retail anchors.",
  },
  {
    name: "SR-429 / Western Beltway",
    county: "Orange / Lake County",
    drivers:
      "Beltway completion opening western Orange and eastern Lake County, Horizon West growth, new interchanges fueling commercial demand.",
    status:
      "Pre-entitled and raw land converting quickly as utilities extend west. Strong demand for mixed-use and commercial pad sites.",
  },
  {
    name: "Lake Nona / Narcoossee Road",
    county: "Orange County",
    drivers:
      "Medical City expansion, VA Hospital, USTA campus, Orlando International Airport south terminal, and Tavistock's continued investment.",
    status:
      "Premium pricing with limited remaining inventory. Infill parcels and adjacent areas commanding top dollar.",
  },
  {
    name: "North Brevard / Titusville",
    county: "Brevard County",
    drivers:
      "Kennedy Space Center modernization, Blue Origin and SpaceX operations, Titusville revitalization, and workforce housing demand from aerospace sector.",
    status:
      "Early-stage growth corridor with significant upside. Entitled parcels trading at a discount to comparable Orlando-area land.",
  },
];

const landTypes = [
  {
    type: "Entitled Residential",
    description:
      "Parcels with approved site plans, zoning, and development orders in place. Ready for vertical construction or lot development. Typically includes utility commitments, concurrency approvals, and plat-ready engineering.",
    pricing: "$80K - $150K per lot (finished lots) / $25K - $60K per unit (raw entitled)",
  },
  {
    type: "Entitled Commercial",
    description:
      "Commercially zoned land with approved entitlements for retail, office, industrial, or mixed-use development. May include pad-ready sites near major intersections or interchange parcels along growth corridors.",
    pricing: "$5 - $15 per SF depending on location, access, and entitlement depth",
  },
  {
    type: "Pre-Entitled (Raw Land)",
    description:
      "Unentitled acreage in the path of growth, typically within or adjacent to sector plans or future land use amendments. Requires zoning, environmental review, and utility planning before development.",
    pricing: "$15K - $60K per acre depending on location, future land use designation, and proximity to infrastructure",
  },
  {
    type: "Infill / Redevelopment",
    description:
      "Smaller parcels within established urban areas suitable for redevelopment, adaptive reuse, or higher-density projects. Often located near transit, employment centers, or revitalizing downtown corridors.",
    pricing: "$10 - $30 per SF for urban infill; highly variable based on existing improvements and zoning flexibility",
  },
];

const infrastructureTriggers = [
  {
    title: "Road Construction",
    description:
      "SR-429 Western Beltway extension, Poinciana Parkway Phase 2, Narcoossee Road widening, and the Osceola Parkway extension are opening thousands of acres to development.",
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Utility Extensions",
    description:
      "Toho Water Authority, Orange County Utilities, and Lake County expanding sewer and water service into previously unserved growth areas, unlocking density and development rights.",
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "School Construction",
    description:
      "Orange, Osceola, and Lake County school districts building 15+ new schools over the next five years, signaling residential rooftop demand and triggering commercial development.",
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Commercial Anchors Opening",
    description:
      "Publix, Wawa, Advent Health, and national retailers committing to new locations across growth corridors, validating rooftop counts and accelerating surrounding land values.",
    icon: (
      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const marketStats = [
  {
    stat: "$80K - $150K",
    label: "Avg Finished Residential Lots",
    detail: "Entitled lots in active growth corridors",
  },
  {
    stat: "$5 - $15/SF",
    label: "Commercial Land Pricing",
    detail: "Entitled commercial parcels across Central Florida",
  },
  {
    stat: "1,500+",
    label: "New Residents Per Week",
    detail: "Central Florida population growth driving demand",
  },
  {
    stat: "$4B+",
    label: "Infrastructure Pipeline",
    detail: "Roads, utilities, and public projects in development",
  },
];

export default function CentralFloridaLandForDevelopmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/real-estate-development/maxlife-real-estate-development-building-to-build-framework-construction-site-1210677.webp"
          alt="Central Florida land for development with construction framework"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Land Investment
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Development-Ready Land in Central Florida&apos;s{" "}
            <span className="text-gold">Growth Corridors</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg mb-6">
            Entitled and pre-entitled parcels in the path of progress
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed mb-8">
            Central Florida is adding more than 1,500 new residents every week,
            backed by billions in infrastructure investment and one of the largest
            development pipelines in the Southeast. For land investors, that
            translates into accelerating absorption, rising per-acre values, and a
            shrinking window to acquire parcels ahead of the growth curve.
            Whether you are looking for entitled residential lots, commercial pad
            sites, or raw acreage in a designated growth corridor, we source and
            underwrite land opportunities across six counties.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#inventory"
              data-track="hero-cta-land-landing"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Get Land Inventory
            </Link>
            <Link
              href="/deal-analyzer"
              className="border border-gold text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Analyze a Deal
            </Link>
          </div>
        </div>
      </section>

      {/* Growth Corridors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
          Where the Growth Is
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Central Florida Growth Corridors
        </h2>
        <p className="text-gray-400 max-w-3xl mb-10 leading-relaxed">
          These five corridors represent the highest-velocity land markets in
          the Orlando metro. Each benefits from a combination of transportation
          investment, utility expansion, and rooftop demand that drives land
          values upward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {growthCorridors.map((corridor) => (
            <div
              key={corridor.name}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
            >
              <h3 className="text-white text-xl font-semibold mb-1">
                {corridor.name}
              </h3>
              <p className="text-gold text-sm font-medium mb-4">
                {corridor.county}
              </p>
              <div className="mb-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Key Drivers
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {corridor.drivers}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Development Status
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {corridor.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Land Types Available */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Inventory Categories
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Land Types Available
          </h2>
          <p className="text-gray-400 max-w-3xl mb-10 leading-relaxed">
            We source land across the entitlement spectrum, from shovel-ready
            lots to raw acreage positioned for long-term appreciation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landTypes.map((land) => (
              <div
                key={land.type}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-white text-xl font-semibold mb-3">
                  {land.type}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {land.description}
                </p>
                <div className="bg-dark rounded-lg px-4 py-3 border border-dark-border">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Typical Pricing
                  </p>
                  <p className="text-gold font-semibold text-sm">
                    {land.pricing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Triggers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
          Value Catalysts
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Infrastructure Triggers Driving Land Value
        </h2>
        <p className="text-gray-400 max-w-3xl mb-10 leading-relaxed">
          Land values in Central Florida do not rise in a vacuum. These are the
          specific infrastructure investments that compress timelines, unlock
          entitlements, and drive per-acre appreciation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructureTriggers.map((trigger) => (
            <div
              key={trigger.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <div className="mb-4">{trigger.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {trigger.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {trigger.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            By the Numbers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Central Florida Land Market at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((item) => (
              <div
                key={item.label}
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
              >
                <p className="text-gold text-2xl sm:text-3xl font-bold mb-2">
                  {item.stat}
                </p>
                <p className="text-white font-semibold text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-gray-500 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="inventory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-dark-card border border-dark-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Get Land Inventory
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Tell us what you are looking for and we will send you current
              parcels that match your criteria across Central Florida&apos;s
              growth corridors.
            </p>
            <LeadCaptureForm
              buttonText="Get Land Inventory"
              subjectPrefix="Land Development Inquiry"
              source="land-development-landing"
            />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/blog/central-florida-land-development"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group"
            >
              <p className="text-gold text-xs uppercase tracking-wider mb-2">
                Blog
              </p>
              <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                Central Florida Land Development Guide
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                A deep dive into entitlement timelines, zoning, and development
                economics across the region.
              </p>
            </Link>
            <Link
              href="/markets/lake-county-commercial-land"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group"
            >
              <p className="text-gold text-xs uppercase tracking-wider mb-2">
                Market
              </p>
              <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                Lake County Commercial Land
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Market data and opportunity analysis for one of Central
                Florida&apos;s fastest-growing counties.
              </p>
            </Link>
            <Link
              href="/services/land-development"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group"
            >
              <p className="text-gold text-xs uppercase tracking-wider mb-2">
                Service
              </p>
              <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                Land Development Services
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                From site selection and due diligence to entitlement and
                disposition, we manage the full lifecycle.
              </p>
            </Link>
            <Link
              href="/deal-analyzer"
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors group"
            >
              <p className="text-gold text-xs uppercase tracking-wider mb-2">
                Tool
              </p>
              <h3 className="text-white font-semibold group-hover:text-gold transition-colors">
                Deal Analyzer
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Underwrite land and commercial deals with institutional-grade
                metrics in seconds.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
