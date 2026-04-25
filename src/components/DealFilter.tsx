"use client";

import { useState } from "react";
import { Deal } from "@/data/deals";
import DealCard from "./DealCard";

const statuses = ["All", "Active", "Under Contract", "Sold"] as const;
const types = ["All", "NNN", "Commercial", "Retail", "Multifamily", "Land"] as const;
const counties = ["All", "Orange", "Seminole", "Osceola", "Lake", "Brevard", "Polk"] as const;

export default function DealFilter({ deals }: { deals: Deal[] }) {
  const [status, setStatus] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [county, setCounty] = useState<string>("All");

  const filtered = deals.filter((d) => {
    if (status !== "All" && d.status !== status) return false;
    if (type !== "All" && d.type !== type) return false;
    if (county !== "All" && d.county !== county) return false;
    return true;
  });

  const selectClass =
    "bg-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-gold focus:outline-none";

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={selectClass}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s === "All" ? "All Statuses" : s}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={selectClass}
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All Types" : t}
            </option>
          ))}
        </select>
        <select
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className={selectClass}
        >
          {counties.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Counties" : `${c} County`}
            </option>
          ))}
        </select>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-300 text-lg mb-2">
            No properties match your filters.
          </p>
          <p className="text-gray-500 text-sm">
            Try adjusting your criteria or{" "}
            <a href="/investor-access" className="text-gold hover:underline">
              sign up for off-market deal alerts
            </a>{" "}
            to be notified when new properties become available.
          </p>
        </div>
      )}
    </div>
  );
}
