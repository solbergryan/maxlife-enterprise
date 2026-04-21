import type { PropertyTypeEntry } from "./types";

const mhpListings = [
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Growing inventory of Florida MHP listings.", floridaUrl: "https://www.crexi.com/properties/FL/Mobile-Home-Park", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Mobile-Home-Park", allUrl: "https://www.crexi.com/properties/Mobile-Home-Park" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "The biggest pool of MHP listings in Florida.", floridaUrl: "https://www.loopnet.com/search/manufactured-home-community/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/manufactured-home-community/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/manufactured-home-community/usa/for-sale/" },
  { name: "MHVillage", tag: "MHP specialist marketplace", description: "Specialty manufactured home community listings.", floridaUrl: "https://www.mhvillage.com/", orlandoUrl: "https://www.mhvillage.com/", allUrl: "https://www.mhvillage.com/" },
];

const mhpTopLevel: PropertyTypeEntry = {
  slug: "mobile-home-park",
  meta: {
    title: "Mobile Home Parks for Sale in Florida | Manufactured Housing Communities",
    description: "Buy mobile home parks and manufactured housing communities in Florida. All-age, age-restricted, and family parks.",
    keywords: "mobile home park florida, manufactured housing community, mhp for sale",
  },
  page: {
    displayName: "Mobile Home Park",
    pluralDisplayName: "Mobile Home Parks",
    heroImage: {
      src: "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-real-estate-house-living-architecture-394961.webp",
      alt: "Mobile home park community in Central Florida",
    },
    heroEyebrow: "Manufactured Housing Investments",
    heroHeadline: "Mobile Home Parks for Sale in Florida",
    heroSubheadline: "The affordable housing answer — and one of the best risk-adjusted CRE returns of the past decade",
    heroBody: "Mobile home parks (MHPs) — also called manufactured housing communities — have been among the best-performing CRE categories of the past decade. The landlord owns the land and common infrastructure while residents own their homes and pay lot rent. This creates exceptionally sticky tenancy (it costs $5,000+ to move a home), low operating costs, and durable NOI through economic cycles. Florida has one of the largest MHP inventories in America with strong snowbird and retiree demand driving age-restricted community performance.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $60M+", detail: "50-pad parks to 500+ pad institutional communities" },
      { label: "Common Cap Rate", value: "5.5% – 7.5%", detail: "Top-tier age-restricted tightest" },
      { label: "Tenant Stickiness", value: "95%+ retention", detail: "Highest in CRE — moving a home is expensive" },
    ],
    formats: [
      { name: "Age-Restricted / 55+", capRate: "5.50% – 6.50%", footprint: "100 – 500+ pads", note: "Snowbird and retiree communities with amenities. Florida's premier MHP format." },
      { name: "All-Age Park", capRate: "6.00% – 7.25%", footprint: "50 – 300 pads", note: "Family-friendly parks open to all residents. Moderate operational variance." },
      { name: "Family Park", capRate: "6.50% – 7.75%", footprint: "50 – 250 pads", note: "Lower-income family communities. Higher operating variance and tenant turnover." },
      { name: "RV Park (Nested)", capRate: "6.75% – 8.00%", footprint: "100 – 400+ sites", note: "Snowbird RV and transient RV site mix. Often combined with MHP operations." },
    ],
    prosConsIntro: "Mobile home parks are the least-glamorous CRE asset class — and often the most profitable. Here's why experienced investors are flocking to the category.",
    pros: [
      { title: "Stickiest Tenancy in CRE", description: "The landlord doesn't own the homes — residents do. Moving a home costs $5,000+, creating extraordinary retention." },
      { title: "Low Operating Costs", description: "Parks are mostly land with minimal infrastructure. Operating expense ratios run 30–40% of EGI." },
      { title: "Inflation-Indexed Rents", description: "Month-to-month or annual lease structures allow continuous rent adjustments with inflation." },
      { title: "Affordable Housing Tailwind", description: "Florida housing affordability gap drives demand for the lowest-cost housing option." },
      { title: "Limited Supply", description: "New MHP development is essentially impossible in Florida due to zoning restrictions — existing parks are an appreciating resource." },
      { title: "Value-Add Upside", description: "Many mom-and-pop parks have below-market rents and under-metered utilities — clear path to NOI growth." },
    ],
    cons: [
      { title: "Stigma / Reputation Risk", description: "MHPs carry social stigma and occasional political/media scrutiny. Thick skin required." },
      { title: "Utility Infrastructure", description: "Older parks often have aging water/sewer/electrical infrastructure requiring significant CapEx." },
      { title: "Rent Increase Politics", description: "Aggressive rent increases sometimes draw political attention and tenant organizing." },
      { title: "Mobile Home Aging", description: "Older parks with pre-1976 (HUD code) homes may face resident-home replacement pressure over time." },
    ],
    personas: [
      { name: "Institutional Sponsors", tag: "Core / Core-Plus", description: "Platform operators like Sun Communities, Equity LifeStyle Properties, and RHP building scale.", fit: "Public REITs and large private sponsors dominate the institutional tier." },
      { name: "Mom-and-Pop Buyers", tag: "Owner-Operators", description: "Small operators buying individual parks as active-management businesses.", fit: "Best entry-point for cash-flow-focused investors with operating appetite." },
      { name: "Value-Add Sponsors", tag: "Force Appreciation", description: "Sponsors buying under-rented, under-metered parks and executing submetering + rent push.", fit: "Classic value-add with clear playbook and proven returns." },
      { name: "1031 Exchange Buyers", tag: "Fast Close", description: "Exchange buyers seeking stabilized replacement product.", fit: "MHPs are clean 1031 replacements with scale options." },
    ],
    underwritingMetrics: [
      { label: "Pad Rent", detail: "$300 – $650/month typical for Florida parks" },
      { label: "Economic Occupancy", detail: "90%+ for stabilized age-restricted product" },
      { label: "Utility Recovery", detail: "Target 90%+ submetered recovery of water, sewer, and trash" },
      { label: "Infrastructure Age", detail: "Confirm water, sewer, electric infrastructure age and condition" },
      { label: "Home Ownership %", detail: "Park-owned vs tenant-owned home ratio — more tenant-owned is better" },
      { label: "CapEx Reserve", detail: "$100–$300 per pad per year minimum" },
    ],
    listingSites: mhpListings,
    listingsIntro: "Want to see public MHP listings? These marketplaces aggregate Florida manufactured housing communities.",
    faqs: [
      { q: "Why have mobile home parks become so popular with investors?", a: "MHPs combine the lowest tenant turnover in CRE, low operating costs, inflation-protected rents, and limited new supply (new MHP development is nearly impossible due to zoning). The result is exceptionally stable NOI growth over time — among the best risk-adjusted returns in CRE." },
      { q: "Do I own the homes in a mobile home park investment?", a: "Typically no. In most well-run parks, residents own their homes and rent only the lot/pad from the park owner. This creates stickier tenancy (moving a home is expensive) and much lower landlord CapEx. Some parks also have park-owned homes (POH) that are rented out — these add operational complexity." },
      { q: "What's an age-restricted park?", a: "Age-restricted (55+) communities legally require at least one resident per home to be 55 years or older. They tend to be more amenity-rich (clubhouses, pools, pickleball), have higher rents, lower operating variance, and trade at tighter cap rates than all-age parks." },
    ],
    fitCheckQuestions: [
      "You want the stickiest tenancy profile in commercial real estate.",
      "You're comfortable with the operational demands of community management.",
      "You can execute on submetering and utility recovery upgrades.",
      "You want exposure to Florida's retiree and snowbird demographics.",
      "You understand the political and reputational dynamics of MHP investing.",
    ],
    leadFormIntro: "Tell us about your mobile home park criteria and we will send you current Florida opportunities.",
  },
};

const base = mhpTopLevel.page;

const allAge: PropertyTypeEntry = {
  slug: "all-age-park",
  parentSlug: "mobile-home-park",
  meta: { title: "All-Age Mobile Home Parks for Sale in Florida", description: "Buy all-age mobile home parks in Florida. Family-friendly manufactured housing communities.", keywords: "all age mhp florida, family mobile home park" },
  page: { ...base, displayName: "All-Age Park", pluralDisplayName: "All-Age Parks", heroHeadline: "All-Age Mobile Home Parks in Florida", heroSubheadline: "Family-friendly manufactured housing communities open to all residents", heroBody: "All-age parks are open to residents of any age — a mix of families, young professionals, and retirees. They trade at wider cap rates than 55+ parks because of higher tenant turnover variance and more active management demands. Strong value-add opportunities exist in under-rented, under-metered older all-age communities." },
};

const ageRestricted: PropertyTypeEntry = {
  slug: "age-restricted-park",
  parentSlug: "mobile-home-park",
  meta: { title: "55+ Age-Restricted Mobile Home Parks for Sale in Florida", description: "Buy 55+ age-restricted mobile home parks in Florida. Snowbird and retiree communities with amenities.", keywords: "55 plus mhp florida, age restricted park, snowbird community" },
  page: { ...base, displayName: "55+ Age-Restricted", pluralDisplayName: "Age-Restricted Parks", heroHeadline: "55+ Age-Restricted Parks in Florida", heroSubheadline: "Snowbird and retiree communities — the premier Florida MHP format", heroBody: "Age-restricted (55+) manufactured housing communities are Florida's premier MHP format — capturing the state's enormous retiree and snowbird population. These parks combine strong demographics, rich amenity packages (clubhouses, pools, pickleball, organized activities), and exceptionally sticky tenant profiles. Cap rates run 5.5% – 6.5% for top-tier product, the tightest in the MHP category." },
};

const familyPark: PropertyTypeEntry = {
  slug: "family-park",
  parentSlug: "mobile-home-park",
  meta: { title: "Family Mobile Home Parks for Sale in Florida", description: "Buy family-oriented mobile home parks in Florida. Lower-income family manufactured housing communities.", keywords: "family mhp florida, lower income park" },
  page: { ...base, displayName: "Family Park", pluralDisplayName: "Family Parks", heroHeadline: "Family Mobile Home Parks in Florida", heroSubheadline: "Lower-income family manufactured housing communities", heroBody: "Family parks serve lower-income residents with children, typically at the lower end of the Florida MHP rent spectrum. Higher operating variance and turnover than age-restricted product, but meaningful value-add upside for operators who can execute on submetering, amenity upgrades, and rent normalization." },
};

const nestedRvPark: PropertyTypeEntry = {
  slug: "rv-park-nested",
  parentSlug: "mobile-home-park",
  meta: { title: "RV Parks & Mixed MHP/RV Communities for Sale in Florida", description: "Buy RV parks and combined MHP/RV communities in Florida. Snowbird and transient RV site operations.", keywords: "rv park florida, snowbird rv park" },
  page: { ...base, displayName: "RV Park", pluralDisplayName: "RV Parks", heroHeadline: "RV Parks & Mixed MHP/RV Communities in Florida", heroSubheadline: "Snowbird and transient RV site operations", heroBody: "Florida RV parks — both standalone and combined with MHP communities — serve the massive snowbird RV market plus destination and transient RV travelers. Cash flow combines stable monthly-pad rents from long-term residents with higher-velocity nightly and weekly rates from transient guests. A natural value-add play combined with mobile home park operations." },
};

export const mhpRegistry: PropertyTypeEntry[] = [
  mhpTopLevel,
  allAge,
  ageRestricted,
  familyPark,
  nestedRvPark,
];
