import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MaxLife Realty collects, uses, and protects your information — including our cookies and analytics practices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
          Legal
        </p>
        <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-gray-500">
          Last updated: April 2026
        </p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">Overview</h2>
            <p>
              This policy explains what information we collect from visitors to
              maxlifedevelopment.com, how we use it, and the choices you have.
              MaxLife Realty LLC is the operator of this site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Information we collect
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong className="text-white">Information you give us</strong>{" "}
                — email, name, and phone number when you fill out a form
                (contact, newsletter, workbook request, valuation request).
              </li>
              <li>
                <strong className="text-white">
                  Automatically-collected usage data
                </strong>{" "}
                — page views, clicks, device type, browser, general location
                (city-level), and approximate session duration.
              </li>
              <li>
                <strong className="text-white">Company identification</strong>{" "}
                — for visitors from identifiable business networks, we may
                receive the company name (not personal identity) from a B2B
                reverse-IP service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Cookies and tracking
            </h2>
            <p className="mb-3">
              We use three categories of cookies. You control which run via the
              consent banner on your first visit and can change your choice any
              time at the link below.
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong className="text-white">Necessary</strong> — session
                state, login, security. Always on.
              </li>
              <li>
                <strong className="text-white">Analytics</strong> — Google
                Analytics 4, Vercel Analytics, and a first-party visitor ID
                cookie (<code className="rounded bg-dark-card px-1 text-gold">mxl_vid</code>)
                that helps us understand return visits.
              </li>
              <li>
                <strong className="text-white">Marketing</strong> — Meta
                (Facebook) Pixel, LinkedIn Insight Tag, and a B2B visitor-
                identification service (RB2B). These help us measure
                advertising and identify company-level interest.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              How we use the information
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>Respond to your inquiries and provide requested resources.</li>
              <li>
                Send newsletters or follow-up email about Central Florida CRE
                (you can unsubscribe at any time).
              </li>
              <li>Measure site traffic and improve what we offer.</li>
              <li>Show relevant ads on other platforms (if you opted in).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Sharing your information
            </h2>
            <p>
              We do not sell your personal information. We share data only with
              vendors who help run the site (e.g., Google Analytics, Resend
              for email delivery, Supabase for data storage) under contracts
              that restrict how they can use it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Your rights
            </h2>
            <p className="mb-3">
              California residents have the right to know, delete, and opt out
              of the sale of personal information under the CCPA. Residents of
              other states with similar laws have equivalent rights. Email{" "}
              <a
                href="mailto:Ryan@MaxLifeRealty.com"
                className="text-gold underline underline-offset-4 hover:text-gold-light"
              >
                Ryan@MaxLifeRealty.com
              </a>{" "}
              to make a request.
            </p>
            <p>
              You can change your cookie choices any time by clearing the{" "}
              <code className="rounded bg-dark-card px-1 text-gold">mxl_consent</code>{" "}
              cookie and reloading the page, or by clicking{" "}
              <Link
                href="/privacy#manage"
                className="text-gold underline underline-offset-4 hover:text-gold-light"
              >
                Manage cookies
              </Link>{" "}
              below.
            </p>
          </section>

          <section id="manage">
            <h2 className="mb-2 text-xl font-semibold text-white">
              Manage cookies
            </h2>
            <p className="mb-3">
              Click below to reopen the consent banner and update your choices.
            </p>
            <button
              type="button"
              data-reopen-consent
              className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
            >
              Manage cookies
            </button>
            <script
              dangerouslySetInnerHTML={{
                __html: `document.querySelector('[data-reopen-consent]')?.addEventListener('click',function(){document.cookie='mxl_consent=; path=/; max-age=0';location.reload();});`,
              }}
            />
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
