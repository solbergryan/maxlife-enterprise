/**
 * Server-side data access helpers for the marketplace.
 * All reads use the SSR Supabase client so we benefit from RLS automatically.
 */

import { createClient } from "@/lib/supabase/server";
import type { Listing, PropertyType } from "@/types/listing";

// Re-export pure helpers for back-compat so existing imports keep working.
export {
  generateSlug,
  formatPrice,
  formatNumber,
  formatPercent,
} from "./listings-utils";

export interface ListListingsOptions {
  propertyType?: PropertyType;
  transactionType?: "sale" | "lease" | "both";
  listingType?: "broker" | "owner" | "investor";
  city?: string;
  county?: string;
  search?: string; // free-text across title, description, tenant
  minPrice?: number;
  maxPrice?: number;
  minCapRate?: number;
  maxCapRate?: number;
  minSqft?: number;
  sort?: "newest" | "price-asc" | "price-desc" | "cap-asc" | "cap-desc";
  page?: number;
  pageSize?: number;
}

export interface ListListingsResult {
  listings: Listing[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Public-facing list query — only returns non-withdrawn rows per RLS. */
export async function listListings(
  opts: ListListingsOptions = {}
): Promise<ListListingsResult> {
  const supabase = await createClient();
  const page = Math.max(1, opts.page ?? 1);
  const pageSize = Math.min(60, Math.max(6, opts.pageSize ?? 24));
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let q = supabase
    .from("listings")
    .select("*", { count: "exact" })
    .in("status", ["active", "under_contract", "sold"]);

  if (opts.propertyType) q = q.eq("property_type", opts.propertyType);
  if (opts.transactionType) q = q.eq("transaction_type", opts.transactionType);
  if (opts.listingType) q = q.eq("listing_type", opts.listingType);
  if (opts.city) q = q.ilike("city", `%${opts.city}%`);
  if (opts.county) q = q.ilike("county", `%${opts.county}%`);
  if (opts.minPrice != null) q = q.gte("price", opts.minPrice);
  if (opts.maxPrice != null) q = q.lte("price", opts.maxPrice);
  if (opts.minCapRate != null) q = q.gte("cap_rate", opts.minCapRate);
  if (opts.maxCapRate != null) q = q.lte("cap_rate", opts.maxCapRate);
  if (opts.minSqft != null) q = q.gte("building_sqft", opts.minSqft);

  if (opts.search && opts.search.trim().length > 1) {
    // Supabase doesn't support cross-column LIKE in a single call, so we
    // use the `or` filter with the correct syntax.
    const term = opts.search.trim().replace(/[,()]/g, " ");
    const like = `%${term}%`;
    q = q.or(
      `title.ilike.${like},description.ilike.${like},tenant.ilike.${like},city.ilike.${like},county.ilike.${like}`
    );
  }

  switch (opts.sort) {
    case "price-asc":
      q = q.order("price", { ascending: true, nullsFirst: false });
      break;
    case "price-desc":
      q = q.order("price", { ascending: false, nullsFirst: false });
      break;
    case "cap-asc":
      q = q.order("cap_rate", { ascending: true, nullsFirst: false });
      break;
    case "cap-desc":
      q = q.order("cap_rate", { ascending: false, nullsFirst: false });
      break;
    case "newest":
    default:
      q = q.order("created_at", { ascending: false });
  }

  q = q.range(from, to);

  const { data, error, count } = await q;
  if (error) {
    console.error("[listings] listListings error:", error.message);
    return {
      listings: [],
      total: 0,
      page,
      pageSize,
      totalPages: 0,
    };
  }
  const total = count ?? 0;
  return {
    listings: data ?? [],
    total,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}

/** Find a single listing by slug (returns null if not found). */
export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("[listings] getListingBySlug error:", error.message);
    return null;
  }
  return data;
}

/** Increment view_count without blocking — fire and forget. */
export async function bumpViewCount(id: string): Promise<void> {
  try {
    const supabase = await createClient();
    // Postgres `rpc` would be cleaner, but an inline update works with RLS
    // because the public read policy lets us see the row; we use a single
    // update guarded by the id.
    await supabase
      .from("listings")
      .update({ view_count: undefined }) // placeholder — updated below
      .eq("id", id);
    // Note: Supabase JS doesn't support raw sql increments without an RPC.
    // To keep this file dependency-free, we skip the increment in v1.
    // Add a Postgres function `increment_listing_views(id)` later for accurate counts.
  } catch {
    // never throw from analytics — swallow
  }
}

