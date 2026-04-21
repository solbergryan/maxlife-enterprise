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
    title: `Sell Commercial Property in ${c.name}, FL — Free Valuation`,
    description: `Sell your commercial real estate in ${c.name}, Florida. Get a free property valuation from MaxLife Development — licensed FL broker specializing in NNN, retail, office, industrial, and land sales.`,
    alternates: { canonical: `/sell-commercial-property/${c.slug}` },
  };
}

export default async function SellCommercialPage({
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
            Sell Your Property
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sell Commercial Property in{" "}
            <span className="text-gold">{c.name}, Florida</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Get a free, no-obligation valuation of your {c.name} commercial
            property. MaxLife Development is a licensed Florida commercial
            real estate broker specializing in{" "}
            <strong className="text-white">maximizing seller proceeds</strong>{" "}
            through professional marketing, institutional-grade underwriting,
            and a deep buyer network across {c.county}.
          </p>
          <Link
            href={`/contact?interest=${encodeURIComponent(`Sell Commercial Property in ${c.name}`)}`}
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Request Free Valuation
          </Link>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          {c.name}, FL <span className="text-gold">Market Snapshot</span>
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">{c.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          <div className="bg-dark-card border border-dark-border rounded-lg p-4 col-span-2 md:col-span-1">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Proximity
            </p>
            <p className="text-white font-semibold text-sm">
              {c.distanceFromOrlando}
            </p>
          </div>
        </div>
      </section>

      {/* Property Types We Sell */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Property Types <span className="text-gold">We Sell</span> in {c.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "NNN Investment Properties",
            "Retail Shopping Centers",
            "Office Buildings",
            "Industrial / Warehouse",
            "Multi-Tenant Retail",
            "Medical Office",
            "Commercial Land",
            "Development Sites",
            "Multifamily (5+ units)",
            "Mixed-Use Properties",
            "Self-Storage",
            "Special Purpose",
          ].map((t) => (
            <div
              key={t}
              className="bg-dark-card border border-dark-border rounded-lg p-3 text-sm text-gray-300 text-center hover:border-gold/30 transition-colors"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Why Sell Your {c.name} Property with{" "}
          <span className="text-gold">MaxLife Development</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Institutional-Grade Marketing",
              desc: "Professional offering memorandums, aerial photography, and distribution through Crexi, LoopNet, and direct investor networks.",
            },
            {
              title: "Deep Buyer Network",
              desc: "Relationships with 1031 exchange buyers, family offices, institutional investors, and private capital actively deploying into Central Florida.",
            },
            {
              title: "Competitive Pricing Analysis",
              desc: "We underwrite your property like a buyer would — identifying every value driver and pricing to maximize competitive bidding.",
            },
            {
              title: "Florida Market Expertise",
              desc: "Deep knowledge of Orlando, Brevard, Lake, Seminole, and surrounding counties. We know the sub-markets, tenants, and cap rate trends.",
            },
            {
              title: "Transaction Execution",
              desc: "From offering memorandum through closing, we coordinate with buyers, attorneys, title companies, and lenders to keep deals on track.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-dark-border rounded-lg p-5"
            >
              <h3 className="text-gold font-semibold mb-2">{item.title}</h3>
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
          Our <span className="text-gold">Selling Process</span>
        </h2>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Free Valuation",
              desc: "Submit your property details. We respond within 48 hours with a market-based opinion of value.",
            },
            {
              step: "02",
              title: "Listing Agreement",
              desc: "If pricing aligns, we sign a listing agreement with clear terms on commission, timeline, and marketing strategy.",
            },
            {
              step: "03",
              title: "Offering Memorandum",
              desc: "We produce a professional OM with underwriting, market analysis, photography, and aerial imagery within 2-3 weeks.",
            },
            {
              step: "04",
              title: "Marketing Launch",
              desc: "Property goes live on Crexi, LoopNet, and directly to our buyer network with targeted email campaigns.",
            },
            {
              step: "05",
              title: "Offer Negotiation",
              desc: "We drive competitive bidding, negotiate LOI terms, and coordinate due diligence through closing.",
            },
            {
              step: "06",
              title: "Closing",
              desc: "Typical timeline: 60-120 days from listing to closed sale.",
            },
          ].map((p) => (
            <div
              key={p.step}
              className="flex gap-4 bg-dark-card border border-dark-border rounded-lg p-5"
            >
              <div className="text-3xl font-bold text-gold/40 shrink-0">
                {p.step}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Sell Your{" "}
            <span className="text-gold">{c.name}</span> Property?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Submit your property details for a free, no-obligation valuation.
            We respond within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?interest=${encodeURIComponent(`Sell ${c.name} Commercial Property`)}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request Free Valuation
            </Link>
            <a
              href="tel:3215862121"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
