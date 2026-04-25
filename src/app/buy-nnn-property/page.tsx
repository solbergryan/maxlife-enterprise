import type { Metadata } from "next";
import Link from "next/link";
import { groupCitiesByRegion, REGION_ORDER } from "@/lib/seo-regions";
import { cities } from "@/data/seo/cities";

export const metadata: Metadata = {
  title: "Buy NNN Properties in Florida — 1031 & Passive Income Investments",
  description:
    "Buy single-tenant NNN investment properties across Florida. On- and off-market triple net deals with investment-grade tenants — Walgreens, CVS, AutoZone, Dollar General, Chick-fil-A, and more. Statewide coverage for 1031 and passive investors.",
  alternates: { canonical: "/buy-nnn-property" },
};

export default function BuyNNNHubPage() {
  const grouped = groupCitiesByRegion();

  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Buy NNN Real Estate
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Buy NNN Properties{" "}
            <span className="text-gold">in Florida</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Access on- and off-market single-tenant net lease investment
            opportunities across Florida. MaxLife Realty sources NNN properties
            with investment-grade tenants for 1031 exchange buyers, family
            offices, and passive income investors in {cities.length}+ Florida
            cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?interest=Buy%20NNN%20Property"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Request NNN Inventory
            </Link>
            <Link
              href="/nnn-tenants"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
            >
              Browse NNN Tenants
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          NNN Tenant <span className="text-gold">Categories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Pharmacies", tenants: "Walgreens, CVS", cap: "5.5% – 7.0%" },
            { title: "Dollar Stores", tenants: "Dollar General, Dollar Tree", cap: "5.5% – 6.75%" },
            { title: "Auto Parts", tenants: "AutoZone, O'Reilly, Advance Auto", cap: "5.25% – 6.5%" },
            { title: "QSR Drive-Thru", tenants: "Chick-fil-A, McDonald's, Starbucks", cap: "4.5% – 6.0%" },
            { title: "Convenience / Fuel", tenants: "Wawa, 7-Eleven, RaceTrac", cap: "4.75% – 5.75%" },
            { title: "Medical / Dialysis", tenants: "DaVita, Fresenius, Urgent Care", cap: "6.0% – 7.25%" },
          ].map((cat) => (
            <div
              key={cat.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-gold font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{cat.tenants}</p>
              <p className="text-xs text-gray-500">
                Cap rate range:{" "}
                <span className="text-white font-medium">{cat.cap}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/nnn-tenants"
            className="inline-block text-gold hover:underline text-sm font-medium"
          >
            See all NNN tenants with credit analysis →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          NNN Inventory <span className="text-gold">by Market</span>
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Click your target market for city-specific NNN opportunities, local
          market context, and direct access to our sourcing team.
        </p>
        {REGION_ORDER.map((region) => {
          const regionCities = grouped[region];
          if (regionCities.length === 0) return null;
          return (
            <div key={region} className="mb-8">
              <h3 className="text-gold text-lg font-semibold mb-3 border-b border-white/10 pb-2">
                {region}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {regionCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/buy-nnn-property/${c.slug}`}
                    className="block bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    NNN in {c.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Why Buy NNN with <span className="text-gold">MaxLife</span>
        </h2>
        <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
          <li>
            <strong className="text-white">Off-market access:</strong> direct
            inventory not listed on Crexi or LoopNet.
          </li>
          <li>
            <strong className="text-white">1031 exchange coordination:</strong>{" "}
            45-day / 180-day timeline management with qualified intermediaries.
          </li>
          <li>
            <strong className="text-white">Tenant credit analysis:</strong>{" "}
            every deal comes with credit rating, lease abstract, and rollover
            risk assessment.
          </li>
          <li>
            <strong className="text-white">Underwriting packages:</strong> pro
            forma and cap rate memos within 48 hours.
          </li>
          <li>
            <strong className="text-white">Lender relationships:</strong> fast
            financing from CRE lenders who know Florida NNN.
          </li>
        </ul>
      </section>

      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Request <span className="text-gold">NNN Inventory</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Tell us your criteria — tenant type, cap rate, price range, market
            — and we&apos;ll send matching NNN opportunities within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=Buy%20NNN%20Property"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request Inventory
            </Link>
            <a
              href="tel:3215862121"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
