import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function safeNext(value: string | null): string {
  if (!value) return "/academy/dashboard";
  // Must be a same-origin path: starts with "/" but not "//" (protocol-relative)
  // and not "/\" (which some browsers normalize to "//").
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return "/academy/dashboard";
  }
  return value;
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = safeNext(searchParams.get("next"));

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // On error, bounce back to login with an error flag
  return NextResponse.redirect(`${origin}/academy/login?error=auth`);
}
