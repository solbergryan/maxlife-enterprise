"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { deleteListingPhoto } from "@/lib/listing-photos";
import type { Listing, ListingStatus } from "@/types/listing";
import { STATUS_LABELS } from "@/types/listing";

interface Props {
  listing: Listing;
}

const STATUS_ORDER: ListingStatus[] = [
  "active",
  "under_contract",
  "sold",
  "withdrawn",
];

export function MyListingActions({ listing }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<ListingStatus>(listing.status);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function updateStatus(next: ListingStatus) {
    if (next === status) return;
    setBusy(true);
    setError("");
    const supabase = createClient();
    const { error: updateErr } = await supabase
      .from("listings")
      .update({ status: next })
      .eq("id", listing.id);
    if (updateErr) {
      setError(updateErr.message);
      setBusy(false);
      return;
    }
    setStatus(next);
    setBusy(false);
    router.refresh();
  }

  async function handleDelete() {
    if (
      !window.confirm(
        `Permanently delete "${listing.title}"? This cannot be undone.`
      )
    ) {
      return;
    }
    setBusy(true);
    setError("");
    const supabase = createClient();

    // Delete the row first (under RLS). If that fails, bail before touching
    // storage so we don't orphan files from a listing the user doesn't own.
    const { error: deleteErr } = await supabase
      .from("listings")
      .delete()
      .eq("id", listing.id);
    if (deleteErr) {
      setError(deleteErr.message);
      setBusy(false);
      return;
    }

    // Best-effort cleanup of uploaded photos — a failure here is non-fatal
    // because the listing is already gone. Worst case we leak a blob or two
    // until a sweep job is added later.
    await Promise.all(
      listing.photo_urls.map((url) =>
        deleteListingPhoto(supabase, url).catch(() => {})
      )
    );

    router.refresh();
  }

  return (
    <div className="flex flex-col gap-2 sm:min-w-[180px]">
      <Link
        href={`/marketplace/edit/${listing.id}`}
        className="text-center bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold text-sm font-medium px-3 py-1.5 rounded-md transition-colors"
      >
        Edit
      </Link>
      <select
        value={status}
        onChange={(e) => updateStatus(e.target.value as ListingStatus)}
        disabled={busy}
        className="bg-dark border border-dark-border rounded-md px-3 py-1.5 text-white text-sm focus:border-gold focus:outline-none disabled:opacity-60"
      >
        {STATUS_ORDER.map((s) => (
          <option key={s} value={s}>
            Status: {STATUS_LABELS[s]}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={handleDelete}
        disabled={busy}
        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/30 text-sm font-medium px-3 py-1.5 rounded-md transition-colors disabled:opacity-60"
      >
        Delete
      </button>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
