import type { PropertyTypeEntry } from "./types";

const specialPurposeListings = [
  { name: "Crexi", tag: "Tech-forward CRE marketplace", description: "Growing inventory of Florida special-purpose listings.", floridaUrl: "https://www.crexi.com/properties/FL/Special-Purpose", orlandoUrl: "https://www.crexi.com/properties/FL/Orlando/Special-Purpose", allUrl: "https://www.crexi.com/properties/Special-Purpose" },
  { name: "LoopNet", tag: "Largest CRE listings network", description: "The biggest pool of specialty listings in Florida.", floridaUrl: "https://www.loopnet.com/search/specialty-property/fl/for-sale/", orlandoUrl: "https://www.loopnet.com/search/specialty-property/orlando-fl/for-sale/", allUrl: "https://www.loopnet.com/search/specialty-property/usa/for-sale/" },
  { name: "BizBuySell", tag: "Operating business listings", description: "Business-for-sale listings for owner-operators.", floridaUrl: "https://www.bizbuysell.com/florida/", orlandoUrl: "https://www.bizbuysell.com/florida/", allUrl: "https://www.bizbuysell.com/" },
];

const specialPurposeTopLevel: PropertyTypeEntry = {
  slug: "special-purpose",
  meta: {
    title: "Special Purpose Properties for Sale in Florida | Niche CRE Investments",
    description: "Buy special purpose properties in Florida. Car washes, gas stations, churches, daycares, auto repair, and niche CRE investments.",
    keywords: "special purpose property florida, niche cre, car wash, gas station, daycare",
  },
  page: {
    displayName: "Special Purpose",
    pluralDisplayName: "Special Purpose Properties",
    heroEyebrow: "Specialty CRE Investments",
    heroHeadline: "Special Purpose Properties in Florida",
    heroSubheadline: "The catch-all category for niche CRE assets that don't fit the major five",
    heroBody: "Special purpose real estate is Crexi's catch-all category for specialty investments that don't fit retail, office, industrial, multifamily, or hospitality. The category spans car washes, gas stations, churches, daycare centers, auto repair shops, funeral homes, marinas, fitness centers, movie theaters, golf courses, and dozens of other niche uses. Each subcategory has its own underwriting logic, tenant pool, and pricing dynamics.",
    quickStats: [
      { label: "Typical Deal Size", value: "$500K – $30M+", detail: "Wide range across subcategories" },
      { label: "Common Cap Rate", value: "5.5% – 10.0%+", detail: "Highly dependent on subtype" },
      { label: "Key Consideration", value: "Tenant credit", detail: "Purpose-built asset value hinges on the operator" },
    ],
    formats: [
      { name: "Car Wash", capRate: "6.00% – 7.50%", footprint: "1–2 acre pads", note: "Express tunnel and flex-serve. One of the fastest-consolidating CRE asset classes." },
      { name: "Gas Station / C-Store", capRate: "4.75% – 6.50%", footprint: "1–1.5 acre pads", note: "Wawa, 7-Eleven, RaceTrac — tightest cap rates in specialty." },
      { name: "Daycare / Childcare", capRate: "6.50% – 8.00%", footprint: "0.5–2 acre sites", note: "NNN daycare leasebacks from Primrose, Goddard, KinderCare." },
      { name: "Auto Repair / Service", capRate: "6.75% – 8.50%", footprint: "0.5–1.5 acres", note: "Specialty auto repair, tire, lube, and collision. Franchise or independent." },
      { name: "Fitness / Gym", capRate: "6.50% – 8.25%", footprint: "15k – 45k SF", note: "LA Fitness, Planet Fitness, YMCA — operator-dependent." },
      { name: "Religious / Church", capRate: "N/A (user-buyer)", footprint: "2–20 acres", note: "Churches trade to congregation buyers. Unusual underwriting." },
    ],
    prosConsIntro: "Special purpose real estate delivers premium yield for investors willing to become subcategory experts.",
    pros: [
      { title: "Premium Yield", description: "Most specialty subcategories trade 50–150 bps wider than comparable mainstream assets." },
      { title: "Less Competition", description: "Institutional buyers often skip specialty — fewer bidders on quality deals." },
      { title: "NNN Structure", description: "Most specialty operators prefer NNN leasebacks — passive landlord position." },
      { title: "Operator-Owned Expansion", description: "Aggressive franchise and PE rollup stories drive deal flow in multiple subcategories." },
      { title: "1031 Qualified", description: "All specialty real estate qualifies for 1031 like-kind exchange." },
    ],
    cons: [
      { title: "Purpose-Built Risk", description: "The building only works for one use. Operator failure can be catastrophic without reuse optionality." },
      { title: "Narrow Buyer Pool", description: "Resale can be slower and more price-sensitive than mainstream CRE." },
      { title: "Tenant Credit Variance", description: "Specialty operators range from public-company credit to local sole proprietors. Underwrite the guarantor." },
      { title: "Specialty Lending", description: "Lenders often price specialty debt wider and require more scrutiny." },
      { title: "Environmental Exposure", description: "Many specialty uses (gas stations, auto repair, car washes) carry environmental risk and cost." },
    ],
    personas: [
      { name: "1031 Exchange Buyers", tag: "Fast Close", description: "Exchange buyers seeking NNN replacement with yield premium to mainstream.", fit: "Specialty NNN offers yield without sacrificing 1031 cleanliness." },
      { name: "Yield Seekers", tag: "Cap Rate Hunters", description: "Investors willing to specialize for 50–150 bps of yield premium.", fit: "Subcategory expertise is the moat." },
      { name: "Operator-Owners", tag: "Platform Builders", description: "Existing operators building portfolios of their own sites.", fit: "Car wash, fitness, daycare, and auto service operators." },
      { name: "Tax Shelter Buyers", tag: "Cost Seg Heavy", description: "Specialty assets often have very high cost seg allocation to personal property.", fit: "Car wash and gas station cost seg is exceptionally generous." },
    ],
    underwritingMetrics: [
      { label: "Operator Credit", detail: "Corporate guarantee vs franchisee vs sole proprietor — huge value spread" },
      { label: "Reuse Optionality", detail: "Can the building convert to another use if the operator fails?" },
      { label: "Environmental", detail: "Phase I ESA mandatory; Phase II common for fuel, auto repair, car wash" },
      { label: "Remaining Lease Term", detail: "Specialty assets lose value sharply in the final 5 years of lease term" },
      { label: "Sale Comparables", detail: "Subcategory-specific comp sets — not general retail data" },
    ],
    listingSites: specialPurposeListings,
    listingsIntro: "Want to see public listings? These marketplaces cover specialty Florida CRE.",
    faqs: [
      { q: "What qualifies as special purpose real estate?", a: "Any CRE asset whose building is purpose-built for a specific operating use and doesn't fit the traditional retail, office, industrial, multifamily, or hospitality categories. Car washes, gas stations, daycares, fitness centers, churches, movie theaters, and marinas are common examples." },
      { q: "Are special purpose deals good investments?", a: "They can be — if you underwrite the operator credit carefully and understand the reuse optionality of the building. Specialty deals typically trade at a yield premium to mainstream CRE, compensating for narrower buyer pools and purpose-built building risk." },
      { q: "How is financing different for specialty CRE?", a: "Specialty lenders know the subcategory and price accordingly — often 50–100 bps wider than comparable mainstream CRE. Expect lower LTV (typically 55–70%) and more conservative debt service coverage requirements." },
    ],
    fitCheckIntro: 'If you nod "yes" to three or more of these, specialty CRE has a place in your portfolio.',
    fitCheckQuestions: [
      "You want 50–150 bps of yield premium over mainstream CRE.",
      "You're willing to become a subcategory expert before buying.",
      "You understand and can underwrite operator credit beyond the brand name.",
      "You want exposure to specialty growth stories like car wash and IOS.",
      "You can tolerate narrower exit liquidity in exchange for higher going-in yield.",
    ],
    leadFormIntro: "Tell us which specialty CRE subcategory you're interested in and we will send you current Florida opportunities.",
  },
};

const base = specialPurposeTopLevel.page;

const carWash: PropertyTypeEntry = {
  slug: "car-wash",
  parentSlug: "special-purpose",
  meta: { title: "Car Wash Properties for Sale in Florida", description: "Buy express tunnel and flex-serve car wash properties in Florida. NNN leasebacks from credit operators.", keywords: "car wash florida, express tunnel, nnn car wash" },
  page: { ...base, displayName: "Car Wash", pluralDisplayName: "Car Washes", heroHeadline: "Car Wash Properties in Florida", heroSubheadline: "Express tunnel, flex-serve, and self-serve car washes — year-round Florida demand", heroBody: "Express tunnel car washes have become a favorite of private equity and 1031 exchange buyers — and Florida is ground zero. Warm weather, explosive population growth, and national operator expansion have created a steady pipeline of NNN car wash leaseback opportunities trading in the 6.0% – 7.0% cap rate range. See our dedicated car wash landing page for deeper coverage.", relatedResources: [{ title: "Full Car Wash Properties Landing Page", description: "Deep dive on express tunnels, major operators, and pre-loaded deal analyzer.", href: "/car-wash-properties-florida" }, ...(base.relatedResources || [])] },
};

const gasStation: PropertyTypeEntry = {
  slug: "gas-station",
  parentSlug: "special-purpose",
  meta: { title: "Gas Station & Fuel Station Properties for Sale in Florida", description: "Buy gas station and fuel station properties in Florida. 7-Eleven, Wawa, RaceTrac, Circle K, and branded fuel.", keywords: "gas station florida, fuel station, 7-eleven property" },
  page: { ...base, displayName: "Gas Station", pluralDisplayName: "Gas Station Properties", heroHeadline: "Gas Stations & Fuel Properties in Florida", heroSubheadline: "C-store fuel pads from Wawa, 7-Eleven, and RaceTrac — tightest cap rates in specialty", heroBody: "Gas station and convenience store pad sites with fuel are among the most tightly priced specialty CRE assets in America. Premium brands like Wawa trade at sub-5% cap rates on ground leases, and 7-Eleven/RaceTrac/Buc-ee's product commands similar pricing. Environmental diligence is essential — Phase I and Phase II ESAs are standard." },
};

const church: PropertyTypeEntry = {
  slug: "church",
  parentSlug: "special-purpose",
  meta: { title: "Church & Religious Facilities for Sale in Florida", description: "Buy church and religious facility properties in Florida. Sanctuary buildings, fellowship halls, and religious campuses.", keywords: "church for sale florida, religious facility" },
  page: { ...base, displayName: "Church / Religious Facility", pluralDisplayName: "Religious Facilities", heroHeadline: "Church & Religious Facilities in Florida", heroSubheadline: "Sanctuary, fellowship, and religious campus properties — typically user-to-user transactions", heroBody: "Church and religious facility properties trade in a specialty market that is almost exclusively user-to-user — a growing congregation buying a smaller church's building as they expand. Valuation is complicated by purpose-built design, property tax exemption history, and narrow buyer pools. Some churches convert to childcare, community center, or redevelopment uses when their original purpose ends." },
};

const schoolDaycare: PropertyTypeEntry = {
  slug: "school-daycare",
  parentSlug: "special-purpose",
  meta: { title: "Schools & Daycare Properties for Sale in Florida", description: "Buy school and daycare center properties in Florida. Primrose, Goddard, KinderCare, and private school real estate.", keywords: "daycare florida, childcare center, school real estate" },
  page: { ...base, displayName: "School / Daycare", pluralDisplayName: "School & Daycare Properties", heroHeadline: "Schools & Daycare Centers in Florida", heroSubheadline: "Primrose, Goddard, KinderCare, and private school NNN real estate", heroBody: "Childcare and daycare real estate is a growing specialty NNN category driven by Florida's young family demographics and corporate demand for employee childcare benefits. Primrose, Goddard, and KinderCare are the most common NNN tenants, with cap rates running 6.5% – 8.0% for stabilized leasebacks." },
};

const autoRepair: PropertyTypeEntry = {
  slug: "auto-repair",
  parentSlug: "special-purpose",
  meta: { title: "Auto Repair & Body Shop Properties for Sale in Florida", description: "Buy auto repair, body shop, lube, tire, and collision shop properties in Florida.", keywords: "auto repair florida, body shop, lube center, tire shop" },
  page: { ...base, displayName: "Auto Repair / Body Shop", pluralDisplayName: "Auto Service Properties", heroHeadline: "Auto Repair & Body Shops in Florida", heroSubheadline: "Auto service, collision, lube, and tire real estate", heroBody: "Auto service real estate includes general repair, body shops, collision centers, quick lube (Jiffy Lube, Valvoline), tire stores (Discount Tire, Firestone), and specialty service. Franchise-operator NNN leasebacks dominate the investment side. Environmental diligence is essential due to legacy oil and solvent exposure." },
};

const funeralHome: PropertyTypeEntry = {
  slug: "funeral-home",
  parentSlug: "special-purpose",
  meta: { title: "Funeral Home & Cemetery Properties for Sale in Florida", description: "Buy funeral home and cemetery properties in Florida. Legacy operator real estate and Service Corporation International (SCI) NNN.", keywords: "funeral home florida, cemetery real estate" },
  page: { ...base, displayName: "Funeral Home / Cemetery", pluralDisplayName: "Funeral Home & Cemetery Properties", heroHeadline: "Funeral Homes & Cemeteries in Florida", heroSubheadline: "Legacy operator real estate and Service Corporation International NNN", heroBody: "Funeral home real estate is a specialty NNN category dominated by publicly traded Service Corporation International (SCI) and Carriage Services. Legacy family-owned funeral homes continue to sell to consolidators. Demand is unusually stable — funeral services are non-discretionary and demographically driven." },
};

const marina: PropertyTypeEntry = {
  slug: "marina",
  parentSlug: "special-purpose",
  meta: { title: "Marinas & Boat Storage for Sale in Florida", description: "Buy marinas and boat storage facilities in Florida. Dry stack, wet slips, and boat club operations.", keywords: "marina florida, boat storage, dry stack" },
  page: { ...base, displayName: "Marina / Boat Storage", pluralDisplayName: "Marinas & Boat Storage", heroHeadline: "Marinas & Boat Storage in Florida", heroSubheadline: "Dry stack, wet slips, and specialty water-access real estate", heroBody: "Florida's 1,300+ miles of coastline and extensive inland waterways support an institutional marina real estate market. Dry stack boat storage, wet slip marinas, and fuel/repair operations trade at 7–9% cap rates. Irreplaceable water-access real estate with massive barriers to entry." },
};

const parkingGarage: PropertyTypeEntry = {
  slug: "parking-garage",
  parentSlug: "special-purpose",
  meta: { title: "Parking Garages & Lots for Sale in Florida", description: "Buy parking garages and surface parking lots in Florida. Downtown and event venue parking real estate.", keywords: "parking garage florida, parking lot real estate" },
  page: { ...base, displayName: "Parking Garage / Lot", pluralDisplayName: "Parking Properties", heroHeadline: "Parking Garages & Lots in Florida", heroSubheadline: "Downtown and event venue parking real estate", heroBody: "Parking real estate is a niche specialty category driven by downtown density and event venue demand. Structured parking garages and surface parking lots in Downtown Orlando, Tampa, Miami, and near event venues command premium pricing and operator-led management contracts." },
};

const fitnessCenter: PropertyTypeEntry = {
  slug: "fitness-center",
  parentSlug: "special-purpose",
  meta: { title: "Fitness Centers & Gyms for Sale in Florida", description: "Buy fitness center and gym properties in Florida. LA Fitness, Planet Fitness, YMCA, and independent gym NNN real estate.", keywords: "gym florida, fitness center real estate, la fitness" },
  page: { ...base, displayName: "Fitness Center / Gym", pluralDisplayName: "Fitness Properties", heroHeadline: "Fitness Centers & Gyms in Florida", heroSubheadline: "LA Fitness, Planet Fitness, YMCA, and independent gym real estate", heroBody: "Fitness real estate spans big-box health clubs (LA Fitness, Lifetime), budget-gym chains (Planet Fitness, Crunch), boutique studios (SoulCycle, Orangetheory), and independent gyms. Category has been consolidating rapidly post-COVID with PE-backed rollups driving deal flow." },
};

const movieTheater: PropertyTypeEntry = {
  slug: "movie-theater",
  parentSlug: "special-purpose",
  meta: { title: "Movie Theaters & Cinemas for Sale in Florida", description: "Buy movie theater and cinema properties in Florida. AMC, Regal, Cinemark, and independent cinema real estate.", keywords: "movie theater florida, cinema real estate" },
  page: { ...base, displayName: "Movie Theater / Cinema", pluralDisplayName: "Movie Theater Properties", heroHeadline: "Movie Theaters & Cinemas in Florida", heroSubheadline: "AMC, Regal, Cinemark, and independent cinema real estate", heroBody: "Movie theater real estate is a specialty category that's been under structural pressure from streaming and post-COVID attendance shifts. Category trades at wide cap rates (8–11%+) with substantial reuse optionality to fitness, experiential retail, or redevelopment plays." },
};

const golfCourse: PropertyTypeEntry = {
  slug: "golf-course",
  parentSlug: "special-purpose",
  meta: { title: "Golf Courses & Country Clubs for Sale in Florida", description: "Buy golf courses and country clubs in Florida. Daily-fee, semi-private, private club, and resort golf real estate.", keywords: "golf course florida, country club for sale" },
  page: { ...base, displayName: "Golf Course / Country Club", pluralDisplayName: "Golf Courses & Country Clubs", heroHeadline: "Golf Courses & Country Clubs in Florida", heroSubheadline: "Daily-fee, semi-private, private club, and resort golf real estate", heroBody: "Florida has more golf courses than any other state — over 1,100 courses across daily-fee, semi-private, private club, and resort formats. The category spans enormous quality range, from underperforming daily-fee courses facing redevelopment pressure to trophy private clubs commanding multi-million dollar initiation fees." },
};

const bowlingAlley: PropertyTypeEntry = {
  slug: "bowling-alley",
  parentSlug: "special-purpose",
  meta: { title: "Bowling Alleys for Sale in Florida", description: "Buy bowling alley properties in Florida. Traditional and boutique bowling center real estate.", keywords: "bowling alley florida, bowling center" },
  page: { ...base, displayName: "Bowling Alley", pluralDisplayName: "Bowling Alleys", heroHeadline: "Bowling Alleys in Florida", heroSubheadline: "Traditional and boutique bowling center real estate", heroBody: "Bowling alleys are a niche specialty category that has consolidated rapidly around operator brands like Bowlero (NYSE: BOWL). Traditional bowling centers often include F&B, arcade, and event venue revenue layered on bowling operations." },
};

const amusementEntertainment: PropertyTypeEntry = {
  slug: "amusement-entertainment",
  parentSlug: "special-purpose",
  meta: { title: "Amusement & Entertainment Properties for Sale in Florida", description: "Buy amusement park, arcade, trampoline park, and family entertainment center properties in Florida.", keywords: "amusement park florida, family entertainment center, fec real estate" },
  page: { ...base, displayName: "Amusement / Entertainment", pluralDisplayName: "Entertainment Properties", heroHeadline: "Amusement & Entertainment in Florida", heroSubheadline: "Trampoline parks, FECs, arcades, and theme park adjacent real estate", heroBody: "Family entertainment centers, trampoline parks (Sky Zone, Urban Air), arcades, mini-golf, and amusement centers are a growing specialty subcategory. Florida benefits from tourism and family demographics. Operator credit matters enormously — the real estate is purpose-built." },
};

const sportsFacility: PropertyTypeEntry = {
  slug: "sports-facility",
  parentSlug: "special-purpose",
  meta: { title: "Sports Facilities & Arenas for Sale in Florida", description: "Buy sports facility, arena, and recreational sports properties in Florida.", keywords: "sports facility florida, arena real estate, sports complex" },
  page: { ...base, displayName: "Sports Facility / Arena", pluralDisplayName: "Sports Facilities", heroHeadline: "Sports Facilities & Arenas in Florida", heroSubheadline: "Recreational sports complexes, arenas, and specialty athletic facilities", heroBody: "Sports real estate spans youth sports complexes (indoor soccer, volleyball, basketball), community arenas, ice rinks, and specialty athletic training facilities. A niche specialty category with operator-dependent valuations but strong community demand drivers." },
};

const rvPark: PropertyTypeEntry = {
  slug: "rv-park",
  parentSlug: "special-purpose",
  meta: { title: "RV Parks & Campgrounds for Sale in Florida", description: "Buy RV parks and campgrounds in Florida. Snowbird, destination, and seasonal RV park real estate.", keywords: "rv park florida, campground for sale, snowbird rv" },
  page: { ...base, displayName: "RV Park / Campground", pluralDisplayName: "RV Parks & Campgrounds", heroHeadline: "RV Parks & Campgrounds in Florida", heroSubheadline: "Snowbird, destination, and seasonal RV park real estate", heroBody: "Florida RV parks and campgrounds serve the massive snowbird RV market along with tourism and destination camping demand. The category has been consolidating around platforms like Sun Communities and Equity LifeStyle Properties, driving cap rates tighter. Cash flow combines site rents with amenity and utility revenue." },
};

const winery: PropertyTypeEntry = {
  slug: "winery-brewery",
  parentSlug: "special-purpose",
  meta: { title: "Wineries, Distilleries & Breweries for Sale in Florida", description: "Buy wineries, distilleries, breweries, and specialty beverage production real estate in Florida.", keywords: "winery florida, brewery real estate, distillery" },
  page: { ...base, displayName: "Winery / Distillery / Brewery", pluralDisplayName: "Beverage Production Properties", heroHeadline: "Wineries, Distilleries & Breweries in Florida", heroSubheadline: "Craft beverage production real estate with destination demand", heroBody: "Florida hosts a growing craft beverage industry — wineries, distilleries, breweries, and specialty beverage producers. Real estate combines production facility, taproom, and sometimes destination hospitality components. Operator credit matters but the real estate can typically be repositioned to industrial or mixed-use if needed." },
};

const nurseryGarden: PropertyTypeEntry = {
  slug: "nursery-garden-center",
  parentSlug: "special-purpose",
  meta: { title: "Nurseries & Garden Centers for Sale in Florida", description: "Buy plant nurseries and garden center properties in Florida. Retail and wholesale nursery real estate.", keywords: "nursery florida, garden center real estate" },
  page: { ...base, displayName: "Nursery / Garden Center", pluralDisplayName: "Nurseries & Garden Centers", heroHeadline: "Nurseries & Garden Centers in Florida", heroSubheadline: "Retail and wholesale plant nursery real estate", heroBody: "Plant nursery real estate combines agricultural growing operations with retail garden center sales. Florida's year-round growing climate makes it one of the top nursery production states in America. Real estate typically includes greenhouses, shade structures, and retail display." },
};

const cannabis: PropertyTypeEntry = {
  slug: "cannabis-facility",
  parentSlug: "special-purpose",
  meta: { title: "Cannabis-Compliant Real Estate for Sale in Florida", description: "Buy cannabis-compliant real estate in Florida. Medical marijuana cultivation, processing, and dispensary properties.", keywords: "cannabis real estate florida, medical marijuana property, dispensary" },
  page: { ...base, displayName: "Cannabis-Compliant Facility", pluralDisplayName: "Cannabis Facilities", heroHeadline: "Cannabis-Compliant Facilities in Florida", heroSubheadline: "Medical marijuana cultivation, processing, and dispensary real estate", heroBody: "Florida's medical marijuana program has grown rapidly since 2016. Cannabis-compliant real estate includes cultivation facilities (indoor and greenhouse), processing labs, and dispensary locations. Regulatory compliance is critical — always confirm state licensing and local zoning before closing." },
};

const postOffice: PropertyTypeEntry = {
  slug: "post-office",
  parentSlug: "special-purpose",
  meta: { title: "Post Office Properties for Sale in Florida", description: "Buy post office and USPS-leased properties in Florida. Single-tenant NNN post office leasebacks.", keywords: "post office real estate florida, usps leased property" },
  page: { ...base, displayName: "Post Office", pluralDisplayName: "Post Office Properties", heroHeadline: "Post Office Properties in Florida", heroSubheadline: "USPS-leased real estate with federal government tenancy", heroBody: "Post office real estate is a specialty NNN category where buildings are leased long-term to the United States Postal Service. The tenant credit is federal government, but USPS leases often include termination-for-convenience clauses that require careful underwriting. Cap rates typically run 6.5% – 8.0% for standard branch buildings." },
};

const carDealership: PropertyTypeEntry = {
  slug: "car-dealership",
  parentSlug: "special-purpose",
  meta: { title: "Car Dealership Properties for Sale in Florida | Auto Dealer Real Estate", description: "Buy car dealership properties in Florida. New-car franchise, used-car lot, multi-brand auto mall, and EV showroom real estate across Orlando and Central Florida.", keywords: "car dealership florida, auto dealer real estate, franchise dealership for sale, auto mall florida" },
  page: {
    ...base,
    displayName: "Car Dealership",
    pluralDisplayName: "Car Dealership Properties",
    heroEyebrow: "Automotive Dealership Investments",
    heroHeadline: "Car Dealership Properties in Florida",
    heroSubheadline: "New-car franchise, used-car lots, multi-brand auto malls, and EV showroom real estate",
    heroBody: "Car dealership real estate is one of the largest and most capital-intensive specialty CRE subcategories in Florida. A single franchise dealership pad can range from 2 to 15+ acres with purpose-built showrooms, service bays, parts departments, and surface lot inventory storage. Florida ranks #2 nationally in new vehicle registrations and #1 in population growth — making it one of the most active markets for dealership acquisitions, relocations, and new-point franchise awards. Cap rates run 5.75% – 7.50% for NNN sale-leasebacks to credit dealer groups, with trophy franchise locations in growth corridors commanding the tightest pricing.",
    quickStats: [
      { label: "Typical Deal Size", value: "$5M – $60M+", detail: "Single-point to multi-brand auto mall" },
      { label: "Common Cap Rate", value: "5.75% – 7.50%", detail: "Credit dealer group NNN leasebacks" },
      { label: "Avg. Site Size", value: "2 – 15+ acres", detail: "Showroom, service, and lot inventory" },
    ],
    formats: [
      { name: "New-Car Franchise", capRate: "5.75% – 6.75%", footprint: "3 – 10 acres", note: "Toyota, Honda, Ford, BMW — manufacturer-backed franchise with OEM facility requirements." },
      { name: "Used-Car Superstore", capRate: "6.25% – 7.25%", footprint: "3 – 8 acres", note: "CarMax, Carvana, AutoNation USA — large-format used-vehicle retail operations." },
      { name: "Multi-Brand Auto Mall", capRate: "5.50% – 6.50%", footprint: "10 – 25+ acres", note: "Multiple franchise rooftops under one ownership group on a campus." },
      { name: "Independent Used Lot", capRate: "7.00% – 8.50%", footprint: "1 – 3 acres", note: "Independent used-car dealers — higher yield but weaker tenant credit." },
      { name: "EV Showroom / Service", capRate: "6.00% – 7.00%", footprint: "1 – 5 acres", note: "Tesla, Rivian, Lucid — direct-to-consumer model with smaller footprint than legacy franchise." },
    ],
    prosConsIntro: "Car dealership real estate combines institutional tenant credit with premium yield in Florida's high-growth auto market.",
    pros: [
      { title: "Institutional Tenant Credit", description: "Major dealer groups (AutoNation, Hendrick, Lithia, Larry H. Miller) provide corporate-backed guarantees on NNN leases." },
      { title: "High Barrier to Entry", description: "OEM franchise agreements, capital requirements, and zoning make new dealership points extremely difficult to replicate." },
      { title: "Triple-Net Structure", description: "Most dealer sale-leasebacks are absolute NNN with the dealer responsible for all maintenance, taxes, and insurance." },
      { title: "Florida Market Tailwinds", description: "Florida's population growth, no state income tax, and year-round driving season support strong vehicle demand." },
      { title: "Long Lease Terms", description: "Dealer NNN leases typically run 15 – 20 years with 5-year renewal options and built-in rent escalations." },
    ],
    cons: [
      { title: "Purpose-Built Facilities", description: "Showrooms, service bays, and lot improvements are highly purpose-built — limited reuse optionality if the dealer vacates." },
      { title: "OEM Image Requirements", description: "Manufacturers require periodic facility upgrades (every 7–10 years) that can be capital-intensive for landlords." },
      { title: "Large Capital Outlay", description: "Dealership sites are expensive — $5M–$60M+ — limiting the buyer pool to institutional and high-net-worth investors." },
      { title: "EV Transition Risk", description: "The shift to electric vehicles may reduce service revenue (fewer moving parts) and change facility requirements long-term." },
      { title: "Environmental Exposure", description: "Service bays, paint booths, and fuel storage can create environmental liability — Phase I ESA is mandatory." },
    ],
    personas: [
      { name: "1031 Exchange Buyers", tag: "Large Exchange", description: "Investors with $5M+ exchange proceeds seeking credit-tenant NNN replacement property.", fit: "Dealer NNN leasebacks absorb large 1031 exchanges in a single transaction." },
      { name: "Institutional Investors", tag: "Portfolio Scale", description: "REITs and private equity funds building automotive real estate portfolios.", fit: "Dealer sale-leasebacks provide institutional-grade credit and long lease terms." },
      { name: "Dealer Group Operators", tag: "Owner-Operators", description: "Multi-rooftop dealer groups acquiring their own real estate.", fit: "Owning the real estate builds long-term wealth alongside the operating business." },
      { name: "Net Lease Investors", tag: "Passive Income", description: "Passive investors seeking credit-backed NNN income with minimal landlord responsibilities.", fit: "Absolute NNN dealer leases are among the most passive specialty investments." },
    ],
    underwritingIntro: "Dealer real estate underwriting focuses on franchise value, operator credit, and facility condition.",
    underwritingMetrics: [
      { label: "Dealer Group Credit", detail: "Corporate guarantee from publicly traded or large private dealer group — critical to value" },
      { label: "Franchise Brand", detail: "Toyota, Honda, and luxury brands command tighter pricing than domestic or economy brands" },
      { label: "Remaining Lease Term", detail: "15–20 year initial terms with renewal options — value drops sharply below 10 years remaining" },
      { label: "OEM Image Compliance", detail: "Has the dealer completed the most recent manufacturer facility upgrade program?" },
      { label: "Environmental", detail: "Phase I ESA mandatory; Phase II common for older service facilities with fuel or paint operations" },
      { label: "Lot & Inventory Capacity", detail: "Sufficient vehicle storage capacity for the dealer's inventory turn — typically 200–800+ spaces" },
    ],
    listingSites: specialPurposeListings,
    listingsIntro: "Browse active car dealership listings across Florida and nationwide.",
    faqs: [
      { q: "What is a car dealership sale-leaseback?", a: "A dealer sells their real estate to an investor and leases it back on a long-term NNN basis — typically 15–20 years. The dealer frees up capital for inventory and operations while the investor receives stable, credit-backed rental income. Most major dealer groups use sale-leasebacks as a core capital strategy." },
      { q: "What cap rates do car dealerships trade at in Florida?", a: "Credit dealer group NNN leasebacks typically trade at 5.75% – 7.50% cap rates depending on franchise brand, dealer credit, lease term, and location. Trophy franchise locations on major auto corridors can trade below 6%. Independent used-car lots trade wider at 7.0% – 8.5%." },
      { q: "How does the EV transition affect dealership real estate?", a: "Electric vehicles require less service (no oil changes, fewer brake jobs) which may reduce the service bay revenue component over time. However, EV charging infrastructure and battery service create new facility requirements. Most major OEMs are investing heavily in EV-ready facility upgrades." },
      { q: "What environmental risks exist with dealership properties?", a: "Service bays, paint booths, parts cleaning, and underground fuel storage can create environmental liability. Phase I Environmental Site Assessments are mandatory, and Phase II testing is common for older facilities. Environmental insurance is often prudent for older service properties." },
      { q: "Are car dealership properties good 1031 exchange candidates?", a: "Yes — dealership NNN leasebacks are popular 1031 replacement properties because they absorb large exchange amounts ($5M–$60M+) in a single transaction, offer long lease terms, and provide institutional tenant credit. The NNN structure also satisfies passive investor requirements." },
    ],
    faqIntro: "Common questions about investing in car dealership real estate in Florida.",
    fitCheckIntro: 'If you nod "yes" to three or more of these, car dealership real estate may be a fit for your portfolio.',
    fitCheckQuestions: [
      "You have $5M+ to deploy in a single transaction or 1031 exchange.",
      "You want absolute NNN income with minimal landlord responsibilities.",
      "You value institutional-grade tenant credit over maximum yield.",
      "You're comfortable with purpose-built real estate that has limited reuse optionality.",
      "You want long lease terms (15–20 years) with built-in rent escalations.",
    ],
    leadFormIntro: "Interested in car dealership properties in Florida? Tell us your investment criteria and we'll send you current opportunities.",
  },
};

const veterinary: PropertyTypeEntry = {
  slug: "veterinary-animal-hospital",
  parentSlug: "special-purpose",
  meta: { title: "Veterinary & Animal Hospitals for Sale in Florida", description: "Buy veterinary clinic, animal hospital, and kennel properties in Florida.", keywords: "veterinary florida, animal hospital real estate, kennel" },
  page: { ...base, displayName: "Veterinary / Animal Hospital", pluralDisplayName: "Veterinary Properties", heroHeadline: "Veterinary & Animal Hospitals in Florida", heroSubheadline: "Vet clinic, animal hospital, and kennel real estate", heroBody: "Veterinary real estate is a specialty medical office subcategory serving the pet care industry. Category has been consolidating rapidly around corporate vet platforms like Mars Petcare (VCA, Banfield), NVA, and CVS Group. Cap rates for corporate-backed vet NNN leasebacks run 6.25% – 7.75%." },
};

export const specialPurposeRegistry: PropertyTypeEntry[] = [
  specialPurposeTopLevel,
  carWash,
  gasStation,
  church,
  schoolDaycare,
  autoRepair,
  funeralHome,
  marina,
  parkingGarage,
  fitnessCenter,
  movieTheater,
  golfCourse,
  bowlingAlley,
  amusementEntertainment,
  sportsFacility,
  rvPark,
  winery,
  nurseryGarden,
  cannabis,
  postOffice,
  veterinary,
  carDealership,
];
