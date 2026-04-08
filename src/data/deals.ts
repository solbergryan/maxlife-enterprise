export interface Deal {
  id: string;
  slug: string;
  title: string;
  location: string;
  county: string;
  type: "NNN" | "Commercial" | "Land" | "Multifamily" | "Retail";
  status: "Active" | "Under Contract" | "Sold";
  price: number;
  capRate?: number;
  noi?: number;
  sqft?: number;
  acreage?: number;
  tenant?: string;
  leaseType?: string;
  leaseTermRemaining?: string;
  highlights: string[];
  upsidePotential?: string;
  image?: string;
  description: string;
}

export const deals: Deal[] = [
  {
    id: "1",
    slug: "autozone-nnn-orlando",
    title: "AutoZone NNN — Orlando, FL",
    location: "Orlando, FL",
    county: "Orange",
    type: "NNN",
    status: "Sold",
    price: 1_850_000,
    capRate: 5.75,
    noi: 106_375,
    sqft: 6_800,
    tenant: "AutoZone",
    leaseType: "Absolute NNN",
    leaseTermRemaining: "12 Years",
    highlights: [
      "Investment-grade tenant (S&P rated)",
      "Absolute NNN — zero landlord responsibilities",
      "High-traffic corridor with strong co-tenancy",
      "Annual rent escalations built into lease",
    ],
    description:
      "Absolute NNN AutoZone located on a high-traffic retail corridor in Orlando. The property features a long-term lease with annual rent escalations, providing stable and predictable income with zero landlord responsibilities. Prime location with strong co-tenancy including national retailers.",
  },
  {
    id: "2",
    slug: "retail-strip-center-kissimmee",
    title: "Multi-Tenant Retail Center — Kissimmee, FL",
    location: "Kissimmee, FL",
    county: "Osceola",
    type: "Retail",
    status: "Active",
    price: 2_400_000,
    capRate: 7.2,
    noi: 172_800,
    sqft: 12_500,
    highlights: [
      "Value-add opportunity — below-market rents",
      "95% occupied with strong tenant mix",
      "Located near major tourist corridor",
      "Potential to increase NOI by 20%+ at lease renewal",
    ],
    upsidePotential:
      "Below-market rents on 3 of 5 units with leases expiring within 18 months — opportunity to push rents to market rate and increase NOI by 20%+.",
    description:
      "Multi-tenant retail strip center in Kissimmee near the US-192 tourist corridor. Currently 95% occupied with a strong mix of service and retail tenants. Significant value-add upside as three leases are below market rate and approaching renewal. Ideal for an investor seeking stable cash flow with near-term upside.",
  },
  {
    id: "3",
    slug: "development-land-brevard",
    title: "Commercial Development Land — Melbourne, FL",
    location: "Melbourne, FL",
    county: "Brevard",
    type: "Land",
    status: "Active",
    price: 975_000,
    acreage: 4.5,
    highlights: [
      "Zoned commercial — ready for development",
      "Frontage on major arterial road",
      "Rapidly growing Brevard County market",
      "Surrounded by new residential development",
    ],
    upsidePotential:
      "4.5 acres of commercially zoned land in one of Brevard County's fastest-growing corridors. Ideal for retail pad site, medical office, or mixed-use development.",
    description:
      "Prime commercial development parcel in Melbourne with direct frontage on a major arterial road. The site is surrounded by recent residential development creating strong demand for retail and service-oriented commercial uses. Zoned and ready for development with utilities available at the site.",
  },
  {
    id: "4",
    slug: "multifamily-investment-sanford",
    title: "12-Unit Multifamily — Sanford, FL",
    location: "Sanford, FL",
    county: "Seminole",
    type: "Multifamily",
    status: "Under Contract",
    price: 1_650_000,
    capRate: 6.8,
    noi: 112_200,
    sqft: 9_600,
    highlights: [
      "12 units — strong unit mix (8 x 2BR, 4 x 1BR)",
      "Recently renovated common areas",
      "Below-market rents with upside at turnover",
      "Walking distance to downtown Sanford",
    ],
    upsidePotential:
      "Current rents average 15% below market. As units turn over, rents can be adjusted to market rate, projecting a 6.8% cap to 8.1% within 24 months.",
    description:
      "Well-maintained 12-unit multifamily property in downtown Sanford. The property features a desirable unit mix with recently renovated common areas. Current rents are approximately 15% below market, providing significant upside as units turn over. Strong rental demand in the Sanford submarket driven by population growth and proximity to employment centers.",
  },
  {
    id: "5",
    slug: "dollar-general-nnn-lake-county",
    title: "Dollar General NNN — Clermont, FL",
    location: "Clermont, FL",
    county: "Lake",
    type: "NNN",
    status: "Active",
    price: 1_425_000,
    capRate: 6.1,
    noi: 86_925,
    sqft: 9_100,
    tenant: "Dollar General",
    leaseType: "NNN",
    leaseTermRemaining: "8 Years",
    highlights: [
      "National credit tenant — recession-resistant",
      "NNN lease with minimal landlord exposure",
      "Growing Lake County submarket",
      "1.5% annual rent increases",
    ],
    description:
      "Dollar General NNN property in Clermont, one of Lake County's fastest-growing communities. The property is leased to a national credit tenant on a NNN basis with 8 years remaining and built-in annual rent escalations. Ideal 1031 exchange candidate or passive income investment.",
  },
];

export function getActiveDeals(): Deal[] {
  return deals.filter((d) => d.status === "Active");
}

export function getSoldDeals(): Deal[] {
  return deals.filter((d) => d.status === "Sold");
}

export function getDealBySlug(slug: string): Deal | undefined {
  return deals.find((d) => d.slug === slug);
}

export function getDealsByCounty(county: string): Deal[] {
  return deals.filter((d) => d.county === county);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
