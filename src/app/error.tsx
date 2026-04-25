"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-dark">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
          Something went wrong
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          We hit a snag
        </h1>
        <p className="mb-8 max-w-md text-gray-300">
          The page couldn&rsquo;t load. Try again, or head back and pick a
          different path.
        </p>
        {error.digest && (
          <p className="mb-6 font-mono text-xs text-gray-600">
            ref: {error.digest}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-gold"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
