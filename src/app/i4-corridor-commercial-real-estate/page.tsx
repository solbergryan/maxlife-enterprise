import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import I4CorridorMap from "@/components/I4CorridorMap";
import { I4_EXITS, I4_REGION_LABELS } from "@/data/i4-exits";
import { orlandoAgent } from "@/data/orlando/agent";

const SLUG = "i4-corridor-commercial-real-estate";
const SITE_URL = "https://maxlifedevelopment.com";
const BILLBOARD_IMG = `${SITE_URL}/images/i4-king-of-i4-billboard.png`;


export const metadata: Metadata = {
  title: "I-4 Corridor Commercial Real Estate | Tampa to Daytona | MaxLife Realty",
  description:
    "Commercial real estate along Interstate 4 — investment property, industrial, retail, office, and land from Tampa through Orlando to Daytona Beach. MaxLife Realty covers the full I-4 corridor across 6 Florida counties.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: "I-4 Corridor Commercial Real Estate | Tampa to Daytona",
    description:
      "Investment property, industrial, retail, and office opportunities along Interstate 4 — Florida's commercial spine, 132 miles across 6 counties.",
    url: `${SITE_URL}/${SLUG}`,
    type: "website",
    siteName: "MaxLife Realty",
    images: [
      {
        url: BILLBOARD_IMG,
        width: 1200,
        height: 800,
        alt: "MaxLife Realty — Commercial Real Estate King of I-4 · Ryan Solberg, 855-SOLBERG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I-4 Corridor Commercial Real Estate | King of I-4",
    description:
      "Florida's commercial spine — 132 miles, 6 counties, every commercial exit. MaxLife Realty owns the I-4 corridor.",
    images: [BILLBOARD_IMG],
  },
};

const corridorStats = [
  { value: "132 Mi", label: "Tampa to Daytona Beach", hint: "Florida's primary east-west commercial spine" },
  { value: "6",      label: "Counties Served", hint: "Hillsborough · Polk · Osceola · Orange · Seminole · Volusia" },
  { value: "4M+",    label: "Population Within 20 Miles", hint: "One of the fastest-growing corridors in the Southeast" },
  { value: "75M+",   label: "Annual Visitors", hint: "Disney/Orlando tourism driving sustained retail demand" },
];

const topNodes = [
  {
    exits: "27–41",
    name: "Lakeland / Polk County",
    county: "Polk County",
    types: ["Industrial", "Logistics", "Distribution"],
    body: "The I-4 / Polk Pkwy corridor anchors one of the largest industrial and logistics markets in Florida. Direct Florida Turnpike access, lower land costs than the Orlando metro, and massive spec warehouse development make this the fastest-growing distribution hub in the Southeast.",
    links: [],
  },
  {
    exits: "55",
    name: "US 27 / Davenport",
    county: "Polk / Lake Counties",
    types: ["NNN Retail", "QSR", "Logistics"],
    body: "The US-27 interchange serves the world's largest concentration of vacation rentals — generating structural, year-round demand for QSR, convenience retail, and NNN-leased national tenants. Some of the strongest retail pad-site velocity in Central Florida.",
    links: [
      { label: "Davenport CRE", slug: "davenport-commercial-real-estate" },
      { label: "Clermont CRE", slug: "clermont-commercial-real-estate" },
    ],
  },
  {
    exits: "62–68",
    name: "Disney / Kissimmee",
    county: "Osceola County",
    types: ["Tourism Retail", "NNN", "Hospitality"],
    body: "55+ million annual visitors create the most recession-resistant retail demand in the country. Cap rates in this cluster run 50–100 bps tighter than comparable Midwest markets. National QSR, convenience, and hotel brands prioritize sites within 5 miles of Disney.",
    links: [
      { label: "Kissimmee CRE", slug: "kissimmee-commercial-real-estate" },
      { label: "Celebration CRE", slug: "celebration-commercial-real-estate" },
    ],
  },
  {
    exits: "72–75",
    name: "International Drive",
    county: "Orange County",
    types: ["Hospitality", "Mixed-Use", "Retail"],
    body: "I-Drive is Orlando's convention and hospitality corridor — the Orange County Convention Center, Universal Studios, and SeaWorld anchor one of the densest mixed-use commercial strips in the Southeast. Hotel, F&B, and experiential retail investment is ongoing.",
    links: [],
  },
  {
    exits: "98–101",
    name: "Lake Mary / Sanford",
    county: "Seminole County",
    types: ["Class A Office", "Industrial", "Medical"],
    body: "Lake Mary/Heathrow holds the highest concentration of Fortune 1000 regional headquarters in Central Florida. Exit 101 adds CSX intermodal and Sanford International Airport, creating a rare corridor where Class A office and logistics operate in the same market.",
    links: [
      { label: "Lake Mary CRE", slug: "lake-mary-commercial-real-estate" },
      { label: "Sanford CRE", slug: "sanford-commercial-real-estate" },
    ],
  },
];

const coveredMarkets = [
  { label: "Davenport",         slug: "davenport-commercial-real-estate",          zone: "Exit 55 · US 27" },
  { label: "Celebration",       slug: "celebration-commercial-real-estate",        zone: "Exit 62 · FL 417" },
  { label: "Kissimmee",         slug: "kissimmee-commercial-real-estate",          zone: "Exit 64 · US 192" },
  { label: "Winter Park",       slug: "winter-park-commercial-real-estate",        zone: "Exit 88 · Lee Rd" },
  { label: "Maitland",          slug: "maitland-commercial-real-estate",           zone: "Exit 90 · Maitland Blvd" },
  { label: "Altamonte Springs", slug: "altamonte-springs-commercial-real-estate",  zone: "Exit 92 · FL 436" },
  { label: "Casselberry",       slug: "casselberry-commercial-real-estate",        zone: "Exit 92 · FL 436" },
  { label: "Longwood",          slug: "longwood-commercial-real-estate",           zone: "Exit 94 · FL 434" },
  { label: "Winter Springs",    slug: "winter-springs-commercial-real-estate",     zone: "Exit 94 · FL 434" },
  { label: "Lake Mary",         slug: "lake-mary-commercial-real-estate",          zone: "Exit 98 · Heathrow" },
  { label: "Sanford",           slug: "sanford-commercial-real-estate",            zone: "Exits 101–104" },
  { label: "Deltona",           slug: "deltona-commercial-real-estate",            zone: "Exit 108 · DeBary" },
];

const faqs = [
  {
    q: "What makes the I-4 corridor one of the strongest commercial real estate markets in Florida?",
    a: "Interstate 4 connects Tampa, Orlando, and Daytona Beach across 132 miles and 6 counties, carrying over 200,000 vehicles per day in peak segments. The corridor anchors Walt Disney World — the world's most-visited theme park — and Florida's largest logistics spine. Population growth along I-4 consistently outpaces national averages, driving sustained demand for retail, industrial, and mixed-use commercial development.",
  },
  {
    q: "Which I-4 exits have the most commercial real estate activity?",
    a: "The highest-value exit clusters are: Exits 27–41 (Lakeland/Polk Pkwy industrial corridor), Exit 55 (US-27 — NNN retail and logistics), Exits 62–68 (Disney/Kissimmee tourism retail), Exits 72–75 (International Drive hospitality and mixed-use), and Exit 98 (Lake Mary/Heathrow — premier Class A office). Each cluster has a distinct demand profile — industrial in Polk, NNN retail in the tourism zones, and office in Seminole.",
  },
  {
    q: "What types of commercial property are most in demand along I-4?",
    a: "Demand varies by segment. Tampa to Lakeland (Exits 1–55) is primarily industrial and distribution. Disney to Orlando (Exits 55–82) drives the highest QSR, convenience retail, NNN, and hospitality demand in the country. Maitland to Sanford (Exits 90–104) is the metro's strongest office and medical market. Volusia County (Exits 108–132) is emerging with retail and industrial growth driven by Orlando metro overflow.",
  },
  {
    q: "How does the Disney World corridor affect commercial real estate values along I-4?",
    a: "Disney World is the single largest driver of commercial demand on the I-4 corridor. The Exits 62–68 zone generates 55+ million annual visitors, creating structural demand for QSR, convenience retail, hospitality, and NNN-leased national tenants. Cap rates in the Disney corridor typically run 50–100 basis points tighter than comparable Midwest markets due to traffic volume and tenant credit quality.",
  },
  {
    q: "Does MaxLife Realty cover the full I-4 corridor?",
    a: "MaxLife Realty's primary coverage area is the Central Florida portion of I-4 — from the US-27 interchange (Exit 55) through northern Volusia County (Exit 118). This encompasses Orange, Osceola, Seminole, and southern Volusia counties. We work buyer acquisitions, seller dispositions, tenant representation, and investment advisory for all commercial property types. For the Tampa and Lakeland segments, we refer qualified clients to vetted partner brokerages.",
  },
];

const relatedLinks = [
  { slug: "orlando-commercial-real-estate-deals", label: "Orlando CRE Deals" },
  { slug: "nnn-properties-florida", label: "NNN Properties" },
  { slug: "industrial-property-central-florida", label: "Industrial Property" },
  { slug: "central-florida-land-for-development", label: "Land for Development" },
  { slug: "kissimmee-commercial-real-estate", label: "Kissimmee CRE" },
  { slug: "lake-mary-commercial-real-estate", label: "Lake Mary CRE" },
  { slug: "sanford-commercial-real-estate", label: "Sanford CRE" },
  { slug: "cap-rates", label: "Cap Rate Tool" },
];

export default function I4CorridorPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "I-4 Corridor Commercial Real Estate", item: `${SITE_URL}/${SLUG}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "I-4 Corridor Commercial Real Estate",
    provider: {
      "@type": "RealEstateAgent",
      name: "MaxLife Realty",
      url: SITE_URL,
      telephone: orlandoAgent.phone,
      email: orlandoAgent.email,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
      description: "Interstate 4 corridor — Tampa to Daytona Beach, 132 miles across 6 counties",
    },
    serviceType: "Commercial real estate brokerage",
    description: metadata.description as string,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-skyscrapers-modern-architecture-glassed-buildings-blue-10235499.webp"
          alt="I-4 corridor commercial real estate Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/92 via-dark/82 to-navy-dark/72" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            132 Miles · 6 Counties · Tampa to Daytona Beach
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            I-4 Corridor Commercial Real Estate
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-5">
            Florida&apos;s commercial spine — the highest-density investment corridor in the Southeast
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Interstate 4 is the economic backbone of Florida&apos;s most dynamic region, connecting Tampa, Lakeland, Orlando, and Daytona Beach across six counties and 132 miles. The corridor anchors Walt Disney World, Florida&apos;s largest logistics market, and the fastest-growing population corridor in the Southeast. MaxLife Realty works investment acquisitions, tenant representation, and disposition across the Central Florida portion of I-4 — from the US-27 interchange (Exit 55) to northern Volusia County.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#corridor-inquiry"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Find I-4 Corridor Properties
            </a>
            <a
              href={orlandoAgent.phoneHref}
              className="inline-block border border-gold/40 hover:bg-gold/10 text-gold font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              Call {orlandoAgent.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Interactive I-4 Exit Map
          </h2>
          <p className="text-gray-300 max-w-3xl mb-8 leading-relaxed">
            Select any exit to explore its commercial real estate profile — property types, demand drivers, and links to our market pages for covered cities.
          </p>
          <I4CorridorMap />
        </div>
      </section>

      {/* Exit-by-Exit Commercial Profile */}
      <section className="border-b border-white/10" style={{ background: '#06080a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#A7F3D0', fontFamily: 'Arial Narrow, Arial, sans-serif' }}>
              Detailed Profiles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Exit-by-Exit Commercial Profile
            </h2>
            <p className="text-gray-300 max-w-3xl">
              Every commercial exit along I-4 — existing major tenants, traffic counts, prevailing cap rates, and property type mix. Use this as your underwriting baseline before touring the corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {I4_EXITS.map((exit) => (
              <article
                key={exit.exitNum}
                className="rounded-xl overflow-hidden"
                style={{
                  background: exit.highlight
                    ? 'linear-gradient(135deg, #003d1a 0%, #0a1628 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: exit.highlight
                    ? '1px solid rgba(167,243,208,0.3)'
                    : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Top header bar — like a green guide sign */}
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{
                    background: exit.highlight ? 'rgba(0,107,60,0.5)' : 'rgba(0,0,0,0.4)',
                    borderBottom: exit.highlight ? '2px solid rgba(167,243,208,0.4)' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Exit tab */}
                  <div
                    className="shrink-0 rounded text-center font-black px-3 py-1"
                    style={{
                      background: exit.highlight ? '#FFD100' : '#1A2E1A',
                      color: exit.highlight ? '#111111' : '#FFFFFF',
                      border: exit.highlight ? '1.5px solid #FFD100' : '1px solid #6B7280',
                      fontFamily: 'Arial Narrow, Arial, sans-serif',
                      letterSpacing: '0.05em',
                      minWidth: '60px',
                    }}
                  >
                    <div className="text-[8px] leading-none mb-0.5 opacity-70">EXIT</div>
                    <div className="text-lg leading-none">{exit.exitNum}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-sm sm:text-base text-white tracking-wide truncate"
                      style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', letterSpacing: '0.04em' }}
                    >
                      {exit.label.toUpperCase()}
                    </p>
                    <p className="text-xs" style={{ color: exit.highlight ? '#A7F3D0' : '#9CA3AF' }}>
                      {I4_REGION_LABELS[exit.region]} County
                      {exit.highlight && ' · ★ Top Investment Node'}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 py-4 space-y-4">
                  <p className="text-sm leading-relaxed text-gray-300">{exit.description}</p>

                  {/* Stats row */}
                  {(exit.traffic || exit.capRates || exit.propertyMix) && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {exit.traffic && (
                        <div className="rounded p-2.5" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <p className="text-[9px] font-bold tracking-widest uppercase mb-0.5" style={{ color: '#6EE7B7' }}>Traffic</p>
                          <p className="text-xs font-semibold text-white">{exit.traffic}</p>
                        </div>
                      )}
                      {exit.capRates && (
                        <div className="rounded p-2.5" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <p className="text-[9px] font-bold tracking-widest uppercase mb-0.5" style={{ color: '#6EE7B7' }}>Cap Rates</p>
                          <p className="text-xs font-semibold text-white">{exit.capRates}</p>
                        </div>
                      )}
                      {exit.propertyMix && (
                        <div className="rounded p-2.5" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <p className="text-[9px] font-bold tracking-widest uppercase mb-0.5" style={{ color: '#6EE7B7' }}>Property Mix</p>
                          <p className="text-xs font-semibold text-white">{exit.propertyMix}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Anchors */}
                  {exit.anchors.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: '#FFD100' }}>
                        Existing Major Tenants
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exit.anchors.map((a) => (
                          <span
                            key={a}
                            className="text-xs px-2.5 py-1 rounded"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#D1D5DB',
                            }}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Coverage links */}
                  {exit.cityLinks.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exit.cityLinks.map((cl) =>
                        cl.slug ? (
                          <Link
                            key={cl.slug}
                            href={`/${cl.slug}`}
                            className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded transition-colors"
                            style={{
                              background: 'rgba(0,107,60,0.4)',
                              border: '1px solid #A7F3D0',
                              color: '#A7F3D0',
                              fontFamily: 'Arial Narrow, Arial, sans-serif',
                              letterSpacing: '0.05em',
                            }}
                          >
                            ▶ {cl.name.toUpperCase()}
                          </Link>
                        ) : null
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-8 max-w-3xl">
            Traffic counts (AADT) sourced from FDOT 2025 traffic information. Cap rate ranges reflect estimated market spreads from active and recently closed Central Florida transactions (Q1 2026); subject to property quality, lease structure, and tenant credit. Tenant lists are illustrative anchors and not exhaustive.
          </p>
        </div>
      </section>

      {/* Corridor Stats */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            I-4 Corridor at a Glance
          </h2>
          <p className="text-gray-300 max-w-3xl mb-8">
            By the numbers — why the I-4 corridor commands institutional investor attention year after year.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {corridorStats.map((s) => (
              <div key={s.label} className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                <p className="text-gold text-2xl font-bold mb-1">{s.value}</p>
                <p className="text-white text-sm font-medium">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Investment Nodes */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Top I-4 Investment Corridors
          </h2>
          <p className="text-gray-300 max-w-3xl mb-10">
            Five exit clusters generating the most consistent commercial real estate activity along I-4 right now.
          </p>
          <div className="space-y-6">
            {topNodes.map((node) => (
              <div key={node.exits} className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row gap-5">
                <div className="shrink-0">
                  <span className="inline-block bg-gold/15 border border-gold/40 text-gold text-xs font-bold px-3 py-1.5 rounded-lg">
                    Exit{node.exits.includes('–') ? 's' : ''} {node.exits}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-white font-semibold text-lg">{node.name}</h3>
                    <span className="text-gray-500 text-sm">{node.county}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {node.types.map((t) => (
                      <span key={t} className="text-xs bg-white/[0.05] border border-white/10 text-gray-300 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{node.body}</p>
                  {node.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {node.links.map((l) => (
                        <Link
                          key={l.slug}
                          href={`/${l.slug}`}
                          className="text-xs border border-gold/40 text-gold hover:bg-gold/10 px-3 py-1 rounded transition-colors"
                        >
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billboard — King of I-4 */}
      <section className="border-b border-white/10" style={{ background: 'linear-gradient(180deg, #0a0f0a 0%, #060d06 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Billboard image */}
            <div className="w-full lg:w-3/5 shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 60px rgba(217,151,6,0.18)' }}>
                <Image
                  src="/images/i4-king-of-i4-billboard.png"
                  alt="Ryan Solberg — Commercial Real Estate King of I-4, MaxLife Realty, 855-SOLBERG"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority={false}
                />
              </div>
            </div>
            {/* Copy */}
            <div className="flex-1">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#A7F3D0', fontFamily: 'Arial Narrow, Arial, sans-serif' }}>
                The I-4 Corridor Specialist
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Commercial Real Estate<br />
                <span style={{ color: '#FFD100' }}>King of I-4</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ryan Solberg has built MaxLife Realty into the dominant commercial brokerage along the I-4 corridor — from the US-27 vacation node at Exit 55 through the Seminole office markets at Lake Mary and Sanford. Every exit. Every property type. Every deal size.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When you call <span className="text-white font-semibold">855-SOLBERG</span>, you get a broker who knows every off-ramp, every landlord, and every off-market opportunity on Florida&apos;s commercial spine.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={orlandoAgent.phoneHref}
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                  style={{ background: '#FFD100', color: '#111111', fontFamily: 'Arial Narrow, Arial, sans-serif', letterSpacing: '0.05em' }}
                >
                  CALL 855-SOLBERG
                </a>
                <a
                  href="#corridor-inquiry"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg transition-colors text-sm border"
                  style={{ borderColor: '#FFD100', color: '#FFD100', fontFamily: 'Arial Narrow, Arial, sans-serif', letterSpacing: '0.05em' }}
                >
                  FIND I-4 PROPERTIES
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets We Cover */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Markets We Cover Along I-4
          </h2>
          <p className="text-gray-300 max-w-3xl mb-10">
            MaxLife Realty maintains active coverage in these Central Florida cities — all on or directly adjacent to the I-4 corridor.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {coveredMarkets.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="bg-dark border border-white/10 rounded-xl p-4 hover:border-gold/40 transition-colors"
              >
                <p className="text-white font-semibold text-sm mb-1">{m.label}</p>
                <p className="text-gray-500 text-xs">{m.zone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Agent */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/[0.04] border border-gold/30 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-full bg-gold/15 border border-gold/40 shrink-0 flex items-center justify-center text-gold text-2xl font-bold">
              {orlandoAgent.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">Your I-4 Corridor CRE Broker</p>
              <h3 className="text-white text-xl font-semibold mb-1">{orlandoAgent.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{orlandoAgent.title}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{orlandoAgent.bio}</p>
              <div className="flex flex-wrap gap-3">
                <a href={orlandoAgent.phoneHref}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-4 py-2 rounded-md text-sm transition-colors">
                  {orlandoAgent.phone}
                </a>
                <a href={`mailto:${orlandoAgent.email}`}
                  className="inline-flex items-center gap-2 border border-gold/40 hover:bg-gold/10 text-gold font-semibold px-4 py-2 rounded-md text-sm transition-colors">
                  Email
                </a>
                <Link href={orlandoAgent.calendly} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-gold/40 text-gray-300 hover:text-gold font-semibold px-4 py-2 rounded-md text-sm transition-colors">
                  Schedule a Call
                </Link>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                {orlandoAgent.brokerage} · {orlandoAgent.brokerLicense}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="corridor-inquiry" className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Find I-4 Corridor Properties
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Tell us your target exit range, property type, and investment criteria — we&apos;ll match you with on- and off-market opportunities along the I-4 corridor.
            </p>
            <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText="Find I-4 Corridor Properties"
                subjectPrefix="I-4 Corridor CRE Inquiry"
                source={SLUG}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <h3 className="text-gold font-semibold text-lg mb-3">{f.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-white mb-6">Explore Related Pages</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {relatedLinks.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
