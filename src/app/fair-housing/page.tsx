import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fair Housing Policy | MaxLife Realty",
  description:
    "MaxLife Realty is committed to fair housing practices and equal opportunity in commercial real estate. Learn about our fair housing policy and protected classes.",
};

export default function FairHousingPage() {
  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl font-bold text-white mb-4">Fair Housing</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            MaxLife Realty is committed to fair housing practices and equal
            opportunity in all aspects of commercial real estate services.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Equal Opportunity Policy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MaxLife Realty is a Florida-licensed real estate brokerage that does
            not and will not discriminate against any person because of race,
            color, religion, sex, national origin, familial status, disability,
            sexual orientation, gender identity, marital status, or any other
            protected characteristic under federal, state, or local law.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We are committed to providing fair, equal, and professional service
            to all clients and customers in the sale, purchase, rental, and
            financing of commercial real estate.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Protected Classes</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Fair Housing Act and the Florida Civil Rights Act protect
            persons from discrimination on the basis of:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>• Race or color</li>
            <li>• National origin</li>
            <li>• Religion</li>
            <li>• Sex (including sexual orientation and gender identity)</li>
            <li>• Familial status</li>
            <li>• Disability</li>
            <li>• Marital status</li>
            <li>• Any other protected class under applicable law</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            MaxLife Realty will:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>
              • Provide equal access to all available commercial properties and
              services
            </li>
            <li>
              • Treat all customers and clients with respect and professional
              courtesy
            </li>
            <li>
              • Refuse to engage in discriminatory steering, blockbusting, or
              other illegal practices
            </li>
            <li>
              • Comply with all federal, state, and local fair housing laws
            </li>
            <li>
              • Promptly address any complaints of fair housing violations
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Report Fair Housing Violations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you believe you have been subject to discrimination or unfair
            treatment, you may file a complaint with the U.S. Department of
            Housing and Urban Development (HUD):
          </p>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6">
            <p className="text-gray-300 text-sm mb-3">
              <strong>HUD Fair Housing Hotline:</strong>
            </p>
            <p className="text-gray-300 text-sm mb-3">
              1-800-669-9777 (Toll-free)
              <br />
              TTY: 1-855-529-2519
              <br />
              <a
                href="https://www.hud.gov/fairhousing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                www.hud.gov/fairhousing
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              You may also file a complaint with the Florida Commission on Human
              Relations (FCHR) at{" "}
              <a
                href="https://www.fchr.myflorida.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                www.fchr.myflorida.com
              </a>
            </p>
          </div>
        </div>

        <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <svg
              className="w-6 h-6 text-gold shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <div>
              <p className="text-white font-semibold mb-2">
                Equal Housing Opportunity
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                MaxLife Realty, a Florida-licensed real estate brokerage, is an
                equal opportunity provider and employer. If you believe you have
                been discriminated against in connection with a real estate
                transaction or service, please contact HUD immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
