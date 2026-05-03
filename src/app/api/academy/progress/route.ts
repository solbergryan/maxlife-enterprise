import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const courseSlug = request.nextUrl.searchParams.get("courseSlug");

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !courseSlug) {
    return NextResponse.json({ completed: [] });
  }

  const { data } = await supabase
    .from("lesson_progress")
    .select("lesson_slug")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug);

  return NextResponse.json({
    completed: data?.map((r) => r.lesson_slug) ?? [],
  });
}
