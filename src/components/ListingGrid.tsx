"use client";

import { useState, useMemo } from "react";
import { Listing, listingTypes, listingCounties } from "@/data/listings";
import ListingCard from "./ListingCard";

const PAGE_SIZE = 24;

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Cap Rate: High to Low", value: "cap-desc" },
] as const;

export default function ListingGrid({ listings }: { listings: Listing[] }) {
  const [type, setType] = useState("All");
  const [county, setCounty] = useState("All");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = listings;

    if (type !== "All") result = result.filter((l) => l.type === type);
    if (county !== "All") result = result.filter((l) => l.county === county);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q) ||
          l.address.toLowerCase().includes(q) ||
          (l.tenant && l.tenant.toLowerCase().includes(q))
      );
    }

    result = [...result].sort((a, b) => {
      if (sort === "price-asc")
        return (a.price ?? Infinity) - (b.price ?? Infinity);
      if (sort === "price-desc")
        return (b.price ?? 0) - (a.price ?? 0);
      if (sort === "cap-desc")
        return (b.capRate ?? 0) - (a.capRate ?? 0);
      return (a.daysOnMarket ?? 999) - (b.daysOnMarket ?? 999);
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
          placeholder="Search by name, city, address, or tenant..."
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
        {totalPages > 1 && (
          <p className="text-gray-500 text-sm">
            Page {page} of {totalPages}
          </p>
        )}
      </div>

      {/* Grid */}
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
    </div>
  );
}
