"use client";

import { useCourseProgress } from "./CourseProgressProvider";

export function CourseProgressBar({
  lessonCount,
  tierBarClass,
  tierTextClass,
}: {
  lessonCount: number;
  tierBarClass: string;
  tierTextClass: string;
}) {
  const completed = useCourseProgress();
  const count = completed.size;
  const progress = lessonCount > 0 ? Math.round((count / lessonCount) * 100) : 0;

  if (progress === 0) return null;

  return (
    <div className="mt-8 space-y-2">
      <div className="flex justify-between text-sm text-gray-300">
        <span>
          Your progress: {count} / {lessonCount} lessons
        </span>
        <span className={tierTextClass}>{progress}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-dark-border">
        <div
          className={`h-full ${tierBarClass} transition-all`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
