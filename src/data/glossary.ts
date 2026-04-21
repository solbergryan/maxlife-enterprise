export interface GlossaryTerm {
  slug: string;
  term: string;
  category:
    | "Investment Metrics"
    | "Lease Terms"
    | "Transaction Terms"
    | "Financing"
    | "Development & Construction"
    | "Valuation & Appraisal"
    | "Property Types"
    | "Tax & Legal";
  shortDefinition: string; // 1-2 sentences for cards and quick reference
  definition: string; // full explanation 1-2 paragraphs
  example?: string;
  relatedTerms?: string[]; // slugs
  whyItMatters?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  // INVESTMENT METRICS
  {
    slug: "cap-rate",
    term: "Cap Rate (Capitalization Rate)",
    category: "Investment Metrics",
    shortDefinition:
      "The ratio of a property's Net Operating Income to its purchase price, expressed as a percentage. The primary metric for comparing commercial real estate investments.",
    definition:
      "Capitalization rate (cap rate) is calculated as Net Operating Income (NOI) divided by the property's purchase price or current market value. It represents the unlevered yield of the property — what you'd earn annually if you paid 100% cash. Cap rates move inversely to price: as cap rates compress (go down), prices rise; as cap rates expand (go up), prices fall.",
    example:
      "A property with $120,000 annual NOI selling at a 6% cap rate is priced at $2,000,000. Same NOI at a 5% cap rate implies $2,400,000. Same NOI at a 7% cap rate implies $1,714,000.",
    relatedTerms: ["noi", "cash-on-cash-return", "irr", "yield-on-cost"],
    whyItMatters:
      "Cap rate is the most widely used CRE valuation metric. It standardizes pricing across different NOI levels, letting investors compare assets apples-to-apples.",
  },
  {
    slug: "noi",
    term: "NOI (Net Operating Income)",
    category: "Investment Metrics",
    shortDefinition:
      "Annual income from a property after deducting operating expenses — before debt service, taxes, and capital expenditures.",
    definition:
      "Net Operating Income is calculated as Gross Rental Income plus Other Income (vending, parking, etc.) minus Vacancy and Credit Loss minus Operating Expenses. It specifically excludes mortgage principal and interest, capital expenditures, depreciation, and income taxes. NOI is the core measure of a property's operating performance.",
    example:
      "A property with $500K gross rent, $25K other income, 5% vacancy, and $175K operating expenses has NOI of ($500K + $25K) × 0.95 - $175K = $323,750.",
    relatedTerms: ["cap-rate", "cash-flow", "operating-expenses"],
    whyItMatters:
      "NOI drives valuation. Cap rates are applied to NOI to determine property value. Small changes in NOI translate into large value changes.",
  },
  {
    slug: "cash-on-cash-return",
    term: "Cash-on-Cash Return",
    category: "Investment Metrics",
    shortDefinition:
      "Annual pre-tax cash flow divided by total cash invested. The levered return on your actual equity.",
    definition:
      "Cash-on-cash return (CoC) measures the annual cash flow you earn on the equity you invested, after debt service. The formula: Annual Pre-Tax Cash Flow / Total Cash Invested. It reflects the real-world return an investor experiences, as opposed to cap rate which measures the unlevered return of the property itself.",
    example:
      "You invest $500K of equity in a $2M property. The property has $120K NOI minus $90K debt service = $30K cash flow. CoC = $30K / $500K = 6%.",
    relatedTerms: ["cap-rate", "irr", "leverage", "dscr"],
    whyItMatters:
      "CoC tells you what you actually earn on your money. It accounts for leverage, which cap rate does not.",
  },
  {
    slug: "irr",
    term: "IRR (Internal Rate of Return)",
    category: "Investment Metrics",
    shortDefinition:
      "The annualized rate of return over an investment's hold period, accounting for timing of all cash flows including sale proceeds.",
    definition:
      "Internal Rate of Return is the discount rate that makes the net present value of all cash flows (initial investment, annual distributions, and sale proceeds) equal to zero. Unlike cap rate or cash-on-cash (which are snapshots), IRR measures total return over time, time-weighted.",
    example:
      "A $500K investment that returns $30K annually for 5 years and sells for $700K at year 5 has an IRR of approximately 12-13%.",
    relatedTerms: ["cash-on-cash-return", "equity-multiple", "cap-rate"],
    whyItMatters:
      "IRR is the gold-standard return metric because it accounts for the time value of money and captures both cash flow and appreciation.",
  },
  {
    slug: "dscr",
    term: "DSCR (Debt Service Coverage Ratio)",
    category: "Financing",
    shortDefinition:
      "Ratio of NOI to annual debt service. Lenders require 1.20x-1.30x+ typical for commercial loans.",
    definition:
      "Debt Service Coverage Ratio measures a property's ability to cover its debt payments from operating income. The formula: NOI / Annual Debt Service. A DSCR of 1.25x means the property generates 25% more income than needed to cover mortgage payments. Commercial lenders use DSCR as a primary underwriting metric.",
    example:
      "A property with $150K NOI and $120K annual debt service has a DSCR of 1.25x. If the lender requires 1.30x, this deal wouldn't qualify without either more equity or a larger property NOI.",
    relatedTerms: ["noi", "ltv", "debt-yield"],
    whyItMatters:
      "DSCR drives commercial loan approval. Below-threshold DSCR is the most common reason CRE loans are declined.",
  },
  {
    slug: "debt-yield",
    term: "Debt Yield",
    category: "Financing",
    shortDefinition:
      "NOI divided by total loan amount. A lender metric measuring loan safety independent of interest rate.",
    definition:
      "Debt yield is calculated as NOI / Loan Amount, expressed as a percentage. Unlike DSCR, debt yield is independent of interest rates — it measures how quickly the lender could recover its loan from the property's income if it had to foreclose. Typical lender debt yield requirements: 8-10% for stabilized assets.",
    example:
      "A $5M loan on a property with $500K NOI has a 10% debt yield. Higher debt yield = lower lender risk.",
    relatedTerms: ["dscr", "ltv", "noi"],
  },
  {
    slug: "ltv",
    term: "LTV (Loan-to-Value)",
    category: "Financing",
    shortDefinition:
      "Loan amount as a percentage of property value. Typical commercial LTV ranges 65-80%.",
    definition:
      "Loan-to-Value ratio is calculated as Loan Amount / Appraised Property Value. It represents the lender's exposure as a percentage of the asset value. Higher LTV = higher leverage = higher risk for both borrower and lender. Commercial real estate LTV typically ranges 65-75% for stabilized properties and 65-75% LTC for construction.",
    example:
      "A $1.5M loan on a $2M property represents 75% LTV. The borrower's $500K equity is the 25% buffer.",
    relatedTerms: ["ltc", "dscr", "debt-yield"],
  },
  {
    slug: "ltc",
    term: "LTC (Loan-to-Cost)",
    category: "Financing",
    shortDefinition:
      "Construction loan amount as a percentage of total project cost. Typical LTC ranges 65-80%.",
    definition:
      "Loan-to-Cost ratio applies to development and value-add projects. It's calculated as Construction Loan Amount / Total Project Cost (land + construction + soft costs + financing + contingency). LTC ratios typically range 65-80% for experienced developers.",
    relatedTerms: ["ltv", "construction-loan", "bridge-loan"],
  },
  {
    slug: "equity-multiple",
    term: "Equity Multiple",
    category: "Investment Metrics",
    shortDefinition:
      "Total cash distributions divided by total cash invested. A simple multiplier showing how many times you got your money back.",
    definition:
      "Equity Multiple = Total Cash Distributions / Total Equity Invested. A 2.0x equity multiple means the investor received 2x their initial equity back over the hold period. Unlike IRR, equity multiple doesn't account for timing — it just measures the magnitude of total return.",
    example:
      "A $500K investment that returns $1,000,000 total (cash flow + sale proceeds) has an equity multiple of 2.0x.",
    relatedTerms: ["irr", "cash-on-cash-return"],
  },
  {
    slug: "yield-on-cost",
    term: "Yield on Cost",
    category: "Investment Metrics",
    shortDefinition:
      "For development deals: stabilized NOI divided by total development cost. The development spread vs. market cap rate.",
    definition:
      "Yield on Cost is the key metric for development deals. It equals Stabilized NOI / Total Development Cost. If the market cap rate for similar stabilized properties is 6% and your yield on cost is 7.5%, you've created 150 basis points of development spread — your profit margin.",
    example:
      "A development with $150K stabilized NOI and $2M total cost has a 7.5% yield on cost. If the market cap rate is 6%, the disposition value is $2.5M — creating $500K of development profit.",
    relatedTerms: ["cap-rate", "noi", "development-spread"],
  },
  {
    slug: "development-spread",
    term: "Development Spread",
    category: "Development & Construction",
    shortDefinition:
      "The difference between a development project's yield on cost and the market cap rate. The profit margin of ground-up CRE development.",
    definition:
      "Development spread is the basis point difference between the yield on cost at stabilization and the prevailing market cap rate for comparable stabilized assets. A 150-250 basis point spread is typical for well-executed NNN build-to-suit development projects.",
    relatedTerms: ["yield-on-cost", "cap-rate", "build-to-suit"],
  },

  // LEASE TERMS
  {
    slug: "nnn-lease",
    term: "NNN Lease (Triple Net Lease)",
    category: "Lease Terms",
    shortDefinition:
      "A commercial lease where the tenant pays property taxes, insurance, and maintenance on top of base rent — making the landlord's income almost entirely passive.",
    definition:
      "A triple net (NNN) lease is a commercial lease structure where the tenant pays all three major operating expenses — property taxes, building insurance, and maintenance — in addition to base rent. The landlord collects a predictable rent check with minimal operational involvement. This is the most passive commercial real estate structure.",
    example:
      "A tenant signs a $100K/year NNN lease. They also pay the property's $15K in taxes, $5K in insurance, and all maintenance costs. The landlord's income is $100K regardless of expense volatility.",
    relatedTerms: [
      "absolute-nnn-lease",
      "double-net-lease",
      "full-service-lease",
      "ground-lease",
    ],
    whyItMatters:
      "NNN leases are the foundation of single-tenant investment real estate. They enable truly passive income and are highly sought by 1031 buyers.",
  },
  {
    slug: "absolute-nnn-lease",
    term: "Absolute NNN Lease",
    category: "Lease Terms",
    shortDefinition:
      "The purest form of NNN lease — tenant is responsible for everything including roof and structure.",
    definition:
      "An absolute NNN lease is a triple net lease where the tenant bears 100% of property-related costs including roof replacement and structural repairs. This is distinct from a standard NNN where landlord may retain structural responsibility. Absolute NNN is the gold standard for passive investors.",
    relatedTerms: ["nnn-lease", "double-net-lease"],
  },
  {
    slug: "double-net-lease",
    term: "Double Net Lease (NN)",
    category: "Lease Terms",
    shortDefinition:
      "Lease where tenant pays taxes and insurance but landlord remains responsible for structural items like roof and HVAC replacement.",
    definition:
      "A Double Net (NN) lease is similar to triple net but with landlord retaining responsibility for structural components — typically roof, structure, and sometimes HVAC. NN leases typically command lower rents than NNN and trade at slightly wider cap rates to compensate for the landlord's operational risk.",
    relatedTerms: ["nnn-lease", "absolute-nnn-lease"],
  },
  {
    slug: "ground-lease",
    term: "Ground Lease",
    category: "Lease Terms",
    shortDefinition:
      "Long-term lease of land only — tenant owns building improvements on land owned by the lessor.",
    definition:
      "A ground lease separates land ownership from building ownership. The land owner (lessor) leases the land long-term (typically 40-99 years) to a tenant (lessee) who builds and owns the improvements. At lease end, the improvements typically revert to the land owner. Ground leases trade at tight cap rates because the land owner has minimal risk.",
    example:
      "McDonald's signs a 20-year ground lease on a corner lot. McDonald's builds and owns the restaurant building. The lessor receives monthly land rent. After 20-30 years, the building reverts to the lessor.",
    relatedTerms: ["fee-simple", "nnn-lease", "reversion-value"],
  },
  {
    slug: "full-service-lease",
    term: "Full-Service Lease (Gross Lease)",
    category: "Lease Terms",
    shortDefinition:
      "Lease where the landlord pays all operating expenses (taxes, insurance, maintenance, utilities). Common in office buildings.",
    definition:
      "A full-service or gross lease is structured so the tenant pays one all-inclusive rent, with the landlord covering all property expenses (taxes, insurance, maintenance, common area expenses, utilities). Common in multi-tenant office buildings and some retail. The landlord factors expense escalation into rent structure.",
    relatedTerms: ["nnn-lease", "modified-gross-lease"],
  },
  {
    slug: "modified-gross-lease",
    term: "Modified Gross Lease",
    category: "Lease Terms",
    shortDefinition:
      "Hybrid lease structure where landlord and tenant split operating expenses in various ways.",
    definition:
      "A modified gross lease falls between full-service and NNN. Typical structures include tenant paying utilities and janitorial, landlord paying taxes/insurance/structure. Terms vary widely — always read the specific lease carefully.",
    relatedTerms: ["full-service-lease", "nnn-lease"],
  },
  {
    slug: "estoppel-certificate",
    term: "Estoppel Certificate",
    category: "Lease Terms",
    shortDefinition:
      "A signed tenant statement confirming lease terms, rent, and any claims against the landlord — required during commercial property sales.",
    definition:
      "An estoppel certificate is a signed statement from each tenant during a sale or refinance confirming the lease terms (rent, term, options), security deposit amounts, unpaid obligations, and any existing claims against the landlord. Lenders and buyers require estoppels to verify the rent roll and prevent tenants from later claiming different lease terms.",
    relatedTerms: ["snda", "lease-abstract"],
  },
  {
    slug: "snda",
    term: "SNDA (Subordination, Non-Disturbance & Attornment Agreement)",
    category: "Lease Terms",
    shortDefinition:
      "Three-party agreement between tenant, landlord, and lender protecting tenant's lease rights in case of foreclosure.",
    definition:
      "An SNDA is executed between tenant, landlord, and lender. It includes: (1) Subordination — tenant's lease is subordinate to the mortgage; (2) Non-Disturbance — if lender forecloses, they will honor the tenant's lease; (3) Attornment — tenant agrees to recognize the lender (or new owner) as the landlord.",
    relatedTerms: ["estoppel-certificate"],
  },

  // TRANSACTION TERMS
  {
    slug: "loi",
    term: "LOI (Letter of Intent)",
    category: "Transaction Terms",
    shortDefinition:
      "Non-binding document outlining key deal terms between buyer and seller before drafting the formal purchase agreement.",
    definition:
      "A Letter of Intent is a non-binding preliminary document that outlines the key commercial terms of a proposed transaction: purchase price, earnest money, due diligence period, contingencies, closing date, and key conditions. Commercial LOIs are often heavily negotiated before moving to a Purchase and Sale Agreement.",
    relatedTerms: ["psa", "earnest-money", "due-diligence"],
  },
  {
    slug: "psa",
    term: "PSA (Purchase and Sale Agreement)",
    category: "Transaction Terms",
    shortDefinition:
      "The binding contract that governs a commercial real estate transaction. Drafted after LOI acceptance.",
    definition:
      "A Purchase and Sale Agreement is the binding contract between buyer and seller in a commercial transaction. It covers purchase price, earnest money, representations and warranties, environmental indemnifications, default remedies, assignment of leases, closing conditions, and dozens of other legal provisions. Commercial PSAs are far more complex than residential.",
    relatedTerms: ["loi", "due-diligence", "closing"],
  },
  {
    slug: "earnest-money",
    term: "Earnest Money",
    category: "Transaction Terms",
    shortDefinition:
      "Deposit paid by buyer to seller at contract signing, typically 1-5% of purchase price. Refundable during due diligence, non-refundable after.",
    definition:
      "Earnest money (also called escrow deposit) is a good-faith deposit from buyer to seller at contract execution. It's held by a neutral third party (usually title company) until closing. Typically 1-5% of purchase price. Refundable while due diligence contingencies remain; becomes non-refundable ('goes hard') when contingencies expire.",
    relatedTerms: ["psa", "due-diligence", "going-hard"],
  },
  {
    slug: "going-hard",
    term: "Going Hard",
    category: "Transaction Terms",
    shortDefinition:
      "The moment earnest money becomes non-refundable, typically at end of due diligence period.",
    definition:
      "When earnest money 'goes hard,' it transitions from refundable to non-refundable. If the buyer backs out after this point, the seller keeps the earnest money as liquidated damages. Going hard signals buyer commitment to close and is a key negotiating point.",
    relatedTerms: ["earnest-money", "due-diligence"],
  },
  {
    slug: "due-diligence",
    term: "Due Diligence",
    category: "Transaction Terms",
    shortDefinition:
      "The investigation period after contract signing, typically 30-90 days, when buyer inspects everything about the property.",
    definition:
      "Due diligence is the buyer's investigation period to verify every aspect of the property before closing. Commercial due diligence typically includes: Phase I Environmental, Property Condition Assessment, ALTA Survey, title examination, lease review and estoppels, financial audit, zoning verification. Lasts 30-90 days typically.",
    relatedTerms: ["phase-1-esa", "pca", "alta-survey", "title-commitment"],
  },
  {
    slug: "phase-1-esa",
    term: "Phase I Environmental Site Assessment",
    category: "Transaction Terms",
    shortDefinition:
      "Records-based investigation to identify potential environmental contamination. Required by virtually every commercial lender.",
    definition:
      "A Phase I ESA is conducted per ASTM E1527-21 standard by a licensed environmental consultant. It includes historical aerial review, environmental database searches, on-site inspection, and interviews. The goal is to identify Recognized Environmental Conditions (RECs). If RECs are found, a Phase II ESA with physical sampling may be required. Cost: $2,500-$4,500. Timeline: 2-3 weeks.",
    relatedTerms: ["phase-2-esa", "due-diligence", "environmental-consultant"],
  },
  {
    slug: "phase-2-esa",
    term: "Phase II ESA",
    category: "Transaction Terms",
    shortDefinition:
      "Physical environmental testing with soil borings and groundwater sampling, triggered when a Phase I identifies contamination risks.",
    definition:
      "A Phase II ESA involves actual physical testing — soil borings, groundwater sampling, and lab analysis — to determine whether contamination exists, its type and extent, and estimated remediation costs. Typically triggered by RECs identified in Phase I. Cost: $10,000-$50,000+. Timeline: 4-8 weeks.",
    relatedTerms: ["phase-1-esa"],
  },
  {
    slug: "pca",
    term: "PCA (Property Condition Assessment)",
    category: "Transaction Terms",
    shortDefinition:
      "Commercial building inspection far more comprehensive than residential — evaluates structure, systems, and projects capital expenditures over 10-12 years.",
    definition:
      "A Property Condition Assessment is conducted per ASTM E2018 by a licensed engineering firm. It evaluates structure, roof, HVAC, plumbing, electrical, parking, and site improvements. The report identifies immediate repair needs and projects capital expenditures over a 10-12 year horizon. Required by most commercial lenders.",
    relatedTerms: ["due-diligence", "property-inspector"],
  },
  {
    slug: "alta-survey",
    term: "ALTA Survey",
    category: "Transaction Terms",
    shortDefinition:
      "The gold-standard land survey for commercial properties — maps boundaries, easements, improvements, and flood zones.",
    definition:
      "An ALTA/NSPS Land Title Survey meets American Land Title Association and National Society of Professional Surveyors standards. It maps boundaries, improvements, easements, encroachments, setbacks, access, and flood zones. Required by most commercial lenders. Cost: $3,500-$15,000+. Timeline: 2-6 weeks.",
    relatedTerms: ["title-commitment", "due-diligence"],
  },
  {
    slug: "title-commitment",
    term: "Title Commitment",
    category: "Transaction Terms",
    shortDefinition:
      "The title company's preliminary report showing what it will insure — exceptions, liens, easements, and encumbrances.",
    definition:
      "A title commitment is issued by the title company early in due diligence. It discloses the state of title: recorded easements, restrictions, liens, encumbrances, and exceptions to coverage. Buyer's attorney reviews every Schedule B exception to identify potential issues before closing.",
    relatedTerms: ["alta-survey", "title-insurance", "due-diligence"],
  },
  {
    slug: "title-insurance",
    term: "Title Insurance",
    category: "Transaction Terms",
    shortDefinition:
      "Insurance protecting buyer and lender against title defects discovered after closing. Both owner's and lender's policies are standard.",
    definition:
      "Title insurance protects against losses from title defects — undiscovered liens, boundary disputes, forged deeds, or missed easements. Two policies are typical in commercial: an owner's policy (protects buyer) and a lender's policy (required by lender). Premium approximately 0.5% of purchase price in Florida, paid once at closing.",
    relatedTerms: ["title-commitment", "closing"],
  },
  {
    slug: "1031-exchange",
    term: "1031 Exchange (Like-Kind Exchange)",
    category: "Tax & Legal",
    shortDefinition:
      "IRS-approved strategy allowing investors to defer capital gains taxes by reinvesting proceeds from sold investment property into like-kind property.",
    definition:
      "A Section 1031 like-kind exchange allows real estate investors to defer capital gains and depreciation recapture taxes on the sale of investment property — provided the proceeds are reinvested in like-kind replacement property within strict IRS timelines. Key deadlines: 45 days to identify replacement property; 180 days to close. A qualified intermediary must hold the funds.",
    relatedTerms: [
      "qualified-intermediary",
      "boot",
      "opportunity-zone",
      "capital-gains",
    ],
    whyItMatters:
      "1031 exchanges are one of the most powerful wealth-building tools in real estate — they allow indefinite tax deferral when chained together.",
  },
  {
    slug: "qualified-intermediary",
    term: "Qualified Intermediary (QI)",
    category: "Tax & Legal",
    shortDefinition:
      "IRS-required neutral third party that holds 1031 exchange proceeds and facilitates the transaction.",
    definition:
      "A qualified intermediary (QI, also called accommodator or facilitator) is a neutral third party required by the IRS to facilitate a 1031 exchange. The QI holds sale proceeds in escrow (preventing 'constructive receipt' by the investor), prepares exchange documents, and releases funds for replacement property purchase.",
    relatedTerms: ["1031-exchange", "constructive-receipt"],
  },
  {
    slug: "boot",
    term: "Boot",
    category: "Tax & Legal",
    shortDefinition:
      "Non-like-kind property or cash received in a 1031 exchange. Boot is taxable.",
    definition:
      "In 1031 exchange terminology, 'boot' is any non-like-kind property, cash, or debt relief received by the exchanger. Boot is taxable to the extent of realized gain. Common forms: cash boot (proceeds taken out of the exchange), mortgage boot (debt reduction on replacement property).",
    relatedTerms: ["1031-exchange", "qualified-intermediary"],
  },
  {
    slug: "opportunity-zone",
    term: "Opportunity Zone",
    category: "Tax & Legal",
    shortDefinition:
      "Federally-designated economically distressed area where investments via Qualified Opportunity Funds receive tax incentives including deferred and tax-free gains.",
    definition:
      "Opportunity Zones are ~8,700 federally-designated census tracts. Investors can defer capital gains from ANY sale (not just real estate) by investing the gain in a Qualified Opportunity Fund (QOF) within 180 days. After 10-year hold, the appreciation on the QOF investment is 100% tax-free.",
    relatedTerms: ["1031-exchange", "capital-gains"],
  },
  {
    slug: "capital-gains",
    term: "Capital Gains Tax",
    category: "Tax & Legal",
    shortDefinition:
      "Federal tax on the profit from selling an investment asset. Long-term rate is 0-20% plus 3.8% NIIT for most real estate investors.",
    definition:
      "Capital gains tax applies to profits from selling investment assets held over one year (long-term). For commercial real estate investors, long-term capital gains rates are 0%, 15%, or 20% depending on income, plus a 3.8% Net Investment Income Tax (NIIT). Additionally, depreciation recapture is taxed at 25%.",
    relatedTerms: ["1031-exchange", "depreciation-recapture"],
  },
  {
    slug: "depreciation-recapture",
    term: "Depreciation Recapture",
    category: "Tax & Legal",
    shortDefinition:
      "Tax levied on the gain from depreciation previously claimed on an investment property, at a maximum 25% federal rate.",
    definition:
      "When investment real estate is sold, the IRS 'recaptures' depreciation previously claimed. Depreciation recapture is taxed at a maximum 25% federal rate — higher than long-term capital gains rates. This is a major reason 1031 exchanges are attractive — they defer depreciation recapture along with capital gains.",
    relatedTerms: ["capital-gains", "1031-exchange", "depreciation"],
  },
  {
    slug: "depreciation",
    term: "Depreciation",
    category: "Tax & Legal",
    shortDefinition:
      "Tax deduction allowing investors to write off the cost of an income-producing building over its useful life — 39 years for commercial, 27.5 for residential.",
    definition:
      "Depreciation is a non-cash tax deduction that allows real estate investors to write off the cost basis of income-producing property over its useful life. Commercial property: 39 years. Residential investment (multifamily): 27.5 years. Cost segregation studies can reclassify portions of the building to 5-year and 15-year schedules for accelerated depreciation.",
    relatedTerms: [
      "depreciation-recapture",
      "cost-segregation",
      "bonus-depreciation",
    ],
  },
  {
    slug: "cost-segregation",
    term: "Cost Segregation",
    category: "Tax & Legal",
    shortDefinition:
      "IRS-approved tax strategy that reclassifies portions of a building into accelerated depreciation schedules (5 or 15 years) instead of 39 years.",
    definition:
      "Cost segregation is an engineering-based study that identifies components of a building that can be reclassified from 39-year (or 27.5-year) straight-line depreciation into accelerated 5-year and 15-year MACRS schedules. This can generate substantial first-year tax savings — often 20-40% of building value can be reclassified.",
    relatedTerms: ["depreciation", "bonus-depreciation"],
  },
  {
    slug: "bonus-depreciation",
    term: "Bonus Depreciation",
    category: "Tax & Legal",
    shortDefinition:
      "IRS provision allowing investors to deduct a percentage of qualifying property costs in the first year. Phasing out from 100% (2022) to 0% (2027).",
    definition:
      "Bonus depreciation allows investors to immediately deduct a percentage of qualifying property costs (typically 5-year and 15-year property) in the acquisition year, rather than over the MACRS schedule. Under the 2017 TCJA, bonus depreciation is phasing out: 100% (2022), 80% (2023), 60% (2024), 40% (2025), 20% (2026), 0% (2027+).",
    relatedTerms: ["cost-segregation", "depreciation"],
  },

  // VALUATION & APPRAISAL
  {
    slug: "income-approach",
    term: "Income Approach (to Valuation)",
    category: "Valuation & Appraisal",
    shortDefinition:
      "Valuation method based on applying a cap rate to NOI. The primary approach for income-producing commercial real estate.",
    definition:
      "The income approach to valuation applies a market cap rate to a property's NOI to derive value. It's the primary valuation method for income-producing commercial real estate. Formula: Value = NOI / Cap Rate.",
    relatedTerms: ["cap-rate", "noi", "sales-comparison-approach"],
  },
  {
    slug: "sales-comparison-approach",
    term: "Sales Comparison Approach",
    category: "Valuation & Appraisal",
    shortDefinition:
      "Valuation method based on recent sales of comparable properties. Used alongside the income approach.",
    definition:
      "The sales comparison (or market) approach values property based on recent sales of comparable properties. Appraisers adjust comps for differences (size, age, condition, location). Most commercial appraisals use both income and sales comparison approaches and reconcile to a final value.",
    relatedTerms: ["income-approach", "cost-approach"],
  },
  {
    slug: "cost-approach",
    term: "Cost Approach",
    category: "Valuation & Appraisal",
    shortDefinition:
      "Valuation method based on replacement cost minus depreciation. Useful for special-purpose properties without direct comparables.",
    definition:
      "The cost approach estimates value as Land Value + (Replacement Cost of Improvements - Accumulated Depreciation). Most useful for new construction or special-purpose properties where direct comparables don't exist.",
    relatedTerms: ["income-approach", "sales-comparison-approach"],
  },

  // PROPERTY TYPES
  {
    slug: "single-tenant",
    term: "Single-Tenant Net Lease",
    category: "Property Types",
    shortDefinition:
      "Commercial property leased to one tenant, typically under an NNN structure. The core asset class for 1031 exchange buyers.",
    definition:
      "Single-tenant net lease properties are commercial buildings leased to one tenant for a long term (usually 10-25+ years) under NNN or absolute NNN structure. Common examples: Walgreens, CVS, Dollar General, AutoZone, Chick-fil-A, Starbucks. Popular with passive investors and 1031 buyers.",
    relatedTerms: ["nnn-lease", "multi-tenant", "absolute-nnn-lease"],
  },
  {
    slug: "multi-tenant",
    term: "Multi-Tenant Property",
    category: "Property Types",
    shortDefinition:
      "Commercial property with multiple tenants. Includes retail shopping centers, office buildings, and industrial parks.",
    definition:
      "Multi-tenant properties have multiple tenants sharing a building or property. Common types: strip retail centers, grocery-anchored centers, office buildings, industrial parks. Lease structures vary (often modified gross or CAM-based rather than absolute NNN). Operating more complex than single-tenant but offers diversification.",
    relatedTerms: ["single-tenant", "cam-charges"],
  },
  {
    slug: "cam-charges",
    term: "CAM (Common Area Maintenance)",
    category: "Lease Terms",
    shortDefinition:
      "Tenant's proportionate share of expenses for maintaining common areas of a multi-tenant property.",
    definition:
      "CAM charges are expenses associated with maintaining common areas (parking lots, landscaping, shared hallways, building exterior, etc.) in multi-tenant commercial properties. Tenants pay their proportionate share based on leased square footage. CAM reconciliation happens annually — comparing estimated vs. actual expenses.",
    relatedTerms: ["multi-tenant", "operating-expenses"],
  },
  {
    slug: "build-to-suit",
    term: "Build-to-Suit (BTS)",
    category: "Development & Construction",
    shortDefinition:
      "Development model where a developer builds a property specifically designed for a committed tenant under a pre-negotiated lease.",
    definition:
      "Build-to-suit is a development strategy where a developer secures a tenant commitment (signed LOI or lease), acquires land, and constructs a property to the tenant's specifications. The property is typically sold after stabilization to a passive investor. BTS is the primary model for NNN retail development (Dollar General, AutoZone, Walgreens, etc.).",
    relatedTerms: ["development-spread", "yield-on-cost", "nnn-lease"],
  },
  {
    slug: "value-add",
    term: "Value-Add Real Estate",
    category: "Property Types",
    shortDefinition:
      "Investment strategy of buying underperforming commercial properties and increasing value through renovation, rent growth, and repositioning.",
    definition:
      "Value-add investments target underperforming properties where active management can increase value. Strategies include: renovating units to push rents, leasing up vacancy, repositioning tenant mix, reducing operating expenses. Typical hold period 3-5 years with targeted 15-25% IRRs.",
    relatedTerms: ["core-investment", "opportunistic-investment"],
  },
  {
    slug: "reversion-value",
    term: "Reversion Value",
    category: "Valuation & Appraisal",
    shortDefinition:
      "The estimated sale value of a property at the end of an investor's hold period or at the end of a ground lease term.",
    definition:
      "Reversion value is the property's estimated terminal value at the end of an investment hold. In DCF analysis, reversion is typically calculated by applying an exit cap rate to the NOI in the year of sale. For ground leases, reversion refers to the value of improvements that revert to the land owner at lease end.",
    relatedTerms: ["ground-lease", "exit-cap-rate", "dcf"],
  },
  {
    slug: "fee-simple",
    term: "Fee Simple",
    category: "Transaction Terms",
    shortDefinition:
      "The most complete form of real estate ownership — full ownership of both land and improvements, with no time limit.",
    definition:
      "Fee simple (or fee simple absolute) is the highest form of real estate ownership. The owner holds the land and all improvements with no time limit and the right to sell, lease, or mortgage at will. Contrast with ground lease (owner of land only) or leasehold (tenant's interest).",
    relatedTerms: ["ground-lease"],
  },

  // ADDITIONAL TERMS

  {
    slug: "pro-forma",
    term: "Pro Forma",
    category: "Investment Metrics",
    shortDefinition:
      "A projected financial statement for a property showing expected income, expenses, and cash flow over time.",
    definition:
      "A pro forma is a financial projection for a real estate investment — showing expected gross rent, vacancy, operating expenses, NOI, debt service, and cash flow typically over 5-10 years. Critical for underwriting acquisitions and development deals. Quality pro formas stress-test assumptions (cap rates, rent growth, vacancy) to model sensitivity.",
    relatedTerms: ["noi", "underwriting", "cap-rate"],
  },
  {
    slug: "underwriting",
    term: "Underwriting",
    category: "Investment Metrics",
    shortDefinition:
      "The process of evaluating a property's financial performance, risks, and potential returns before committing to invest.",
    definition:
      "Underwriting is the comprehensive financial and risk analysis of a commercial real estate investment. Buyer underwriting evaluates rent rolls, operating expenses, market comparables, tenant credit, lease terms, and capital needs. Lender underwriting additionally analyzes DSCR, LTV, debt yield, and sponsor financial strength. Every institutional deal involves underwriting before LOI or closing.",
    relatedTerms: ["pro-forma", "dscr", "ltv"],
  },
  {
    slug: "operating-expenses",
    term: "Operating Expenses (OpEx)",
    category: "Investment Metrics",
    shortDefinition:
      "Recurring costs required to operate a property — taxes, insurance, maintenance, utilities, management.",
    definition:
      "Operating expenses are recurring costs required to run a commercial property: property taxes, insurance, repairs and maintenance, utilities, trash, landscaping, property management, legal, professional services. OpEx excludes debt service, capital expenditures, and depreciation. In NNN leases, the tenant pays most or all OpEx directly.",
    relatedTerms: ["noi", "cam-charges", "capex"],
  },
  {
    slug: "capex",
    term: "CapEx (Capital Expenditures)",
    category: "Investment Metrics",
    shortDefinition:
      "One-time investments to improve, replace, or extend the useful life of a property — roof replacement, HVAC, parking lot.",
    definition:
      "Capital expenditures are non-recurring investments to extend a property's useful life or add value — roof replacement, HVAC unit replacement, parking lot repaving, tenant improvements, facade renovations. CapEx is capitalized and depreciated over time (not expensed). Projected CapEx over a 10-year hold is a key component of underwriting.",
    relatedTerms: ["operating-expenses", "pca", "ti-allowance"],
  },
  {
    slug: "ti-allowance",
    term: "TI Allowance (Tenant Improvement Allowance)",
    category: "Lease Terms",
    shortDefinition:
      "Dollar amount landlord contributes toward tenant's buildout of leased space, typically quoted per square foot.",
    definition:
      "A Tenant Improvement (TI) allowance is the capital the landlord contributes toward a tenant's buildout of leased space. Typically quoted per square foot (e.g., $40/SF). Higher TI = tenant pays less out of pocket but landlord recoups through higher rent. TI is common in office and multi-tenant retail; less common in NNN single-tenant (tenants fund their own buildouts).",
    relatedTerms: ["capex", "nnn-lease", "free-rent"],
  },
  {
    slug: "free-rent",
    term: "Free Rent / Rent Abatement",
    category: "Lease Terms",
    shortDefinition:
      "Period at lease start when tenant doesn't pay rent, used to offset buildout costs or attract tenants.",
    definition:
      "Free rent (or rent abatement) is a concession from landlord to tenant — a period at the start of a lease where no rent is paid. Typical in office and multi-tenant retail (2-6 months is common). It effectively reduces the tenant's all-in occupancy cost and is a common negotiating point. Concessions are accounted for on a straight-line basis for GAAP reporting.",
    relatedTerms: ["ti-allowance"],
  },
  {
    slug: "dcf",
    term: "DCF (Discounted Cash Flow)",
    category: "Valuation & Appraisal",
    shortDefinition:
      "Valuation method that discounts projected future cash flows (including sale proceeds) back to present value using a target rate of return.",
    definition:
      "Discounted Cash Flow analysis projects a property's cash flows (annual NOI plus terminal sale proceeds) over a hold period and discounts them back to present value using a discount rate (target IRR). The resulting Net Present Value indicates whether the deal meets return thresholds. DCF is the primary underwriting method for institutional CRE.",
    relatedTerms: ["irr", "cap-rate", "reversion-value"],
  },
  {
    slug: "exit-cap-rate",
    term: "Exit Cap Rate (Terminal Cap Rate)",
    category: "Valuation & Appraisal",
    shortDefinition:
      "The cap rate used to value a property at the end of an investment hold period — typically 25-50 bps higher than entry cap.",
    definition:
      "Exit cap rate is the cap rate applied to the final year's NOI in DCF analysis to calculate terminal sale value. Conservative underwriters project exit cap rates 25-50 basis points higher than entry cap rates (reflecting the building's additional age at disposition). Exit cap rate assumption is one of the most sensitive variables in DCF returns.",
    relatedTerms: ["dcf", "cap-rate", "reversion-value"],
  },
  {
    slug: "bridge-loan",
    term: "Bridge Loan",
    category: "Financing",
    shortDefinition:
      "Short-term (1-3 year) commercial loan used to acquire, stabilize, or reposition a property before permanent financing.",
    definition:
      "Bridge loans are short-term financing (typically 1-3 years) used for value-add acquisitions, lease-up periods, construction-to-permanent transitions, or time-sensitive opportunities. Higher rates than permanent financing (often 200-400+ bps over SOFR) but more flexible terms and faster close. Often interest-only with no amortization.",
    relatedTerms: ["cmbs", "construction-loan", "permanent-loan"],
  },
  {
    slug: "cmbs",
    term: "CMBS (Commercial Mortgage-Backed Securities)",
    category: "Financing",
    shortDefinition:
      "Securitized commercial real estate loans pooled and sold as bonds to investors. Competitive rates but rigid terms.",
    definition:
      "CMBS loans are commercial mortgages packaged into pools and sold as bonds to institutional investors. Benefits: competitive fixed rates, non-recourse, long terms (5-10 years). Tradeoffs: rigid servicing (limited flexibility for modifications), yield maintenance prepayment penalties, strict reserves. Typical for stabilized properties $5M+.",
    relatedTerms: ["bridge-loan", "permanent-loan"],
  },
  {
    slug: "construction-loan",
    term: "Construction Loan",
    category: "Financing",
    shortDefinition:
      "Short-term financing for ground-up development, disbursed in draws as construction progresses.",
    definition:
      "Construction loans fund ground-up development during the construction period. Funds are disbursed in monthly 'draws' as work progresses, with the lender verifying completion before advancing. Typical term: 12-24 months. Interest-only during construction. At stabilization, the loan is refinanced with permanent financing or the property is sold.",
    relatedTerms: ["ltc", "bridge-loan", "build-to-suit"],
  },
  {
    slug: "sponsor",
    term: "Sponsor / Syndicator / General Partner",
    category: "Financing",
    shortDefinition:
      "The principal who organizes a real estate deal, raises capital, and manages the investment on behalf of passive investors.",
    definition:
      "A sponsor (also called syndicator or general partner) is the individual or firm that organizes a real estate investment — sources the deal, raises equity from passive investors (LPs), manages the asset, and executes the exit. Sponsors typically earn acquisition fees, asset management fees, and carried interest ('promote') above a return threshold.",
    relatedTerms: ["promote", "limited-partner"],
  },
  {
    slug: "promote",
    term: "Promote / Carried Interest",
    category: "Financing",
    shortDefinition:
      "The sponsor's share of profits above a preferred return threshold. Aligns sponsor incentives with investor returns.",
    definition:
      "Promote (also called carried interest or 'carry') is the sponsor's disproportionate share of profits above a preferred return threshold paid to LPs. Typical structure: 8% preferred return to LPs, then profits split 80/20 (LPs/GP) above that. Promote aligns sponsor incentives with investor returns — sponsors only earn when LPs have been paid first.",
    relatedTerms: ["sponsor", "limited-partner"],
  },
  {
    slug: "limited-partner",
    term: "Limited Partner (LP)",
    category: "Financing",
    shortDefinition:
      "Passive equity investor in a syndicated deal who provides capital but has no operational role. Liability limited to investment amount.",
    definition:
      "A Limited Partner (LP) is a passive investor in a real estate syndication or fund. LPs provide capital, receive their pro-rata share of distributions (typically after a preferred return), and face limited liability (maximum loss = invested capital). LPs have no operational role or management responsibility.",
    relatedTerms: ["sponsor", "promote"],
  },
  {
    slug: "constructive-receipt",
    term: "Constructive Receipt",
    category: "Tax & Legal",
    shortDefinition:
      "The IRS doctrine that treats money as received when it becomes available to you — critical concept in 1031 exchanges.",
    definition:
      "Constructive receipt is an IRS doctrine that treats funds as received when they become available without restriction to the taxpayer. In 1031 exchanges, if the exchanger takes constructive receipt of sale proceeds (even briefly), the exchange fails. This is why a Qualified Intermediary must hold the funds — preventing constructive receipt.",
    relatedTerms: ["1031-exchange", "qualified-intermediary"],
  },
  {
    slug: "zoning",
    term: "Zoning",
    category: "Development & Construction",
    shortDefinition:
      "Municipal regulations dictating how land can be used — commercial, residential, industrial, mixed-use.",
    definition:
      "Zoning is the regulatory framework established by local governments dictating permitted uses, density, height, setbacks, and other development parameters for each parcel. Zoning districts (e.g., C-2 commercial, R-1 residential) have specific permitted and conditional uses. Rezoning can take 6-12 months and carries approval risk.",
    relatedTerms: ["entitlements", "variance", "land-use-attorney"],
  },
  {
    slug: "entitlements",
    term: "Entitlements",
    category: "Development & Construction",
    shortDefinition:
      "The governmental approvals required before development can proceed — site plan, variance, conditional use, plat approval.",
    definition:
      "Entitlements are the specific approvals a property must obtain from the municipality before development can proceed: site plan approval, variance, conditional use permit, plat approval, concurrency certificate. Entitlement processes typically take 3-12 months and carry approval risk. Pre-entitled land commands premium pricing.",
    relatedTerms: ["zoning", "variance", "site-plan"],
  },
  {
    slug: "variance",
    term: "Variance",
    category: "Development & Construction",
    shortDefinition:
      "Municipal approval allowing a specific property to deviate from zoning requirements due to unique hardship.",
    definition:
      "A variance is a municipal approval permitting a specific property to deviate from zoning requirements (setback, height, parking count, etc.) based on unique hardship. Requires demonstrating the hardship is property-specific and the variance won't harm neighbors. Approvals involve planning commission hearings and can take 2-4 months.",
    relatedTerms: ["zoning", "entitlements"],
  },
  {
    slug: "site-plan",
    term: "Site Plan",
    category: "Development & Construction",
    shortDefinition:
      "Engineering drawings showing how a site will be developed — building, parking, drainage, landscaping, utilities.",
    definition:
      "Site plan refers to the engineering drawings showing proposed development on a site — building footprint, parking layout, access drives, stormwater management, landscaping, utilities. Site plan approval is required before building permits can be issued. Typically produced by civil engineer; approved through planning commission or administrative review.",
    relatedTerms: ["entitlements", "zoning", "civil-engineer"],
  },
  {
    slug: "civil-engineer",
    term: "Civil Engineer",
    category: "Development & Construction",
    shortDefinition:
      "Licensed engineer who designs site-level infrastructure — grading, drainage, utilities, site plans.",
    definition:
      "A civil engineer designs the site-level infrastructure for a commercial development — grading, drainage, stormwater management, utility connections, parking, driveways. Civil engineering plans are required for site plan approval and building permits. Typical cost: $15,000-$75,000+ per project depending on complexity.",
    relatedTerms: ["site-plan", "entitlements"],
  },
  {
    slug: "ecl",
    term: "Environmental Contamination Liability",
    category: "Tax & Legal",
    shortDefinition:
      "Under federal CERCLA law, property owners can be held liable for contamination regardless of who caused it — even if it occurred before they owned the property.",
    definition:
      "Under the federal Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), current property owners can be held liable for environmental contamination regardless of whether they caused it. This is why Phase I Environmental Site Assessments are critical — they establish the 'innocent landowner' or 'bona fide prospective purchaser' defense.",
    relatedTerms: ["phase-1-esa", "phase-2-esa"],
  },
  {
    slug: "market-rent",
    term: "Market Rent",
    category: "Investment Metrics",
    shortDefinition:
      "The rent a property would command if leased today in an arms-length transaction. Used to evaluate mark-to-market upside.",
    definition:
      "Market rent is the rent a property would achieve in a current arms-length transaction with a willing, informed tenant. Compared to actual contract rent, market rent reveals mark-to-market upside (or downside) as leases roll. Key metric in value-add underwriting — the gap between contract and market rent drives projected NOI growth.",
    relatedTerms: ["rent-roll", "value-add"],
  },
  {
    slug: "rent-roll",
    term: "Rent Roll",
    category: "Investment Metrics",
    shortDefinition:
      "Schedule of all tenants in a property showing unit, square footage, lease terms, and rent amounts. Core due diligence document.",
    definition:
      "A rent roll is a schedule listing every tenant in a property: unit/suite, tenant name, leased square footage, lease start/end dates, current rent, rent escalations, options, and security deposit. The rent roll is one of the most important due diligence documents — it forms the basis of income underwriting.",
    relatedTerms: ["estoppel-certificate", "market-rent"],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(
  category: GlossaryTerm["category"]
): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export const glossaryCategories: GlossaryTerm["category"][] = [
  "Investment Metrics",
  "Lease Terms",
  "Transaction Terms",
  "Financing",
  "Development & Construction",
  "Valuation & Appraisal",
  "Property Types",
  "Tax & Legal",
];
