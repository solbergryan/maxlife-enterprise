import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace Terms | MaxLife Realty",
  description:
    "Terms and conditions for submitting and listing properties on the MaxLife Realty Marketplace.",
};

export default function MarketplaceTermsPage() {
  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Marketplace Terms
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Terms and conditions for property listings and user-submitted content on
            the MaxLife Realty Marketplace
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            The MaxLife Realty Marketplace allows property owners and brokers to
            submit commercial real estate listings for display. By submitting
            content to the Marketplace, you agree to these terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">User Content</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">"User Content"</strong> includes any
            property descriptions, photos, documents, pricing information,
            contact details, or other information you submit to the Marketplace.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You represent and warrant that:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4 mt-3">
            <li>
              • You have the right to submit the User Content to the Marketplace
            </li>
            <li>
              • The User Content does not infringe any copyright, trademark,
              patent, or other intellectual property rights
            </li>
            <li>
              • The User Content does not contain false, misleading, or
              defamatory information
            </li>
            <li>
              • You are authorized to act on behalf of the property owner or
              broker submitting the listing
            </li>
            <li>
              • All information about the property is accurate and complete to
              the best of your knowledge
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            License to MaxLife Realty
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By submitting User Content to the Marketplace, you grant MaxLife
            Realty a worldwide, non-exclusive, royalty-free license to use,
            reproduce, modify, distribute, and display the User Content on the
            Marketplace and in marketing materials (including email, social media,
            and third-party listing syndication platforms).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Prohibited Content
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You may not submit User Content that:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>
              • Is false, misleading, or deceptive in any way
            </li>
            <li>
              • Infringes on intellectual property rights
            </li>
            <li>
              • Contains hate speech, harassment, or discrimination
            </li>
            <li>
              • Violates fair housing laws or equal opportunity regulations
            </li>
            <li>
              • Contains adult content, violence, or illegal activity
            </li>
            <li>
              • Violates any applicable law or regulation
            </li>
            <li>
              • Is spam, unsolicited advertising, or commercial solicitation
            </li>
            <li>
              • Contains personal information of others without consent
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Listing Broker of Record
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Each listing must identify the real estate broker(s) and agent(s)
            representing the property. MaxLife Realty is not the listing broker
            for user-submitted listings unless explicitly stated. The broker(s)
            identified on the listing are the listing brokers of record.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Content Moderation
          </h2>
          <p className="text-gray-300 leading-relaxed">
            MaxLife Realty reserves the right to review, edit, remove, or reject
            any User Content that violates these terms or is otherwise
            inappropriate. We do not pre-screen all content, but we may remove
            content upon notice of a violation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Accuracy of Information
          </h2>
          <p className="text-gray-300 leading-relaxed">
            While we take reasonable steps to ensure accuracy, MaxLife Realty
            does not verify the accuracy or completeness of User Content.
            Information in marketplace listings is provided "as-is" and "as
            available." We recommend that all interested parties conduct their
            own due diligence and verification of property information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            MaxLife Realty is not liable for any inaccurate, incomplete, or
            misleading information in User Content submitted by others. We are
            also not liable for any losses, damages, or claims arising from the
            sale, lease, or transaction of any property listed on the Marketplace.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Copyright and Intellectual Property
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you believe User Content infringes your copyright or intellectual
            property rights, please contact our DMCA designated agent:
          </p>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-4 text-sm text-gray-300">
            <p className="mb-2">
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:legal@maxliferealty.com"
                className="text-gold hover:underline"
              >
                legal@maxliferealty.com
              </a>
            </p>
            <p>
              See our <Link href="/dmca" className="text-gold hover:underline">DMCA Notice</Link> for
              complete details.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Fair Housing
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All User Content must comply with fair housing laws. Listings may not
            discriminate against or exclude buyers, tenants, or occupants based on
            race, color, religion, sex, national origin, familial status,
            disability, sexual orientation, gender identity, marital status, or
            any other protected class. See our{" "}
            <Link href="/fair-housing" className="text-gold hover:underline">Fair Housing Policy</Link>{" "}
            for details.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Suspension and Termination
          </h2>
          <p className="text-gray-300 leading-relaxed">
            MaxLife Realty may suspend or terminate access to the Marketplace for
            any user who violates these terms, submits prohibited content, or
            engages in unlawful conduct. We may also remove listings without
            notice if they become inactive or expired.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-300 leading-relaxed">
            For questions about marketplace listings, content moderation, or
            these terms, contact us at{" "}
            <a
              href="mailto:Ryan@MaxLifeRealty.com"
              className="text-gold hover:underline"
            >
              Ryan@MaxLifeRealty.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
