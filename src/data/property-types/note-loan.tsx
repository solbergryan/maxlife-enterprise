import type { PropertyTypeEntry } from "./types";

const noteListings = [
  { name: "Crexi Notes", tag: "CRE notes marketplace", description: "Note and loan listings alongside real estate.", floridaUrl: "https://www.crexi.com/properties/FL/Note-Loan", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Note-Loan", allUrl: "https://www.crexi.com/properties/Note-Loan" },
  { name: "LoopNet Notes", tag: "Largest CRE listings network", description: "Note and loan listings on LoopNet.", floridaUrl: "https://www.loopnet.com/search/notes/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/notes/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/notes/usa/for-sale/" },
  { name: "PaperStac", tag: "Note-specific marketplace", description: "Online marketplace dedicated to mortgage note trading.", floridaUrl: "https://www.paperstac.com/", orlandoUrl: "https://www.paperstac.com/", allUrl: "https://www.paperstac.com/" },
];

const noteLoanTopLevel: PropertyTypeEntry = {
  slug: "note-loan",
  meta: {
    title: "Notes, Loans & NPL for Sale in Florida | Commercial & Residential Mortgage Notes",
    description: "Buy commercial and residential mortgage notes in Florida. Performing, non-performing, and reperforming notes with real estate collateral.",
    keywords: "mortgage notes florida, npl, non performing loan, commercial note",
  },
  page: {
    displayName: "Notes & Loans",
    pluralDisplayName: "Notes & Loans",
    heroImage: {
      src: "/images/commercial-stock/commercial-business/maxlife-commercial-business-building-architecture-modern-exterior-skyscraper-facade-5535464.webp",
      alt: "Commercial real estate note and mortgage secured by office tower",
    },
    heroEyebrow: "Note & Loan Investments",
    heroHeadline: "Notes, Loans & NPL in Florida",
    heroSubheadline: "Commercial and residential mortgage notes — the debt side of real estate investing",
    heroBody: "Note and loan investing is a specialty subcategory that sits at the intersection of real estate and fixed income. Instead of owning the property, you own the loan secured by the property. Performing notes deliver bond-like fixed income. Non-performing notes (NPLs) offer deep discounts and value-add execution through workout, modification, or foreclosure. Florida has been one of the most active note trading markets in America due to its large mortgage market and continued population-driven real estate activity.",
    quickStats: [
      { label: "Typical Deal Size", value: "$100K – $100M+", detail: "Single notes to portfolio trades" },
      { label: "Common Yield", value: "7% – 15%+", detail: "Performing to NPL workout" },
      { label: "Security", value: "Real estate collateral", detail: "Mortgage or deed of trust secured" },
    ],
    formats: [
      { name: "Performing Note", capRate: "7% – 10% yield", footprint: "Current payment status", note: "Borrower is paying on schedule. Bond-like fixed income investment." },
      { name: "Non-Performing Note (NPL)", capRate: "12% – 25%+ yield", footprint: "30+ days delinquent", note: "Borrower in default. Workout, modification, or foreclosure execution required." },
      { name: "Reperforming Note", capRate: "8% – 12% yield", footprint: "Previously NPL now paying", note: "Was delinquent, now paying after modification. Yield premium to performing notes." },
      { name: "Commercial Mortgage Note", capRate: "6.5% – 10% yield", footprint: "CRE-secured notes", note: "Notes secured by commercial real estate. Larger balances, institutional quality." },
      { name: "Residential Mortgage Pool", capRate: "7% – 12% yield", footprint: "Portfolio of residential notes", note: "Pooled residential mortgages traded in bulk. Diversification across many loans." },
    ],
    prosConsIntro: "Note investing is a different game from equity real estate — focused on yield, workout execution, and legal process rather than operations.",
    pros: [
      { title: "Senior Position in Capital Stack", description: "Note holders are senior to equity owners — you get paid first." },
      { title: "Fixed Income Yields", description: "Performing notes deliver bond-like yields that often exceed stabilized CRE cap rates." },
      { title: "Workout Upside (NPL)", description: "Non-performing notes bought at deep discount offer significant execution upside." },
      { title: "No Operational Burden", description: "Note investors don't operate buildings — just collect payments or work out defaults." },
      { title: "Diversification", description: "Note portfolios can diversify across geography, loan type, and borrower credit." },
    ],
    cons: [
      { title: "Legal Process Complexity", description: "Foreclosure, workout, and modification require specialized legal expertise and patience." },
      { title: "Florida Judicial Foreclosure", description: "Florida is a judicial foreclosure state — meaning foreclosures require court action. Slower and more expensive than non-judicial states." },
      { title: "Due Diligence Burden", description: "Each note requires loan file review, borrower analysis, title work, and collateral evaluation." },
      { title: "Regulatory Requirements", description: "Note investing is subject to FDCPA, state licensing, and borrower communication regulations." },
      { title: "Illiquid Market", description: "Note trading is less liquid than real estate — fewer buyers and broader bid-ask spreads." },
    ],
    personas: [
      { name: "Specialty Note Funds", tag: "Yield Specialists", description: "Funds with dedicated note-investing strategies focused on performing and NPL portfolios.", fit: "Institutional note investing requires dedicated expertise and infrastructure." },
      { name: "Workout Sponsors", tag: "NPL Specialists", description: "Sponsors specialized in NPL acquisition, workout, modification, and foreclosure.", fit: "Deep discounts on NPL portfolios create workout execution upside." },
      { name: "Private Lenders", tag: "Originators", description: "Lenders originating notes for their own portfolio rather than selling to secondary markets.", fit: "Origination plus hold lets lenders capture both origination fees and interest yield." },
      { name: "Family Offices", tag: "Fixed Income", description: "Family offices using performing notes as fixed income alternatives to public bond markets.", fit: "Notes can deliver higher yields than corporate bonds with real estate collateral protection." },
    ],
    underwritingMetrics: [
      { label: "LTV", detail: "Loan-to-value ratio of note balance to current collateral value — lower is better" },
      { label: "Payment History", detail: "For performing notes, consistent payment history drives value" },
      { label: "Borrower Credit", detail: "Credit score, DTI, and employment status for residential notes" },
      { label: "Collateral Condition", detail: "Inspection and BPO before buying any note — the collateral is your fallback" },
      { label: "Note Terms", detail: "Interest rate, amortization, prepayment penalty, and maturity date all matter" },
      { label: "Title Status", detail: "Confirm clean title and lien position before acquiring any note" },
    ],
    listingSites: noteListings,
    listingsIntro: "Want to see public note listings? These marketplaces aggregate Florida notes and loans.",
    listingsFootnote: "Most institutional note trading happens off-market through specialty broker networks and direct seller relationships.",
    faqs: [
      { q: "What's the difference between a performing and non-performing note?", a: "A performing note has a borrower making scheduled payments on time. A non-performing note (NPL) is 30+ days delinquent with the borrower in default. Performing notes trade on yield (7-10%). NPLs trade at steep discounts to face value because buyers need to execute workout, modification, or foreclosure." },
      { q: "Is Florida a good state for note investing?", a: "Florida is a large and active note trading market thanks to its enormous real estate market. However, Florida is a judicial foreclosure state, which means foreclosures require court action and typically take 12-18+ months. Factor foreclosure timeline and cost into your underwriting." },
      { q: "Can I 1031 exchange into notes?", a: "No — notes and loans are not like-kind property and cannot be used as 1031 replacement assets. 1031 exchanges require real property, not debt instruments secured by real property." },
    ],
    fitCheckQuestions: [
      "You want fixed-income yields higher than traditional bonds.",
      "You understand foreclosure, workout, and modification processes.",
      "You have legal and servicing infrastructure for note administration.",
      "You're comfortable with judicial foreclosure timelines in Florida.",
      "You want senior-in-the-capital-stack position rather than equity risk.",
    ],
    leadFormIntro: "Tell us about your note and loan criteria and we will send you current Florida opportunities.",
  },
};

const base = noteLoanTopLevel.page;

const performingNote: PropertyTypeEntry = {
  slug: "performing-note",
  parentSlug: "note-loan",
  meta: { title: "Performing Notes for Sale in Florida", description: "Buy performing mortgage notes in Florida. Real estate-secured fixed income with current payment history.", keywords: "performing note florida, current note, yield note" },
  page: { ...base, displayName: "Performing Note", pluralDisplayName: "Performing Notes", heroHeadline: "Performing Notes in Florida", heroSubheadline: "Real estate-secured fixed income with current payment history", heroBody: "Performing notes are mortgage loans where the borrower is making scheduled payments on time. They trade on yield (typically 7-10% for residential, 6.5-9% for commercial) and serve as fixed income alternatives to corporate bonds. Florida performing notes are among the most actively traded in America due to the large mortgage market." },
};

const nplNote: PropertyTypeEntry = {
  slug: "non-performing-note",
  parentSlug: "note-loan",
  meta: { title: "Non-Performing Notes (NPL) for Sale in Florida", description: "Buy non-performing notes in Florida. Discounted mortgage notes in default requiring workout, modification, or foreclosure.", keywords: "npl florida, non performing note, distressed note" },
  page: { ...base, displayName: "Non-Performing Note", pluralDisplayName: "Non-Performing Notes", heroHeadline: "Non-Performing Notes (NPL) in Florida", heroSubheadline: "Discounted defaulted mortgage notes — workout execution required", heroBody: "Non-performing notes are mortgage loans where the borrower is 30+ days delinquent or in default. They trade at significant discounts to face value (often 30-60% of unpaid principal balance) because the buyer must execute a workout, loan modification, short sale, deed-in-lieu, or foreclosure. Florida's judicial foreclosure environment adds timeline and cost to NPL execution but doesn't prevent successful workouts." },
};

const reperformingNote: PropertyTypeEntry = {
  slug: "reperforming-note",
  parentSlug: "note-loan",
  meta: { title: "Reperforming Notes for Sale in Florida", description: "Buy reperforming mortgage notes in Florida. Modified NPLs that are now paying with yield premium to performing notes.", keywords: "reperforming note florida, modified note" },
  page: { ...base, displayName: "Reperforming Note", pluralDisplayName: "Reperforming Notes", heroHeadline: "Reperforming Notes in Florida", heroSubheadline: "Modified NPLs that are now paying — yield premium to traditional performing notes", heroBody: "Reperforming notes are mortgage loans that were previously non-performing, went through a modification or workout, and are now making scheduled payments again. They trade at yield premiums to traditional performing notes (often 8-12%) because they carry higher perceived credit risk despite current payment status. A niche but lucrative subcategory for patient note investors." },
};

const commercialMortgage: PropertyTypeEntry = {
  slug: "commercial-mortgage",
  parentSlug: "note-loan",
  meta: { title: "Commercial Mortgage Notes for Sale in Florida", description: "Buy commercial mortgage notes in Florida. CRE-secured debt investments with institutional scale.", keywords: "commercial mortgage note florida, cre debt" },
  page: { ...base, displayName: "Commercial Mortgage", pluralDisplayName: "Commercial Mortgage Notes", heroHeadline: "Commercial Mortgage Notes in Florida", heroSubheadline: "CRE-secured debt investments with institutional scale", heroBody: "Commercial mortgage notes are loans secured by commercial real estate — retail, office, industrial, multifamily, and other CRE assets. They typically involve larger balances than residential notes and more sophisticated diligence (property-level financials, lease rolls, tenant credit). Institutional investors often buy CMBS tranches or direct commercial notes for fixed-income exposure with real estate collateral protection." },
};

const residentialPool: PropertyTypeEntry = {
  slug: "residential-mortgage-pool",
  parentSlug: "note-loan",
  meta: { title: "Residential Mortgage Pools for Sale in Florida", description: "Buy pooled residential mortgage portfolios in Florida. Diversified residential note investments.", keywords: "residential mortgage pool florida, note portfolio" },
  page: { ...base, displayName: "Residential Mortgage Pool", pluralDisplayName: "Residential Mortgage Pools", heroHeadline: "Residential Mortgage Pools in Florida", heroSubheadline: "Diversified portfolios of residential mortgage notes", heroBody: "Residential mortgage pools are portfolios of individual mortgage notes — typically sold in bulk by originators, servicers, or institutional sellers. Buyers get diversification across many loans, borrowers, and geographies in a single transaction. Pools are typically underwritten on a stratified basis with some loans expected to perform and others expected to require workout or modification." },
};

export const noteLoanRegistry: PropertyTypeEntry[] = [
  noteLoanTopLevel,
  performingNote,
  nplNote,
  reperformingNote,
  commercialMortgage,
  residentialPool,
];
