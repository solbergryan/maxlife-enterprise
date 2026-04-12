import type { Metadata } from "next";
import Link from "next/link";
import { getAllCourses, groupByTier, CIRE_PROGRAM_NAME } from "@/lib/academy/content";
import { getUser, getCourseProgress } from "@/lib/academy/progress";
import { CourseCard } from "@/components/academy/CourseCard";
import { JsonLdScript } from "@/components/academy/JsonLdScript";
import { buildCourseListJsonLd } from "@/lib/academy/seo";
import { TIER_THEMES, TIER_ICONS } from "@/lib/academy/theme";

export const metadata: Metadata = {
  title: "MaxLife Academy — Free Commercial Real Estate Courses",
  description:
    "A free 20-course commercial real estate curriculum from MaxLife Realty. Learn cap rates, underwriting, NNN investing, development, and tax strategy. No credit card required.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "MaxLife Academy — Free Commercial Real Estate Courses",
    description:
      "A free 20-course commercial real estate curriculum. Learn CRE fundamentals, financial analysis, NNN investing, development, and tax strategy — at your own pace.",
    url: "https://maxlifedevelopment.com/academy",
  },
  keywords: [
    "free commercial real estate course",
    "cre education",
    "commercial real estate for beginners",
    "learn commercial real estate",
    "nnn investing course",
    "commercial real estate Florida",
  ],
};

export default async function AcademyPage() {
  const courses = await getAllCourses();
  const tiers = groupByTier(courses);
  const jsonLd = buildCourseListJsonLd(courses);

  const user = await getUser();
  const progressCounts = user ? await getCourseProgress(user.id) : {};

  const totalLessons = courses.reduce((sum, c) => sum + c.lessons.length, 0);
  const completedLessons = Object.values(progressCounts).reduce((a, b) => a + b, 0);

  return (
    <>
      <JsonLdScript data={jsonLd} />

      {/* Hero */}
      <section className="relative border-b border-dark-border bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              MaxLife Academy
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn commercial real estate.
              <br />
              <span className="text-gold">Free. Forever.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              A 20-course curriculum covering everything from cap rates to land
              development — the same knowledge MaxLife Development uses on every
              Florida deal. Sign up free to track your progress and earn the{" "}
              <strong className="text-white">{CIRE_PROGRAM_NAME}</strong> certificate.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {user ? (
                <Link
                  href="/academy/dashboard"
                  className="rounded-lg bg-gold px-7 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
                >
                  Go to your dashboard →
                </Link>
              ) : (
                <Link
                  href="/academy/login"
                  className="rounded-lg bg-gold px-7 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
                >
                  Start free — no credit card
                </Link>
              )}
              <Link
                href="/academy/courses/01-intro-to-commercial-real-estate"
                className="rounded-lg border border-dark-border bg-dark-card px-7 py-3 text-base font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                Preview Course 1 →
              </Link>
            </div>

            {user && totalLessons > 0 && (
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-dark-border bg-dark-card px-5 py-2 text-sm text-gray-300">
                <span className="text-gold font-bold">{completedLessons}</span>
                <span>of {totalLessons} lessons complete</span>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-dark-border">
                  <div
                    className="h-full bg-gold"
                    style={{ width: `${Math.round((completedLessons / totalLessons) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Program overview */}
      <section className="border-b border-dark-border bg-dark-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 text-3xl font-bold text-gold">20</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Courses across 6 tiers
              </h3>
              <p className="text-sm text-gray-400">
                From beginner to advanced, structured so each course builds on
                the last. Move at your own pace.
              </p>
            </div>
            <div>
              <div className="mb-3 text-3xl font-bold text-gold">$0</div>
              <h3 className="mb-2 text-lg font-semibold text-white">Always free</h3>
              <p className="text-sm text-gray-400">
                No credit card, no upsells, no premium tier. Just sign up with
                an email and you have full access to everything.
              </p>
            </div>
            <div>
              <div className="mb-3 text-3xl font-bold text-gold">CIRE</div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Certificate of completion
              </h3>
              <p className="text-sm text-gray-400">
                Finish all 20 courses and earn your{" "}
                <strong className="text-white">Certified Investment Real Estate Expert</strong>{" "}
                certificate from MaxLife Development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              Full Curriculum
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The CIRE curriculum
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Complete the courses in order, or jump to the asset class you care
              about most. Every lesson is publicly readable — login only tracks
              your progress.
            </p>
          </div>

          <div className="space-y-16">
            {tiers.map((tier) => {
              const tierTheme = TIER_THEMES[tier.tier];
              const tierIcon = TIER_ICONS[tier.tier];
              return (
              <div key={tier.tier}>
                <div className={`mb-8 flex items-center gap-5 rounded-2xl border border-dark-border bg-gradient-to-r ${tierTheme.gradient} to-dark-card/50 p-6`}>
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${tierTheme.bg} ${tierTheme.border} border`}>
                    <svg className={`h-7 w-7 ${tierTheme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={tierIcon} />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wider ${tierTheme.text}`}>
                        Tier {tier.tier}
                      </span>
                      <span className={`rounded-full ${tierTheme.bg} ${tierTheme.border} border px-2 py-0.5 text-xs font-medium ${tierTheme.text}`}>
                        {tier.courses.length} courses
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{tier.tierTitle}</h3>
                    <p className="text-sm text-gray-400 mt-1">{tier.tierSubtitle}</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {tier.courses.map((course) => {
                    const completed = progressCounts[course.slug] ?? 0;
                    const total = course.lessons.length;
                    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
                    return (
                      <CourseCard
                        key={course.slug}
                        course={course}
                        progress={user ? progress : undefined}
                        completed={completed}
                        total={total}
                      />
                    );
                  })}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-dark-border bg-dark-card py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to start?
          </h2>
          <p className="mb-8 text-gray-400">
            Sign up free with your email — no credit card, no spam. We'll save
            your progress, unlock completion certificates, and send you new
            lessons as they publish.
          </p>
          {!user && (
            <Link
              href="/academy/login"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
            >
              Create your free account →
            </Link>
          )}
          {user && (
            <Link
              href="/academy/courses/01-intro-to-commercial-real-estate"
              className="inline-block rounded-lg bg-gold px-8 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
            >
              Start Course 1 →
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
