"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Listing, listingTypes, listingCounties } from "@/data/listings";
import ListingCard from "./ListingCard";

const ListingMap = dynamic(() => import("./ListingMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl border border-dark-border bg-dark-card flex items-center justify-center"
      style={{ height: "650px" }}
    >
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full mx-auto mb-3" />
        <p className="text-gray-400 text-sm">Loading map...</p>
      </div>
    </div>
  ),
});

const PAGE_SIZE = 24;

// Sort options intentionally limited to public-record fields.
// Price / NOI / cap-rate sorts removed \u2014 those fields are not
// displayed in the link-only directory view.
const sortOptions = [
  { label: "County (A\u2013Z)", value: "county" },
  { label: "City (A\u2013Z)", value: "city" },
  { label: "Property Type", value: "type" },
] as const;

export default function ListingGrid({ listings }: { listings: Listing[] }) {
  const [type, setType] = useState("All");
  const [county, setCounty] = useState("All");
  const [sort, setSort] = useState("county");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "map">("grid");

  const filtered = useMemo(() => {
    let result = listings;

    if (type !== "All") result = result.filter((l) => l.type === type);
    if (county !== "All") result = result.filter((l) => l.county === county);
    if (search.trim()) {
      // Search is limited to category metadata only. Street address,
      // city, ZIP, and other property-specific identifiers have been
      // intentionally removed from search to match the directory view.
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.county.toLowerCase().includes(q) ||
          l.type.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sort === "type") return a.type.localeCompare(b.type);
      return a.county.localeCompare(b.county);
    });

    return result;
  }, [listings, type, county, sort, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function resetFilters() {
    setType("All");
    setCounty("All");
    setSort("newest");
    setSearch("");
    setPage(1);
  }

  const selectClass =
    "bg-dark border border-dark-border rounded-lg px-3 py-2 text-sm text-white focus:border-gold focus:outline-none";

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by address, city, ZIP, or county..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="bg-dark border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none flex-1 min-w-[200px]"
        />
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
          className={selectClass}
        >
          {listingTypes.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All Types" : t}
            </option>
          ))}
        </select>
        <select
          value={county}
          onChange={(e) => {
            setCounty(e.target.value);
            setPage(1);
          }}
          className={selectClass}
        >
          {listingCounties.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Counties" : `${c} County`}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className={selectClass}
        >
          {sortOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* View Toggle */}
        <div className="flex border border-dark-border rounded-lg overflow-hidden">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-2 text-sm flex items-center gap-1.5 transition-colors ${
              view === "grid"
                ? "bg-gold text-dark font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Grid
          </button>
          <button
            onClick={() => setView("map")}
            className={`px-3 py-2 text-sm flex items-center gap-1.5 transition-colors ${
              view === "map"
                ? "bg-gold text-dark font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Map
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-500 text-sm">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"}{" "}
          found
          {(type !== "All" || county !== "All" || search) && (
            <button
              onClick={resetFilters}
              className="text-gold hover:underline ml-2"
            >
              Clear filters
            </button>
          )}
        </p>
        {view === "grid" && totalPages > 1 && (
          <p className="text-gray-500 text-sm">
            Page {page} of {totalPages}
          </p>
        )}
      </div>

      {/* Map View */}
      {view === "map" && <ListingMap listings={filtered} />}

      {/* Grid View */}
      {view === "grid" && (
        <>
          {paged.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((listing, i) => (
                <ListingCard key={`${listing.crexiUrl}-${i}`} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-2">
                No properties match your search.
              </p>
              <p className="text-gray-500 text-sm">
                Try adjusting your filters or{" "}
                <a href="/investor-access" className="text-gold hover:underline">
                  sign up for deal alerts
                </a>
                .
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-sm rounded-lg border border-dark-border text-gray-400 hover:text-gold hover:border-gold/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (page <= 4) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = page - 3 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 text-sm rounded-lg border transition-colors ${
                      page === pageNum
                        ? "bg-gold text-dark border-gold font-semibold"
                        : "border-dark-border text-gray-400 hover:text-gold hover:border-gold/30"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 text-sm rounded-lg border border-dark-border text-gray-400 hover:text-gold hover:border-gold/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
