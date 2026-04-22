import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/data/seo/cities";
import { nearbyCities, regionForCounty } from "@/lib/seo-regions";

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
    title: `Buy NNN Property in ${c.name}, FL — Investment Real Estate`,
    description: `Buy NNN investment properties in ${c.name}, Florida. Access on- and off-market single-tenant net lease deals with investment-grade tenants. MaxLife Development sources NNN real estate for 1031 and passive investors.`,
    alternates: { canonical: `/buy-nnn-property/${c.slug}` },
  };
}

export default async function BuyNNNCityPage({
  params,
}: {
  params: Params;
}) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  const nearby = nearbyCities(c.slug, 8);
  const region = regionForCounty(c.county);

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-xs text-gray-500"
      >
        <Link href="/" className="hover:text-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/buy-nnn-property" className="hover:text-gold">
          Buy NNN Property
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-400">{c.name}</span>
      </nav>

      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Buy NNN Real Estate
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Buy NNN Properties in{" "}
            <span className="text-gold">{c.name}, Florida</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Access on- and off-market single-tenant net lease investment
            opportunities in {c.name}. MaxLife Development sources NNN
            properties with investment-grade tenants — Walgreens, CVS,
            AutoZone, Dollar General, Chick-fil-A — for 1031 exchange buyers,
            family offices, and passive investors across {c.county}.
          </p>
          <Link
            href={`/contact?interest=${encodeURIComponent(`Buy NNN in ${c.name}`)}`}
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Request {c.name} NNN Inventory
          </Link>
        </div>
      </section>

      {/* Market Context */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Why Invest in <span className="text-gold">{c.name} NNN</span>?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">{c.description}</p>
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

      {/* Tenant Categories Available */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          NNN Tenants We Source in{" "}
          <span className="text-gold">{c.name}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Pharmacies",
              tenants: "Walgreens, CVS Pharmacy",
              capRate: "5.5% – 7.0%",
              term: "20-25 yrs",
            },
            {
              title: "Dollar Stores",
              tenants: "Dollar General, Dollar Tree, Family Dollar",
              capRate: "5.5% – 6.75%",
              term: "10-15 yrs",
            },
            {
              title: "Auto Parts",
              tenants: "AutoZone, O'Reilly, Advance Auto",
              capRate: "5.25% – 6.5%",
              term: "15-20 yrs",
            },
            {
              title: "QSR Drive-Thru",
              tenants: "Chick-fil-A, McDonald's, Starbucks, Taco Bell",
              capRate: "4.5% – 6.0%",
              term: "15-20 yrs",
            },
            {
              title: "Convenience / Fuel",
              tenants: "Wawa, 7-Eleven, RaceTrac",
              capRate: "4.75% – 5.75%",
              term: "15-20 yrs",
            },
            {
              title: "Medical / Dialysis",
              tenants: "DaVita, Fresenius, Urgent Care",
              capRate: "6.0% – 7.25%",
              term: "10-15 yrs",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="bg-dark-card border border-dark-border rounded-xl p-5"
            >
              <h3 className="text-gold font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{cat.tenants}</p>
              <div className="flex gap-4 text-xs">
                <span className="text-gray-500">
                  Cap: <span className="text-white">{cat.capRate}</span>
                </span>
                <span className="text-gray-500">
                  Term: <span className="text-white">{cat.term}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Why Buy Through <span className="text-gold">MaxLife</span>
        </h2>
        <ul className="space-y-3">
          {[
            "Direct access to off-market NNN inventory not on Crexi or LoopNet",
            "1031 exchange coordination (45-day / 180-day timelines)",
            "Tenant credit analysis and lease review",
            "Underwriting packages and pro formas within 48 hours",
            "Commercial lender relationships for fast financing",
            "Closing coordination with attorneys, title, and QIs",
            "Post-closing support for ongoing portfolio needs",
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

      {/* Nearby Cities */}
      {nearby.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-dark-border">
          <h2 className="text-2xl font-bold text-white mb-2">
            Nearby <span className="text-gold">{region} NNN Markets</span>
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            We also source NNN inventory in these nearby cities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/buy-nnn-property/${n.slug}`}
                className="block bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-gold transition-colors"
              >
                NNN in {n.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/buy-nnn-property"
              className="text-gold hover:underline text-sm font-medium"
            >
              View all Florida NNN markets →
            </Link>
          </div>
        </section>
      )}

      {/* Related Research */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-dark-border">
        <h2 className="text-2xl font-bold text-white mb-6">
          Related <span className="text-gold">Research</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/investment-outlook/nnn/2026"
            className="block bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-1 text-sm">
              NNN Sector Outlook 2026
            </h3>
            <p className="text-gray-400 text-xs">
              Cap rate trends, tenant demand, and forward view.
            </p>
          </Link>
          <Link
            href="/cap-rates"
            className="block bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-1 text-sm">
              Cap Rates by Submarket
            </h3>
            <p className="text-gray-400 text-xs">
              Submarket-level cap rate ranges across Central Florida.
            </p>
          </Link>
          <Link
            href="/1031-exchange-florida"
            className="block bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors"
          >
            <h3 className="text-gold font-semibold mb-1 text-sm">
              1031 Exchange Guide
            </h3>
            <p className="text-gray-400 text-xs">
              Timelines, rules, and replacement property strategy.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Request <span className="text-gold">{c.name}</span> NNN Inventory
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Tell us your criteria — tenant type, cap rate, price range — and
            we&apos;ll send matching NNN opportunities in {c.name} and
            surrounding {c.county} within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?interest=${encodeURIComponent(`Buy NNN Properties ${c.name}`)}`}
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
