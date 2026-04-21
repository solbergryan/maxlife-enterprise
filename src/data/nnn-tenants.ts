export interface NNNTenant {
  slug: string;
  tenant: string;
  category: string;
  creditRating: string;
  typicalCapRate: string;
  typicalLeaseTerm: string;
  typicalBuildingSize: string;
  typicalLotSize: string;
  typicalPrice: string;
  metaDescription: string;
  overview: string;
  investmentHighlights: string[];
  leaseStructure: string;
  tenantProfile: string;
  floridaNotes: string;
  whyInvest: string[];
  considerations: string[];
}

export const nnnTenants: NNNTenant[] = [
  {
    slug: "walgreens",
    tenant: "Walgreens",
    category: "Pharmacy",
    creditRating: "S&P: BBB-",
    typicalCapRate: "6.00% - 7.00%",
    typicalLeaseTerm: "25 years (initial) + options",
    typicalBuildingSize: "10,800 - 15,000 SF",
    typicalLotSize: "1.50 - 2.00 acres",
    typicalPrice: "$4M - $10M+",
    metaDescription:
      "Walgreens NNN properties for sale in Florida — pharmacy investment real estate with long-term corporate leases. Cap rates, lease terms, and available deals through MaxLife Development.",
    overview:
      "Walgreens (Walgreens Boots Alliance, NASDAQ: WBA) is one of the most recognizable NNN investment brands in commercial real estate. With approximately 8,000 US stores, long-term corporate leases, and hard-corner signalized intersection locations, Walgreens NNN properties have been a 1031 exchange buyer favorite for decades. The chain's recent credit watch (downgraded from BBB to BBB- in 2024) has modestly widened cap rates, creating value opportunities for investors who believe in the long-term pharmacy model.",
    investmentHighlights: [
      "Long 25-year initial lease terms with multiple 5-year renewal options",
      "Hard-corner signalized intersection locations with drive-thru pharmacy",
      "Absolute NNN lease structure — zero landlord responsibilities",
      "Corporate guarantee from Walgreens Boots Alliance",
      "Florida population growth supports pharmacy demand",
      "Recent cap rate expansion creates buyer entry opportunity",
    ],
    leaseStructure:
      "Most Walgreens leases are Absolute NNN with 25-year initial terms and 8-10 five-year renewal options, providing up to 75 years of potential occupancy. Rent increases are typically flat during the initial term with percentage bumps in option periods — though newer leases increasingly include 5-10% increases every 5 years. Tenant pays all property taxes, insurance, maintenance, roof, and structure.",
    tenantProfile:
      "Walgreens Boots Alliance operates approximately 8,000 US drugstores plus international retail pharmacy and wholesale distribution. The company has faced retail headwinds but remains a leading pharmacy chain with strong prescription drug fulfillment. Credit: S&P BBB-, Moody's Baa3 (both investment grade). Note the company's ongoing strategic review — pay attention to lease term remaining and location quality.",
    floridaNotes:
      "Florida's population growth and aging demographics continue to support pharmacy demand. Strong Walgreens locations in Central Florida trade in the 6.0-6.75% cap range for properties with 15+ years of lease term remaining. Coastal and South Florida markets trade tighter (5.5-6.5%). Recent 10-15 year lease terms trade wider (6.5-7.5%) due to the shorter remaining commitment.",
    whyInvest: [
      "One of the most recognized net lease tenants in America",
      "Prime hard-corner real estate with long-term leases",
      "Truly passive — zero landlord responsibility",
      "Current pricing reflects credit concerns but lease term commitments are long",
      "Properties retain significant redevelopment value if Walgreens vacates",
    ],
    considerations: [
      "Verify current S&P credit rating at acquisition — rating has been trending lower",
      "Watch for specific store location — Walgreens has closed underperforming units",
      "Longer lease terms = tighter cap rates; newer/shorter leases trade wider",
      "Some locations have 'dark' potential — understand market demographics",
    ],
  },
  {
    slug: "cvs-pharmacy",
    tenant: "CVS Pharmacy",
    category: "Pharmacy",
    creditRating: "S&P: BBB",
    typicalCapRate: "5.50% - 6.50%",
    typicalLeaseTerm: "20 - 25 years",
    typicalBuildingSize: "8,000 - 15,000 SF",
    typicalLotSize: "1.25 - 2.00 acres",
    typicalPrice: "$3.5M - $9M+",
    metaDescription:
      "CVS Pharmacy NNN properties for sale in Florida — investment-grade pharmacy real estate with corporate CVS Health lease guarantees. Available NNN deals through MaxLife Development.",
    overview:
      "CVS Pharmacy, owned by CVS Health (NYSE: CVS), is one of the largest pharmacy chains in America with approximately 9,000 retail locations. CVS NNN properties typically trade at slightly tighter cap rates than Walgreens due to the parent company's stronger credit rating (BBB vs. Walgreens' BBB-) and diversified healthcare business including Aetna insurance and MinuteClinic. Hard-corner drive-thru pharmacy locations are the most sought-after profile.",
    investmentHighlights: [
      "Strong investment-grade corporate guarantee from CVS Health",
      "20-25 year initial lease terms with renewal options",
      "Absolute NNN structure — zero landlord responsibility",
      "Drive-thru pharmacy locations preferred",
      "Diversified parent company (CVS Health includes Aetna, MinuteClinic)",
      "Lower cap rates than Walgreens due to stronger credit",
    ],
    leaseStructure:
      "CVS leases are typically Absolute NNN with 20-25 year initial terms and multiple 5-year renewal options. Rent increases are commonly 5-10% every 5 years. Tenant pays all property taxes, insurance, maintenance, structural, and roof. Corporate guarantee from CVS Health (not the individual store).",
    tenantProfile:
      "CVS Health operates approximately 9,000 retail pharmacies, 1,100 MinuteClinics, and owns Aetna (one of America's largest health insurance companies). The integrated pharmacy-insurance-clinic model creates revenue diversification and data synergies. Credit: S&P BBB, Moody's Baa2 (solid investment grade). CVS Health generates $350B+ in annual revenue, among the largest companies in America.",
    floridaNotes:
      "Florida has over 700 CVS locations, with strong concentration in South Florida (Miami-Dade, Broward, Palm Beach) and solid coverage across Central Florida. Signalized corner locations with drive-thru pharmacies in growth corridors trade at 5.5-6.25% cap rates. Properties in secondary markets or with shorter remaining lease terms trade 6.25-7%.",
    whyInvest: [
      "Stronger credit profile than most NNN tenants",
      "Diversified parent company reduces tenant-specific risk",
      "Prime drive-thru pharmacy locations with real estate value",
      "Long-term lease commitments with predictable income",
      "Institutional buyer demand for quality CVS assets supports pricing",
    ],
    considerations: [
      "CVS Health has announced some store closings — verify specific location",
      "Pharmacy retail headwinds apply industry-wide",
      "Lease term remaining significantly impacts cap rate",
      "Corporate guarantee is from CVS Health, not the individual store entity",
    ],
  },
  {
    slug: "dollar-general",
    tenant: "Dollar General",
    category: "Dollar Store",
    creditRating: "S&P: BBB",
    typicalCapRate: "5.75% - 6.50%",
    typicalLeaseTerm: "15 years",
    typicalBuildingSize: "9,100 - 10,640 SF",
    typicalLotSize: "1.00 - 1.50 acres",
    typicalPrice: "$1.3M - $2.2M",
    metaDescription:
      "Dollar General NNN properties for sale in Florida — affordable single-tenant net lease investments with corporate guarantees and rural/suburban store locations. Available deals through MaxLife Development.",
    overview:
      "Dollar General (NYSE: DG) is the most active NNN build-to-suit program in the country, with approximately 19,000 stores nationwide and adding 1,000+ stores annually. The combination of relatively affordable entry prices ($1.3-$2M), investment-grade corporate credit (BBB), absolute NNN lease structure, and nationwide BTS program makes Dollar General the most popular 'starter' NNN asset for new 1031 buyers and passive investors.",
    investmentHighlights: [
      "Affordable entry price — often the first NNN property for new investors",
      "Most active BTS (build-to-suit) program in retail net lease",
      "Absolute NNN lease structure",
      "Investment-grade corporate guarantee",
      "Counter-cyclical business model — performs well in recessions",
      "Rural and suburban locations with low competition",
    ],
    leaseStructure:
      "Standard Dollar General lease: 15-year initial term, absolute NNN, with 5 five-year renewal options (total potential 40 years). Rent increases are commonly 10% at year 10 or 10% every 5 years in option periods. Tenant pays all property taxes, insurance, maintenance, roof, and structure.",
    tenantProfile:
      "Dollar General is the largest dollar store chain in America with 19,000+ locations, primarily in rural and suburban markets underserved by larger retailers. The company targets lower- and middle-income consumers with consumables, household goods, and groceries. Credit: S&P BBB, Moody's Baa2 (solid investment grade). Revenue of $38B+ with consistent growth trajectory.",
    floridaNotes:
      "Florida has 650+ Dollar General locations, with ongoing BTS expansion in rural Central Florida, the Panhandle, and secondary markets. Lake County, Marion County, Polk County, and Volusia County have seen strong Dollar General BTS activity. Cap rates run 5.75-6.5% depending on lease term, rent level, and location. Newer 15-year leases in strong locations trade at the tight end.",
    whyInvest: [
      "Lowest entry point for first-time NNN buyers",
      "Largest and most active BTS program in US retail",
      "Recession-resistant business model",
      "Corporate-guaranteed lease with investment-grade credit",
      "Huge buyer pool for future disposition creates liquidity",
    ],
    considerations: [
      "Rural locations may have limited redevelopment value if DG vacates",
      "Pay attention to trade area demographics and competition",
      "Some early-generation stores have flat rent with no bumps",
      "Understand difference between 'new construction' and 'existing' deals",
    ],
  },
  {
    slug: "autozone",
    tenant: "AutoZone",
    category: "Auto Parts",
    creditRating: "S&P: BBB",
    typicalCapRate: "5.25% - 6.00%",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "6,500 - 8,000 SF",
    typicalLotSize: "0.75 - 1.25 acres",
    typicalPrice: "$1.8M - $3.5M",
    metaDescription:
      "AutoZone NNN properties for sale in Florida — auto parts retail net lease investments with investment-grade corporate guarantees. Available NNN deals through MaxLife Development.",
    overview:
      "AutoZone (NYSE: AZO) is the largest auto parts retailer in America with approximately 6,500 US stores. AutoZone NNN properties are favored by investors for their combination of investment-grade credit (BBB), stable recession-resistant business model (auto parts demand grows when consumers delay new car purchases), and prime real estate locations with high traffic visibility.",
    investmentHighlights: [
      "Investment-grade corporate credit (S&P BBB)",
      "Recession-resistant business model",
      "Prime high-traffic, freestanding real estate",
      "15-20 year initial lease terms",
      "Absolute NNN lease structure on most newer deals",
      "Strong company financials — consistent stock buybacks",
    ],
    leaseStructure:
      "Most AutoZone leases are Absolute NNN with 15-20 year initial terms and 4 × 5-year renewal options. Rent increases vary by lease vintage — some have flat rent with option period bumps; newer leases increasingly include 5-10% rent increases every 5 years. Corporate guarantee from AutoZone, Inc.",
    tenantProfile:
      "AutoZone is one of the best-performing retail stocks in history — the company has executed over $30 billion in stock buybacks since 1998 and grown revenue consistently. The business model (auto parts + DIY tools + commercial sales to auto shops) benefits from the aging US vehicle fleet. Credit: S&P BBB, Moody's Baa1 (solid investment grade). Annual revenue $17B+.",
    floridaNotes:
      "Florida has 400+ AutoZone locations, with continued expansion in growth markets. Central Florida AutoZone properties in good locations with 15+ years remaining trade at 5.25-5.75% cap rates. Properties with shorter remaining terms or in secondary markets trade wider (5.75-6.25%). AutoZone is typically willing to execute long-term BTS commitments.",
    whyInvest: [
      "One of the best-managed public companies in retail",
      "Strong investment-grade credit profile",
      "Counter-cyclical business model (strong in recessions)",
      "Premium real estate locations with long-term commitments",
      "Active BTS program creates continuous new inventory",
    ],
    considerations: [
      "Cap rates are tight due to institutional demand",
      "Some older leases have flat rent structures (no bumps in primary term)",
      "Verify building size fits tenant requirements (AutoZone has multiple prototype sizes)",
      "Auto parts industry faces long-term EV transition questions",
    ],
  },
  {
    slug: "oreilly-auto-parts",
    tenant: "O'Reilly Auto Parts",
    category: "Auto Parts",
    creditRating: "S&P: BBB",
    typicalCapRate: "5.25% - 6.00%",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "6,800 - 7,225 SF",
    typicalLotSize: "0.70 - 0.80 acres",
    typicalPrice: "$1.8M - $3M",
    metaDescription:
      "O'Reilly Auto Parts NNN properties for sale in Florida — auto parts net lease investment real estate with corporate guarantees. Available NNN deals through MaxLife Development.",
    overview:
      "O'Reilly Auto Parts (NASDAQ: ORLY) is the second-largest auto parts retailer in the US with approximately 6,000 stores. Like AutoZone, O'Reilly benefits from the aging US vehicle fleet and growing DIY market. O'Reilly NNN properties typically trade in line with AutoZone on cap rates, with similar location criteria and lease structures.",
    investmentHighlights: [
      "Investment-grade corporate credit (S&P BBB)",
      "Active NNN BTS program",
      "Prime retail real estate with high road frontage",
      "15-20 year initial lease terms",
      "Absolute NNN on newer leases",
      "Strong company growth and financial performance",
    ],
    leaseStructure:
      "Most O'Reilly leases are Absolute NNN with 15-20 year initial terms and 4 × 5-year renewal options. Rent bumps vary — newer leases commonly have 5-10% increases every 5 years. Corporate guarantee from O'Reilly Auto Parts (OKC Reliable Automotive Parts, Inc.).",
    tenantProfile:
      "O'Reilly Auto Parts has grown from a single Missouri store in 1957 to 6,000+ stores across 48 states. The company has consistently outpaced the broader auto parts sector in same-store sales growth. Strong commercial (professional) and DIY segments. Credit: S&P BBB, Moody's Baa1. Annual revenue $17B+, similar in size to AutoZone.",
    floridaNotes:
      "O'Reilly has expanded significantly in Florida over the past decade with 250+ locations. Strong Central Florida presence in Orange, Seminole, Lake, Volusia counties. Cap rates in line with AutoZone (5.25-6%). O'Reilly BTS program remains active with new location openings across the state.",
    whyInvest: [
      "Second-largest US auto parts chain with investment-grade credit",
      "Recession-resistant business model",
      "Long-term lease commitments with corporate guarantees",
      "Strong company financial performance",
      "Active BTS program with continuous new inventory",
    ],
    considerations: [
      "Similar cap rate profile to AutoZone — shop both tenants",
      "Verify lease vintage (older leases may have flat rent)",
      "Road frontage and visibility critical to tenant requirements",
      "Long-term EV transition question applies industry-wide",
    ],
  },
  {
    slug: "dollar-tree",
    tenant: "Dollar Tree",
    category: "Dollar Store",
    creditRating: "S&P: BBB-",
    typicalCapRate: "5.50% - 6.25%",
    typicalLeaseTerm: "10 - 15 years",
    typicalBuildingSize: "10,000 - 15,000 SF",
    typicalLotSize: "Often in-line / shared",
    typicalPrice: "$1.5M - $4M",
    metaDescription:
      "Dollar Tree NNN properties for sale in Florida — single-tenant dollar store net lease investments with corporate guarantees. Available deals through MaxLife Development.",
    overview:
      "Dollar Tree, Inc. (NASDAQ: DLTR) operates both Dollar Tree and Family Dollar brands, with approximately 16,000 combined US stores. Dollar Tree NNN properties often come in shopping center end-cap configurations rather than true freestanding buildings (unlike Dollar General). Freestanding Dollar Tree NNN properties are more rare but trade in the mid-cap range.",
    investmentHighlights: [
      "Investment-grade parent company (BBB-)",
      "Large US footprint across both Dollar Tree and Family Dollar",
      "10-15 year lease terms",
      "NNN or near-NNN lease structures",
      "Counter-cyclical retail model",
      "Corporate guarantee from Dollar Tree, Inc.",
    ],
    leaseStructure:
      "Dollar Tree leases are commonly NNN (not always absolute NNN — some have landlord roof/structure responsibility). 10-15 year initial terms with renewal options. Rent bump schedules vary. Freestanding Dollar Tree deals are rarer than Dollar General and often come as 'existing' deals rather than new BTS.",
    tenantProfile:
      "Dollar Tree, Inc. operates under two main brands: Dollar Tree (everything $1.25 or $1.50) and Family Dollar (broader merchandise mix). The company has executed a significant strategic review in 2024-25 including closing underperforming stores and potentially divesting Family Dollar. Credit: S&P BBB- (investment grade). Annual revenue $30B+.",
    floridaNotes:
      "Florida has strong Dollar Tree and Family Dollar presence. Most properties come as in-line shopping center tenants or end-caps rather than freestanding NNN. When freestanding, they typically trade at 6-6.5% cap rates depending on lease term and location.",
    whyInvest: [
      "Investment-grade corporate guarantee",
      "Well-diversified parent company",
      "Counter-cyclical retail business",
      "Large US footprint supports re-leasing in case of vacancy",
      "Good fit for investors wanting dollar store exposure beyond Dollar General",
    ],
    considerations: [
      "Freestanding Dollar Tree NNN is rare — most are in-line",
      "Recent strategic review could affect specific store performance",
      "Some leases are double-net (NN) rather than absolute NNN",
      "Family Dollar divestiture risk — verify tenant entity on lease",
    ],
  },
  {
    slug: "chick-fil-a",
    tenant: "Chick-fil-A",
    category: "QSR",
    creditRating: "Private (investment-grade equivalent)",
    typicalCapRate: "4.00% - 4.75% (ground lease) / 5.00% - 5.75% (BTS)",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "5,000 - 5,200 SF",
    typicalLotSize: "0.75 - 1.25 acres",
    typicalPrice: "$3M - $8M+",
    metaDescription:
      "Chick-fil-A NNN ground lease and BTS properties for sale in Florida — premium QSR investment real estate with strong corporate credit. Available deals through MaxLife Development.",
    overview:
      "Chick-fil-A is the holy grail of QSR NNN real estate. As a private company (no S&P rating required), Chick-fil-A has consistently grown sales per store at rates no public QSR can match — driving massive investor demand and the tightest cap rates in net lease retail. Most Chick-fil-A deals are ground leases where the tenant owns the building improvements on a long-term land lease, trading at sub-5% cap rates for premium locations.",
    investmentHighlights: [
      "Best-in-class QSR performance — $9M+ in average annual sales per store",
      "Tightest cap rates in net lease retail real estate",
      "Strong credit profile (private but treated as investment-grade equivalent)",
      "Highest demand for location quality — corner pad sites with drive-thru",
      "Corporate-owned and operated model (not franchised)",
      "Long-term commitments on prime Florida real estate",
    ],
    leaseStructure:
      "Chick-fil-A deals come in two main structures: Ground Lease (tenant owns the building on a long-term land lease, 20+ years with options, absolute NNN to the land, ~4-4.75% cap rates) and BTS NNN (developer owns the building, absolute NNN, 15-20 years, 5-5.75% cap rates). Rent bumps are commonly 10% every 5 years.",
    tenantProfile:
      "Chick-fil-A is a private company (Cathy family) with approximately 3,000 US locations. Despite being closed on Sundays, Chick-fil-A generates more revenue per store than any other major QSR brand — roughly 2x McDonald's average. The company maintains strict operator selection and location quality standards. Credit: Private, but typically treated as investment-grade equivalent due to financial strength.",
    floridaNotes:
      "Chick-fil-A continues to expand aggressively in Florida with continuous new locations in Orlando metro, Tampa Bay, Jacksonville, Miami, and Southwest Florida. Prime Florida pad sites trade at the tightest cap rates in the category — ground leases in Lake Nona, downtown Orlando, or major Tampa intersections trade 3.75-4.5%. Secondary market BTS deals trade 5-5.75%.",
    whyInvest: [
      "Premier QSR brand with unmatched per-unit sales performance",
      "Tightest cap rates in retail net lease create rarity value",
      "Strong ground lease structure — minimal risk, passive income",
      "Corporate-owned/operated eliminates franchisee risk",
      "Florida expansion creates ongoing new inventory",
    ],
    considerations: [
      "Very tight cap rates — thin current yield but strong long-term appreciation potential",
      "Ground lease vs. BTS structure significantly impacts cap rate and risk",
      "Private company means less financial transparency vs. public tenants",
      "Sunday closure means no 7-day sales (unique among QSR)",
    ],
  },
  {
    slug: "mcdonalds",
    tenant: "McDonald's",
    category: "QSR",
    creditRating: "S&P: BBB+",
    typicalCapRate: "4.75% - 5.50% (ground lease) / 5.25% - 6.00% (BTS)",
    typicalLeaseTerm: "20 years",
    typicalBuildingSize: "4,000 - 4,500 SF",
    typicalLotSize: "0.50 - 1.00 acres",
    typicalPrice: "$2.5M - $6M+",
    metaDescription:
      "McDonald's NNN ground lease and BTS properties for sale in Florida — investment-grade QSR net lease real estate. Available deals through MaxLife Development.",
    overview:
      "McDonald's Corporation (NYSE: MCD) is one of the largest NNN net lease tenants in America with 13,000+ US locations. Most McDonald's transactions are ground leases where the tenant owns the building improvements on a long-term corporate-guaranteed land lease. McDonald's ground leases trade at premium cap rates due to the corporate credit, 20-year initial terms, and multiple renewal options.",
    investmentHighlights: [
      "Investment-grade corporate credit (S&P BBB+, Moody's A2)",
      "20-year initial lease terms",
      "Ground lease structure — minimal landlord risk",
      "Prime signalized intersection real estate",
      "Corporate guarantee from McDonald's USA, LLC",
      "Dual drive-thru lanes on most new locations",
    ],
    leaseStructure:
      "Typical McDonald's deal structure: 20-year ground lease with multiple 5-year options, corporate guarantee, absolute NNN to land. Rent bumps are commonly 7-10% every 5 years. Tenant owns the building improvements — landlord owns only the land. McDonald's rarely signs BTS NNN deals with the landlord owning the building — ground lease is strongly preferred.",
    tenantProfile:
      "McDonald's Corporation is the largest fast-food chain globally with $25B+ in annual revenue and 13,000+ US stores (90%+ franchised). The company owns significant real estate and operates a hybrid franchise-royalty-rent model. Credit: S&P BBB+, Moody's A2 (solid investment grade). Extremely strong brand and competitive moat.",
    floridaNotes:
      "Florida has 900+ McDonald's locations. Ground lease deals in prime Central and South Florida intersections trade at 4.5-5.25% cap rates. Secondary markets and shorter-remaining-term deals trade at 5.5-6%. Most Florida McDonald's are corporate-guaranteed (not franchisee-guaranteed) which is critical for investment quality.",
    whyInvest: [
      "One of the strongest corporate credits in net lease retail",
      "20-year lease commitments with long-term renewal options",
      "Premium intersections and pad sites",
      "Ground lease structure = minimal landlord risk",
      "Strong resale market when disposition comes",
    ],
    considerations: [
      "Ground lease vs. fee simple structure significantly impacts returns",
      "Verify corporate guarantee vs. franchisee guarantee",
      "Tight cap rates mean limited current yield",
      "Most prime sites already owned by REITs — inventory is limited",
    ],
  },
  {
    slug: "starbucks",
    tenant: "Starbucks",
    category: "Coffee",
    creditRating: "S&P: BBB+",
    typicalCapRate: "4.75% - 5.50%",
    typicalLeaseTerm: "10 - 15 years",
    typicalBuildingSize: "1,500 - 2,200 SF",
    typicalLotSize: "0.50 - 1.00 acres",
    typicalPrice: "$2M - $5M",
    metaDescription:
      "Starbucks NNN properties for sale in Florida — coffee shop net lease investments with corporate guarantees and drive-thru locations. Available deals through MaxLife Development.",
    overview:
      "Starbucks (NASDAQ: SBUX) is the largest coffee chain in America with 16,000+ US stores. Starbucks NNN real estate has become a major net lease category with the company's shift toward drive-thru-focused locations. Starbucks NNN properties are favored for strong morning/evening traffic, investment-grade corporate credit, and brand recognition.",
    investmentHighlights: [
      "Investment-grade corporate credit (S&P BBB+)",
      "Drive-thru essential — strong corner locations",
      "Corporate-guaranteed leases",
      "Small building size but premium real estate",
      "Strong brand recognition and traffic drawing",
      "Real estate typically remains valuable if Starbucks exits",
    ],
    leaseStructure:
      "Starbucks leases are typically 10-15 year initial terms with multiple 5-year renewal options. Most are NNN (not always absolute NNN — some have landlord responsibility for roof and structural). Rent increases are commonly 10% every 5 years. Corporate-guaranteed by Starbucks Corporation.",
    tenantProfile:
      "Starbucks operates 16,000+ US stores directly (not franchised in most cases). Annual revenue $36B+. The company is the dominant US coffee chain with strong brand recognition and significant real estate investment. Credit: S&P BBB+, Moody's A2 (solid investment grade). Recent labor union activity and some store closures — verify specific store performance.",
    floridaNotes:
      "Florida has 600+ Starbucks locations with continuous expansion. Central Florida drive-thru Starbucks properties in growth markets (Lake Nona, Celebration, Oviedo, Lake Mary) trade at 4.75-5.25% cap rates. Secondary markets trade 5.25-6%. Starbucks continues aggressive Florida expansion with emphasis on drive-thru locations.",
    whyInvest: [
      "Investment-grade corporate credit and premium brand",
      "Smaller building size = more affordable entry than pharmacy",
      "Drive-thru locations command premium locations",
      "Strong traffic drawing increases cap rate resilience",
      "Florida expansion continues creating new BTS inventory",
    ],
    considerations: [
      "Tighter cap rates limit current yield",
      "Labor union activity has increased operational risk",
      "Some leases are NN not absolute NNN — verify carefully",
      "Recent same-store sales softness — monitor tenant performance",
    ],
  },
  {
    slug: "7-eleven",
    tenant: "7-Eleven",
    category: "Convenience Store",
    creditRating: "Private (strong)",
    typicalCapRate: "5.00% - 5.75%",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "1,000 - 2,500 SF (without fuel) / 3,000-5,000 SF (with fuel)",
    typicalLotSize: "0.80 - 1.00 acres",
    typicalPrice: "$1.5M - $5M+",
    metaDescription:
      "7-Eleven NNN properties for sale in Florida — convenience store net lease real estate with corporate lease guarantees. Available deals through MaxLife Development.",
    overview:
      "7-Eleven operates approximately 13,000 US convenience stores (many with gasoline) under the 7-Eleven, Speedway (acquired 2021), and Stripes brands. Owned by Seven & i Holdings (Japanese parent), 7-Eleven is the largest convenience store chain in the US. 7-Eleven NNN properties trade on a combination of corporate credit strength, 15-20 year lease terms, and prime corner retail real estate.",
    investmentHighlights: [
      "Largest convenience store chain in America",
      "Strong private parent company (Seven & i Holdings)",
      "15-20 year corporate lease terms",
      "Prime corner intersection locations",
      "Fuel income for locations with gas pumps",
      "Active BTS and acquisition program",
    ],
    leaseStructure:
      "7-Eleven leases are typically NNN (not always absolute NNN) with 15-20 year initial terms and 5-year renewal options. Rent increases commonly 7.5-10% every 5 years. Corporate guarantee from 7-Eleven, Inc. Properties with gasoline may have different structures due to environmental liability.",
    tenantProfile:
      "7-Eleven, Inc. is owned by Japanese Seven & i Holdings (TSE: 3382) with $55B+ in annual revenue. The 2021 Speedway acquisition added ~3,900 fuel stations to the portfolio. The company continues expanding via acquisition and BTS in the US. Corporate credit is private but treated as strong due to parent company strength.",
    floridaNotes:
      "7-Eleven has 350+ Florida locations. The brand is concentrated in major metros — Miami, Orlando, Tampa, Jacksonville — with limited rural coverage. Strong corner locations in growth markets trade at 5-5.5% cap rates. Locations with fuel and food service trade tighter.",
    whyInvest: [
      "Largest US convenience store brand with strong Florida presence",
      "Strong parent company backing",
      "Long-term lease commitments on prime corner real estate",
      "Stable convenience store business model",
      "Active expansion creates inventory",
    ],
    considerations: [
      "Environmental liability on locations with fuel (Phase I ESA critical)",
      "Verify corporate vs. franchisee guarantee",
      "Private company = less financial transparency",
      "Some leases are NN not absolute NNN",
    ],
  },

  // Additional tenants
  {
    slug: "wawa",
    tenant: "Wawa",
    category: "Convenience Store",
    creditRating: "Private (very strong)",
    typicalCapRate: "4.75% - 5.50%",
    typicalLeaseTerm: "20 years",
    typicalBuildingSize: "2,800 - 6,300 SF",
    typicalLotSize: "2.00 - 2.50 acres",
    typicalPrice: "$4M - $10M+",
    metaDescription:
      "Wawa NNN properties for sale in Florida — premier convenience store with fuel net lease real estate. Available deals through MaxLife Development.",
    overview:
      "Wawa is the premium convenience store chain in Florida and the Mid-Atlantic, with ~1,100 stores expanding aggressively into Florida. Wawa NNN deals are among the most coveted net lease assets due to the company's strong financial performance, 20-year lease commitments, and premium pad site locations with large fuel canopies and robust food service operations.",
    investmentHighlights: [
      "Premium convenience store brand with strong Florida expansion",
      "20-year initial lease terms",
      "Absolute NNN lease structure",
      "Large 2+ acre pad sites at major intersections",
      "Strong food service + fuel revenue diversification",
      "Private company with excellent financial performance",
    ],
    leaseStructure:
      "Wawa leases are typically 20-year absolute NNN with 4-6 five-year renewal options and 7.5-10% rent bumps every 5 years. Corporate guarantee from Wawa, Inc.",
    tenantProfile:
      "Wawa, Inc. is a private family/employee-owned company based in Pennsylvania with ~1,100 stores across 8 states. Known for premium food service, fuel, and convenience. Aggressive Florida expansion with dozens of new stores annually. Credit is private but treated as very strong.",
    floridaNotes:
      "Wawa has 200+ Florida locations and continues aggressive expansion. Premier pad sites in growth corridors trade at 4.75-5.25% cap rates. Newly opened stores with 20 years remaining trade at the tightest end.",
    whyInvest: [
      "Best-in-class convenience store brand in Florida",
      "Long-term lease commitments on prime pad sites",
      "Strong operating model (food + fuel + convenience)",
      "Tight cap rates reflect premium brand positioning",
      "Aggressive Florida expansion creates new inventory",
    ],
    considerations: [
      "Tight cap rates limit current yield",
      "Environmental diligence critical on fuel properties",
      "Private company means less public financial data",
      "Large lot sizes concentrate land basis",
    ],
  },
  {
    slug: "chase-bank",
    tenant: "Chase Bank",
    category: "Bank",
    creditRating: "S&P: A+",
    typicalCapRate: "4.50% - 5.25%",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "2,600 - 4,800 SF",
    typicalLotSize: "0.65 - 1.00 acres",
    typicalPrice: "$3M - $6M",
    metaDescription:
      "Chase Bank NNN ground lease properties for sale in Florida — premier bank branch net lease real estate with top-tier corporate credit. Available deals through MaxLife Development.",
    overview:
      "Chase Bank (JPMorgan Chase & Co., NYSE: JPM) is the largest US bank by assets, with approximately 5,000 branches nationwide. Chase NNN deals are typically ground lease structures with A+ corporate credit — one of the strongest in net lease real estate. Ground lease cap rates reflect the premium credit profile and minimal landlord risk.",
    investmentHighlights: [
      "A+ corporate credit (JPMorgan Chase)",
      "15-20 year ground lease terms",
      "Premier signalized intersection locations",
      "Drive-thru banking essential",
      "Minimal landlord risk (ground lease structure)",
      "One of the tightest cap rate categories in net lease",
    ],
    leaseStructure:
      "Chase deals are typically ground leases with 15-20 year initial terms and multiple 5-year renewal options. Rent bumps commonly 10% every 5 years. JPMorgan Chase corporate guarantee. Chase prefers ground lease structure where the bank owns the improvements.",
    tenantProfile:
      "JPMorgan Chase is the largest bank in America with $3.9T+ in assets. Credit: S&P A+, Moody's Aa2 (among the strongest investment-grade ratings in US corporate finance). Consistent profitability and strong capital ratios.",
    floridaNotes:
      "Florida has 400+ Chase branches with continued expansion. Prime Florida pad sites trade at 4.5-5% cap rates. Newer ground leases in growth markets trade at the tightest end.",
    whyInvest: [
      "One of the strongest credits in net lease commercial real estate",
      "Ground lease structure eliminates building-level risk",
      "20-year lease commitments with long reversion horizon",
      "Prime intersection real estate with long-term value",
      "Tight cap rates reflect near-institutional grade safety",
    ],
    considerations: [
      "Tight cap rates mean low current yield",
      "Ground lease structure limits depreciation benefits",
      "Bank branch consolidation trend — verify specific location",
      "Most prime sites already owned by institutional buyers",
    ],
  },
  {
    slug: "aldi",
    tenant: "Aldi",
    category: "Grocery",
    creditRating: "Private (very strong)",
    typicalCapRate: "5.25% - 6.00%",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "17,000 - 22,000 SF",
    typicalLotSize: "2.00 - 3.00 acres",
    typicalPrice: "$4M - $8M",
    metaDescription:
      "Aldi NNN grocery properties for sale in Florida — discount grocery net lease real estate with strong corporate guarantees. Available deals through MaxLife Development.",
    overview:
      "Aldi is the fastest-growing grocery chain in America with approximately 2,400 US stores and aggressive expansion plans targeting 800 new stores by 2028. Aldi NNN properties trade at attractive cap rates with strong corporate backing from Aldi Süd (one of Europe's largest private companies).",
    investmentHighlights: [
      "Fastest-growing US grocery chain",
      "Strong private parent company (Aldi Süd)",
      "15-20 year lease terms",
      "Absolute NNN lease structure",
      "Large pad sites with freestanding or anchor pad configurations",
      "Aggressive expansion creates continuous new BTS inventory",
    ],
    leaseStructure:
      "Aldi leases are typically 15-20 year absolute NNN with 4 five-year renewal options and 5-10% rent bumps every 5 years. Corporate guarantee from Aldi Süd or US subsidiary.",
    tenantProfile:
      "Aldi Süd operates approximately 2,400 US stores under the Aldi brand and is part of one of the world's largest private grocery companies. The discount grocery model with high private-label mix creates strong unit economics. Private company but treated as very strong credit.",
    floridaNotes:
      "Aldi has 80+ Florida stores with active expansion in Orlando, Tampa, Jacksonville, and South Florida. New Florida BTS Aldi locations trade at 5.25-5.75% cap rates. Continued expansion creates strong buyer demand.",
    whyInvest: [
      "Fastest-growing US grocer with aggressive expansion",
      "Recession-resistant discount grocery model",
      "Strong private parent company backing",
      "Long-term lease commitments on well-located pad sites",
      "Active BTS program creates new inventory",
    ],
    considerations: [
      "Large building size = higher entry price than small-box NNN",
      "Private company = less financial transparency",
      "Some locations are anchor pads in shopping centers (not freestanding)",
      "Grocery competition varies by submarket",
    ],
  },
  {
    slug: "davita-dialysis",
    tenant: "DaVita Dialysis",
    category: "Medical",
    creditRating: "S&P: BB+",
    typicalCapRate: "6.00% - 6.75%",
    typicalLeaseTerm: "10 - 20 years",
    typicalBuildingSize: "8,000 - 12,000 SF",
    typicalLotSize: "0.75 - 1.50 acres",
    typicalPrice: "$2.5M - $5M",
    metaDescription:
      "DaVita Dialysis NNN properties for sale in Florida — specialized medical net lease real estate with corporate guarantees. Available dialysis center deals through MaxLife Development.",
    overview:
      "DaVita Inc. (NYSE: DVA) is the largest dialysis provider in the US with approximately 2,700 centers. DaVita NNN properties trade at wider cap rates due to the company's non-investment-grade credit (BB+), but the specialized build-out and sticky patient relationships make DaVita locations exceptionally difficult to relocate — a key tenant retention factor.",
    investmentHighlights: [
      "Largest US dialysis provider",
      "Sticky tenant (specialized build-out hard to replicate)",
      "Long-term lease terms (10-20 years)",
      "NNN lease structure",
      "Recession-resistant (end-stage renal disease is non-discretionary)",
      "Wider cap rates due to credit profile",
    ],
    leaseStructure:
      "DaVita leases are typically 10-20 year NNN terms with renewal options and 5-10% rent bumps every 5 years. Specialized plumbing, water supply, and electrical requirements make tenant relocations expensive.",
    tenantProfile:
      "DaVita operates 2,700+ US dialysis centers and serves ~200,000 patients. Revenue $12B+. Credit: S&P BB+, Moody's Ba2 (non-investment grade but stable). The dialysis market is essentially a duopoly with DaVita and Fresenius.",
    floridaNotes:
      "Florida has 200+ DaVita centers. Properties trade at 6-6.75% cap rates depending on lease term and location. Florida's aging population supports long-term dialysis demand.",
    whyInvest: [
      "Sticky tenant with high switching costs",
      "Non-discretionary medical necessity",
      "Wider cap rates than investment-grade NNN",
      "Florida demographic tailwinds",
      "Long-term lease commitments",
    ],
    considerations: [
      "Non-investment-grade credit (BB+)",
      "Healthcare reimbursement risk (Medicare changes)",
      "Specialized build-out creates higher tenant improvements",
      "Verify water supply and specialized infrastructure",
    ],
  },
  {
    slug: "chipotle",
    tenant: "Chipotle",
    category: "QSR",
    creditRating: "S&P: BBB+",
    typicalCapRate: "5.00% - 5.75%",
    typicalLeaseTerm: "15 years + options",
    typicalBuildingSize: "2,200 - 2,500 SF",
    typicalLotSize: "0.75 - 1.00 acres",
    typicalPrice: "$2.5M - $5M",
    metaDescription:
      "Chipotle NNN properties for sale in Florida — fast casual Mexican net lease real estate with investment-grade corporate guarantees. Available deals through MaxLife Development.",
    overview:
      "Chipotle Mexican Grill (NYSE: CMG) is one of the best-performing QSR chains with approximately 3,400 US locations. Chipotle's shift toward 'Chipotlane' drive-thru locations has driven unit-level performance and NNN real estate demand. Corporate-guaranteed leases with strong investment-grade credit.",
    investmentHighlights: [
      "Investment-grade corporate credit (BBB+)",
      "Best-in-class QSR unit economics",
      "Chipotlane (drive-thru) strategy driving new BTS",
      "15-year lease terms with renewal options",
      "Corporate-owned and operated model",
      "Strong brand with young consumer loyalty",
    ],
    leaseStructure:
      "Chipotle leases are typically NNN (or ground lease) with 15-year initial terms and 4 five-year options. Rent bumps 7-12% every 5 years. Corporate guarantee from Chipotle Mexican Grill, Inc.",
    tenantProfile:
      "Chipotle Mexican Grill operates 3,400+ corporate-owned US restaurants. Revenue $10B+. Credit: S&P BBB+, Moody's Baa2 (solid investment grade). Strong same-store sales growth and high average unit volumes ($3M+ per store).",
    floridaNotes:
      "Florida has 200+ Chipotle locations with aggressive Chipotlane expansion. Prime drive-thru locations trade at 5-5.5% cap rates.",
    whyInvest: [
      "Strong investment-grade corporate credit",
      "Best-performing QSR chain for unit economics",
      "Corporate-owned (no franchisee risk)",
      "Active Chipotlane BTS program",
      "Brand loyalty drives resilient performance",
    ],
    considerations: [
      "Smaller building size limits reuse if Chipotle exits",
      "Tight cap rates limit current yield",
      "Verify Chipotlane vs. endcap configuration",
      "Food safety track record warrants due diligence",
    ],
  },
  {
    slug: "panera-bread",
    tenant: "Panera Bread",
    category: "QSR",
    creditRating: "Private (JAB Holdings)",
    typicalCapRate: "5.50% - 6.25%",
    typicalLeaseTerm: "15 years + options",
    typicalBuildingSize: "4,000 - 4,500 SF",
    typicalLotSize: "1.00 - 1.50 acres",
    typicalPrice: "$2.5M - $5M",
    metaDescription:
      "Panera Bread NNN properties for sale in Florida — fast casual net lease real estate with strong corporate parent JAB Holdings. Available deals through MaxLife Development.",
    overview:
      "Panera Bread operates approximately 2,100 US bakery-cafes under private ownership (JAB Holdings). Panera NNN properties benefit from the breakfast/lunch daypart, strong catering revenue, and expanding drive-thru locations. Cap rates reflect the private company credit profile.",
    investmentHighlights: [
      "Strong private parent company (JAB Holdings)",
      "Breakfast/lunch daypart diversification",
      "Drive-thru locations increasingly common on new BTS",
      "15-year lease terms",
      "NNN lease structure",
      "Catering revenue provides operational diversification",
    ],
    leaseStructure:
      "Panera leases are typically NNN with 15-year initial terms and renewal options. Rent bumps 5-10% every 5 years. Corporate guarantee from Panera Bread or parent entity.",
    tenantProfile:
      "Panera Bread, owned by JAB Holdings (private European investment firm), operates 2,100+ US bakery-cafes. JAB Holdings also owns Pret A Manger, Keurig Dr Pepper, and other major brands. Private but well-capitalized.",
    floridaNotes:
      "Florida has 100+ Panera locations. Prime pad sites with drive-thru trade at 5.5-6% cap rates.",
    whyInvest: [
      "Strong private parent with deep capital",
      "Multi-daypart revenue diversification",
      "Growing drive-thru format",
      "Stable fast casual operator",
      "Larger building size supports re-leasing",
    ],
    considerations: [
      "Private company (less transparency)",
      "Fast casual competition is intense",
      "Verify drive-thru vs. in-line configuration",
      "Labor costs pressuring unit economics industry-wide",
    ],
  },
  {
    slug: "taco-bell",
    tenant: "Taco Bell",
    category: "QSR",
    creditRating: "S&P: BB+ (Yum!)",
    typicalCapRate: "5.25% - 6.00%",
    typicalLeaseTerm: "20 years",
    typicalBuildingSize: "2,000 - 2,500 SF",
    typicalLotSize: "0.60 - 1.00 acres",
    typicalPrice: "$1.8M - $3.5M",
    metaDescription:
      "Taco Bell NNN properties for sale in Florida — QSR net lease real estate with Yum! Brands corporate credit. Available drive-thru Taco Bell deals through MaxLife Development.",
    overview:
      "Taco Bell, owned by Yum! Brands (NYSE: YUM), is one of the largest QSR chains in America with approximately 7,400 US locations. Most properties are franchisee-owned and leased, so lease guarantees vary — corporate-guaranteed deals trade tighter than franchisee-guaranteed deals.",
    investmentHighlights: [
      "Yum! Brands corporate guarantee (when available)",
      "20-year lease terms",
      "Absolute NNN lease structure common",
      "Drive-thru corner pad locations",
      "Strong brand recognition and customer loyalty",
      "Recession-resistant value-oriented model",
    ],
    leaseStructure:
      "Taco Bell leases vary widely depending on corporate vs. franchisee guarantee. Corporate-guaranteed deals trade at 5.25-5.75% cap rates; franchisee-guaranteed trade wider (5.75-6.5%) depending on franchisee credit strength. 20-year initial terms with 4-5 five-year options.",
    tenantProfile:
      "Yum! Brands owns Taco Bell, KFC, and Pizza Hut with ~57,000 global restaurants. Credit: S&P BB+, Moody's Ba2 (non-investment grade but stable). Most US Taco Bells are franchisee-operated; corporate-guaranteed deals are preferred by investors.",
    floridaNotes:
      "Florida has 400+ Taco Bell locations. Corporate-guaranteed properties in growth markets trade at 5.25-5.75% cap rates. Franchisee-guaranteed deals require individual franchisee credit analysis.",
    whyInvest: [
      "Established QSR brand with strong customer loyalty",
      "Drive-thru pad sites in prime locations",
      "20-year lease commitments",
      "Absolute NNN on most corporate deals",
      "Wider cap rates than Chick-fil-A/Starbucks",
    ],
    considerations: [
      "Critical to verify corporate vs. franchisee guarantee",
      "Non-investment-grade parent credit (BB+)",
      "Franchisee deals require credit diligence on operator",
      "Competitive QSR Mexican segment",
    ],
  },
  {
    slug: "tractor-supply",
    tenant: "Tractor Supply",
    category: "Retail",
    creditRating: "S&P: A-",
    typicalCapRate: "5.75% - 6.50%",
    typicalLeaseTerm: "15 - 20 years",
    typicalBuildingSize: "19,000 - 24,000 SF",
    typicalLotSize: "3.50 - 5.00 acres",
    typicalPrice: "$3M - $6M",
    metaDescription:
      "Tractor Supply Co NNN properties for sale in Florida — rural retail net lease real estate with investment-grade corporate credit. Available deals through MaxLife Development.",
    overview:
      "Tractor Supply Company (NASDAQ: TSCO) is the largest rural lifestyle retailer in America with approximately 2,300 stores. Strong investment-grade credit (A-) and consistent expansion make Tractor Supply NNN properties attractive for investors seeking rural/secondary market exposure with corporate guarantees.",
    investmentHighlights: [
      "Strong investment-grade credit (A-)",
      "Largest rural lifestyle retailer in America",
      "15-20 year lease terms",
      "Absolute NNN lease structure",
      "Rural/secondary market locations (reduced competition)",
      "Consistent expansion and strong financial performance",
    ],
    leaseStructure:
      "Tractor Supply leases are typically 15-20 year absolute NNN with 4 five-year renewal options and 10% rent bumps every 5 years. Corporate guarantee from Tractor Supply Company.",
    tenantProfile:
      "Tractor Supply Company operates 2,300+ stores across 49 states. Revenue $14B+. Credit: S&P A-, Moody's Baa1 (solid investment grade). Growing petfood and animal supply segments drive consistent same-store sales.",
    floridaNotes:
      "Florida has 80+ Tractor Supply locations primarily in rural and suburban markets. New Florida BTS stores trade at 5.75-6.25% cap rates.",
    whyInvest: [
      "Strong investment-grade credit in a specialty category",
      "Large footprint with rural/suburban diversification",
      "Long-term lease commitments",
      "Consistent financial performance and expansion",
      "Limited competition in rural markets",
    ],
    considerations: [
      "Large lot size concentrates land basis",
      "Rural markets may have less liquidity at resale",
      "Large building size limits re-leasing options",
      "Ecommerce pressure on rural retail warrants monitoring",
    ],
  },
  {
    slug: "advance-auto-parts",
    tenant: "Advance Auto Parts",
    category: "Auto Parts",
    creditRating: "S&P: BB- (recently downgraded)",
    typicalCapRate: "5.75% - 6.75%",
    typicalLeaseTerm: "15 years",
    typicalBuildingSize: "6,000 - 7,000 SF",
    typicalLotSize: "0.75 - 1.25 acres",
    typicalPrice: "$1.5M - $2.5M",
    metaDescription:
      "Advance Auto Parts NNN properties for sale in Florida — auto parts retail net lease investments. Cap rates and lease structures through MaxLife Development.",
    overview:
      "Advance Auto Parts (NYSE: AAP) is the third-largest auto parts retailer in America with approximately 4,700 stores. The company has faced operational challenges and a 2024 credit downgrade, which has widened cap rates compared to AutoZone and O'Reilly. Value-oriented investors find compelling opportunities in Advance Auto NNN due to the wider yields.",
    investmentHighlights: [
      "Third-largest US auto parts retailer",
      "Wider cap rates than AutoZone/O'Reilly",
      "15-year lease terms",
      "NN lease structure (landlord has roof and structure)",
      "Long turnaround runway if operational improvements continue",
      "Value play for yield-focused investors",
    ],
    leaseStructure:
      "Most Advance Auto leases are NN (Double Net) with landlord responsible for roof and structure — not absolute NNN. 15-year initial terms with renewal options and 5-10% rent bumps every 5 years.",
    tenantProfile:
      "Advance Auto Parts has 4,700+ US stores. Credit: S&P BB- (downgraded from BB in 2024 following operational challenges). Revenue $11B+. The company is pursuing a turnaround strategy under new management.",
    floridaNotes:
      "Florida has 200+ Advance Auto locations. Properties trade at 5.75-6.5% cap rates reflecting the credit downgrade.",
    whyInvest: [
      "Wider cap rates create value opportunity",
      "Third-largest auto parts chain with established network",
      "Turnaround potential if operational improvements continue",
      "Category benefits from aging vehicle fleet",
      "Lower entry prices than AutoZone/O'Reilly",
    ],
    considerations: [
      "Non-investment-grade credit (BB-) creates higher risk",
      "NN lease structure means some landlord responsibilities",
      "Turnaround execution uncertainty",
      "Track underperforming store closures carefully",
    ],
  },
  {
    slug: "take-5-oil-change",
    tenant: "Take 5 Oil Change",
    category: "Auto Service",
    creditRating: "Private (Driven Brands)",
    typicalCapRate: "5.50% - 6.25%",
    typicalLeaseTerm: "15 years",
    typicalBuildingSize: "1,400 - 1,600 SF",
    typicalLotSize: "0.50 - 0.65 acres",
    typicalPrice: "$1.5M - $2.5M",
    metaDescription:
      "Take 5 Oil Change NNN properties for sale in Florida — quick oil change net lease real estate with Driven Brands corporate backing. Available deals through MaxLife Development.",
    overview:
      "Take 5 Oil Change, owned by Driven Brands (NASDAQ: DRVN), is one of the fastest-growing quick oil change concepts with approximately 1,100 locations and aggressive expansion plans. The small footprint, drive-thru-only format, and growing unit count make Take 5 a compelling NNN category for investors.",
    investmentHighlights: [
      "Fastest-growing US quick oil change chain",
      "Driven Brands corporate backing",
      "Small footprint = lower entry price",
      "15-year absolute NNN lease structure",
      "Drive-thru-only format (no lobby)",
      "Active BTS program with aggressive expansion",
    ],
    leaseStructure:
      "Take 5 leases are typically 15-year absolute NNN with 4 five-year renewal options and 10% rent bumps every 5 years. Corporate guarantee from Driven Brands or Take 5 entity.",
    tenantProfile:
      "Driven Brands owns Take 5 Oil Change, Meineke, Maaco, and other automotive service brands with 5,000+ combined locations. Public parent provides financial transparency. Company credit varies but is generally moderate.",
    floridaNotes:
      "Take 5 is rapidly expanding in Florida with new BTS locations across Orlando, Tampa, and secondary markets. New deals trade at 5.5-6% cap rates.",
    whyInvest: [
      "Fastest-growing oil change chain",
      "Small footprint = affordable entry for investors",
      "Active BTS creates continuous inventory",
      "Secular tailwinds from aging vehicle fleet",
      "Drive-thru model minimizes operational complexity",
    ],
    considerations: [
      "Specialized building layout limits re-leasing options",
      "Long-term EV transition could impact industry",
      "Small site = limited redevelopment value",
      "Verify Driven Brands corporate vs. franchisee guarantee",
    ],
  },
  {
    slug: "popeyes",
    tenant: "Popeyes",
    category: "QSR",
    creditRating: "Franchisee-dependent",
    typicalCapRate: "5.50% - 6.75%",
    typicalLeaseTerm: "20 - 25 years",
    typicalBuildingSize: "2,200 - 2,800 SF",
    typicalLotSize: "0.75 - 1.00 acres",
    typicalPrice: "$1.8M - $3.5M",
    metaDescription:
      "Popeyes NNN properties for sale in Florida — chicken QSR net lease real estate. Available deals through MaxLife Development.",
    overview:
      "Popeyes Louisiana Kitchen, owned by Restaurant Brands International (NYSE: QSR), is one of the fastest-growing chicken QSR chains with approximately 3,700 US locations. Cap rates vary significantly based on corporate vs. franchisee guarantee and franchisee credit strength.",
    investmentHighlights: [
      "Fastest-growing chicken QSR in America",
      "20-25 year lease terms",
      "Absolute NNN lease structure common",
      "Corner pad sites with drive-thru",
      "Strong same-store sales momentum since 2019",
      "Active BTS program",
    ],
    leaseStructure:
      "Most Popeyes leases are franchisee-guaranteed with 20-25 year absolute NNN terms and 5-year options. Rent bumps 10% every 5 years. RBI corporate guarantees are rare but command premium cap rates.",
    tenantProfile:
      "Restaurant Brands International (parent) also owns Burger King and Tim Hortons. Most Popeyes units are franchisee-operated. The 2019 chicken sandwich launch transformed unit economics and drove category expansion.",
    floridaNotes:
      "Florida has 150+ Popeyes locations with active BTS expansion. Cap rates vary 5.5-6.75% depending on franchisee credit.",
    whyInvest: [
      "Fast-growing chicken QSR category",
      "Long-term lease commitments",
      "Drive-thru corner pad sites",
      "Active BTS creates new inventory",
      "Higher yield than corporate QSR tenants",
    ],
    considerations: [
      "Franchisee credit risk (verify operator financial strength)",
      "Corporate guarantees rare",
      "Competitive chicken QSR segment",
      "Franchisee-specific lease terms vary",
    ],
  },
  {
    slug: "wendys",
    tenant: "Wendy's",
    category: "QSR",
    creditRating: "S&P: BB (Wendy's Co.)",
    typicalCapRate: "5.50% - 6.25%",
    typicalLeaseTerm: "20 years",
    typicalBuildingSize: "2,500 - 3,500 SF",
    typicalLotSize: "0.75 - 1.25 acres",
    typicalPrice: "$2M - $4M",
    metaDescription:
      "Wendy's NNN properties for sale in Florida — QSR net lease real estate with corporate or franchisee guarantees. Available deals through MaxLife Development.",
    overview:
      "The Wendy's Company (NASDAQ: WEN) operates approximately 7,000 global restaurants, mostly franchisee-operated. Wendy's NNN cap rates vary by guarantee structure (corporate vs. franchisee) and franchisee credit quality.",
    investmentHighlights: [
      "Third-largest US burger chain",
      "20-year initial lease terms",
      "NNN lease structure common",
      "Signalized corner pad sites preferred",
      "Wide franchise network = multiple deal sources",
      "Consistent same-store sales performance",
    ],
    leaseStructure:
      "Wendy's leases are typically 20-year NNN with 4 five-year options and 10% rent bumps every 5 years. Corporate-guaranteed deals trade tighter than franchisee-guaranteed.",
    tenantProfile:
      "The Wendy's Company is primarily a franchisor (90%+ of stores franchisee-operated). Credit: S&P BB (non-investment grade but stable). Strong brand with loyal customer base.",
    floridaNotes:
      "Florida has 300+ Wendy's locations. Franchisee-guaranteed properties in growth markets trade at 5.75-6.25% cap rates.",
    whyInvest: [
      "Established brand with 50+ year history",
      "20-year lease commitments",
      "Wide franchisee network supports inventory",
      "Drive-thru corner locations",
      "Competitive cap rates in QSR category",
    ],
    considerations: [
      "Franchisee guarantee most common (verify credit)",
      "Non-investment-grade corporate credit",
      "Competitive burger QSR segment",
      "Corporate deals are rare and trade at premium",
    ],
  },
  {
    slug: "wingstop",
    tenant: "Wingstop",
    category: "QSR",
    creditRating: "S&P: B+",
    typicalCapRate: "6.00% - 6.75%",
    typicalLeaseTerm: "10 - 15 years",
    typicalBuildingSize: "1,800 - 2,500 SF",
    typicalLotSize: "Endcap / smaller pad",
    typicalPrice: "$1.5M - $3M",
    metaDescription:
      "Wingstop NNN properties for sale in Florida — chicken wing fast casual net lease real estate. Available deals through MaxLife Development.",
    overview:
      "Wingstop (NASDAQ: WING) operates approximately 2,200 US restaurants with 95%+ franchisee-operated. The chain has demonstrated exceptional same-store sales growth and unit economics. Smaller footprint and delivery-heavy model create a different investment profile than traditional drive-thru QSR.",
    investmentHighlights: [
      "Best-in-class same-store sales growth in QSR",
      "Delivery-heavy model with strong unit economics",
      "Smaller footprint = more affordable entry",
      "10-15 year lease terms",
      "NNN lease structure",
      "Rapid unit expansion",
    ],
    leaseStructure:
      "Wingstop leases are typically 10-15 year NNN with renewal options. Rent bumps 10% every 5 years. Mostly franchisee-guaranteed.",
    tenantProfile:
      "Wingstop Inc. (franchisor). 95%+ of US stores are franchisee-operated. Credit: S&P B+ (non-investment grade). Exceptional financial metrics: 28%+ royalty margins, consistent double-digit same-store sales growth.",
    floridaNotes:
      "Florida has 100+ Wingstop locations with active expansion. Endcap or freestanding units trade at 6-6.5% cap rates.",
    whyInvest: [
      "Best-in-class QSR operator performance",
      "Smaller footprint supports re-leasing flexibility",
      "Active expansion creates new inventory",
      "Delivery-forward model reduces dine-in capex",
      "Wider cap rates than corporate QSR",
    ],
    considerations: [
      "Non-investment-grade corporate credit (B+)",
      "Franchisee credit analysis critical",
      "Delivery-heavy model = different site criteria",
      "Smaller properties have less institutional buyer appeal",
    ],
  },
  {
    slug: "fresenius-dialysis",
    tenant: "Fresenius Kidney Care",
    category: "Medical",
    creditRating: "S&P: BBB-",
    typicalCapRate: "6.00% - 7.00%",
    typicalLeaseTerm: "10 - 15 years",
    typicalBuildingSize: "8,000 - 11,000 SF",
    typicalLotSize: "0.75 - 1.50 acres",
    typicalPrice: "$2.5M - $5M",
    metaDescription:
      "Fresenius Kidney Care NNN properties for sale in Florida — specialized medical dialysis net lease real estate. Available deals through MaxLife Development.",
    overview:
      "Fresenius Medical Care (NYSE: FMS) is the second-largest US dialysis provider with approximately 2,600 US centers. Like DaVita, Fresenius properties benefit from sticky tenants (specialized build-out) and non-discretionary medical demand, with cap rates reflecting moderate investment-grade credit.",
    investmentHighlights: [
      "Second-largest US dialysis provider",
      "Sticky tenant (specialized build-out)",
      "Investment-grade corporate credit (BBB-)",
      "Non-discretionary medical demand",
      "NNN lease structure",
      "Florida aging demographics support long-term demand",
    ],
    leaseStructure:
      "Fresenius leases are typically 10-15 year NNN with renewal options and 5-10% rent bumps every 5 years. Corporate guarantee from Fresenius Medical Care North America.",
    tenantProfile:
      "Fresenius Medical Care operates 2,600+ US dialysis centers. Global parent Fresenius SE is one of Europe's largest healthcare companies. Credit: S&P BBB- (investment grade, below DaVita).",
    floridaNotes:
      "Florida has 150+ Fresenius centers. Properties trade at 6-6.75% cap rates depending on lease term and location.",
    whyInvest: [
      "Investment-grade credit in a specialty category",
      "Sticky tenant with high switching costs",
      "Non-discretionary medical necessity",
      "Duopoly category (DaVita + Fresenius)",
      "Florida aging demographics tailwind",
    ],
    considerations: [
      "Lower-end investment-grade credit",
      "Healthcare reimbursement risk",
      "Specialized build-out requirements",
      "Category regulatory scrutiny",
    ],
  },
  {
    slug: "dutch-bros",
    tenant: "Dutch Bros Coffee",
    category: "Coffee",
    creditRating: "S&P: B",
    typicalCapRate: "4.50% - 5.25%",
    typicalLeaseTerm: "15 years",
    typicalBuildingSize: "375 - 1,000 SF",
    typicalLotSize: "0.40 - 0.60 acres",
    typicalPrice: "$1.8M - $3.5M",
    metaDescription:
      "Dutch Bros Coffee NNN properties for sale in Florida — drive-thru coffee net lease real estate. Available Dutch Bros NNN deals through MaxLife Development.",
    overview:
      "Dutch Bros (NYSE: BROS) is one of the fastest-growing drive-thru coffee chains with approximately 900 US locations. The ultra-compact drive-thru-only prototype and aggressive expansion make Dutch Bros a rising NNN category, with tight cap rates reflecting growth expectations.",
    investmentHighlights: [
      "Fastest-growing drive-thru coffee chain",
      "Ultra-compact footprint (~950 SF prototype)",
      "Dual-lane drive-thru only (no lobby)",
      "15-year absolute NNN lease terms",
      "Small land footprint = affordable entry",
      "Aggressive national expansion",
    ],
    leaseStructure:
      "Dutch Bros leases are typically 15-year absolute NNN with 4 five-year renewal options and 10% rent bumps every 5 years. Corporate guarantee from Dutch Bros, Inc.",
    tenantProfile:
      "Dutch Bros is a publicly-traded corporate-operated coffee chain (not franchised in most states). Revenue $1.2B+. Credit: S&P B (non-investment grade, early growth stage). Exceptional unit economics and same-store sales growth.",
    floridaNotes:
      "Dutch Bros is actively expanding in Florida with new BTS locations across Central Florida. Prime pad sites trade at 4.5-5% cap rates reflecting growth expectations.",
    whyInvest: [
      "Fastest-growing coffee chain in America",
      "Ultra-compact footprint with high sales/SF",
      "Corporate-owned model eliminates franchisee risk",
      "Active Florida expansion",
      "Absolute NNN with long-term commitments",
    ],
    considerations: [
      "Non-investment-grade credit (B) creates risk",
      "Specialized ultra-small building limits re-leasing",
      "Growth-stage company (financial performance volatility)",
      "Tight cap rates priced for expansion success",
    ],
  },
];

export function getTenant(slug: string): NNNTenant | undefined {
  return nnnTenants.find((t) => t.slug === slug);
}
