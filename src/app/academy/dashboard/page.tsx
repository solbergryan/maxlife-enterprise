import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAllCourses, groupByTier } from "@/lib/academy/content";
import { getUser, getCourseProgress } from "@/lib/academy/progress";
import { CourseCard } from "@/components/academy/CourseCard";
import { SignOutButton } from "./SignOutButton";

export const metadata: Metadata = {
  title: "Your Dashboard — MaxLife Academy",
  description: "Track your progress across MaxLife Academy's 20-course commercial real estate curriculum.",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) redirect("/academy/login?next=/academy/dashboard");

  const courses = await getAllCourses();
  const progressCounts = await getCourseProgress(user.id);
  const tiers = groupByTier(courses);

  const totalLessons = courses.reduce((sum, c) => sum + c.lessons.length, 0);
  const completedLessons = Object.values(progressCounts).reduce((a, b) => a + b, 0);
  const overallProgress =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const completedCourses = courses.filter(
    (c) => c.lessons.length > 0 && (progressCounts[c.slug] ?? 0) >= c.lessons.length
  );

  const inProgressCourse = courses.find(
    (c) =>
      c.lessons.length > 0 &&
      (progressCounts[c.slug] ?? 0) > 0 &&
      (progressCounts[c.slug] ?? 0) < c.lessons.length
  );

  // Next lesson to resume
  let resumeHref = "/academy/courses/01-intro-to-commercial-real-estate/lessons/01-what-is-commercial-real-estate";
  if (inProgressCourse) {
    resumeHref = `/academy/courses/${inProgressCourse.slug}`;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark">
      <section className="border-b border-dark-border bg-dark-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
                Welcome back
              </p>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {user.user_metadata?.full_name || user.email}
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                {completedLessons} of {totalLessons} lessons complete · {overallProgress}% overall
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href={resumeHref}
                className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
              >
                {completedLessons > 0 ? "Continue learning →" : "Start Course 1 →"}
              </Link>
              <SignOutButton />
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-dark-border">
            <div
              className="h-full bg-gold transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Completed courses */}
      {completedCourses.length > 0 && (
        <section className="border-b border-dark-border bg-dark py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-5 text-xl font-bold text-white">
              🏆 Completed ({completedCourses.length})
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {completedCourses.map((course) => (
                <div
                  key={course.slug}
                  className="flex items-center justify-between rounded-xl border border-green-500/30 bg-green-500/5 p-4"
                >
                  <div>
                    <div className="text-xs text-green-400">
                      Course {course.order.toString().padStart(2, "0")}
                    </div>
                    <div className="font-semibold text-white">{course.title}</div>
                  </div>
                  <Link
                    href={`/academy/courses/${course.slug}`}
                    className="text-sm text-green-400 hover:text-green-300"
                  >
                    Review →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All courses */}
      <section className="bg-dark py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-bold text-white">Your curriculum</h2>
          <div className="space-y-12">
            {tiers.map((tier) => (
              <div key={tier.tier}>
                <div className="mb-5 flex items-baseline gap-4">
                  <div className="text-3xl font-bold text-gold/30">
                    {tier.tier.toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tier.tierTitle}</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tier.courses.map((course) => {
                    const completed = progressCounts[course.slug] ?? 0;
                    const total = course.lessons.length;
                    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
                    return (
                      <CourseCard
                        key={course.slug}
                        course={course}
                        progress={progress}
                        completed={completed}
                        total={total}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
