import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms that govern your use of maxlifedevelopment.com, including the marketplace, academy, and contact forms.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
          Legal
        </p>
        <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mb-8 text-sm text-gray-500">Last updated: April 2026</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Agreement to terms
            </h2>
            <p>
              These Terms govern your use of maxlifedevelopment.com (the
              &ldquo;Site&rdquo;), operated by MaxLife Realty LLC
              (&ldquo;MaxLife,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By
              accessing the Site, creating an account, submitting an inquiry,
              or otherwise using any feature, you agree to these Terms. If you
              do not agree, do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              What the site provides
            </h2>
            <p>
              The Site offers educational content about commercial real estate
              (the &ldquo;Academy&rdquo;), a directory of properties
              (&ldquo;Marketplace&rdquo;), market reports, and contact forms
              to request information. Features may be added, changed, or
              removed at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Not legal, tax, or investment advice
            </h2>
            <p>
              Content on the Site — including market analyses, valuation
              estimates, academy lessons, and any numerical projections — is
              for general informational purposes only. It is not legal, tax,
              accounting, or investment advice. Real estate decisions depend
              on facts specific to you and the property. You should consult a
              licensed professional before acting on anything you read here.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              No broker relationship without a written agreement
            </h2>
            <p>
              Browsing listings, reading lessons, or submitting an inquiry
              does not create a brokerage, agency, or fiduciary relationship
              between you and MaxLife Realty. A broker-client relationship
              exists only after both parties sign a written representation
              agreement. MaxLife Realty is a licensed Florida real estate
              broker (License #3354351).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Listings and third-party information
            </h2>
            <p>
              Property listings and market data may come from third parties
              (sellers, brokers, data providers) and are believed accurate but
              not guaranteed. Prices, availability, and property details can
              change without notice. Always verify specifics directly with the
              seller or listing broker before relying on them.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Accounts
            </h2>
            <p>
              If you create an Academy account, you&rsquo;re responsible for
              the activity on it and for keeping your sign-in credentials
              secure. Tell us promptly if you suspect unauthorized access. We
              may suspend or close accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Acceptable use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                Scrape, crawl, or bulk-download content except as allowed by
                our{" "}
                <Link
                  href="/robots.txt"
                  className="text-gold underline underline-offset-4 hover:text-gold-light"
                >
                  robots.txt
                </Link>
                .
              </li>
              <li>
                Submit false, misleading, or automated inquiries through any
                form.
              </li>
              <li>
                Attempt to gain unauthorized access to accounts, data, or
                server infrastructure.
              </li>
              <li>
                Use the Site to send spam, phishing, or other unlawful
                communications.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Intellectual property
            </h2>
            <p>
              Academy lessons, market reports, article content, and the
              overall site design are owned by MaxLife Realty LLC or its
              licensors and are protected by copyright. You may view content
              for personal, non-commercial use. Republishing, distributing, or
              training AI models on our content requires written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Disclaimer of warranties
            </h2>
            <p>
              The Site is provided &ldquo;as is&rdquo; and &ldquo;as
              available.&rdquo; We don&rsquo;t warrant that content is
              accurate, complete, or current, or that the Site will be
              uninterrupted or error-free. To the fullest extent permitted by
              law, we disclaim all warranties, express or implied.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, MaxLife Realty LLC is
              not liable for indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Site, including
              lost profits, lost opportunities, or reliance on content. Our
              total liability for any claim relating to the Site will not
              exceed $100.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Florida,
              without regard to its conflict-of-laws rules. Any dispute
              arising under these Terms will be brought in the state or
              federal courts located in Orange County, Florida, and you
              consent to their jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">Changes</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date above shows the most recent version.
              Continued use of the Site after changes means you accept the new
              Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">Contact</h2>
            <p>
              MaxLife Realty LLC, Orlando, FL.{" "}
              <a
                href="mailto:Ryan@MaxLifeRealty.com"
                className="text-gold underline underline-offset-4 hover:text-gold-light"
              >
                Ryan@MaxLifeRealty.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
