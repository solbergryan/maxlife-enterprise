import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { leaseTypes, getLeaseType } from "@/data/lease-types";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return leaseTypes.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getLeaseType(slug);
  if (!l) return { title: "Not Found" };

  return {
    title: `${l.name} — Complete Guide`,
    description: l.metaDescription,
    alternates: { canonical: `/lease-types/${l.slug}` },
    openGraph: {
      title: `${l.name} | MaxLife Development`,
      description: l.metaDescription,
      url: `https://maxlifedevelopment.com/lease-types/${l.slug}`,
      type: "article",
    },
  };
}

export default async function LeaseTypePage({ params }: { params: Params }) {
  const { slug } = await params;
  const l = getLeaseType(slug);
  if (!l) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${l.name} — Complete Guide`,
    description: l.metaDescription,
    url: `https://maxlifedevelopment.com/lease-types/${l.slug}`,
    author: {
      "@type": "Person",
      name: "Ryan Solberg",
      url: "https://maxlifedevelopment.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "MaxLife Development",
      url: "https://maxlifedevelopment.com",
    },
  };

  const otherLeases = leaseTypes.filter((x) => x.slug !== slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/lease-types"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Lease Types
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            Lease Structure
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {l.name}
          </h1>
          <p className="text-gold text-lg italic mb-4">{l.tagline}</p>
          <p className="text-gray-400 text-lg leading-relaxed">{l.definition}</p>
        </div>
      </section>

      {/* Typical Terms */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Term", value: l.typicalTerms.term },
            { label: "Rent Bumps", value: l.typicalTerms.rentBumps },
            { label: "Cap Rate", value: l.typicalTerms.capRate },
            { label: "Tenants", value: l.typicalTerms.tenantTypes },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-white font-semibold text-sm leading-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Pays What */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-5">
          Who Pays <span className="text-gold">What</span>?
        </h2>
        <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark/50 border-b border-dark-border">
                <th className="text-left text-gold text-xs uppercase tracking-wider py-3 px-4">
                  Expense
                </th>
                <th className="text-center text-gold text-xs uppercase tracking-wider py-3 px-4">
                  Tenant
                </th>
                <th className="text-center text-gold text-xs uppercase tracking-wider py-3 px-4">
                  Landlord
                </th>
              </tr>
            </thead>
            <tbody>
              {l.whoPays.map((item) => (
                <tr
                  key={item.label}
                  className="border-b border-dark-border/50"
                >
                  <td className="py-3 px-4 text-white">{item.label}</td>
                  <td className="py-3 px-4 text-center">
                    {item.tenant ? (
                      <svg
                        className="w-5 h-5 text-emerald-400 inline"
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
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {item.landlord ? (
                      <svg
                        className="w-5 h-5 text-emerald-400 inline"
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
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
          <h3 className="text-emerald-300 font-semibold mb-4">Pros</h3>
          <ul className="space-y-2">
            {l.pros.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-gray-300 text-sm"
              >
                <span className="text-emerald-400 shrink-0">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <h3 className="text-red-300 font-semibold mb-4">Cons</h3>
          <ul className="space-y-2">
            {l.cons.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-gray-300 text-sm"
              >
                <span className="text-red-400 shrink-0">−</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Common <span className="text-gold">Use Cases</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {l.typicalUseCases.map((uc) => (
            <span
              key={uc}
              className="bg-dark-card border border-dark-border rounded-md px-3 py-2 text-sm text-gray-300"
            >
              {uc}
            </span>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-white mb-4">
          How It <span className="text-gold">Compares</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">{l.howItCompares}</p>
      </section>

      {/* Investor Perspective */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            Investor <span className="text-gold">Perspective</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{l.investorPerspective}</p>
        </div>
      </section>

      {/* Other Lease Types */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Other <span className="text-gold">Lease Types</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {otherLeases.map((other) => (
            <Link
              key={other.slug}
              href={`/lease-types/${other.slug}`}
              className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors group block"
            >
              <p className="text-white font-medium text-sm group-hover:text-gold transition-colors">
                {other.shortName}
              </p>
              <p className="text-gray-500 text-xs mt-1">{other.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Invest in{" "}
            <span className="text-gold">{l.shortName}</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            MaxLife Development sources commercial real estate across Florida
            with the lease structures that match your investment strategy.
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
