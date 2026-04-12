import Link from "next/link";
import type { Course } from "@/lib/academy/content";
import { TIER_THEMES, COURSE_ICONS } from "@/lib/academy/theme";

interface CourseCardProps {
  course: Course;
  progress?: number; // 0-100
  completed?: number;
  total?: number;
}

export function CourseCard({ course, progress, completed = 0, total = 0 }: CourseCardProps) {
  const hasContent = course.isContentComplete && course.lessons.length > 0;
  const href = `/academy/courses/${course.slug}`;
  const theme = TIER_THEMES[course.tier];
  const iconPath = COURSE_ICONS[course.slug];
  const lessonCount = course.lessons.length;

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col rounded-2xl border border-dark-border bg-dark-card overflow-hidden transition-all hover:border-gold/60 hover:bg-dark-hover`}
    >
      {/* Icon header with tier gradient */}
      <div className={`relative px-6 pt-6 pb-4 bg-gradient-to-br ${theme.gradient} to-transparent`}>
        <div className="flex items-start justify-between gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${theme.bg} ${theme.border} border`}>
            {iconPath ? (
              <svg className={`h-6 w-6 ${theme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d={iconPath} />
              </svg>
            ) : (
              <span className={`text-sm font-bold ${theme.text}`}>
                {course.order.toString().padStart(2, "0")}
              </span>
            )}
          </div>
          <div className="flex flex-wrap justify-end gap-1.5">
            {course.isSpecialty && (
              <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
                ★ Specialty
              </span>
            )}
            {!hasContent && (
              <span className="rounded-full border border-gray-600 bg-dark px-2.5 py-0.5 text-xs font-medium text-gray-400">
                Coming soon
              </span>
            )}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className={`text-xs font-semibold uppercase tracking-wider ${theme.text}`}>
            Course {course.order.toString().padStart(2, "0")}
          </span>
          <span className="text-xs text-gray-600">·</span>
          <span className="text-xs text-gray-500">Tier {course.tier}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-6 pb-6">
        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-gold">
          {course.title}
        </h3>

        <p className="mb-4 text-sm text-gray-400 line-clamp-2">{course.subtitle}</p>

        <p className="mb-5 flex-grow text-sm text-gray-500 line-clamp-3">
          {course.description}
        </p>

        <div className="mt-auto space-y-3">
          {/* Lesson count + duration badges */}
          <div className="flex flex-wrap gap-2">
            {lessonCount > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-dark-border bg-dark px-2.5 py-1 text-xs text-gray-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {lessonCount} lessons
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dark-border bg-dark px-2.5 py-1 text-xs text-gray-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.durationMinutes} min
            </span>
          </div>

          {/* Progress bar */}
          {progress !== undefined && total > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-400">
                <span>{completed} / {total} lessons</span>
                <span className={theme.text}>{progress}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-dark-border">
                <div
                  className={`h-full ${theme.bar} transition-all`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* CTA */}
          {hasContent && (
            <div className="flex items-center justify-end">
              <span className={`text-sm font-semibold ${theme.text} group-hover:translate-x-1 transition-transform`}>
                {progress && progress > 0 ? "Continue →" : "Start →"}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
