import Link from "next/link";
import type { Course } from "@/lib/academy/content";

interface CourseCardProps {
  course: Course;
  progress?: number; // 0-100
  completed?: number;
  total?: number;
}

export function CourseCard({ course, progress, completed = 0, total = 0 }: CourseCardProps) {
  const hasContent = course.isContentComplete && course.lessons.length > 0;
  const href = `/academy/courses/${course.slug}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-gold/60 hover:bg-dark-hover"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
          Course {course.order.toString().padStart(2, "0")}
        </span>
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

      <h3 className="mb-2 text-lg font-bold text-white group-hover:text-gold">
        {course.title}
      </h3>

      <p className="mb-4 text-sm text-gray-400 line-clamp-2">{course.subtitle}</p>

      <p className="mb-5 flex-grow text-sm text-gray-500 line-clamp-3">
        {course.description}
      </p>

      <div className="mt-auto space-y-3">
        {progress !== undefined && total > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-400">
              <span>{completed} / {total} lessons</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-dark-border">
              <div
                className="h-full bg-gold transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{course.durationMinutes} min</span>
          {hasContent && (
            <span className="text-gold group-hover:translate-x-1 transition-transform">
              {progress && progress > 0 ? "Continue →" : "Start →"}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
