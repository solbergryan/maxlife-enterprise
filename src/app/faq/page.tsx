import type { Metadata } from "next";
import Link from "next/link";
import { faqTopics } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Commercial Real Estate FAQ — MaxLife Development",
  description:
    "Answers to frequently asked questions about commercial real estate in Florida — NNN investments, 1031 exchanges, CRE transactions, and land development. Everything first-time investors and experienced buyers want to know.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQHubPage() {
  const totalQuestions = faqTopics.reduce(
    (sum, topic) => sum + topic.faqs.length,
    0
  );

  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Commercial Real Estate{" "}
            <span className="text-gold">Frequently Asked Questions</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Straight answers to the {totalQuestions}+ questions we hear most
            often from commercial real estate investors, developers, and buyers
            in Florida. Browse by topic below.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/faq/${topic.slug}`}
              className="bg-dark-card border border-dark-border hover:border-gold/40 rounded-xl p-6 transition-colors group block"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                  {topic.title}
                </h2>
                <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded shrink-0">
                  {topic.faqs.length} Q&amp;A
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {topic.intro.split(". ")[0] + "."}
              </p>
              <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                Read full FAQ &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Have <span className="text-gold">Questions</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            If you can&apos;t find the answer here, reach out directly. We
            respond to every inquiry.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
