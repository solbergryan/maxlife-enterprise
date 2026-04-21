export type ProfessionalCategory =
  | "Brokerage & Sales"
  | "Legal & Transactional"
  | "Finance & Valuation"
  | "Development & Construction"
  | "Engineering & Design"
  | "Due Diligence"
  | "Operations & Management";

export interface Professional {
  slug: string;
  title: string;
  category: ProfessionalCategory;
  shortDescription: string;
  metaDescription: string;
  whatTheyDo: string;
  keyResponsibilities: string[];
  whenNeeded: string;
  howWeWork: string;
  typicalCost?: string;
  typicalTiming?: string;
  worksWith?: string[];
}

export const professionals: Professional[] = [
  // BROKERAGE & SALES
  {
    slug: "commercial-real-estate-broker",
    title: "Commercial Real Estate Broker",
    category: "Brokerage & Sales",
    shortDescription:
      "Licensed professional who represents buyers, sellers, landlords, or tenants in commercial property transactions.",
    metaDescription:
      "What does a commercial real estate broker do? Learn the role of a CRE broker in Florida — representing buyers, sellers, landlords, and tenants in commercial transactions.",
    whatTheyDo:
      "A commercial real estate broker is a licensed professional who facilitates the buying, selling, and leasing of commercial property. Unlike residential agents, CRE brokers work with investment properties, office buildings, retail centers, industrial facilities, and land. They bring market expertise, deal structuring knowledge, and access to on- and off-market opportunities.",
    keyResponsibilities: [
      "Source and evaluate commercial properties for buyers and investors",
      "List and market properties for sellers",
      "Negotiate Letters of Intent (LOI) and Purchase and Sale Agreements (PSA)",
      "Conduct market analysis, cap rate studies, and property valuations",
      "Coordinate due diligence with attorneys, inspectors, and lenders",
      "Represent landlords or tenants in commercial lease negotiations",
    ],
    whenNeeded:
      "At the start of any commercial real estate transaction — whether you're buying your first NNN property, selling a retail center, or leasing office space. A good broker is involved from initial strategy through closing.",
    howWeWork:
      "As a licensed Florida commercial real estate broker, MaxLife Development represents clients across NNN investments, land, retail, office, and development deals throughout Central Florida. We bring deep market knowledge of Orlando, Melbourne, and the I-4 corridor, along with a network of tenant reps, lenders, and attorneys to execute deals efficiently.",
    typicalCost:
      "Commission-based, typically 3-6% of transaction value, paid at closing (often by the seller).",
    worksWith: [
      "commercial-real-estate-attorney",
      "commercial-mortgage-broker",
      "title-company",
      "commercial-appraiser",
    ],
  },
  {
    slug: "tenant-representation-broker",
    title: "Tenant Representation Broker",
    category: "Brokerage & Sales",
    shortDescription:
      "A commercial broker who exclusively represents tenants — finding space, negotiating lease terms, and advocating for tenant interests.",
    metaDescription:
      "What is a tenant representation broker? Learn how tenant reps help businesses find commercial space and negotiate favorable lease terms in Florida.",
    whatTheyDo:
      "A tenant representation broker (tenant rep) is a specialized commercial real estate broker who exclusively represents the interests of tenants, not landlords. They source available space, tour properties, negotiate lease economics, and advocate for favorable tenant terms on rent, TI allowances, renewal options, and exclusivity clauses. For national chains in expansion mode, tenant reps are the primary channel for site submission.",
    keyResponsibilities: [
      "Identify target markets and available space matching tenant criteria",
      "Conduct site tours and evaluate trade areas, traffic, and demographics",
      "Negotiate LOI and lease terms on behalf of the tenant",
      "Coordinate with tenant's legal counsel on lease documents",
      "Advise on build-out, TI allowances, and occupancy timelines",
      "For national chains: submit BTS sites directly to tenant real estate teams",
    ],
    whenNeeded:
      "When a business is expanding, relocating, or opening a new location. Also when a landlord or developer wants to identify and secure a national credit tenant for a build-to-suit project.",
    howWeWork:
      "MaxLife Development works closely with national tenant rep networks including CBRE, SRS, Stan Johnson, and JLL to source BTS sites and match them with active expansion programs. We also represent local and regional tenants in Central Florida lease negotiations.",
    typicalCost:
      "Tenant rep fees are typically paid by the landlord — usually 4-6% of total lease value over the term.",
    worksWith: [
      "commercial-real-estate-developer",
      "commercial-real-estate-broker",
      "commercial-real-estate-attorney",
    ],
  },
  {
    slug: "investment-sales-broker",
    title: "NNN Investment Sales Broker",
    category: "Brokerage & Sales",
    shortDescription:
      "A specialist broker focused on single-tenant NNN and net-leased investment sales to 1031 buyers, HNWIs, and institutional investors.",
    metaDescription:
      "What does an NNN investment sales broker do? Learn how investment sales brokers price, market, and sell single-tenant net lease properties to 1031 buyers.",
    whatTheyDo:
      "An investment sales broker specializes in selling income-producing commercial properties — particularly single-tenant NNN assets — to passive investors. They understand cap rate pricing, 1031 exchange buyer psychology, and have relationships with the private equity funds, family offices, and DST sponsors who buy net-leased real estate. They prepare offering memorandums (OMs), drive competitive bidding, and coordinate disposition timelines.",
    keyResponsibilities: [
      "Value stabilized NNN and net-leased properties at market cap rates",
      "Prepare professional offering memorandums (OMs)",
      "Market properties through national and regional investor networks",
      "Drive competitive bidding among qualified investors",
      "Coordinate 1031 exchange timelines (45/180 day rules)",
      "Manage the disposition from listing through closing",
    ],
    whenNeeded:
      "When a developer is ready to sell a stabilized NNN asset, when an investor is exiting a 1031 exchange property, or when a private seller wants to maximize pricing through institutional marketing.",
    howWeWork:
      "MaxLife Development prices and positions NNN dispositions to reach the widest possible 1031 buyer pool. We leverage relationships with top NNN brokerages and direct investor contacts to drive competitive bidding and achieve premium cap rate pricing.",
    typicalCost:
      "Typical commission: 4-6% of sale price (negotiable on larger transactions), paid by seller at closing.",
    worksWith: [
      "qualified-intermediary",
      "commercial-real-estate-attorney",
      "title-company",
      "commercial-appraiser",
    ],
  },

  // LEGAL & TRANSACTIONAL
  {
    slug: "commercial-real-estate-attorney",
    title: "Commercial Real Estate Attorney",
    category: "Legal & Transactional",
    shortDescription:
      "Attorney who drafts and negotiates purchase agreements, leases, and closing documents for commercial transactions.",
    metaDescription:
      "What does a commercial real estate attorney do? Learn how CRE attorneys handle purchase agreements, leases, title review, and closings in Florida.",
    whatTheyDo:
      "A commercial real estate attorney is central to every commercial transaction. They draft and negotiate Purchase and Sale Agreements (PSAs), review title commitments and surveys, negotiate leases, handle entity formation, and represent clients at closing. Commercial deals are far more legally complex than residential — the attorney essentially quarterbacks the paperwork from LOI through closing.",
    keyResponsibilities: [
      "Draft and negotiate Purchase and Sale Agreements (PSAs)",
      "Review title commitments, surveys, and exceptions",
      "Negotiate commercial leases and lease amendments",
      "Review and draft easements, declarations, and covenants",
      "Form single-purpose LLCs and JV operating agreements",
      "Coordinate closings with title company and lender counsel",
    ],
    whenNeeded:
      "Immediately after LOI signing and before PSA drafting. Commercial attorneys should be engaged at the LOI stage to protect client interests from the start.",
    howWeWork:
      "MaxLife Development has established relationships with experienced Florida commercial real estate attorneys who handle NNN acquisitions, development deals, and investor entity structuring. We coordinate closely with your attorney throughout the transaction.",
    typicalCost:
      "Hourly rates ($300-$600/hr) or flat fees ($3,500-$15,000+ for typical transactions depending on complexity).",
    worksWith: ["title-company", "qualified-intermediary", "land-use-attorney"],
  },
  {
    slug: "land-use-attorney",
    title: "Land Use & Zoning Attorney",
    category: "Legal & Transactional",
    shortDescription:
      "Attorney specializing in zoning, entitlements, variances, and land development approvals at the municipal level.",
    metaDescription:
      "What does a land use attorney do? Learn how zoning attorneys handle entitlements, variances, and land development approvals in Florida.",
    whatTheyDo:
      "A land use attorney specializes in the regulatory side of real estate — zoning, comprehensive plan amendments, variances, conditional use permits, and development agreements. They navigate city and county approval processes, represent clients at planning commission and city council hearings, and manage entitlement strategies for complex development projects. In Florida, they also handle concurrency, impact fees, and DRI processes.",
    keyResponsibilities: [
      "Zoning verification and rezoning petitions",
      "Variance and conditional use applications",
      "Comprehensive plan amendments",
      "Development agreements with municipalities",
      "Representation at planning commission and city council",
      "Concurrency, impact fee, and mobility fee negotiation",
    ],
    whenNeeded:
      "Before closing on land that needs rezoning or entitlements, when pursuing a use not currently permitted, or when a development requires variances or special approvals.",
    howWeWork:
      "MaxLife Development works with experienced Florida land use counsel on our development projects, especially when entitlements or rezoning are part of the deal structure. Early engagement is critical — entitlement timelines drive acquisition strategy.",
    typicalCost:
      "Hourly rates plus municipal filing fees. Complex entitlement projects can range from $10,000 to $100,000+ depending on scope.",
    worksWith: [
      "commercial-real-estate-developer",
      "civil-engineer",
      "land-surveyor",
    ],
  },
  {
    slug: "title-company",
    title: "Title Company & Closing Agent",
    category: "Legal & Transactional",
    shortDescription:
      "Handles title insurance, escrow, closing coordination, and recording of commercial real estate transactions.",
    metaDescription:
      "What does a commercial title company do? Learn about title insurance, escrow, and closing coordination for commercial real estate transactions in Florida.",
    whatTheyDo:
      "A title company examines property ownership records, issues title insurance policies (both owner's and lender's), holds earnest money in escrow, prepares the closing statement, coordinates the closing, and records the deed and mortgage after funding. For commercial deals, title review is far more intensive than residential — examining easements, restrictions, liens, and encumbrances.",
    keyResponsibilities: [
      "Examine title history and issue title commitments",
      "Issue owner's and lender's title insurance policies",
      "Hold earnest money and escrow funds",
      "Prepare closing statements and prorations",
      "Coordinate closing with all parties",
      "Record deed, mortgage, and other instruments",
    ],
    whenNeeded:
      "Immediately upon executing a Purchase and Sale Agreement. The title commitment is ordered in the first week of due diligence to allow time for curative work on any exceptions.",
    howWeWork:
      "MaxLife Development works with established Central Florida title companies that understand commercial transaction complexity and can turn around ALTA commitments, surveys, and closings on developer timelines.",
    typicalCost:
      "Title insurance premium is based on transaction value (approximately 0.5% of purchase price in Florida). Closing fees are additional ($500-$2,500+).",
    worksWith: [
      "commercial-real-estate-attorney",
      "commercial-real-estate-broker",
      "land-surveyor",
    ],
  },
  {
    slug: "qualified-intermediary",
    title: "1031 Qualified Intermediary",
    category: "Legal & Transactional",
    shortDescription:
      "A neutral third party that holds 1031 exchange proceeds and facilitates tax-deferred property exchanges.",
    metaDescription:
      "What is a 1031 qualified intermediary? Learn how QIs facilitate tax-deferred exchanges, hold exchange funds, and help investors defer capital gains.",
    whatTheyDo:
      "A qualified intermediary (QI), also called an accommodator or exchange facilitator, is a neutral third party required by the IRS to facilitate a 1031 like-kind exchange. The QI holds the proceeds from the sale of the relinquished property (so the investor never touches the funds), prepares exchange documents, and releases funds to purchase the replacement property within the 45-day identification and 180-day closing deadlines.",
    keyResponsibilities: [
      "Prepare 1031 exchange documentation (Exchange Agreement, Assignment)",
      "Hold sale proceeds in a qualified escrow or trust account",
      "Track 45-day identification and 180-day closing deadlines",
      "Coordinate with buyer, seller, and title company on both sides",
      "File IRS Form 8824 documentation",
      "Advise on reverse and improvement exchange structures",
    ],
    whenNeeded:
      "Before closing on the sale of the relinquished property. A QI must be engaged prior to the sale — investors cannot take constructive receipt of proceeds and still qualify for 1031 treatment.",
    howWeWork:
      "MaxLife Development coordinates with top national and Florida-based qualified intermediaries to structure 1031 exchanges for NNN buyers and sellers. We help investors identify replacement properties within the 45-day window.",
    typicalCost:
      "Flat fee per exchange: $800-$1,500 for standard forward exchanges; $4,000-$10,000+ for reverse or improvement exchanges.",
    worksWith: [
      "commercial-real-estate-attorney",
      "investment-sales-broker",
      "cpa-tax-advisor",
    ],
  },

  // FINANCE & VALUATION
  {
    slug: "commercial-mortgage-broker",
    title: "Commercial Mortgage Broker",
    category: "Finance & Valuation",
    shortDescription:
      "Licensed professional who sources and structures commercial real estate loans from banks, CMBS, bridge, and SBA lenders.",
    metaDescription:
      "What does a commercial mortgage broker do? Learn how CRE mortgage brokers source loans from banks, CMBS, SBA, and bridge lenders for commercial properties.",
    whatTheyDo:
      "A commercial mortgage broker shops a borrower's loan request across a network of lenders — banks, credit unions, CMBS platforms, life companies, SBA lenders, and bridge lenders — to find the most competitive terms. Unlike residential loan officers who work for a single lender, commercial mortgage brokers have access to dozens of capital sources and structure loans based on property fundamentals and sponsor strength.",
    keyResponsibilities: [
      "Analyze the property, sponsor, and loan request",
      "Structure optimal loan (rate, leverage, term, recourse)",
      "Shop the deal to a network of commercial lenders",
      "Prepare loan packages and financial statements",
      "Manage the underwriting process through approval",
      "Coordinate loan document review and closing conditions",
    ],
    whenNeeded:
      "Before or shortly after an LOI is accepted. Financing contingencies in the PSA require a committed timeline — engaging a broker early ensures the loan is underwritten in parallel with due diligence.",
    howWeWork:
      "MaxLife Development (NMLS #1784218) is a licensed mortgage loan originator for commercial real estate. We source loans for NNN acquisitions, construction projects, and portfolio financings across our network of Florida banks and national lenders.",
    typicalCost:
      "Typical origination fee: 0.5%-1% of loan amount, paid at closing. Some brokers earn yield spread from the lender instead.",
    worksWith: [
      "commercial-lender",
      "commercial-appraiser",
      "commercial-real-estate-attorney",
      "environmental-consultant",
    ],
  },
  {
    slug: "commercial-lender",
    title: "Commercial Lender (Banker)",
    category: "Finance & Valuation",
    shortDescription:
      "Bank or institutional lender who underwrites and funds commercial real estate loans.",
    metaDescription:
      "What does a commercial lender do? Learn how commercial bankers underwrite CRE loans and what they look for in NNN, development, and investment property deals.",
    whatTheyDo:
      "A commercial lender is a representative of a bank, credit union, or non-bank lender who underwrites and funds commercial real estate loans. They evaluate the property's income-producing capability (DSCR, NOI, cap rate), the sponsor's experience and financial strength, and structure the loan terms. For construction loans, they also manage the draw process.",
    keyResponsibilities: [
      "Evaluate loan requests and issue term sheets",
      "Order appraisals and Phase I ESAs",
      "Underwrite the property and sponsor financials",
      "Issue loan commitments and coordinate closings",
      "Administer construction draws during development",
      "Service the loan and monitor covenants post-closing",
    ],
    whenNeeded:
      "Once a term sheet is accepted and due diligence is underway. The lender orders third-party reports (appraisal, Phase I, survey) and underwrites the deal in parallel with buyer due diligence.",
    howWeWork:
      "MaxLife Development maintains relationships with Florida community banks, regional banks, credit unions, and national CMBS platforms to match each deal with the right capital source — from bank portfolio loans for local deals to CMBS for larger stabilized assets.",
    worksWith: [
      "commercial-mortgage-broker",
      "commercial-appraiser",
      "environmental-consultant",
    ],
  },
  {
    slug: "commercial-appraiser",
    title: "Commercial Appraiser",
    category: "Finance & Valuation",
    shortDescription:
      "Licensed professional who values commercial properties using income, sales comparison, and cost approaches.",
    metaDescription:
      "What does a commercial appraiser do? Learn how CRE appraisers value investment, development, and income-producing properties using three approaches to value.",
    whatTheyDo:
      "A commercial appraiser is a state-certified professional who produces an independent opinion of value for commercial property — used by lenders, investors, tax authorities, and courts. Commercial appraisals use three approaches: income approach (cap rate applied to NOI), sales comparison (recent comparable sales), and cost approach (replacement cost minus depreciation). For income-producing properties, the income approach is typically the primary basis.",
    keyResponsibilities: [
      "Inspect the property and analyze physical condition",
      "Research comparable sales, leases, and market data",
      "Apply income, sales comparison, and cost approaches",
      "Reconcile approaches to a final opinion of value",
      "Produce a narrative report meeting USPAP standards",
      "Support valuations in litigation or tax appeals if needed",
    ],
    whenNeeded:
      "During lender underwriting (lender orders appraisal). Also for tax appeals, estate planning, buyout situations, and pre-listing valuation strategy.",
    howWeWork:
      "MaxLife Development works with experienced Florida commercial appraisers for pre-listing valuations and due diligence support. We help clients understand the appraisal process and what drives value in different property types.",
    typicalCost:
      "$2,500-$10,000+ depending on property type and complexity. Large or specialized assets can cost more.",
    worksWith: ["commercial-lender", "commercial-mortgage-broker"],
  },
  {
    slug: "cpa-tax-advisor",
    title: "CPA / Real Estate Tax Advisor",
    category: "Finance & Valuation",
    shortDescription:
      "Accountant specializing in real estate tax strategy, depreciation, 1031 exchanges, and investor tax planning.",
    metaDescription:
      "What does a real estate CPA do? Learn how tax advisors help investors with depreciation, 1031 exchanges, cost segregation, and entity structuring.",
    whatTheyDo:
      "A real estate CPA or tax advisor specializes in the unique tax rules that apply to commercial real estate — depreciation, bonus depreciation, cost segregation studies, 1031 exchanges, opportunity zones, passive activity rules, and entity-level tax planning. For active investors and developers, a strong real estate CPA can save six or seven figures in taxes over the life of a portfolio.",
    keyResponsibilities: [
      "Advise on entity structure (LLC, partnership, REIT, etc.)",
      "Coordinate cost segregation studies for bonus depreciation",
      "Structure 1031 exchanges with qualified intermediaries",
      "Manage K-1s and investor-level tax reporting",
      "Prepare depreciation schedules and tax returns",
      "Advise on opportunity zones and other tax incentives",
    ],
    whenNeeded:
      "Before any significant real estate transaction. Tax planning is most effective before a deal closes — not after.",
    howWeWork:
      "MaxLife Development refers clients to experienced Florida real estate CPAs for tax structuring on NNN acquisitions, development projects, and 1031 exchanges.",
    worksWith: ["qualified-intermediary", "commercial-real-estate-attorney"],
  },

  // DEVELOPMENT & CONSTRUCTION
  {
    slug: "commercial-real-estate-developer",
    title: "Commercial Real Estate Developer",
    category: "Development & Construction",
    shortDescription:
      "The principal who sources land, secures tenants, arranges financing, manages construction, and delivers commercial properties.",
    metaDescription:
      "What does a commercial real estate developer do? Learn how CRE developers source land, secure tenants, finance construction, and build commercial properties.",
    whatTheyDo:
      "A commercial real estate developer is the principal entrepreneur behind a commercial project. They identify opportunities, source land, secure tenants, arrange financing, manage the entitlement and construction process, and ultimately deliver a finished asset. Developers take on significant risk and capture the development spread between all-in cost and stabilized value. For NNN build-to-suit developers, the business model is: secure a credit tenant, build the property, sell to a passive investor at a stabilized cap rate.",
    keyResponsibilities: [
      "Source and underwrite development opportunities",
      "Secure tenants with executed LOIs and leases",
      "Acquire land with contingency-protected contracts",
      "Arrange equity and construction financing",
      "Manage entitlements, permitting, and construction",
      "Deliver the completed property to the tenant and sell to an investor",
    ],
    whenNeeded:
      "When ground-up commercial construction is the goal. Developers are typically the principal on a deal — hiring GCs, architects, attorneys, and brokers to execute.",
    howWeWork:
      "MaxLife Development operates a full NNN build-to-suit development model across Florida — from site identification through disposition. Read more on our commercial development page.",
    worksWith: [
      "general-contractor",
      "civil-engineer",
      "architect",
      "tenant-representation-broker",
      "commercial-mortgage-broker",
    ],
  },
  {
    slug: "general-contractor",
    title: "General Contractor",
    category: "Development & Construction",
    shortDescription:
      "Licensed construction firm that manages the day-to-day building process — scheduling, subcontractors, budget, and quality.",
    metaDescription:
      "What does a commercial general contractor do? Learn how GCs manage construction, subcontractors, budgets, and timelines for commercial projects in Florida.",
    whatTheyDo:
      "A general contractor (GC) is the construction firm responsible for executing the build. They manage subcontractors (electrical, plumbing, HVAC, framing, concrete, etc.), order materials, schedule work, manage the budget, and coordinate with inspectors and the owner. For NNN retail, GCs typically work on Guaranteed Maximum Price (GMP) contracts — where the GC caps cost overruns and shares savings with the owner.",
    keyResponsibilities: [
      "Bid and price the construction package",
      "Hire and manage subcontractors",
      "Order materials and manage supply chain",
      "Schedule work and manage timelines",
      "Submit pay applications (AIA G702/G703 forms)",
      "Coordinate inspections and punch list resolution",
    ],
    whenNeeded:
      "During the competitive bidding phase, typically 60-90 days before construction start. Early engagement of GCs during design can identify cost savings (value engineering).",
    howWeWork:
      "MaxLife Development partners with experienced Florida commercial GCs who have NNN retail build-to-suit experience. We vet bids carefully — the lowest price is rarely the best value.",
    typicalCost:
      "GC fee typically 5-10% of construction cost. Total NNN retail construction cost ranges from $150-$300+/SF depending on tenant type.",
    worksWith: [
      "architect",
      "civil-engineer",
      "mep-engineer",
      "commercial-real-estate-developer",
    ],
  },
  {
    slug: "construction-manager",
    title: "Construction Manager / Owner's Rep",
    category: "Development & Construction",
    shortDescription:
      "Owner's representative who oversees construction on behalf of the developer — managing the GC, budget, and schedule.",
    metaDescription:
      "What does a construction manager do? Learn how owner's representatives oversee GCs, manage budgets, and protect developer interests during commercial construction.",
    whatTheyDo:
      "A construction manager (CM) or owner's representative is hired by the developer to oversee construction from the owner's perspective. They review GC pay applications, approve change orders, manage the construction schedule, coordinate inspections, and protect the owner's interests. CMs are especially valuable for owners who don't have in-house construction expertise or who are managing projects remotely.",
    keyResponsibilities: [
      "Review and approve GC pay applications",
      "Evaluate change order requests",
      "Monitor construction schedule and budget",
      "Coordinate third-party inspections",
      "Serve as the owner's eyes on-site",
      "Manage lender draw process and documentation",
    ],
    whenNeeded:
      "On larger or more complex projects, or when the developer doesn't have direct construction expertise. Often engaged at GMP contract signing.",
    howWeWork:
      "MaxLife Development provides construction oversight directly on our own projects. We also coordinate with qualified CMs on behalf of investor clients who are financing development deals.",
    typicalCost:
      "Fee-based: 2-5% of construction cost, or hourly rates for smaller engagements.",
    worksWith: ["general-contractor", "commercial-real-estate-developer"],
  },

  // ENGINEERING & DESIGN
  {
    slug: "civil-engineer",
    title: "Civil Engineer",
    category: "Engineering & Design",
    shortDescription:
      "Designs site plans, grading, drainage, utilities, and stormwater systems for commercial projects.",
    metaDescription:
      "What does a civil engineer do on a commercial real estate project? Learn how civil engineers design site plans, grading, drainage, and utilities.",
    whatTheyDo:
      "A civil engineer designs the site-level infrastructure for a commercial development — site plans, grading, drainage, stormwater management, utility connections (water, sewer, storm), driveways, and parking layouts. In Florida, civil engineers also manage stormwater permitting, concurrency, and coordination with water management districts. They're essential for any ground-up development.",
    keyResponsibilities: [
      "Produce site plans, grading, and drainage design",
      "Design stormwater management systems (SWMs)",
      "Coordinate utility connections and extensions",
      "Prepare engineering drawings for permitting",
      "Submit plans to municipal and water district review",
      "Provide construction administration support",
    ],
    whenNeeded:
      "Early in the entitlement process — civil engineering is required for site plan approval and building permits. Typically engaged right after the land is under contract.",
    howWeWork:
      "MaxLife Development works with established Florida civil engineering firms who understand local stormwater, concurrency, and utility coordination. Early engagement reduces entitlement timelines.",
    typicalCost:
      "$15,000-$75,000+ depending on project complexity. Stormwater permits add additional cost.",
    worksWith: [
      "architect",
      "land-surveyor",
      "land-use-attorney",
      "commercial-real-estate-developer",
    ],
  },
  {
    slug: "architect",
    title: "Architect",
    category: "Engineering & Design",
    shortDescription:
      "Designs building layout, elevations, and construction documents. Coordinates MEP engineering and building code compliance.",
    metaDescription:
      "What does a commercial architect do? Learn how architects design commercial buildings, prepare construction documents, and coordinate engineering consultants.",
    whatTheyDo:
      "A licensed architect designs the building itself — floor plans, elevations, sections, and construction details. They coordinate MEP (mechanical, electrical, plumbing) engineers, structural engineers, and specialty consultants to produce a complete set of construction documents. Architects also manage building code compliance, ADA, and Florida Building Code requirements.",
    keyResponsibilities: [
      "Design building layout and elevations",
      "Produce full construction documents (CDs)",
      "Coordinate MEP, structural, and specialty consultants",
      "Manage building code and ADA compliance",
      "Submit plans for building permit review",
      "Provide construction administration services",
    ],
    whenNeeded:
      "After the civil engineer produces the site plan, or in parallel for larger projects. Architects are critical for tenant-specific build-outs (QSR, pharmacy, medical) where prototype designs must be adapted to each site.",
    howWeWork:
      "MaxLife Development partners with Florida commercial architects experienced in NNN retail, QSR, medical office, and industrial projects. Many NNN tenants require specific architectural prototypes.",
    typicalCost:
      "5-10% of construction cost, or fixed fees for prototype adaptations.",
    worksWith: [
      "civil-engineer",
      "mep-engineer",
      "general-contractor",
      "commercial-real-estate-developer",
    ],
  },
  {
    slug: "land-surveyor",
    title: "Land Surveyor",
    category: "Engineering & Design",
    shortDescription:
      "Licensed professional who produces boundary surveys, ALTA surveys, and topographic surveys for commercial properties.",
    metaDescription:
      "What does a land surveyor do? Learn about ALTA surveys, boundary surveys, and topographic surveys required for commercial real estate transactions.",
    whatTheyDo:
      "A licensed land surveyor produces the legal documentation of property boundaries, improvements, easements, encroachments, and topography. The ALTA/NSPS Land Title Survey is the gold standard for commercial transactions — required by most commercial lenders and title insurers. Surveyors also produce topographic surveys for civil engineering and boundary surveys for smaller transactions.",
    keyResponsibilities: [
      "Produce ALTA/NSPS Land Title Surveys",
      "Create topographic surveys for site design",
      "Identify easements, encroachments, and setbacks",
      "Verify legal descriptions and boundary lines",
      "Produce exhibit surveys for easements and documents",
      "Support construction staking and as-built surveys",
    ],
    whenNeeded:
      "During due diligence on any commercial acquisition requiring lender financing. Also for site design (topographic survey) and post-construction as-builts.",
    howWeWork:
      "MaxLife Development engages Florida licensed surveyors for ALTA surveys on NNN acquisitions and topographic surveys for development projects.",
    typicalCost:
      "ALTA surveys: $3,500-$15,000+ depending on size and Table A items.",
    worksWith: [
      "civil-engineer",
      "commercial-real-estate-attorney",
      "title-company",
    ],
  },
  {
    slug: "geotechnical-engineer",
    title: "Geotechnical Engineer",
    category: "Engineering & Design",
    shortDescription:
      "Tests soil conditions, bearing capacity, and groundwater to inform foundation design.",
    metaDescription:
      "What does a geotechnical engineer do? Learn how soil borings and geotechnical reports inform foundation design for commercial construction.",
    whatTheyDo:
      "A geotechnical engineer evaluates subsurface conditions — soil type, bearing capacity, groundwater levels, compaction requirements — through soil borings and laboratory testing. Their report informs foundation design, floor slab requirements, and any special considerations (pile foundations, soil stabilization, dewatering). In Florida, geotech is especially important due to high water tables and karst geology.",
    keyResponsibilities: [
      "Conduct soil borings (typically 4-8 borings per site)",
      "Perform laboratory testing on soil samples",
      "Evaluate bearing capacity and compaction",
      "Identify groundwater and drainage considerations",
      "Recommend foundation type and depth",
      "Advise on special conditions (karst, organics, peat)",
    ],
    whenNeeded:
      "During due diligence for development deals, or at the start of design for build-to-suit projects. Required for building permits in Florida.",
    howWeWork:
      "MaxLife Development coordinates geotechnical investigations on our development projects. Florida's varied soil conditions make this critical — especially in Central and South Florida.",
    typicalCost:
      "$3,500-$15,000 for typical commercial geotech reports.",
    worksWith: ["civil-engineer", "architect", "general-contractor"],
  },
  {
    slug: "mep-engineer",
    title: "MEP Engineer",
    category: "Engineering & Design",
    shortDescription:
      "Designs mechanical, electrical, and plumbing systems for commercial buildings.",
    metaDescription:
      "What does an MEP engineer do? Learn how mechanical, electrical, and plumbing engineers design building systems for commercial construction.",
    whatTheyDo:
      "MEP engineers design the mechanical (HVAC), electrical, and plumbing systems in a commercial building. They size equipment, lay out ductwork and piping, calculate electrical loads and service requirements, and coordinate with the architect and structural engineer. For specialized tenants (medical, food service, dialysis), MEP design is critical to meet operational requirements.",
    keyResponsibilities: [
      "Size HVAC equipment and design duct layouts",
      "Lay out electrical service, panels, and distribution",
      "Design plumbing, drainage, and water systems",
      "Coordinate with architect and structural engineer",
      "Meet energy code and sustainability requirements",
      "Produce CDs and support permit applications",
    ],
    whenNeeded:
      "After schematic design, in coordination with the architect. Typically part of the full A/E team on any commercial project.",
    howWeWork:
      "MaxLife Development works with MEP engineers as part of the integrated A/E team on our development projects, especially for tenants requiring specialized building systems.",
    worksWith: ["architect", "general-contractor", "civil-engineer"],
  },

  // DUE DILIGENCE
  {
    slug: "environmental-consultant",
    title: "Environmental Consultant (Phase I / II ESA)",
    category: "Due Diligence",
    shortDescription:
      "Conducts environmental site assessments (ESAs) to identify contamination risks and environmental liability.",
    metaDescription:
      "What is a Phase I Environmental Site Assessment? Learn how environmental consultants identify contamination risks during commercial real estate due diligence.",
    whatTheyDo:
      "An environmental consultant performs Phase I Environmental Site Assessments (ESAs) — a records-based investigation reviewing historical aerials, government databases, and conducting a site visit to identify Recognized Environmental Conditions (RECs). If the Phase I identifies potential contamination, a Phase II ESA involves actual soil and groundwater sampling and lab analysis. Almost every commercial lender requires a Phase I at minimum.",
    keyResponsibilities: [
      "Conduct Phase I ESA per ASTM E1527-21 standard",
      "Review historical aerial photographs and records",
      "Check federal, state, and tribal environmental databases",
      "Perform on-site inspection and interviews",
      "Identify Recognized Environmental Conditions (RECs)",
      "Conduct Phase II ESA sampling and lab testing if needed",
    ],
    whenNeeded:
      "During due diligence on virtually every commercial acquisition — typically required by lenders and strongly recommended even for cash deals (to limit CERCLA liability).",
    howWeWork:
      "MaxLife Development coordinates Phase I ESAs with Florida environmental consultants on every acquisition and development deal. Early engagement reduces the risk of surprise issues.",
    typicalCost:
      "Phase I: $2,500-$4,500 typical. Phase II: $10,000-$50,000+ depending on scope.",
    worksWith: [
      "commercial-lender",
      "commercial-real-estate-attorney",
      "civil-engineer",
    ],
  },
  {
    slug: "property-inspector",
    title: "Commercial Property Inspector",
    category: "Due Diligence",
    shortDescription:
      "Conducts Property Condition Assessments (PCAs) to evaluate building systems, structure, and maintenance needs.",
    metaDescription:
      "What is a Property Condition Assessment (PCA)? Learn how commercial property inspectors evaluate existing commercial buildings during due diligence.",
    whatTheyDo:
      "A commercial property inspector produces a Property Condition Assessment (PCA) — far more comprehensive than a residential inspection. They evaluate the structure, roof, HVAC, plumbing, electrical, parking lot, and site improvements. The report identifies immediate repair needs and projects capital expenditures over a 10-12 year horizon. Often required by lenders on existing commercial properties.",
    keyResponsibilities: [
      "Inspect structural components and envelope",
      "Evaluate roof condition and remaining useful life",
      "Assess HVAC, plumbing, and electrical systems",
      "Inspect parking lot, landscaping, and site improvements",
      "Project capital expenditures over 10-12 years",
      "Produce a narrative PCA report (ASTM E2018)",
    ],
    whenNeeded:
      "During due diligence on acquisitions of existing commercial buildings. Required by most commercial lenders.",
    howWeWork:
      "MaxLife Development coordinates PCAs with qualified inspectors on every acquisition of an existing building. The PCA often uncovers deferred maintenance that becomes a negotiation point.",
    typicalCost:
      "$3,500-$15,000 depending on building size and complexity.",
    worksWith: ["commercial-lender", "commercial-real-estate-attorney"],
  },
  {
    slug: "traffic-engineer",
    title: "Traffic Engineer",
    category: "Due Diligence",
    shortDescription:
      "Analyzes traffic counts, signalization, and access for commercial development site selection.",
    metaDescription:
      "What does a traffic engineer do for commercial real estate? Learn how traffic studies, ADT counts, and signalization impact site selection and approvals.",
    whatTheyDo:
      "A traffic engineer analyzes vehicle counts (AADT), signalization, access points, and trip generation for commercial properties. They produce traffic impact studies (TIS) required for development approvals and help developers identify optimal pad sites. Most national tenants have minimum ADT thresholds — a traffic engineer validates whether a site meets tenant requirements before acquisition.",
    keyResponsibilities: [
      "Collect and analyze traffic count data (AADT)",
      "Conduct traffic impact studies (TIS) for entitlements",
      "Evaluate access, signalization, and turn lanes",
      "Calculate ITE trip generation for proposed uses",
      "Coordinate with FDOT on state roadway issues",
      "Support site selection with traffic analysis",
    ],
    whenNeeded:
      "During site selection to validate tenant requirements. Also during entitlements when a TIS is required by the municipality.",
    howWeWork:
      "MaxLife Development uses FDOT Florida Traffic Online and municipal data for site selection, engaging traffic engineers for formal TIS when required for entitlements.",
    typicalCost:
      "TIS: $5,000-$25,000+ depending on scope and FDOT review requirements.",
    worksWith: [
      "civil-engineer",
      "land-use-attorney",
      "commercial-real-estate-developer",
    ],
  },

  // OPERATIONS & MANAGEMENT
  {
    slug: "property-manager",
    title: "Commercial Property Manager",
    category: "Operations & Management",
    shortDescription:
      "Manages day-to-day operations of commercial property — tenant relations, maintenance, billing, and leasing.",
    metaDescription:
      "What does a commercial property manager do? Learn how CRE property managers handle tenant relations, maintenance, billing, and lease administration.",
    whatTheyDo:
      "A commercial property manager handles the day-to-day operations of a commercial property — tenant relations, maintenance coordination, rent collection, CAM reconciliation, vendor management, lease administration, and financial reporting. For NNN properties, property management is minimal (tenant handles everything), but for multi-tenant or landlord-responsible properties, professional management is essential.",
    keyResponsibilities: [
      "Collect rent and manage receivables",
      "Coordinate maintenance and vendor contracts",
      "Handle tenant communications and issues",
      "Manage CAM reconciliations and pass-throughs",
      "Prepare monthly financial reports",
      "Administer leases and manage renewals",
    ],
    whenNeeded:
      "After acquiring a commercial property with active operations. For NNN-leased single-tenant properties, this is often unnecessary.",
    howWeWork:
      "MaxLife Development provides commercial property management services across Central Florida for owners who want hands-on local oversight of their assets.",
    typicalCost:
      "Typically 3-6% of gross collected rent, plus leasing commissions on new deals and renewals.",
    worksWith: ["asset-manager", "commercial-real-estate-broker"],
  },
  {
    slug: "asset-manager",
    title: "Commercial Asset Manager",
    category: "Operations & Management",
    shortDescription:
      "Strategic manager of a commercial real estate portfolio — oversees property managers, financial performance, and disposition strategy.",
    metaDescription:
      "What does a commercial asset manager do? Learn how asset managers oversee CRE portfolios, manage performance, and execute hold/sell strategies.",
    whatTheyDo:
      "An asset manager takes a portfolio-level view of commercial real estate holdings — oversees property managers, monitors financial performance, makes hold/sell decisions, coordinates refinances, and executes value-add strategies. While property management is tactical, asset management is strategic. Large owners and institutional investors rely heavily on asset managers.",
    keyResponsibilities: [
      "Set strategic direction for each asset",
      "Oversee property manager performance",
      "Monitor financial performance and budgets",
      "Execute refinancing and recapitalization",
      "Manage disposition timing and strategy",
      "Report to investors and capital partners",
    ],
    whenNeeded:
      "For investors or owners holding multiple properties who want strategic portfolio oversight. Also essential for funds, family offices, and institutional owners.",
    howWeWork:
      "MaxLife Development provides strategic asset management services for Florida CRE portfolios, coordinating with local property managers and leasing brokers to maximize performance.",
    worksWith: ["property-manager", "investment-sales-broker"],
  },
  {
    slug: "commercial-insurance-broker",
    title: "Commercial Insurance Broker",
    category: "Operations & Management",
    shortDescription:
      "Places property, liability, builder's risk, and umbrella insurance for commercial real estate.",
    metaDescription:
      "What does a commercial insurance broker do? Learn about property, liability, and builder's risk insurance for commercial real estate in Florida.",
    whatTheyDo:
      "A commercial insurance broker places the insurance policies required for commercial real estate ownership and development — property insurance (all-risk or named-peril), general liability, builder's risk for construction, umbrella, and flood. In Florida, placing insurance has become increasingly complex due to hurricane exposure and rising costs, especially in coastal markets.",
    keyResponsibilities: [
      "Shop commercial property insurance markets",
      "Place general liability and umbrella coverage",
      "Place builder's risk policies for construction",
      "Advise on flood and wind coverage in Florida",
      "Review certificates of insurance from tenants",
      "Manage claims when losses occur",
    ],
    whenNeeded:
      "Before closing on any acquisition (required by lenders and closing). Builder's risk is required before construction starts.",
    howWeWork:
      "MaxLife Development works with commercial insurance brokers experienced in Florida's challenging market — particularly on wind/flood coverage for coastal and Central Florida assets.",
    worksWith: ["commercial-real-estate-attorney", "commercial-lender"],
  },

  // ADDITIONAL SPECIALIZED ROLES

  {
    slug: "landlord-representation-broker",
    title: "Landlord Representation Broker",
    category: "Brokerage & Sales",
    shortDescription:
      "Commercial broker who represents property owners in leasing vacant space to tenants.",
    metaDescription:
      "What is a landlord rep broker? Learn how commercial leasing brokers fill vacant space, negotiate leases, and maximize rental income for property owners in Florida.",
    whatTheyDo:
      "A landlord representation broker (leasing broker) represents property owners in filling vacant commercial space. They market available space, qualify prospective tenants, negotiate lease terms, and manage the deal through execution. Leasing brokers are crucial for multi-tenant properties like retail centers, office buildings, and industrial parks — they keep the property occupied and maximize NOI.",
    keyResponsibilities: [
      "Market vacant space through online platforms, signage, and broker networks",
      "Qualify prospective tenants and verify financial capacity",
      "Negotiate lease economics: rent, escalations, TI, free rent",
      "Coordinate LOIs and turn them into executed leases",
      "Maintain relationships with tenant reps across the market",
      "Report leasing activity and market conditions to the owner",
    ],
    whenNeeded:
      "When a property has vacant space or upcoming lease expirations. Also when buying a multi-tenant asset with vacancy that needs to be stabilized post-closing.",
    howWeWork:
      "MaxLife Development handles landlord representation for Central Florida commercial properties, leveraging our tenant rep network and market knowledge to fill vacant space quickly at market rents.",
    typicalCost:
      "Typically 4-6% of total lease value, paid by landlord at lease execution.",
    worksWith: [
      "tenant-representation-broker",
      "property-manager",
      "commercial-real-estate-attorney",
    ],
  },
  {
    slug: "structural-engineer",
    title: "Structural Engineer",
    category: "Engineering & Design",
    shortDescription:
      "Designs the structural frame of commercial buildings — foundations, framing, load calculations.",
    metaDescription:
      "What does a structural engineer do for commercial construction? Learn how structural engineers design foundations, framing, and wind load systems in Florida.",
    whatTheyDo:
      "A structural engineer designs the load-bearing systems of a commercial building — foundations, columns, beams, walls, and roof framing. They calculate gravity, wind, and seismic loads, then specify the materials and member sizes required to safely support the structure. In Florida, structural engineers must design for high wind loads (hurricane zones) and specific Florida Building Code requirements.",
    keyResponsibilities: [
      "Design foundation systems (spread footings, slab-on-grade, piles)",
      "Size columns, beams, and structural framing",
      "Calculate wind, gravity, and live loads",
      "Design lateral systems (shear walls, braced frames)",
      "Coordinate with architect, civil, and MEP engineers",
      "Seal construction documents for permit submission",
    ],
    whenNeeded:
      "During design development, in parallel with architectural design. Their drawings are required for building permit review in Florida.",
    howWeWork:
      "MaxLife Development works with licensed Florida structural engineers as part of the A/E team on our development projects — especially important for Florida Building Code wind load compliance.",
    typicalCost:
      "Typically 1-2% of construction cost for typical commercial projects.",
    worksWith: ["architect", "civil-engineer", "geotechnical-engineer", "general-contractor"],
  },
  {
    slug: "permit-expediter",
    title: "Permit Expediter",
    category: "Development & Construction",
    shortDescription:
      "Specialist who navigates the permit approval process — tracking submissions, resolving comments, and speeding up approvals.",
    metaDescription:
      "What is a permit expediter? Learn how expediters navigate Florida building departments, track permit submissions, and speed up commercial approval timelines.",
    whatTheyDo:
      "A permit expediter is a specialist who manages the building permit and entitlement process on behalf of the developer. They know the submission requirements of each municipality, have relationships with building department staff, track applications through review, and respond to comments quickly. In complex Florida jurisdictions (like Miami-Dade or Orlando), an expediter can shave weeks or months off permit timelines.",
    keyResponsibilities: [
      "Prepare and submit building permit applications",
      "Navigate municipal, county, and state submission requirements",
      "Track applications through plan review and correction cycles",
      "Respond to building department comments quickly",
      "Coordinate concurrency, impact fee, and utility approvals",
      "Walk permits through final issuance",
    ],
    whenNeeded:
      "When construction documents are ready for permit submission, especially in jurisdictions known for slow or complex reviews. Early engagement saves time.",
    howWeWork:
      "MaxLife Development uses permit expediters on development projects in jurisdictions where municipal review can be a bottleneck. They pay for themselves in accelerated lease commencement dates.",
    typicalCost:
      "Flat fees of $2,500-$15,000+ depending on project size and jurisdiction complexity.",
    worksWith: ["architect", "civil-engineer", "land-use-attorney"],
  },
  {
    slug: "landscape-architect",
    title: "Landscape Architect",
    category: "Engineering & Design",
    shortDescription:
      "Designs site landscaping, irrigation, hardscape, and outdoor spaces for commercial properties.",
    metaDescription:
      "What does a landscape architect do for commercial real estate? Learn how landscape architects design outdoor spaces, meet code requirements, and enhance curb appeal.",
    whatTheyDo:
      "A landscape architect designs the outdoor environment around a commercial building — landscaping, irrigation, hardscape (sidewalks, patios), outdoor seating, and amenity spaces. In Florida, landscape architects also ensure compliance with local landscape codes (tree preservation, minimum plantings, buffer requirements) which are strictly enforced at site plan approval.",
    keyResponsibilities: [
      "Design landscape plans to meet municipal code requirements",
      "Specify native and drought-tolerant Florida plant materials",
      "Design irrigation systems (often required by code)",
      "Layout hardscape, walkways, and outdoor amenity areas",
      "Coordinate with civil engineer on site drainage",
      "Coordinate tree preservation and protection plans",
    ],
    whenNeeded:
      "During site plan development — landscape plans are required for site plan approval in virtually every Florida municipality.",
    howWeWork:
      "MaxLife Development works with licensed Florida landscape architects to ensure code compliance and to enhance the curb appeal of our development projects.",
    typicalCost:
      "$3,500-$15,000+ depending on site size and complexity.",
    worksWith: ["civil-engineer", "architect", "general-contractor"],
  },
  {
    slug: "fire-protection-engineer",
    title: "Fire Protection Engineer",
    category: "Engineering & Design",
    shortDescription:
      "Designs fire suppression, alarm systems, and life safety systems for commercial buildings.",
    metaDescription:
      "What does a fire protection engineer do? Learn how FPEs design sprinkler systems, fire alarms, and life safety for commercial buildings under Florida Building Code.",
    whatTheyDo:
      "A fire protection engineer designs the fire suppression (sprinkler) and life safety systems in commercial buildings — sprinklers, standpipes, fire pumps, alarm systems, smoke control, and egress. They ensure compliance with NFPA standards, Florida Building Code, and local fire marshal requirements. Essential on buildings over certain occupancy thresholds and always required for high-hazard uses.",
    keyResponsibilities: [
      "Design sprinkler and standpipe systems per NFPA 13/14",
      "Specify fire pumps and water supply requirements",
      "Design fire alarm systems per NFPA 72",
      "Coordinate smoke control and egress with architect",
      "Submit plans to fire marshal and AHJ for review",
      "Support commissioning and final inspections",
    ],
    whenNeeded:
      "During design for any commercial building requiring fire suppression — typically buildings over 5,000 SF, high-piled storage, or with specific occupancy classifications.",
    howWeWork:
      "MaxLife Development includes fire protection engineering as part of the A/E team on our commercial development projects, coordinated with the architect and MEP engineer.",
    worksWith: ["architect", "mep-engineer", "general-contractor"],
  },
  {
    slug: "real-estate-syndicator",
    title: "Real Estate Syndicator / Sponsor",
    category: "Finance & Valuation",
    shortDescription:
      "Principal who raises equity from investors and manages commercial real estate deals or funds.",
    metaDescription:
      "What is a real estate syndicator? Learn how sponsors raise equity from LPs, structure SPVs, and manage commercial real estate investments.",
    whatTheyDo:
      "A real estate syndicator (or sponsor / GP) raises equity capital from passive investors (LPs) to acquire or develop commercial real estate. The syndicator is responsible for sourcing deals, underwriting, raising capital, closing, managing the asset, and ultimately returning capital to investors at exit. They typically earn acquisition fees, asset management fees, and carried interest on the profits.",
    keyResponsibilities: [
      "Source and underwrite investment opportunities",
      "Prepare offering memorandums and PPMs",
      "Raise equity from LPs (accredited investors, funds, family offices)",
      "Structure SPVs and JV operating agreements",
      "Close and manage the asset throughout the hold",
      "Report to investors and execute the exit",
    ],
    whenNeeded:
      "When a deal requires more equity than the principal can invest alone, or when scaling from single deals to a programmatic investment strategy.",
    howWeWork:
      "MaxLife Development partners with syndicators and sponsors to source deals, arrange financing, and execute acquisitions. We also sponsor our own deals for select investor partners.",
    worksWith: [
      "commercial-real-estate-attorney",
      "cpa-tax-advisor",
      "commercial-mortgage-broker",
    ],
  },
  {
    slug: "debt-capital-markets-advisor",
    title: "Debt Capital Markets Advisor",
    category: "Finance & Valuation",
    shortDescription:
      "Specialist who places large or complex commercial loans with institutional debt sources.",
    metaDescription:
      "What does a debt capital markets advisor do? Learn how DCM advisors place large commercial loans with CMBS, life companies, and institutional lenders.",
    whatTheyDo:
      "A debt capital markets (DCM) advisor is a senior commercial finance professional who places larger, more complex commercial loans — typically $10M+. They work across CMBS, life insurance companies, debt funds, balance sheet lenders, and mezzanine. Unlike a commercial mortgage broker focused on bank loans, DCM advisors specialize in institutional-quality debt with more sophisticated structuring.",
    keyResponsibilities: [
      "Structure complex loan packages for institutional placement",
      "Access CMBS, life company, and debt fund lenders",
      "Arrange mezzanine, preferred equity, and stretch senior debt",
      "Negotiate covenants, recourse, and prepayment terms",
      "Manage dual-track and auction-style financing processes",
      "Coordinate legal and rating agency reviews for securitized debt",
    ],
    whenNeeded:
      "On larger transactions ($10M+), stabilized institutional-quality assets, or complex capital stacks that need multiple debt layers.",
    howWeWork:
      "MaxLife Development coordinates with DCM advisors on larger portfolio deals and institutional-scale acquisitions where the debt structure requires institutional expertise.",
    worksWith: ["commercial-mortgage-broker", "commercial-real-estate-attorney"],
  },
  {
    slug: "commercial-roofing-contractor",
    title: "Commercial Roofing Contractor",
    category: "Development & Construction",
    shortDescription:
      "Licensed contractor specializing in commercial roof installation, repair, and replacement.",
    metaDescription:
      "What does a commercial roofing contractor do? Learn about TPO, modified bitumen, and metal roofing for commercial buildings in Florida's hurricane climate.",
    whatTheyDo:
      "A commercial roofing contractor installs, repairs, and replaces commercial roofing systems — TPO, EPDM, modified bitumen, metal, and built-up roofs. In Florida, they must meet strict hurricane wind uplift standards and install code-compliant systems. Roofing is often the largest single maintenance expense on a commercial property, so roofing contractor selection matters.",
    keyResponsibilities: [
      "Install new commercial roof systems",
      "Repair and maintain existing roofs",
      "Conduct roof condition assessments and remaining life reports",
      "Install hurricane-rated systems per Florida Building Code",
      "Manage warranty claims and manufacturer registrations",
      "Coordinate with insurance for storm damage claims",
    ],
    whenNeeded:
      "During construction for new buildings. Also for roof replacements or repairs on existing assets, and after hurricane/storm damage.",
    howWeWork:
      "MaxLife Development engages qualified Florida commercial roofing contractors for new construction and coordinates roof assessments during due diligence on existing property acquisitions.",
    typicalCost:
      "Commercial roof installation: $8-$16 per SF depending on system.",
    worksWith: ["general-contractor", "property-inspector", "property-manager"],
  },
  {
    slug: "cre-marketing-designer",
    title: "CRE Marketing & OM Designer",
    category: "Brokerage & Sales",
    shortDescription:
      "Creates offering memorandums, flyers, and marketing materials for commercial real estate dispositions.",
    metaDescription:
      "What does a CRE marketing designer do? Learn how professional OMs, flyers, and marketing materials drive competitive bidding on commercial property sales.",
    whatTheyDo:
      "A commercial real estate marketing designer creates the professional collateral used to sell commercial properties — offering memorandums (OMs), property flyers, email campaigns, and presentation decks. A well-designed OM can significantly impact pricing by positioning the property professionally and driving competitive bidding among investors. For large institutional-quality dispositions, professional marketing is table stakes.",
    keyResponsibilities: [
      "Design offering memorandums (OMs) for property sales",
      "Create one-page flyers and property teasers",
      "Design email marketing campaigns",
      "Produce aerial maps, site plans, and renderings",
      "Coordinate professional photography and drone footage",
      "Develop investor presentations and pitch decks",
    ],
    whenNeeded:
      "Before listing a property for sale — OMs take 2-3 weeks to produce and are sent to qualified investors before or with the listing announcement.",
    howWeWork:
      "MaxLife Development produces professional OMs and marketing collateral for every disposition we handle, maximizing investor reach and competitive bidding.",
    worksWith: ["investment-sales-broker", "commercial-real-estate-broker"],
  },
  {
    slug: "drone-pilot-photographer",
    title: "CRE Drone Pilot & Photographer",
    category: "Brokerage & Sales",
    shortDescription:
      "FAA-licensed drone operator and professional photographer producing aerial and architectural imagery for commercial real estate.",
    metaDescription:
      "What does a CRE drone photographer do? Learn how FAA-licensed Part 107 drone pilots capture aerial imagery for commercial property listings and developments.",
    whatTheyDo:
      "A commercial real estate drone pilot and photographer produces the visual content that sells commercial property — aerial photography, videography, ground-level architectural photos, and interior shots. FAA Part 107 certified pilots can legally operate drones commercially, producing high-resolution aerial imagery that shows context, traffic patterns, and property condition. For NNN dispositions, aerial imagery is standard.",
    keyResponsibilities: [
      "Capture aerial photography and video (FAA Part 107)",
      "Produce ground-level architectural photography",
      "Create interior photography for multi-tenant assets",
      "Edit and deliver high-resolution marketing-ready files",
      "Coordinate airspace authorization for restricted zones",
      "Produce property tours and 3D renderings when needed",
    ],
    whenNeeded:
      "Before marketing a property for sale or lease, before construction completion for developer marketing, and after major renovations.",
    howWeWork:
      "MaxLife Development engages certified Florida drone operators for aerial imagery on every major disposition and development project, coordinating FAA compliance in controlled airspace.",
    typicalCost:
      "$500-$2,500+ per shoot depending on scope, editing, and deliverables.",
    worksWith: ["cre-marketing-designer", "investment-sales-broker"],
  },
];

export const categoriesOrder: ProfessionalCategory[] = [
  "Brokerage & Sales",
  "Development & Construction",
  "Engineering & Design",
  "Due Diligence",
  "Legal & Transactional",
  "Finance & Valuation",
  "Operations & Management",
];

export function getProfessional(slug: string): Professional | undefined {
  return professionals.find((p) => p.slug === slug);
}

export function getProfessionalsByCategory(
  category: ProfessionalCategory
): Professional[] {
  return professionals.filter((p) => p.category === category);
}
