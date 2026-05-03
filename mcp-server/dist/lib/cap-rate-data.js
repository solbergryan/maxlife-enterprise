// Florida 2026 cap rate reference data
export const FL_CAP_RATES_2026 = [
    { assetClass: "Chick-fil-A Ground Lease", rangeLow: 0.0375, rangeHigh: 0.0475, notes: "Absolute NNN, corporate guarantee" },
    { assetClass: "McDonald's Ground Lease", rangeLow: 0.0450, rangeHigh: 0.0525, notes: "Absolute NNN, corporate guarantee" },
    { assetClass: "Starbucks NNN", rangeLow: 0.0475, rangeHigh: 0.0550, notes: "Brand-new 10-yr leases trending lower" },
    { assetClass: "AutoZone / O'Reilly NNN", rangeLow: 0.0525, rangeHigh: 0.0600, notes: "Investment-grade credit tenants" },
    { assetClass: "CVS Pharmacy", rangeLow: 0.0550, rangeHigh: 0.0650, notes: "Varies by lease term remaining" },
    { assetClass: "Dollar General NNN", rangeLow: 0.0575, rangeHigh: 0.0650, notes: "New construction lower end" },
    { assetClass: "Walgreens", rangeLow: 0.0600, rangeHigh: 0.0700, notes: "Longer term = lower cap" },
    { assetClass: "Multifamily Class A", rangeLow: 0.0500, rangeHigh: 0.0575, notes: "Orlando / Tampa metros" },
    { assetClass: "Multifamily Class B", rangeLow: 0.0575, rangeHigh: 0.0650, notes: "Value-add opportunity" },
    { assetClass: "Industrial / Warehouse", rangeLow: 0.0550, rangeHigh: 0.0650, notes: "Strong demand from logistics" },
    { assetClass: "Retail Strip Center", rangeLow: 0.0650, rangeHigh: 0.0750, notes: "Anchored strips toward lower end" },
    { assetClass: "Medical Office", rangeLow: 0.0600, rangeHigh: 0.0675, notes: "Lake Nona / hospital corridors lower" },
    { assetClass: "Suburban Office", rangeLow: 0.0700, rangeHigh: 0.0850, notes: "Flex / medical hybrid trending lower" },
];
export const CENTRAL_FL_MARKETS = [
    {
        name: "Orlando",
        county: "Orange County",
        population: "2.7M+ metro",
        keyDrivers: ["Tourism & hospitality", "Healthcare / Lake Nona Medical City", "Tech & defense", "Strong population growth"],
        strongPropertyTypes: ["NNN / single-tenant", "Medical office", "Industrial", "Multifamily"],
        capRateComment: "Cap rates stabilized post-rate cycle. NNN market active; industrial vacancy at historic lows.",
    },
    {
        name: "Space Coast",
        county: "Brevard County",
        population: "650K+",
        keyDrivers: ["SpaceX / aerospace manufacturing", "Blue Origin & defense contractors", "Port Canaveral logistics"],
        strongPropertyTypes: ["Industrial / flex", "NNN retail", "Multifamily workforce housing"],
        capRateComment: "Industrial demand surging on aerospace expansion. Retail NNN in Melbourne / Viera submarket competitive.",
    },
    {
        name: "Lakeland",
        county: "Polk County",
        population: "750K+ county",
        keyDrivers: ["Amazon / e-commerce distribution", "Healthcare", "I-4 corridor logistics"],
        strongPropertyTypes: ["Industrial warehouse", "NNN retail", "Multifamily"],
        capRateComment: "One of Florida's fastest-growing logistics hubs. Industrial cap rates compressing.",
    },
    {
        name: "Daytona Beach",
        county: "Volusia County",
        population: "540K+ county",
        keyDrivers: ["Tourism", "Healthcare", "Retiree / second-home demand"],
        strongPropertyTypes: ["Retail NNN", "Medical office", "Multifamily"],
        capRateComment: "Stable market. Good value compared to coastal metros.",
    },
];
export function findCapRateBenchmark(query) {
    const q = query.toLowerCase();
    return FL_CAP_RATES_2026.filter(b => b.assetClass.toLowerCase().includes(q));
}
export function getMarket(query) {
    const q = query.toLowerCase();
    return CENTRAL_FL_MARKETS.find(m => m.name.toLowerCase().includes(q) ||
        m.county.toLowerCase().includes(q));
}
