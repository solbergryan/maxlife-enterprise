export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQTopic {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  intro: string;
  faqs: FAQ[];
}

export const faqTopics: FAQTopic[] = [
  {
    slug: "nnn-investments",
    title: "NNN Investment FAQ",
    shortTitle: "NNN Investments",
    metaDescription:
      "Frequently asked questions about triple net (NNN) investment properties in Florida — cap rates, tenant credit, lease terms, 1031 exchanges, and common buyer questions.",
    intro:
      "Triple net (NNN) investment properties are the most passive commercial real estate asset class — but they come with their own vocabulary, cap rate math, and tenant credit considerations. These are the questions we hear most often from first-time NNN buyers and experienced investors looking to scale into net lease real estate in Florida.",
    faqs: [
      {
        question: "What exactly does 'triple net (NNN)' mean?",
        answer:
          "A triple net lease is a commercial lease structure where the tenant pays all three major operating expenses — property taxes, insurance, and maintenance — in addition to base rent. The landlord collects a predictable, passive rent check with minimal landlord responsibilities. An 'absolute NNN' lease goes one step further: the tenant is responsible for roof and structure too. That's the gold standard for truly passive ownership.",
      },
      {
        question: "What's a typical cap rate for NNN properties in 2026?",
        answer:
          "As of early 2026, cap rates for investment-grade NNN properties in Florida generally range from 5.5% to 7.0%, depending on tenant credit, lease term remaining, and market. Investment-grade tenants like Walgreens, CVS, Chick-fil-A, and Starbucks trade tighter (5.0%–6.25%). Stronger-credit dollar stores like Dollar General typically trade 5.75%–6.5%. Auto parts (AutoZone, O'Reilly) are 5.25%–6.25%. Non-investment-grade tenants or properties with shorter lease terms trade wider.",
      },
      {
        question: "How long are typical NNN leases?",
        answer:
          "Most initial NNN lease terms run 10 to 25 years depending on tenant type. Pharmacies (Walgreens, CVS) commonly sign 20–25 year leases. QSR (Chick-fil-A, McDonald's, Starbucks) sign 15–20 years. Dollar General signs 15-year leases with 5 × 5-year options. Auto parts stores typically sign 15–20 years. Most leases include several 5-year tenant-option renewals beyond the initial term.",
      },
      {
        question: "Do I need a lot of money to buy an NNN property?",
        answer:
          "NNN property prices in Florida typically start around $1.5M (Dollar General, small dollar stores) and run to $10M+ for Walgreens, large Wawa, or multi-tenant properties. Most investors finance 60–75% of the purchase price, so equity required typically starts at $450K–$700K for entry-level deals. Many buyers use 1031 exchange proceeds from sold rental properties.",
      },
      {
        question: "What makes a tenant 'investment grade'?",
        answer:
          "Investment-grade tenants are corporations with S&P credit ratings of BBB- or higher (Moody's: Baa3 or higher). Examples include Walgreens (BBB-), CVS Health (BBB), Chase Bank (A+), AutoZone (BBB), Chick-fil-A (private but treated as investment-grade equivalent). Lenders underwrite these tenants aggressively — often with lower rates and higher LTV. Non-IG tenants can still be excellent investments but require more tenant-specific credit analysis.",
      },
      {
        question: "Can I do a 1031 exchange into an NNN property?",
        answer:
          "Yes — NNN properties are the single most popular replacement property for 1031 exchanges. Passive income, long-term leases, and creditworthy tenants make them ideal for investors trading out of active management-heavy real estate. You have 45 days from the sale of your relinquished property to identify replacement properties and 180 days to close. A qualified intermediary must be engaged before the sale of your original property.",
      },
      {
        question: "What happens at the end of the lease term?",
        answer:
          "Tenants typically have multiple 5-year renewal options at predetermined rent increases (often 10% per option period). Most corporate tenants exercise their options because the cost of relocating and opening a new store is high. If a tenant does not renew, you own a free-and-clear commercial property that can be re-leased, sold, or redeveloped — often at a significantly higher value than when purchased.",
      },
      {
        question: "How risky is NNN real estate really?",
        answer:
          "NNN is generally considered one of the lowest-risk commercial real estate investments — but it's not risk-free. Key risks: (1) tenant default (corporate bankruptcy or store closure), (2) cap rate expansion at exit (if interest rates rise), (3) single-tenant concentration. Mitigation: diversify across tenants and geographies, prioritize investment-grade tenants, buy properties in strong locations that would still have leasing value if the tenant leaves.",
      },
      {
        question: "Do I need a property manager for an NNN property?",
        answer:
          "Usually, no. With a true NNN lease, the tenant handles all property-level operations, maintenance, taxes, and insurance. You collect a monthly rent check and file it away. The only real 'management' is annual tax return work and lease administration (noting renewal dates, rent bumps). This is why NNN is so attractive to passive investors.",
      },
      {
        question: "Where should I buy NNN properties in Florida?",
        answer:
          "Central Florida (Orlando metro, Lake Nona, Brevard County, Lake County) offers the best combination of population growth, tenant demand, and reasonable entry pricing. I-4 corridor markets (Orlando to Tampa) see the most institutional demand. Jacksonville and Southwest Florida (Cape Coral, Fort Myers) offer higher cap rates with strong growth. South Florida trades at the tightest cap rates but has institutional liquidity.",
      },
    ],
  },
  {
    slug: "1031-exchange",
    title: "1031 Exchange FAQ",
    shortTitle: "1031 Exchanges",
    metaDescription:
      "Frequently asked questions about 1031 like-kind exchanges for commercial real estate — timelines, qualified intermediaries, replacement property rules, and Florida-specific considerations.",
    intro:
      "A 1031 exchange lets you defer capital gains taxes when you sell investment real estate, provided you reinvest the proceeds into 'like-kind' property within strict IRS timelines. Done right, 1031s are one of the most powerful wealth-building tools in commercial real estate. Done wrong, they trigger full capital gains tax recognition. Here are the questions we hear most often.",
    faqs: [
      {
        question: "What is a 1031 exchange in simple terms?",
        answer:
          "A 1031 exchange (named after Section 1031 of the IRS tax code) lets you sell an investment property and defer capital gains and depreciation recapture taxes — if you reinvest the proceeds into another 'like-kind' investment property within 180 days. The tax isn't forgiven; it's deferred until you sell the replacement property without doing another exchange. Most investors chain exchanges together for decades to compound tax-deferred wealth.",
      },
      {
        question: "What are the 45-day and 180-day rules?",
        answer:
          "The 45-day identification period: You must identify up to 3 potential replacement properties (or more, under the 200% rule) within 45 calendar days of the sale of your relinquished property. The 180-day closing period: You must close on one or more of the identified properties within 180 days of the relinquished sale. Both clocks start on the day you close the sale. These deadlines are absolute — even falling on weekends or holidays doesn't extend them.",
      },
      {
        question: "Do I have to use a qualified intermediary?",
        answer:
          "Yes. You cannot take 'constructive receipt' of the sale proceeds at any point, or the exchange is disqualified. A qualified intermediary (QI), also called an accommodator or facilitator, is a neutral third party that holds the proceeds in an escrow account, prepares exchange documents, and releases funds to purchase the replacement property. The QI must be engaged before you close on the sale of your original property.",
      },
      {
        question: "What qualifies as 'like-kind' property?",
        answer:
          "For real estate, 'like-kind' is interpreted broadly. Almost any US-located investment real estate qualifies as like-kind to any other US-located investment real estate. You can exchange a rental house for an NNN property, raw land for a strip mall, or an apartment building for a car wash. What you cannot do: exchange US property for foreign property, exchange your primary residence, or exchange real estate for personal property (that loophole closed in 2017).",
      },
      {
        question: "Can I do a 1031 exchange on my primary home?",
        answer:
          "No. 1031 exchanges are for investment or business-use property only. Your primary residence is governed by a different (and also very favorable) tax rule — Section 121, the primary residence exclusion, which allows up to $250K ($500K married) of gain tax-free if you lived there 2 of the last 5 years. The two rules are completely separate.",
      },
      {
        question: "How much does a 1031 exchange cost?",
        answer:
          "Standard forward exchanges typically run $800–$1,500 in QI fees. Reverse exchanges (where you acquire replacement property before selling) run $4,000–$10,000+ because they're structurally more complex. Improvement exchanges (where you use exchange funds to build on the replacement property) are similarly complex. These fees are small relative to the tax savings — on a $1M gain at a 25% effective rate, a 1031 exchange saves $250K in current taxes.",
      },
      {
        question: "What's the 200% rule?",
        answer:
          "By default, you can identify up to 3 replacement properties of any value. Under the 200% rule, you can identify more than 3 properties as long as their combined fair market value doesn't exceed 200% of the value of the relinquished property. Under the 95% rule, you can identify even more properties if you close on at least 95% of their combined value. Most investors just use the 3-property default.",
      },
      {
        question: "Can I 1031 exchange into a DST (Delaware Statutory Trust)?",
        answer:
          "Yes. DSTs are IRS-approved 1031 replacement property structures — fractional interests in institutional-quality real estate. DSTs are popular with investors who have exchange funds but can't find the right direct property within 45 days, or who want truly passive ownership. Minimum investments typically start at $100K. DSTs have tradeoffs (less control, lower returns, longer hold periods) so evaluate carefully.",
      },
      {
        question: "What happens if I can't close in 180 days?",
        answer:
          "If you miss the 180-day deadline, the exchange fails and you owe full capital gains tax and depreciation recapture on the original sale in the current tax year. There are no extensions for weekends, holidays, or acts of God (with very limited exceptions for federally-declared disaster areas). This is why identifying multiple qualified replacement properties and starting due diligence early is critical.",
      },
      {
        question: "Do Florida-specific rules apply?",
        answer:
          "Florida follows federal 1031 rules without additional state-level complications — there's no Florida state income tax on capital gains, so the exchange is effectively a pure federal tax deferral tool. Florida is also highly attractive as a destination for exchange funds because of the population growth, no state income tax, and strong commercial real estate performance. Many out-of-state investors exchange into Florida properties specifically for these reasons.",
      },
    ],
  },
  {
    slug: "commercial-real-estate-process",
    title: "Commercial Real Estate Process FAQ",
    shortTitle: "CRE Transaction Process",
    metaDescription:
      "Frequently asked questions about the commercial real estate transaction process — LOI, PSA, due diligence, financing, closing timelines, and key professionals involved.",
    intro:
      "Commercial real estate transactions follow a predictable process but with significantly more complexity than residential deals. Here's what first-time commercial buyers, sellers, and investors need to know about the typical transaction flow from initial interest through closing and beyond.",
    faqs: [
      {
        question: "How long does a typical commercial real estate transaction take?",
        answer:
          "Most commercial transactions take 60–120 days from signed LOI to closing. Cash deals on simple NNN properties can close in 30–45 days. Development deals with entitlements can take 6–18 months. Complex multi-property or lender-heavy deals often stretch to 120–180 days. The biggest timeline variables: financing (30–60 days for underwriting), environmental assessments (Phase I = 2–3 weeks, Phase II = 4–8 weeks), and entitlements (highly jurisdiction-dependent).",
      },
      {
        question: "What's the difference between an LOI and a PSA?",
        answer:
          "A Letter of Intent (LOI) is a non-binding document outlining the key deal terms — purchase price, earnest money, due diligence period, contingencies, and closing date. It's essentially a negotiating document. A Purchase and Sale Agreement (PSA) is the binding contract drafted after the LOI is accepted. The PSA covers representations and warranties, environmental indemnifications, default remedies, and dozens of other legal provisions that don't fit in an LOI. Commercial LOIs are often heavily negotiated before moving to PSA.",
      },
      {
        question: "What is due diligence in a commercial deal?",
        answer:
          "Due diligence is the buyer's opportunity to investigate everything about the property before closing. Typical commercial DD includes: Phase I Environmental Site Assessment, Property Condition Assessment (PCA), ALTA survey, title examination, tenant lease review and estoppels, financial review (3–5 years of operating statements), zoning verification, and legal review. Due diligence periods typically run 30–90 days. If you find problems, you can negotiate, walk away (while earnest money is refundable), or request extensions.",
      },
      {
        question: "How much earnest money is required?",
        answer:
          "Commercial earnest money typically ranges from 1% to 5% of the purchase price — often structured as initial deposit plus additional deposit after due diligence. A common structure on a $3M deal: $30K initial (refundable during DD period), additional $60K (going 'hard' / non-refundable) after DD expires. For larger or more competitive deals, earnest money may be higher and go hard sooner. Everything is negotiable.",
      },
      {
        question: "What does 'going hard' mean?",
        answer:
          "When earnest money goes 'hard,' it becomes non-refundable. Typically this happens at the end of the due diligence period. Going hard signals buyer commitment to close — if the buyer backs out after that point, the seller keeps the earnest money as liquidated damages. Going hard is a key negotiating point: sellers want it to happen earlier; buyers want it to happen later (or be contingent on additional conditions like financing).",
      },
      {
        question: "Do I need a commercial real estate attorney?",
        answer:
          "Absolutely. Commercial transactions are far more legally complex than residential — representations and warranties, environmental indemnifications, title exceptions, tenant estoppels, assignment of leases, and entity structuring. Title companies cannot provide legal advice. A commercial real estate attorney typically quarterbacks the paperwork from PSA negotiation through closing. Expect $3,500–$15,000+ in legal fees for a typical commercial transaction.",
      },
      {
        question: "What is an ALTA survey?",
        answer:
          "An ALTA/NSPS Land Title Survey is the gold standard for commercial properties. It maps the property boundaries, all improvements, easements (recorded and visible), encroachments, setbacks, access points, and flood zone designations. Most commercial lenders require an ALTA survey. Cost: $3,500–$15,000+ depending on property size and Table A items requested. An ALTA survey takes 2–6 weeks to complete.",
      },
      {
        question: "What are tenant estoppel certificates?",
        answer:
          "Estoppels are signed statements from each tenant confirming the lease terms, rent amounts, security deposits, unpaid obligations, and any existing claims against the landlord. They prevent a tenant from later claiming different lease terms than what was represented during the sale. Lenders typically require estoppels on every tenant. They're requested during due diligence and often take 2–4 weeks to collect.",
      },
      {
        question: "What is a Phase I Environmental Site Assessment?",
        answer:
          "A Phase I ESA is a records-based investigation conducted by a licensed environmental consultant to identify Recognized Environmental Conditions (RECs) — evidence of existing or past contamination. It reviews historical aerial photographs, environmental databases, and includes a site visit. Required by virtually every commercial lender. Cost: $2,500–$4,500. Timeline: 2–3 weeks. If RECs are identified, a Phase II ESA with physical soil/groundwater testing may be required.",
      },
      {
        question: "What is a closing statement?",
        answer:
          "A commercial closing statement (sometimes called a settlement statement or HUD for commercial) reconciles every dollar flowing through the transaction: purchase price, loan proceeds, prorations for rent, property taxes, CAM charges, utility deposits, earnest money, commissions, attorney fees, title insurance, and recording fees. Prepared by the title company. A true-up reconciliation happens 60–120 days post-closing for actual operating expense figures.",
      },
    ],
  },
  {
    slug: "land-development",
    title: "Florida Land Development FAQ",
    shortTitle: "Land Development",
    metaDescription:
      "FAQ on Florida commercial land development — zoning, entitlements, site plan approvals, impact fees, concurrency, and build-to-suit development timelines and costs.",
    intro:
      "Commercial land development in Florida involves a regulatory and engineering process that can take 6–24 months before a shovel hits the ground. Understanding zoning, entitlements, concurrency, and the Florida-specific considerations (stormwater, hurricane codes, impact fees) is critical. These are the questions we hear most often from developers, tenants, and investors considering ground-up projects.",
    faqs: [
      {
        question: "What is the difference between zoning and entitlements?",
        answer:
          "Zoning refers to the permitted land uses established by a municipality's zoning ordinance and future land use map — broad categories like 'commercial,' 'industrial,' 'residential.' Entitlements refer to the specific development approvals granted to a particular project — site plan approval, conditional use permits, variances, plat approval. A property can be properly zoned for retail but still require entitlements before construction. The full entitlement process typically takes 3–12 months.",
      },
      {
        question: "How long does it take to entitle land in Florida?",
        answer:
          "Fast-track jurisdictions (some smaller Central Florida cities): 3–6 months. Typical Florida jurisdictions: 6–12 months. Complex jurisdictions (Miami-Dade, coastal areas with environmental sensitivities): 12–18+ months. Rezoning adds 6–12 additional months to the timeline. Projects requiring comprehensive plan amendments can take 18–24 months. Pre-zoned and pre-entitled land carries a significant development premium because of this time savings.",
      },
      {
        question: "What are impact fees in Florida?",
        answer:
          "Impact fees are one-time charges assessed by Florida counties and municipalities to fund infrastructure needed to serve new development — roads, schools, parks, fire, police. Impact fees in Central Florida typically range from $5,000 to $25,000+ per commercial acre depending on use and location. They're paid at building permit issuance. Impact fees are negotiable in some cases (especially when paired with development agreements) and can be significant budget items.",
      },
      {
        question: "What is concurrency?",
        answer:
          "Concurrency is Florida's legal requirement that adequate public infrastructure (roads, water, sewer, schools) is available to support new development. Before a project can be approved, the developer must demonstrate concurrency compliance — sometimes requiring proportionate-share contributions to fund needed infrastructure. Concurrency analysis is a standard part of Florida land entitlement and can add 30–90 days to the approval timeline.",
      },
      {
        question: "How much does it cost to develop a typical NNN retail building?",
        answer:
          "For a single-tenant NNN retail building in Florida (5,000–12,000 SF), total development cost typically ranges from $1.5M to $3M all-in. Breakdown: land 15–25%, site work and utilities 10–15%, vertical construction 50–60%, soft costs (architecture, engineering, permits) 6–8%, financing and contingency 8–12%. Larger pad sites (Walgreens, Wawa) can run $3–$8M+. Cost per SF of vertical construction in Florida typically runs $120–$180 for standard NNN retail.",
      },
      {
        question: "What is a GMP contract?",
        answer:
          "A Guaranteed Maximum Price (GMP) contract is the most common construction contract type for NNN and commercial retail development. The general contractor guarantees a maximum cost — overruns are the GC's responsibility, while savings are typically split with the owner. GMP contracts provide cost certainty for the developer and lender. Essential for build-to-suit projects where the tenant and lender need fixed budgets.",
      },
      {
        question: "What's a typical construction timeline for NNN retail?",
        answer:
          "Standard NNN retail construction (Dollar General, auto parts, small QSR): 6–8 months from permit to certificate of occupancy. Mid-size QSR (Chick-fil-A, Starbucks): 7–9 months. Pharmacy (Walgreens, CVS): 10–12 months. Wawa, large c-store: 10–14 months. Florida weather (rainy season June–September) can extend timelines by 2–4 weeks for earth work and foundations.",
      },
      {
        question: "What permits do I need for commercial development in Florida?",
        answer:
          "Typical permits required: site plan approval, stormwater permit (water management district), utility connection permits, building permit, electrical permit, plumbing permit, mechanical permit, fire suppression permit, sign permits, driveway connection permit (from FDOT for state roads), concurrency certificate, and certificate of occupancy at completion. Most are handled sequentially during the entitlement and construction process.",
      },
      {
        question: "What is a Florida stormwater permit?",
        answer:
          "Florida requires stormwater management permits for most commercial development to protect water quality and prevent flooding. Permits are issued by the appropriate water management district (SFWMD, SWFWMD, SJRWMD, SRWMD, NWFWMD). Small sites may qualify for simple notice-based permits; larger sites require detailed stormwater management systems (retention ponds, dry retention, exfiltration trenches). Permit timeline: 60–180 days.",
      },
      {
        question: "How does hurricane code affect construction cost?",
        answer:
          "Florida's strict hurricane building code (especially in coastal High Velocity Hurricane Zones in Miami-Dade/Broward) significantly impacts construction. All new commercial buildings must be designed for 140+ mph wind loads (higher in coastal areas). Requirements include hurricane-rated windows and doors, strapped roof systems, masonry or concrete tilt-up wall construction, and enhanced structural engineering. Expect 5–15% cost premium compared to non-hurricane jurisdictions.",
      },
    ],
  },
  {
    slug: "commercial-financing",
    title: "Commercial Real Estate Financing FAQ",
    shortTitle: "Commercial Financing",
    metaDescription:
      "Frequently asked questions about commercial real estate financing — loan types, underwriting, LTV, DSCR, SBA loans, CMBS, bridge loans, and financing timelines for CRE acquisitions and development.",
    intro:
      "Financing is often the make-or-break factor in commercial real estate transactions. From conventional bank loans to CMBS, SBA, bridge, and construction financing, understanding which loan structure fits your deal — and how lenders underwrite — saves time, money, and deals. These are the commercial financing questions we hear most often.",
    faqs: [
      {
        question: "What's a typical LTV for commercial real estate loans?",
        answer:
          "Commercial real estate LTV typically ranges 65-75% for stabilized properties. For strong investment-grade NNN properties, some lenders will go up to 75-80% LTV. Construction loans typically run 65-75% LTC (loan-to-cost). Multifamily often achieves higher LTV (75-80%) with agency financing (Fannie/Freddie). Owner-occupied SBA 504 loans can reach 90% LTV.",
      },
      {
        question: "What DSCR do commercial lenders require?",
        answer:
          "Most commercial lenders require a minimum Debt Service Coverage Ratio (DSCR) of 1.20x to 1.30x for stabilized properties. Stronger assets or properties with investment-grade tenants can achieve approvals at 1.15x. Value-add or less stabilized deals may require 1.35x+. DSCR is calculated as NOI / Annual Debt Service.",
      },
      {
        question: "How long does commercial financing take?",
        answer:
          "Typical commercial loan timeline: 45-75 days from application to funding. Bank portfolio loans: 30-60 days. CMBS: 60-90 days. SBA: 60-120 days. Bridge loans: 21-45 days. The timeline depends on third-party reports (appraisal, Phase I, survey), lender internal committee processes, and borrower document responsiveness.",
      },
      {
        question: "What commercial loan types are available?",
        answer:
          "Primary categories: (1) Conventional bank loans — most common, 5-10 year terms, 20-25 year amortization. (2) CMBS — securitized, competitive rates, rigid terms. (3) SBA 504 and 7a — government-backed, owner-occupied. (4) Bridge loans — short-term (1-3 years) for transitions. (5) Construction loans — draw-based financing for ground-up development. (6) Life company loans — institutional-quality properties. (7) Agency loans — multifamily specific (Fannie/Freddie).",
      },
      {
        question: "What are commercial loan interest rates in 2026?",
        answer:
          "As of early 2026, commercial mortgage rates range widely by lender type and asset quality. Conventional bank portfolio: ~6.5-7.5%. CMBS: ~6.0-7.0%. SBA 504: ~6.0-7.0%. Bridge loans: ~8.0-12.0%. Construction loans: Prime + 1-3% (~7.5-10%). Rates are volatile — always get fresh quotes at the time of financing decision.",
      },
      {
        question: "Do I need personal guarantees on commercial loans?",
        answer:
          "Smaller commercial loans (under $2-5M) almost always require personal guarantees. Larger institutional loans (CMBS, life companies) on stabilized properties can be non-recourse, with carve-outs for 'bad boy acts' (fraud, misrepresentation, voluntary bankruptcy). Strong sponsors with established track records can sometimes negotiate limited or burn-off guarantees.",
      },
      {
        question: "What's the difference between recourse and non-recourse?",
        answer:
          "Recourse loans: The borrower (and guarantor) is personally liable for the debt beyond the property itself. If the property doesn't cover the loan at foreclosure, the lender can pursue personal assets. Non-recourse loans: The property is the only collateral. Lender cannot pursue borrower personally except in cases of 'bad boy' conduct. Non-recourse is preferred but usually limited to larger stabilized deals.",
      },
      {
        question: "What documents do I need to apply for a commercial loan?",
        answer:
          "Typical package: (1) Sponsor financials (PFS, 2-3 years tax returns), (2) Sponsor experience resume, (3) Entity organizational documents, (4) Subject property rent roll, (5) Operating statements (2-3 years), (6) Pro forma with assumptions, (7) Purchase contract, (8) Environmental records if available, (9) Leases or lease abstracts, (10) Business plan for value-add or development. Expect 50-100+ pages total.",
      },
      {
        question: "Can I get financing for NNN property acquisition?",
        answer:
          "Yes — NNN single-tenant net lease properties are among the easiest commercial deals to finance. Investment-grade tenants (Walgreens, CVS, AutoZone, Dollar General) support 70-75% LTV with favorable rates. Many lenders specialize in NNN including private banks, credit unions, life companies, and specialty NNN lenders. Expect 45-60 day close.",
      },
      {
        question: "What's a mortgage broker vs a lender?",
        answer:
          "A commercial mortgage broker shops your loan to multiple lenders to find the best terms. They have access to 20+ capital sources across banks, CMBS, SBA, bridge, and life companies. A direct lender lends their own money from a single source. Brokers charge origination fees (0.5-1% of loan amount) but typically find better terms than you would directly. Best for complex or specialized deals.",
      },
    ],
  },
  {
    slug: "property-management",
    title: "Commercial Property Management FAQ",
    shortTitle: "Property Management",
    metaDescription:
      "FAQ on commercial real estate property management — tenant relations, CAM reconciliation, lease administration, capital planning, and when to hire a property manager.",
    intro:
      "Owning commercial real estate doesn't mean you have to manage it yourself. Professional property management preserves asset value, maximizes NOI, and frees you to focus on strategic decisions. Here's what every CRE owner should know about property management — from whether you need it to how to evaluate providers.",
    faqs: [
      {
        question: "Do I need a property manager for NNN properties?",
        answer:
          "For true absolute NNN single-tenant properties, usually no. The tenant handles all operations, maintenance, taxes, and insurance. You collect rent and file it away. The only 'management' is annual bookkeeping and tracking lease events (renewal dates, rent escalations). For multi-tenant properties or properties with landlord maintenance obligations, yes — professional management is almost always worth the cost.",
      },
      {
        question: "What does a property manager do?",
        answer:
          "Core property manager duties: (1) Collect rent and manage receivables, (2) Coordinate maintenance and vendor contracts, (3) Handle tenant communications and issues, (4) Manage CAM reconciliations and pass-throughs, (5) Prepare monthly financial reports, (6) Administer leases and manage renewals, (7) Oversee capital projects, (8) Maintain insurance and compliance documentation, (9) Interface with owners on strategic decisions.",
      },
      {
        question: "How much does commercial property management cost?",
        answer:
          "Typical commercial PM fees: 3-6% of gross collected rent for stabilized properties. Smaller properties or heavy lease-up scenarios may have higher percentage fees or minimum monthly fees. Leasing commissions are separate (typically 4-6% of total lease value on new leases, 2-3% on renewals). Capital projects may carry a supervision fee (10-15% of cost).",
      },
      {
        question: "What's a CAM reconciliation?",
        answer:
          "CAM (Common Area Maintenance) reconciliation is the annual process of comparing estimated CAM charges billed to tenants monthly against actual CAM expenses incurred. If actual expenses exceeded estimates, tenants owe the difference. If estimates exceeded actual, tenants get a credit. CAM reconciliations are typically completed within 90-120 days after year-end and are reviewed by tenants (who may audit).",
      },
      {
        question: "What should I look for in a property manager?",
        answer:
          "Key factors: (1) Experience with your property type (retail, office, industrial each have different dynamics), (2) Local market knowledge, (3) Technology platform (owner portal, tenant portal, accounting system), (4) Response time to tenant/owner issues, (5) Financial reporting quality and timing, (6) References from current clients, (7) Fee structure transparency, (8) Insurance and bonding, (9) Preventive maintenance approach.",
      },
      {
        question: "Can I self-manage my commercial property?",
        answer:
          "For simple NNN single-tenant properties — yes, self-management is common and low-burden. For multi-tenant properties, self-management requires significant time: tenant communications, vendor coordination, accounting, reconciliations. Most owners of multi-tenant properties find that professional PM pays for itself through better tenant retention, faster leasing, and fewer operational issues. Rule of thumb: if you have 3+ tenants or non-absolute-NNN leases, hire a professional.",
      },
      {
        question: "What's the difference between property management and asset management?",
        answer:
          "Property management is tactical — day-to-day operations, tenant issues, maintenance, bookkeeping. Asset management is strategic — portfolio-level oversight, hold/sell decisions, capital planning, refinancing strategy, investor reporting. A property manager reports to the asset manager, who reports to the owner. On small portfolios, the owner often performs asset management directly.",
      },
      {
        question: "How do I evaluate my property manager's performance?",
        answer:
          "Key metrics: (1) Occupancy rate trends, (2) Rent collection rate (aim for 98%+), (3) Tenant retention rate on lease expirations, (4) Days to lease up vacant space, (5) Operating expense vs budget variance, (6) CAM reconciliation accuracy, (7) Response time to tenant issues, (8) Financial reporting timeliness and accuracy, (9) Capital project management. Review quarterly; benchmark against market.",
      },
      {
        question: "What property management software is standard?",
        answer:
          "Leading commercial PM platforms: Yardi Voyager (enterprise standard), RealPage (multifamily-focused with commercial capabilities), MRI Software, AppFolio (mid-market), Buildium (smaller portfolios), Entrata. For owners who want visibility, pick a PM using a platform with owner and tenant portals for real-time access to financials and lease documentation.",
      },
      {
        question: "Does MaxLife Development offer property management?",
        answer:
          "Yes, MaxLife Development provides commercial property management services across Central Florida. We focus on NNN, multi-tenant retail, medical office, and small commercial properties. Services include rent collection, maintenance coordination, CAM reconciliation, financial reporting, and leasing. Contact us for a management proposal.",
      },
    ],
  },
];

export function getFAQTopic(slug: string): FAQTopic | undefined {
  return faqTopics.find((t) => t.slug === slug);
}
