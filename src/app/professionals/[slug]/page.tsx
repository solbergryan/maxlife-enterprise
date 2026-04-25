import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  professionals,
  getProfessional,
} from "@/lib/professionals";
import Breadcrumbs from "@/components/Breadcrumbs";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return professionals.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const pro = getProfessional(slug);
  if (!pro) return { title: "Not Found" };

  return {
    title: pro.title,
    description: pro.metaDescription,
    alternates: {
      canonical: `/professionals/${pro.slug}`,
    },
    openGraph: {
      title: `${pro.title} | MaxLife Development`,
      description: pro.metaDescription,
      url: `https://www.maxlifedevelopment.com/professionals/${pro.slug}`,
      type: "article",
    },
  };
}

export default async function ProfessionalPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const pro = getProfessional(slug);
  if (!pro) return notFound();

  const relatedPros = (pro.worksWith || [])
    .map((s) => getProfessional(s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pro.title,
    description: pro.metaDescription,
    url: `https://www.maxlifedevelopment.com/professionals/${pro.slug}`,
    author: {
      "@type": "Person",
      name: "Ryan Solberg",
      url: "https://www.maxlifedevelopment.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "MaxLife Development",
      url: "https://www.maxlifedevelopment.com",
    },
    about: {
      "@type": "Occupation",
      name: pro.title,
      occupationalCategory: pro.category,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Professionals", href: "/professionals" },
            { name: pro.title, href: `/professionals/${pro.slug}` },
          ]}
        />
      </div>

      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <Link
            href="/professionals"
            className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Professionals
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            {pro.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {pro.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {pro.shortDescription}
          </p>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* What they do */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What a <span className="text-gold">{pro.title}</span> Does
          </h2>
          <p className="text-gray-300 leading-relaxed">{pro.whatTheyDo}</p>
        </section>

        {/* Key Responsibilities */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Key <span className="text-gold">Responsibilities</span>
          </h2>
          <ul className="space-y-3">
            {pro.keyResponsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
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
                <span className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* When needed */}
        <section className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            When You <span className="text-gold">Need One</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{pro.whenNeeded}</p>
        </section>

        {/* Cost/Timing */}
        {(pro.typicalCost || pro.typicalTiming) && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pro.typicalCost && (
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Typical Cost
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {pro.typicalCost}
                </p>
              </div>
            )}
            {pro.typicalTiming && (
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
                <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Typical Timing
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {pro.typicalTiming}
                </p>
              </div>
            )}
          </section>
        )}

        {/* How we work */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            How MaxLife <span className="text-gold">Works With Them</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{pro.howWeWork}</p>
        </section>

        {/* Related professionals */}
        {relatedPros.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Works <span className="text-gold">Closely With</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedPros.map((rp) =>
                rp ? (
                  <Link
                    key={rp.slug}
                    href={`/professionals/${rp.slug}`}
                    className="bg-white/[0.04] border border-white/10 rounded-lg p-4 hover:border-gold/40 transition-colors group block"
                  >
                    <p className="text-white font-medium text-sm group-hover:text-gold transition-colors">
                      {rp.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{rp.category}</p>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        )}
      </article>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a {pro.title.replace(/\s*\(.*?\)\s*/g, "")}?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            MaxLife Development can connect you with trusted Florida{" "}
            {pro.title.toLowerCase().replace(/\s*\(.*?\)\s*/g, "")}s for your
            commercial real estate project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get a Referral
            </Link>
            <Link
              href="/professionals"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              All Professionals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
