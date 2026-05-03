"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProgressCtx = createContext<Set<string>>(new Set());

export function useCourseProgress() {
  return useContext(ProgressCtx);
}

export function CourseProgressProvider({
  courseSlug,
  children,
}: {
  courseSlug: string;
  children: React.ReactNode;
}) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch(`/api/academy/progress?courseSlug=${encodeURIComponent(courseSlug)}`)
      .then((r) => r.json())
      .then(({ completed: arr }: { completed: string[] }) =>
        setCompleted(new Set(arr))
      )
      .catch(() => {});
  }, [courseSlug]);

  return <ProgressCtx.Provider value={completed}>{children}</ProgressCtx.Provider>;
}
