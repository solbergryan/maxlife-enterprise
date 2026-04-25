"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchSite, type SearchItem } from "@/data/searchIndex";

interface SearchBarProps {
  /** Called after the user picks a result — useful for closing mobile menus */
  onSelect?: () => void;
  /** Full width on mobile; constrained on desktop */
  className?: string;
  placeholder?: string;
}

export default function SearchBar({
  onSelect,
  className = "",
  placeholder = "Search MaxLife…",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo<SearchItem[]>(
    () => searchSite(query, 8),
    [query],
  );

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Reset active index when results change
  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  const pick = useCallback(
    (item: SearchItem) => {
      setQuery("");
      setOpen(false);
      onSelect?.();
      router.push(item.url);
    },
    [router, onSelect],
  );

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIdx((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (results[activeIdx]) {
        e.preventDefault();
        pick(results[activeIdx]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          aria-label="Search MaxLife"
          className="w-full bg-white/[0.04]/80 border border-white/10 rounded-md pl-9 pr-8 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gold transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 mt-2 bg-white/[0.04] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50 max-h-[70vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-gray-500">
              No results for{" "}
              <span className="text-gray-300">&ldquo;{query}&rdquo;</span>
            </div>
          ) : (
            <ul className="py-1">
              {results.map((item, idx) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      pick(item);
                    }}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`block px-4 py-3 transition-colors ${
                      idx === activeIdx
                        ? "bg-white/10"
                        : "hover:bg-white/10/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-white truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-300 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-gold/80 bg-gold/10 px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t border-white/10 px-4 py-2 text-[10px] text-gray-500 flex justify-between">
            <span>
              <kbd className="bg-dark-border px-1 rounded">↑</kbd>{" "}
              <kbd className="bg-dark-border px-1 rounded">↓</kbd> navigate
            </span>
            <span>
              <kbd className="bg-dark-border px-1 rounded">↵</kbd> open ·{" "}
              <kbd className="bg-dark-border px-1 rounded">esc</kbd> close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
