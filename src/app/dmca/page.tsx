import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Notice | MaxLife Realty",
  description:
    "Digital Millennium Copyright Act (DMCA) designated agent contact information for MaxLife Realty.",
};

export default function DMCAPage() {
  return (
    <>
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="text-4xl font-bold text-white mb-4">DMCA Notice</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Digital Millennium Copyright Act (DMCA) Designated Agent Contact
            Information
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Copyright Infringement Claims
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you believe that content on this website infringes your copyright,
            you may submit a notification under the Digital Millennium Copyright
            Act (DMCA). Your notification must comply with DMCA requirements and
            be submitted to our designated agent as set forth below.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DMCA Designated Agent
          </h2>
          <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6 space-y-3">
            <p className="text-gray-300">
              <strong className="text-white">Name:</strong> Ryan Solberg
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:legal@maxliferealty.com"
                className="text-gold hover:underline"
              >
                legal@maxliferealty.com
              </a>
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Mailing Address:</strong>
              <br />
              MaxLife Realty LLC
              <br />
              Orlando, FL
              <br />
              United States
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DMCA Notification Requirements
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            A proper DMCA notification must include:
          </p>
          <ul className="text-gray-300 space-y-2 ml-4">
            <li>
              • Your physical or electronic signature;
            </li>
            <li>
              • Identification of the copyrighted work claimed to be infringed;
            </li>
            <li>
              • Identification of the infringing material and its location on
              the website (with sufficient detail for us to locate it);
            </li>
            <li>
              • Your contact information (name, address, telephone, email);
            </li>
            <li>
              • A statement that you have a good faith belief the use is not
              authorized by the copyright owner, its agent, or law;
            </li>
            <li>
              • A statement, made under penalty of perjury, that the
              notification is accurate and that you are authorized to act on
              behalf of the copyright owner;
            </li>
            <li>
              • Your full legal name and signature (electronic signature is
              acceptable).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Counter-Notification
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you believe your content was removed as a result of a DMCA
            notification and you believe the removal was incorrect, you may
            submit a counter-notification under DMCA Section 512(g) to our
            designated agent using the contact information above. Your
            counter-notification must comply with all DMCA requirements.
          </p>
        </div>

        <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6">
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">Disclaimer:</strong> This page is provided
            for compliance with the DMCA. Submitting false, misleading, or
            otherwise improper DMCA notifications may result in legal liability.
            If you have questions about copyright, please consult an attorney.
          </p>
        </div>
      </section>
    </>
  );
}
