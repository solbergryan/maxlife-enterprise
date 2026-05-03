"use client";

import Link from "next/link";
import { useCourseProgress } from "./CourseProgressProvider";

interface LessonItem {
  slug: string;
  order: number;
  title: string;
  description: string;
  durationMinutes: number;
}

export function CourseLessonList({
  courseSlug,
  lessons,
  borderClass,
  bgClass,
  textClass,
}: {
  courseSlug: string;
  lessons: LessonItem[];
  borderClass: string;
  bgClass: string;
  textClass: string;
}) {
  const completed = useCourseProgress();

  return (
    <ol className="space-y-3">
      {lessons.map((lesson) => {
        const isCompleted = completed.has(lesson.slug);
        return (
          <li key={lesson.slug}>
            <Link
              href={`/academy/courses/${courseSlug}/lessons/${lesson.slug}`}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-gold/60"
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 font-bold ${
                  isCompleted
                    ? "border-green-500 bg-green-500/10 text-green-400"
                    : `${borderClass} ${bgClass} ${textClass}`
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span className="text-sm">
                    {lesson.order.toString().padStart(2, "0")}
                  </span>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white group-hover:text-gold">
                  {lesson.title}
                </h3>
                <p className="mt-1 text-sm text-gray-300 line-clamp-1">
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
  );
}
