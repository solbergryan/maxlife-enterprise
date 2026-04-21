import type { PropertyTypeEntry } from "./types";

const bizListings = [
  { name: "BizBuySell", tag: "Largest business marketplace", description: "America's largest business-for-sale listings site.", floridaUrl: "https://www.bizbuysell.com/florida/", orlandoUrl: "https://www.bizbuysell.com/florida/orlando/", allUrl: "https://www.bizbuysell.com/" },
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Business-for-sale listings alongside the real estate.", floridaUrl: "https://www.crexi.com/properties/FL/Business-For-Sale", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Business-For-Sale", allUrl: "https://www.crexi.com/properties/Business-For-Sale" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "Combined business and real estate listings.", floridaUrl: "https://www.loopnet.com/search/business-for-sale/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/business-for-sale/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/business-for-sale/usa/for-sale/" },
];

const bizTopLevel: PropertyTypeEntry = {
  slug: "business-for-sale",
  meta: {
    title: "Businesses for Sale in Florida | Operating Businesses With or Without Real Estate",
    description: "Buy operating businesses in Florida. Car washes, restaurants, laundromats, gyms, franchise resales, and more — with or without real estate.",
    keywords: "business for sale florida, buy a business, franchise resale, turnkey business",
  },
  page: {
    displayName: "Business for Sale",
    pluralDisplayName: "Operating Businesses",
    heroImage: {
      src: "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-glass-windows-business-blue-1508086.webp",
      alt: "Operating commercial business building",
    },
    heroEyebrow: "Operating Business Acquisitions",
    heroHeadline: "Businesses for Sale in Florida",
    heroSubheadline: "Operating businesses with or without real estate — combine income and appreciation in a single acquisition",
    heroBody: "Business-for-sale is a distinct category from traditional CRE investing — you're acquiring an operating company, not just a building. The real estate is usually a component, but the core transaction is a business with SDE (seller's discretionary earnings), employees, customers, and operating history. Florida's strong small business ecosystem, retiring baby boomer owners, and tourism economy create constant deal flow. Buyers typically finance through SBA 7(a) loans, which allow 10% down on business-plus-real-estate acquisitions.",
    quickStats: [
      { label: "Typical Deal Size", value: "$250K – $15M", detail: "Small business to mid-market" },
      { label: "Typical SDE Multiple", value: "2.5x – 4.5x", detail: "Small business valuation range" },
      { label: "Financing", value: "SBA 7(a)", detail: "10% down with real estate + business" },
    ],
    formats: [
      { name: "Car Wash Business", capRate: "N/A (SDE)", footprint: "Operating express tunnel", note: "Operating car wash business with or without real estate. 3-5x SDE multiples common." },
      { name: "Restaurant / Bar", capRate: "N/A (SDE)", footprint: "Operating F&B concept", note: "Full-service restaurants, bars, QSR. Franchise or independent. Highly operator-dependent." },
      { name: "Franchise Resale", capRate: "N/A (SDE)", footprint: "Existing franchise location", note: "Existing franchise location with operating history. Most popular small-business category." },
      { name: "Liquor Store", capRate: "N/A (SDE)", footprint: "Package store with license", note: "Licensed liquor stores. Value includes Florida quota license." },
      { name: "Laundromat", capRate: "N/A (SDE)", footprint: "Coin laundry operation", note: "Owner-operator or semi-absentee. Cash-heavy business model." },
      { name: "Gym / Fitness", capRate: "N/A (SDE)", footprint: "Fitness center operation", note: "Franchise or independent gym businesses." },
    ],
    prosConsIntro: "Buying a business is very different from buying real estate. Here's what to know before you shift from landlord to operator.",
    pros: [
      { title: "SBA Financing Leverage", description: "SBA 7(a) loans allow 10% down on combined business + real estate acquisitions — 9x leverage is rare in CRE." },
      { title: "Higher Cash-on-Cash Returns", description: "Operating businesses deliver significantly higher cash yields than passive CRE." },
      { title: "Control Over Upside", description: "Operator execution directly drives returns — you're not dependent on cap rate compression or tenant decisions." },
      { title: "Tax Benefits", description: "Combined business + real estate acquisitions enable cost segregation on the dirt while depreciating business assets." },
      { title: "Exit Optionality", description: "Can sell the business, the real estate, or both separately depending on market conditions." },
    ],
    cons: [
      { title: "Operator Risk = Your Risk", description: "You're the operator. Business performance depends on your execution, not passive rent collection." },
      { title: "Due Diligence Complexity", description: "Business diligence includes financials, employees, customer base, licenses, and many more items than CRE diligence." },
      { title: "Transition Risk", description: "Buying from a seller requires smooth transition of customers, employees, and operations." },
      { title: "No Passive Income", description: "Business ownership is active — expect to work in the business, not just on it." },
      { title: "Goodwill Depreciation", description: "The business value beyond real estate is essentially goodwill — it doesn't appreciate like dirt." },
    ],
    personas: [
      { name: "Owner-Operators", tag: "Hands-On", description: "Buyers who want to operate a business full-time as their primary income source.", fit: "Traditional small business acquisition for income and equity." },
      { name: "Semi-Absentee Buyers", tag: "Absentee Operators", description: "Buyers using management teams to run operations with light day-to-day involvement.", fit: "Laundromats, car washes, and other operator-light businesses." },
      { name: "Franchise Buyers", tag: "Brand + System", description: "Buyers looking for proven business systems and brand support.", fit: "Franchise resales combine proven playbooks with established customer bases." },
      { name: "Private Equity", tag: "Platform Builders", description: "Search funds and independent sponsors building acquisition platforms.", fit: "$2M-$15M SDE businesses are prime PE targets." },
    ],
    underwritingMetrics: [
      { label: "SDE Multiple", detail: "2.5x – 4.5x for most small businesses; higher for high-growth or franchise" },
      { label: "Owner Hours", detail: "Confirm actual owner hours worked — a business where owner works 60 hours looks different from passive" },
      { label: "Revenue Concentration", detail: "Customer concentration risk should be below 25% of revenue" },
      { label: "Employee Retention", detail: "Key employee retention post-close is often a deal-breaker" },
      { label: "Licenses & Permits", detail: "Transferability of licenses is critical — especially for regulated businesses" },
      { label: "Real Estate vs Business Allocation", detail: "Tax-efficient allocation of purchase price between dirt and business" },
    ],
    listingSites: bizListings,
    listingsIntro: "Want to see what's listed? These marketplaces aggregate Florida business-for-sale opportunities.",
    faqs: [
      { q: "How is buying a business different from buying real estate?", a: "Buying a business means you're acquiring an operating company — employees, customers, inventory, goodwill, licenses, and the real estate component (if included). You become the operator and your returns depend on execution. CRE buying is passive landlord income collection. Business buying is active ownership." },
      { q: "What's SDE and how is it different from EBITDA?", a: "Seller's Discretionary Earnings (SDE) is EBITDA plus the owner's compensation and personal benefits. Small businesses (under $2M EBITDA) are typically valued on SDE multiples because the owner's compensation is a meaningful part of cash flow. Larger businesses use EBITDA." },
      { q: "Can I finance a business purchase with SBA?", a: "Yes. SBA 7(a) loans are the most common financing for small business acquisitions, allowing 10% down on combined business + real estate deals up to $5M. This makes business-for-sale one of the most leveraged ways to build wealth in small business ownership." },
    ],
    fitCheckQuestions: [
      "You want to actively operate a business, not just collect rent checks.",
      "You have operating expertise in the category you're buying.",
      "You can execute on post-close transition of customers and employees.",
      "You want SBA 7(a) leverage that CRE buyers can't access.",
      "You're looking for higher cash yields than passive real estate.",
    ],
    leadFormIntro: "Tell us what kind of business you're looking for and we will send you current Florida opportunities.",
  },
};

const base = bizTopLevel.page;

const carWashBusiness: PropertyTypeEntry = {
  slug: "car-wash-business",
  parentSlug: "business-for-sale",
  meta: { title: "Car Wash Businesses for Sale in Florida", description: "Buy car wash businesses in Florida — express tunnels, flex-serve, and self-serve with or without real estate.", keywords: "car wash business florida, express tunnel business" },
  page: { ...base, displayName: "Car Wash Business", pluralDisplayName: "Car Wash Businesses", heroHeadline: "Car Wash Businesses for Sale in Florida", heroSubheadline: "Express tunnel and flex-serve operating businesses — with or without real estate", heroBody: "Florida is one of the most active markets for operating car wash business acquisitions. Express tunnels routinely sell on 3-5x SDE multiples, and PE-backed rollup platforms continue to acquire regional operators. Buyers can choose to acquire the business alone, the real estate alone, or both together — flexibility matters enormously for financing structure." },
};

const restaurantBusiness: PropertyTypeEntry = {
  slug: "restaurant-bar-business",
  parentSlug: "business-for-sale",
  meta: { title: "Restaurants & Bars for Sale in Florida", description: "Buy operating restaurants and bars in Florida — full-service, QSR, and specialty F&B businesses.", keywords: "restaurant for sale florida, bar for sale, f&b business" },
  page: { ...base, displayName: "Restaurant / Bar Business", pluralDisplayName: "Restaurant & Bar Businesses", heroHeadline: "Restaurants & Bars for Sale in Florida", heroSubheadline: "Full-service, QSR, and specialty F&B operating businesses", heroBody: "Florida's tourism economy and density support one of the largest restaurant-for-sale markets in America. Independent restaurants, franchise locations, and specialty F&B concepts trade regularly as operating businesses. Due diligence requires careful review of food costs, labor, lease terms, liquor license status (if applicable), and health department compliance." },
};

const franchiseResale: PropertyTypeEntry = {
  slug: "franchise-resale",
  parentSlug: "business-for-sale",
  meta: { title: "Franchise Resales for Sale in Florida", description: "Buy existing franchise locations in Florida. Proven franchise businesses with operating history.", keywords: "franchise resale florida, existing franchise" },
  page: { ...base, displayName: "Franchise Resale", pluralDisplayName: "Franchise Resales", heroHeadline: "Franchise Resales in Florida", heroSubheadline: "Existing franchise locations with proven operating history", heroBody: "Franchise resales — buying an existing franchise location instead of opening a new one — are among the most popular small-business acquisitions. You get a proven business system, established customer base, operating history, and trained staff. Franchisor approval is required, and most franchises charge a transfer fee to the buyer." },
};

const liquorStore: PropertyTypeEntry = {
  slug: "liquor-store",
  parentSlug: "business-for-sale",
  meta: { title: "Liquor Stores & Package Stores for Sale in Florida", description: "Buy liquor stores and package stores in Florida. Includes Florida quota license value.", keywords: "liquor store florida, package store, quota license" },
  page: { ...base, displayName: "Liquor Store / Package Store", pluralDisplayName: "Liquor Stores", heroHeadline: "Liquor Stores for Sale in Florida", heroSubheadline: "Package stores with Florida quota licenses", heroBody: "Florida liquor stores operate under the state's quota license system, which caps the number of licenses available and creates significant value in the license itself. Business acquisitions in this category include both the operating business and the transferable license — often valued as meaningfully as the business or real estate components." },
};

const laundromat: PropertyTypeEntry = {
  slug: "laundromat",
  parentSlug: "business-for-sale",
  meta: { title: "Laundromats for Sale in Florida", description: "Buy coin laundry and laundromat businesses in Florida. Semi-absentee operator-light businesses.", keywords: "laundromat florida, coin laundry" },
  page: { ...base, displayName: "Laundromat", pluralDisplayName: "Laundromats", heroHeadline: "Laundromats for Sale in Florida", heroSubheadline: "Semi-absentee coin laundry operating businesses", heroBody: "Laundromats are among the most popular semi-absentee small business categories — machines run 24/7 with minimal daily operator involvement. Florida's dense population and high apartment-renter percentage drive durable laundromat demand. Business valuations are SDE-based and typically run 2.5x – 4x SDE for stabilized operations." },
};

const gymFitness: PropertyTypeEntry = {
  slug: "gym-fitness-business",
  parentSlug: "business-for-sale",
  meta: { title: "Gyms & Fitness Businesses for Sale in Florida", description: "Buy operating gyms and fitness businesses in Florida. Independent and franchise fitness operations.", keywords: "gym for sale florida, fitness business, franchise gym" },
  page: { ...base, displayName: "Gym / Fitness Business", pluralDisplayName: "Gym & Fitness Businesses", heroHeadline: "Gyms & Fitness Businesses in Florida", heroSubheadline: "Independent gyms, franchise fitness studios, and specialty fitness operators", heroBody: "Florida fitness businesses span independent gyms, franchise health clubs (Planet Fitness, Crunch, Anytime Fitness), boutique studios (Orangetheory, F45, Pilates), and specialty fitness concepts. Most operate on monthly membership revenue models with recurring cash flow profiles attractive to semi-absentee owners." },
};

const cstoreGasBusiness: PropertyTypeEntry = {
  slug: "cstore-gas-business",
  parentSlug: "business-for-sale",
  meta: { title: "C-Store & Gas Station Businesses for Sale in Florida", description: "Buy operating convenience stores and gas stations in Florida with or without real estate.", keywords: "c store for sale florida, gas station business" },
  page: { ...base, displayName: "C-Store / Gas Business", pluralDisplayName: "C-Store & Gas Businesses", heroHeadline: "C-Stores & Gas Stations for Sale in Florida", heroSubheadline: "Operating convenience stores and gas stations with or without real estate", heroBody: "Independent and small-chain convenience stores and gas stations are among the most active business-for-sale categories in Florida. Combined business + real estate acquisitions typically qualify for SBA 7(a) financing. Environmental diligence is mandatory — Phase I and Phase II ESAs should always be conducted before closing." },
};

const hotelMotelBiz: PropertyTypeEntry = {
  slug: "hotel-motel-business",
  parentSlug: "business-for-sale",
  meta: { title: "Hotel & Motel Businesses for Sale in Florida", description: "Buy operating hotels and motels in Florida. Franchise and independent hospitality business acquisitions.", keywords: "hotel for sale florida, motel business, hospitality business" },
  page: { ...base, displayName: "Hotel / Motel Business", pluralDisplayName: "Hotel & Motel Businesses", heroHeadline: "Hotels & Motels for Sale in Florida", heroSubheadline: "Operating hospitality businesses with or without real estate", heroBody: "Florida hotel and motel businesses trade regularly as combined business + real estate acquisitions. Smaller limited-service and independent properties frequently sell to first-time hoteliers via SBA financing, while larger franchised properties go to professional hospitality operators. See the Hospitality category page for detailed underwriting guidance." },
};

const autoServiceBusiness: PropertyTypeEntry = {
  slug: "auto-service-business",
  parentSlug: "business-for-sale",
  meta: { title: "Auto Service Businesses for Sale in Florida", description: "Buy operating auto service businesses in Florida — repair, body shop, lube, tire, and collision.", keywords: "auto service business florida, auto repair for sale" },
  page: { ...base, displayName: "Auto Service Business", pluralDisplayName: "Auto Service Businesses", heroHeadline: "Auto Service Businesses for Sale in Florida", heroSubheadline: "Operating auto repair, body shop, lube, and tire businesses", heroBody: "Florida's car-dependent economy drives strong auto service business demand. Independent repair shops, body shops, quick lube operations, and tire stores trade regularly as operating businesses with or without real estate. Franchise opportunities include Jiffy Lube, Valvoline, and Big O Tires. Environmental diligence is critical for repair and body shop acquisitions." },
};

export const businessForSaleRegistry: PropertyTypeEntry[] = [
  bizTopLevel,
  carWashBusiness,
  restaurantBusiness,
  franchiseResale,
  liquorStore,
  laundromat,
  gymFitness,
  cstoreGasBusiness,
  hotelMotelBiz,
  autoServiceBusiness,
];
