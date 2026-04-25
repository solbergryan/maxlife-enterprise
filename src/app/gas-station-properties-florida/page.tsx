import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import DealAnalyzer from "@/components/DealAnalyzer";

export const metadata: Metadata = {
  title:
    "Gas Station Properties for Sale in Florida | NNN C-Store & Fuel Investments",
  description:
    "Buy gas station and convenience store real estate in Florida. Wawa, 7-Eleven, RaceTrac, Circle K, and branded fuel NNN leasebacks with cap rates, underwriting, and a pre-loaded deal analyzer.",
  keywords:
    "gas station properties florida, gas station for sale orlando, nnn gas station investment, wawa property for sale, 7-eleven nnn, c-store real estate florida, convenience store investment",
};

const gasStationFormats = [
  {
    name: "Corporate Credit C-Store w/ Fuel",
    capRate: "4.50% – 5.50%",
    footprint: "5,000 – 6,500 SF + 1.5 – 2.0 acres",
    note:
      "Wawa, 7-Eleven, Buc-ee's, QuikTrip and similar investment-grade operators. Tightest pricing in specialty CRE — effectively a ground-lease alternative backed by billion-dollar balance sheets.",
  },
  {
    name: "Branded Franchise Fuel Pad",
    capRate: "5.50% – 6.50%",
    footprint: "3,000 – 4,500 SF + 1.0 – 1.5 acres",
    note:
      "Circle K, Shell, Mobil, Chevron, BP, Sunoco. Franchise operator with major fuel-brand supply agreement. Deeper buyer pool than unbranded independents.",
  },
  {
    name: "Independent / Unbranded Fuel + C-Store",
    capRate: "6.50% – 8.00%",
    footprint: "1,800 – 3,500 SF + 0.75 – 1.25 acres",
    note:
      "Owner-operator or local chain with unbranded fuel supply. Higher yield, weaker lease guarantees, and often bundled with an operating business sale.",
  },
  {
    name: "Travel Center / Truck Stop",
    capRate: "6.00% – 7.50%",
    footprint: "8 – 30+ acres",
    note:
      "Pilot Flying J, Love's, TA, Buc-ee's large-format. High diesel throughput, DEF, restaurant, and truck parking. Institutional product with interstate-corridor exposure.",
  },
  {
    name: "Ground Lease (Fee Simple Dirt)",
    capRate: "4.25% – 5.25%",
    footprint: "1.5 – 2.5 acres",
    note:
      "Landlord owns the land only; tenant builds and maintains everything above grade. Used by Wawa, 7-Eleven, and RaceTrac — cleanest specialty-CRE structure in existence.",
  },
  {
    name: "EV Charging + Convenience",
    capRate: "5.50% – 7.00%",
    footprint: "1.0 – 2.0 acres",
    note:
      "Emerging format: high-speed DCFC charging bays with a premium convenience/food offering. Tesla Supercharger, Electrify America, and convenience operators are rolling out Florida sites now.",
  },
];

const floridaFuelDrivers = [
  {
    title: "#1 State for Population Growth",
    description:
      "Florida added more net new residents than any other state three years running. More residents, more vehicles, more miles driven — the denominator under every fuel and C-store P&L in the state.",
  },
  {
    title: "No State Income Tax — More Disposable Spend",
    description:
      "Florida's no-income-tax structure boosts household discretionary spend. Inside-store basket size (the profit engine of a modern C-store) runs 10–20% above the national average.",
  },
  {
    title: "130M+ Annual Visitors",
    description:
      "Tourism layers institutional fuel demand on top of resident traffic. Orlando alone sees 75M+ visitors a year, most arriving by car or rental, all filling up multiple times during their stay.",
  },
  {
    title: "Hurricane & Evacuation Fuel Cycles",
    description:
      "Every named-storm event drives a massive pre-storm fuel demand spike followed by 2–4 weeks of elevated post-storm consumption as power restoration and rebuilding activity ramps. It's a recurring, structurally bullish demand pattern.",
  },
  {
    title: "No Winter Shutdown",
    description:
      "Unlike northern markets that lose Q1 to weather, Florida C-stores operate at full throughput every month of the year. Fuel volumes and inside sales never take a seasonal dip.",
  },
  {
    title: "Snowbird & RV Demographics",
    description:
      "Seasonal snowbird populations, RV travel, and boating culture create specialty fuel demand for diesel, marine gas, non-ethanol premium, and DEF — all higher-margin product than regular unleaded.",
  },
];

const gasStationPros = [
  {
    title: "Tightest Specialty Cap Rates",
    description:
      "Corporate-credit C-store ground leases trade inside 5% — some of the tightest pricing in specialty CRE. The closest thing to a Treasury bond the NNN market offers.",
  },
  {
    title: "Ground Lease Structures Available",
    description:
      "Wawa, 7-Eleven, RaceTrac and others prefer 15–25 year ground leases. Landlord owns the dirt only; the tenant builds, maintains, insures, and eventually hands back an improved pad.",
  },
  {
    title: "Inside Sales Dwarf Fuel Margin",
    description:
      "Modern C-stores earn 60–75% of gross profit from inside sales (food, coffee, beverages, tobacco, lottery). Fuel is a traffic driver, not the margin engine — which stabilizes tenant credit.",
  },
  {
    title: "Long Lease Terms & Bumps",
    description:
      "Typical primary term of 15–25 years plus four to six 5-year renewal options. Rent bumps are normally 10% every 5 years or CPI-linked — inflation protection built into the income stream.",
  },
  {
    title: "Bonus Depreciation Power-House",
    description:
      "Canopies, fuel pumps, USTs, site work, and pad improvements often allocate 35–50% of purchase price to 15-year and 5-year property through cost segregation — one of the most aggressive tax-shelter asset classes in CRE.",
  },
  {
    title: "Recession-Defensive Demand",
    description:
      "Fuel is non-discretionary and C-store inside sales proved resilient through 2008, 2020, and every Florida hurricane. Down-cycle volumes typically dip less than 5%.",
  },
  {
    title: "Consolidation Tailwinds",
    description:
      "7-Eleven (Speedway), Couche-Tard (Circle K), ArcLight (Pilot Flying J), EG America, and Casey's are all active consolidators. Multi-billion-dollar balance sheets are chasing the same Florida pads you are.",
  },
];

const gasStationCons = [
  {
    title: "Environmental Exposure (USTs)",
    description:
      "Underground storage tanks, fuel dispensers, and decades of drips create real environmental liability. Phase I ESA is mandatory; Phase II testing is standard; tank integrity reports are non-negotiable.",
  },
  {
    title: "Remaining Lease Term Risk",
    description:
      "Value compresses sharply as you approach the last 5–7 years of lease term. The appraiser's residual value assumption is where gas-station deals live or die.",
  },
  {
    title: "Purpose-Built Reuse Challenge",
    description:
      "A decommissioned fuel pad has narrow reuse options. QSR, auto service, or car wash conversions are possible but expensive once tanks are pulled and the canopy removed.",
  },
  {
    title: "EV Transition Headline Risk",
    description:
      "Electrification narrative is real but slow-moving. Florida EV adoption is well behind California. Underwrite the transition carefully — don't ignore it, but don't overweight it.",
  },
  {
    title: "Operator Credit Variance",
    description:
      "A Wawa lease and an independent unbranded lease are both 'gas stations.' Tenant credit is the single biggest determinant of cap rate and resale liquidity in this asset class.",
  },
  {
    title: "Narrow Lender Pool",
    description:
      "Environmental risk means fewer lenders, lower LTVs (typically 55–70%), and wider debt spreads than a comparable retail NNN. Plan on a specialty-CRE lender or SBA 7(a) program.",
  },
];

const investorPersonas = [
  {
    name: "1031 Exchange Buyers",
    tag: "Big Exchange Absorption",
    description:
      "Exchange buyers needing to place $3M – $20M+ of proceeds into a single clean NNN deal before the 180-day clock expires.",
    fit: "A Wawa or 7-Eleven ground lease absorbs a big exchange in one transaction with institutional-grade credit and a 20-year runway.",
  },
  {
    name: "Passive Income Investors",
    tag: "Mailbox Money",
    description:
      "Investors who want truly passive NNN income with zero landlord responsibilities — no roof, no parking lot, no environmental monitoring.",
    fit: "Ground lease structures put every above-grade obligation on the tenant. It's the most passive asset class in CRE, full stop.",
  },
  {
    name: "High-Income W-2 Earners",
    tag: "Cost Seg Heavy",
    description:
      "Doctors, executives, and business owners using bonus depreciation on equipment-heavy assets to shelter active income.",
    fit: "Gas station cost seg studies routinely allocate 35–50% of purchase price to accelerated-depreciation buckets — the most generous allocation in specialty CRE.",
  },
  {
    name: "Family Offices & Trusts",
    tag: "Multi-Decade Hold",
    description:
      "Multi-generational allocators targeting inflation-protected income with low management burden and minimal re-leasing risk.",
    fit: "20-year primary terms plus renewal options with built-in bumps align perfectly with family-office duration mandates.",
  },
  {
    name: "Operator-Owners",
    tag: "Portfolio Builders",
    description:
      "Existing C-store dealers and franchisees assembling portfolios of their own sites across high-growth Florida corridors.",
    fit: "Owning the real estate under your operating business builds long-duration wealth and hedges against future franchise renegotiations.",
  },
  {
    name: "REITs & Institutional Funds",
    tag: "Scale Buyers",
    description:
      "Net-lease REITs (Spirit, Agree, Realty Income, Getty, Four Corners) and private funds building scaled C-store portfolios.",
    fit: "Corporate-guaranteed Wawa / 7-Eleven / Circle K leases underwrite cleanly against portfolio-level credit metrics.",
  },
];

const majorOperators = [
  {
    name: "Wawa",
    detail:
      "Private, investment-grade. Gold-standard Florida C-store. 300+ FL sites and growing; their ground leases are the tightest product in the market.",
  },
  {
    name: "7-Eleven / Speedway",
    detail:
      "World's largest C-store chain (Seven & i Holdings). Acquired Speedway in 2021 for $21B. Aggressive Florida sale-leaseback pipeline.",
  },
  {
    name: "RaceTrac",
    detail:
      "Private Atlanta-based chain with 800+ stores concentrated in the Southeast. Strong Florida pipeline with modern 6,000+ SF prototype.",
  },
  {
    name: "Circle K / Couche-Tard",
    detail:
      "Publicly traded (TSX: ATD). 16,000+ global stores. Franchise + corporate model; most active public consolidator in the category.",
  },
  {
    name: "Buc-ee's",
    detail:
      "Texas-based destination C-store with 100-pump forecourts. Florida expansion just kicked off with sites in Daytona, St. Augustine, and more.",
  },
  {
    name: "QuikTrip",
    detail:
      "Private Tulsa-based chain aggressively entering Florida. Investment-grade credit and a 5,500+ SF food-forward prototype.",
  },
  {
    name: "Pilot Flying J",
    detail:
      "Berkshire Hathaway majority-owned travel center operator. Largest interstate fuel network in North America.",
  },
  {
    name: "Love's Travel Stops",
    detail:
      "Private Oklahoma-based travel center chain. 600+ locations; major Florida interstate corridor expansion.",
  },
  {
    name: "Casey's General Stores",
    detail:
      "Publicly traded (NASDAQ: CASY). Midwestern C-store chain now expanding into the Southeast.",
  },
  {
    name: "EG America",
    detail:
      "PE-backed (TDR Capital) consolidator of Cumberland Farms, Kwik Shop, and dozens of regional brands.",
  },
  {
    name: "GPM Investments (Arko)",
    detail:
      "Publicly traded (NASDAQ: ARKO) C-store consolidator with 1,400+ stores and multiple Florida banner acquisitions.",
  },
  {
    name: "Shell / Mobil / Chevron / BP",
    detail:
      "Major-oil branded franchises supplied under long-term fuel agreements. Franchise operator holds the lease; major oil holds the brand.",
  },
];

const keyUnderwritingMetrics = [
  {
    label: "Monthly Fuel Gallons",
    detail:
      "Florida benchmark: 125K – 250K gallons/month for a healthy pad. Top Wawa / Buc-ee's sites push 400K+.",
  },
  {
    label: "Inside Sales Per Day",
    detail:
      "Modern Florida C-stores: $4,500 – $9,000/day inside sales. Food-service conversion is the single biggest profitability lever.",
  },
  {
    label: "Fuel Margin (CPG)",
    detail:
      "National retail fuel margin has structurally expanded from 15¢ to 35¢+ per gallon over the last decade.",
  },
  {
    label: "Inside Gross Profit %",
    detail:
      "Inside sales mix typically generates 30 – 38% gross margin vs. ~8% on fuel — why inside sales drive store profitability.",
  },
  {
    label: "Food Service % of Inside",
    detail:
      "Best-in-class: food service drives 25 – 35% of inside sales. Drives basket size, frequency, and lunch-daypart traffic.",
  },
  {
    label: "Rent Coverage (EBITDAR)",
    detail:
      "Target 3.0x+ rent coverage on the tenant P&L. Below 1.75x is a red flag on any non-credit guarantor.",
  },
  {
    label: "Remaining Lease Term",
    detail:
      "Value is stable through year 10 of a 20-year lease, then compresses ~30 – 50 bps per year of runoff below 10 years.",
  },
  {
    label: "Tank & Canopy Age",
    detail:
      "UST remaining useful life, double-wall compliance, Stage II vapor recovery status, canopy structural condition.",
  },
  {
    label: "Environmental (Phase I / II)",
    detail:
      "Phase I ESA mandatory; Phase II testing standard on any site 20+ years old or with prior release history.",
  },
];

const environmentalChecklist = [
  {
    title: "Phase I ESA",
    description:
      "Always. No exceptions. Document search, site walk, prior-use review. Identifies recognized environmental conditions (RECs).",
  },
  {
    title: "Phase II (If REC Identified)",
    description:
      "Soil borings, groundwater sampling, and lab analysis to characterize any suspected release. Typical cost: $15K – $60K.",
  },
  {
    title: "FDEP Cleanup Status",
    description:
      "Verify Florida DEP discharge history and cleanup-program status (PCPP, ATRP, NFA closure letters). Request full file review.",
  },
  {
    title: "UST Integrity & Age",
    description:
      "Tank age, double-wall compliance, cathodic protection, leak detection equipment, and most recent tightness tests.",
  },
  {
    title: "Environmental Insurance",
    description:
      "Pollution legal liability (PLL) policy is standard — typically $1M – $5M coverage with 10-year term. Seller often pays.",
  },
  {
    title: "Indemnity From Tenant",
    description:
      "Lease should require tenant indemnification for all environmental conditions arising during their occupancy.",
  },
];

const floridaHotspots = [
  {
    name: "Orlando MSA",
    detail:
      "I-4 corridor, tourist traffic, theme park feeder roads, and explosive Lake / Osceola / Seminole growth. The state's most active C-store ground-lease market.",
  },
  {
    name: "Tampa Bay / St. Pete",
    detail:
      "I-75, I-275, I-4 interchange. Massive commuter + tourist fuel demand with a Wawa and 7-Eleven pipeline measured in dozens of sites.",
  },
  {
    name: "Jacksonville",
    detail:
      "I-95 / I-10 crossroads, port traffic, logistics growth. High diesel throughput and strong travel-center fundamentals.",
  },
  {
    name: "Miami / Broward / Palm Beach",
    detail:
      "Dense urban fuel demand, tourism, and luxury-retail-adjacent pads. Premium site values; tightest cap rates in the state.",
  },
  {
    name: "Southwest Florida (Naples / Fort Myers)",
    detail:
      "Retiree growth, seasonal snowbird surge, and post-hurricane rebuild fuel demand. Buc-ee's target market.",
  },
  {
    name: "Space Coast / Brevard",
    detail:
      "SpaceX / NASA growth, I-95 corridor, and coastal residential sprawl from Melbourne to Titusville.",
  },
];

const evChargingNetworks = [
  {
    name: "Tesla Supercharger",
    detail:
      "Largest and most reliable DCFC network in the world. Opening to non-Tesla vehicles via NACS. Premium Florida site pipeline — Wawa and 7-Eleven partnerships already live.",
  },
  {
    name: "Electrify America",
    detail:
      "VW-funded open network; 150–350 kW DCFC bays. Aggressive Florida rollout along I-95, I-75, I-4, and Turnpike with Walmart and Target pads as primary host sites.",
  },
  {
    name: "EVgo",
    detail:
      "Publicly traded (NASDAQ: EVGO). Urban + highway DCFC network. Partnerships with Wawa, 7-Eleven, Chevron, and Meijer for co-located charging-plus-retail sites.",
  },
  {
    name: "ChargePoint",
    detail:
      "Publicly traded (NYSE: CHPT). Largest networked charging platform — both Level 2 and DCFC. Strong presence in Florida municipal and workplace deployments.",
  },
  {
    name: "Shell Recharge",
    detail:
      "Shell's branded EV charging network. Co-located at Shell-branded C-store pads and standalone destinations. Backed by global Shell infrastructure.",
  },
  {
    name: "bp pulse",
    detail:
      "BP's global EV charging brand, growing fast in the US via the TravelCenters of America (TA) acquisition. Interstate-corridor focus aligns with travel centers.",
  },
  {
    name: "Mercedes-Benz Charging",
    detail:
      "Luxury-branded DCFC network launching across North America with 350 kW bays and premium amenities. First Florida sites coming online now.",
  },
  {
    name: "Ionna",
    detail:
      "Joint venture of BMW, GM, Honda, Hyundai, Kia, Mercedes, and Stellantis. 30,000 charge ports planned by 2030. Premium amenities and canopy-covered bays.",
  },
];

const evInsights = [
  {
    title: "C-Store Operators Are Now EV Partners",
    description:
      "Wawa, 7-Eleven, Circle K, and RaceTrac all have active DCFC rollouts — either branded (7Charge) or in partnership with Tesla, Electrify America, and EVgo. Modern Florida C-store pads are being built 'EV-ready' with conduit and transformer capacity pre-installed.",
  },
  {
    title: "Charging Dwell Time = Inside Sales Opportunity",
    description:
      "A DCFC session runs 15–40 minutes — dramatically longer than the 4-minute average gas fill-up. Longer dwell time drives higher inside-sales basket size on food, beverages, and snacks. Charging is a C-store profitability amplifier, not a cannibalizer.",
  },
  {
    title: "Florida NEVI Funding Pipeline",
    description:
      "Florida is receiving $198M in federal NEVI funding (National Electric Vehicle Infrastructure program) to build DCFC stations every 50 miles along I-95, I-75, I-4, I-10, I-295, and the Florida Turnpike. Existing C-store pads on those corridors are prime NEVI host candidates.",
  },
  {
    title: "Utility Interconnect is the Gating Item",
    description:
      "The pace of EV charging deployment is constrained by utility transformer upgrades, not by canopy or pump hardware. 4-pump DCFC installations require 1–4 MW of new service — verify Duke / FPL / TECO interconnection timelines before underwriting EV conversion value.",
  },
  {
    title: "Cap Rates Still Settling",
    description:
      "Dedicated EV charging real estate is trading 5.5%–7.0% on credit-tenant leases (Tesla, EVgo, ChargePoint). Combined C-store + charging pads price tighter because they underwrite on the C-store's P&L with charging treated as option value.",
  },
  {
    title: "EV Charging is a Land-Use Play",
    description:
      "For C-store landlords, adding DCFC creates a future-proofing moat. A pad with charging infrastructure retains value even if fuel volumes decline over the next 15–20 years. Pure fuel-only pads with no EV-ready infrastructure face the most residual-value risk.",
  },
];

const gasStationFaqs = [
  {
    q: "What's a typical cap rate for a gas station NNN in Florida?",
    a: "Corporate-credit C-store ground leases (Wawa, 7-Eleven, RaceTrac) trade between 4.5% and 5.5%. Branded franchise fuel pads (Circle K, Shell, Mobil, Chevron) run 5.5% – 6.5%. Independent/unbranded operators trade wider at 6.5% – 8.0%. Travel centers on interstate corridors run 6.0% – 7.5%. Florida is one of the tightest specialty markets in the country because of population growth and tourism.",
  },
  {
    q: "What's the difference between a ground lease and a fee simple gas station?",
    a: "On a ground lease, you own only the land; the tenant owns, builds, insures, maintains, and eventually removes the building, canopy, pumps, and tanks. On a fee simple lease, you own everything and the tenant pays NNN rent. Ground leases trade 50–100 bps tighter than fee simple because they push even more responsibility to the tenant — it's effectively a bond on the dirt.",
  },
  {
    q: "How serious is the environmental liability on a gas station?",
    a: "It's the biggest diligence item in the asset class and must be addressed head-on. A Phase I ESA is mandatory on every deal. Phase II subsurface testing is common on older sites. Run the FDEP file review, verify UST double-wall compliance and cathodic protection, and require tenant indemnification in the lease. Always buy pollution legal liability insurance at closing. When done correctly, environmental risk is manageable and priced in — that's why gas stations yield 50–150 bps wider than retail NNN with identical tenant credit.",
  },
  {
    q: "Will EVs kill gas station investments?",
    a: "Not this decade, and probably not the next either. Florida EV adoption is well below the national average. More importantly, modern C-stores earn 60–75% of gross profit from inside sales (food, coffee, beverages), not fuel margin. A C-store with 100-pump forecourt and a large food-service program is effectively a roadside retail store with fuel as a traffic driver. Operators are also adding DCFC charging bays now — dwell time while charging is a huge inside-sales opportunity. Underwrite the EV transition as a 10–20 year headwind, not an immediate threat.",
  },
  {
    q: "What's the investment case for EV charging real estate?",
    a: "Standalone and co-located DCFC charging sites are an emerging specialty CRE category with cap rates settling in the 5.5% – 7.0% range on credit-tenant leases (Tesla, EVgo, ChargePoint, Electrify America). The best opportunities today are combined C-store + DCFC pads — you underwrite the C-store NNN as the primary income and get charging as option value. Pure standalone charging pads are higher-risk because tenant credit, charging demand, and network economics are still maturing. Ground leases to investment-grade networks (Tesla, Shell Recharge, bp pulse, Ionna) are the cleanest entry point.",
  },
  {
    q: "Should I require EV-ready infrastructure when buying a gas station pad?",
    a: "Yes, especially for newer builds and renovations. Ask for confirmation that the site has (1) conduit runs from the electrical room to the fuel canopy / parking area, (2) adequate transformer and switchgear capacity for 4–8 future DCFC bays (roughly 1–4 MW), (3) utility interconnection studies already filed with Duke / FPL / TECO. EV-ready infrastructure can cost $200K – $600K to retrofit later but $20K – $50K to rough-in during construction — a massive residual-value differentiator.",
  },
  {
    q: "Is Florida a strong market for EV charging real estate?",
    a: "Yes and strengthening. Florida is receiving $198M in federal NEVI funding to build DCFC stations every 50 miles along I-95, I-75, I-4, I-10, I-295, and the Turnpike. Tesla, Electrify America, EVgo, bp pulse, Mercedes-Benz Charging, and Ionna all have active Florida rollouts. EV registrations in Florida are growing faster than the national average from a low base. Tourism demand (rental-car EVs, road-trip charging) layers on top of resident adoption. The state's C-store operators are some of the most aggressive EV-ready developers in the country.",
  },
  {
    q: "What's the typical lease term for a gas station?",
    a: "15–25 year primary term is standard, with four to six 5-year renewal options. Rent bumps are typically 10% every 5 years, or CPI-indexed with floor and ceiling. Wawa and Buc-ee's regularly sign 25-year primary terms with 10% bumps every 5 years plus 4x5-year options — a 45-year runway of effective control for the landlord.",
  },
  {
    q: "How does cost segregation work on a gas station?",
    a: "A cost seg study on a gas station typically allocates 35–50% of purchase price to 5-year and 15-year property: fuel pumps, canopy, USTs, site work, striping, lighting, signage, and POS equipment. This is one of the most aggressive cost-seg allocations in CRE. For a high-income investor, that can translate into $1M – $4M of first-year bonus depreciation on a $5M–$10M purchase, sheltering huge amounts of active or passive income.",
  },
  {
    q: "Can I 1031 exchange into a gas station?",
    a: "Yes. Fee-simple and ground-lease gas stations both qualify as like-kind replacement property for a 1031 exchange (ground leases must have 30+ years of remaining term to qualify). Gas station leasebacks are one of the most popular 1031 replacement assets because a single deal absorbs large exchange amounts ($3M – $25M+), offers long lease terms, and provides institutional tenant credit.",
  },
  {
    q: "Who owns the underground storage tanks?",
    a: "On a modern NNN or ground lease, the tenant owns and is responsible for all USTs, dispensers, canopies, and fuel equipment. The landlord owns the land (and, on a fee simple deal, the building shell). Tenant indemnification for environmental conditions is standard. Always confirm lease language assigns UST ownership, compliance, and removal obligations to the tenant.",
  },
  {
    q: "What does a Wawa ground lease pay per year?",
    a: "Florida Wawa ground-lease rents typically range from $225K – $350K per year depending on site size, traffic counts, and market. Primary term is usually 20 years with 10% bumps every 5 years and 6x5-year renewal options — a 50-year lease runway at the landlord's option.",
  },
  {
    q: "Are gas stations a good investment today?",
    a: "For the right investor, yes. Corporate-credit C-store ground leases in Florida offer some of the tightest, most durable cap rates in specialty CRE, backed by investment-grade tenants in the fastest-growing state in the country. They're not a fit for buyers who need yield above 6%, can't underwrite environmental diligence, or need maximum reuse optionality — but for 1031 buyers, passive income investors, and high-income earners chasing cost seg, they are as close to a cash-flow Treasury bond as CRE gets.",
  },
];

const fitCheckQuestions = [
  "You want truly passive NNN or ground-lease income from an investment-grade tenant.",
  "You're on a 1031 exchange clock and need $3M – $25M of replacement property in one transaction.",
  "You value institutional tenant credit (Wawa, 7-Eleven, RaceTrac) over chasing maximum yield.",
  "You can underwrite environmental diligence and are comfortable with Phase I / Phase II ESA workflows.",
  "You want aggressive bonus depreciation and cost-seg allocation to shelter active or passive income.",
  "You're comfortable with a 15–25 year hold and value inflation-protected rent escalations.",
];

const gasStationMetrics = [
  {
    label: "Typical Deal Size",
    value: "$3M – $15M+",
    detail: "Single-site pads; travel centers and auto-malls push higher",
  },
  {
    label: "Common Cap Rate",
    value: "4.5% – 6.5%",
    detail: "Corporate-credit C-store to branded franchise",
  },
  {
    label: "Avg. Lease Term",
    value: "15 – 25 yrs",
    detail: "Primary term + 4–6 renewal options",
  },
  {
    label: "Inside Sales / Day",
    value: "$4.5K – $9K",
    detail: "Typical modern Florida C-store performance",
  },
];

// Representative Florida Wawa ground lease — ~$6.5M purchase,
// $325K annual rent, 5.0% entry cap, 20-year NNN ground lease.
const preloadedGasStationDeal = {
  assetType: "NNN" as const,
  purchasePrice: "6500000",
  buildingSF: "6000",
  annualRent: "325000",
  rentGrowth: "2.0",
  vacancyRate: "0",
  downPaymentPct: "35",
  interestRate: "7.00",
  amortization: "25",
  closingCosts: "35000",
  loanOrigFee: "1.0",
  holdPeriod: "10",
  exitCapSpread: "0.50",
};

export default function GasStationPropertiesFloridaPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://maxlifedevelopment.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Gas Station Properties Florida",
              item: "https://maxlifedevelopment.com/gas-station-properties-florida",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: gasStationFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/commercial-stock/special-purpose/maxlife-special-purpose-fuel-gas-station-refueling-gas-gasoline-car-wallpapers-gasol-6999650.webp"
          alt="Florida gas station fuel pumps at a modern convenience store pad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
                Gas Station &amp; C-Store Investments
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Gas Station &amp; C-Store Properties in Florida
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Tightest cap rates in specialty CRE, backed by investment-grade
                C-store credit in the fastest-growing state in America
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Florida C-store pads are arguably the most tightly priced
                specialty NNN assets in the country. Wawa, 7-Eleven, RaceTrac,
                and Buc-ee&apos;s ground leases regularly trade inside a 5.0%
                cap rate — backed by investment-grade credit, 20-year primary
                terms, and a state that leads the nation in population growth.
                Whether you&apos;re placing a 1031 exchange, building a
                net-lease portfolio, or hunting aggressive cost-seg tax shelter,
                Florida fuel pads are among the most durable income-producing
                assets in commercial real estate.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#gas-station-analyzer"
                  data-track="hero-cta-gas-station"
                  className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                >
                  Run the Deal Analyzer
                </Link>
                <Link
                  href="#gas-station-lead"
                  className="border border-gold/40 text-gold hover:bg-gold/10 font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
                >
                  See Available Properties
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src="/gas-station/maxlife-gas-station.png"
                alt="MaxLife gas station — Florida C-store with fuel pumps, price sign, and DCFC EV charging bay"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-dark/80 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-xs font-medium text-white">
                    MaxLife Florida C-store with EV charging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {gasStationMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                  {m.label}
                </p>
                <p className="text-white text-2xl sm:text-3xl font-bold mb-1">
                  {m.value}
                </p>
                <p className="text-gray-500 text-sm">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Gas Station <span className="text-gold">Property Formats</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          Not every gas station trades at the same cap rate. Tenant credit,
          lease structure, and site format all drive pricing — here are the six
          formats active in Florida today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gasStationFormats.map((format) => (
            <div
              key={format.name}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <h3 className="text-white font-semibold text-lg mb-3">
                {format.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Cap Rate: {format.capRate}
                </span>
                <span className="text-xs font-medium bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                  {format.footprint}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {format.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Florida */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Why Florida Fuel Demand is{" "}
            <span className="text-gold">Structurally Bullish</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            Population growth, tourism, tax structure, and weather combine to
            give Florida C-stores something most markets don&apos;t have:
            twelve months of volume with durable demand tailwinds across every
            cycle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaFuelDrivers.map((reason) => (
              <div
                key={reason.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Gas Station Investing:{" "}
          <span className="text-gold">Pros &amp; Cons</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          An honest look at both sides so you can decide if this asset class
          fits your portfolio strategy.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold">Why Buy</h3>
            </div>
            <ul className="space-y-5">
              {gasStationPros.map((pro) => (
                <li key={pro.title}>
                  <p className="text-white font-medium text-sm mb-1">
                    {pro.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pro.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold">
                What to Watch
              </h3>
            </div>
            <ul className="space-y-5">
              {gasStationCons.map((con) => (
                <li key={con.title}>
                  <p className="text-white font-medium text-sm mb-1">
                    {con.title}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {con.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investor personas */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Who Gas Stations Are{" "}
            <span className="text-gold">Best Suited For</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            Gas station NNN and ground leases aren&apos;t for every investor —
            but for the right profiles, they&apos;re arguably the most durable
            net-lease product on the market today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investorPersonas.map((persona) => (
              <div
                key={persona.name}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors flex flex-col"
              >
                <div className="mb-3">
                  <h3 className="text-white font-semibold text-lg">
                    {persona.name}
                  </h3>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold/80 mt-1">
                    {persona.tag}
                  </p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  {persona.description}
                </p>
                <div className="border-t border-white/10 pt-3 mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Why It Fits
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {persona.fit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major operators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Major C-Store &amp; Fuel Operators{" "}
          <span className="text-gold">Expanding in Florida</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
          These are the national and regional C-store operators most actively
          acquiring, developing, or ground-leasing new sites across the Florida
          market today. Most institutional NNN opportunities come from this
          group.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {majorOperators.map((op) => (
            <div
              key={op.name}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/40 transition-colors"
            >
              <h3 className="text-white font-semibold mb-1">{op.name}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                {op.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
          Note: credit quality and lease structure vary meaningfully across
          operators. Always underwrite the specific tenant and lease
          guarantor, not just the brand on the canopy.
        </p>
      </section>

      {/* Florida hotspots */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Florida&apos;s Most Active{" "}
            <span className="text-gold">C-Store Submarkets</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            Where the deal flow is heaviest right now. These submarkets combine
            population growth, tourism, interstate traffic, and active operator
            pipelines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaHotspots.map((spot) => (
              <div
                key={spot.name}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {spot.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {spot.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EV charging integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            EV Charging Integration
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            The Gas Station of the Future is{" "}
            <span className="text-gold">Already Being Built in Florida</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Electric vehicle charging isn&apos;t a threat to C-store real
            estate — it&apos;s the single biggest value-add opportunity in the
            category. Modern Florida fuel pads are being built EV-ready, and
            every major C-store operator has an active DCFC partnership. Here
            is who&apos;s building what, and how to underwrite it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {evInsights.map((insight) => (
            <div
              key={insight.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base">
                  {insight.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
            Major EV Charging Networks{" "}
            <span className="text-gold">in Florida</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-8 leading-relaxed">
            The charging networks building out Florida pad sites either
            standalone or co-located with existing C-store operators.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {evChargingNetworks.map((n) => (
            <div
              key={n.name}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5 hover:border-gold/40 transition-colors"
            >
              <h4 className="text-white font-semibold mb-1">{n.name}</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                {n.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                The EV-Ready Diligence Checklist
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                When buying a Florida C-store pad today, these four items
                decide whether the site captures EV value or loses residual
                value to newer competitors over the next 10–15 years.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#10003;</span>
                  <span>
                    Conduit runs from electrical room to canopy / parking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#10003;</span>
                  <span>
                    Transformer + switchgear capacity for 1–4 MW service
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#10003;</span>
                  <span>
                    Utility interconnection study filed with FPL / Duke / TECO
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#10003;</span>
                  <span>
                    Site plan zoning permits DCFC canopy + bay conversion
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Underwriting metrics */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Key Gas Station{" "}
            <span className="text-gold">Underwriting Metrics</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
            The numbers experienced C-store buyers stress-test before closing.
            Use these as benchmarks when you review an offering memorandum or
            operator P&amp;L.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyUnderwritingMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">
                    {metric.label}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental diligence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Environmental &amp; UST Diligence
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            The Six-Item{" "}
            <span className="text-gold">Diligence Checklist</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Environmental exposure is the single biggest differentiator of
            gas station investing. Done right, it&apos;s manageable and
            priced in. Done wrong, it&apos;s a career-ending liability. Never
            close a fuel pad without completing all six of these items.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {environmentalChecklist.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deal Analyzer */}
      <section
        id="gas-station-analyzer"
        className="border-y border-white/10 bg-white/[0.04]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Interactive Underwriting
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Sample Florida Gas Station Deal{" "}
              <span className="text-gold">Pre-Loaded</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Below is a representative Central Florida Wawa-style ground lease
              already loaded into our deal analyzer — a $6.5M NNN ground-lease
              deal with a credit C-store operator at a 5.0% entry cap. Adjust
              any input to stress-test returns, DSCR, IRR, and equity multiple
              in real time.
            </p>
          </div>

          <div className="bg-white/[0.04]/30 border border-white/10 rounded-2xl p-4 sm:p-6 mb-6">
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="bg-gold/10 text-gold font-semibold px-3 py-1 rounded-full">
                Purchase: $6.5M
              </span>
              <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                NNN Ground Lease
              </span>
              <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                Annual Rent: $325K
              </span>
              <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                Entry Cap: ~5.0%
              </span>
              <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                6,000 SF C-Store
              </span>
              <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                20-Year Primary Term
              </span>
              <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                10-Year Hold
              </span>
            </div>
          </div>

          <DealAnalyzer initialInputs={preloadedGasStationDeal} />

          <p className="text-center text-gray-500 text-sm mt-8">
            Want to underwrite a different asset class?{" "}
            <Link
              href="/deal-analyzer"
              className="text-gold hover:underline"
            >
              Open the full Deal Analyzer
            </Link>
          </p>
        </div>
      </section>

      {/* Listings on Marketplaces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Browse Active Listings
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Gas Station Deals on{" "}
            <span className="text-gold">Major CRE Marketplaces</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Want to see what&apos;s publicly listed right now? These
            marketplaces aggregate on-market gas station and C-store
            opportunities across Florida. For off-market deals and
            broker-direct pocket listings, reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Crexi",
              tag: "Tech-forward CRE marketplace",
              description:
                "Growing inventory of C-store fuel pad and ground-lease listings across every Florida market, with detailed deal rooms and OM downloads.",
              floridaUrl: "https://www.crexi.com/properties/FL/Gas-Stations",
              orlandoUrl:
                "https://www.crexi.com/properties/FL/Orlando/Gas-Stations",
              allUrl: "https://www.crexi.com/properties/Gas-Stations",
            },
            {
              name: "LoopNet",
              tag: "Largest CRE listings network",
              description:
                "The biggest pool of gas station and C-store listings in Florida. Search by city, county, or statewide to see sale price, cap rate, and lease details.",
              floridaUrl:
                "https://www.loopnet.com/search/gas-stations/fl/for-sale/",
              orlandoUrl:
                "https://www.loopnet.com/search/gas-stations/orlando-fl/for-sale/",
              allUrl:
                "https://www.loopnet.com/search/gas-stations/usa/for-sale/",
            },
            {
              name: "BizBuySell",
              tag: "Operating business listings",
              description:
                "Best resource when you want to buy an operating gas station / C-store business (with or without real estate). Includes seller financials and SDE.",
              floridaUrl:
                "https://www.bizbuysell.com/florida/gas-stations-for-sale/",
              orlandoUrl:
                "https://www.bizbuysell.com/florida/gas-stations-for-sale/",
              allUrl: "https://www.bizbuysell.com/gas-stations-for-sale/",
            },
          ].map((site) => (
            <div
              key={site.name}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-white font-semibold text-xl mb-1">
                  {site.name}
                </h3>
                <p className="text-xs font-medium text-gold/80 uppercase tracking-wider">
                  {site.tag}
                </p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                {site.description}
              </p>
              <div className="space-y-2">
                <a
                  href={site.floridaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track={`gasstation-listings-${site.name.toLowerCase()}-fl`}
                  className="flex items-center justify-between bg-gold/10 hover:bg-gold/20 text-gold font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <span>Florida Gas Stations</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={site.orlandoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track={`gasstation-listings-${site.name.toLowerCase()}-orlando`}
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 text-gray-300 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <span>Orlando Metro</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={site.allUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track={`gasstation-listings-${site.name.toLowerCase()}-national`}
                  className="flex items-center justify-between text-gray-300 hover:text-gold font-medium px-4 py-2 text-sm transition-colors"
                >
                  <span>Nationwide</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
          The best C-store ground leases rarely hit these marketplaces. If
          you want access to off-market opportunities being traded between
          developers, operators, REITs, family offices, and 1031 exchange
          buyers,{" "}
          <Link href="#gas-station-lead" className="text-gold hover:underline">
            tell us what you&apos;re looking for
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/10 bg-white/[0.04]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Gas Station <span className="text-gold">Investor FAQ</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The questions we get most often from investors evaluating their
              first (or fifth) gas station / C-store deal.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {gasStationFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden hover:border-gold/40 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-white font-medium text-base pr-4">
                    {faq.q}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 -mt-1">
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Fit check */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
              Is This You?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Quick <span className="text-gold">Fit Check</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you nod &ldquo;yes&rdquo; to three or more of these, a gas
              station or C-store ground lease likely deserves a slot on your
              shortlist.
            </p>
          </div>
          <ul className="space-y-4 mb-10">
            {fitCheckQuestions.map((q) => (
              <li
                key={q}
                className="flex items-start gap-4 bg-white/[0.04] border border-white/10 rounded-xl p-5"
              >
                <div className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed">{q}</p>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              href="#gas-station-lead"
              data-track="gasstation-fitcheck-cta"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors inline-block"
            >
              Send Me Matching Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section
        id="gas-station-lead"
        className="border-t border-white/10 bg-white/[0.04]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
                See Available{" "}
                <span className="text-gold">Gas Station Properties</span>
              </h2>
              <p className="text-gray-300 text-center mb-8 leading-relaxed">
                Tell us about your investment criteria — target brand, cap rate,
                deal size, 1031 timing, and geography — and we&apos;ll send you
                current Florida gas station and C-store opportunities that
                match, on market and off.
              </p>
              <LeadCaptureForm
                buttonText="See Available Gas Station Properties"
                subjectPrefix="Gas Station Property Inquiry"
                source="gas-station-properties-landing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
            Related <span className="text-gold">Resources</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "NNN Properties Florida",
                description:
                  "Explore every triple net lease format trading in Central Florida, not just gas stations.",
                href: "/nnn-properties-florida",
              },
              {
                title: "Car Wash Properties Florida",
                description:
                  "Sister-asset landing page for Florida express tunnel car washes — often stacked with gas station pads.",
                href: "/car-wash-properties-florida",
              },
              {
                title: "1031 Exchange Florida",
                description:
                  "Replace property with qualifying CRE — including gas station ground leases — before your 45/180-day deadlines.",
                href: "/1031-exchange-florida",
              },
              {
                title: "Orlando Cap Rates Investor Guide",
                description:
                  "A data-driven look at current cap rate trends by property type across the Orlando MSA.",
                href: "/blog/orlando-cap-rates-investor-guide",
              },
              {
                title: "Deal Analyzer",
                description:
                  "Underwrite any NNN, multifamily, or SFR deal with institutional-grade metrics.",
                href: "/deal-analyzer",
              },
              {
                title: "Special Purpose Properties",
                description:
                  "Parent category page covering every specialty CRE asset class — car washes, daycares, churches, and more.",
                href: "/properties/special-purpose",
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors group block"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {resource.description}
                </p>
                <span className="text-gold text-sm font-medium">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
