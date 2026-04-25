import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { formatPrice } from "@/lib/listings-utils";
import {
  PROPERTY_TYPE_LABELS,
  STATUS_LABELS,
  type Listing,
} from "@/types/listing";
import { MyListingActions } from "./MyListingActions";

export const metadata: Metadata = {
  title: "My Listings | MaxLife Marketplace",
  description: "Manage your posted commercial real estate listings on MaxLife.",
  robots: { index: false, follow: false },
};

export default async function MyListingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/academy/login?next=/marketplace/my-listings");
  }

  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[my-listings] fetch error:", error.message);
  }
  const listings: Listing[] = data ?? [];

  return (
    <div className="bg-dark min-h-[calc(100vh-4rem)] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <Link
              href="/marketplace"
              className="text-gray-300 hover:text-gold text-sm inline-flex items-center gap-1 mb-4"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to marketplace
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              My <span className="text-gold">Listings</span>
            </h1>
            <p className="text-gray-300">
              Manage everything you&apos;ve posted. {listings.length} total.
            </p>
          </div>
          <Link
            href="/marketplace/submit"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            + New Listing
          </Link>
        </div>

        {listings.length === 0 ? (
          <div className="border border-white/10 rounded-xl p-12 text-center bg-white/[0.04]/40">
            <p className="text-gray-300 mb-4">
              You haven&apos;t posted any listings yet.
            </p>
            <Link
              href="/marketplace/submit"
              className="text-gold hover:underline font-medium"
            >
              Post your first listing →
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {listings.map((l) => (
              <div
                key={l.id}
                className="border border-white/10 rounded-xl p-5 bg-white/[0.04]/40 flex flex-col sm:flex-row gap-4"
              >
                {/* Thumb */}
                <div className="sm:w-32 flex-shrink-0">
                  {l.photo_urls.length > 0 ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={l.photo_urls[0]}
                      alt={l.title}
                      className="w-full sm:w-32 h-24 object-cover rounded-md border border-white/10"
                    />
                  ) : (
                    <div className="w-full sm:w-32 h-24 rounded-md border border-white/10 bg-gradient-to-br from-gold/10 to-navy-dark/40 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Main */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1 text-xs">
                    <span className="text-gold font-semibold uppercase tracking-wider bg-gold/10 px-2 py-0.5 rounded">
                      {PROPERTY_TYPE_LABELS[l.property_type]}
                    </span>
                    <span className="text-gray-300 border border-white/10 px-2 py-0.5 rounded">
                      {STATUS_LABELS[l.status]}
                    </span>
                    <span className="text-gray-600">
                      Posted {new Date(l.created_at).toLocaleDateString()}
                    </span>
                    {l.view_count > 0 && (
                      <span className="text-gray-600">{l.view_count} views</span>
                    )}
                  </div>
                  <Link
                    href={`/marketplace/${l.slug}`}
                    className="block text-white font-semibold truncate hover:text-gold transition-colors"
                  >
                    {l.title}
                  </Link>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {l.city}
                    {l.state ? `, ${l.state}` : ""} · {formatPrice(l.price)}
                  </p>
                </div>

                {/* Actions */}
                <MyListingActions listing={l} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
