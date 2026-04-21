"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  professionals,
  categoriesOrder,
  type ProfessionalCategory,
} from "@/lib/professionals";

const categoryAccents: Record<ProfessionalCategory, string> = {
  "Brokerage & Sales": "from-amber-500/20 to-transparent border-amber-500/30",
  "Development & Construction":
    "from-orange-500/20 to-transparent border-orange-500/30",
  "Engineering & Design":
    "from-blue-500/20 to-transparent border-blue-500/30",
  "Due Diligence": "from-emerald-500/20 to-transparent border-emerald-500/30",
  "Legal & Transactional":
    "from-purple-500/20 to-transparent border-purple-500/30",
  "Finance & Valuation":
    "from-gold/20 to-transparent border-gold/30",
  "Operations & Management":
    "from-slate-500/20 to-transparent border-slate-500/30",
};

const categoryShortLabel: Record<ProfessionalCategory, string> = {
  "Brokerage & Sales": "Brokerage",
  "Development & Construction": "Construction",
  "Engineering & Design": "Engineering",
  "Due Diligence": "Due Diligence",
  "Legal & Transactional": "Legal",
  "Finance & Valuation": "Finance",
  "Operations & Management": "Operations",
};

export default function OrgChart() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    ProfessionalCategory | "all"
  >("all");

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((p) => {
      const matchesQuery =
        query === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const totalMatches = filteredProfessionals.length;

  return (
    <div className="space-y-10">
      {/* Search & Filter */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-5 sticky top-16 z-30 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <svg
              className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search a role (e.g. attorney, appraiser, architect)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-dark border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-gold text-dark"
                  : "bg-dark border border-dark-border text-gray-400 hover:text-gold hover:border-gold/30"
              }`}
            >
              All Roles ({professionals.length})
            </button>
            {categoriesOrder.map((cat) => {
              const count = professionals.filter((p) => p.category === cat)
                .length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-gold text-dark"
                      : "bg-dark border border-dark-border text-gray-400 hover:text-gold hover:border-gold/30"
                  }`}
                >
                  {categoryShortLabel[cat]} ({count})
                </button>
              );
            })}
          </div>

          {(query !== "" || activeCategory !== "all") && (
            <p className="text-xs text-gray-500">
              Showing {totalMatches} of {professionals.length} roles
              {query && ` matching "${query}"`}
            </p>
          )}
        </div>
      </div>

      {/* Principal node */}
      <div className="flex justify-center">
        <div className="bg-gold text-dark rounded-xl px-8 py-5 text-center shadow-lg shadow-gold/20 relative">
          <p className="text-xs font-bold uppercase tracking-widest opacity-70">
            Principal / Owner
          </p>
          <h3 className="text-xl font-bold mt-1">
            Developer · Investor · Sponsor
          </h3>
          <p className="text-xs opacity-80 mt-1">
            Coordinates the entire deal team
          </p>
        </div>
      </div>

      {/* Connector to categories */}
      <div className="flex justify-center">
        <div className="w-0.5 h-10 bg-gradient-to-b from-gold to-dark-border" />
      </div>

      {/* Org chart by category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoriesOrder.map((category) => {
          const roles = filteredProfessionals.filter(
            (p) => p.category === category
          );
          if (roles.length === 0) return null;

          return (
            <div
              key={category}
              className={`bg-gradient-to-br ${categoryAccents[category]} border rounded-xl p-5`}
            >
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                {category}
              </h3>
              <p className="text-gray-500 text-xs mb-4">
                {roles.length} role{roles.length !== 1 ? "s" : ""}
              </p>
              <div className="space-y-2">
                {roles.map((role) => (
                  <Link
                    key={role.slug}
                    href={`/professionals/${role.slug}`}
                    className="block bg-dark/70 border border-dark-border hover:border-gold/40 rounded-lg p-3 transition-colors group"
                  >
                    <p className="text-white font-medium text-sm group-hover:text-gold transition-colors">
                      {role.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">
                      {role.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {totalMatches === 0 && (
        <div className="text-center py-12 bg-dark-card border border-dark-border rounded-xl">
          <p className="text-gray-400">
            No roles match your search. Try a different keyword or category.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveCategory("all");
            }}
            className="mt-4 text-gold hover:text-gold-light text-sm font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Deal flow */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6 mt-12">
        <h3 className="text-white font-bold text-lg mb-6 text-center">
          Typical CRE Deal Flow —{" "}
          <span className="text-gold">Who Gets Involved When</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {
              step: "1",
              title: "Sourcing",
              roles: "Brokers, Tenant Reps",
            },
            {
              step: "2",
              title: "LOI / Contract",
              roles: "CRE Attorney, Title Co.",
            },
            {
              step: "3",
              title: "Due Diligence",
              roles: "Env., Inspector, Appraiser, Surveyor",
            },
            {
              step: "4",
              title: "Financing",
              roles: "Mortgage Broker, Lender",
            },
            {
              step: "5",
              title: "Design & Build",
              roles: "Architect, Civil, MEP, GC",
            },
            {
              step: "6",
              title: "Operations / Exit",
              roles: "PM, Asset Mgr, Investment Sales",
            },
          ].map((phase) => (
            <div
              key={phase.step}
              className="bg-dark border border-dark-border rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-gold/40 mb-1">
                {phase.step}
              </div>
              <p className="text-white font-semibold text-sm mb-1">
                {phase.title}
              </p>
              <p className="text-gray-500 text-xs leading-tight">{phase.roles}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
