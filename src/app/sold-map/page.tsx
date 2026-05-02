import type { Metadata } from "next";
import Link from "next/link";
import { soldProperties } from "@/data/sold-properties";
import SoldMapClient from "@/components/SoldMapClient";

export const metadata: Metadata = {
  title: "Sold Properties Map — Closed CRE Deals | MaxLife Realty",
  description:
    "Interactive map of commercial real estate deals closed by MaxLife Realty across Central Florida and the Space Coast. View sale prices, cap rates, property types, and close dates.",
  keywords: [
    "sold commercial real estate Florida",
    "closed commercial deals Orlando",
    "MaxLife Realty sold properties",
    "Florida CRE sold map",
    "commercial real estate transactions Florida",
  ],
  alternates: { canonical: "/sold-map" },
};

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

const totalVolume = soldProperties.reduce((s, p) => s + p.salePrice, 0);

export default function SoldMapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Track Record
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sold <span className="text-gold">Properties Map</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Closed commercial real estate transactions across Central Florida and
            the Space Coast. Click any pin to see sale price, cap rate, property
            type, and close date.
          </p>

          {/* Quick stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { label: "Transactions shown", value: soldProperties.length.toString() },
              {
                label: "Total volume",
                value: formatPrice(totalVolume),
              },
              {
                label: "Markets",
                value: [
                  ...new Set(soldProperties.map((p) => p.county)),
                ].length.toString() + " counties",
              },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-gold">{s.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SoldMapClient />
        <p className="mt-3 text-xs text-gray-500">
          Locations are approximate. Map shows a representative sample of closed
          transactions. Contact us for a complete transaction history.
        </p>
      </section>

      {/* Transaction list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-white mb-5">Recent Closed Transactions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {soldProperties
            .sort((a, b) => b.closeDate.localeCompare(a.closeDate))
            .map((p) => (
              <div
                key={p.id}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-gold font-semibold text-sm">{p.type}</span>
                  <span className="text-xs text-gray-500 shrink-0">
                    {formatDate(p.closeDate)}
                  </span>
                </div>
                <p className="text-white font-medium text-sm mb-0.5">{p.address}</p>
                <p className="text-gray-500 text-xs mb-3">
                  {p.city}, {p.county} County
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gold/10 border border-gold/20 text-gold text-xs font-semibold px-2 py-0.5 rounded">
                    {formatPrice(p.salePrice)}
                  </span>
                  {p.sqft && (
                    <span className="bg-white/[0.06] text-gray-300 text-xs px-2 py-0.5 rounded">
                      {p.sqft.toLocaleString()} SF
                    </span>
                  )}
                  {p.capRate && (
                    <span className="bg-white/[0.06] text-gray-300 text-xs px-2 py-0.5 rounded">
                      {p.capRate}% cap
                    </span>
                  )}
                </div>
                {p.notes && (
                  <p className="mt-2 text-gray-500 text-xs italic">{p.notes}</p>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Be on{" "}
            <span className="text-gold">This Map</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Whether you&apos;re buying or selling commercial property in Florida,
            let&apos;s talk numbers. Get a free seller valuation or connect to
            discuss your investment criteria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities#request-valuation"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request a Valuation
            </Link>
            <Link
              href="/results"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              View Full Track Record
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
