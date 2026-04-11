// Static search index for the site-wide search bar.
// Each entry describes a destination page that should be findable via search.
// Keep titles short and add alternate terms in `keywords` so fuzzy-ish matching
// works for common synonyms (e.g., "cap rate" -> "cap rates").

export interface SearchItem {
  title: string;
  description: string;
  url: string;
  category:
    | "Tool"
    | "Landing"
    | "Market"
    | "Blog"
    | "Service"
    | "Academy"
    | "Page";
  keywords?: string[];
}

export const searchIndex: SearchItem[] = [
  // ── Tools / Calculators ────────────────────────────────────────────
  {
    title: "Deal Analyzer",
    description:
      "Free CRE underwriting calculator — score NNN, multifamily & SFR deals with IRR, DSCR, and cash-on-cash.",
    url: "/deal-analyzer",
    category: "Tool",
    keywords: ["underwriting", "calculator", "irr", "dscr", "cap rate", "noi"],
  },
  {
    title: "Seller Net Sheet",
    description:
      "Estimate your walk-away proceeds after commissions, payoffs, and closing costs.",
    url: "/net-sheets/seller",
    category: "Tool",
    keywords: ["seller", "proceeds", "closing costs", "net sheet"],
  },
  {
    title: "Buyer Estimate",
    description:
      "Estimate total cash required to close and monthly carrying costs.",
    url: "/net-sheets/buyer",
    category: "Tool",
    keywords: ["buyer", "closing costs", "cash to close"],
  },
  {
    title: "Net Sheets Overview",
    description: "All MaxLife net sheet calculators in one place.",
    url: "/net-sheets",
    category: "Tool",
    keywords: ["calculators", "net sheets"],
  },
  {
    title: "Investor Tools",
    description:
      "Calculators and resources for commercial real estate investors.",
    url: "/investor-tools",
    category: "Tool",
  },

  // ── Landing pages ─────────────────────────────────────────────────
  {
    title: "NNN Properties Florida",
    description:
      "Triple net lease investments with credit tenants across Central Florida.",
    url: "/nnn-properties-florida",
    category: "Landing",
    keywords: ["triple net", "net lease", "passive income", "credit tenant"],
  },
  {
    title: "Car Wash Properties Florida",
    description:
      "Express tunnel, flex serve, and self-serve car wash investments with a pre-loaded deal analyzer.",
    url: "/car-wash-properties-florida",
    category: "Landing",
    keywords: [
      "car wash",
      "express tunnel",
      "tunnel wash",
      "flex serve",
      "in-bay",
    ],
  },
  {
    title: "1031 Exchange Florida",
    description:
      "Replace property with qualifying CRE before your 45/180-day deadlines.",
    url: "/1031-exchange-florida",
    category: "Landing",
    keywords: [
      "1031",
      "exchange",
      "like-kind",
      "tax deferred",
      "replacement property",
    ],
  },
  {
    title: "Central Florida Land for Development",
    description:
      "Raw land, entitled sites, and development parcels across Central Florida.",
    url: "/central-florida-land-for-development",
    category: "Landing",
    keywords: ["land", "development", "entitlements", "parcels"],
  },
  {
    title: "Industrial Property Central Florida",
    description: "Warehouse, flex, and industrial investment opportunities.",
    url: "/industrial-property-central-florida",
    category: "Landing",
    keywords: ["industrial", "warehouse", "flex space", "distribution"],
  },
  {
    title: "Office Space for Lease Orlando",
    description: "Class A, B, and medical office leasing across Orlando.",
    url: "/office-space-for-lease-orlando",
    category: "Landing",
    keywords: ["office", "lease", "class a", "medical office"],
  },
  {
    title: "Retail Space for Rent Orlando",
    description: "Retail storefronts, endcaps, and shopping center leases.",
    url: "/retail-space-for-rent-orlando",
    category: "Landing",
    keywords: ["retail", "storefront", "shopping center", "lease"],
  },
  {
    title: "Build-to-Suit Orlando",
    description:
      "Custom commercial builds delivered to your specifications on preferred sites.",
    url: "/build-to-suit-orlando",
    category: "Landing",
    keywords: ["build to suit", "bts", "construction", "custom build"],
  },
  {
    title: "Orlando Commercial Real Estate Deals",
    description:
      "Current on- and off-market commercial opportunities in Orlando.",
    url: "/orlando-commercial-real-estate-deals",
    category: "Landing",
    keywords: ["deals", "off market", "orlando cre"],
  },
  {
    title: "Opportunities / Sell Your Property",
    description:
      "Get a valuation and list your commercial property with MaxLife.",
    url: "/opportunities",
    category: "Landing",
    keywords: ["sell", "valuation", "list property"],
  },

  // ── Markets ───────────────────────────────────────────────────────
  {
    title: "Markets Overview",
    description: "Central Florida CRE market analysis and submarket data.",
    url: "/markets",
    category: "Market",
  },
  {
    title: "Orlando Commercial Real Estate",
    description:
      "Cap rates, absorption, and submarket breakdowns for Orlando CRE.",
    url: "/markets/orlando-commercial-real-estate",
    category: "Market",
    keywords: ["orlando", "metro", "i-drive", "downtown"],
  },
  {
    title: "Brevard County Commercial Real Estate",
    description:
      "Space Coast market data — Melbourne, Palm Bay, Titusville, Cocoa.",
    url: "/markets/brevard-county-commercial-real-estate",
    category: "Market",
    keywords: [
      "brevard",
      "melbourne",
      "palm bay",
      "space coast",
      "cocoa",
      "titusville",
    ],
  },
  {
    title: "Lake County Commercial Land",
    description:
      "Lake County growth corridor — Clermont, Leesburg, Mount Dora.",
    url: "/markets/lake-county-commercial-land",
    category: "Market",
    keywords: ["lake county", "clermont", "leesburg", "mount dora"],
  },
  {
    title: "Central Florida Investment Properties",
    description: "Investment-grade CRE across the Central Florida corridor.",
    url: "/markets/central-florida-investment-properties",
    category: "Market",
  },
  {
    title: "Market Reports",
    description:
      "Quarterly Central Florida commercial real estate market reports.",
    url: "/market-reports",
    category: "Market",
    keywords: ["quarterly", "report", "q1", "q2", "q3", "q4"],
  },

  // ── Services ──────────────────────────────────────────────────────
  {
    title: "Commercial Real Estate Brokerage",
    description: "Acquisitions, dispositions, and tenant representation.",
    url: "/services/commercial-real-estate",
    category: "Service",
    keywords: ["broker", "acquisition", "disposition"],
  },
  {
    title: "NNN Investment Services",
    description: "Sourcing, underwriting, and closing NNN investment deals.",
    url: "/services/nnn-investments",
    category: "Service",
  },
  {
    title: "Land Development Services",
    description:
      "Raw land acquisitions, entitlements, and development site sourcing.",
    url: "/services/land-development",
    category: "Service",
  },
  {
    title: "Commercial Development Services",
    description:
      "Ground-up commercial development from site selection to delivery.",
    url: "/services/development",
    category: "Service",
  },
  {
    title: "Residential Real Estate",
    description:
      "Home buying and selling representation in Central Florida.",
    url: "/services/residential-real-estate",
    category: "Service",
  },
  {
    title: "Custom Solutions",
    description: "Bespoke CRE strategies for family offices and 1031 buyers.",
    url: "/services/custom-solutions",
    category: "Service",
  },
  {
    title: "Property Services",
    description: "Ongoing property oversight, leasing, and asset management.",
    url: "/services/property-services",
    category: "Service",
  },
  {
    title: "All Services",
    description: "Every MaxLife service in one place.",
    url: "/services",
    category: "Service",
  },

  // ── Blog / Insights ───────────────────────────────────────────────
  {
    title: "What Is a Triple Net (NNN) Lease?",
    description:
      "Complete investor guide to NNN lease structures and tenant responsibilities.",
    url: "/blog/what-is-nnn-lease",
    category: "Blog",
    keywords: ["nnn", "triple net", "lease guide"],
  },
  {
    title: "Orlando Cap Rates Investor Guide",
    description:
      "Cap rate trends by property type and tenant credit across the Orlando MSA.",
    url: "/blog/orlando-cap-rates-investor-guide",
    category: "Blog",
    keywords: ["cap rate", "yield", "trends"],
  },
  {
    title: "Orlando NNN Properties for Sale",
    description: "Where to find NNN deals in Orlando and what to look for.",
    url: "/blog/orlando-nnn-properties-for-sale",
    category: "Blog",
  },
  {
    title: "1031 Exchange Rules for Florida Investors",
    description:
      "Deadlines, identification rules, and qualified intermediaries explained.",
    url: "/blog/1031-exchange-orlando-guide",
    category: "Blog",
    keywords: ["1031", "qualified intermediary", "identification"],
  },
  {
    title: "How to Evaluate a Commercial Real Estate Deal",
    description:
      "The metrics and red flags every CRE investor should screen for.",
    url: "/blog/how-to-evaluate-commercial-real-estate-deal",
    category: "Blog",
    keywords: ["underwriting", "due diligence", "screening"],
  },
  {
    title: "How to Buy Commercial Property in Orlando",
    description: "Step-by-step guide from sourcing to closing.",
    url: "/blog/how-to-buy-commercial-property-orlando",
    category: "Blog",
  },
  {
    title: "Orlando Industrial Real Estate Guide",
    description: "Warehouse and flex submarkets, rents, and cap rates.",
    url: "/blog/orlando-industrial-real-estate-guide",
    category: "Blog",
    keywords: ["industrial", "warehouse", "flex"],
  },
  {
    title: "Orlando Multifamily Investment Guide",
    description:
      "Submarket breakdown, rent trends, and cap rates for apartment investors.",
    url: "/blog/orlando-multifamily-investment-guide",
    category: "Blog",
    keywords: ["multifamily", "apartments", "rent"],
  },
  {
    title: "Best Orlando Submarkets for Retail Space",
    description: "Where to find the strongest retail corridors in Orlando.",
    url: "/blog/orlando-retail-commercial-real-estate",
    category: "Blog",
    keywords: ["retail", "corridor", "shopping"],
  },
  {
    title: "Medical Office Investing in Central Florida",
    description: "Cap rates, tenant types, and the MOB investment case.",
    url: "/blog/medical-office-investing-central-florida",
    category: "Blog",
    keywords: ["medical office", "mob", "healthcare"],
  },
  {
    title: "Office Space for Lease in Orlando: Tenant's Guide",
    description: "What office tenants need to know about leasing in Orlando.",
    url: "/blog/office-space-for-lease-orlando-guide",
    category: "Blog",
  },
  {
    title: "Build-to-Suit vs Existing Commercial Property",
    description: "When to build new versus buy existing in Orlando CRE.",
    url: "/blog/build-to-suit-vs-existing-commercial-orlando",
    category: "Blog",
    keywords: ["build to suit", "bts"],
  },
  {
    title: "Why Central Florida Is Hot for Land Development",
    description:
      "Population, infrastructure, and entitlement trends driving the land market.",
    url: "/blog/central-florida-land-development",
    category: "Blog",
    keywords: ["land", "development", "entitlements"],
  },
  {
    title: "Brevard County Investment Property Outlook",
    description:
      "Space Coast market forecast for commercial real estate investors.",
    url: "/blog/brevard-county-investment-property-outlook",
    category: "Blog",
    keywords: ["brevard", "space coast"],
  },
  {
    title: "Lake County Commercial Real Estate Guide",
    description:
      "Clermont and the Lake County growth corridor for CRE investors.",
    url: "/blog/lake-county-commercial-real-estate-guide",
    category: "Blog",
    keywords: ["lake county", "clermont"],
  },
  {
    title: "Central Florida CRE Submarkets",
    description: "The top Central Florida submarkets for commercial investing.",
    url: "/blog/central-florida-commercial-real-estate-submarkets",
    category: "Blog",
  },
  {
    title: "Orlando Commercial Real Estate Market Report 2026",
    description: "The 2026 state of Orlando commercial real estate.",
    url: "/blog/orlando-commercial-real-estate-trends-2026",
    category: "Blog",
    keywords: ["2026", "forecast", "trends"],
  },
  {
    title: "Orlando Entertainment District Investment Guide",
    description:
      "Disney, Universal, and the I-Drive corridor for CRE investors.",
    url: "/blog/orlando-entertainment-district-investment-guide",
    category: "Blog",
    keywords: ["i-drive", "disney", "universal", "tourist corridor"],
  },
  {
    title: "Why Out-of-State Investors Choose Florida CRE",
    description:
      "Tax, growth, and lifestyle reasons investors are moving capital to Florida.",
    url: "/blog/why-invest-commercial-real-estate-florida",
    category: "Blog",
    keywords: ["out of state", "florida", "no income tax"],
  },
  {
    title: "War, Oil Prices & Orlando CRE — Spring 2026",
    description:
      "How global macro shocks are filtering through Orlando commercial real estate.",
    url: "/blog/war-oil-prices-orlando-commercial-real-estate-spring-2026",
    category: "Blog",
    keywords: ["macro", "oil", "spring 2026"],
  },
  {
    title: "All Blog Posts",
    description: "Browse every MaxLife market insight and guide.",
    url: "/blog",
    category: "Blog",
  },

  // ── Academy ───────────────────────────────────────────────────────
  {
    title: "MaxLife Academy",
    description: "Free commercial real estate courses for new and pro investors.",
    url: "/academy",
    category: "Academy",
    keywords: ["courses", "education", "learn"],
  },
  {
    title: "Academy Dashboard",
    description: "Track your course progress and continue learning.",
    url: "/academy/dashboard",
    category: "Academy",
  },

  // ── Misc pages ────────────────────────────────────────────────────
  {
    title: "About Ryan Solberg",
    description: "Orlando commercial real estate broker and MaxLife founder.",
    url: "/about",
    category: "Page",
    keywords: ["ryan solberg", "broker", "about"],
  },
  {
    title: "Portfolio / Closed Deals",
    description: "MaxLife's closed commercial deals and case studies.",
    url: "/portfolio",
    category: "Page",
    keywords: ["closed deals", "track record"],
  },
  {
    title: "Case Studies",
    description: "In-depth look at select MaxLife closings and strategies.",
    url: "/case-studies",
    category: "Page",
  },
  {
    title: "Contact MaxLife",
    description: "Reach out to the MaxLife team.",
    url: "/contact",
    category: "Page",
    keywords: ["contact", "email", "phone"],
  },
  {
    title: "Investor Access",
    description: "Log in to the MaxLife investor deal room.",
    url: "/investor-access",
    category: "Page",
    keywords: ["login", "deal room"],
  },
];

// ── Search helper ───────────────────────────────────────────────────
// Lightweight scoring: exact title match > title prefix > title contains >
// keyword match > description contains. Multi-word queries all must hit
// somewhere in the haystack.
export function searchSite(
  query: string,
  limit = 8,
): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  const scored = searchIndex
    .map((item) => {
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      const keywords = (item.keywords ?? []).map((k) => k.toLowerCase());
      const haystack = [title, desc, ...keywords].join(" | ");

      // Every term must be present somewhere in the haystack.
      if (!terms.every((t) => haystack.includes(t))) return null;

      let score = 0;
      if (title === q) score += 100;
      if (title.startsWith(q)) score += 40;
      if (title.includes(q)) score += 25;
      for (const t of terms) {
        if (title.includes(t)) score += 8;
        if (keywords.some((k) => k.includes(t))) score += 6;
        if (desc.includes(t)) score += 2;
      }
      return { item, score };
    })
    .filter((r): r is { item: SearchItem; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);

  return scored;
}
