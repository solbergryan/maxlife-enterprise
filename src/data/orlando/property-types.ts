export interface OrlandoPropertyType {
  slug: string;
  side: "sale" | "lease";
  label: string;
  shortLabel: string;
  primer: string;
  hubSlug: string;
}

export const orlandoPropertyTypes: OrlandoPropertyType[] = [
  {
    slug: "retail-property",
    side: "sale",
    label: "Retail & NNN Properties",
    shortLabel: "Retail / NNN",
    primer:
      "Multi-tenant strip centers, single-tenant NNN pads, and grocery-anchored centers across the metro. Tourist-corridor and high-growth suburban corridors (US-192, SR-50, SR-434, US-27) generate the deepest deal flow.",
    hubSlug: "nnn-properties-florida",
  },
  {
    slug: "office-space",
    side: "sale",
    label: "Office Buildings",
    shortLabel: "Office",
    primer:
      "Class A, B, and medical office buildings from owner-user suites to suburban office parks. Strongest demand in Lake Mary, Maitland, Winter Park, Lake Nona Medical City, and the I-4 corridor submarkets.",
    hubSlug: "office-space",
  },
  {
    slug: "industrial-property",
    side: "sale",
    label: "Industrial & Warehouse",
    shortLabel: "Industrial",
    primer:
      "Warehouse, flex, and light-manufacturing buildings along the I-4, SR-408, and SR-528 corridors. Sub-4% vacancy metro-wide has pushed rents and cap rates to historic levels.",
    hubSlug: "industrial",
  },
  {
    slug: "multifamily",
    side: "sale",
    label: "Multifamily",
    shortLabel: "Multifamily",
    primer:
      "Small-to-mid-size apartment buildings, garden communities, and value-add workforce housing across the metro. Kissimmee, Apopka, Sanford, and east Orlando submarkets offer the strongest cash-on-cash entry.",
    hubSlug: "nnn-properties-florida",
  },
  {
    slug: "land",
    side: "sale",
    label: "Commercial Land",
    shortLabel: "Land",
    primer:
      "Entitled and raw commercial parcels for retail, mixed-use, multifamily, and industrial development. Highest demand along SR-429, SR-417, US-192, US-27, and the Narcoossee / Lake Nona corridor.",
    hubSlug: "central-florida-land-for-development",
  },
  {
    slug: "nnn-properties",
    side: "sale",
    label: "NNN Investments",
    shortLabel: "NNN",
    primer:
      "Single-tenant net-lease properties with investment-grade and franchise tenants — QSR, auto service, medical, and essential retail. Florida's no-income-tax environment keeps 1031 and out-of-state capital flowing into Orlando NNN.",
    hubSlug: "nnn-properties-florida",
  },
];

export const saleTypes = orlandoPropertyTypes.filter((t) => t.side === "sale");
