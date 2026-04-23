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
    title: `Buy Retail Property in ${c.name}, FL — Shopping Centers & Retail`,
    description: `Buy retail commercial real estate in ${c.name}, Florida. Shopping centers, strip retail, pad sites, grocery-anchored centers, and mixed-use retail opportunities. Sourced by MaxLife Development.`,
    alternates: { canonical: `/buy-retail-property/${c.slug}` },
  };
}

export default async function BuyRetailCityPage({
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
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Retail Real Estate
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Buy Retail Property in{" "}
            <span className="text-gold">{c.name}, Florida</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Source retail commercial real estate opportunities in {c.name} and
            surrounding {c.county}. From single-tenant NNN pads to
            grocery-anchored shopping centers and strip retail, MaxLife
            Development sources on- and off-market retail investments across
            Central Florida.
          </p>
          <Link
            href={`/contact?interest=${encodeURIComponent(
              `Retail Property in ${c.name}`
            )}`}
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Request {c.name} Retail Inventory
          </Link>
        </div>
      </section>

      {/* Market */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          {c.name} Retail{" "}
          <span className="text-gold">Market Overview</span>
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">{c.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Population
            </p>
            <p className="text-white font-semibold">{c.population}</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              County
            </p>
            <p className="text-white font-semibold">{c.county}</p>
          </div>
        </div>
      </section>

      {/* Retail Types */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Retail Types We Source in{" "}
          <span className="text-gold">{c.name}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Single-Tenant NNN Retail",
              desc: "Walgreens, CVS, Dollar General, AutoZone, Chick-fil-A, Starbucks — passive income with credit tenants.",
              capRate: "5.5% – 7.0%",
            },
            {
              title: "Multi-Tenant Strip Retail",
              desc: "6,000 – 20,000 SF strip centers with 5-10 tenants. Diversified income with value-add upside.",
              capRate: "6.5% – 8.0%",
            },
            {
              title: "Grocery-Anchored Centers",
              desc: "100,000+ SF neighborhood centers anchored by Publix, Whole Foods, Sprouts, or Aldi.",
              capRate: "6.0% – 7.5%",
            },
            {
              title: "Power Centers",
              desc: "200,000+ SF centers with multiple big-box anchors (Target, Best Buy, HomeGoods).",
              capRate: "7.0% – 8.5%",
            },
            {
              title: "Pad Sites / Outparcels",
              desc: "Freestanding pad sites — QSR, fuel, small retail on 0.5 – 1.5 acre parcels.",
              capRate: "5.0% – 6.5%",
            },
            {
              title: "Mixed-Use Retail",
              desc: "Ground-floor retail with residential or office above. Urban-infill and TOD locations.",
              capRate: "5.5% – 7.0%",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-dark-border rounded-xl p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-gold font-semibold">{item.title}</h3>
                <span className="text-xs font-semibold bg-gold/10 text-gold px-2 py-1 rounded shrink-0">
                  {item.capRate}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          How We Source <span className="text-gold">Retail Deals</span>
        </h2>
        <ul className="space-y-3">
          {[
            "Direct owner outreach for off-market opportunities",
            "Relationships with institutional owners for portfolio dispositions",
            "Underwriting of every retail center (rent roll, TI expenses, CAM reconciliation)",
            "Tenant credit analysis and lease review",
            "Market rent analysis for value-add upside identification",
            "Environmental and structural due diligence coordination",
            "Financing sourcing across conventional, CMBS, and bridge lenders",
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
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Request <span className="text-gold">{c.name}</span> Retail Inventory
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Share your investment criteria — cap rate target, tenant type,
            price range — and we&apos;ll send matching {c.name} retail
            opportunities within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?interest=${encodeURIComponent(
                `Retail Property ${c.name}`
              )}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request Inventory
            </Link>
            <Link
              href="/nnn-tenants"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Browse Tenants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
