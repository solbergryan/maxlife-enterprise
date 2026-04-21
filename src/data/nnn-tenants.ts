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
];

export function getTenant(slug: string): NNNTenant | undefined {
  return nnnTenants.find((t) => t.slug === slug);
}
