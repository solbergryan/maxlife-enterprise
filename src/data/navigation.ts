export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: "Start Here", href: "/start-here" },
  {
    label: "Properties",
    href: "/properties",
    children: [
      { label: "Retail", href: "/properties/retail" },
      { label: "Office", href: "/properties/office" },
      { label: "Industrial", href: "/properties/industrial" },
      { label: "Multifamily", href: "/properties/multifamily" },
      { label: "Hospitality", href: "/properties/hospitality" },
      { label: "Land", href: "/properties/land" },
      { label: "Mixed-Use", href: "/properties/mixed-use" },
      { label: "Special Purpose", href: "/properties/special-purpose" },
      { label: "Self Storage", href: "/properties/self-storage" },
      { label: "Mobile Home Park", href: "/properties/mobile-home-park" },
      { label: "Senior Living", href: "/properties/senior-living" },
      { label: "Business for Sale", href: "/properties/business-for-sale" },
      { label: "Notes & Loans", href: "/properties/note-loan" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Orlando", href: "/markets/orlando-commercial-real-estate" },
      { label: "Brevard County", href: "/markets/brevard-county-commercial-real-estate" },
      { label: "Lake County", href: "/markets/lake-county-commercial-land" },
      { label: "Central Florida", href: "/markets/central-florida-investment-properties" },
      { label: "Space Coast — Buy", href: "/space-coast-commercial-real-estate" },
      { label: "Space Coast — Lease", href: "/space-coast-commercial-space-for-lease" },
      { label: "Melbourne FL", href: "/melbourne-commercial-real-estate" },
      { label: "Cocoa Beach FL", href: "/cocoa-beach-commercial-real-estate" },
      { label: "Winter Park", href: "/winter-park-commercial-real-estate" },
      { label: "Kissimmee", href: "/kissimmee-commercial-real-estate" },
      { label: "Sanford", href: "/sanford-commercial-real-estate" },
      { label: "Lake Mary", href: "/lake-mary-commercial-real-estate" },
      { label: "Winter Garden", href: "/winter-garden-commercial-real-estate" },
      { label: "Lake Nona", href: "/lake-nona-commercial-real-estate" },
      { label: "Altamonte Springs", href: "/altamonte-springs-commercial-real-estate" },
      { label: "Clermont", href: "/clermont-commercial-real-estate" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Healthcare & Medical Office", href: "/industries/healthcare-medical-office" },
      { label: "Financial Services — South Florida", href: "/industries/financial-services-south-florida" },
      { label: "Logistics & Distribution", href: "/industries/logistics-distribution" },
      { label: "Aerospace — Space Coast", href: "/industries/aerospace-space-coast" },
    ],
  },
  {
    label: "For Investors",
    href: "/investors",
    children: [
      { label: "1031 Exchange Buyers", href: "/investors/1031-exchange-buyers" },
      { label: "Family Offices", href: "/investors/family-offices" },
      { label: "Foreign Investors", href: "/investors/foreign-investors" },
      { label: "Passive Income Investors", href: "/investors/passive-income-investors" },
      { label: "CRE Developers", href: "/investors/real-estate-developers" },
      { label: "Institutional Investors", href: "/investors/institutional-investors" },
      { label: "First-Time CRE Investors", href: "/investors/first-time-cre-investors" },
    ],
  },
  {
    label: "Tools",
    href: "/investor-tools",
    children: [
      { label: "Deal Analyzer", href: "/deal-analyzer" },
      { label: "Cap Rate Calculator", href: "/cap-rate-calculator" },
      { label: "1031 Timeline Calculator", href: "/1031-timeline-calculator" },
      { label: "Cost Segregation Calculator", href: "/cost-segregation-calculator" },
      { label: "Mortgage Calculator", href: "/mortgage-calculator" },
      { label: "Rent vs. Buy Calculator", href: "/rent-vs-buy-calculator" },
      { label: "Seller Net Sheet", href: "/net-sheets/seller" },
      { label: "Buyer Net Sheet", href: "/net-sheets/buyer" },
      { label: "Sold Map", href: "/sold-map" },
      { label: "For Sellers", href: "/opportunities" },
      { label: "CRE Lenders", href: "/lenders" },
    ],
  },
  {
    label: "Research",
    href: "/cap-rates",
    children: [
      { label: "Cap Rates by Submarket", href: "/cap-rates" },
      { label: "Sector Investment Outlook", href: "/investment-outlook" },
      { label: "Sell Commercial Property", href: "/sell-commercial-property" },
      { label: "Buy NNN Property", href: "/buy-nnn-property" },
      { label: "Buy Commercial Land", href: "/buy-commercial-land" },
      { label: "Buy Retail Property", href: "/buy-retail-property" },
      { label: "Quarterly Market Reports", href: "/market-reports" },
    ],
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    children: [
      { label: "Browse Listings", href: "/marketplace" },
      { label: "Post a Listing", href: "/marketplace/submit" },
      { label: "My Listings", href: "/marketplace/my-listings" },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    children: [
      { label: "Market Reports", href: "/market-reports" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "CRE Glossary", href: "/glossary" },
      { label: "Lease Types Guide", href: "/lease-types" },
      { label: "NNN by Tenant", href: "/nnn-tenants" },
      { label: "Academy", href: "/academy" },
      { label: "CRE Professionals Guide", href: "/professionals" },
      { label: "CRE Team Org Chart", href: "/professionals/org-chart" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About MaxLife", href: "/about" },
      { label: "Meet the Team", href: "/team" },
      { label: "Client Reviews", href: "/testimonials" },
      { label: "Track Record", href: "/results" },
      { label: "Press", href: "/press" },
      { label: "Moving to Florida", href: "/moving-to-florida" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerInvestorLinks: NavLink[] = [
  { label: "Sell Commercial Property", href: "/sell-commercial-property" },
  { label: "Buy NNN Property", href: "/buy-nnn-property" },
  { label: "Seller Net Sheet", href: "/net-sheets/seller" },
  { label: "Deal Analyzer", href: "/deal-analyzer" },
  { label: "CRE Lenders Directory", href: "/lenders" },
  { label: "1031 Exchange", href: "/1031-exchange-florida" },
  { label: "NNN Properties", href: "/nnn-properties-florida" },
  { label: "Land for Development", href: "/central-florida-land-for-development" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
  { label: "NNN Investments", href: "/services/nnn-investments" },
  { label: "Land Development", href: "/services/land-development" },
  { label: "Development Services", href: "/services/development" },
  { label: "Residential", href: "/services/residential-real-estate" },
  { label: "Healthcare & Medical Office", href: "/industries/healthcare-medical-office" },
];

export const footerResourceLinks: NavLink[] = [
  { label: "Cap Rates by Submarket", href: "/cap-rates" },
  { label: "Sector Investment Outlook", href: "/investment-outlook" },
  { label: "Quarterly Market Reports", href: "/market-reports" },
  { label: "Market Insights (Blog)", href: "/blog" },
  { label: "Academy (Free CRE Courses)", href: "/academy" },
  { label: "CRE Professionals Guide", href: "/professionals" },
  { label: "Orlando Metro CRE Hub", href: "/orlando-commercial-real-estate-deals" },
  { label: "Winter Park CRE", href: "/winter-park-commercial-real-estate" },
  { label: "Kissimmee CRE", href: "/kissimmee-commercial-real-estate" },
  { label: "Sanford CRE", href: "/sanford-commercial-real-estate" },
  { label: "Lake Mary CRE", href: "/lake-mary-commercial-real-estate" },
  { label: "Space Coast (Brevard) CRE", href: "/space-coast-commercial-real-estate" },
  { label: "Space Coast — Lease", href: "/space-coast-commercial-space-for-lease" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
