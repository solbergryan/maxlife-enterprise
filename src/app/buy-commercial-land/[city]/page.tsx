import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/seo/cities";

type Params = Promise<{ city: string }>;

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return { title: "Not Found" };

  return {
    title: `Buy Commercial Land in ${c.name}, FL — Development Sites`,
    description: `Buy commercial land and development sites in ${c.name}, Florida. On- and off-market land opportunities for NNN build-to-suit, retail, industrial, and mixed-use development. Sourced by MaxLife Development.`,
    alternates: { canonical: `/buy-commercial-land/${c.slug}` },
  };
}

export default async function BuyLandCityPage({
  params,
}: {
  params: Params;
}) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Commercial Land &amp; Development
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Buy Commercial Land in{" "}
            <span className="text-gold">{c.name}, Florida</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Source commercial land and development sites in {c.name} and
            surrounding {c.county}. MaxLife Development specializes in
            pre-entitled pad sites, rezoning-candidate parcels, and off-market
            land for NNN build-to-suit, retail, industrial, and mixed-use
            development across Central Florida.
          </p>
          <Link
            href={`/contact?interest=${encodeURIComponent(
              `Commercial Land in ${c.name}`
            )}`}
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Request {c.name} Land Inventory
          </Link>
        </div>
      </section>

      {/* Market Context */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Why Develop in <span className="text-gold">{c.name}</span>?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">{c.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Population
            </p>
            <p className="text-white font-semibold">{c.population}</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              County
            </p>
            <p className="text-white font-semibold">{c.county}</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4 col-span-2 md:col-span-1">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Location
            </p>
            <p className="text-white font-semibold text-sm">
              {c.distanceFromOrlando}
            </p>
          </div>
        </div>
      </section>

      {/* Land Types */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Land Types We Source in{" "}
          <span className="text-gold">{c.name}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Pad Sites (NNN BTS)",
              desc: "0.75 – 2 acre pad sites for Dollar General, AutoZone, QSR, and convenience store build-to-suit development.",
            },
            {
              title: "Retail Center Sites",
              desc: "3 – 10+ acre parcels for multi-tenant retail and grocery-anchored center development.",
            },
            {
              title: "Industrial / Flex Sites",
              desc: "5 – 50+ acre industrial development sites along I-4, Turnpike, and major logistics corridors.",
            },
            {
              title: "Mixed-Use Sites",
              desc: "Land zoned or entitled for multifamily + retail + office combinations in urban-infill and TOD locations.",
            },
            {
              title: "Pre-Entitled Sites",
              desc: "Sites with approved zoning, site plan, and permits — ready to break ground.",
            },
            {
              title: "Rezoning Candidates",
              desc: "Land with upside through rezoning or comprehensive plan amendment. We coordinate with land use attorneys.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-gold font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Why Source Land Through{" "}
          <span className="text-gold">MaxLife</span>
        </h2>
        <ul className="space-y-3">
          {[
            "Direct owner relationships for off-market land opportunities",
            "Active development experience — we know what makes a site work",
            "Tenant rep network for matching sites to BTS tenants",
            "Land use counsel referrals for entitlements and rezoning",
            "Civil engineering coordination for site feasibility",
            "Construction lender relationships for development financing",
            "Florida zoning and concurrency expertise",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-gray-300 text-sm"
            >
              <svg
                className="w-5 h-5 text-gold mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Request <span className="text-gold">{c.name}</span> Land Inventory
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Tell us your criteria — acreage, zoning, target use — and we&apos;ll
            send matching {c.name} land opportunities within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?interest=${encodeURIComponent(
                `Commercial Land ${c.name}`
              )}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request Inventory
            </Link>
            <Link
              href="/services/commercial-development"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Development Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
