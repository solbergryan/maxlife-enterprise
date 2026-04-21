import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs, getJob } from "@/data/careers";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Not Found" };

  return {
    title: `${job.title} — Careers at MaxLife Development`,
    description: job.metaDescription,
    alternates: {
      canonical: `/careers/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} | MaxLife Development`,
      description: job.metaDescription,
      url: `https://maxlifedevelopment.com/careers/${job.slug}`,
      type: "article",
    },
  };
}

export default async function JobPage({ params }: { params: Params }) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return notFound();

  // Google for Jobs structured data
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<p>${job.overview}</p><h3>Responsibilities</h3><ul>${job.responsibilities
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul><h3>Requirements</h3><ul>${job.requirements
      .map((r) => `<li>${r}</li>`)
      .join("")}</ul><h3>What We Offer</h3><ul>${job.whatWeOffer
      .map((w) => `<li>${w}</li>`)
      .join("")}</ul>`,
    identifier: {
      "@type": "PropertyValue",
      name: "MaxLife Development",
      value: job.slug,
    },
    datePosted: job.datePosted,
    validThrough: new Date(
      new Date(job.datePosted).getTime() + 90 * 24 * 60 * 60 * 1000
    ).toISOString(),
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "MaxLife Development",
      sameAs: "https://maxlifedevelopment.com",
      logo: "https://maxlifedevelopment.com/og-image.jpg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        postalCode: "32801",
        addressCountry: "US",
      },
    },
    ...(job.locationType !== "On-Site" && {
      applicantLocationRequirements: {
        "@type": "Country",
        name: "USA",
      },
      jobLocationType: "TELECOMMUTE",
    }),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.compensationMin,
        maxValue: job.compensationMax,
        unitText: "YEAR",
      },
    },
    directApply: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <Link
            href="/careers"
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
            All Open Roles
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              {job.department}
            </span>
            <span className="text-gray-500 text-xs">
              {job.locationType} · {job.employmentType.replace("_", " ")}
            </span>
            {job.isOpen && (
              <span className="text-emerald-400 text-xs bg-emerald-500/10 px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Now Hiring
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold"
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
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gold"
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

          <Link
            href={`/contact?role=${encodeURIComponent(job.title)}`}
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Apply for This Role
          </Link>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            The <span className="text-gold">Role</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{job.overview}</p>
        </section>

        {/* Responsibilities */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What You&apos;ll <span className="text-gold">Do</span>
          </h2>
          <ul className="space-y-3">
            {job.responsibilities.map((item) => (
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

        {/* Requirements */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What We&apos;re Looking <span className="text-gold">For</span>
          </h2>
          <ul className="space-y-3">
            {job.requirements.map((item) => (
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Nice to Have */}
        {job.niceToHaves.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Nice to <span className="text-gold">Have</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {job.niceToHaves.map((item) => (
                <li
                  key={item}
                  className="bg-dark-card border border-dark-border rounded-lg p-3 text-sm text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Ideal Candidate */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            The Ideal <span className="text-gold">Candidate</span>
          </h2>
          <p className="text-gray-300 leading-relaxed italic">
            &ldquo;{job.idealCandidate}&rdquo;
          </p>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What We <span className="text-gold">Offer</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {job.whatWeOffer.map((item) => (
              <div
                key={item}
                className="bg-dark-card border border-dark-border rounded-lg p-4"
              >
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Join */}
        <section className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">
            Why Join <span className="text-gold">MaxLife</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">{job.whyJoin}</p>
        </section>
      </article>

      {/* Apply CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to <span className="text-gold">Apply</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Send us a note introducing yourself and attach your resume. Tell us
            what draws you to this role and what you&apos;d bring to MaxLife.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?role=${encodeURIComponent(job.title)}`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/careers"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              All Open Roles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
