"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { mainNav } from "@/data/navigation";
import SearchBar from "@/components/SearchBar";

/**
 * Label for the "top of dropdown" header link that points to the parent
 * index page. Per-path overrides for the cases where "All {label}" reads
 * awkwardly.
 */
function dropdownHeaderLabel(href: string, label: string): string {
  switch (href) {
    case "/markets":
      return "All Markets";
    case "/properties":
      return "All Property Types";
    case "/investor-tools":
      return "All Investor Tools";
    case "/blog":
      return "All Insights";
    default:
      return `All ${label}`;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  /** Which top-level dropdown (if any) is open in desktop nav — keyed by href. */
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  /** Which top-level dropdown (if any) is expanded in mobile nav — keyed by href. */
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold font-bold text-xl tracking-tight">
              MaxLife
            </span>
            <span className="text-white font-light text-xl">Realty</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {mainNav.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  ref={openDropdown === link.href ? dropdownRef : undefined}
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href,
                      )
                    }
                    className={`text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-gray-300 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.href ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === link.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-dark-card border border-dark-border rounded-lg shadow-xl py-2 max-h-[80vh] overflow-y-auto">
                      <Link
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-dark-hover transition-colors"
                      >
                        {dropdownHeaderLabel(link.href, link.label)}
                      </Link>
                      <div className="border-t border-dark-border my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.href)
                              ? "text-gold"
                              : "text-gray-400 hover:text-gold hover:bg-dark-hover"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-gray-300 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Search — compact, pushed to the right before the CTA. Hidden
                on md/lg where space is tight; shown on xl+ where it fits. */}
            <div className="hidden xl:block w-52">
              <SearchBar />
            </div>
            <Link
              href="/opportunities#request-valuation"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2 rounded-md text-sm whitespace-nowrap transition-colors"
            >
              Request Valuation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-300 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark border-t border-dark-border">
          <div className="px-4 py-3 space-y-1">
            <div className="pb-3">
              <SearchBar onSelect={() => setOpen(false)} />
            </div>
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() =>
                      setMobileOpenDropdown(
                        mobileOpenDropdown === link.href ? null : link.href,
                      )
                    }
                    className={`flex items-center justify-between w-full text-sm font-medium py-2 transition-colors ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-gray-300 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileOpenDropdown === link.href ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOpenDropdown === link.href && (
                    <div className="pl-4 space-y-1 mb-2">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-gray-400 hover:text-gold py-1.5 transition-colors"
                      >
                        {dropdownHeaderLabel(link.href, link.label)}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block text-sm py-1.5 transition-colors ${
                            isActive(child.href)
                              ? "text-gold"
                              : "text-gray-400 hover:text-gold"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium py-2 transition-colors ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-gray-300 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2">
              <Link
                href="/opportunities#request-valuation"
                onClick={() => setOpen(false)}
                className="block bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2 rounded-md text-sm text-center transition-colors"
              >
                Request Valuation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
