import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/academy/progress";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign in — MaxLife Academy",
  description: "Sign in to MaxLife Academy to track your progress across all commercial real estate courses and earn your CIRE certificate.",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ next?: string }>;
}

export default async function LoginPage({ searchParams }: PageProps) {
  const user = await getUser();
  const { next } = await searchParams;

  if (user) {
    redirect(next ?? "/academy/dashboard");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark py-16">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <Link
            href="/academy"
            className="text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light"
          >
            ← MaxLife Academy
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white">Sign in</h1>
          <p className="mt-2 text-sm text-gray-400">
            Free forever. No credit card. Track your progress and earn certificates.
          </p>
        </div>

        <div className="rounded-2xl border border-dark-border bg-dark-card p-8">
          <LoginForm nextPath={next} />
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          By signing in you agree that MaxLife Development may email you new
          lessons and course updates. You can unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
