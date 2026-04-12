import type { CourseTier } from "./content";

/* ── Tier colors ──────────────────────────────────────────────────────── */

export interface TierTheme {
  /** Accent text class (e.g. "text-amber-400") */
  text: string;
  /** Subtle border for badges */
  border: string;
  /** Very light background tint */
  bg: string;
  /** Progress bar / icon background */
  bar: string;
  /** Gradient from-color for course hero */
  gradient: string;
  /** Label next to tier number */
  label: string;
}

export const TIER_THEMES: Record<CourseTier, TierTheme> = {
  1: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", bar: "bg-emerald-500", gradient: "from-emerald-900/20", label: "Foundations" },
  2: { text: "text-blue-400",    border: "border-blue-500/30",    bg: "bg-blue-500/10",    bar: "bg-blue-500",    gradient: "from-blue-900/20",    label: "Financial Analysis" },
  3: { text: "text-violet-400",  border: "border-violet-500/30",  bg: "bg-violet-500/10",  bar: "bg-violet-500",  gradient: "from-violet-900/20",  label: "Market & Deal Analysis" },
  4: { text: "text-amber-400",   border: "border-amber-500/30",   bg: "bg-amber-500/10",   bar: "bg-amber-500",   gradient: "from-amber-900/20",   label: "Deal-Making" },
  5: { text: "text-rose-400",    border: "border-rose-500/30",    bg: "bg-rose-500/10",    bar: "bg-rose-500",    gradient: "from-rose-900/20",    label: "Asset Classes" },
  6: { text: "text-gold",        border: "border-gold/30",        bg: "bg-gold/10",        bar: "bg-gold",        gradient: "from-gold/20",        label: "Advanced & Specialized" },
};

/* ── Course icons (inline SVG paths) ──────────────────────────────────
   Each icon is a 24×24 viewBox path string drawn in outline style.
   We use a minimal custom set so there's zero icon-library dependency. */

export const COURSE_ICONS: Record<string, string> = {
  // Tier 1 — Foundations
  "01-intro-to-commercial-real-estate":
    "M3 21V9l9-6 9 6v12H3zm4-2h10v-8l-5-3.33L7 11v8zm2-6h6m-6 3h4", // building intro
  "02-cre-terminology-and-key-metrics":
    "M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z", // glossary/clock
  "03-reading-cre-financial-statements":
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", // clipboard check

  // Tier 2 — Financial Analysis
  "04-financial-analysis-for-cre":
    "M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z", // calculator
  "05-building-cre-pro-formas-in-excel":
    "M3 10h18M3 14h18M3 6h18M3 18h18M10 3v18M14 3v18", // spreadsheet grid

  // Tier 3 — Market & Deal Analysis
  "06-market-and-submarket-analysis":
    "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", // map
  "07-user-decision-analysis-lease-vs-own":
    "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", // scales
  "08-investment-analysis-and-risk":
    "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", // trending chart

  // Tier 4 — Deal-Making
  "09-finding-commercial-deals":
    "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", // search
  "10-due-diligence-deep-dive":
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h.01M12 17h.01M12 12h.01", // checklist
  "11-commercial-financing-and-capital-stack":
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", // dollar circle
  "12-commercial-real-estate-negotiations":
    "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8zM13 4H7a2 2 0 00-2 2v6a2 2 0 002 2h1v4l4-4", // chat bubbles

  // Tier 5 — Asset Classes
  "13-nnn-and-net-lease-investing":
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", // office building
  "14-multifamily-investing":
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0v-5a2 2 0 014 0v5m-4 0h4", // home group
  "15-self-storage-investing":
    "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", // cube / storage
  "16-retail-and-specialty":
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", // shopping cart
  "17-office-and-industrial-flex":
    "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", // factory/office

  // Tier 6 — Advanced & Specialized
  "18-land-and-development-process":
    "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", // globe/land
  "19-syndication-and-raising-capital":
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // people group
  "20-tax-strategy-and-1031-exchanges":
    "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z", // receipt/tax
};

/** Tier icon shown in section headers — larger, more iconic SVG paths */
export const TIER_ICONS: Record<CourseTier, string> = {
  1: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", // open book
  2: "M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z", // calculator
  3: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", // map
  4: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", // shield check
  5: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", // building
  6: "M13 10V3L4 14h7v7l9-11h-7z", // lightning bolt
};
