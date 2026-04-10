"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { mainNav } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMarketsOpen(false);
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
          <div className="hidden md:flex items-center gap-7">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setMarketsOpen(!marketsOpen)}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-gray-300 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${marketsOpen ? "rotate-180" : ""}`}
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
                  {marketsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-dark-card border border-dark-border rounded-lg shadow-xl py-2">
                      <Link
                        href={link.href}
                        onClick={() => setMarketsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-dark-hover transition-colors"
                      >
                        All Markets
                      </Link>
                      <div className="border-t border-dark-border my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMarketsOpen(false)}
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
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-gray-300 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/investor-access"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2 rounded-md text-sm transition-colors"
            >
              Get Deal Access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-gold transition-colors"
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
        <div className="md:hidden bg-dark border-t border-dark-border">
          <div className="px-4 py-3 space-y-1">
            {mainNav.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileMarketsOpen(!mobileMarketsOpen)}
                    className={`flex items-center justify-between w-full text-sm font-medium py-2 transition-colors ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-gray-300 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileMarketsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileMarketsOpen && (
                    <div className="pl-4 space-y-1 mb-2">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-gray-400 hover:text-gold py-1.5 transition-colors"
                      >
                        All Markets
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
                href="/investor-access"
                onClick={() => setOpen(false)}
                className="block bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2 rounded-md text-sm text-center transition-colors"
              >
                Get Deal Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
