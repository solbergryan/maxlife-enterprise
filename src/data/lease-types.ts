export interface LeaseType {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaDescription: string;
  definition: string;
  whoPays: { label: string; tenant: boolean; landlord: boolean }[];
  pros: string[];
  cons: string[];
  typicalUseCases: string[];
  typicalTerms: {
    term: string;
    rentBumps: string;
    capRate: string;
    tenantTypes: string;
  };
  howItCompares: string;
  investorPerspective: string;
}

export const leaseTypes: LeaseType[] = [
  {
    slug: "absolute-nnn-lease",
    name: "Absolute NNN Lease",
    shortName: "Absolute NNN",
    tagline: "The gold standard for truly passive real estate income",
    metaDescription:
      "Absolute NNN lease structure — the most passive commercial real estate lease. Tenant pays everything including roof and structure. Learn how absolute triple net leases work.",
    definition:
      "An absolute NNN lease (also called a 'bondable lease') is the purest form of triple net lease. The tenant is responsible for 100% of property-related expenses — property taxes, insurance, all maintenance, roof replacement, and structural repairs. The landlord's only responsibility is to collect rent. This is the most landlord-friendly lease structure in commercial real estate and the gold standard for passive investors.",
    whoPays: [
      { label: "Property Taxes", tenant: true, landlord: false },
      { label: "Insurance", tenant: true, landlord: false },
      { label: "Maintenance & Repairs", tenant: true, landlord: false },
      { label: "Utilities", tenant: true, landlord: false },
      { label: "Roof Replacement", tenant: true, landlord: false },
      { label: "Structural Repairs", tenant: true, landlord: false },
      { label: "Parking Lot Repairs", tenant: true, landlord: false },
      { label: "HVAC Replacement", tenant: true, landlord: false },
    ],
    pros: [
      "Truly passive — landlord has zero operational involvement",
      "Predictable monthly income",
      "No surprise expenses or capital calls",
      "Simple tax treatment (no active operations)",
      "Easy to value (income approach works cleanly)",
      "Attractive to 1031 exchange buyers at resale",
    ],
    cons: [
      "Tighter cap rates than NN or multi-tenant",
      "Single-point-of-failure (one tenant)",
      "If tenant defaults, landlord has maintenance obligations",
      "Tenant may under-maintain (not incentivized to over-invest)",
      "Limited ability to modify property during lease term",
    ],
    typicalUseCases: [
      "Dollar General, Family Dollar (dollar stores)",
      "AutoZone, O'Reilly (auto parts)",
      "Wawa, 7-Eleven (convenience/gas)",
      "QSR build-to-suit (McDonald's, Chick-fil-A)",
    ],
    typicalTerms: {
      term: "15-25 years initial + 5-year options",
      rentBumps: "Flat, or 10% every 5 years",
      capRate: "5.5% - 7.0% typical",
      tenantTypes: "Investment-grade national retailers",
    },
    howItCompares:
      "Absolute NNN is more landlord-friendly than NN (Double Net), which still retains landlord responsibility for roof and structure. Compared to a ground lease, absolute NNN gives the landlord the building (not just land) — potentially more value at lease end but more risk during the lease term.",
    investorPerspective:
      "Absolute NNN is the foundation of passive commercial real estate investing. For investors who want to collect a rent check and not think about their property, this is the structure of choice. Most popular with 1031 exchange buyers, retirees, and investors diversifying from management-intensive rental properties.",
  },
  {
    slug: "double-net-lease-nn",
    name: "Double Net Lease (NN)",
    shortName: "Double Net (NN)",
    tagline: "Triple net minus the roof and structure",
    metaDescription:
      "Double Net (NN) lease — commercial lease where tenant pays taxes and insurance but landlord keeps responsibility for roof and structure. Cap rates, examples, and comparison.",
    definition:
      "A Double Net (NN) lease is similar to triple net but with landlord retaining responsibility for specific structural items — typically roof, structure, and sometimes HVAC replacement. The tenant still pays property taxes, insurance, and day-to-day maintenance. NN leases trade at slightly wider cap rates than absolute NNN because the landlord has some operational exposure.",
    whoPays: [
      { label: "Property Taxes", tenant: true, landlord: false },
      { label: "Insurance", tenant: true, landlord: false },
      { label: "Day-to-Day Maintenance", tenant: true, landlord: false },
      { label: "Utilities", tenant: true, landlord: false },
      { label: "Roof Replacement", tenant: false, landlord: true },
      { label: "Structural Repairs", tenant: false, landlord: true },
      { label: "HVAC Replacement", tenant: false, landlord: true },
      { label: "Parking Lot Repairs", tenant: false, landlord: true },
    ],
    pros: [
      "Wider cap rates than absolute NNN (higher current yield)",
      "Landlord maintains property value via roof/structural investment",
      "Common structure for older chains with established leases",
      "Still mostly passive compared to gross leases",
    ],
    cons: [
      "Capital calls when roof/HVAC needs replacement",
      "Less attractive to purely passive investors",
      "Budgeting for cap ex required",
      "Some buyer friction vs. absolute NNN at resale",
    ],
    typicalUseCases: [
      "Advance Auto Parts (typically NN)",
      "Some older Dollar Tree leases",
      "Some NN chain restaurant leases",
      "Certain pharmacy leases with older vintages",
    ],
    typicalTerms: {
      term: "10-15 years initial + options",
      rentBumps: "5-10% every 5 years typical",
      capRate: "5.75% - 7.0% typical",
      tenantTypes: "National retailers with older lease structures",
    },
    howItCompares:
      "NN sits between absolute NNN (tenant pays everything) and modified gross (tenant pays less). The key distinction is that the landlord retains capital responsibility for roof, structure, and sometimes HVAC.",
    investorPerspective:
      "NN leases are a compromise between yield and passivity. Investors who want slightly higher cap rates and are willing to plan for roof/HVAC capital needs often find NN attractive. Underwrite a reserve of 2-4% of rent annually for structural capex.",
  },
  {
    slug: "ground-lease",
    name: "Ground Lease",
    shortName: "Ground Lease",
    tagline: "Own the land, let the tenant build the building",
    metaDescription:
      "Ground lease commercial real estate — landlord owns the land while tenant owns and operates the building on a long-term lease. Used by McDonald's, Chase Bank, Chick-fil-A.",
    definition:
      "A ground lease separates land ownership from building ownership. The land owner (lessor) leases the land long-term (typically 40-99 years) to a tenant (lessee) who builds and owns the improvements. The lessee pays ground rent, property taxes, insurance, and all maintenance. At lease end, improvements typically revert to the land owner — providing long-term reversion value in addition to rent.",
    whoPays: [
      { label: "Ground Rent", tenant: false, landlord: false },
      { label: "Property Taxes", tenant: true, landlord: false },
      { label: "Insurance (Land + Building)", tenant: true, landlord: false },
      { label: "All Maintenance", tenant: true, landlord: false },
      { label: "Building Construction", tenant: true, landlord: false },
      { label: "Building Repairs", tenant: true, landlord: false },
      { label: "Utilities", tenant: true, landlord: false },
      { label: "Building Replacement (if needed)", tenant: true, landlord: false },
    ],
    pros: [
      "Tightest cap rates in commercial real estate (3.75-5%)",
      "Minimal landlord risk — you own only land",
      "Reversion value at lease end (tenant's building becomes yours)",
      "Tenant bears 100% of building maintenance/replacement risk",
      "Inflation protection via rent bumps",
      "Very attractive to multi-generational wealth structures",
    ],
    cons: [
      "Lowest current yield of any lease structure",
      "Long-term capital lockup (40-99 years)",
      "Limited flexibility during lease term",
      "No depreciation benefit (you own land only)",
      "Complex to 1031 exchange out of",
    ],
    typicalUseCases: [
      "McDonald's (ground lease is preferred structure)",
      "Chase Bank, Wells Fargo",
      "Chick-fil-A (often ground lease)",
      "Starbucks (some locations)",
      "Some Wawa and RaceTrac locations",
    ],
    typicalTerms: {
      term: "40-99 years (20-year initial + multiple options typical)",
      rentBumps: "10% every 5 years, or CPI-linked",
      capRate: "3.75% - 5.25% (tightest in CRE)",
      tenantTypes: "Investment-grade national tenants",
    },
    howItCompares:
      "Ground lease is fundamentally different from NNN — you own only the land, not the building. Tighter cap rates reflect the extremely low risk profile. Reversion value at lease end creates multi-generational wealth-building potential that fee simple doesn't offer.",
    investorPerspective:
      "Ground leases are the safest income real estate in commercial. If you can accept the lower current yield (3.75-5% vs. 5.5-7% for absolute NNN), you get near-institutional-grade income with minimal risk. Especially attractive for long-term holders and family wealth structures.",
  },
  {
    slug: "build-to-suit-lease",
    name: "Build-to-Suit (BTS) Lease",
    shortName: "Build-to-Suit",
    tagline: "Pre-committed leases on properties built to tenant specs",
    metaDescription:
      "Build-to-suit (BTS) commercial lease — tenant pre-commits to a lease, developer builds to specifications. The foundation of NNN retail development in America.",
    definition:
      "A Build-to-Suit (BTS) lease is a long-term lease agreement where a tenant pre-commits to lease a property before it's built. The developer acquires land, builds the property to the tenant's specifications (layout, size, fixtures), and delivers the finished property to the tenant for lease commencement. BTS is the primary development model for single-tenant NNN retail — dollar stores, auto parts, QSR, pharmacies, and convenience stores all expand primarily through BTS.",
    whoPays: [
      { label: "Construction (developer funds)", tenant: false, landlord: true },
      { label: "Property Taxes (after opening)", tenant: true, landlord: false },
      { label: "Insurance (after opening)", tenant: true, landlord: false },
      { label: "Maintenance (after opening)", tenant: true, landlord: false },
      { label: "Tenant Build-Out (tenant usually self-funds)", tenant: true, landlord: false },
      { label: "Structure & Roof (per lease — often absolute NNN)", tenant: true, landlord: false },
    ],
    pros: [
      "Predictable development spread (150-250 bps typical)",
      "Tenant commitment reduces speculative risk",
      "12-18 month project cycle with clean exit",
      "Active tenant expansion programs create pipeline",
      "Strong disposition buyer pool (1031 buyers, NNN investors)",
      "Corporate guarantees on leases",
    ],
    cons: [
      "Entitlements and construction risk",
      "Cost overruns cut into developer profit",
      "Tenant LOI can fall through before land closing",
      "Capital-intensive (requires development equity)",
      "Timeline risk (weather, permit delays, labor)",
    ],
    typicalUseCases: [
      "Dollar General (most active BTS program nationally)",
      "AutoZone, O'Reilly, Advance Auto Parts",
      "Take 5 Oil Change",
      "Chick-fil-A (BTS or ground lease)",
      "Starbucks (drive-thru locations)",
      "Dutch Bros, Wawa",
    ],
    typicalTerms: {
      term: "15-25 years initial + 5-year options",
      rentBumps: "10% every 5 years, or escalations in option periods",
      capRate: "5.25% - 6.50% at disposition",
      tenantTypes: "National credit tenants with active expansion",
    },
    howItCompares:
      "BTS is fundamentally different from buying existing NNN — you're developing the asset from dirt. Higher return potential (20-35% IRR vs. 6-7% for passive NNN), but also higher risk and capital requirements. The exit is usually an absolute NNN or ground lease sold to a 1031/passive buyer.",
    investorPerspective:
      "BTS development is the most profitable way to create NNN real estate — but it's an active business, not a passive investment. Investors who want exposure without running projects can partner with a developer as an LP, typically earning 10-15% IRRs with the developer earning promote above a preferred return.",
  },
  {
    slug: "modified-gross-lease",
    name: "Modified Gross Lease",
    shortName: "Modified Gross",
    tagline: "The hybrid lease — landlord and tenant split expenses",
    metaDescription:
      "Modified gross lease — hybrid commercial lease where tenant and landlord split operating expenses. Common in multi-tenant office buildings. Structure, examples, negotiation tips.",
    definition:
      "A Modified Gross Lease falls between full-service (landlord pays everything) and NNN (tenant pays everything). The tenant pays a base rent plus specific operating expenses, with landlord covering others. The exact split varies — some common structures: tenant pays utilities and janitorial; landlord pays taxes, insurance, structure, common areas. Modified gross is common in multi-tenant office buildings and some multi-tenant retail.",
    whoPays: [
      { label: "Property Taxes", tenant: false, landlord: true },
      { label: "Insurance (Structure)", tenant: false, landlord: true },
      { label: "Utilities (Tenant Space)", tenant: true, landlord: false },
      { label: "Janitorial", tenant: true, landlord: false },
      { label: "Common Area Maintenance", tenant: false, landlord: true },
      { label: "Structural Repairs", tenant: false, landlord: true },
      { label: "Interior Repairs", tenant: true, landlord: false },
      { label: "HVAC (Tenant Space)", tenant: true, landlord: false },
    ],
    pros: [
      "Simplifies tenant expense budgeting",
      "Common and well-understood in office markets",
      "Base year escalations cap tenant exposure",
      "Good fit for multi-tenant buildings",
    ],
    cons: [
      "Landlord absorbs expense increases above base year",
      "More operational involvement required",
      "Complex CAM reconciliations",
      "Valuation harder than NNN (variable NOI)",
    ],
    typicalUseCases: [
      "Class A/B office buildings",
      "Multi-tenant retail centers",
      "Medical office buildings",
      "Flex/industrial with office component",
    ],
    typicalTerms: {
      term: "3-10 years initial + options",
      rentBumps: "3% annually or CPI adjustments",
      capRate: "6.5% - 8.5% typical for Class B/C office",
      tenantTypes: "Professional services, medical, office users",
    },
    howItCompares:
      "Modified gross gives landlord less operational exposure than full-service but more than NNN. The exact structure varies — always read specific lease provisions. Base year provisions (tenant pays increases over base year expenses) are common.",
    investorPerspective:
      "Modified gross leases require more active management than NNN but can generate strong returns in well-run multi-tenant properties. Best for investors who want value-add upside through operational improvements and rent growth.",
  },
  {
    slug: "full-service-gross-lease",
    name: "Full-Service Gross Lease",
    shortName: "Full-Service Gross",
    tagline: "Tenant pays one rent — landlord covers all expenses",
    metaDescription:
      "Full-service gross lease — commercial lease where landlord pays all operating expenses. Common in Class A office. Structure, comparison to NNN, landlord vs tenant perspectives.",
    definition:
      "A Full-Service Gross (FSG) lease is structured so the tenant pays one all-inclusive rent, with the landlord covering all property expenses (taxes, insurance, utilities, janitorial, common area maintenance). The landlord prices the rent to cover projected expenses plus profit. Most common in Class A office buildings where tenants prefer predictable costs and landlord manages professionally.",
    whoPays: [
      { label: "Property Taxes", tenant: false, landlord: true },
      { label: "Building Insurance", tenant: false, landlord: true },
      { label: "All Utilities", tenant: false, landlord: true },
      { label: "Janitorial", tenant: false, landlord: true },
      { label: "Common Area Maintenance", tenant: false, landlord: true },
      { label: "Structural Repairs", tenant: false, landlord: true },
      { label: "HVAC", tenant: false, landlord: true },
      { label: "Interior Repairs", tenant: false, landlord: true },
    ],
    pros: [
      "Simple for tenants (one rent payment, no surprises)",
      "Attractive for tenant retention",
      "Landlord controls quality standards",
      "Common in institutional-quality office",
    ],
    cons: [
      "Landlord absorbs ALL expense increases",
      "Highest active management requirement",
      "Base year escalations often capped",
      "Requires skilled property management",
      "NOI volatility with utility/insurance costs",
    ],
    typicalUseCases: [
      "Class A downtown office towers",
      "Institutional-grade suburban office",
      "Some luxury multi-tenant retail",
      "Flex space with shared amenities",
    ],
    typicalTerms: {
      term: "3-10 years + options",
      rentBumps: "CPI-linked or fixed 3% annual",
      capRate: "6.0% - 8.0% for Class A office",
      tenantTypes: "Law firms, financial services, corporate tenants",
    },
    howItCompares:
      "Full-service gross is the opposite end of the spectrum from absolute NNN. Highest operational exposure for landlord, simplest for tenant. Most commonly used in Class A office buildings and some specialty properties.",
    investorPerspective:
      "Full-service gross buildings require active management and operational expertise. Not a passive investment. Investors who buy FSG properties typically have in-house management or partner with experienced operators. Return potential depends heavily on expense management and occupancy.",
  },
  {
    slug: "percentage-rent-lease",
    name: "Percentage Rent Lease",
    shortName: "Percentage Rent",
    tagline: "Base rent plus a percentage of tenant sales above a threshold",
    metaDescription:
      "Percentage rent lease — commercial lease where tenant pays base rent plus a percentage of gross sales. Common in anchor retail and shopping centers.",
    definition:
      "A Percentage Rent Lease combines a fixed base rent with an additional percentage of the tenant's gross sales above a defined breakpoint. Common in regional malls, anchor retail, and some shopping centers. The structure aligns landlord and tenant incentives — both benefit when sales grow. Typically layered on top of an NNN or modified gross structure.",
    whoPays: [
      { label: "Base Rent", tenant: true, landlord: false },
      { label: "Percentage of Sales Over Threshold", tenant: true, landlord: false },
      { label: "Property Taxes (typically NNN)", tenant: true, landlord: false },
      { label: "Insurance (typically NNN)", tenant: true, landlord: false },
      { label: "Maintenance (typically NNN)", tenant: true, landlord: false },
      { label: "CAM Charges", tenant: true, landlord: false },
    ],
    pros: [
      "Inflation-protected via revenue-linked rent growth",
      "Aligns landlord/tenant incentives",
      "Meaningful upside in high-performing locations",
      "Historical structure well-understood in retail",
    ],
    cons: [
      "Requires tenant sales reporting and audits",
      "Rent volatility tied to retail performance",
      "Complex to administer vs. flat rent",
      "Tenants may under-report sales (requires audits)",
    ],
    typicalUseCases: [
      "Regional mall anchor tenants",
      "Big-box retail (Target, Walmart)",
      "Food court operators",
      "Entertainment venues (movie theaters)",
    ],
    typicalTerms: {
      term: "10-20 years with options",
      rentBumps: "Base rent + percentage of sales over breakpoint (typically 5-8% of gross above $X)",
      capRate: "Varies by property type and location",
      tenantTypes: "Traditional retail, entertainment, mall tenants",
    },
    howItCompares:
      "Percentage rent is less common today outside of enclosed malls and anchor tenants. Most single-tenant NNN leases use flat rent with fixed escalations rather than percentage rent. However, the structure remains valuable in retail centers with strong anchor tenants.",
    investorPerspective:
      "Percentage rent can provide inflation hedge and upside participation, but administration is complex. Best for investors with property management infrastructure. Track tenant sales carefully — percentage rent has legal cost (audit provisions) if under-reporting is suspected.",
  },
];

export function getLeaseType(slug: string): LeaseType | undefined {
  return leaseTypes.find((l) => l.slug === slug);
}
