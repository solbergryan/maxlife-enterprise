import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-dark">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          This page isn&rsquo;t here
        </h1>
        <p className="mb-8 max-w-md text-gray-300">
          The link might be outdated or the page may have moved. Try one of
          these instead.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
          >
            Go home
          </Link>
          <Link
            href="/marketplace"
            className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold"
          >
            Browse listings
          </Link>
          <Link
            href="/academy"
            className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold"
          >
            Visit the Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
