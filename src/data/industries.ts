export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface IndustryMarketStat {
  label: string;
  value: string;
  sub?: string;
}

export interface Industry {
  slug: string;
  /** Page H1 — full title */
  title: string;
  /** Eyebrow above title */
  subtitle: string;
  /** Short tagline used on the hub card */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  /** Optional override icon — page renders default if omitted */
  iconKey?: "healthcare" | "finance" | "logistics" | "aerospace";
  marketStats: IndustryMarketStat[];
  tenantFeatures: IndustryFeature[];
  investorFeatures: IndustryFeature[];
  process: IndustryProcessStep[];
  benefits: string[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare-medical-office",
    title: "Healthcare & Medical Office Real Estate",
    subtitle: "Industry Vertical",
    tagline:
      "Medical office, ASC pads, hospital expansion, and net-leased healthcare assets across Florida.",
    metaTitle:
      "Florida Healthcare & Medical Office Real Estate | MaxLife Realty",
    metaDescription:
      "Tenant rep and investor sourcing for healthcare CRE across Florida — medical office, ambulatory surgery, urgent care, and senior living. Site selection, build-to-suit, and net-leased medical office acquisitions.",
    description:
      "Florida's healthcare sector is one of the state's largest and most reliable employers — driven by population in-migration, a growing Medicare-age cohort, and ongoing system expansion from AdventHealth, Orlando Health, HCA, Baptist Health, and Tampa General. We help operators secure space and we help investors build sector-focused portfolios in medical office and net-leased healthcare.",
    heroImage:
      "/images/commercial-stock/senior-living/maxlife-senior-living-senior-center-house-building-homestead-retirement-home-ulm-n-1024796.webp",
    heroAlt: "Florida medical office building exterior with healthcare signage",
    iconKey: "healthcare",
    marketStats: [
      {
        label: "FL Healthcare Jobs",
        value: "~1.4M",
        sub: "Largest private-sector employer base",
      },
      {
        label: "MOB Cap Rates",
        value: "6.5–7.5%",
        sub: "On- and off-campus medical office",
      },
      {
        label: "Net-leased Healthcare",
        value: "5.5–7%",
        sub: "Dialysis, urgent care, ASC NNN",
      },
      {
        label: "Population 65+ Growth",
        value: "Top 3",
        sub: "FL ranks nationally for senior in-migration",
      },
    ],
    tenantFeatures: [
      {
        title: "Site Selection by Patient Catchment",
        description:
          "We map your service-line draw, drive-time isochrones, and competitive gaps so you sign a lease where your panel actually lives — not where the broker has inventory.",
      },
      {
        title: "Build-to-Suit & Medical Pad Sites",
        description:
          "Land identification, entitlements, and developer selection for ground-up medical office, freestanding ED, ASC, and dental/vet pads. We coordinate the full pre-lease cycle.",
      },
      {
        title: "Lease Negotiation for Healthcare Tenants",
        description:
          "TI allowances calibrated to medical build-out cost, exclusive-use carve-outs against competing specialties, expansion options, and language for OIG/Stark-compliant rent.",
      },
      {
        title: "Hospital-Affiliated & On-Campus Space",
        description:
          "Direct relationships with on-campus MOB owners across AdventHealth, Orlando Health, Baptist, and HCA campuses. We get groups in front of the right asset manager faster.",
      },
      {
        title: "Multi-Site Expansion Strategy",
        description:
          "Single point of contact for groups opening 3–20+ locations across Florida. Standardized site criteria, deal templates, and a shared pipeline so growth doesn't stall.",
      },
      {
        title: "Senior Living & Behavioral Health Sites",
        description:
          "Zoning-vetted sites for assisted living, memory care, IRTF, and outpatient behavioral health — including CON-affected paths and municipal pre-application support.",
      },
    ],
    investorFeatures: [
      {
        title: "Medical Office (MOB) Acquisitions",
        description:
          "On- and off-campus MOB sourced for cap rate, WALT, tenant credit, and capex risk. We underwrite specialty mix, payor exposure, and renewal probability — not just the rent roll.",
      },
      {
        title: "Net-Leased Healthcare NNN",
        description:
          "Single-tenant dialysis (DaVita, Fresenius), urgent care (HCA, AdventHealth-affiliated), ASC, and physical therapy. Long-WALT, recession-resistant cash flow with passive ownership.",
      },
      {
        title: "Sale-Leaseback for Physician Owners",
        description:
          "We source and structure sale-leasebacks for doctor-owned MOBs — converting trapped equity into expansion capital while preserving operational control.",
      },
      {
        title: "Senior Living & SNF Investments",
        description:
          "Independent living, assisted living, memory care, and skilled nursing — RIDEA and triple-net structures, operator vetting, and Medicaid-mix analysis.",
      },
      {
        title: "1031 Exchange Into Healthcare",
        description:
          "Defer gains by exchanging multifamily, retail, or office equity into longer-WALT medical office. We identify replacement properties inside your 45/180-day windows.",
      },
      {
        title: "Development & Forward-Funding",
        description:
          "JV equity for ground-up MOB and ASC projects with credit-tenant pre-leases. We coordinate land, entitlements, GC, and lender from term sheet through stabilization.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "30-minute scoping call. For tenants: service line, size, market, timeline. For investors: capital, hold, leverage, asset profile.",
      },
      {
        step: "02",
        title: "Targeted Sourcing",
        description:
          "We work the off-market list — hospital systems, doctor-owners, healthcare REITs, and developers — alongside MLS / CoStar / Crexi inventory.",
      },
      {
        step: "03",
        title: "Underwrite & Negotiate",
        description:
          "Tenant: TI, exclusivity, options, OIG-compliant rent. Investor: cap rate, WALT, payor mix, capex reserves modeled in Deal Analyzer.",
      },
      {
        step: "04",
        title: "Close & Stabilize",
        description:
          "Coordinate diligence, financing, and closing. Tenants get build-out PM support; investors get ongoing portfolio reporting and disposition planning.",
      },
    ],
    benefits: [
      "Florida-licensed broker with statewide healthcare CRE coverage",
      "Direct relationships with hospital real estate teams",
      "Healthcare-specific lease language (Stark, exclusivity, ASC pad)",
      "Net-leased medical sourcing — DaVita, Fresenius, urgent care, ASC",
      "Deal Analyzer underwriting with payor & capex modeling",
      "1031 exchange coordination into medical office assets",
    ],
  },
  {
    slug: "financial-services-south-florida",
    title: "Financial Services Real Estate — South Florida",
    subtitle: "Industry Vertical",
    tagline:
      "Class A office, executive flex, and trophy assets for the hedge funds, PE shops, and family offices relocating to Miami and Palm Beach.",
    metaTitle:
      "South Florida Financial Services Real Estate | Miami Office & Investment | MaxLife Realty",
    metaDescription:
      "CRE for the hedge funds, PE, and family offices moving to South Florida. Class A office leasing in Brickell, Wynwood, and Palm Beach plus trophy office acquisitions and 1031 capital deployment.",
    description:
      "Citadel, Blackstone, Elliott, Point72, and dozens of family offices have relocated to South Florida — and the rest of the industry is quietly looking. We help allocators, founders, and operators secure the right office and we help investors deploy capital into trophy office, mixed-use, and executive-class assets in Miami, Palm Beach, and Fort Lauderdale.",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-skyscraper-corporate-modern-buildings-cityscape-business-1264948.webp",
    heroAlt: "Miami Brickell financial-services office tower at dusk",
    iconKey: "finance",
    marketStats: [
      {
        label: "Brickell Class A Asking",
        value: "$70–95/sf",
        sub: "FS-A office, full service",
      },
      {
        label: "Palm Beach Trophy Rents",
        value: "$140+/sf",
        sub: "Worth Avenue / Royal Palm Way",
      },
      {
        label: "Hedge Fund AUM Relocated",
        value: "$1T+",
        sub: "SoFL share since 2020",
      },
      {
        label: "Office Cap Rates",
        value: "5.5–7.5%",
        sub: "Trophy / Class A SoFL",
      },
    ],
    tenantFeatures: [
      {
        title: "Brickell, Wynwood & Coconut Grove Office Search",
        description:
          "Curated tour books across Brickell financial core, Wynwood creative-class, and Coconut Grove waterfront. We know which towers have actual sublease pressure vs. headline asking rents.",
      },
      {
        title: "Palm Beach & Worth Avenue",
        description:
          "Trophy office on Royal Palm Way, Worth Avenue retail-flex, and Town of Palm Beach quiet listings. Tight inventory — direct landlord and family-office relationships matter.",
      },
      {
        title: "Founder & Family-Office Discretion",
        description:
          "Off-market searches when you'd rather not have your relocation showing up on LoopNet. NDAs, blind tour requests, and discreet negotiation throughout.",
      },
      {
        title: "Buildout, Vault & Trading-Floor Specs",
        description:
          "TI structuring for trading desks, secure rooms, supplemental HVAC, and redundant power. We coordinate with vendors who've actually built these spaces here.",
      },
      {
        title: "Executive Housing Coordination",
        description:
          "Through our residential network — Brickell condos, Coconut Grove SFRs, Palm Beach estates, Indian Creek. We loop in the right residential agent so principals can sign at the same time as the office lease.",
      },
      {
        title: "Sublease & Right-Sizing",
        description:
          "If you over-leased post-2021, we can re-tenant or sublease. Direct relationships with tenant brokers and a buyer pool of incoming firms looking for plug-and-play space.",
      },
    ],
    investorFeatures: [
      {
        title: "Trophy & Class A Office Acquisitions",
        description:
          "On- and off-market trophy office in Brickell, Coral Gables, Boca, and Palm Beach. Underwritten with realistic mark-to-market on rolls, TI burn, and concession-adjusted NER.",
      },
      {
        title: "Mixed-Use & Executive Retail",
        description:
          "Ground-floor retail in financial-corridor towers — wealth managers, private banks, white-glove F&B. Long-WALT, credit-tenant, low capex profile.",
      },
      {
        title: "Sale-Leaseback for Owner-Occupants",
        description:
          "We structure sale-leasebacks for closely held firms occupying their own buildings — converting balance-sheet real estate into deployable capital.",
      },
      {
        title: "Workout & Distressed Office",
        description:
          "Selective office distress is real even in South Florida. Sourcing for opportunistic buyers — note purchases, structured equity, and recap deals.",
      },
      {
        title: "1031 Into SoFL Office",
        description:
          "Move out-of-state equity into South Florida Class A and trophy office on a tax-deferred basis. We identify replacements that fit your 45/180-day windows.",
      },
      {
        title: "Family Office JVs & Programmatic Capital",
        description:
          "Direct relationships with family offices that allocate to South Florida CRE. Co-GP, LP, and forward-funding structures across office and mixed-use.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Tenant: HQ vs. satellite, headcount, security, timing. Investor: mandate, ticket size, leverage, risk profile.",
      },
      {
        step: "02",
        title: "Targeted Sourcing",
        description:
          "We work the off-market list — landlord relationships, family-office holdings, incoming sublease — alongside direct CoStar / on-market inventory.",
      },
      {
        step: "03",
        title: "Underwrite & Negotiate",
        description:
          "Tenant: TI, free rent, expansion options, escalator caps, security. Investor: trophy underwrite with mark-to-market rolls and capex-adjusted IRR.",
      },
      {
        step: "04",
        title: "Close & Stabilize",
        description:
          "Diligence, financing, and close. Tenants get buildout and move-in PM. Investors get an asset-management plan with disposition triggers.",
      },
    ],
    benefits: [
      "Direct landlord relationships in Brickell, Palm Beach, Coral Gables",
      "Discreet off-market sourcing with NDA workflow",
      "Trading-floor and secure buildout vendor network",
      "Trophy office underwriting with realistic mark-to-market",
      "Executive housing coordination through residential network",
      "1031 and family-office JV structuring",
    ],
  },
  {
    slug: "logistics-distribution",
    title: "Logistics & Distribution Real Estate",
    subtitle: "Industry Vertical",
    tagline:
      "Industrial leasing and net-leased industrial investments along Florida's logistics corridors — Jacksonville, Lakeland, Orlando.",
    metaTitle:
      "Florida Industrial & Logistics Real Estate | Distribution Centers | MaxLife Realty",
    metaDescription:
      "Industrial CRE for 3PLs, last-mile, and regional distribution across Florida — Jacksonville, Lakeland, Orlando, Tampa Bay. Tenant rep and net-leased industrial acquisitions.",
    description:
      "Florida's logistics corridor — JAXPORT, the I-4 spine through Lakeland and Orlando, and Tampa's port and rail — is one of the country's fastest-growing distribution markets. We help operators secure the right industrial space and we help investors build sector-focused industrial portfolios with credit-grade tenants.",
    heroImage:
      "/images/commercial-stock/warehouse/maxlife-warehouse-production-facility-logistic-distribution-center-transit-4408573.webp",
    heroAlt: "Florida logistics distribution center exterior with truck bays",
    iconKey: "logistics",
    marketStats: [
      {
        label: "FL Industrial Vacancy",
        value: "5–7%",
        sub: "Tightest in I-4 corridor",
      },
      {
        label: "JAX Port Volume",
        value: "Top 12 US",
        sub: "TEU container throughput",
      },
      {
        label: "Industrial Cap Rates",
        value: "5.5–7%",
        sub: "Class A bulk + last-mile",
      },
      {
        label: "Lakeland Asking Rents",
        value: "$8–12/sf",
        sub: "NNN, big-box & cross-dock",
      },
    ],
    tenantFeatures: [
      {
        title: "Big-Box & Bulk Distribution Sites",
        description:
          "100k–1M+ sf bulk distribution along I-4 (Lakeland, Polk County, Plant City), I-95 (Jacksonville), and Florida's Turnpike. Cross-dock, clear height, and trailer parking specs vetted up front.",
      },
      {
        title: "Last-Mile & Infill Industrial",
        description:
          "Last-mile sites near population density in Orlando, Tampa, Miami, and Jacksonville. We identify infill industrial that can hit your delivery-radius requirements without breaking pro forma.",
      },
      {
        title: "Build-to-Suit Industrial",
        description:
          "Land identification, entitlements, developer matchmaking, and pre-lease structuring for ground-up BTS — including freezer/cooler, e-commerce fulfillment, and 3PL specs.",
      },
      {
        title: "Cold Storage & Specialty",
        description:
          "Refrigerated and freezer space is structurally undersupplied in Florida. We source existing inventory, retrofit candidates, and BTS sites for cold-chain operators.",
      },
      {
        title: "Multi-Site Footprint Strategy",
        description:
          "For 3PLs and e-commerce operators standing up multi-city Florida coverage. One broker relationship, standardized criteria, parallel deals across markets.",
      },
      {
        title: "Lease Negotiation for Industrial Tenants",
        description:
          "Clear-height, dock-door, and trailer-parking carve-outs; expansion rights; rent caps; and exit flexibility. We've negotiated against the major industrial REITs and know where they bend.",
      },
    ],
    investorFeatures: [
      {
        title: "Net-Leased Industrial NNN",
        description:
          "Single-tenant industrial NNN with credit-grade logistics tenants — Amazon, FedEx, regional 3PLs, food distributors. Long-WALT, credit-rated cash flow.",
      },
      {
        title: "Last-Mile Infill Acquisitions",
        description:
          "Smaller infill industrial in dense markets where replacement is constrained. Strong rent-growth tailwind, structural e-commerce demand.",
      },
      {
        title: "Big-Box Bulk Distribution",
        description:
          "100k+ sf institutional industrial along I-4, I-75, I-95. Income, value-add, and forward-funded development opportunities.",
      },
      {
        title: "Cold Storage & Specialty Industrial",
        description:
          "Cold storage commands premium yields and faces structural undersupply. We source existing assets, retrofit deals, and ground-up cold-chain projects.",
      },
      {
        title: "Sale-Leaseback for Logistics Operators",
        description:
          "We structure sale-leasebacks for owner-operators with strong credit and long lease commitments — converting trapped equity into growth capital.",
      },
      {
        title: "1031 Into Industrial",
        description:
          "Move retail or multifamily equity into industrial NNN on a tax-deferred basis. We identify replacement properties that fit your 45/180-day windows.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Tenant: SF, clear height, dock count, location radius, timing. Investor: ticket size, hold, credit threshold, asset profile.",
      },
      {
        step: "02",
        title: "Targeted Sourcing",
        description:
          "Off-market industrial via developer, REIT, and operator relationships — plus full on-market coverage across CoStar and direct broker outreach.",
      },
      {
        step: "03",
        title: "Underwrite & Negotiate",
        description:
          "Tenant: spec, escalators, expansion, dock counts, parking. Investor: WALT, credit, capex reserves, mark-to-market in Deal Analyzer.",
      },
      {
        step: "04",
        title: "Close & Stabilize",
        description:
          "Diligence, financing, close. Tenants get move-in coordination. Investors get a stabilization plan and disposition strategy.",
      },
    ],
    benefits: [
      "Coverage across all major Florida logistics corridors",
      "Direct relationships with industrial developers and REITs",
      "Cold-storage and specialty industrial expertise",
      "Net-leased industrial NNN sourcing",
      "Multi-site footprint strategy for 3PLs and e-commerce",
      "1031 exchange coordination into industrial assets",
    ],
  },
  {
    slug: "aerospace-space-coast",
    title: "Aerospace & Defense Real Estate — Space Coast",
    subtitle: "Industry Vertical",
    tagline:
      "Flex industrial, R&D, and tech-park leasing for the SpaceX, Blue Origin, and defense supplier ecosystem around Brevard County.",
    metaTitle:
      "Space Coast Aerospace Real Estate | Flex Industrial & R&D | MaxLife Realty",
    metaDescription:
      "CRE for the aerospace and defense supply chain on Florida's Space Coast — flex industrial, R&D, and tech-park leasing in Brevard County. Tenant rep and investor sourcing.",
    description:
      "The Space Coast — Brevard County, Cape Canaveral, Titusville, Melbourne — is one of the most concentrated aerospace and defense markets in the country. SpaceX, Blue Origin, Lockheed, L3Harris, and a deep supplier ecosystem are driving real CRE demand for flex industrial, R&D space, and tech-park leasing. We represent operators looking for space and investors building Space Coast portfolios.",
    heroImage:
      "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-modern-building-facade-skyscraper-geometric-1048092.webp",
    heroAlt: "Florida Space Coast aerospace tech facility exterior",
    iconKey: "aerospace",
    marketStats: [
      {
        label: "Annual Launches",
        value: "100+",
        sub: "Cape Canaveral / Kennedy",
      },
      {
        label: "Aerospace Jobs (Brevard)",
        value: "~30K+",
        sub: "Direct + supplier base",
      },
      {
        label: "Flex Industrial Rents",
        value: "$10–16/sf",
        sub: "NNN, Brevard / Melbourne",
      },
      {
        label: "Tech-Park Cap Rates",
        value: "6.5–8%",
        sub: "Single-tenant aerospace NNN",
      },
    ],
    tenantFeatures: [
      {
        title: "Flex Industrial & Light Manufacturing",
        description:
          "10k–250k sf flex/industrial along the Space Coast — Cocoa, Titusville, Palm Bay, Melbourne. Power, clear height, and crane-bay specs vetted to aerospace requirements.",
      },
      {
        title: "R&D and Tech-Park Space",
        description:
          "Class A R&D and office-flex around the L3Harris, Northrop, and Embry-Riddle ecosystems. Lab-ready, secured, and built for ITAR-controlled work.",
      },
      {
        title: "Build-to-Suit Aerospace Sites",
        description:
          "Entitled land near KSC, Cape Canaveral, and the Melbourne tech corridor. Site selection, entitlements, developer matching, and pre-lease structuring for ground-up.",
      },
      {
        title: "Secure & ITAR-Compliant Buildout",
        description:
          "Buildout coordination for SCIF-adjacent, ITAR-controlled, and secure facilities. Vendor network with direct experience on cleared-program work.",
      },
      {
        title: "Supplier Ecosystem Footprint",
        description:
          "For tier-1, tier-2, and tier-3 aerospace suppliers entering or expanding Space Coast operations. Multi-site search, lease standardization, and timing aligned to program awards.",
      },
      {
        title: "Lease Negotiation for Aerospace Tenants",
        description:
          "Power upgrades, expansion rights, holdover protection, and TI structures that match long aerospace program lifecycles. We negotiate against developers who control most of the corridor.",
      },
    ],
    investorFeatures: [
      {
        title: "Flex Industrial Acquisitions",
        description:
          "Single- and multi-tenant flex industrial in Brevard's strongest submarkets. Underwritten with realistic mark-to-market and aerospace-supplier credit analysis.",
      },
      {
        title: "Single-Tenant Aerospace NNN",
        description:
          "Long-WALT NNN leases to credit aerospace tenants. Higher cap rates than mainstream NNN with strong sector tailwinds.",
      },
      {
        title: "Sale-Leaseback for Aerospace Operators",
        description:
          "Structured sale-leasebacks for suppliers occupying their own buildings — freeing capital for program ramp without giving up operational control.",
      },
      {
        title: "Tech-Park & R&D Investments",
        description:
          "Office-flex, R&D, and lab-grade campuses around Melbourne, Palm Bay, and Titusville. Long leases, capex-light, defense-program tailwinds.",
      },
      {
        title: "Forward-Funded Development",
        description:
          "JV equity for ground-up flex industrial and tech-park projects with credit-tenant pre-leases. Land, entitlements, GC, and lender coordination.",
      },
      {
        title: "1031 Into Aerospace CRE",
        description:
          "Move retail or office equity into Space Coast aerospace assets on a tax-deferred basis — capturing sector-specific cap-rate spreads.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Tenant: program, SF, power, security, timing. Investor: ticket, hold, credit threshold, asset profile.",
      },
      {
        step: "02",
        title: "Targeted Sourcing",
        description:
          "Off-market via developer and supplier relationships across Brevard, plus full on-market coverage of flex / industrial / R&D inventory.",
      },
      {
        step: "03",
        title: "Underwrite & Negotiate",
        description:
          "Tenant: spec, power, secure-buildout, expansion. Investor: aerospace-credit underwrite with mark-to-market and capex modeling.",
      },
      {
        step: "04",
        title: "Close & Stabilize",
        description:
          "Diligence, financing, and close. Tenants get buildout coordination. Investors get an asset plan tied to program lifecycle and disposition timing.",
      },
    ],
    benefits: [
      "Deep Brevard County market relationships",
      "Aerospace-spec flex, R&D, and tech-park sourcing",
      "ITAR-aware buildout and vendor network",
      "Single-tenant aerospace NNN underwriting",
      "Multi-site supplier expansion strategy",
      "1031 exchange coordination into Space Coast assets",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export type IndustryIconKey = NonNullable<Industry["iconKey"]>;
