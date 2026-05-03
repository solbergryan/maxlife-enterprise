"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROPERTY_TYPE_LABELS, type PropertyType } from "@/types/listing";

interface ListingResult {
  id: string;
  slug: string;
  title: string;
  property_type: PropertyType;
  transaction_type: string;
  city: string;
  state: string | null;
  price: number | null;
  cap_rate: number | null;
  building_sqft: number | null;
  tenant: string | null;
  status: string;
  photo_urls: string[];
  similarity?: number;
  url: string;
}

interface SearchResponse {
  results: ListingResult[];
  total: number;
  mode: "vector" | "fulltext";
}

function formatPrice(price: number | null): string {
  if (price == null) return "Price TBD";
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(2).replace(/\.?0+$/, "")}M`;
  if (price >= 1_000) return `$${Math.round(price / 1000)}K`;
  return `$${price.toLocaleString()}`;
}

const EXAMPLE_QUERIES = [
  "passive NNN investment near airport",
  "retail space for lease under $5K/month",
  "industrial warehouse Orlando under $3M",
  "NNN Dollar General long lease term",
  "multifamily value-add Brevard County",
];

export default function SemanticSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ListingResult[]>([]);
  const [mode, setMode] = useState<"vector" | "fulltext" | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  async function search(q: string) {
    if (q.trim().length < 3) {
      setResults([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/search/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, limit: 8 }),
      });
      if (!res.ok) throw new Error("Search failed");
      const data: SearchResponse = await res.json();
      setResults(data.results);
      setMode(data.mode);
      setOpen(true);
    } catch {
      setError("Search unavailable");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    setQuery(q);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(q), 400);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    search(query);
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center">
          {/* AI sparkle icon */}
          <div className="absolute left-3 text-gold pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Describe what you're looking for… e.g. 'passive NNN under $3M long lease'"
            className="w-full bg-white/[0.04] border border-gold/30 rounded-lg pl-9 pr-24 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none text-sm"
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 bg-gold hover:bg-gold-dark text-dark text-xs font-semibold px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
          >
            {loading ? "…" : "Search"}
          </button>
        </div>
      </form>

      {/* Example queries */}
      {!open && query.length === 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {EXAMPLE_QUERIES.map((q) => (
            <button
              key={q}
              onClick={() => { setQuery(q); search(q); }}
              className="text-xs text-gray-500 hover:text-gold border border-white/10 hover:border-gold/30 px-2.5 py-1 rounded-full transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

      {/* Results dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-dark-card border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
          {results.length === 0 ? (
            <p className="text-gray-500 text-sm px-4 py-6 text-center">No matching listings found.</p>
          ) : (
            <>
              <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <span className="text-gray-500 text-xs">
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </span>
                {mode && (
                  <span className="text-xs text-gold/60">
                    {mode === "vector" ? "✦ AI search" : "Text search"}
                  </span>
                )}
              </div>
              <ul className="divide-y divide-white/5 max-h-[420px] overflow-y-auto">
                {results.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={`/marketplace/${r.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.04] transition-colors group"
                    >
                      {/* Thumbnail */}
                      <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-white/[0.04] relative">
                        {r.photo_urls.length > 0 ? (
                          <Image src={r.photo_urls[0]} alt={r.title} fill sizes="48px" className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gold/30 text-lg">▦</div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white text-sm font-medium group-hover:text-gold transition-colors truncate">
                          {r.title}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5 truncate">
                          {PROPERTY_TYPE_LABELS[r.property_type as PropertyType] ?? r.property_type}
                          {r.city ? ` · ${r.city}` : ""}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-gold text-sm font-semibold">{formatPrice(r.price)}</p>
                        {r.cap_rate != null && (
                          <p className="text-gray-500 text-xs">{r.cap_rate}% cap</p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 border-t border-white/5">
                <Link
                  href={`/marketplace?q=${encodeURIComponent(query)}`}
                  onClick={() => setOpen(false)}
                  className="text-gold hover:underline text-xs"
                >
                  View all results in marketplace →
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
