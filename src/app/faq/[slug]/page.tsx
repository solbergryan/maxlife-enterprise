import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqTopics, getFAQTopic } from "@/data/faqs";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return faqTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getFAQTopic(slug);
  if (!topic) return { title: "Not Found" };

  return {
    title: topic.title,
    description: topic.metaDescription,
    alternates: {
      canonical: `/faq/${topic.slug}`,
    },
    openGraph: {
      title: `${topic.title} | MaxLife Development`,
      description: topic.metaDescription,
      url: `https://maxlifedevelopment.com/faq/${topic.slug}`,
      type: "article",
    },
  };
}

export default async function FAQTopicPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const topic = getFAQTopic(slug);
  if (!topic) return notFound();

  // FAQPage JSON-LD — drives Google "People also ask" rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const relatedTopics = faqTopics.filter((t) => t.slug !== slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/faq"
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
            All FAQ Topics
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {topic.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">{topic.intro}</p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            Jump to a Question
          </h2>
          <ol className="space-y-2">
            {topic.faqs.map((faq, i) => (
              <li key={faq.question}>
                <a
                  href={`#q-${i + 1}`}
                  className="text-gray-300 hover:text-gold text-sm transition-colors flex gap-3"
                >
                  <span className="text-gold font-medium shrink-0">
                    {i + 1}.
                  </span>
                  <span>{faq.question}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Q&A */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-10">
          {topic.faqs.map((faq, i) => (
            <article
              key={faq.question}
              id={`q-${i + 1}`}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-white mb-3 flex gap-3">
                <span className="text-gold shrink-0">Q{i + 1}.</span>
                <span>{faq.question}</span>
              </h2>
              <div className="pl-10">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Related Topics */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-white mb-5">
          More <span className="text-gold">FAQ Topics</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedTopics.map((t) => (
            <Link
              key={t.slug}
              href={`/faq/${t.slug}`}
              className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-lg p-4 transition-colors group block"
            >
              <p className="text-white font-medium text-sm group-hover:text-gold transition-colors">
                {t.shortTitle}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {t.faqs.length} questions
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Talk <span className="text-gold">Specifics</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            General FAQs go only so far. Reach out and we&apos;ll answer your
            specific questions about your property, deal, or investment
            strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/faq"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Browse All FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
