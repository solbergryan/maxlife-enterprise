import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SubmitForm } from "../../submit/SubmitForm";
import type { Listing } from "@/types/listing";

export const metadata: Metadata = {
  title: "Edit Listing | MaxLife Marketplace",
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditListingPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/academy/login?next=/marketplace/edit/${id}`);
  }

  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("[edit-listing] fetch error:", error.message);
  }
  if (!data) notFound();

  const listing = data as Listing;
  // RLS already restricts updates to owner, but we also want to gate the view.
  if (listing.user_id !== user.id) notFound();

  return (
    <div className="bg-dark min-h-[calc(100vh-4rem)] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/marketplace/my-listings"
          className="text-gray-400 hover:text-gold text-sm inline-flex items-center gap-1 mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          My listings
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Edit <span className="text-gold">Listing</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Update any field below and save. The listing&apos;s URL stays the same.
        </p>
        <SubmitForm userEmail={user.email ?? ""} editing={listing} />
      </div>
    </div>
  );
}
