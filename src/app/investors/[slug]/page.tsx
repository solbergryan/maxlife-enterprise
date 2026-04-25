import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  investorPersonas,
  getInvestorPersona,
} from "@/data/investor-personas";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return investorPersonas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getInvestorPersona(slug);
  if (!p) return { title: "Not Found" };

  return {
    title: p.title,
    description: p.metaDescription,
    alternates: { canonical: `/investors/${p.slug}` },
    openGraph: {
      title: `${p.title} | MaxLife Development`,
      description: p.metaDescription,
      url: `https://maxlifedevelopment.com/investors/${p.slug}`,
      type: "article",
    },
  };
}

export default async function InvestorPersonaPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const p = getInvestorPersona(slug);
  if (!p) return notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/investors"
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
            All Investor Types
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            Investor Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {p.title}
          </h1>
          <p className="text-gold text-lg italic mb-4">{p.tagline}</p>
          <p className="text-gray-300 text-lg leading-relaxed">{p.overview}</p>
        </div>
      </section>

      {/* Profile Stats */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Typical Investment
            </p>
            <p className="text-gold font-bold text-sm">
              {p.typicalProfile.typicalInvestment}
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Target Returns
            </p>
            <p className="text-gold font-bold text-sm">
              {p.typicalProfile.targetReturns}
            </p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4 col-span-2 md:col-span-1">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
              Timeline
            </p>
            <p className="text-gold font-bold text-sm">
              {p.typicalProfile.timeline}
            </p>
          </div>
        </div>
      </section>

      {/* What They Want vs. What We Offer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">What You Need</h2>
            <ul className="space-y-2">
              {p.whatTheyWant.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <span className="text-gold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              What <span className="text-gold">We Offer</span>
            </h2>
            <ul className="space-y-2">
              {p.whatWeOffer.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <svg
                    className="w-4 h-4 text-gold mt-0.5 shrink-0"
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Preferred Assets */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Preferred <span className="text-gold">Asset Types</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {p.typicalProfile.preferredAssets.map((asset) => (
            <span
              key={asset}
              className="bg-white/[0.04] border border-white/10 rounded-md px-3 py-1.5 text-sm text-gray-300"
            >
              {asset}
            </span>
          ))}
        </div>
      </section>

      {/* Why MaxLife */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            Why Work With <span className="text-gold">MaxLife</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{p.whyMaxLife}</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Common <span className="text-gold">Questions</span>
        </h2>
        <div className="space-y-5">
          {p.faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to <span className="text-gold">Get Started</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Tell us about your investment goals and we&apos;ll share curated
            opportunities that match your criteria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?investorType=${encodeURIComponent(p.shortTitle)}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/investors"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Other Investor Types
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
