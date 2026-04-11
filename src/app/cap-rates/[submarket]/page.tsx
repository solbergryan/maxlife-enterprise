import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSubmarketBySlug,
  getAllSubmarketSlugs,
  submarkets,
} from "@/data/seo/submarkets";

interface PageProps {
  params: Promise<{ submarket: string }>;
}

export async function generateStaticParams() {
  return getAllSubmarketSlugs().map((submarket) => ({ submarket }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { submarket } = await params;
  const data = getSubmarketBySlug(submarket);
  if (!data) return { title: "Submarket Not Found" };

  return {
    title: `${data.name} Cap Rates | Central Florida Commercial Real Estate`,
    description: `Current commercial real estate cap rates in ${data.name}, Central Florida. Office, retail, industrial, multifamily, and medical office cap rate ranges with trend analysis.`,
    keywords: [
      `${data.name} cap rates`,
      `${data.name} commercial real estate`,
      `Central Florida cap rates`,
      `Orlando commercial real estate`,
    ],
    alternates: { canonical: `/cap-rates/${data.slug}` },
    openGraph: {
      title: `${data.name} Cap Rates | MaxLife Realty`,
      description: data.summary,
      url: `https://maxlifedevelopment.com/cap-rates/${data.slug}`,
    },
  };
}

function TrendBadge({ trend }: { trend: "firming" | "stable" | "softening" }) {
  const styles =
    trend === "firming"
      ? "border-green-500/30 bg-green-500/10 text-green-400"
      : trend === "softening"
      ? "border-red-500/30 bg-red-500/10 text-red-400"
      : "border-gold/30 bg-gold/5 text-gold";
  const label = trend === "firming" ? "↑ Firming" : trend === "softening" ? "↓ Softening" : "→ Stable";
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${styles}`}>
      {label}
    </span>
  );
}

export default async function CapRatesPage({ params }: PageProps) {
  const { submarket } = await params;
  const data = getSubmarketBySlug(submarket);
  if (!data) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://maxlifedevelopment.com" },
      { "@type": "ListItem", position: 2, name: "Cap Rates", item: "https://maxlifedevelopment.com/cap-rates" },
      { "@type": "ListItem", position: 3, name: data.name, item: `https://maxlifedevelopment.com/cap-rates/${data.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="border-b border-dark-border bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
            Central Florida Cap Rates
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {data.name} Cap Rates
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">{data.summary}</p>
        </div>
      </section>

      {/* Cap rate table */}
      <section className="border-b border-dark-border bg-dark-card py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
            {data.name} Cap Rates by Asset Class
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="py-3 pr-4 font-semibold text-gray-400 uppercase text-xs tracking-wider">Asset Class</th>
                  <th className="py-3 px-4 font-semibold text-gray-400 uppercase text-xs tracking-wider">Cap Rate Range</th>
                  <th className="py-3 px-4 font-semibold text-gray-400 uppercase text-xs tracking-wider">Trend</th>
                  <th className="py-3 pl-4 font-semibold text-gray-400 uppercase text-xs tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-border">
                {data.capRates.map((row) => (
                  <tr key={row.assetClass}>
                    <td className="py-4 pr-4 font-semibold text-white">{row.assetClass}</td>
                    <td className="py-4 px-4 text-gold font-semibold whitespace-nowrap">{row.range}</td>
                    <td className="py-4 px-4"><TrendBadge trend={row.trend} /></td>
                    <td className="py-4 pl-4 text-gray-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Cap rate ranges are directional estimates based on Central Florida transactional data and
            are updated quarterly. For deal-specific pricing, contact MaxLife Realty for a current
            valuation.
          </p>
        </div>
      </section>

      {/* Demand drivers */}
      <section className="border-b border-dark-border bg-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
            What Drives Demand in {data.name}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.demandDrivers.map((d, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-dark-border bg-dark-card p-4 text-gray-300">
                <span className="mt-0.5 text-gold">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outlook */}
      <section className="border-b border-dark-border bg-dark-card py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            {data.name} Cap Rate Outlook
          </h2>
          <p className="leading-relaxed text-gray-300">{data.outlook}</p>
        </div>
      </section>

      {/* Other submarkets */}
      <section className="border-b border-dark-border bg-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-xl font-bold text-white">Other Central Florida Submarkets</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {submarkets
              .filter((s) => s.slug !== data.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/cap-rates/${s.slug}`}
                  className="rounded-xl border border-dark-border bg-dark-card p-4 transition-colors hover:border-gold/60"
                >
                  <div className="font-semibold text-white">{s.name}</div>
                  <div className="mt-1 text-xs text-gray-400">View cap rates →</div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Looking to buy or sell in {data.name}?
          </h2>
          <p className="mb-6 text-gray-400">
            We work {data.name} and the surrounding Central Florida submarkets every day. Get a
            current valuation or view available opportunities in the submarket.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
          >
            Request a valuation →
          </Link>
        </div>
      </section>
    </>
  );
}
