import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  getAllLessonParams,
  getCourse,
  getLesson,
  getLessonNav,
} from "@/lib/academy/content";
import { getUser, getCompletedLessons } from "@/lib/academy/progress";
import { mdxComponents } from "@/components/academy/MdxComponents";
import { MarkCompleteButton } from "@/components/academy/MarkCompleteButton";
import { JsonLdScript } from "@/components/academy/JsonLdScript";
import { buildLessonJsonLd, buildBreadcrumbJsonLd } from "@/lib/academy/seo";

interface PageProps {
  params: Promise<{ slug: string; lessonSlug: string }>;
}

export async function generateStaticParams() {
  return await getAllLessonParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const [course, lesson] = await Promise.all([
    getCourse(slug),
    getLesson(slug, lessonSlug),
  ]);

  if (!course || !lesson) return { title: "Lesson Not Found" };

  return {
    title: `${lesson.title} — ${course.title}`,
    description: lesson.description,
    alternates: {
      canonical: `/academy/courses/${slug}/lessons/${lessonSlug}`,
    },
    openGraph: {
      title: `${lesson.title} — MaxLife Academy`,
      description: lesson.description,
      url: `https://maxlifedevelopment.com/academy/courses/${slug}/lessons/${lessonSlug}`,
      type: "article",
    },
    keywords: lesson.keywords,
  };
}

export default async function LessonPage({ params }: PageProps) {
  const { slug, lessonSlug } = await params;
  const [course, lesson, nav] = await Promise.all([
    getCourse(slug),
    getLesson(slug, lessonSlug),
    getLessonNav(slug, lessonSlug),
  ]);

  if (!course || !lesson) notFound();

  const user = await getUser();
  const completed = user ? await getCompletedLessons(user.id, slug) : new Set<string>();
  const isCompleted = completed.has(`${slug}/${lessonSlug}`);

  return (
    <>
      <JsonLdScript data={buildLessonJsonLd(course, lesson)} />
      <JsonLdScript
        data={buildBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Academy", url: "/academy" },
          { name: course.title, url: `/academy/courses/${slug}` },
          { name: lesson.title, url: `/academy/courses/${slug}/lessons/${lessonSlug}` },
        ])}
      />

      <div className="bg-dark">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          {/* Sidebar — lesson TOC */}
          <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="rounded-2xl border border-dark-border bg-dark-card p-5">
              <Link
                href={`/academy/courses/${slug}`}
                className="mb-4 block text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light"
              >
                ← {course.title}
              </Link>
              <div className="space-y-1">
                {course.lessons.map((l) => {
                  const lessonCompleted = completed.has(`${slug}/${l.slug}`);
                  const isCurrent = l.slug === lessonSlug;
                  return (
                    <Link
                      key={l.slug}
                      href={`/academy/courses/${slug}/lessons/${l.slug}`}
                      className={`flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        isCurrent
                          ? "bg-gold/10 text-gold"
                          : "text-gray-400 hover:bg-dark-hover hover:text-white"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                          lessonCompleted
                            ? "bg-green-500/20 text-green-400"
                            : isCurrent
                              ? "bg-gold/20 text-gold"
                              : "bg-dark-border text-gray-500"
                        }`}
                      >
                        {lessonCompleted ? "✓" : l.order}
                      </span>
                      <span className="leading-tight">{l.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <article className="min-w-0">
            <header className="mb-8 border-b border-dark-border pb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
                Lesson {lesson.order.toString().padStart(2, "0")} · {lesson.durationMinutes} min read
              </p>
              <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="text-lg text-gray-400">{lesson.description}</p>
            </header>

            <div className="prose prose-invert max-w-none">
              <MDXRemote
                source={lesson.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    ],
                  },
                }}
              />
            </div>

            {/* Mark complete + footer nav */}
            <div className="mt-12 border-t border-dark-border pt-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <MarkCompleteButton
                  courseSlug={slug}
                  lessonSlug={lessonSlug}
                  initialCompleted={isCompleted}
                  isAuthenticated={!!user}
                />
                <div className="flex gap-3">
                  {nav.prev && (
                    <Link
                      href={`/academy/courses/${nav.prev.courseSlug}/lessons/${nav.prev.lessonSlug}`}
                      className="rounded-lg border border-dark-border bg-dark-card px-4 py-2.5 text-sm text-gray-300 transition-colors hover:border-gold hover:text-gold"
                    >
                      ← Previous
                    </Link>
                  )}
                  {nav.next && (
                    <Link
                      href={`/academy/courses/${nav.next.courseSlug}/lessons/${nav.next.lessonSlug}`}
                      className="rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
                    >
                      Next lesson →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
