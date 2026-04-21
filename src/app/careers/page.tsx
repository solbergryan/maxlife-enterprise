import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers — Join MaxLife Development",
  description:
    "Open positions at MaxLife Development — a growing Florida commercial real estate brokerage. Ground-floor opportunities in CRE analysis, transaction coordination, and brokerage.",
  alternates: {
    canonical: "/careers",
  },
};

const departmentColors: Record<string, string> = {
  Operations: "from-blue-500/20 to-transparent border-blue-500/30",
  Brokerage: "from-gold/20 to-transparent border-gold/30",
  Marketing: "from-purple-500/20 to-transparent border-purple-500/30",
};

export default function CareersPage() {
  const openJobs = jobs.filter((j) => j.isOpen);

  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Careers
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Build the Future of{" "}
            <span className="text-gold">Florida CRE</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            MaxLife Development is a growing commercial real estate firm based
            in Central Florida. We work on NNN investments, ground-up
            development, land brokerage, and commercial financing across the
            fastest-growing CRE market in the country. If you want a real seat
            at a real deal, read on.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Early-Stage Leverage",
              desc: "Be employee #1 or #2 at a growing CRE firm. Your work shows up directly in the company's results — no corporate layers between you and the deal.",
              icon: (
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Full-Stack CRE Exposure",
              desc: "Touch every side of commercial real estate — NNN acquisitions, build-to-suit development, land entitlements, and commercial financing. The kind of breadth that takes a decade elsewhere.",
              icon: (
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
                  />
                </svg>
              ),
            },
            {
              title: "Grow With the Firm",
              desc: "We're committed to building long-term with the people who prove they can execute. Analyst → Broker → Partner track, with real ownership on the table for key performers.",
              icon: (
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            Open <span className="text-gold">Positions</span>
          </h2>
          <span className="text-sm text-gray-500">
            {openJobs.length} open{" "}
            {openJobs.length === 1 ? "role" : "roles"}
          </span>
        </div>

        <div className="space-y-5">
          {openJobs.map((job) => (
            <Link
              key={job.slug}
              href={`/careers/${job.slug}`}
              className={`group block bg-gradient-to-br ${
                departmentColors[job.department] ||
                "from-dark-card to-transparent border-dark-border"
              } border rounded-xl p-6 hover:border-gold/50 transition-all`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
                      {job.department}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {job.locationType} · {job.employmentType.replace("_", " ")}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-semibold group-hover:text-gold transition-colors mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-3xl">
                    {job.shortDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8"
                        />
                      </svg>
                      {job.compensation}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                    View Details
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {openJobs.length === 0 && (
          <div className="text-center py-12 bg-dark-card border border-dark-border rounded-xl">
            <p className="text-gray-400">
              No open positions at the moment — but we&apos;re always open to
              connecting with talented CRE professionals.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-gold hover:text-gold-light text-sm font-medium"
            >
              Get in touch &rarr;
            </Link>
          </div>
        )}
      </section>

      {/* Don't See Your Role */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Don&apos;t see your role?
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            We&apos;re always open to connecting with talented CRE
            professionals, even when we&apos;re not actively hiring for a
            specific role. Send us a note and tell us what you&apos;d bring to
            the table.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Introduce Yourself
          </Link>
        </div>
      </section>
    </>
  );
}
