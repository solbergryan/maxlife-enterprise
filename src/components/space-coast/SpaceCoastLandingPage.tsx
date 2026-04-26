import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import TenantInquiryForm from "./TenantInquiryForm";
import AgentCard from "./AgentCard";
import { spaceCoastDrivers } from "@/data/space-coast/drivers";
import {
  spaceCoastPageConfigs,
  type SpaceCoastPageConfig,
} from "@/data/space-coast/page-configs";
import { spaceCoastCities, getCity } from "@/data/space-coast/cities";
import { saleTypes, leaseTypes } from "@/data/space-coast/property-types";
import { spaceCoastAgent } from "@/data/space-coast/agent";

const SITE_URL = "https://maxlifedevelopment.com";

function relatedHref(slug: string) {
  // Special-case absolute paths or external/legacy slugs already containing slashes.
  if (slug.startsWith("http") || slug.startsWith("/")) return slug;
  if (slug.includes("/")) return `/${slug}`;
  // If slug exists in our config map, it's a Space Coast top-level page.
  const inConfig = spaceCoastPageConfigs.find((c) => c.slug === slug);
  if (inConfig) return `/${slug}`;
  // Otherwise, treat as an existing top-level page on the site.
  return `/${slug}`;
}

export default function SpaceCoastLandingPage({
  config,
}: {
  config: SpaceCoastPageConfig;
}) {
  const isLease = config.side === "lease";
  const ctaAnchor = isLease ? "tenant-search" : "buyer-request";
  const city = config.citySlug ? getCity(config.citySlug) : undefined;

  // For type pages: list cities as submarkets. For city pages: list neighborhoods. For hub: cities.
  const submarkets =
    config.kind === "city-sale" || config.kind === "city-lease"
      ? city?.neighborhoods.map((n) => ({ name: n.name, desc: n.desc, href: undefined as string | undefined }))
      : spaceCoastCities
          .filter((c) =>
            isLease
              ? ["melbourne", "merritt-island", "cocoa-beach", "rockledge"].includes(c.slug)
              : ["melbourne", "titusville", "merritt-island", "cocoa", "cocoa-beach", "palm-bay"].includes(c.slug),
          )
          .map((c) => ({
            name: c.name,
            desc: c.blurb,
            href: c.hubSlug ? `/${c.hubSlug}` : undefined,
          }));

  // Property-type cards for hub pages: show every type on the relevant side.
  const showTypeGrid = config.kind === "hub-sale" || config.kind === "hub-lease";
  const typesToShow = isLease ? leaseTypes : saleTypes;

  // Use city drivers if scoped to a city, otherwise the regional drivers.
  const drivers =
    city?.drivers && config.kind !== "hub-sale" && config.kind !== "hub-lease"
      ? city.drivers.map((d, i) => ({
          title: spaceCoastDrivers[i % spaceCoastDrivers.length].title,
          desc: d,
        }))
      : spaceCoastDrivers;

  // JSON-LD: BreadcrumbList + Place + Service + FAQPage
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: config.title,
        item: `${SITE_URL}/${config.slug}`,
      },
    ],
  };

  const placeOrService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    provider: {
      "@type": "RealEstateAgent",
      name: "MaxLife Realty",
      url: SITE_URL,
      telephone: spaceCoastAgent.phone,
      email: spaceCoastAgent.email,
    },
    areaServed: city
      ? [{ "@type": "City", name: city.name }, { "@type": "County", name: "Brevard County" }]
      : [
          { "@type": "AdministrativeArea", name: "Space Coast" },
          { "@type": "County", name: "Brevard County" },
          { "@type": "State", name: "Florida" },
        ],
    serviceType: isLease
      ? "Commercial real estate tenant representation"
      : "Commercial real estate brokerage",
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
      <JsonLd data={placeOrService} />
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
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            {config.kicker}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {config.title}
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            {config.subhead}
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            {config.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`#${ctaAnchor}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              {config.ctaLabel}
            </a>
            <a
              href={spaceCoastAgent.phoneHref}
              className="inline-block border border-gold/40 hover:bg-gold/10 text-gold font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              Call {spaceCoastAgent.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Market at a glance */}
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
            Market figures are anonymized aggregates compiled from active
            Brevard County listings (Stellar MLS / Space Coast Association of
            Realtors snapshot, 2026-Q2). Numbers are bucketed and intended as a
            market overview, not a substitute for current MLS detail.
          </p>
        </div>
      </section>

      {/* Submarkets / cities */}
      {submarkets && submarkets.length > 0 && (
        <section className="bg-white/[0.03] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {config.kind === "city-sale" || config.kind === "city-lease"
                ? `${city?.name} Submarkets`
                : "Space Coast Cities We Cover"}
            </h2>
            <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
              {config.kind === "city-sale" || config.kind === "city-lease"
                ? city?.longBlurb
                : "Active inventory and tenant demand vary meaningfully across the Space Coast. Each submarket has its own corridor dynamics, tenant base, and pricing profile."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submarkets.map((s) => {
                const Wrapper = s.href ? Link : "div";
                const wrapperProps = s.href ? { href: s.href } : {};
                return (
                  <Wrapper
                    key={s.name}
                    {...(wrapperProps as { href: string })}
                    className={`bg-white/[0.04] border border-white/10 rounded-xl p-6 transition-colors ${s.href ? "hover:border-gold/40 cursor-pointer" : ""}`}
                  >
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {s.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                    {s.href && (
                      <p className="mt-3 text-gold text-xs font-semibold tracking-wide uppercase">
                        Explore {s.name} →
                      </p>
                    )}
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Property type grid (hubs only) */}
      {showTypeGrid && (
        <section className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {isLease
                ? "Property Types We Lease"
                : "Property Types We Sell"}
            </h2>
            <p className="text-gray-300 max-w-3xl mb-12">
              {isLease
                ? "We represent tenants across every active lease segment on the Space Coast."
                : "We work every property type on the Space Coast — small owner-user buildings to institutional plays."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {typesToShow.map((t) => (
                <Link
                  key={t.slug}
                  href={`/${t.hubSlug}`}
                  className="bg-dark border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors flex flex-col"
                >
                  <h3 className="text-gold font-semibold mb-2">{t.label}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    {t.primer}
                  </p>
                  <p className="mt-4 text-gold text-xs font-semibold tracking-wide uppercase">
                    Explore {t.shortLabel} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Drivers / Why Space Coast */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {city ? `Why ${city.name}` : "Why the Space Coast"}
          </h2>
          <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
            {config.driversIntro ??
              "The Space Coast economy is anchored by aerospace and defense, the Kennedy Space Center launch cadence, the expanding Melbourne airport, Port Canaveral, and steady population growth. These drivers shape every sub-segment of commercial real estate demand."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drivers.slice(0, 6).map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{d.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent card */}
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AgentCard context={isLease ? "tenant" : "buyer"} />
        </div>
      </section>

      {/* CTA / Form */}
      <section
        id={ctaAnchor}
        className="bg-white/[0.03] border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              {isLease
                ? "Find Your Next Space Coast Space"
                : "Get Matched with Space Coast Inventory"}
            </h2>
            <p className="text-gray-300 text-center mb-8">
              {isLease
                ? "Tell us your size, use, city, and move-in window — we'll source matching availability and represent you through executed lease."
                : "Tell us your investment criteria — type, size, geography, budget — and we'll source on- and off-market matches across Brevard County."}
            </p>
            <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-8">
              {isLease ? (
                <TenantInquiryForm
                  buttonText={config.ctaLabel}
                  subjectPrefix={`Space Coast Tenant — ${config.title}`}
                  source={config.slug}
                  defaultUseType={
                    config.typeSlug === "office-space-for-lease"
                      ? "Office"
                      : config.typeSlug === "retail-space-for-lease"
                        ? "Retail"
                        : config.typeSlug === "warehouse-for-lease"
                          ? "Warehouse / Industrial"
                          : undefined
                  }
                />
              ) : (
                <LeadCaptureForm
                  buttonText={config.ctaLabel}
                  subjectPrefix={`Space Coast Buyer — ${config.title}`}
                  source={config.slug}
                />
              )}
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
            Explore Related Space Coast Pages
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            {config.related.map((r) => (
              <Link
                key={r.slug}
                href={relatedHref(r.slug)}
                className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                {r.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
