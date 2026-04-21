import type { Metadata } from "next";
import Link from "next/link";
import { leaseTypes } from "@/data/lease-types";

export const metadata: Metadata = {
  title: "Commercial Real Estate Lease Types — Complete Guide",
  description:
    "Complete guide to commercial real estate lease structures — absolute NNN, double net, ground lease, build-to-suit, modified gross, full-service gross, and percentage rent. Which lease type is right for your investment?",
  alternates: { canonical: "/lease-types" },
};

export default function LeaseTypesHubPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            CRE Reference
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate{" "}
            <span className="text-gold">Lease Types</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Understanding lease structures is fundamental to commercial real
            estate investing. Different lease types allocate operating costs
            and risk between landlord and tenant in radically different ways —
            directly impacting your yield, management burden, and risk
            exposure. Here&apos;s a complete guide to every major CRE lease
            type.
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Quick <span className="text-gold">Comparison</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">
                  Lease Type
                </th>
                <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">
                  Landlord Burden
                </th>
                <th className="text-left text-gold text-xs uppercase tracking-wider py-3 pr-4">
                  Typical Cap Rate
                </th>
                <th className="text-left text-gold text-xs uppercase tracking-wider py-3">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ground Lease", "Minimal", "3.75% - 5.25%", "Multi-generational wealth"],
                ["Absolute NNN", "None (100% tenant)", "5.5% - 7.0%", "Passive income investors"],
                ["Double Net (NN)", "Roof + structure", "5.75% - 7.0%", "Higher-yield seekers"],
                ["Build-to-Suit", "Develops then sells", "5.25% - 6.5% exit", "Active developers"],
                ["Modified Gross", "Variable", "6.5% - 8.5%", "Multi-tenant office/retail"],
                ["Full-Service Gross", "Everything", "6.0% - 8.0%", "Class A office"],
                ["Percentage Rent", "Retail-focused", "Varies", "Anchor/mall tenants"],
              ].map(([lease, landlord, cap, best]) => (
                <tr key={lease} className="border-b border-dark-border/50">
                  <td className="py-3 pr-4 text-white font-medium">{lease}</td>
                  <td className="py-3 pr-4 text-gray-300">{landlord}</td>
                  <td className="py-3 pr-4 text-gold">{cap}</td>
                  <td className="py-3 text-gray-300">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Lease Type Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaseTypes.map((l) => (
            <Link
              key={l.slug}
              href={`/lease-types/${l.slug}`}
              className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-xl p-6 transition-colors group block"
            >
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {l.name}
              </h2>
              <p className="text-gold text-sm italic mb-3">{l.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {l.definition}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-dark border border-dark-border rounded px-2 py-1 text-gray-400">
                  {l.typicalTerms.capRate}
                </span>
                <span className="bg-dark border border-dark-border rounded px-2 py-1 text-gray-400">
                  {l.typicalTerms.term.split(" ")[0]} yr term
                </span>
              </div>
              <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors mt-4 block">
                Full details &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing a{" "}
            <span className="text-gold">Lease Structure</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            The right lease structure depends on your specific goals — passive
            income, value-add upside, or long-term reversion. Let&apos;s talk
            through your situation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
