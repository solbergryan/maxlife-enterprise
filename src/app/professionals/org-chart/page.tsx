import type { Metadata } from "next";
import Link from "next/link";
import OrgChart from "./OrgChart";

export const metadata: Metadata = {
  title: "CRE Team Org Chart — Visual Guide to Real Estate Professionals",
  description:
    "Interactive visual org chart of every role in a commercial real estate development deal. Searchable guide for applicants, students, and investors to explore CRE careers.",
  alternates: {
    canonical: "/professionals/org-chart",
  },
};

export default function OrgChartPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/professionals"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-4"
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
            All Professionals
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            Interactive Org Chart
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            CRE Deal Team{" "}
            <span className="text-gold">Org Chart</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Visual guide to every role involved in a commercial real estate
            deal. Search, filter, and click any role to learn more — whether
            you&apos;re exploring a CRE career, hiring your deal team, or
            learning how commercial projects get built.
          </p>
        </div>
      </section>

      {/* Org Chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <OrgChart />
      </section>

      {/* Careers CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in a <span className="text-gold">CRE Career</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            MaxLife Development is always open to connecting with talented
            professionals across the commercial real estate industry. Reach
            out — whether you&apos;re looking to partner, refer business, or
            explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/professionals"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Browse All Roles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
