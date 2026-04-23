import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCourseParams, getAllCourses, getCourse } from "@/lib/academy/content";
import { getUser, getCompletedLessons } from "@/lib/academy/progress";
import { JsonLdScript } from "@/components/academy/JsonLdScript";
import { buildCourseJsonLd } from "@/lib/academy/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadCaptureForm from "@/components/leads/LeadCaptureForm";
import { TIER_THEMES, COURSE_ICONS } from "@/lib/academy/theme";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return await getAllCourseParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} — Free CRE Course`,
    description: course.description,
    alternates: { canonical: `/academy/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} — MaxLife Academy`,
      description: course.description,
      url: `https://maxlifedevelopment.com/academy/courses/${course.slug}`,
    },
    keywords: course.keywords,
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) notFound();

  const allCourses = await getAllCourses();
  const courseIndex = allCourses.findIndex((c) => c.slug === course.slug);
  const nextCourse = allCourses[courseIndex + 1];

  const user = await getUser();
  const completed = user ? await getCompletedLessons(user.id, course.slug) : new Set<string>();
  const completedCount = course.lessons.filter((l) =>
    completed.has(`${course.slug}/${l.slug}`)
  ).length;
  const progress =
    course.lessons.length > 0
      ? Math.round((completedCount / course.lessons.length) * 100)
      : 0;

  const hasContent = course.isContentComplete && course.lessons.length > 0;
  const firstLesson = course.lessons[0];

  return (
    <>
      <JsonLdScript data={buildCourseJsonLd(course)} />
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Academy", href: "/academy" },
            { name: course.title, href: `/academy/courses/${course.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      {(() => {
        const theme = TIER_THEMES[course.tier];
        const iconPath = COURSE_ICONS[course.slug];
        return (
      <section className={`border-b border-dark-border bg-gradient-to-br ${theme.gradient} to-dark py-14 sm:py-20`}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/academy"
            className={`mb-6 inline-flex items-center gap-2 text-sm ${theme.text} hover:opacity-80`}
          >
            ← Back to all courses
          </Link>

          <div className="flex items-start gap-6 mb-6">
            {/* Course icon */}
            <div className={`hidden sm:flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl ${theme.bg} ${theme.border} border-2`}>
              {iconPath ? (
                <svg className={`h-10 w-10 ${theme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d={iconPath} />
                </svg>
              ) : (
                <span className={`text-2xl font-bold ${theme.text}`}>
                  {course.order.toString().padStart(2, "0")}
                </span>
              )}
            </div>

            <div className="flex-grow">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className={`rounded-full ${theme.bg} ${theme.border} border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${theme.text}`}>
                  Tier {course.tier} — {course.tierTitle}
                </span>
                <span className="text-xs text-gray-400">
                  Course {course.order.toString().padStart(2, "0")}
                </span>
                {course.cireLevel && (
                  <span className={`rounded-full ${theme.bg} ${theme.border} border px-2.5 py-0.5 text-xs ${theme.text}`}>
                    {course.cireLevel}
                  </span>
                )}
                {course.isSpecialty && (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
                    ★ MaxLife Specialty
                  </span>
                )}
              </div>

              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {course.title}
              </h1>
            </div>
          </div>

          <p className={`mb-6 text-xl ${theme.text}`}>{course.subtitle}</p>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className={`inline-flex items-center gap-2 rounded-full ${theme.bg} ${theme.border} border px-3 py-1.5 ${theme.text}`}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.durationMinutes} minutes
            </span>
            <span className={`inline-flex items-center gap-2 rounded-full ${theme.bg} ${theme.border} border px-3 py-1.5 ${theme.text}`}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {course.lessons.length > 0 ? `${course.lessons.length} lessons` : "Coming soon"}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark px-3 py-1.5 text-gray-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1" />
              </svg>
              Free forever
            </span>
          </div>

          {user && hasContent && (
            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>
                  Your progress: {completedCount} / {course.lessons.length} lessons
                </span>
                <span className={theme.text}>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-dark-border">
                <div
                  className={`h-full ${theme.bar} transition-all`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {hasContent && firstLesson && (
              <Link
                href={`/academy/courses/${course.slug}/lessons/${firstLesson.slug}`}
                className="rounded-lg bg-gold px-6 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
              >
                {progress > 0 ? "Continue course →" : "Start course →"}
              </Link>
            )}
            {!hasContent && !user && (
              <Link
                href="/academy/login"
                className="rounded-lg bg-gold px-6 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
              >
                Get notified when this course launches
              </Link>
            )}
          </div>
        </div>
      </section>
        );
      })()}

      {/* Workbook lead magnet */}
      {course.hasWorkbook && (
        <section className="border-b border-dark-border bg-dark py-12">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
                Free companion workbook
              </div>
              <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                Download the {course.title} Workbook
              </h2>
              <p className="text-gray-400">
                Printable PDF with exercises, worksheets, and fill-in notes
                designed to go alongside every lesson in this course.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href={`/academy/workbooks/${course.slug}.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3 text-base font-semibold text-dark transition-colors hover:bg-gold-dark"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download PDF workbook
              </a>
            </div>
            <details className="mx-auto mt-6 max-w-md text-center text-sm">
              <summary className="cursor-pointer text-gray-500 hover:text-gray-300">
                Prefer it emailed to you?
              </summary>
              <div className="mt-4 text-left">
                <LeadCaptureForm
                  endpoint="/api/leads/workbook"
                  payload={{ courseSlug: course.slug }}
                  ctaLabel="Email me the workbook PDF"
                  successMessage="Your workbook is on the way."
                  theme="dark"
                >
                  No spam. One email with the PDF, and occasionally new CRE
                  resources you can unsubscribe from any time.
                </LeadCaptureForm>
              </div>
            </details>
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="border-b border-dark-border bg-dark-card py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white">What you'll learn</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {course.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lessons */}
      {(() => {
        const lessonTheme = TIER_THEMES[course.tier];
        return (
      <section className="bg-dark py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Lessons</h2>

          {hasContent ? (
            <ol className="space-y-3">
              {course.lessons.map((lesson) => {
                const isCompleted = completed.has(`${course.slug}/${lesson.slug}`);
                return (
                  <li key={lesson.slug}>
                    <Link
                      href={`/academy/courses/${course.slug}/lessons/${lesson.slug}`}
                      className="group flex items-center gap-4 rounded-xl border border-dark-border bg-dark-card p-5 transition-all hover:border-gold/60"
                    >
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 font-bold ${
                          isCompleted
                            ? "border-green-500 bg-green-500/10 text-green-400"
                            : `${lessonTheme.border} ${lessonTheme.bg} ${lessonTheme.text}`
                        }`}
                      >
                        {isCompleted ? (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-sm">{lesson.order.toString().padStart(2, "0")}</span>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-white group-hover:text-gold">
                          {lesson.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400 line-clamp-1">
                          {lesson.description}
                        </p>
                      </div>
                      <div className="hidden flex-shrink-0 text-xs text-gray-500 sm:block">
                        {lesson.durationMinutes} min
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="rounded-2xl border border-dashed border-dark-border bg-dark-card p-10 text-center">
              <div className="mb-4 text-5xl">🚧</div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Full lesson content is coming soon
              </h3>
              <p className="mx-auto mb-6 max-w-md text-gray-400">
                We've published the course outline and learning outcomes above.
                The full lessons are on the writing roadmap — sign up free to
                get notified when they launch.
              </p>
              {!user && (
                <Link
                  href="/academy/login"
                  className="inline-block rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
                >
                  Get notified →
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
        );
      })()}

      {/* Next course */}
      {nextCourse && (() => {
        const nextTheme = TIER_THEMES[nextCourse.tier];
        const nextIcon = COURSE_ICONS[nextCourse.slug];
        return (
        <section className={`border-t border-dark-border bg-gradient-to-r ${nextTheme.gradient} to-dark-card py-12`}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className={`hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${nextTheme.bg} ${nextTheme.border} border`}>
                  {nextIcon ? (
                    <svg className={`h-6 w-6 ${nextTheme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={nextIcon} />
                    </svg>
                  ) : (
                    <span className={`text-sm font-bold ${nextTheme.text}`}>
                      {nextCourse.order.toString().padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div>
                  <p className={`mb-1 text-xs font-semibold uppercase tracking-wider ${nextTheme.text}`}>
                    Up next — Course {nextCourse.order.toString().padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-bold text-white">{nextCourse.title}</h3>
                  <p className="text-sm text-gray-400">{nextCourse.subtitle}</p>
                </div>
              </div>
              <Link
                href={`/academy/courses/${nextCourse.slug}`}
                className="whitespace-nowrap rounded-lg border border-gold bg-transparent px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-dark"
              >
                View course →
              </Link>
            </div>
          </div>
        </section>
        );
      })()}
    </>
  );
}
