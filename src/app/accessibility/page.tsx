import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | MaxLife Realty",
  description:
    "MaxLife Realty's commitment to web accessibility and WCAG 2.1 compliance.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Accessibility Statement
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            MaxLife Realty is committed to ensuring our website is accessible to
            all users, including those with disabilities.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-300 leading-relaxed">
            MaxLife Realty is committed to making our website accessible to
            people with disabilities. We work continuously to increase
            accessibility and usability of our site to ensure we meet or exceed
            the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            standards as set forth by the World Wide Web Consortium.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Accessibility Features
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our website includes the following accessibility features:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>
              • Semantic HTML structure for proper navigation with assistive
              technologies
            </li>
            <li>
              • Alt text for all meaningful images and graphics
            </li>
            <li>
              • Keyboard navigation support throughout the site
            </li>
            <li>
              • Color contrast that meets WCAG AA standards
            </li>
            <li>
              • Resizable text that scales properly at up to 200% zoom
            </li>
            <li>
              • Form labels and input field descriptions
            </li>
            <li>
              • Skip navigation links for keyboard users
            </li>
            <li>
              • Video captions and transcripts where applicable
            </li>
            <li>
              • Descriptive page titles and heading hierarchy
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Third-Party Content
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Some content on our website may be provided by third parties, such
            as embedded videos or interactive tools. While we work to ensure
            third-party content is as accessible as possible, we do not have
            complete control over third-party accessibility standards. If you
            encounter accessibility issues with third-party content, please let
            us know.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Known Limitations
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            While we strive for full accessibility, certain elements may present
            challenges:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>
              • Complex interactive calculators may have limited keyboard
              accessibility; we provide text-based alternative outputs
            </li>
            <li>
              • Some embedded third-party content (maps, videos) may have
              limited accessibility features
            </li>
            <li>
              • PDF documents linked from our site may not meet full WCAG
              standards; we provide HTML alternatives where possible
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Report Accessibility Issues
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you experience accessibility issues or barriers on our website,
            please contact us:
          </p>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6">
            <p className="text-gray-300 mb-3">
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:Ryan@MaxLifeRealty.com"
                className="text-gold hover:underline"
              >
                Ryan@MaxLifeRealty.com
              </a>
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Please include:</strong>
              <br />
              • The specific page URL or feature
              <br />
              • A description of the accessibility issue
              <br />
              • Your browser and assistive technology (if applicable)
              <br />
              • Steps to reproduce the issue
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Standards and Conformance
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This website aims to conform to the Web Content Accessibility
            Guidelines (WCAG) 2.1 Level AA, published by the World Wide Web
            Consortium. WCAG 2.1 is an internationally recognized standard for
            web accessibility and is required by many jurisdictions, including
            the Americans with Disabilities Act (ADA).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Assistive Technology Support
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We support the following assistive technologies:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>• Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>• Keyboard navigation</li>
            <li>• Browser magnification tools</li>
            <li>• Text scaling and color adjustment</li>
          </ul>
        </div>

        <div className="bg-gold/10 border border-gold/30 rounded-lg p-6">
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Feedback:</strong> We continuously
            work to improve website accessibility. If you have suggestions or
            find features that could be more accessible, please contact us at{" "}
            <a
              href="mailto:Ryan@MaxLifeRealty.com"
              className="text-gold hover:underline"
            >
              Ryan@MaxLifeRealty.com
            </a>
            . We value your feedback.
          </p>
        </div>
      </section>
    </>
  );
}
