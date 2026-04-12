import type { PropertyTypeLandingProps } from "@/components/PropertyTypeLanding";

/**
 * A single entry in the property type registry.
 *
 * Every entry represents a landing page at either:
 *   /properties/[slug]                     (top-level, parentSlug undefined)
 *   /properties/[parentSlug]/[slug]        (subtype)
 */
export interface PropertyTypeEntry {
  /** Unique slug within its parent scope. Kebab-case. */
  slug: string;
  /** If set, this entry is a subtype of another top-level category. */
  parentSlug?: string;
  /** SEO metadata */
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  /**
   * Props passed to <PropertyTypeLanding>. `breadcrumbs` and `slug` are
   * auto-computed by the dynamic route and do not need to be present.
   */
  page: Omit<PropertyTypeLandingProps, "breadcrumbs" | "slug">;
}
