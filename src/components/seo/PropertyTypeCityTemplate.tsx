import Image from "next/image";
import Link from "next/link";
import type { CityData } from "@/data/seo/cities";
import type { PropertyTypeData } from "@/data/seo/propertyTypes";
import { fillTemplate } from "@/data/seo/propertyTypes";

interface Props {
  propertyType: PropertyTypeData;
  city: CityData;
}

const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  "office-space": {
    src: "/images/commercial-stock/office-buildings/maxlife-office-buildings-building-tower-architecture-city-construction-business-911688.webp",
    alt: "Office tower with cityscape",
  },
  retail: {
    src: "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-buildings-city-coffee-shop-doors-street-1836478.webp",
    alt: "Retail storefronts on city street",
  },
  industrial: {
    src: "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
    alt: "Industrial warehouse and shipping containers",
  },
  "nnn-properties": {
    src: "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-architecture-building-convenience-store-grocery-people-2577330.webp",
    alt: "NNN single-tenant retail property",
  },
};

/**
 * Shared rendering shell for every /<property-type>/[city] SEO page.
 * Each route file is a thin wrapper that passes the property type and
 * looked-up city into this template.
 */
export default function PropertyTypeCityTemplate({ propertyType, city }: Props) {
  const vars = { city: city.name, county: city.county, population: city.population };
  const headline = fillTemplate(propertyType.headline, vars);
  const intro = fillTemplate(propertyType.intro, vars);

  // JSON-LD for the local business + breadcrumb
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxlifedevelopment.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: propertyType.name,
        item: `https://maxlifedevelopment.com/${propertyType.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://maxlifedevelopment.com/${propertyType.slug}/${city.slug}`,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${propertyType.name} in ${city.name}, FL`,
    provider: {
      "@type": "RealEstateAgent",
      name: "MaxLife Realty",
      url: "https://maxlifedevelopment.com",
      telephone: "(321) 586-2121",
    },
    areaServed: { "@type": "City", name: city.name },
    serviceType: propertyType.name,
    description: intro,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border py-16 sm:py-20">
        {HERO_IMAGES[propertyType.slug] && (
          <>
            <Image
              src={HERO_IMAGES[propertyType.slug].src}
              alt={HERO_IMAGES[propertyType.slug].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
          </>
        )}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
            {propertyType.name} · {city.county}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {headline}
          </h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300">{intro}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-gold">
              Cap Rates: {propertyType.capRateRange}
            </span>
            <span className="rounded-full border border-dark-border bg-dark-card px-4 py-1.5 text-gray-300">
              Population: ~{city.population}
            </span>
            <span className="rounded-full border border-dark-border bg-dark-card px-4 py-1.5 text-gray-300">
              {city.distanceFromOrlando}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-gold px-6 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
            >
              Request available {propertyType.name.toLowerCase()} →
            </Link>
            <Link
              href="/deal-analyzer"
              className="rounded-lg border border-gold bg-transparent px-6 py-3 text-base font-semibold text-gold transition-colors hover:bg-gold hover:text-dark"
            >
              Run the numbers
            </Link>
          </div>
        </div>
      </section>

      {/* About the city */}
      <section className="border-b border-dark-border bg-dark-card py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">About {city.name}</h2>
          <p className="mb-6 text-gray-300 leading-relaxed">{city.description}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Market highlights</h3>
              <ul className="space-y-2 text-gray-300">
                {city.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Major employers</h3>
              <ul className="space-y-2 text-gray-300">
                {city.topEmployers.map((e, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">•</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Demographics</h3>
              <p className="text-gray-300">{city.demographics}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-dark-border bg-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
            Why Invest in {propertyType.name} in {city.name}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {propertyType.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-dark-border bg-dark-card p-4 text-gray-300">
                <span className="mt-0.5 text-gold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Typical tenants */}
      <section className="border-b border-dark-border bg-dark-card py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Typical {propertyType.name} Tenants in {city.name}
          </h2>
          <p className="mb-5 text-gray-400">{propertyType.investmentStrategy}</p>
          <div className="flex flex-wrap gap-2">
            {propertyType.typicalTenants.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-dark-border bg-dark px-4 py-2 text-sm text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local narrative sections */}
      <section className="border-b border-dark-border bg-dark py-14">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {propertyType.localSections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-3 text-2xl font-bold text-white">{fillTemplate(section.heading, vars)}</h2>
              <p className="leading-relaxed text-gray-300">{fillTemplate(section.content, vars)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Looking for {propertyType.name.toLowerCase()} in {city.name}?
          </h2>
          <p className="mb-6 text-gray-400">
            Ryan Solberg and the MaxLife Realty team work {city.name} and the surrounding Central
            Florida markets every day. We source on-market and off-market opportunities, underwrite
            them against institutional standards, and help clients close with confidence.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
