import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  glossaryTerms,
  getGlossaryTerm,
} from "@/data/glossary";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) return { title: "Not Found" };

  return {
    title: `${t.term} — Definition & Explanation`,
    description: t.shortDefinition,
    alternates: { canonical: `/glossary/${t.slug}` },
    openGraph: {
      title: `${t.term} | CRE Glossary | MaxLife Development`,
      description: t.shortDefinition,
      url: `https://maxlifedevelopment.com/glossary/${t.slug}`,
      type: "article",
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) return notFound();

  // DefinedTerm structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    url: `https://maxlifedevelopment.com/glossary/${t.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "MaxLife Development Commercial Real Estate Glossary",
      url: "https://maxlifedevelopment.com/glossary",
    },
    termCode: t.slug,
  };

  const relatedTerms = (t.relatedTerms || [])
    .map((s) => getGlossaryTerm(s))
    .filter(Boolean);

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
            href="/glossary"
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
            Back to Glossary
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            {t.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.term}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t.shortDefinition}
          </p>
        </div>
      </section>

      {/* Main Definition */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Full <span className="text-gold">Definition</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{t.definition}</p>
        </section>

        {t.example && (
          <section className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">
              <span className="text-gold">Example</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.example}</p>
          </section>
        )}

        {t.whyItMatters && (
          <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">
              Why It <span className="text-gold">Matters</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{t.whyItMatters}</p>
          </section>
        )}

        {relatedTerms.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              Related <span className="text-gold">Terms</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTerms.map((rt) =>
                rt ? (
                  <Link
                    key={rt.slug}
                    href={`/glossary/${rt.slug}`}
                    className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors group block"
                  >
                    <p className="text-white font-medium text-sm group-hover:text-gold transition-colors">
                      {rt.term}
                    </p>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                      {rt.shortDefinition}
                    </p>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        )}
      </article>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Apply <span className="text-gold">{t.term}</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We can help you understand how this concept applies to your
            specific commercial real estate investment or transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Talk to an Advisor
            </Link>
            <Link
              href="/glossary"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              All Glossary Terms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
