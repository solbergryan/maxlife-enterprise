export interface InvestorPersona {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaDescription: string;
  overview: string;
  whatTheyWant: string[];
  whatWeOffer: string[];
  typicalProfile: {
    typicalInvestment: string;
    targetReturns: string;
    timeline: string;
    preferredAssets: string[];
  };
  whyMaxLife: string;
  faqs: { q: string; a: string }[];
}

export const investorPersonas: InvestorPersona[] = [
  {
    slug: "1031-exchange-buyers",
    title: "NNN Properties for 1031 Exchange Buyers",
    shortTitle: "1031 Exchange Buyers",
    tagline: "Replacement properties sourced and closed within 45 days",
    metaDescription:
      "NNN investment properties for 1031 exchange buyers in Florida. We specialize in helping 1031 buyers identify and close on credit-tenant replacement properties within the 45-day window.",
    overview:
      "1031 exchange buyers face one of the hardest timelines in commercial real estate: identify replacement property within 45 days, close within 180. Miss either deadline and the tax deferral fails. MaxLife Development specializes in sourcing high-quality NNN and single-tenant net lease properties specifically structured for 1031 exchange buyers — with the speed, deal depth, and closing discipline required to hit the calendar.",
    whatTheyWant: [
      "Fast access to quality replacement properties within 45 days",
      "Clean title, clear due diligence, and tight closings",
      "Predictable, passive NNN income (no landlord headaches)",
      "Investment-grade tenants with long-term leases",
      "Coordination with their qualified intermediary and tax counsel",
      "Multiple options to satisfy 3-property identification rule",
    ],
    whatWeOffer: [
      "Curated NNN inventory across Florida — on-market and off-market",
      "Relationships with 29+ commercial lenders for fast financing",
      "Direct relationships with national NNN brokers (Stan Johnson, SRS, Marcus & Millichap)",
      "Underwriting packages and OMs within 48 hours of request",
      "Coordination with qualified intermediaries, CPAs, and attorneys",
      "Closing support from LOI through recording of deed",
    ],
    typicalProfile: {
      typicalInvestment: "$1M – $5M+",
      targetReturns: "5.5% – 7.0% cap rate (passive income)",
      timeline: "45 days to identify, 180 days to close",
      preferredAssets: [
        "Dollar General NNN",
        "AutoZone / O'Reilly NNN",
        "CVS / Walgreens",
        "Chick-fil-A / Starbucks (ground lease)",
        "Family Dollar NNN",
      ],
    },
    whyMaxLife:
      "When the 45-day clock is ticking, you need a broker who picks up the phone, sends real deals (not listings you've already seen), and closes on time. That's the job. We source NNN inventory across Florida, underwrite it professionally, and coordinate with every third party (QI, CPA, lender, title) to make sure the exchange succeeds.",
    faqs: [
      {
        q: "How fast can you source replacement NNN properties?",
        a: "We typically have 5-15 vetted options to share within 48 hours based on your criteria (cap rate, tenant, price, geography). Off-market and exclusive listings often take 3-5 days to access.",
      },
      {
        q: "Can you work with my existing qualified intermediary?",
        a: "Yes. We work with whatever QI you've already engaged. We also have established relationships with top national QIs if you need a referral.",
      },
      {
        q: "Do you source properties outside Florida?",
        a: "Primary focus is Florida but we have national broker relationships that can source NNN across the country. Florida buyers often prefer Florida for the no-state-income-tax advantage.",
      },
    ],
  },
  {
    slug: "family-offices",
    title: "Family Office CRE Investment Services",
    shortTitle: "Family Offices",
    tagline: "Institutional-quality deal flow, private-level attention",
    metaDescription:
      "Commercial real estate investment services for family offices — discretionary NNN sourcing, development partnerships, and portfolio management across Florida.",
    overview:
      "Family offices increasingly allocate to commercial real estate for yield, inflation protection, and generational wealth transfer. MaxLife Development provides family offices with direct access to Florida CRE opportunities — from single-asset NNN acquisitions to build-to-suit development partnerships and portfolio strategies — with the discretion and sophistication family office principals expect.",
    whatTheyWant: [
      "Discretionary, curated deal flow — not widely-marketed listings",
      "Tax-efficient structuring (1031, OZ, cost seg coordination)",
      "Strategic diversification across asset types and markets",
      "Direct access to principals, not relationship-handlers",
      "Discretion and privacy in sourcing and execution",
      "Long-term partnerships, not transactional relationships",
    ],
    whatWeOffer: [
      "Florida market intelligence not visible on Crexi or LoopNet",
      "Off-market NNN, development, and value-add opportunities",
      "Co-investment and JV partnership structures",
      "Direct involvement in every deal (no account managers)",
      "Coordinated underwriting with family office advisors",
      "Quarterly portfolio strategy reviews",
    ],
    typicalProfile: {
      typicalInvestment: "$5M – $50M+",
      targetReturns: "6-8% unlevered / 12-18% IRR levered",
      timeline: "Multi-year hold, multi-generational wealth",
      preferredAssets: [
        "NNN investment portfolios",
        "Build-to-suit development JVs",
        "Value-add multifamily",
        "Grocery-anchored retail centers",
        "Medical office",
      ],
    },
    whyMaxLife:
      "Family offices need brokers who understand institutional underwriting, tax structuring, and multi-generational wealth goals — without the bloat of big-institution account hierarchies. MaxLife operates lean, which means you work directly with the principal on every deal. We treat family offices as long-term strategic partners, not one-off transactions.",
    faqs: [
      {
        q: "Do you offer JV structures on development deals?",
        a: "Yes. We regularly partner with family offices and institutional capital on NNN build-to-suit development JVs. Typical structure: GP/LP with MaxLife as developer/operator.",
      },
      {
        q: "Can you handle larger portfolio transactions?",
        a: "Yes. We coordinate with national NNN investment sales brokers for portfolio dispositions and acquisitions above $10M.",
      },
      {
        q: "Do you provide ongoing portfolio strategy?",
        a: "For family office clients, yes. We provide quarterly portfolio reviews covering performance, hold/sell analysis, and replacement property sourcing.",
      },
    ],
  },
  {
    slug: "foreign-investors",
    title: "Florida Commercial Real Estate for Foreign Investors",
    shortTitle: "International / Foreign Investors",
    tagline: "Florida CRE access for international investors",
    metaDescription:
      "Commercial real estate services for international and foreign investors in Florida. NNN investments, entity structuring, FIRPTA compliance, and USD hedging coordination.",
    overview:
      "Florida is one of the most attractive US destinations for international CRE capital — no state income tax, strong population growth, and USD-denominated income. MaxLife Development helps foreign investors navigate US commercial real estate: entity structuring (LLC/LP), FIRPTA compliance, banking coordination, and sourcing high-quality NNN and investment properties in Florida's highest-growth corridors.",
    whatTheyWant: [
      "Stable USD-denominated income streams",
      "US legal structuring (LLC formation, FIRPTA guidance)",
      "Currency hedging coordination",
      "Tax-efficient ownership structures",
      "Professional property management (hands-off)",
      "Florida's population and economic growth exposure",
    ],
    whatWeOffer: [
      "Single-tenant NNN properties with US corporate tenants",
      "Entity formation coordination with US commercial attorneys",
      "FIRPTA and US tax compliance referrals to international CPAs",
      "Property management for absentee ownership",
      "Remote due diligence (virtual tours, Zoom closings)",
      "Coordination with US commercial banks for international banking",
    ],
    typicalProfile: {
      typicalInvestment: "$2M – $20M",
      targetReturns: "6-8% cap rate USD-denominated income",
      timeline: "Long-term hold (5-15+ years)",
      preferredAssets: [
        "Single-tenant NNN with investment-grade tenants",
        "Multifamily apartments (Class A)",
        "Medical office buildings",
        "Grocery-anchored retail",
      ],
    },
    whyMaxLife:
      "International investors often face friction entering the US commercial real estate market: unfamiliar tax rules (FIRPTA, ECI), entity structuring, US banking relationships. We've helped international investors execute Florida CRE acquisitions while coordinating with US attorneys, CPAs, and banking specialists who understand cross-border transactions. Bilingual capabilities available.",
    faqs: [
      {
        q: "What is FIRPTA?",
        a: "The Foreign Investment in Real Property Tax Act requires buyers to withhold 15% of the purchase price when buying from a foreign seller. Understanding and planning around FIRPTA is critical for international CRE investors.",
      },
      {
        q: "Can foreign investors use 1031 exchanges?",
        a: "Yes, but only when exchanging US property for other US property. Foreign property cannot be part of a 1031 exchange.",
      },
      {
        q: "Do you coordinate with my US attorney and CPA?",
        a: "Yes, and if you need US referrals for entity formation, cross-border tax planning, or FIRPTA compliance, we have established relationships with specialists in these areas.",
      },
    ],
  },
  {
    slug: "passive-income-investors",
    title: "Passive Income Real Estate Investments",
    shortTitle: "Passive Income Investors",
    tagline: "Mailbox money — institutional quality, zero landlord headaches",
    metaDescription:
      "Passive commercial real estate investments for investors seeking truly hands-off income. NNN properties with corporate tenants, long leases, and zero landlord responsibilities.",
    overview:
      "Not every investor wants to be a property manager. Passive income investors want their capital working for them while they focus on their careers, businesses, or retirement. Single-tenant NNN properties are the most passive commercial real estate asset class — with absolute NNN leases, the tenant handles everything from property taxes to roof repairs. MaxLife Development specializes in sourcing these low-maintenance income assets for investors who value their time.",
    whatTheyWant: [
      "Zero landlord responsibilities (no phone calls, no repairs)",
      "Predictable monthly income deposits",
      "Long-term leases with automatic rent increases",
      "Investment-grade tenants (low default risk)",
      "Simple tax treatment (no business operations)",
      "No property management hassle",
    ],
    whatWeOffer: [
      "Curated absolute NNN inventory across Florida",
      "Investment-grade tenant properties (Walgreens, CVS, AutoZone, Dollar General, Chick-fil-A)",
      "Long-term lease analysis and tenant credit screening",
      "Complete acquisition support — LOI through closing",
      "Post-closing: tenant quarterback for any issues",
      "Referrals to passive-friendly CPAs for tax optimization",
    ],
    typicalProfile: {
      typicalInvestment: "$1M – $3M",
      targetReturns: "5.5% – 7.0% unlevered cash-on-cash",
      timeline: "10-20 year hold (or indefinite via 1031 chain)",
      preferredAssets: [
        "Absolute NNN single-tenant properties",
        "Dollar General, AutoZone, O'Reilly",
        "Investment-grade QSR (Chick-fil-A, McDonald's)",
        "Pharmacy (Walgreens, CVS)",
      ],
    },
    whyMaxLife:
      "You don't want to become a landlord. You want to be an investor. NNN real estate is the closest thing commercial real estate offers to truly passive income — but you still need someone who knows the market, vets the tenants, and negotiates the deal. That's what MaxLife does. You write the check; we handle the rest.",
    faqs: [
      {
        q: "How passive is NNN really?",
        a: "With a true absolute NNN lease, you literally collect rent and do nothing else. The tenant pays property taxes, insurance, all maintenance, and handles all operational issues directly. Most investors spend less than 30 minutes per year on an absolute NNN property.",
      },
      {
        q: "Do I need a property manager?",
        a: "For absolute NNN single-tenant properties, no. The tenant handles everything. For multi-tenant or NN (double net) properties, a manager is often worth it.",
      },
      {
        q: "What happens if the tenant defaults?",
        a: "This is the main risk. We prioritize investment-grade tenants (BBB- or better) with long remaining lease terms. Even if a tenant defaults, you still own valuable commercial real estate that can be re-leased or sold.",
      },
    ],
  },
  {
    slug: "real-estate-developers",
    title: "Land and Development Opportunities for CRE Developers",
    shortTitle: "CRE Developers",
    tagline: "Pre-entitled land and build-to-suit opportunities across Florida",
    metaDescription:
      "Commercial land and development opportunities for Florida CRE developers — pad-ready sites, BTS tenant placement, entitlements consulting, and development financing.",
    overview:
      "Florida's population growth continues to drive demand for new commercial development — NNN retail, multifamily, industrial, and mixed-use. MaxLife Development works directly with commercial real estate developers to source pad-ready land, match development sites with expansion-hungry national tenants, and coordinate the full development lifecycle from land acquisition through disposition.",
    whatTheyWant: [
      "Pre-entitled or entitle-ready commercial land",
      "Pad-ready sites with utilities and infrastructure in place",
      "Tenant matching for build-to-suit opportunities",
      "Relationships with construction lenders",
      "Entitlement support and land use counsel referrals",
      "Exit strategy — buyers lined up at stabilization",
    ],
    whatWeOffer: [
      "Off-market and exclusive land listings across Central Florida",
      "Tenant rep relationships for BTS placement (AutoZone, Dollar General, Wawa, etc.)",
      "Construction lender relationships (NNN BTS specialty lenders)",
      "Entitlements coordination with Florida land use counsel",
      "Market analysis and site selection data",
      "Disposition marketing to NNN investment buyers",
    ],
    typicalProfile: {
      typicalInvestment: "$500K – $5M equity per project",
      targetReturns: "20-35% IRR / 150-250 bps development spread",
      timeline: "12-18 months land-to-disposition",
      preferredAssets: [
        "Single-tenant NNN retail pads",
        "Multi-tenant strip retail centers",
        "Self-storage facilities",
        "Small industrial / flex",
      ],
    },
    whyMaxLife:
      "Developers need a partner who thinks like a developer. MaxLife Development isn't just a brokerage — we actively develop NNN BTS projects ourselves, so we understand the economics, timelines, entitlement challenges, and exit dynamics. We can source land, match tenants, arrange financing, and market dispositions because we do all of this on our own deals.",
    faqs: [
      {
        q: "Do you bring me off-market land opportunities?",
        a: "Yes. We source off-market land through direct owner relationships, municipal planning connections, and through our own development pipeline when we can't use a site ourselves.",
      },
      {
        q: "Can you help me match a site to a tenant?",
        a: "Yes. We have active relationships with national tenant reps and direct tenant real estate teams. We can submit sites to 30+ NNN tenant programs.",
      },
      {
        q: "Can you help dispose of completed projects?",
        a: "Absolutely — disposition to 1031 exchange buyers and NNN investors is one of our core services. Stabilized NNN properties in Florida have strong, consistent buyer demand.",
      },
    ],
  },
  {
    slug: "institutional-investors",
    title: "Institutional CRE Investment Services",
    shortTitle: "Institutional Investors",
    tagline: "Florida market intelligence and execution for institutional capital",
    metaDescription:
      "Commercial real estate services for institutional investors, REITs, and private equity funds. Florida market intelligence, off-market sourcing, and execution support.",
    overview:
      "REITs, private equity funds, pension funds, and institutional capital allocators investing in Florida commercial real estate need local market intelligence and execution capability. MaxLife Development provides Florida-focused sourcing, market analysis, and transaction support for institutional investors — particularly those targeting NNN portfolios, multifamily, and development opportunities.",
    whatTheyWant: [
      "Deep Florida market intelligence (submarkets, rent growth, pipeline)",
      "Off-market deal flow from local relationships",
      "Institutional-quality underwriting and analysis",
      "Fast, professional execution on large transactions",
      "Local market coverage across Florida's top metros",
      "Coordination with their internal investment committee processes",
    ],
    whatWeOffer: [
      "Florida-specific market intelligence and trend analysis",
      "Off-market access across Central Florida",
      "Institutional-grade underwriting packages",
      "Direct coordination with internal analysts and portfolio managers",
      "Local broker relationships for portfolio dispositions",
      "Florida-specific due diligence support (hurricane code, concurrency, impact fees)",
    ],
    typicalProfile: {
      typicalInvestment: "$10M – $100M+",
      targetReturns: "Portfolio-driven (varies by fund mandate)",
      timeline: "Portfolio-driven (5-10+ year holds typical)",
      preferredAssets: [
        "NNN portfolio acquisitions",
        "Multifamily Class A/B",
        "Industrial / logistics",
        "Grocery-anchored retail",
        "Medical office portfolios",
      ],
    },
    whyMaxLife:
      "Institutional investors get plenty of emails from big institutional brokerages. What we offer is different: deep Florida-specific market knowledge, off-market sourcing through local relationships that national brokerages don't have, and lean execution. We can coordinate with your internal team on underwriting, legal, and closing without institutional overhead.",
    faqs: [
      {
        q: "Do you have access to portfolio deals?",
        a: "Yes, through our relationships with national NNN brokerages and private sellers. We focus on Florida-located assets or portfolios with significant Florida exposure.",
      },
      {
        q: "Can you provide Florida-specific market intelligence?",
        a: "Yes. We publish quarterly market reports covering Central Florida, and we can provide deeper analysis on specific submarkets, rent growth, supply pipeline, and cap rate trends.",
      },
      {
        q: "Do you work with investment committees?",
        a: "Yes. We're comfortable providing detailed underwriting packages, responding to IC questions, and coordinating with your internal investment process.",
      },
    ],
  },
  {
    slug: "first-time-cre-investors",
    title: "Commercial Real Estate for First-Time Investors",
    shortTitle: "First-Time CRE Investors",
    tagline: "Your first commercial real estate deal — done right",
    metaDescription:
      "Commercial real estate guidance for first-time investors. Learn how to buy your first NNN property, understand cap rates, due diligence, and financing — with MaxLife Development.",
    overview:
      "Moving from residential real estate to commercial real estate is one of the biggest wealth-building leaps most investors make — but also one of the most intimidating. Different lease structures, different financing, bigger numbers, more moving parts. MaxLife Development specializes in educating and guiding first-time commercial investors through the process, so your first deal builds confidence (and equity) for a lifetime of CRE ownership.",
    whatTheyWant: [
      "Education on how CRE actually works (not sales pitches)",
      "A clear path from curiosity to closing",
      "Properties they can actually afford (manageable entry prices)",
      "Honest risk assessment",
      "A real person to call when questions come up",
      "Proven investment structures (not exotic strategies)",
    ],
    whatWeOffer: [
      "Free CRE education via our Academy (20 courses, 160 lessons)",
      "Transparent deal walkthroughs — full underwriting and pro forma",
      "Entry-level NNN opportunities ($1M – $2M)",
      "Financing introductions (SBA 504 for owner-occupied, conventional for investment)",
      "Step-by-step acquisition coordination",
      "Ongoing advisory as your portfolio grows",
    ],
    typicalProfile: {
      typicalInvestment: "$500K – $1.5M equity",
      targetReturns: "6-7% cap rate / 8-10% cash-on-cash",
      timeline: "5-10 year hold minimum",
      preferredAssets: [
        "Dollar General NNN (most affordable entry)",
        "AutoZone NNN",
        "Take 5 Oil Change",
        "Small strip retail centers",
      ],
    },
    whyMaxLife:
      "If you've done residential investing or you're ready to move beyond your 401(k), commercial real estate is the natural next step. But it requires different knowledge, different financing, and a different mindset. We've helped dozens of first-time CRE buyers make their first commercial acquisition — and more importantly, we've positioned them to build a real portfolio over time. No pressure, just honest guidance and real deals.",
    faqs: [
      {
        q: "Can I buy NNN with 25% down?",
        a: "Typically yes. Commercial bank financing for NNN is commonly 70-75% LTV with investment-grade tenants, meaning 25-30% equity. SBA loans for owner-occupied can require even less.",
      },
      {
        q: "How much do I need to start?",
        a: "For a typical $1.5M Dollar General NNN with 70% LTV financing, you need ~$450K-$500K cash (down payment + closing costs + reserves). Some entry-level deals require less.",
      },
      {
        q: "Is CRE riskier than residential?",
        a: "NNN real estate with investment-grade tenants is often LESS risky than small residential rentals because of the long leases, corporate guarantees, and zero landlord responsibilities. The real risk is lease expiration — but that's 10-25 years out.",
      },
    ],
  },
];

export function getInvestorPersona(slug: string): InvestorPersona | undefined {
  return investorPersonas.find((p) => p.slug === slug);
}
