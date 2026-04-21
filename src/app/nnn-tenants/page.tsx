import type { Metadata } from "next";
import Link from "next/link";
import { nnnTenants } from "@/data/nnn-tenants";

export const metadata: Metadata = {
  title: "NNN Properties by Tenant — Single-Tenant Net Lease Investments",
  description:
    "Browse NNN investment properties by tenant — Walgreens, CVS, Dollar General, AutoZone, Chick-fil-A, McDonald's, Starbucks, and more. Florida-focused single-tenant net lease opportunities.",
  alternates: {
    canonical: "/nnn-tenants",
  },
};

const categoryOrder = [
  "Pharmacy",
  "QSR",
  "Coffee",
  "Dollar Store",
  "Auto Parts",
  "Convenience Store",
];

export default function NNNTenantsHubPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            NNN by Tenant
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            NNN Properties by{" "}
            <span className="text-gold">Tenant</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Browse single-tenant net lease investment opportunities by brand.
            Each tenant profile covers credit rating, typical cap rates, lease
            structures, investment considerations, and Florida-specific market
            notes.
          </p>
        </div>
      </section>

      {/* By Category */}
      {categoryOrder.map((category) => {
        const tenants = nnnTenants.filter((t) => t.category === category);
        if (tenants.length === 0) return null;

        return (
          <section
            key={category}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-dark-border"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-gold">{category}</span> Tenants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tenants.map((t) => (
                <Link
                  key={t.slug}
                  href={`/nnn-tenants/${t.slug}`}
                  className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-xl p-6 transition-colors group block"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white text-lg font-bold group-hover:text-gold transition-colors">
                      {t.tenant}
                    </h3>
                    <span className="text-gold text-xs font-semibold bg-gold/10 px-2.5 py-1 rounded">
                      {t.creditRating.replace("S&P: ", "")}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-400 mb-4">
                    <div className="flex justify-between">
                      <span>Cap Rate:</span>
                      <span className="text-gold font-medium">
                        {t.typicalCapRate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lease Term:</span>
                      <span className="text-gray-300">
                        {t.typicalLeaseTerm}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price Range:</span>
                      <span className="text-gray-300">{t.typicalPrice}</span>
                    </div>
                  </div>
                  <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                    Full tenant profile &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Looking for a Specific <span className="text-gold">Tenant</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We source on- and off-market NNN properties across all major
            tenants. Tell us your criteria and we&apos;ll send matching
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Request Inventory
          </Link>
        </div>
      </section>
    </>
  );
}
