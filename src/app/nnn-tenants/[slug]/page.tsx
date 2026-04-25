import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nnnTenants, getTenant } from "@/data/nnn-tenants";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return nnnTenants.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTenant(slug);
  if (!t) return { title: "Not Found" };

  return {
    title: `${t.tenant} NNN Properties for Sale in Florida`,
    description: t.metaDescription,
    alternates: {
      canonical: `/nnn-tenants/${t.slug}`,
    },
    openGraph: {
      title: `${t.tenant} NNN Investment Properties | MaxLife Development`,
      description: t.metaDescription,
      url: `https://maxlifedevelopment.com/nnn-tenants/${t.slug}`,
      type: "article",
    },
  };
}

export default async function TenantPage({ params }: { params: Params }) {
  const { slug } = await params;
  const t = getTenant(slug);
  if (!t) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${t.tenant} NNN Properties for Sale in Florida`,
    description: t.metaDescription,
    url: `https://maxlifedevelopment.com/nnn-tenants/${t.slug}`,
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

  const relatedTenants = nnnTenants
    .filter((x) => x.slug !== slug && x.category === t.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/nnn-tenants"
            className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
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
            All Tenants
          </Link>
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              {t.category}
            </span>
            <span className="text-gray-300 text-xs">
              Credit: {t.creditRating}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.tenant} NNN Properties{" "}
            <span className="text-gold">for Sale in Florida</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">{t.overview}</p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Typical Cap Rate
            </p>
            <p className="text-gold font-bold text-lg">{t.typicalCapRate}</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Lease Term
            </p>
            <p className="text-white font-semibold text-sm">
              {t.typicalLeaseTerm}
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Price Range
            </p>
            <p className="text-white font-semibold text-sm">{t.typicalPrice}</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Building Size
            </p>
            <p className="text-white font-semibold text-sm">
              {t.typicalBuildingSize}
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Lot Size
            </p>
            <p className="text-white font-semibold text-sm">
              {t.typicalLotSize}
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Credit Rating
            </p>
            <p className="text-white font-semibold text-sm">{t.creditRating}</p>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Investment <span className="text-gold">Highlights</span>
        </h2>
        <ul className="space-y-3">
          {t.investmentHighlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
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
              <span className="text-gray-300 text-sm leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Lease Structure */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Lease <span className="text-gold">Structure</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">{t.leaseStructure}</p>
      </section>

      {/* Tenant Profile */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          {t.tenant} <span className="text-gold">Tenant Profile</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">{t.tenantProfile}</p>
      </section>

      {/* Florida Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            {t.tenant} in <span className="text-gold">Florida</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{t.floridaNotes}</p>
        </div>
      </section>

      {/* Why / Considerations */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Why Buy <span className="text-gold">{t.tenant}</span>
          </h2>
          <ul className="space-y-2">
            {t.whyInvest.map((w) => (
              <li
                key={w}
                className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
              >
                <span className="text-gold shrink-0">+</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            <span className="text-gold">Considerations</span>
          </h2>
          <ul className="space-y-2">
            {t.considerations.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
              >
                <span className="text-gold shrink-0">•</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Tenants */}
      {relatedTenants.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-white mb-5">
            Related <span className="text-gold">{t.category} Tenants</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTenants.map((rt) => (
              <Link
                key={rt.slug}
                href={`/nnn-tenants/${rt.slug}`}
                className="bg-white/[0.04] border border-white/10 hover:border-gold/40 rounded-lg p-4 transition-colors group block"
              >
                <p className="text-white font-semibold group-hover:text-gold transition-colors">
                  {rt.tenant}
                </p>
                <p className="text-gold text-xs mt-1">{rt.typicalCapRate}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Buy a <span className="text-gold">{t.tenant}</span>{" "}
            Property?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            We source {t.tenant} NNN opportunities across Florida. Share your
            investment criteria and we&apos;ll send matching deals within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?interest=${encodeURIComponent(
                t.tenant + " NNN Property"
              )}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request {t.tenant} Inventory
            </Link>
            <Link
              href="/nnn-tenants"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              All Tenants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
