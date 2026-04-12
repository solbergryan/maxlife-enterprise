export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ryan found us an off-market NNN deal in Brevard County that we never would have seen on LoopNet. Closed in 45 days with a 7.2% cap rate — exactly what we needed for our 1031 exchange timeline.",
    name: "Out-of-State Investor",
    title: "1031 Exchange Buyer",
    context: "NNN Acquisition — Brevard County",
  },
  {
    quote:
      "We had been looking for retail space in Orlando for three months with no luck. MaxLife identified five options in our first week and negotiated tenant improvements we didn't think were possible.",
    name: "Local Business Owner",
    title: "Retail Tenant",
    context: "Retail Lease — Orlando",
  },
  {
    quote:
      "The deal analysis was the most thorough I've seen from any broker. Ryan walked us through the pro forma line by line and caught expense assumptions that would have cost us six figures over the hold period.",
    name: "Private Equity Fund",
    title: "Multifamily Acquisition",
    context: "Value-Add Multifamily — Central Florida",
  },
  {
    quote:
      "Sold our mixed-use property 12% above what we thought was possible. Ryan's marketing brought in multiple offers within two weeks, and he managed the negotiation process from start to close.",
    name: "Property Owner",
    title: "Commercial Seller",
    context: "Mixed-Use Disposition — Orlando",
  },
  {
    quote:
      "As a first-time commercial investor, the MaxLife Academy courses gave me the confidence to underwrite my own deals. When I was ready, Ryan helped me close on my first industrial property.",
    name: "New Investor",
    title: "Industrial Buyer",
    context: "First CRE Acquisition — Orange County",
  },
];
