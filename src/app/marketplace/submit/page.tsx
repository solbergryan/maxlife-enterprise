import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { SubmitForm } from "./SubmitForm";

export const metadata: Metadata = {
  title: "Post a CRE Listing | MaxLife Marketplace",
  description:
    "List your commercial property for sale or lease on MaxLife. Free for owners, brokers, and investors. Central Florida CRE marketplace.",
  robots: { index: false, follow: true },
};

export default async function SubmitListingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/academy/login?next=/marketplace/submit");
  }

  return (
    <div className="bg-dark min-h-[calc(100vh-4rem)] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/marketplace"
            className="text-gray-300 hover:text-gold text-sm inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to marketplace
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Post a <span className="text-gold">Listing</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Fill out as much as you have. Required fields are marked with an
            asterisk — everything else is optional but helps buyers evaluate
            your property. You can edit your listing later.
          </p>
        </div>

        <SubmitForm userEmail={user.email ?? ""} />

        <p className="text-gray-600 text-xs mt-8 leading-relaxed">
          By posting you confirm the information is accurate to your knowledge
          and that you are authorized to market this property. MaxLife Realty
          does not verify listings and is not a party to transactions between
          buyers and listers.
        </p>
      </div>
    </div>
  );
}
