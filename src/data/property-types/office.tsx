import type { PropertyTypeEntry } from "./types";

const officePersonas = [
  {
    name: "Owner-Occupiers",
    tag: "User-Buyers",
    description:
      "Professional service firms buying their own space to lock in occupancy costs and build equity.",
    fit: "Office condos and small Class B buildings are ideal for 10+ year user-owners.",
  },
  {
    name: "Value-Add Sponsors",
    tag: "Reposition Plays",
    description:
      "Sponsors buying distressed or dated office and repositioning through capital improvements and re-tenanting.",
    fit: "Class B/C Florida office has meaningful basis dislocation — great for operators who can execute.",
  },
  {
    name: "Medical Practice Groups",
    tag: "Healthcare Specialists",
    description:
      "Growing medical and dental practice groups buying or building specialty medical office space.",
    fit: "Medical office is the strongest office subcategory in Florida with investment-grade demand.",
  },
  {
    name: "Family Offices",
    tag: "Core-Plus",
    description:
      "Allocators with long hold horizons willing to invest in stabilized office at wider cap rates.",
    fit: "Well-located Class A with credit tenants offers durable cash flow and basis protection.",
  },
];

const officeListingSites = [
  {
    name: "Crexi",
    tag: "Tech-forward CRE marketplace",
    description: "Growing inventory of Florida office listings with detailed financials.",
    floridaUrl: "https://www.crexi.com/properties/FL/Office",
    orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Office",
    allUrl: "https://www.crexi.com/properties/Office",
  },
  {
    name: "LoopNet",
    tag: "Largest CRE listings network",
    description: "The biggest pool of office listings in Florida.",
    floridaUrl: "https://www.loopnet.com/search/office-property/fl/for-sale/",
    orlandoUrl: "https://www.loopnet.com/search/office-property/orlando-fl/for-sale/",
    allUrl: "https://www.loopnet.com/search/office-property/usa/for-sale/",
  },
  {
    name: "CBRE Deal Flow",
    tag: "Institutional broker platform",
    description: "Institutional office opportunities across Florida.",
    floridaUrl: "https://www.cbre.com/properties/for-sale/florida/office",
    orlandoUrl: "https://www.cbre.com/properties/for-sale/florida/office",
    allUrl: "https://www.cbre.com/properties/for-sale/office",
  },
];

const officeTopLevel: PropertyTypeEntry = {
  slug: "office",
  meta: {
    title: "Office Properties for Sale in Florida | Orlando & Central Florida Office",
    description:
      "Buy office properties in Florida. Class A, Class B, medical office, creative office, and office condos across Orlando and Central Florida.",
    keywords:
      "office for sale florida, orlando office building, class a office, medical office florida",
  },
  page: {
    displayName: "Office",
    pluralDisplayName: "Office Properties",
    heroEyebrow: "Office Investment Opportunities",
    heroHeadline: "Office Properties for Sale in Florida",
    heroSubheadline:
      "Class A towers, Class B value-add, medical office, and user-owner office condos",
    heroBody:
      "Office is the most contested commercial real estate category in post-COVID America — and that dislocation is exactly why experienced Florida investors are leaning in. Florida office fundamentals have diverged sharply from coastal gateway markets: Tampa, Orlando, Jacksonville, and Miami have seen positive net absorption, corporate HQ migration, and a back-to-office push from both private employers and state government. Cap rates range from 6.5% for stabilized Class A with credit tenants to 9%+ for value-add Class B/C.",
    quickStats: [
      {
        label: "Typical Deal Size",
        value: "$1M – $100M",
        detail: "Office condos through institutional Class A",
      },
      {
        label: "Common Cap Rate",
        value: "6.5% – 9.0%+",
        detail: "Stabilized A to value-add B/C",
      },
      {
        label: "Market Rent PSF",
        value: "$22 – $48 PSF",
        detail: "Full-service rent depending on class",
      },
    ],
    formats: [
      {
        name: "Class A Office",
        capRate: "6.50% – 7.75%",
        footprint: "100k – 500k+ SF",
        note: "Trophy institutional-quality buildings with credit tenants. Tightest office cap rates.",
      },
      {
        name: "Class B / Value-Add",
        capRate: "8.00% – 10.0%+",
        footprint: "30k – 200k SF",
        note: "Older buildings with reposition potential. Highest IRR for operators who can execute.",
      },
      {
        name: "Medical Office Building (MOB)",
        capRate: "6.00% – 7.50%",
        footprint: "20k – 150k SF",
        note: "Strongest office subcategory. Sticky tenants, specialty build-out, investment-grade demand.",
      },
      {
        name: "Office Condo",
        capRate: "N/A (user-buyer market)",
        footprint: "1,500 – 8,000 SF",
        note: "User-owner product. Practices buy their own suite to control occupancy and build equity.",
      },
      {
        name: "Creative / Loft Office",
        capRate: "7.00% – 8.50%",
        footprint: "15k – 60k SF",
        note: "Converted warehouse and loft space. Appeals to tech, creative, and startup tenants.",
      },
      {
        name: "Suburban Office Park",
        capRate: "7.50% – 9.00%",
        footprint: "200k – 1M+ SF",
        note: "Multi-building campuses in suburban Florida. Wider caps reflect category pressure.",
      },
    ],
    prosConsIntro:
      "Office is the most dislocated CRE asset class in America — dangerous for the uninformed, opportunity-rich for the informed. Here's the honest picture.",
    pros: [
      {
        title: "Basis Dislocation Opportunity",
        description:
          "Class B/C Florida office is trading at 40–60% discounts to replacement cost. Generational basis for patient operators.",
      },
      {
        title: "Florida Office Outperformance",
        description:
          "Florida office markets have seen positive absorption and rent growth while coastal gateway cities struggle.",
      },
      {
        title: "Medical Office Stability",
        description:
          "MOB has held up through every downturn. Specialty build-out, sticky tenants, and healthcare demand growth.",
      },
      {
        title: "Owner-Occupier Demand",
        description:
          "Office condos are in steady demand from professional services firms locking in occupancy costs.",
      },
      {
        title: "Long Leases on Renewal",
        description:
          "When stabilized office renews, it tends to renew for 5–10+ year terms — durable once you're past rollover.",
      },
    ],
    cons: [
      {
        title: "Remote Work Headwinds",
        description:
          "Hybrid work has permanently reduced office demand in many submarkets. Underwrite physical occupancy carefully.",
      },
      {
        title: "CapEx Intensive",
        description:
          "Office requires heavy TI ($50–$150 PSF) and leasing commissions on every renewal. Model cash flow conservatively.",
      },
      {
        title: "Financing Is Difficult",
        description:
          "Lenders are extremely cautious on office. Expect higher rates, lower LTVs, and more scrutiny than other asset classes.",
      },
      {
        title: "Rollover Risk",
        description:
          "Tenant rollover in a weak leasing environment can crater NOI. Always ladder expirations.",
      },
      {
        title: "Exit Cap Expansion",
        description:
          "Underwrite meaningful exit cap expansion — 50–100 bps over entry is conservative in current environment.",
      },
    ],
    personas: officePersonas,
    underwritingIntro:
      "Office underwriting has gotten much more rigorous post-2022. Stress-test everything.",
    underwritingMetrics: [
      { label: "Rent PSF (Full-Service)", detail: "$22 – $48 PSF depending on class and submarket" },
      { label: "TI Allowance", detail: "$40 – $100+ PSF for new tenants; $15 – $40 PSF renewals" },
      { label: "Leasing Commissions", detail: "4–6% of lease value new; 2–3% renewals" },
      { label: "Operating Expenses", detail: "$10 – $16 PSF for Florida suburban office" },
      { label: "Physical Occupancy", detail: "Underwrite to actual physical occupancy, not leased rate" },
      { label: "Parking Ratio", detail: "4 – 5 spaces per 1,000 SF for suburban Florida office" },
    ],
    analyzerTitle: (
      <>
        Sample Office Value-Add Deal{" "}
        <span className="text-gold">Pre-Loaded</span>
      </>
    ),
    analyzerIntro:
      "A representative Orlando Class B office reposition deal — $8.5M purchase at a 9.0% going-in cap with stabilized yield north of 11%.",
    analyzerBadges: [
      { label: "Purchase: $8.5M", highlighted: true },
      { label: "Class B Value-Add" },
      { label: "NOI: $765K" },
      { label: "85,000 SF" },
      { label: "78% Occupied" },
    ],
    analyzerDealInputs: {
      assetType: "NNN",
      purchasePrice: "8500000",
      buildingSF: "85000",
      annualRent: "765000",
      rentGrowth: "3.0",
      vacancyRate: "22",
      downPaymentPct: "35",
      interestRate: "8.0",
      amortization: "25",
      closingCosts: "50000",
      loanOrigFee: "1.5",
      holdPeriod: "7",
      exitCapSpread: "1.00",
    },
    listingsIntro:
      "Want to see what's publicly listed? These marketplaces aggregate on-market Florida office opportunities.",
    listingSites: officeListingSites,
    listingsFootnote:
      "The best office deals — especially distressed basis plays — rarely hit these marketplaces.",
    faqIntro: "The questions we get most often from investors evaluating Florida office.",
    faqs: [
      {
        q: "Is Florida office different from the national office story?",
        a: "Yes. Florida office markets — Tampa, Orlando, Jacksonville, Miami — have seen positive net absorption and rent growth in 2023-2024 while coastal gateway markets (SF, NY, Chicago) have declined. Corporate HQ migration, no state income tax, and a return-to-office culture drive Florida's outperformance.",
      },
      {
        q: "What's medical office and why is it different?",
        a: "Medical Office Buildings (MOB) house physicians, dentists, imaging, and outpatient services. They trade at meaningfully tighter cap rates than traditional office because of sticky tenants (specialty build-out), demographic tailwinds from an aging population, and investment-grade health system tenancy.",
      },
      {
        q: "How do I underwrite office TI and leasing CapEx?",
        a: "Budget $50-$100 PSF for new tenant TI in Class A, $30–$60 PSF in Class B. Add 4–6% leasing commissions on new leases and 2–3% on renewals. Underwrite conservative assumptions — office leasing has gotten harder, not easier.",
      },
      {
        q: "Can I finance office deals today?",
        a: "Yes, but financing is materially harder than pre-2022. Expect 55–65% LTV on stabilized office, higher interest rates, and much more lender scrutiny. Class A in strong submarkets still gets done; Class B/C often requires creative structure like seller financing, bridge debt, or cash purchases.",
      },
    ],
    fitCheckIntro:
      'If you nod "yes" to three or more of these, Florida office has a place in your portfolio.',
    fitCheckQuestions: [
      "You believe Florida office fundamentals have decoupled from coastal gateway markets.",
      "You're comfortable with active leasing, TI, and value-add execution.",
      "You want to buy at generational basis dislocation versus replacement cost.",
      "You have patient capital and a 5–10 year hold horizon.",
      "You want exposure to medical office or owner-occupier office condo demand.",
    ],
    leadFormIntro:
      "Tell us about your office investment criteria and we will send you current Florida opportunities.",
  },
};

const base = officeTopLevel.page;

const traditionalOffice: PropertyTypeEntry = {
  slug: "traditional-office",
  parentSlug: "office",
  meta: {
    title: "Class A/B/C Office Buildings for Sale in Florida | Traditional Office",
    description: "Buy traditional office buildings in Florida. Class A trophy, Class B value-add, and Class C repositioning opportunities.",
    keywords: "class a office florida, class b office value add, traditional office orlando",
  },
  page: {
    ...base,
    displayName: "Traditional Office",
    pluralDisplayName: "Traditional Office Buildings",
    heroEyebrow: "Traditional Office Investments",
    heroHeadline: "Traditional Office Buildings in Florida",
    heroSubheadline: "Class A, Class B, and Class C office across Florida's strongest markets",
    heroBody:
      "Traditional office buildings remain the largest subcategory within Florida office — from trophy Class A glass towers in downtown Tampa and Orlando to workmanlike Class B suburban buildings trading at deep basis discounts. Cap rates range from 6.5% (Class A) to 9%+ (Class C value-add).",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $100M", detail: "Suburban Class B to trophy Class A" },
      { label: "Common Cap Rate", value: "6.5% – 9.0%+", detail: "Widely dispersed by class" },
      { label: "Market Rent", value: "$22 – $48 PSF", detail: "Full-service rent by submarket" },
    ],
  },
};

const medicalOffice: PropertyTypeEntry = {
  slug: "medical-office",
  parentSlug: "office",
  meta: {
    title: "Medical Office Buildings for Sale in Florida | MOB Investments",
    description: "Buy medical office buildings in Florida. MOB investments anchored by health systems, physician groups, and outpatient services.",
    keywords: "medical office florida, mob investment, healthcare real estate",
  },
  page: {
    ...base,
    displayName: "Medical Office",
    pluralDisplayName: "Medical Office Buildings",
    heroEyebrow: "Medical Office (MOB) Investments",
    heroHeadline: "Medical Office Buildings for Sale in Florida",
    heroSubheadline: "The strongest office subcategory — healthcare demographic tailwinds meet sticky tenants",
    heroBody:
      "Medical office buildings (MOB) are the strongest-performing office subcategory in America, and Florida sits at the epicenter of the demographic tailwind. An aging population, outpatient services migration away from hospitals, and investment-grade health system tenancy combine to give MOB the best risk-adjusted fundamentals in the office category. Cap rates run 6.0% – 7.5% for stabilized product.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $50M", detail: "Single-building MOB to on-campus medical" },
      { label: "Common Cap Rate", value: "6.00% – 7.50%", detail: "Tighter than traditional office" },
      { label: "Tenant Stickiness", value: "90%+ retention", detail: "Specialty build-out keeps tenants in place" },
    ],
    formats: [
      { name: "On-Campus MOB", capRate: "6.00% – 7.00%", footprint: "30k – 150k SF", note: "Located on or adjacent to a hospital campus. Tightest MOB cap rates." },
      { name: "Off-Campus MOB", capRate: "6.50% – 7.75%", footprint: "20k – 80k SF", note: "Standalone medical office in dense residential submarkets." },
      { name: "Ambulatory Surgery Center (ASC)", capRate: "6.25% – 7.25%", footprint: "15k – 40k SF", note: "Specialty outpatient surgical facility — premium tenant profile." },
      { name: "Medical Condo", capRate: "N/A (user-buyer)", footprint: "1,500 – 5,000 SF", note: "Single suites sold to individual practices." },
    ],
  },
};

const creativeOffice: PropertyTypeEntry = {
  slug: "creative-office",
  parentSlug: "office",
  meta: {
    title: "Creative Office & Loft Buildings for Sale in Florida",
    description: "Buy creative office and loft buildings in Florida. Converted warehouse office space for tech, creative, and startup tenants.",
    keywords: "creative office florida, loft office, converted warehouse office",
  },
  page: {
    ...base,
    displayName: "Creative Office",
    pluralDisplayName: "Creative Office & Loft Buildings",
    heroEyebrow: "Creative Office Investments",
    heroHeadline: "Creative & Loft Office in Florida",
    heroSubheadline: "Converted warehouse space for tech, creative, and startup tenants",
    heroBody:
      "Creative and loft office typically involves converting older warehouse or industrial buildings into open-plan office space with exposed brick, polished concrete, and tall ceilings. Appeals to tech, creative, startup, and design tenants who want character space that differentiates from Class A. Cap rates run 7.0% – 8.5% for stabilized creative office.",
    quickStats: [
      { label: "Typical Deal Size", value: "$3M – $25M", detail: "Converted industrial buildings" },
      { label: "Common Cap Rate", value: "7.00% – 8.50%", detail: "Premium to traditional Class B" },
      { label: "Rent PSF", value: "$28 – $45 PSF", detail: "Premium to traditional suburban office" },
    ],
  },
};

const coworking: PropertyTypeEntry = {
  slug: "coworking",
  parentSlug: "office",
  meta: {
    title: "Coworking & Executive Suites Properties for Sale in Florida",
    description: "Buy coworking and executive suites buildings in Florida. Flexible office properties with shared workspace operators.",
    keywords: "coworking florida, executive suites, flexible office",
  },
  page: {
    ...base,
    displayName: "Coworking / Executive Suites",
    pluralDisplayName: "Coworking & Executive Suites Properties",
    heroEyebrow: "Flexible Office Investments",
    heroHeadline: "Coworking & Executive Suites Buildings in Florida",
    heroSubheadline: "Flexible office real estate serving the remote-work economy",
    heroBody:
      "Coworking and executive suites are the flexible-office subcategory that has benefited from post-COVID remote and hybrid work. The real estate itself trades as Class B/C office but with an operator-run flexible workspace layer on top. Evaluated on the sustainability of the operator's membership revenue model as much as the building fundamentals.",
    quickStats: [
      { label: "Typical Deal Size", value: "$2M – $20M", detail: "Single-building flex office" },
      { label: "Common Cap Rate", value: "7.50% – 9.00%", detail: "Operator risk factored in" },
      { label: "Tenant Type", value: "Operator-run", detail: "Evaluated like hospitality" },
    ],
  },
};

const professionalDental: PropertyTypeEntry = {
  slug: "professional-dental",
  parentSlug: "office",
  meta: {
    title: "Professional & Dental Office Properties for Sale in Florida",
    description: "Buy professional and dental office properties in Florida. Small practice-sized office buildings for lawyers, accountants, and dentists.",
    keywords: "dental office florida, professional office, practice office",
  },
  page: {
    ...base,
    displayName: "Professional / Dental",
    pluralDisplayName: "Professional & Dental Office Properties",
    heroEyebrow: "Professional Practice Office",
    heroHeadline: "Professional & Dental Office in Florida",
    heroSubheadline: "Small practice-sized office buildings for service professionals",
    heroBody:
      "Small professional office buildings (2,500 – 10,000 SF) serving dentists, attorneys, accountants, and financial advisors represent one of the most transactionally active subcategories in Florida office. Most trade to owner-occupier buyers — practices buying their own space to lock in occupancy costs and build equity on fully amortizing SBA loans.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $3M", detail: "Small professional office" },
      { label: "Buyer Profile", value: "Owner-occupier", detail: "Most trade to user-buyers on SBA loans" },
      { label: "Build-Out", value: "Practice-specific", detail: "Dental and medical have specialty TI" },
    ],
  },
};

const officeCondo: PropertyTypeEntry = {
  slug: "office-condo",
  parentSlug: "office",
  meta: {
    title: "Office Condos for Sale in Florida | Owner-Occupier Office Suites",
    description: "Buy office condos in Florida. Single-suite office condos for professional service firms and practice groups.",
    keywords: "office condo florida, office suite for sale, owner occupier office",
  },
  page: {
    ...base,
    displayName: "Office Condo",
    pluralDisplayName: "Office Condos",
    heroEyebrow: "Office Condo Investments",
    heroHeadline: "Office Condos for Sale in Florida",
    heroSubheadline: "Single-suite office condos for owner-occupier buyers",
    heroBody:
      "Office condos let service businesses — attorneys, accountants, insurance agencies, medical practices — own their own office suite instead of renting. Typically 1,500 – 8,000 SF individual suites within a common-area condominium structure. Most office condos trade to owner-occupiers on SBA 504 or 7(a) loans, not to investors.",
    quickStats: [
      { label: "Typical Unit Size", value: "1,500 – 8,000 SF", detail: "Single-practice office suite" },
      { label: "Typical Price", value: "$250K – $2M", detail: "Depending on size and finish" },
      { label: "Buyer Profile", value: "Owner-occupier", detail: "SBA financing standard" },
    ],
  },
};

const governmentOffice: PropertyTypeEntry = {
  slug: "government-office",
  parentSlug: "office",
  meta: {
    title: "Government Office Buildings for Sale in Florida | GSA-Leased Office",
    description: "Buy government-leased office buildings in Florida. GSA, state, and county-leased office with long-term government tenants.",
    keywords: "government office florida, gsa leased, state office building",
  },
  page: {
    ...base,
    displayName: "Government Office",
    pluralDisplayName: "Government Office Buildings",
    heroEyebrow: "Government-Leased Office",
    heroHeadline: "Government Office Buildings in Florida",
    heroSubheadline: "GSA, state, and county-leased office with credit government tenants",
    heroBody:
      "Government-leased office buildings house federal GSA, state, county, and municipal tenants on long-term leases backed by the full faith and credit of the issuing government entity. The sub-category trades at tighter cap rates than comparable Class B office thanks to tenant credit quality — though GSA leases often carry termination-for-convenience clauses that require careful underwriting.",
    quickStats: [
      { label: "Typical Deal Size", value: "$4M – $40M", detail: "Single-tenant government-leased" },
      { label: "Common Cap Rate", value: "7.00% – 8.50%", detail: "Government credit tenancy" },
      { label: "Lease Term", value: "10 – 20 years", detail: "With termination clauses to watch" },
    ],
  },
};

const officeCampus: PropertyTypeEntry = {
  slug: "office-campus",
  parentSlug: "office",
  meta: {
    title: "Office Campus Properties for Sale in Florida | Multi-Building Office",
    description: "Buy office campus properties in Florida. Multi-building corporate campuses and office parks with institutional scale.",
    keywords: "office campus florida, office park, corporate campus real estate",
  },
  page: {
    ...base,
    displayName: "Office Campus",
    pluralDisplayName: "Office Campus Properties",
    heroEyebrow: "Multi-Building Office Investments",
    heroHeadline: "Office Campus Properties in Florida",
    heroSubheadline: "Multi-building corporate campuses and suburban office parks",
    heroBody:
      "Office campuses are multi-building complexes — often with 200,000 – 1,000,000+ SF of GLA across 3–10+ buildings — that historically housed single corporate tenants or large tenant mixes. The category has faced the steepest post-COVID pressure of any office subtype, and that dislocation is where the biggest basis plays exist for patient value-add operators.",
    quickStats: [
      { label: "Typical Deal Size", value: "$20M – $150M", detail: "Multi-building campus scale" },
      { label: "Common Cap Rate", value: "7.50% – 9.00%+", detail: "Widest in office" },
      { label: "Campus Size", value: "200k – 1M+ SF", detail: "3–10 buildings typical" },
    ],
  },
};

export const officeRegistry: PropertyTypeEntry[] = [
  officeTopLevel,
  traditionalOffice,
  medicalOffice,
  creativeOffice,
  coworking,
  professionalDental,
  officeCondo,
  governmentOffice,
  officeCampus,
];
