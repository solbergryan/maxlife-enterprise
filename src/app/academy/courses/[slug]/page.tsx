import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCourseParams, getAllCourses, getCourse } from "@/lib/academy/content";
import { getUser, getCompletedLessons } from "@/lib/academy/progress";
import { JsonLdScript } from "@/components/academy/JsonLdScript";
import { buildCourseJsonLd, buildBreadcrumbJsonLd } from "@/lib/academy/seo";

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
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Academy", url: "/academy" },
          { name: course.title, url: `/academy/courses/${course.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="border-b border-dark-border bg-dark py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/academy"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light"
          >
            ← Back to all courses
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Tier {course.tier} — {course.tierTitle}
            </span>
            <span className="text-xs text-gray-500">·</span>
            <span className="text-xs text-gray-400">
              Course {course.order.toString().padStart(2, "0")}
            </span>
            {course.cireLevel && (
              <>
                <span className="text-xs text-gray-500">·</span>
                <span className="rounded-full border border-gold/30 bg-gold/5 px-2.5 py-0.5 text-xs text-gold">
                  {course.cireLevel}
                </span>
              </>
            )}
            {course.isSpecialty && (
              <>
                <span className="text-xs text-gray-500">·</span>
                <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
                  ★ MaxLife Specialty
                </span>
              </>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {course.title}
          </h1>
          <p className="mb-6 text-xl text-gold">{course.subtitle}</p>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-gold">⏱</span>
              {course.durationMinutes} minutes
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">📚</span>
              {course.lessons.length > 0
                ? `${course.lessons.length} lessons`
                : "Coming soon"}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">$</span>
              Free forever
            </div>
          </div>

          {user && hasContent && (
            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>
                  Your progress: {completedCount} / {course.lessons.length} lessons
                </span>
                <span className="text-gold">{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-dark-border">
                <div
                  className="h-full bg-gold transition-all"
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
                            : "border-dark-border bg-dark text-gray-500"
                        }`}
                      >
                        {isCompleted ? (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          lesson.order.toString().padStart(2, "0")
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

      {/* Next course */}
      {nextCourse && (
        <section className="border-t border-dark-border bg-dark-card py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Up next
                </p>
                <h3 className="text-xl font-bold text-white">{nextCourse.title}</h3>
                <p className="text-sm text-gray-400">{nextCourse.subtitle}</p>
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
      )}
    </>
  );
}
