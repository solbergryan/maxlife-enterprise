export interface Lender {
  name: string;
  slug: string;
  type: LenderType;
  description: string;
  loanTypes: string[];
  minLoan?: string;
  maxLoan?: string;
  markets: string[];
  website: string;
  /** true = national/regional institution, false = local/specialty */
  national: boolean;
  highlight?: string;
}

export type LenderType =
  | "Bank"
  | "Credit Union"
  | "CMBS"
  | "Life Company"
  | "SBA Lender"
  | "Debt Fund"
  | "Agency"
  | "Hard Money"
  | "Portfolio Lender";

export const LENDER_TYPE_COLORS: Record<LenderType, string> = {
  Bank: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  "Credit Union": "border-teal-500/40 bg-teal-500/10 text-teal-400",
  CMBS: "border-violet-500/40 bg-violet-500/10 text-violet-400",
  "Life Company": "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  "SBA Lender": "border-amber-500/40 bg-amber-500/10 text-amber-400",
  "Debt Fund": "border-rose-500/40 bg-rose-500/10 text-rose-400",
  Agency: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
  "Hard Money": "border-orange-500/40 bg-orange-500/10 text-orange-400",
  "Portfolio Lender": "border-indigo-500/40 bg-indigo-500/10 text-indigo-400",
};

export const lenders: Lender[] = [
  // ── National / Regional Banks ──
  {
    name: "JPMorgan Chase",
    slug: "jpmorgan-chase",
    type: "Bank",
    description:
      "One of the largest commercial real estate lenders in the U.S. with strong Florida presence. Full-service CRE lending for stabilized and transitional assets.",
    loanTypes: ["Permanent", "Construction", "Bridge", "Line of Credit"],
    minLoan: "$1M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.jpmorgan.com/commercial-banking/solutions/commercial-real-estate",
    national: true,
    highlight: "Largest U.S. CRE lender by volume",
  },
  {
    name: "Wells Fargo",
    slug: "wells-fargo",
    type: "Bank",
    description:
      "Major CRE lender offering permanent financing, construction loans, and CMBS execution. Deep Florida market knowledge with dedicated Southeast CRE teams.",
    loanTypes: ["Permanent", "Construction", "CMBS", "Bridge"],
    minLoan: "$2M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.wellsfargo.com/com/real-estate/",
    national: true,
  },
  {
    name: "Bank of America",
    slug: "bank-of-america",
    type: "Bank",
    description:
      "Full-spectrum CRE lending including balance sheet loans, agency executions, and CMBS. Strong multifamily and industrial programs across Florida.",
    loanTypes: ["Permanent", "Construction", "Bridge", "Agency"],
    minLoan: "$2M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://business.bofa.com/en-us/content/commercial-real-estate-banking.html",
    national: true,
  },
  {
    name: "Regions Bank",
    slug: "regions-bank",
    type: "Bank",
    description:
      "Southeast-focused bank with deep Florida CRE expertise. Portfolio lender that holds loans on balance sheet — more flexibility on deal structure and borrower profile.",
    loanTypes: ["Permanent", "Construction", "Bridge", "Line of Credit"],
    minLoan: "$500K",
    maxLoan: "$75M",
    markets: ["Southeast", "Florida", "Orlando"],
    website: "https://www.regions.com/commercial-banking/commercial-real-estate",
    national: false,
    highlight: "Southeast specialist — flexible balance sheet lender",
  },
  {
    name: "Truist Bank",
    slug: "truist-bank",
    type: "Bank",
    description:
      "Major Southeast regional bank formed from BB&T and SunTrust merger. Active CRE lender across all property types with strong Orlando market presence.",
    loanTypes: ["Permanent", "Construction", "Bridge", "Line of Credit"],
    minLoan: "$1M",
    maxLoan: "$200M",
    markets: ["Southeast", "Florida", "Orlando"],
    website: "https://www.truist.com/commercial-corporate-institutional/commercial-real-estate",
    national: false,
    highlight: "Largest Southeast-headquartered bank",
  },
  {
    name: "Centennial Bank",
    slug: "centennial-bank",
    type: "Bank",
    description:
      "Community bank with aggressive CRE lending in Central Florida. Known for faster closings and more flexible terms than national banks on smaller deals.",
    loanTypes: ["Permanent", "Construction", "Land", "Line of Credit"],
    minLoan: "$250K",
    maxLoan: "$25M",
    markets: ["Florida", "Orlando", "Central Florida"],
    website: "https://www.my100bank.com/commercial-lending",
    national: false,
    highlight: "Local community bank — fast closings",
  },
  {
    name: "Valley National Bank",
    slug: "valley-national-bank",
    type: "Bank",
    description:
      "Active Florida CRE lender after expanding into the state. Competitive rates on owner-occupied and investment commercial properties.",
    loanTypes: ["Permanent", "Construction", "SBA 504", "Line of Credit"],
    minLoan: "$500K",
    maxLoan: "$50M",
    markets: ["Florida", "Orlando", "Central Florida"],
    website: "https://www.valley.com/commercial/commercial-real-estate/",
    national: false,
  },
  {
    name: "Seacoast Bank",
    slug: "seacoast-bank",
    type: "Bank",
    description:
      "Florida-only commercial bank with deep local market knowledge. Portfolio lender offering flexible CRE terms for Florida-based investors.",
    loanTypes: ["Permanent", "Construction", "Land", "Line of Credit"],
    minLoan: "$250K",
    maxLoan: "$30M",
    markets: ["Florida", "Central Florida", "Space Coast"],
    website: "https://www.seacoastbanking.com/business/lending/commercial-real-estate/",
    national: false,
    highlight: "Florida-only bank — true local expertise",
  },

  // ── Credit Unions ──
  {
    name: "Addition Financial Credit Union",
    slug: "addition-financial",
    type: "Credit Union",
    description:
      "Orlando-based credit union offering competitive commercial real estate loans. Lower fees and member-focused terms for Central Florida investors.",
    loanTypes: ["Permanent", "Construction", "Land"],
    minLoan: "$100K",
    maxLoan: "$10M",
    markets: ["Orlando", "Central Florida"],
    website: "https://www.additionfi.com/business/business-loans/commercial-real-estate-loans/",
    national: false,
    highlight: "Orlando-headquartered — member rates",
  },
  {
    name: "Fairwinds Credit Union",
    slug: "fairwinds-credit-union",
    type: "Credit Union",
    description:
      "Central Florida credit union with commercial lending capabilities. Competitive rates and personalized service for local CRE investors.",
    loanTypes: ["Permanent", "Construction", "Line of Credit"],
    minLoan: "$100K",
    maxLoan: "$10M",
    markets: ["Orlando", "Central Florida"],
    website: "https://www.fairwinds.org/business/loans-credit/commercial-real-estate.html",
    national: false,
  },

  // ── Agency Lenders (Fannie/Freddie) ──
  {
    name: "Berkadia",
    slug: "berkadia",
    type: "Agency",
    description:
      "Top Fannie Mae and Freddie Mac multifamily lender. Industry-leading agency execution with competitive rates and high-leverage options for apartment investors.",
    loanTypes: ["Agency (Fannie/Freddie)", "FHA/HUD", "Bridge", "Mezzanine"],
    minLoan: "$1M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.berkadia.com/what-we-do/mortgage-banking/",
    national: true,
    highlight: "Top agency lender — best-in-class multifamily rates",
  },
  {
    name: "Walker & Dunlop",
    slug: "walker-dunlop",
    type: "Agency",
    description:
      "Major Fannie Mae DUS lender and Freddie Mac Optigo seller/servicer. Specializes in multifamily and affordable housing financing across Florida.",
    loanTypes: ["Agency (Fannie/Freddie)", "FHA/HUD", "Bridge", "CMBS"],
    minLoan: "$1M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.walkerdunlop.com/",
    national: true,
  },
  {
    name: "Newmark",
    slug: "newmark",
    type: "Agency",
    description:
      "Full-service real estate capital markets firm offering agency lending, CMBS, and debt/equity placement for all property types.",
    loanTypes: ["Agency (Fannie/Freddie)", "CMBS", "Bridge", "Mezzanine"],
    minLoan: "$5M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.nmrk.com/services/capital-markets/debt-structured-finance",
    national: true,
  },

  // ── Life Companies ──
  {
    name: "MetLife Investment Management",
    slug: "metlife",
    type: "Life Company",
    description:
      "One of the largest life company CRE lenders. Offers long-term, fixed-rate permanent financing with low leverage for stabilized assets. Known for the lowest rates in CRE.",
    loanTypes: ["Permanent (Fixed)", "Construction-to-Perm"],
    minLoan: "$5M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://investments.metlife.com/investment-capabilities/real-estate-debt/",
    national: true,
    highlight: "Lowest rates in CRE — long-term fixed",
  },
  {
    name: "New York Life Real Estate Investors",
    slug: "new-york-life",
    type: "Life Company",
    description:
      "Conservative life company lender offering 10–30 year fixed-rate terms on stabilized commercial properties. Very competitive pricing for low-leverage deals.",
    loanTypes: ["Permanent (Fixed)", "Construction-to-Perm"],
    minLoan: "$5M",
    maxLoan: "$300M",
    markets: ["National", "Florida"],
    website: "https://www.newyorklife.com/assets/realestateinvestors/pages/landing/index.html",
    national: true,
  },
  {
    name: "Principal Real Estate",
    slug: "principal",
    type: "Life Company",
    description:
      "Major life company providing long-term fixed-rate mortgages on stabilized CRE assets. Active in Florida multifamily, industrial, and retail.",
    loanTypes: ["Permanent (Fixed)", "Construction-to-Perm"],
    minLoan: "$3M",
    maxLoan: "$200M",
    markets: ["National", "Florida"],
    website: "https://www.principalam.com/investment-options/real-estate",
    national: true,
  },

  // ── CMBS ──
  {
    name: "J.P. Morgan Securities (CMBS)",
    slug: "jpmorgan-cmbs",
    type: "CMBS",
    description:
      "Leading CMBS conduit lender offering non-recourse, fixed-rate financing. Ideal for stabilized commercial properties where borrowers want no personal guarantee.",
    loanTypes: ["CMBS (Conduit)", "Single-Asset Single-Borrower"],
    minLoan: "$2M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.jpmorgan.com/commercial-banking/solutions/commercial-real-estate",
    national: true,
    highlight: "Non-recourse fixed-rate — no personal guarantee",
  },
  {
    name: "Goldman Sachs",
    slug: "goldman-sachs-cmbs",
    type: "CMBS",
    description:
      "Major CMBS originator for large, stabilized commercial properties. Competitive pricing for institutional-quality assets across Florida.",
    loanTypes: ["CMBS (Conduit)", "Single-Asset Single-Borrower", "Bridge"],
    minLoan: "$5M",
    maxLoan: "$500M+",
    markets: ["National", "Florida"],
    website: "https://www.goldmansachs.com/what-we-do/asset-management/real-estate/",
    national: true,
  },

  // ── SBA Lenders ──
  {
    name: "Live Oak Bank",
    slug: "live-oak-bank",
    type: "SBA Lender",
    description:
      "Top SBA 7(a) and 504 lender in the U.S. Specializes in owner-occupied commercial real estate with up to 90% financing and 25-year terms.",
    loanTypes: ["SBA 7(a)", "SBA 504", "USDA"],
    minLoan: "$100K",
    maxLoan: "$5M",
    markets: ["National", "Florida"],
    website: "https://www.liveoakbank.com/",
    national: true,
    highlight: "#1 SBA lender — up to 90% LTV",
  },
  {
    name: "Stearns Bank",
    slug: "stearns-bank",
    type: "SBA Lender",
    description:
      "Preferred SBA lender with fast closings for owner-occupied commercial properties. Strong Florida track record for retail, office, and special-purpose properties.",
    loanTypes: ["SBA 504", "SBA 7(a)", "Conventional"],
    minLoan: "$250K",
    maxLoan: "$5M",
    markets: ["National", "Florida"],
    website: "https://www.stearnsbank.com/sba-loans",
    national: true,
  },
  {
    name: "Ameris Bank",
    slug: "ameris-bank",
    type: "SBA Lender",
    description:
      "Southeast-based bank and active SBA lender. Provides SBA 504 and 7(a) loans for owner-occupied commercial properties across Florida.",
    loanTypes: ["SBA 504", "SBA 7(a)", "Conventional", "Construction"],
    minLoan: "$250K",
    maxLoan: "$15M",
    markets: ["Southeast", "Florida"],
    website: "https://www.amerisbank.com/business/lending/sba-lending",
    national: false,
  },

  // ── Debt Funds ──
  {
    name: "Blackstone Mortgage Trust",
    slug: "blackstone-mortgage",
    type: "Debt Fund",
    description:
      "Largest CRE debt fund globally. Provides transitional floating-rate loans for repositioning, lease-up, and value-add strategies on institutional assets.",
    loanTypes: ["Bridge", "Transitional", "Mezzanine"],
    minLoan: "$25M",
    maxLoan: "$1B+",
    markets: ["National", "Florida"],
    website: "https://www.bfreit.com/",
    national: true,
    highlight: "Largest CRE debt fund — transitional capital",
  },
  {
    name: "Arbor Realty Trust",
    slug: "arbor-realty",
    type: "Debt Fund",
    description:
      "Diversified CRE finance company offering bridge loans, agency lending, and mezzanine financing. Active in Florida multifamily and commercial.",
    loanTypes: ["Bridge", "Agency (Fannie/Freddie)", "Mezzanine", "Preferred Equity"],
    minLoan: "$1M",
    maxLoan: "$200M",
    markets: ["National", "Florida"],
    website: "https://www.arbor.com/",
    national: true,
  },
  {
    name: "Ready Capital",
    slug: "ready-capital",
    type: "Debt Fund",
    description:
      "Commercial real estate finance company providing small-balance to mid-market CRE loans. Specializes in bridge, construction, and SBA lending.",
    loanTypes: ["Bridge", "SBA 7(a)", "SBA 504", "Construction", "CMBS"],
    minLoan: "$1M",
    maxLoan: "$100M",
    markets: ["National", "Florida"],
    website: "https://readycapital.com/",
    national: true,
  },

  // ── Hard Money / Private ──
  {
    name: "Lima One Capital",
    slug: "lima-one",
    type: "Hard Money",
    description:
      "Private CRE lender specializing in fix-and-flip, rental, and new construction loans. Fast closings (as few as 10 days) for investors who need speed over rate.",
    loanTypes: ["Fix & Flip", "Rental (DSCR)", "New Construction", "Bridge"],
    minLoan: "$75K",
    maxLoan: "$20M",
    markets: ["National", "Florida"],
    website: "https://www.limaone.com/",
    national: true,
    highlight: "Close in 10 days — asset-based lending",
  },
  {
    name: "Kiavi (f/k/a LendingHome)",
    slug: "kiavi",
    type: "Hard Money",
    description:
      "Tech-enabled private lender for real estate investors. Streamlined online process for bridge and rental loans on investment properties.",
    loanTypes: ["Fix & Flip", "Rental (DSCR)", "Bridge"],
    minLoan: "$100K",
    maxLoan: "$3M",
    markets: ["National", "Florida"],
    website: "https://www.kiavi.com/",
    national: true,
  },
  {
    name: "RCN Capital",
    slug: "rcn-capital",
    type: "Hard Money",
    description:
      "National private lender offering fix-and-flip, long-term rental, and bridge financing for CRE investors. Competitive rates in the private lending space.",
    loanTypes: ["Fix & Flip", "Rental (DSCR)", "Bridge"],
    minLoan: "$50K",
    maxLoan: "$7.5M",
    markets: ["National", "Florida"],
    website: "https://www.rcncapital.com/",
    national: true,
  },

  // ── Portfolio Lenders ──
  {
    name: "CIT (a division of First Citizens Bank)",
    slug: "cit-first-citizens",
    type: "Portfolio Lender",
    description:
      "Mid-market portfolio lender offering customized CRE financing. Holds loans on balance sheet providing more flexibility on deal structure.",
    loanTypes: ["Permanent", "Bridge", "Construction", "Line of Credit"],
    minLoan: "$5M",
    maxLoan: "$200M",
    markets: ["National", "Florida"],
    website: "https://www.firstcitizens.com/commercial/industry-expertise/commercial-real-estate",
    national: true,
  },
  {
    name: "Pacific Western Bank (Banc of California)",
    slug: "pacific-western",
    type: "Portfolio Lender",
    description:
      "Portfolio lender providing customized CRE loans with flexible terms. Active in value-add and transitional commercial real estate deals.",
    loanTypes: ["Permanent", "Bridge", "Construction"],
    minLoan: "$5M",
    maxLoan: "$150M",
    markets: ["National", "Florida"],
    website: "https://www.bancofcal.com/commercial-real-estate",
    national: true,
  },
];

export const LENDER_TYPES: LenderType[] = [
  "Bank",
  "Credit Union",
  "Agency",
  "Life Company",
  "CMBS",
  "SBA Lender",
  "Debt Fund",
  "Hard Money",
  "Portfolio Lender",
];
