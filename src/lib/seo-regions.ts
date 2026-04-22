import { cities, type CityData } from "@/data/seo/cities";

export const REGION_ORDER = [
  "Central Florida / Orlando Metro",
  "Space Coast / Brevard",
  "Tampa Bay",
  "Northeast Florida / Jacksonville",
  "South Florida / Miami-Dade & Broward",
  "Palm Beach County",
  "Southwest Florida / Naples & Fort Myers",
  "North Florida / Panhandle",
] as const;

export type Region = (typeof REGION_ORDER)[number];

const COUNTY_TO_REGION: Record<string, Region> = {
  "Orange County": "Central Florida / Orlando Metro",
  "Seminole County": "Central Florida / Orlando Metro",
  "Osceola County": "Central Florida / Orlando Metro",
  "Lake County": "Central Florida / Orlando Metro",
  "Polk County": "Central Florida / Orlando Metro",
  "Brevard County": "Space Coast / Brevard",
  "Hillsborough County": "Tampa Bay",
  "Pinellas County": "Tampa Bay",
  "Pasco County": "Tampa Bay",
  "Duval County": "Northeast Florida / Jacksonville",
  "St. Johns County": "Northeast Florida / Jacksonville",
  "Clay County": "Northeast Florida / Jacksonville",
  "Miami-Dade County": "South Florida / Miami-Dade & Broward",
  "Broward County": "South Florida / Miami-Dade & Broward",
  "Palm Beach County": "Palm Beach County",
  "Collier County": "Southwest Florida / Naples & Fort Myers",
  "Lee County": "Southwest Florida / Naples & Fort Myers",
  "Sarasota County": "Southwest Florida / Naples & Fort Myers",
  "Manatee County": "Southwest Florida / Naples & Fort Myers",
  "Alachua County": "North Florida / Panhandle",
  "Leon County": "North Florida / Panhandle",
  "Escambia County": "North Florida / Panhandle",
  "Okaloosa County": "North Florida / Panhandle",
  "Bay County": "North Florida / Panhandle",
};

export function regionForCounty(county: string): Region {
  return COUNTY_TO_REGION[county] ?? "Central Florida / Orlando Metro";
}

export function groupCitiesByRegion(): Record<Region, CityData[]> {
  const grouped = Object.fromEntries(
    REGION_ORDER.map((r) => [r, [] as CityData[]]),
  ) as Record<Region, CityData[]>;

  for (const city of cities) {
    grouped[regionForCounty(city.county)].push(city);
  }

  for (const region of REGION_ORDER) {
    grouped[region].sort((a, b) => a.name.localeCompare(b.name));
  }

  return grouped;
}

export function nearbyCities(currentSlug: string, limit = 8): CityData[] {
  const current = cities.find((c) => c.slug === currentSlug);
  if (!current) return [];
  const region = regionForCounty(current.county);
  return cities
    .filter((c) => c.slug !== currentSlug && regionForCounty(c.county) === region)
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, limit);
}
