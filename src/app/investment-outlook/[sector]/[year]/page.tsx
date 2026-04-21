import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSector, getOutlookParams, sectors } from "@/data/seo/outlooks";

interface PageProps {
  params: Promise<{ sector: string; year: string }>;
}

export async function generateStaticParams() {
  return getOutlookParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sector: sectorSlug, year } = await params;
  const sector = getSector(sectorSlug);
  const yearData = sector?.years.find((y) => y.year === Number(year));
  if (!sector || !yearData) return { title: "Outlook Not Found" };

  return {
    title: `${sector.name} Investment Outlook ${year} | Central Florida Commercial Real Estate`,
    description: `${sector.name} investment outlook for ${year} in Central Florida. Cap rates, rent growth, supply-demand analysis, key trends, and forward-looking view for Orlando-area ${sector.name.toLowerCase()} investors.`,
    keywords: [
      `${sector.name} outlook ${year}`,
      `${sector.name} investment ${year}`,
      `Central Florida ${sector.name.toLowerCase()}`,
      `Orlando ${sector.name.toLowerCase()} investment`,
      `commercial real estate outlook ${year}`,
    ],
    alternates: { canonical: `/investment-outlook/${sector.slug}/${year}` },
    openGraph: {
      title: `${sector.name} Investment Outlook ${year} | MaxLife Realty`,
      description: yearData.summary,
      url: `https://maxlifedevelopment.com/investment-outlook/${sector.slug}/${year}`,
    },
  };
}

export default async function OutlookPage({ params }: PageProps) {
  const { sector: sectorSlug, year } = await params;
  const sector = getSector(sectorSlug);
  const yearData = sector?.years.find((y) => y.year === Number(year));
  if (!sector || !yearData) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxlifedevelopment.com" },
      { "@type": "ListItem", position: 2, name: "Investment Outlook", item: "https://maxlifedevelopment.com/investment-outlook" },
      { "@type": "ListItem", position: 3, name: sector.name, item: `https://maxlifedevelopment.com/investment-outlook/${sector.slug}/${year}` },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: `${sector.name} Investment Outlook ${year}`,
    datePublished: `${year}-01-01`,
    author: { "@type": "Organization", name: "MaxLife Realty" },
    description: yearData.summary,
    about: sector.name,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border py-16 sm:py-20">
        <Image
          src="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-skyscraper-office-architecture-skyline-district-3939138.webp"
          alt="Central Florida commercial real estate sector investment outlook"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
            Central Florida · {year} Outlook
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {sector.name} Investment Outlook {year}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">{sector.description}</p>
          <p className="rounded-xl border border-gold/30 bg-gold/5 p-5 text-gray-200 leading-relaxed">
            {yearData.summary}
          </p>
        </div>
      </section>

      {/* Main report body */}
      <section className="border-b border-dark-border bg-dark-card py-14">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mb-3 text-xl font-bold text-white uppercase tracking-wider text-sm">
              Cap Rate Snapshot
            </h2>
            <p className="leading-relaxed text-gray-300">{yearData.capRateSnapshot}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white uppercase tracking-wider text-sm">
              Rent Growth
            </h2>
            <p className="leading-relaxed text-gray-300">{yearData.rentGrowth}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white uppercase tracking-wider text-sm">
              Supply &amp; Demand
            </h2>
            <p className="leading-relaxed text-gray-300">{yearData.supplyDemand}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white uppercase tracking-wider text-sm">
              Key Trends
            </h2>
            <ul className="space-y-2">
              {yearData.keyTrends.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 text-gold">▸</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white uppercase tracking-wider text-sm">
              Risks
            </h2>
            <ul className="space-y-2">
              {yearData.risks.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 text-red-400">⚠</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white uppercase tracking-wider text-sm">
              Forward Outlook
            </h2>
            <p className="leading-relaxed text-gray-300">{yearData.outlook}</p>
          </div>
        </div>
      </section>

      {/* Other sector outlooks */}
      <section className="border-b border-dark-border bg-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-white">Other {year} Sector Outlooks</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(sectors)
              .filter((s) => s.slug !== sector.slug)
              .map((s) => {
                const yr = s.years.find((y) => y.year === Number(year)) ? year : s.years[0]?.year;
                if (!yr) return null;
                return (
                  <Link
                    key={s.slug}
                    href={`/investment-outlook/${s.slug}/${yr}`}
                    className="rounded-xl border border-dark-border bg-dark-card p-4 transition-colors hover:border-gold/60"
                  >
                    <div className="font-semibold text-white">{s.name}</div>
                    <div className="mt-1 text-xs text-gray-400">{yr} outlook →</div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Looking to act on this outlook?
          </h2>
          <p className="mb-6 text-gray-400">
            MaxLife Realty works the Central Florida {sector.name.toLowerCase()} market every day.
            Get an introduction to available opportunities or request a current valuation on a
            property you already own.
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
