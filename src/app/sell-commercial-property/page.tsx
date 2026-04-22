import type { Metadata } from "next";
import Link from "next/link";
import { groupCitiesByRegion, REGION_ORDER } from "@/lib/seo-regions";
import { cities } from "@/data/seo/cities";

export const metadata: Metadata = {
  title: "Sell Commercial Property in Florida — Free Valuation by City",
  description:
    "Sell your commercial real estate anywhere in Florida. Free property valuations, institutional-grade marketing, and a deep buyer network across Orlando, Tampa, Jacksonville, Miami, and statewide. Licensed FL broker.",
  alternates: { canonical: "/sell-commercial-property" },
};

export default function SellCommercialHubPage() {
  const grouped = groupCitiesByRegion();

  return (
    <>
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Sell Your Property
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sell Commercial Property{" "}
            <span className="text-gold">in Florida</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Get a free, no-obligation valuation of your Florida commercial
            property. MaxLife Realty is a licensed Florida commercial broker
            serving {cities.length}+ cities statewide — from Orlando and Tampa
            Bay to Jacksonville, Miami, the Space Coast, and the Panhandle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?interest=Sell%20Commercial%20Property"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-center"
            >
              Request Free Valuation
            </Link>
            <Link
              href="/net-sheets/seller"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-6 py-3 rounded-lg transition-colors text-center"
            >
              Seller Net Sheet Calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          What We <span className="text-gold">Sell</span>
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
              className="bg-dark-card border border-dark-border rounded-lg p-3 text-sm text-gray-300 text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">
          Find Your <span className="text-gold">Market</span>
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Click your city for a market-specific seller page with local
          demographics, comparable sales context, and direct access to our
          valuation form.
        </p>
        {REGION_ORDER.map((region) => {
          const regionCities = grouped[region];
          if (regionCities.length === 0) return null;
          return (
            <div key={region} className="mb-8">
              <h3 className="text-gold text-lg font-semibold mb-3 border-b border-dark-border pb-2">
                {region}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {regionCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/sell-commercial-property/${c.slug}`}
                    className="block bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    Sell in {c.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-dark-border">
        <h2 className="text-2xl font-bold text-white mb-4">
          Why List with <span className="text-gold">MaxLife Realty</span>
        </h2>
        <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
          <li>
            <strong className="text-white">Institutional-grade marketing:</strong>{" "}
            professional offering memorandums, aerial photography, and
            distribution through Crexi, LoopNet, and direct investor networks.
          </li>
          <li>
            <strong className="text-white">Deep buyer network:</strong>{" "}
            relationships with 1031 exchange buyers, family offices,
            institutional capital, and private investors across Florida.
          </li>
          <li>
            <strong className="text-white">Competitive pricing analysis:</strong>{" "}
            we underwrite like a buyer to price your asset for maximum
            competitive bidding.
          </li>
          <li>
            <strong className="text-white">Florida-focused expertise:</strong>{" "}
            deep knowledge of Orlando, Tampa Bay, Jacksonville, South Florida,
            Brevard, and the Panhandle.
          </li>
          <li>
            <strong className="text-white">Full-service execution:</strong>{" "}
            from OM through closing — attorneys, title, lenders, and QIs.
          </li>
        </ul>
      </section>

      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to <span className="text-gold">Sell</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Submit your property details for a free, no-obligation valuation.
            We respond within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=Sell%20Commercial%20Property"
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
