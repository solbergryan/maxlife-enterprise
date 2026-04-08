import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Market Insights | MaxLife Development",
  description:
    "Market insights, investment guides, and real estate analysis from MaxLife Development. NNN investing, land development, and Central Florida market trends.",
};

const articles = [
  {
    slug: "what-is-nnn-lease",
    title: "What Is a Triple Net (NNN) Lease? A Guide for Investors",
    excerpt:
      "Understanding the structure, benefits, and risks of NNN lease investments — and why they're one of the most popular vehicles for passive real estate income.",
    category: "NNN Investing",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    slug: "central-florida-land-development",
    title: "Why Central Florida Is a Hot Market for Land Development",
    excerpt:
      "Population growth, infrastructure investment, and strong demand are driving land values across the Orlando and Space Coast corridors. Here's what investors need to know.",
    category: "Land Development",
    date: "April 2026",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Market <span className="text-gold">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Guides, analysis, and perspectives on NNN investing, land
            development, and the Central Florida real estate market.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-dark-card border border-dark-border rounded-xl p-8 hover:border-gold/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-gray-500 text-xs">{article.date}</span>
                <span className="text-gray-500 text-xs">
                  {article.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="text-gold text-sm font-medium group-hover:text-gold-light transition-colors">
                Read article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions About Investing?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We&apos;re happy to discuss your investment goals, answer questions
            about the market, or just talk shop. No pressure.
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
