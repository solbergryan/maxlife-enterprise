// ═══════════════════════════════════════════════════════
// MaxLife Realty — Quarterly Market Reports Data Model
// ═══════════════════════════════════════════════════════
//
// Every field in every report must trace back to a cited source or
// be explicitly marked as MaxLife Realty's in-market observation /
// estimate. Never publish a report with fabricated numbers.
//
// Adding a new report:
//   1. Copy an existing entry at the bottom of `marketReports`
//   2. Set quarter, year, slug, publishDate
//   3. Fill in every data point with a matching source in `sources`
//   4. Any field you can't source, set to null and the page will
//      omit it rather than show a placeholder
//   5. Bump the publishDate and set `published: true` to go live
// ═══════════════════════════════════════════════════════

export type Quarter = "Q1" | "Q2" | "Q3" | "Q4";
export type AssetClassKey =
  | "retail"
  | "office"
  | "industrial"
  | "multifamily"
  | "nnn"
  | "land"
  | "mixedUse"
  | "hospitality";

export const ASSET_CLASS_LABELS: Record<AssetClassKey, string> = {
  retail: "Retail",
  office: "Office",
  industrial: "Industrial / Warehouse",
  multifamily: "Multifamily",
  nnn: "Single-Tenant NNN",
  land: "Land / Development",
  mixedUse: "Mixed Use",
  hospitality: "Hospitality",
};

/** A single, cited data point. If value is null, the field is omitted from rendering. */
export interface Metric {
  value: string | null; // human-readable, e.g. "6.8% – 7.4%" or "$186M"
  context?: string; // short qualifier like "metro-wide" or "year over year"
  sourceId?: string; // key into the report's `sources` dict
}

export interface AssetClassSnapshot {
  key: AssetClassKey;
  capRateRange?: Metric;
  vacancyRate?: Metric;
  netAbsorptionSf?: Metric;
  rentGrowthYoY?: Metric;
  salesVolume?: Metric;
  pricePerSf?: Metric;
  commentary?: string; // 1–3 sentences, practitioner voice, can cite sourceId inline
}

export interface MacroIndicator {
  label: string;
  value: string;
  context?: string;
  sourceId: string;
}

export interface NotableTransaction {
  name: string; // property name or short label, e.g. "AutoZone \u2014 SR 436"
  address?: string;
  city?: string;
  county?: string;
  assetClass?: AssetClassKey;
  buyer?: string;
  seller?: string;
  price?: string; // "$8.25M"
  sqft?: string; // "14,200 sf"
  capRate?: string; // "6.35%"
  pricePerSf?: string; // "$581 psf"
  closedDate?: string; // "March 14, 2026"
  sourceId: string;
  summary?: string;
}

export interface SubmarketSpotlight {
  name: string;
  summary: string;
  bullets: string[];
  sourceId?: string;
}

export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishedDate?: string; // ISO or human, e.g. "April 3, 2026"
  accessedDate?: string;
}

export interface MarketReport {
  slug: string; // e.g. "q1-2026-central-florida"
  quarter: Quarter;
  year: number;
  title: string; // e.g. "Central Florida Commercial Real Estate Market Report"
  subtitle?: string; // optional tagline
  coverage: string; // short coverage blurb, e.g. "Orlando MSA & the Space Coast"
  publishDate: string; // ISO "2026-04-10"
  published: boolean;
  executiveSummary: string; // 3–6 sentences, the thesis of the quarter
  macro: MacroIndicator[];
  assetClasses: AssetClassSnapshot[];
  notableTransactions: NotableTransaction[];
  submarketSpotlight?: SubmarketSpotlight;
  commentary: string[]; // 1–4 paragraphs of practitioner voice
  outlook: string[]; // 1–3 paragraphs on next quarter expectations
  sources: Source[];
  dataGaps?: string[]; // explicit list of things we tried to find but couldn't
}

// ═══════════════════════════════════════════════════════
// The report archive.
// Populated as reports are researched and published.
// ═══════════════════════════════════════════════════════
export const marketReports: MarketReport[] = [
  // ──────────────────────────────────────────────────
  // Q1 2026 — Central Florida Commercial Real Estate
  // ──────────────────────────────────────────────────
  {
    slug: "q1-2026-central-florida",
    quarter: "Q1",
    year: 2026,
    title: "Central Florida Commercial Real Estate Market Report",
    subtitle:
      "Rates held steady, industrial tightened, and office stayed bifurcated",
    coverage: "Orlando MSA \u2022 Orange \u2022 Brevard \u2022 Lake \u2022 Seminole \u2022 Osceola \u2022 Volusia \u2022 Polk",
    publishDate: "2026-04-11",
    published: true,

    executiveSummary:
      "Q1 2026 closed with the Federal Reserve on hold at a 3.50\u20133.75% target range and the 10-year Treasury oscillating in the low-4% area, a macro backdrop that kept Central Florida capital markets active but disciplined. Industrial was the clear winner, with the national market printing its strongest first quarter for net absorption since 2023 and Orlando-area industrial vacancy at 7.2% \u2014 a 110 bps year-over-year improvement. Multifamily remained Orlando's most complex story: supply is finally tapering but 11,367 units were still under construction at year-end 2025 and vacancy sat near 8.9%, keeping asking-rent growth in negative territory. Office stayed sharply bifurcated \u2014 metro-wide vacancy at 17.6% with rent growth of just 1.3% year-over-year \u2014 but institutional capital still placed a $96M portfolio bet on the market in January. Retail fundamentals remained the tightest of any sector, although firms with current Q1 2026 Orlando-specific retail prints had not yet published at the time of this report.",

    macro: [
      {
        label: "Fed Funds Target Range",
        value: "3.50% \u2013 3.75%",
        context: "Held steady at March 18, 2026 FOMC meeting",
        sourceId: "fed-fomc-march-2026",
      },
      {
        label: "10-Year Treasury Yield",
        value: "~4.32% \u2013 4.38%",
        context: "End of Q1 2026 / weekly average",
        sourceId: "advisor-perspectives-treasury",
      },
      {
        label: "Orlando MSA Unemployment",
        value: "4.4%",
        context: "December 2025 (most recent release at publication)",
        sourceId: "fred-orlando-unemployment",
      },
      {
        label: "Fed Dot Plot Outlook",
        value: "1 more cut in 2026",
        context: "Policymakers still signaled one more reduction this year",
        sourceId: "fed-fomc-march-2026",
      },
    ],

    assetClasses: [
      {
        key: "industrial",
        capRateRange: {
          value: null, // no sourced Orlando-specific Q1 2026 cap rate published
        },
        vacancyRate: {
          value: "7.2%",
          context: "Orlando, Q4 2025 (most recent JLL print at publication)",
          sourceId: "jll-orlando-industrial",
        },
        netAbsorptionSf: {
          value: "40 MSF (national, Q1 2026)",
          context: "Strongest Q1 absorption since 2023, +52% YoY nationally",
          sourceId: "cw-us-industrial-q1-2026",
        },
        rentGrowthYoY: {
          value: null,
        },
        salesVolume: {
          value: ">$269M",
          context:
            "Three Orlando-area industrial parks sold by Link Logistics in February 2026 alone",
          sourceId: "growthspotter-industrial-250m",
        },
        commentary:
          "Orlando industrial was the most active trading sector of the quarter. Blackstone\u2019s Link Logistics divested three Orlando-area parks to Dallas- and Los Angeles-based buyers totaling more than $269M in closed volume during February. Vacancy ended Q4 2025 at 7.2% \u2014 the lowest print since Q1 2024 \u2014 and the national MarketBeat signal from Cushman & Wakefield suggests the peak vacancy cycle is likely behind us. Orlando-specific Q1 2026 MarketBeat numbers had not yet been published at the time of this report.",
      },
      {
        key: "multifamily",
        capRateRange: {
          value: null,
        },
        vacancyRate: {
          value: "~8.9%",
          context:
            "Orlando metro, projected to remain nearly flat through 2026",
          sourceId: "connect-cre-orlando-apartments",
        },
        netAbsorptionSf: {
          value: "~5,000 units (H1 2025)",
          context:
            "Above the market's long-term average but down ~30% from H1 2024",
          sourceId: "northmarq-orlando-multifamily",
        },
        rentGrowthYoY: {
          value: "-4.3%",
          context:
            "Asking rent year-over-year; Orlando near $2,000/mo average",
          sourceId: "northmarq-orlando-multifamily",
        },
        salesVolume: {
          value: null,
        },
        commentary:
          "Multifamily remained Central Florida's most supply-driven story. Orlando had 11,367 units under construction at the end of 2025 \u2014 still one of the heaviest pipelines in the country \u2014 and rents continued to grind negative on a trailing basis. Deliveries fell ~10% from 2024 to 2025 and are expected to taper further in 2026, which should start easing vacancy later in the year. Institutional capital stayed active in Q1 2026 regardless: Knightvest, Ashcroft, and Bell Partners all closed on Orlando-area properties during the quarter (see Notable Transactions).",
      },
      {
        key: "office",
        capRateRange: {
          value: null,
        },
        vacancyRate: {
          value: "17.6%",
          context:
            "Orlando metro, Q4 2025 / Q1 2026; up ~80 bps from prior quarter",
          sourceId: "hoodline-orlando-office",
        },
        rentGrowthYoY: {
          value: "+1.3%",
          context:
            "Orlando Q1 2026 annual rent growth; near the bottom of Florida metros",
          sourceId: "hoodline-orlando-office",
        },
        salesVolume: {
          value: "$96M",
          context:
            "City Office REIT portfolio sale to Cross Ocean / CP Group, January 2026",
          sourceId: "growthspotter-office-96m",
        },
        commentary:
          "Orlando office remains a two-tier market. Trophy and Class A buildings are absorbing meaningfully better than the metro average \u2014 Q1 2026 trophy/Class A lease sizes were up 28% year-over-year according to CBRE's early-2026 summary \u2014 while older commodity product is competing on price and concessions. The single largest office transaction of the quarter was the $96M, five-building, 722,456 sf City Office REIT portfolio acquired by Cross Ocean Partners and CP Group, which closed alongside City Office's go-private merger with MCME Carell.",
      },
      {
        key: "retail",
        capRateRange: {
          value: "~6.3% \u2013 6.65%",
          context:
            "Trailing 12 months through Q1 2025; most recent published Orlando retail cap rate data",
          sourceId: "matthews-retail-market",
        },
        vacancyRate: {
          value: "~3.7%",
          context:
            "Q1 2025 Orlando retail (most recent published); Q1 2026 data not yet public",
          sourceId: "mmg-orlando-retail",
        },
        rentGrowthYoY: {
          value: "+2.4%",
          context:
            "Q1 2025 Orlando retail rent growth year-over-year (trailing most recent published)",
          sourceId: "mmg-orlando-retail",
        },
        pricePerSf: {
          value: "$29.77 psf asking",
          context: "Orlando retail asking rent (Q1 2025 trailing reference)",
          sourceId: "mmg-orlando-retail",
        },
        commentary:
          "Orlando retail remains structurally tight \u2014 supported by tourism and a steady population inflow \u2014 but firms with Q1 2026 Orlando-specific retail MarketBeats had not yet published at the time this report went to press. Practitioners in the market continued to see aggressive bidding on well-located single-tenant NNN and grocery-anchored product. Cap rates on trophy credit-tenant NNN assets in the market have held roughly flat versus late 2025 based on MaxLife Realty's own in-market observation of closed transactions \u2014 this is an observation, not a sourced published figure.",
      },
    ],

    notableTransactions: [
      {
        name: "Crossroads Distribution Center",
        city: "Orlando",
        county: "Orange",
        assetClass: "industrial",
        buyer: "Swift Creek Real Estate Partners (Dallas)",
        seller: "Link Logistics (Blackstone)",
        price: "$98.45M",
        closedDate: "February 12, 2026",
        sourceId: "growthspotter-industrial-250m",
        summary:
          "The largest of three Link Logistics divestitures in the Orlando market during February, located near The Florida Mall.",
      },
      {
        name: "Axcess Park @ 33rd",
        city: "Orlando",
        county: "Orange",
        assetClass: "industrial",
        buyer: "Ares Management (Los Angeles)",
        seller: "Link Logistics (Blackstone)",
        price: "$92.9M",
        closedDate: "February 11, 2026",
        sourceId: "growthspotter-industrial-250m",
        summary:
          "Industrial park plus three surrounding parcels; part of the Link Logistics Orlando portfolio unwind.",
      },
      {
        name: "City Office REIT Orlando Portfolio",
        city: "Orlando / Altamonte Springs",
        county: "Orange / Seminole",
        assetClass: "office",
        buyer: "Cross Ocean Partners / CP Group",
        seller: "City Office REIT",
        price: "$96M",
        sqft: "722,456 sf (5 buildings)",
        closedDate: "January 12, 2026",
        sourceId: "growthspotter-office-96m",
        summary:
          "Five-property office portfolio including the Fairwinds office tower in downtown Orlando. Closed in conjunction with City Office REIT's ~$1.1B go-private merger with MCME Carell. Notable tenants across the portfolio include the U.S. Army Corps of Engineers, Fairwinds Credit Union, Siemens Energy, and the U.S. General Services Administration.",
      },
      {
        name: "Trelago Apartments",
        address: "601 Trelago Way",
        city: "Maitland",
        county: "Orange",
        assetClass: "multifamily",
        buyer: "Bell Partners (North Carolina)",
        seller: "Kettler (Virginia)",
        price: "$111.25M",
        sourceId: "growthspotter-trio-multifamily",
        summary:
          "Institutional multifamily trade in one of Orlando's most established suburban submarkets.",
      },
      {
        name: "Heritage Estates (rebranded \u201cThe Palmer\u201d)",
        city: "Orlando",
        county: "Orange",
        assetClass: "multifamily",
        buyer: "Knightvest Capital",
        seller: "CenterSquare Investment Management (Philadelphia)",
        price: "$34.3M",
        sqft: "230 units \u00b7 $149,130 / unit",
        sourceId: "yieldpro-heritage-estates",
        summary:
          "Knightvest's third Orlando acquisition in six months, growing its Central Florida footprint to 1,535 units. Property was rebranded as The Palmer post-close.",
      },
      {
        name: "13201 S. Orange Ave (Cornerstone Logistics Centre)",
        city: "Orlando",
        county: "Orange",
        assetClass: "industrial",
        buyer: "Ares Management (Los Angeles)",
        seller: "Link Logistics (Blackstone)",
        price: "$77.8M",
        closedDate: "February 11, 2026",
        sourceId: "growthspotter-industrial-250m",
        summary:
          "Third leg of the Link Logistics Orlando divestiture, acquired alongside Axcess Park by Ares Management.",
      },
    ],

    submarketSpotlight: {
      name: "Industrial: the quiet winner",
      summary:
        "If you sold a well-located Orlando industrial building in Q1 2026, you likely had more than one serious buyer on the table. Vacancy ended Q4 2025 at its lowest level since early 2024, institutional capital returned aggressively, and the single-month February volume from the Link Logistics divestitures alone exceeded $269M across three deals. For sellers with functional 50,000\u2013250,000 sf distribution product in the right submarket, this is the best bid environment we have seen in two years.",
      bullets: [
        "Orlando industrial vacancy at 7.2% (Q4 2025), lowest since Q1 2024",
        "National Q1 2026 industrial net absorption of 40 MSF, +52% year-over-year",
        "$269M+ of closed Orlando-area industrial volume in February 2026 alone",
        "Buyers concentrated in Dallas (Swift Creek) and Los Angeles (Ares Management)",
        "New-supply pipeline is slowing sharply, which should keep downward pressure on vacancy",
      ],
      sourceId: "jll-orlando-industrial",
    },

    commentary: [
      "The macro setup for commercial real estate entering Q1 2026 was as constructive as it has been in eighteen months. With the Fed holding at 3.50\u20133.75% and the 10-year Treasury oscillating in the low 4s, the bid-ask spread that killed deals in 2023\u201324 has largely closed on functional industrial and grocery-anchored retail product. Multifamily is still working through its own supply overhang, but the pipeline is finally bending downward and the tape of Q1 2026 institutional acquisitions \u2014 Knightvest, Ashcroft, Bell Partners \u2014 shows that patient capital sees the cycle bottom approaching.",
      "Orlando office remains genuinely hard to generalize about. Metro-wide vacancy of 17.6% masks an enormous performance gap between trophy Class A (where leasing was actually up year-over-year) and commodity product from the 1980s and 1990s (where owners are competing on concessions). The $96M City Office portfolio sale is meaningful because institutional capital \u2014 Cross Ocean + CP Group \u2014 was willing to underwrite a large multi-building Orlando office bet in the first weeks of the year, which is a data point the bears were not expecting.",
      "For commercial property owners in Central Florida thinking about when to sell, the single most important thing to understand about this quarter is that the buyer pools vary wildly by asset class. Industrial sellers have real institutional demand from multiple geographies. Multifamily sellers have patient private-equity capital that is starting to move but is being selective about submarket and vintage. Office sellers need to honestly categorize their building as trophy or commodity before they pick a strategy. Retail sellers with grocery anchors or credit-tenant NNN are still in one of the strongest seller's markets in the country. Land depends entirely on location and entitlements.",
    ],

    outlook: [
      "Q2 2026 is likely to continue the divergence that defined Q1. Industrial absorption should remain strong as the supply pipeline continues to thin, and we would expect to see another wave of institutional industrial portfolio trades as large owners rebalance. Multifamily starts to benefit from the tapering delivery calendar in the second half of the year, and rent growth should inflect back to positive territory by late 2026 if the absorption trend holds.",
      "The biggest swing factor remains the Fed. The dot plot still signals one more cut in 2026, which would pull the 10-year lower and re-accelerate capital-markets activity across every sector. If that cut gets pushed to late 2026 or 2027, underwriting assumptions across multifamily and office stay under pressure and we will likely see more price discovery on Orlando office trades specifically.",
      "From MaxLife Realty's seat, the single best thing a Central Florida commercial property owner can do over the next 90 days is run a real underwrite of their own property against Q1 2026 comparables before deciding whether to take the market up on the bid. We are happy to help with that conversation.",
    ],

    sources: [
      {
        id: "fed-fomc-march-2026",
        title: "Federal Reserve issues FOMC statement",
        publisher: "Federal Reserve Board",
        url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm",
        publishedDate: "March 18, 2026",
      },
      {
        id: "advisor-perspectives-treasury",
        title: "10-Year Treasury Yield Long-Term Perspective: March 2026",
        publisher: "Advisor Perspectives / dshort",
        url: "https://www.advisorperspectives.com/dshort/updates/2026/04/01/10-year-treasury-yield-long-term-perspective-march-2026",
        publishedDate: "April 1, 2026",
      },
      {
        id: "fred-orlando-unemployment",
        title:
          "Unemployment Rate in Orlando-Kissimmee-Sanford, FL (MSA) (ORLA712URN)",
        publisher: "Federal Reserve Economic Data (FRED) \u00b7 St. Louis Fed",
        url: "https://fred.stlouisfed.org/series/ORLA712URN",
      },
      {
        id: "cw-us-industrial-q1-2026",
        title:
          "Peak Industrial Vacancy Likely in Rearview Mirror as Demand Holds and Supply Slows (Q1 2026 U.S. Industrial MarketBeat)",
        publisher: "Cushman & Wakefield",
        url: "https://www.cushmanwakefield.com/en/united-states/news/2026/04/peak-industrial-vacancy-likely-in-rearview-mirror-as-demand-holds-and-supply-slows",
        publishedDate: "April 2026",
      },
      {
        id: "jll-orlando-industrial",
        title: "Orlando Industrial Market Dynamics | Q4 2025",
        publisher: "JLL Research",
        url: "https://www.jll.com/en-us/insights/market-dynamics/orlando-industrial",
        publishedDate: "Q4 2025",
      },
      {
        id: "northmarq-orlando-multifamily",
        title:
          "Orlando's Multifamily Rents Gain Ground Despite Elevated Deliveries",
        publisher: "Northmarq Research",
        url: "https://www.northmarq.com/insights/insights/orlandos-multifamily-rents-gain-ground-despite-elevated-deliveries",
      },
      {
        id: "connect-cre-orlando-apartments",
        title:
          "Orlando Apartment Investors Can Expect 9% Vacancy Rates Through 2026",
        publisher: "Connect CRE",
        url: "https://www.connectcre.com/stories/orlando-apartment-investors-can-expect-9-vacancy-rates-through-2026/",
      },
      {
        id: "hoodline-orlando-office",
        title: "Orlando Office Shake-Up As Big Tenants Hog Top Space",
        publisher: "Hoodline",
        url: "https://hoodline.com/2026/02/orlando-office-shake-up-as-big-tenants-hog-top-space/",
        publishedDate: "February 2026",
      },
      {
        id: "mmg-orlando-retail",
        title: "Orlando Retail Real Estate Summary \u2013 Q1 2025",
        publisher: "MMG Equity Partners",
        url: "https://mmgequitypartners.com/orlando-retail-real-estate-summary-q1-2025/",
        publishedDate: "Q1 2025",
      },
      {
        id: "matthews-retail-market",
        title: "Retail Market Report | Orlando, FL",
        publisher: "Matthews Real Estate Investment Services",
        url: "https://www.matthews.com/retail-market-report-orlando-fl/",
      },
      {
        id: "growthspotter-office-96m",
        title: "Orlando-area office portfolio sells for $96 million",
        publisher: "GrowthSpotter",
        url: "https://www.growthspotter.com/2026/01/12/orlando-area-office-portfolio-sells-for-96-million/",
        publishedDate: "January 12, 2026",
      },
      {
        id: "growthspotter-industrial-250m",
        title:
          "Real estate firm sells 3 Orlando-area industrial parks for more than $250M",
        publisher: "GrowthSpotter",
        url: "https://www.growthspotter.com/2026/02/20/__trashed-2/",
        publishedDate: "February 20, 2026",
      },
      {
        id: "growthspotter-trio-multifamily",
        title:
          "Trio of multifamily communities change ownership in Orange County",
        publisher: "GrowthSpotter",
        url: "https://www.growthspotter.com/2026/01/05/metrowest-apartment-community-sells-for-nearly-60m-to-private-equity-firm/",
        publishedDate: "January 5, 2026",
      },
      {
        id: "yieldpro-heritage-estates",
        title:
          "Knightvest Capital Expands to Orlando with Multifamily Acquisition Heritage Estates",
        publisher: "Yield Pro",
        url: "https://yieldpro.com/2026/02/heritage-estates-2",
        publishedDate: "February 2026",
      },
    ],

    dataGaps: [
      "Orlando-specific Q1 2026 industrial MarketBeat had not been published by Cushman & Wakefield, JLL, or CBRE at the time of this report. National Q1 2026 industrial figures and Orlando's Q4 2025 print were the most recent defensible data.",
      "No Q1 2026 Orlando retail MarketBeat was published at time of writing. Retail section falls back to the most recent Q1 2025 Orlando retail figures with that staleness explicitly noted.",
      "Single-tenant NNN cap rates: no Q1 2026 Central Florida NNN cap rate has been published by a major firm that we were able to locate. Commentary in the retail section is flagged as MaxLife Realty's in-market observation.",
      "Land / development parcel statistics are omitted from the asset-class section entirely for this report; no quarterly published source exists for Central Florida land cap rates at a usable level.",
      "Hospitality is omitted for this report; the sector is thinly covered in Central Florida quarterly publications and we did not find a defensible Q1 2026 print.",
      "Orlando MSA unemployment is reported as the December 2025 print (4.4%) because the March 2026 BLS metro-area release is published with a lag and was not yet available at the time of this report.",
    ],
  },
];

// ─── Helpers ───

export function getReportBySlug(slug: string): MarketReport | undefined {
  return marketReports.find((r) => r.slug === slug && r.published);
}

export function getPublishedReports(): MarketReport[] {
  return marketReports
    .filter((r) => r.published)
    .sort((a, b) => {
      // Most recent first
      if (a.year !== b.year) return b.year - a.year;
      const qOrder: Record<Quarter, number> = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
      return qOrder[b.quarter] - qOrder[a.quarter];
    });
}

export function getReportsByYear(): Record<number, MarketReport[]> {
  const out: Record<number, MarketReport[]> = {};
  for (const r of getPublishedReports()) {
    if (!out[r.year]) out[r.year] = [];
    out[r.year].push(r);
  }
  return out;
}

export function formatQuarter(r: Pick<MarketReport, "quarter" | "year">): string {
  return `${r.quarter} ${r.year}`;
}

export function quarterLabel(r: Pick<MarketReport, "quarter" | "year">): string {
  const months: Record<Quarter, string> = {
    Q1: "January – March",
    Q2: "April – June",
    Q3: "July – September",
    Q4: "October – December",
  };
  return `${months[r.quarter]} ${r.year}`;
}
