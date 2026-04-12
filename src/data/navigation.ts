export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "For Sellers", href: "/opportunities" },
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
  { label: "Market Reports", href: "/market-reports" },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Orlando", href: "/markets/orlando-commercial-real-estate" },
      { label: "Brevard County", href: "/markets/brevard-county-commercial-real-estate" },
      { label: "Lake County", href: "/markets/lake-county-commercial-land" },
      { label: "Central Florida", href: "/markets/central-florida-investment-properties" },
    ],
  },
  { label: "Net Sheets", href: "/net-sheets" },
  { label: "Deal Analyzer", href: "/deal-analyzer" },
  { label: "Academy", href: "/academy" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerInvestorLinks: NavLink[] = [
  { label: "Sell Your Property", href: "/opportunities" },
  { label: "Seller Net Sheet", href: "/net-sheets/seller" },
  { label: "Buyer Estimate", href: "/net-sheets/buyer" },
  { label: "Deal Analyzer", href: "/deal-analyzer" },
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
];

export const footerResourceLinks: NavLink[] = [
  { label: "Quarterly Market Reports", href: "/market-reports" },
  { label: "Market Insights (Blog)", href: "/blog" },
  { label: "Academy (Free CRE Courses)", href: "/academy" },
  { label: "Orlando Market", href: "/markets/orlando-commercial-real-estate" },
  { label: "Brevard County Market", href: "/markets/brevard-county-commercial-real-estate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
