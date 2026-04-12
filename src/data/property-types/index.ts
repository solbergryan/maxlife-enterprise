import type { PropertyTypeEntry } from "./types";
import { retailRegistry } from "./retail";
import { officeRegistry } from "./office";
import { industrialRegistry } from "./industrial";
import { multifamilyRegistry } from "./multifamily";
import { hospitalityRegistry } from "./hospitality";
import { landRegistry } from "./land";
import { mixedUseRegistry } from "./mixed-use";
import { specialPurposeRegistry } from "./special-purpose";
import { selfStorageRegistry } from "./self-storage";
import { mhpRegistry } from "./mobile-home-park";
import { seniorLivingRegistry } from "./senior-living";
import { businessForSaleRegistry } from "./business-for-sale";
import { noteLoanRegistry } from "./note-loan";

export type { PropertyTypeEntry } from "./types";

/**
 * Flat array of every property type entry — both top-level categories and
 * their subtypes. Used by dynamic routes and the /properties index page.
 */
export const propertyTypeRegistry: PropertyTypeEntry[] = [
  ...retailRegistry,
  ...officeRegistry,
  ...industrialRegistry,
  ...multifamilyRegistry,
  ...hospitalityRegistry,
  ...landRegistry,
  ...mixedUseRegistry,
  ...specialPurposeRegistry,
  ...selfStorageRegistry,
  ...mhpRegistry,
  ...seniorLivingRegistry,
  ...businessForSaleRegistry,
  ...noteLoanRegistry,
];

/**
 * Top-level categories only (entries without a parentSlug), ordered for
 * display on the /properties index page and in navigation.
 */
export const topLevelCategories: PropertyTypeEntry[] = propertyTypeRegistry.filter(
  (e) => !e.parentSlug,
);

/**
 * Look up a top-level category entry by its slug.
 * Returns undefined if no match is found.
 */
export function getCategoryEntry(
  categorySlug: string,
): PropertyTypeEntry | undefined {
  return propertyTypeRegistry.find(
    (e) => !e.parentSlug && e.slug === categorySlug,
  );
}

/**
 * Look up a subtype entry by its parent-category slug and subtype slug.
 * Returns undefined if no match is found.
 */
export function getSubtypeEntry(
  categorySlug: string,
  subtypeSlug: string,
): PropertyTypeEntry | undefined {
  return propertyTypeRegistry.find(
    (e) => e.parentSlug === categorySlug && e.slug === subtypeSlug,
  );
}

/**
 * All subtypes under a given top-level category.
 */
export function getSubtypesForCategory(
  categorySlug: string,
): PropertyTypeEntry[] {
  return propertyTypeRegistry.filter((e) => e.parentSlug === categorySlug);
}
