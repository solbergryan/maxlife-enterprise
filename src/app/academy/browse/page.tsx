import type { Metadata } from "next";
import Link from "next/link";
import { getAllCourses, groupByTier } from "@/lib/academy/content";
import { getUser, getCompletedLessons } from "@/lib/academy/progress";
import { TIER_THEMES } from "@/lib/academy/theme";

export const metadata: Metadata = {
  title: "Browse All Courses — MaxLife Academy",
  description:
    "Every course and every lesson in the MaxLife Academy CIRE curriculum — all on one page for fast navigation.",
  alternates: { canonical: "/academy/browse" },
};

export default async function BrowsePage() {
  const courses = await getAllCourses();
  const tiers = groupByTier(courses);

  const user = await getUser();
  const completed = user ? await getCompletedLessons(user.id) : new Set<string>();

  const totalLessons = courses.reduce((sum, c) => sum + c.lessons.length, 0);

  return (
    <div className="bg-dark">
      {/* Header */}
      <section className="border-b border-dark-border bg-dark-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Full Curriculum Index
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                Browse all courses
              </h1>
              <p className="text-gray-400">
                Every course, every lesson — jump straight to anything. {courses.length} courses,{" "}
                {totalLessons} lessons.
              </p>
            </div>
            <Link
              href="/academy"
              className="self-start rounded-lg border border-dark-border bg-dark px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gold hover:text-gold sm:self-end"
            >
              ← Academy home
            </Link>
          </div>

          {/* Tier jump nav */}
          <nav className="mt-6 flex flex-wrap gap-2">
            {tiers.map((tier) => {
              const theme = TIER_THEMES[tier.tier];
              return (
                <a
                  key={tier.tier}
                  href={`#tier-${tier.tier}`}
                  className={`rounded-full border ${theme.border} ${theme.bg} ${theme.text} px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-80`}
                >
                  Tier {tier.tier} · {tier.tierTitle}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Tier sections */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {tiers.map((tier) => {
            const theme = TIER_THEMES[tier.tier];
            return (
              <div key={tier.tier} id={`tier-${tier.tier}`} className="scroll-mt-24">
                {/* Tier header */}
                <div className={`mb-6 rounded-2xl border ${theme.border} ${theme.bg} px-6 py-4`}>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.text}`}>
                      Tier {tier.tier}
                    </span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">
                      {tier.courses.length} courses
                    </span>
                  </div>
                  <h2 className="mt-1 text-2xl font-bold text-white">{tier.tierTitle}</h2>
                  <p className="mt-1 text-sm text-gray-400">{tier.tierSubtitle}</p>
                </div>

                {/* Courses in this tier */}
                <div className="grid gap-5 lg:grid-cols-2">
                  {tier.courses.map((course) => {
                    const courseCompleted = course.lessons.filter((l) =>
                      completed.has(`${course.slug}/${l.slug}`)
                    ).length;
                    const total = course.lessons.length;
                    return (
                      <div
                        key={course.slug}
                        className="rounded-2xl border border-dark-border bg-dark-card p-5 transition-colors hover:border-gold/40"
                      >
                        {/* Course header */}
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-grow">
                            <div className="mb-1 flex items-center gap-2">
                              <span className={`text-xs font-bold ${theme.text}`}>
                                Course {course.order.toString().padStart(2, "0")}
                              </span>
                              {user && total > 0 && (
                                <span className="text-xs text-gray-500">
                                  · {courseCompleted}/{total}
                                </span>
                              )}
                            </div>
                            <Link
                              href={`/academy/courses/${course.slug}`}
                              className="text-lg font-semibold text-white hover:text-gold"
                            >
                              {course.title}
                            </Link>
                            <p className="mt-1 text-sm text-gray-400">{course.subtitle}</p>
                          </div>
                          {course.hasWorkbook && (
                            <a
                              href={`/academy/workbooks/${course.slug}.pdf`}
                              download
                              title="Download course workbook PDF"
                              className="flex flex-shrink-0 items-center gap-1.5 rounded-lg border border-dark-border bg-dark px-2.5 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-gold hover:text-gold"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                              </svg>
                              PDF
                            </a>
                          )}
                        </div>

                        {/* Lesson list */}
                        <ol className="space-y-1">
                          {course.lessons.map((lesson) => {
                            const isDone = completed.has(`${course.slug}/${lesson.slug}`);
                            return (
                              <li key={lesson.slug}>
                                <Link
                                  href={`/academy/courses/${course.slug}/lessons/${lesson.slug}`}
                                  className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-gray-300 transition-colors hover:bg-dark-hover hover:text-white"
                                >
                                  <span
                                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                                      isDone
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-dark-border text-gray-500"
                                    }`}
                                  >
                                    {isDone ? "✓" : lesson.order}
                                  </span>
                                  <span className="flex-grow leading-tight">{lesson.title}</span>
                                  <span className="flex-shrink-0 text-xs text-gray-500">
                                    {lesson.durationMinutes}m
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
