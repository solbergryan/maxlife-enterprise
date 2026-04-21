export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR";
  locationType: "On-Site" | "Remote" | "Hybrid";
  location: string;
  compensation: string;
  compensationMin: number;
  compensationMax: number;
  datePosted: string;
  isOpen: boolean;
  shortDescription: string;
  metaDescription: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHaves: string[];
  whatWeOffer: string[];
  idealCandidate: string;
  whyJoin: string;
}

export const jobs: JobPosting[] = [
  {
    slug: "commercial-real-estate-analyst",
    title: "Commercial Real Estate Analyst / Transaction Coordinator",
    department: "Operations",
    employmentType: "FULL_TIME",
    locationType: "Hybrid",
    location: "Orlando, FL (Hybrid — Remote-Friendly for FL candidates)",
    compensation: "$55,000 – $70,000 base + performance bonus ($10K–$20K)",
    compensationMin: 55000,
    compensationMax: 90000,
    datePosted: "2026-04-21",
    isOpen: true,
    shortDescription:
      "High-leverage hybrid role supporting the founder with underwriting, OM production, loan packaging, and transaction coordination across NNN, development, and financing deals.",
    metaDescription:
      "Hiring a Commercial Real Estate Analyst / Transaction Coordinator in Orlando, FL. Underwriting, OM production, loan packages, closing coordination. $55K–$90K. Hybrid/remote-friendly.",
    overview:
      "MaxLife Development is hiring its first dedicated support hire — a hybrid Analyst / Transaction Coordinator who will work directly alongside the founder (licensed FL broker and mortgage loan originator) to scale commercial real estate deal volume across NNN investments, build-to-suit development, land brokerage, and commercial financing. This is a rare opportunity to be employee #1 at a growing Florida CRE firm and have a tangible impact on every deal that closes.",
    responsibilities: [
      "Build underwriting models and pro formas for NNN acquisitions, development deals, and financing packages",
      "Produce professional offering memorandums (OMs), property flyers, and investor packages",
      "Assemble commercial loan submission packages for bank, SBA, CMBS, and bridge lenders",
      "Coordinate due diligence: order title, surveys, Phase I ESAs, PCAs, and appraisals",
      "Track transaction deadlines (DD expiration, earnest money go-hard dates, closing dates)",
      "Manage closing coordination: document collection, estoppel certificates, SNDAs, prorations",
      "Maintain the CRM — log deal activity, update pipeline, manage investor contact records",
      "Support market research and comp analysis for BOV and valuation work",
    ],
    requirements: [
      "1–3+ years in commercial real estate (brokerage, lending, REIT, appraisal, or institutional investor)",
      "Strong Excel modeling skills — must be able to build a DCF and cap rate model from scratch",
      "Detail-oriented with excellent written communication",
      "Self-starter who can manage multiple deals in parallel without daily check-ins",
      "Bachelor's degree in finance, real estate, business, or equivalent experience",
      "Florida-based (Orlando metro preferred, open to remote within Florida)",
    ],
    niceToHaves: [
      "Florida real estate license or active pursuit",
      "Argus Enterprise experience",
      "CoStar, Crexi, and LoopNet proficiency",
      "Adobe InDesign or similar for OM design",
      "Experience with Florida commercial transactions (title, escrow, ALTA surveys)",
      "Prior experience in NNN, QSR, or net lease brokerage",
    ],
    whatWeOffer: [
      "$55K–$70K base salary + $10K–$20K performance bonus tied to closed deals",
      "Direct mentorship from a licensed FL broker and mortgage loan originator",
      "Hybrid work (Orlando-area) with remote flexibility within Florida",
      "Exposure to every aspect of the CRE business — acquisitions, development, financing, disposition",
      "Growth path to licensed broker, junior partner, or senior analyst",
      "Small-company environment with real ownership and influence",
    ],
    idealCandidate:
      "You're the person who reads an OM front-to-back, spots the rent roll error on page 14, and redlines the cap rate assumption before anyone asks. You like running the numbers, you like closing deals, and you don't want to spend three years in an analyst bullpen at a big brokerage waiting for your shot.",
    whyJoin:
      "This is a rare chance to join a Florida CRE firm in its earliest stage and build the operational backbone from day one. You'll work directly with the founder, have a seat at the table on every deal, and get hands-on experience across NNN investments, development, and commercial financing — the kind of breadth that takes a decade to accumulate at a larger firm. If you execute, you'll grow with the business.",
  },
  {
    slug: "junior-broker-business-development",
    title: "Junior Broker / Business Development Associate",
    department: "Brokerage",
    employmentType: "FULL_TIME",
    locationType: "Hybrid",
    location: "Orlando, FL (Hybrid)",
    compensation: "Base $40K–$55K + commission split (target total $80K–$150K year 1)",
    compensationMin: 40000,
    compensationMax: 150000,
    datePosted: "2026-04-21",
    isOpen: true,
    shortDescription:
      "Growth-minded junior broker to drive deal flow — outbound prospecting, relationship building, listing development, and buyer-side representation across Central Florida CRE.",
    metaDescription:
      "Hiring a Junior CRE Broker in Orlando, FL. Outbound prospecting, listings, tenant/buyer rep. Base + commission split. Target $80K–$150K year 1.",
    overview:
      "MaxLife Development is hiring its second team member — a hungry, licensed (or actively getting licensed) junior broker to drive new deal flow across Central Florida. This role is for someone who wants to build a CRE book of business from the ground up with a base salary + commission split, strong mentorship, and access to an established marketing infrastructure (active website, programmatic SEO, investor database, and professional marketing collateral produced in-house).",
    responsibilities: [
      "Outbound prospecting: cold calling, email campaigns, and LinkedIn outreach to property owners, investors, and decision-makers",
      "Develop relationships with 1031 exchange buyers, family offices, and Florida CRE investors",
      "Source listings for NNN investment sales, land deals, and commercial properties",
      "Conduct property tours, BOVs, and buyer/tenant matching",
      "Represent tenants and buyers in lease and acquisition transactions",
      "Attend local CRE events, ICSC conferences, and tenant rep networking",
      "Collaborate with the founder and analyst on deal underwriting and strategy",
      "Maintain active CRM pipeline with weekly activity reports",
    ],
    requirements: [
      "Active Florida real estate license (or committed to obtaining within 60 days of hire)",
      "Exceptional verbal communication and relationship-building skills",
      "High activity tolerance — this role requires 100+ outreach touches per week",
      "Resilience and a competitive drive — CRE brokerage is a rejection business",
      "Entrepreneurial mindset — you want to build a book, not just collect a salary",
      "Based in Central Florida (Orlando, Melbourne, Space Coast)",
      "Reliable transportation for property tours and client meetings",
    ],
    niceToHaves: [
      "Prior sales experience (any industry — residential real estate, SaaS, financial services)",
      "Existing network in Florida CRE or investment circles",
      "Spanish fluency (Central Florida market advantage)",
      "Bachelor's degree in business, finance, or real estate",
      "Familiarity with Crexi, LoopNet, and CoStar",
    ],
    whatWeOffer: [
      "Base salary $40K–$55K + uncapped commission split on deals you originate",
      "Target total compensation $80K–$150K in year 1 with strong scaling potential",
      "Access to MaxLife's established marketing infrastructure (SEO-optimized website, investor database)",
      "Direct mentorship from the founder on every deal",
      "Professional deal-level support (analyst produces OMs, underwriting, loan packages)",
      "Clear path to senior broker or partner track based on production",
      "Hybrid work schedule with flexible hours",
    ],
    idealCandidate:
      "You're not afraid of the phone. You believe CRE is the best business in the world and you want to prove it. You want a seat at a small firm where your production directly drives company growth — not a desk at a 500-person brokerage where you're splitting leads with 50 other juniors. You're patient enough to grind through the first 6 months and hungry enough to never stop.",
    whyJoin:
      "Commercial brokerage rewards the people who commit to building their own book. At MaxLife, you'll get the support structure of an established firm (marketing, analyst, mentorship, brand) with the upside of early-stage equity-like scaling in your commission income. The founder built MaxLife by doing the same grind you're about to start — and the infrastructure in place (website traffic, investor list, SEO presence) will compress your ramp.",
  },
];

export function getJob(slug: string): JobPosting | undefined {
  return jobs.find((j) => j.slug === slug);
}
