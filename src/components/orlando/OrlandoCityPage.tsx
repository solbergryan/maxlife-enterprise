import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { orlandoAgent } from "@/data/orlando/agent";
import { saleTypes } from "@/data/orlando/property-types";
import type { OrlandoPageConfig } from "@/data/orlando/page-configs";

const SITE_URL = "https://maxlifedevelopment.com";

export default function OrlandoCityPage({ config }: { config: OrlandoPageConfig }) {
  const { city } = config;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Orlando Metro CRE",
        item: `${SITE_URL}/orlando-commercial-real-estate-deals`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${city.name} Commercial Real Estate`,
        item: `${SITE_URL}/${config.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name} Commercial Real Estate`,
    provider: {
      "@type": "RealEstateAgent",
      name: "MaxLife Realty",
      url: SITE_URL,
      telephone: orlandoAgent.phone,
      email: orlandoAgent.email,
    },
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "County", name: city.county },
      { "@type": "State", name: "Florida" },
    ],
    serviceType: "Commercial real estate brokerage",
    description: config.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
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
          src={config.heroImage}
          alt={config.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <Link
            href="/orlando-commercial-real-estate-deals"
            className="text-gold hover:underline text-sm mb-4 inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Orlando Metro CRE
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            {config.kicker}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {city.name} Commercial Real Estate
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            {config.subhead}
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            {config.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#buyer-request"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              {config.ctaLabel}
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

      {/* Market at a Glance */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {config.stats.headline}
          </h2>
          <p className="text-gray-300 max-w-3xl mb-8 leading-relaxed">
            {config.stats.blurb}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {config.stats.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
              >
                <p className="text-gold text-2xl font-bold mb-1">{s.value}</p>
                <p className="text-white text-sm font-medium">{s.label}</p>
                {s.hint && (
                  <p className="text-gray-500 text-xs mt-1">{s.hint}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6 max-w-3xl">
            Market figures are estimates compiled from active Central Florida listings (Stellar MLS / CoStar snapshot, 2026-Q1). Numbers are intended as a market overview, not a substitute for current MLS or CoStar detail.
          </p>
        </div>
      </section>

      {/* City Overview */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                About {city.name}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{city.description}</p>
              <div className="space-y-3">
                {city.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <span className="text-gold text-lg leading-none mt-0.5">›</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Market Facts</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-400">County</dt>
                    <dd className="text-white font-medium">{city.county}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-400">Population</dt>
                    <dd className="text-white font-medium">{city.population}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-gray-400">Location</dt>
                    <dd className="text-white font-medium">{city.distanceFromOrlando}</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Top Employers</h3>
                <ul className="space-y-2">
                  {city.topEmployers.map((emp) => (
                    <li key={emp} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {emp}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-2">Demographics</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{city.demographics}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Property Types We Work in {city.name}
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12">
            MaxLife Realty works every commercial property type across the {city.name} trade area — from small owner-user buildings to institutional investment sales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.hubSlug}`}
                className="bg-dark border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors flex flex-col"
              >
                <h3 className="text-gold font-semibold mb-2">{t.label}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{t.primer}</p>
                <p className="mt-4 text-gold text-xs font-semibold tracking-wide uppercase">
                  Explore {t.shortLabel} →
                </p>
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
              <p className="text-gold text-xs tracking-widest uppercase mb-1">
                Your {city.name} CRE Broker
              </p>
              <h3 className="text-white text-xl font-semibold mb-1">{orlandoAgent.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{orlandoAgent.title}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{orlandoAgent.bio}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={orlandoAgent.phoneHref}
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-4 py-2 rounded-md text-sm transition-colors"
                >
                  {orlandoAgent.phone}
                </a>
                <a
                  href={`mailto:${orlandoAgent.email}`}
                  className="inline-flex items-center gap-2 border border-gold/40 hover:bg-gold/10 text-gold font-semibold px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Email
                </a>
                <Link
                  href={orlandoAgent.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-gold/40 text-gray-300 hover:text-gold font-semibold px-4 py-2 rounded-md text-sm transition-colors"
                >
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

      {/* Lead Capture Form */}
      <section id="buyer-request" className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Get Matched with {city.name} Inventory
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Tell us your investment criteria — property type, size, budget, and timeline — and we&apos;ll source on- and off-market matches throughout {city.name} and {city.county}.
            </p>
            <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText={config.ctaLabel}
                subjectPrefix={`Orlando Metro Buyer — ${city.name} CRE`}
                source={config.slug}
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
            {config.faqs.map((f) => (
              <div
                key={f.q}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold text-lg mb-3">{f.q}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore Related Orlando Metro Pages
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {config.related.map((r) => (
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
