import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { embed } from "@/lib/embeddings";
import { enforce, getClientKey, leadLimiter } from "@/lib/ratelimit";

export const runtime = "nodejs";

/**
 * POST /api/search/listings
 * Body: { query: string, limit?: number }
 *
 * Attempts vector similarity search via pgvector (match_listings RPC).
 * Falls back to Postgres full-text search (tsvector) if:
 *   - No embedding API key is configured, or
 *   - The embedding call fails, or
 *   - No vector results are returned above threshold.
 *
 * Returns: { results, total, mode: "vector" | "fulltext" }
 */
export async function POST(req: NextRequest) {
  const rl = await enforce(leadLimiter, getClientKey(req));
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": Math.ceil((rl.reset - Date.now()) / 1000).toString() } }
    );
  }

  let body: { query?: string; limit?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const query = (body.query || "").trim();
  if (query.length < 2) {
    return NextResponse.json({ error: "Query must be at least 2 characters" }, { status: 400 });
  }
  const limit = Math.min(50, Math.max(1, Number(body.limit) || 10));

  const supabase = await createClient();

  // ── Try vector search ──────────────────────────────────────────────────────
  const embedding = await embed(query);
  if (embedding) {
    const { data, error } = await supabase.rpc("match_listings", {
      query_embedding: embedding,
      match_threshold: 0.3,
      match_count: limit,
    });

    if (!error && data && data.length > 0) {
      return NextResponse.json({
        results: data.map(addListingUrl),
        total: data.length,
        mode: "vector",
      });
    }
    if (error) {
      console.error("[search/listings] pgvector error:", error.message);
      // fall through to FTS
    }
  }

  // ── Fallback: Postgres full-text search ───────────────────────────────────
  const tsQuery = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(Boolean)
    .join(" & ");

  if (!tsQuery) {
    return NextResponse.json({ results: [], total: 0, mode: "fulltext" });
  }

  const { data: ftsData, error: ftsError } = await supabase
    .from("listings")
    .select(
      "id, slug, title, property_type, transaction_type, city, state, price, cap_rate, building_sqft, tenant, lease_type, status, photo_urls"
    )
    .neq("status", "withdrawn")
    .textSearch("fts", tsQuery, { type: "websearch", config: "english" })
    .limit(limit);

  if (ftsError) {
    console.error("[search/listings] FTS error:", ftsError.message);
    return NextResponse.json({ results: [], total: 0, mode: "fulltext" });
  }

  return NextResponse.json({
    results: (ftsData ?? []).map(addListingUrl),
    total: ftsData?.length ?? 0,
    mode: "fulltext",
  });
}

function addListingUrl(row: { slug: string; [key: string]: unknown }) {
  return {
    ...row,
    url: `https://maxlifedevelopment.com/marketplace/${row.slug}`,
  };
}
