/**
 * Pure (no server/client dependency) helpers for the marketplace.
 * Safe to import from client components AND server components.
 */

export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const suffix = Math.random().toString(36).slice(2, 8);
  return base ? `${base}-${suffix}` : `listing-${suffix}`;
}

export const formatPrice = (price: number | null): string => {
  if (price == null) return "Contact for price";
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(2)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}K`;
  return `$${price.toLocaleString()}`;
};

export const formatNumber = (n: number | null, digits = 0): string =>
  n == null
    ? "—"
    : n.toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      });

export const formatPercent = (n: number | null, digits = 2): string =>
  n == null ? "—" : `${n.toFixed(digits)}%`;
