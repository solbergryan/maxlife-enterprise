"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

/**
 * Server actions for lesson progress.
 * All writes are guarded by Supabase RLS (users can only write their own rows).
 */

export async function getUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getCompletedLessons(
  userId: string,
  courseSlug?: string
): Promise<Set<string>> {
  const supabase = await createClient();
  let query = supabase
    .from("lesson_progress")
    .select("course_slug, lesson_slug")
    .eq("user_id", userId);

  if (courseSlug) {
    query = query.eq("course_slug", courseSlug);
  }

  const { data, error } = await query;
  if (error || !data) return new Set();

  // Keyed as "courseSlug/lessonSlug"
  return new Set(data.map((r) => `${r.course_slug}/${r.lesson_slug}`));
}

export async function getCourseProgress(
  userId: string
): Promise<Record<string, number>> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("course_slug")
    .eq("user_id", userId);

  if (error || !data) return {};

  const counts: Record<string, number> = {};
  for (const row of data) {
    counts[row.course_slug] = (counts[row.course_slug] ?? 0) + 1;
  }
  return counts;
}

export async function markLessonComplete(
  courseSlug: string,
  lessonSlug: string
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not signed in" };

  const { error } = await supabase
    .from("lesson_progress")
    .upsert(
      {
        user_id: user.id,
        course_slug: courseSlug,
        lesson_slug: lessonSlug,
      },
      { onConflict: "user_id,course_slug,lesson_slug" }
    );

  if (error) return { ok: false, error: error.message };

  revalidatePath(`/academy/courses/${courseSlug}/lessons/${lessonSlug}`);
  revalidatePath(`/academy/courses/${courseSlug}`);
  revalidatePath(`/academy/dashboard`);
  return { ok: true };
}

export async function markLessonIncomplete(
  courseSlug: string,
  lessonSlug: string
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not signed in" };

  const { error } = await supabase
    .from("lesson_progress")
    .delete()
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .eq("lesson_slug", lessonSlug);

  if (error) return { ok: false, error: error.message };

  revalidatePath(`/academy/courses/${courseSlug}/lessons/${lessonSlug}`);
  revalidatePath(`/academy/courses/${courseSlug}`);
  revalidatePath(`/academy/dashboard`);
  return { ok: true };
}
