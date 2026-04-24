import Link from "next/link";
import {
  footerInvestorLinks,
  footerServiceLinks,
  footerResourceLinks,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold font-bold text-xl">MaxLife</span>
              <span className="text-white font-light text-xl">Realty</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Florida commercial real estate brokerage, NNN investments, land
              development, and investment services statewide — headquartered in
              Orlando and serving Tampa Bay, Jacksonville, South Florida,
              Southwest Florida, North Florida, and the Panhandle.
            </p>
            <p className="text-gray-500 text-xs mb-5">
              FL Real Estate Broker License #3354351
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ryansolberg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/LiveYourMaxLifestyle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* For Investors */}
          <div>
            <h3 className="text-gold font-semibold mb-4">For Investors</h3>
            <ul className="space-y-2">
              {footerInvestorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ryan@MaxLifeRealty.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (321) 586-2121
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Headquartered in Orlando &mdash; Serving All of Florida
              </li>
              <li>
                <a
                  href="https://calendly.com/ryan-maxliferealty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Call
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-2">
              {footerResourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border mt-8 pt-8 text-center text-gray-500 text-xs leading-relaxed space-y-2">
          <p>
            &copy; {new Date().getFullYear()}{" "}MaxLife Realty LLC. All rights
            reserved. &middot;{" "}
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>{" "}
            &middot;{" "}
            <Link href="/terms" className="hover:text-gold">
              Terms of Service
            </Link>
          </p>
          <p>
            MaxLife Realty LLC &middot; Florida Licensed Real Estate Brokerage
            &middot; FL Broker License #3354351
          </p>
          <p className="max-w-3xl mx-auto text-gray-600">
            Some property listings displayed on this site are syndicated from
            third parties and are marketed by their respective listing
            brokerages. MaxLife Realty is not the listing broker for
            third-party listings. See the source linked on each listing for
            the listing brokerage of record. Information is deemed reliable
            but not guaranteed.
          </p>
          <p className="flex items-center justify-center gap-2 pt-2 text-gray-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <rect x="4" y="4" width="40" height="40" rx="2" />
              <path d="M12 30V22l12-10 12 10v8" strokeLinejoin="round" />
              <path d="M20 34v-6h8v6" strokeLinejoin="round" />
              <path d="M24 18v-4M24 38v4M14 24h-4M38 24h-4" strokeLinecap="round" />
            </svg>
            Equal Housing Opportunity &middot; REALTOR&reg;
          </p>
        </div>
      </div>
    </footer>
  );
}
