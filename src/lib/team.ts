export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  photo: string;
  phone: string;
  email: string;
  bio: string[];
  credentials: string[];
  licenses: {
    type: string;
    number: string;
    issuer?: string;
  }[];
  specialties: string[];
  serviceAreas: string[];
  yearsExperience?: number;
  linkedinUrl?: string;
  featuredDeals?: {
    title: string;
    value?: string;
    type?: string;
    location?: string;
  }[];
  expertiseCards?: {
    title: string;
    desc: string;
  }[];
  metaDescription: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "ryan-solberg",
    name: "Ryan Solberg",
    title: "Founder & Commercial Real Estate Broker",
    photo: "/ryan-solberg.jpg",
    phone: "(321) 586-2121",
    email: "Ryan@MaxLifeRealty.com",
    bio: [
      "Ryan Solberg is a Florida-based Commercial Real Estate Professional and Regional Administrator specializing in commercial real estate sales, leasing, and investment properties throughout Central Florida and the Space Coast. Based in the Orlando area, Ryan focuses on helping investors, business owners, and developers identify, acquire, and maximize high-performing commercial real estate assets.",
      "His expertise spans a wide range of commercial property types, including retail shopping centers, office buildings, industrial properties, multifamily investments, mixed-use developments, and land for development. He works closely with clients to analyze market trends, evaluate income-producing opportunities, and structure deals that align with both short-term cash flow goals and long-term investment strategies.",
      "With a strong foundation in real estate operations and financial analysis, Ryan brings a data-driven, results-oriented approach to every transaction. He is known for helping clients uncover off-market commercial real estate opportunities, negotiate favorable terms, and increase property value through strategic acquisition and disposition strategies. His ability to combine in-depth local market knowledge with advanced deal analysis makes him a valuable partner for both new and experienced commercial real estate investors.",
    ],
    credentials: ["Florida Licensed Real Estate Broker", "Mortgage Loan Officer (NMLS)"],
    licenses: [
      {
        type: "Florida Real Estate Broker License",
        number: "BK3354351",
        issuer: "Florida DBPR",
      },
      {
        type: "Mortgage Loan Officer — NMLS",
        number: "1784218",
        issuer: "Nationwide Multistate Licensing System",
      },
      {
        type: "MortgageInc NMLS",
        number: "2028516",
        issuer: "MortgageInc",
      },
    ],
    specialties: [
      "NNN Investment",
      "1031 Exchange",
      "Land Development",
      "Multifamily Investing",
      "Industrial Real Estate",
      "Deal Underwriting",
      "Investment Analysis",
      "Retail & Shopping Centers",
      "Office Leasing",
      "Mortgage Lending",
    ],
    serviceAreas: [
      "Orange County",
      "Seminole County",
      "Osceola County",
      "Lake County",
      "Polk County",
      "Brevard County",
    ],
    linkedinUrl: "https://www.linkedin.com/in/ryansolberg",
    expertiseCards: [
      {
        title: "Investment Analysis",
        desc: "Data-driven approach to evaluating income-producing opportunities, uncovering off-market deals, and maximizing property value through strategic acquisition and disposition.",
      },
      {
        title: "Deal Structuring",
        desc: "Expert negotiation of favorable terms aligned with client goals — from contract negotiation and underwriting to closing.",
      },
      {
        title: "Operations & Leadership",
        desc: "As a Regional Administrator, Ryan oversees operations, improves transaction efficiency, and implements scalable systems that enhance the client experience.",
      },
      {
        title: "Digital Marketing & Outreach",
        desc: "High-converting listing campaigns, investor-focused marketing, SEO, and targeted outreach to maximize exposure and attract qualified buyers and tenants.",
      },
    ],
    metaDescription:
      "Meet Ryan Solberg, Founder and Florida-licensed Commercial Real Estate Broker at MaxLife Realty. Specializing in NNN investments, 1031 exchanges, land development, and multifamily across Central Florida and the Space Coast.",
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
