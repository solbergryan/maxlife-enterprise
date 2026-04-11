"use client";

import { useState, useTransition } from "react";
import { markLessonComplete, markLessonIncomplete } from "@/lib/academy/progress";

interface MarkCompleteButtonProps {
  courseSlug: string;
  lessonSlug: string;
  initialCompleted: boolean;
  isAuthenticated: boolean;
}

export function MarkCompleteButton({
  courseSlug,
  lessonSlug,
  initialCompleted,
  isAuthenticated,
}: MarkCompleteButtonProps) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [isPending, startTransition] = useTransition();

  if (!isAuthenticated) {
    return (
      <a
        href={`/academy/login?next=/academy/courses/${courseSlug}/lessons/${lessonSlug}`}
        className="inline-flex items-center gap-2 rounded-lg border border-gold bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
      >
        Sign in to track progress →
      </a>
    );
  }

  const handleClick = () => {
    startTransition(async () => {
      if (completed) {
        const result = await markLessonIncomplete(courseSlug, lessonSlug);
        if (result.ok) setCompleted(false);
      } else {
        const result = await markLessonComplete(courseSlug, lessonSlug);
        if (result.ok) setCompleted(true);
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 ${
        completed
          ? "border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500/20"
          : "border-gold bg-gold text-dark hover:bg-gold-dark"
      }`}
    >
      {completed ? (
        <>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          {isPending ? "Saving..." : "Completed"}
        </>
      ) : (
        <>
          {isPending ? "Saving..." : "Mark as complete"}
        </>
      )}
    </button>
  );
}
