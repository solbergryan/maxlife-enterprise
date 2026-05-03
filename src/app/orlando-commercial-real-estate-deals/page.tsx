import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title:
    "Off-Market Commercial Real Estate Deals in Orlando | MaxLife Development",
  description:
    "Get exclusive access to off-market commercial real estate deals in Orlando. Investment-grade NNN, retail, multifamily & industrial properties before they hit the market.",
  openGraph: {
    title: "Off-Market Commercial Real Estate Deals in Orlando",
    description:
      "Exclusive access to investment-grade commercial properties in Orlando before they hit the market.",
  },
};

const benefits = [
  {
    title: "Less Competition",
    desc: "Off-market properties never hit the MLS or listing platforms, meaning fewer bidders and less price inflation from bidding wars.",
    icon: (
      <svg
        className="w-5 h-5 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Better Pricing",
    desc: "Without public marketing pressure, sellers are often more flexible on price and terms — creating better entry points for investors.",
    icon: (
      <svg
        className="w-5 h-5 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "First-Mover Advantage",
    desc: "See deals days or weeks before the broader market. In a competitive metro like Orlando, speed wins.",
    icon: (
      <svg
        className="w-5 h-5 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Direct Relationships",
    desc: "We work directly with owners, developers, and estate representatives — cutting through layers and getting to the real decision-makers.",
    icon: (
      <svg
        className="w-5 h-5 text-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const marketStats = [
  {
    stat: "1,500+",
    label: "New Residents Per Week",
    detail: "Orlando metro population growth continues to outpace national averages",
  },
  {
    stat: "75M+",
    label: "Annual Visitors",
    detail: "Tourism drives retail, hospitality, and service-sector demand year-round",
  },
  {
    stat: "0%",
    label: "State Income Tax",
    detail: "Florida's tax structure makes cash-on-cash returns significantly stronger",
  },
  {
    stat: "Top 10",
    label: "U.S. Job Growth Metro",
    detail: "Diversifying economy with tech, healthcare, defense, and logistics sectors",
  },
];

const dealExamples = [
  {
    type: "NNN Retail",
    area: "East Orlando",
    capRate: "6.2%",
    price: "$1.8M",
    noi: "$111,600",
    leaseTerm: "15-Year Lease",
  },
  {
    type: "Medical Office",
    area: "Lake Nona Corridor",
    capRate: "5.8%",
    price: "$3.2M",
    noi: "$185,600",
    leaseTerm: "10-Year Lease (NNN)",
  },
  {
    type: "Industrial Flex",
    area: "Airport / SoDo",
    capRate: "7.1%",
    price: "$2.4M",
    noi: "$170,400",
    leaseTerm: "7-Year Lease",
  },
];

const steps = [
  {
    step: "1",
    title: "Tell Us Your Criteria",
    desc: "Share your target property types, investment range, preferred cap rates, and any geographic focus within Central Florida.",
  },
  {
    step: "2",
    title: "We Source & Vet Deals",
    desc: "Our team identifies off-market opportunities through direct owner outreach, brokerage relationships, and proprietary sourcing channels.",
  },
  {
    step: "3",
    title: "You Review & Decide",
    desc: "Receive curated deal packages with financials, market context, and our honest assessment. You choose what to pursue — no pressure.",
  },
];

export default function OrlandoCommercialRealEstateDealsPage() {
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
              name: "Off-Market Commercial Deals in Orlando",
              item: "https://maxlifedevelopment.com/orlando-commercial-real-estate-deals",
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-office-4k-wallpaper-1920x1080-city-3306146.webp"
          alt="Orlando commercial real estate deals and investment opportunities"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Exclusive Investor Access
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Off-Market Commercial Deals{" "}
            <span className="text-gold">in Orlando</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            Get exclusive access to investment-grade properties before they hit
            the market
          </p>
          <p className="text-gray-300 max-w-2xl">
            Orlando&apos;s commercial real estate market is one of the strongest
            in the Southeast — fueled by record population growth, a
            tourism-driven economy, and major infrastructure investment. But the
            best deals rarely make it to public listings. Our off-market pipeline
            gives you access to vetted opportunities that most investors never
            see.
          </p>
          <div className="mt-8">
            <a
              href="#get-deal-access"
              data-track="hero-cta-deals-landing"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get Off-Market Deal Access
            </a>
          </div>
        </div>
      </section>

      {/* Why Off-Market */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
            Why Off-Market?
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            The most compelling commercial real estate opportunities in Orlando
            are never publicly listed. Here&apos;s why our investors prefer
            off-market sourcing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market at a Glance */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
            Market at a Glance
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Orlando&apos;s fundamentals make it one of the most attractive
            commercial real estate markets in the country.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-gold text-3xl sm:text-4xl font-bold mb-1">
                  {item.stat}
                </p>
                <p className="text-white font-semibold text-sm mb-2">
                  {item.label}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link
              href="/markets/orlando-commercial-real-estate"
              className="text-gold hover:underline text-sm font-medium"
            >
              Explore our full Orlando market analysis &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Recent Deal Examples */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
            Recent Deal Examples
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            A sample of the types of off-market opportunities our investor
            network receives. Details anonymized for confidentiality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dealExamples.map((deal) => (
              <div
                key={deal.type + deal.area}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gold font-semibold">{deal.type}</span>
                  <span className="text-xs text-gray-500 bg-dark border border-white/10 rounded-full px-3 py-1">
                    {deal.area}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Cap Rate</span>
                    <span className="text-white font-semibold">
                      {deal.capRate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Price</span>
                    <span className="text-white font-semibold">
                      {deal.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">NOI</span>
                    <span className="text-white font-semibold">
                      {deal.noi}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <span className="text-gray-500 text-xs">
                      {deal.leaseTerm}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/deal-analyzer"
              className="text-gold hover:underline text-sm font-medium text-center"
            >
              Run your own deal analysis &rarr;
            </Link>
            <Link
              href="/blog/orlando-cap-rates-investor-guide"
              className="text-gold hover:underline text-sm font-medium text-center"
            >
              Read our Orlando cap rates guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
            How It Works
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Getting access to our off-market pipeline is straightforward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center"
              >
                <span className="inline-flex w-10 h-10 rounded-full bg-gold/20 text-gold font-bold items-center justify-center mb-4 text-lg">
                  {item.step}
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="get-deal-access" className="bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Get Deal Access
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Tell us what you&apos;re looking for and we&apos;ll add you to our
              off-market investor pipeline. No obligation — just real
              opportunities matched to your criteria.
            </p>
            <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText="Get Off-Market Deal Access"
                subjectPrefix="Off-Market Deal Access Request"
                source="orlando-deals-landing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Orlando Metro Cities We Cover */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
            Orlando Metro Cities We Cover
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            MaxLife Realty works every submarket within the Greater Orlando metro — from the I-4 urban core to the high-growth suburban corridors within an hour of downtown.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Winter Park", slug: "winter-park-commercial-real-estate" },
              { label: "Lake Mary", slug: "lake-mary-commercial-real-estate" },
              { label: "Lake Nona", slug: "lake-nona-commercial-real-estate" },
              { label: "Kissimmee", slug: "kissimmee-commercial-real-estate" },
              { label: "Sanford", slug: "sanford-commercial-real-estate" },
              { label: "Altamonte Springs", slug: "altamonte-springs-commercial-real-estate" },
              { label: "Winter Garden", slug: "winter-garden-commercial-real-estate" },
              { label: "Apopka", slug: "apopka-commercial-real-estate" },
              { label: "Oviedo", slug: "oviedo-commercial-real-estate" },
              { label: "Maitland", slug: "maitland-commercial-real-estate" },
              { label: "Clermont", slug: "clermont-commercial-real-estate" },
              { label: "Davenport", slug: "davenport-commercial-real-estate" },
              { label: "St. Cloud", slug: "st-cloud-commercial-real-estate" },
              { label: "Windermere", slug: "windermere-commercial-real-estate" },
              { label: "Celebration", slug: "celebration-commercial-real-estate" },
              { label: "Ocoee", slug: "ocoee-commercial-real-estate" },
              { label: "Winter Springs", slug: "winter-springs-commercial-real-estate" },
              { label: "Longwood", slug: "longwood-commercial-real-estate" },
              { label: "Casselberry", slug: "casselberry-commercial-real-estate" },
              { label: "Deltona", slug: "deltona-commercial-real-estate" },
              { label: "Poinciana", slug: "poinciana-commercial-real-estate" },
              { label: "Mount Dora", slug: "mount-dora-commercial-real-estate" },
              { label: "Leesburg", slug: "leesburg-commercial-real-estate" },
              { label: "Minneola", slug: "minneola-commercial-real-estate" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg px-4 py-3 text-gray-300 hover:text-gold text-sm font-medium transition-colors text-center"
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Internal Links */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore More Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/markets/orlando-commercial-real-estate"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Orlando Market Overview
            </Link>
            <Link
              href="/blog/how-to-buy-commercial-property-orlando"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              How to Buy CRE in Orlando
            </Link>
            <Link
              href="/deal-analyzer"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Deal Analyzer Tool
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
