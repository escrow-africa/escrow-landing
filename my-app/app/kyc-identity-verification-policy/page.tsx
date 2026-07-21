import React from "react";
import Link from "next/link";
import { UserCheck, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KYC & Identity Verification Policy - Escrow Africa",
  description: "Learn about identity verification (KYC/KYB) requirements at Escrow Africa. Find out what documents are needed to verify your account.",
};

export default function KycIdentityVerificationPolicy() {
  return (
    <main className="min-h-screen bg-gray-50/50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#062B22] transition-colors gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F3B659]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#062B22]/5 text-[#062B22] mb-4">
                <FileText className="w-3.5 h-3.5" />
                Legal & Policies
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight animate-fade-in">
                KYC and Identity Policy
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                Know Your Customer (KYC) and Know Your Business (KYB) are critical to maintaining trust and preventing fraud. We make verification fast and simple so you can trade safely.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Last updated: July 2026
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <UserCheck className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* KYC & Identity Verification Policy Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-2">EscrowAfrica Know Your Customer (KYC) &amp;
            Identity Verification Policy</h2>
          <p className="text-sm text-gray-500 mb-4">Effective Date: July 7, 2026</p>

          <h4 className="mt-4 text-lg font-bold text-[#062B22]">1. Purpose</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica is committed to creating a secure and trustworthy marketplace for individuals and businesses across Africa. As part of this commitment, we require identity verification for certain users and transactions to help prevent fraud, comply with applicable laws, and protect the integrity of our platform. This Know Your Customer (KYC) &amp; Identity Verification Policy explains when verification is required, what information we collect, and how it is used.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">2. Why We Verify Users</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Identity verification helps us:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Protect buyers and sellers from fraud.</li>
            <li>Prevent identity theft and account impersonation.</li>
            <li>Comply with anti-money laundering (AML) and counter-terrorist financing (CFT) obligations.</li>
            <li>Meet regulatory requirements in jurisdictions where we operate.</li>
            <li>Maintain a trusted marketplace.</li>
            <li>Reduce payment fraud and chargebacks.</li>
          </ul>
          <p className="mt-2 text-gray-600">Verification also helps build confidence between parties transacting through EscrowAfrica.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">3. Who Must Complete Verification?</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica may require verification for:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Individuals creating an account.</li>
            <li>Sellers before receiving payouts.</li>
            <li>Buyers participating in high-value transactions.</li>
            <li>Business accounts.</li>
            <li>Users requesting increased transaction limits.</li>
            <li>Users flagged for enhanced security review.</li>
            <li>Users involved in disputes.</li>
            <li>Any account where verification is reasonably required to comply with law or manage risk.</li>
          </ul>
          <p className="mt-2 text-gray-600">Verification requirements may vary depending on transaction value, payment method, country, or risk profile.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">4. Verification Levels</h4>
          <h5 className="mt-3 font-semibold text-[#062B22]">Level 1 – Basic Verification</h5>
          <p className="text-gray-600 mt-1">Suitable for entry-level access. May require:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Full legal name.</li>
            <li>Mobile phone number.</li>
            <li>Email address.</li>
            <li>Date of birth.</li>
          </ul>

          <h5 className="mt-4 font-semibold text-[#062B22]">Level 2 – Standard Verification</h5>
          <p className="text-gray-600 mt-1">May require:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Government-issued identification.</li>
            <li>Selfie or facial verification.</li>
            <li>Residential address.</li>
            <li>Date of birth confirmation.</li>
          </ul>
          <p className="mt-2 text-gray-600">This level may be required before accessing higher transaction limits.</p>

          <h5 className="mt-4 font-semibold text-[#062B22]">Level 3 – Enhanced Verification</h5>
          <p className="text-gray-600 mt-1">For higher-risk or higher-value transactions. Additional information may include:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Proof of address.</li>
            <li>Bank account verification.</li>
            <li>Tax identification number (where applicable).</li>
            <li>Source of funds information.</li>
            <li>Source of wealth information where required.</li>
            <li>Additional documentation requested by our Compliance Team.</li>
          </ul>

          <h5 className="mt-4 font-semibold text-[#062B22]">Business Verification</h5>
          <p className="text-gray-600 mt-1">Business accounts may be required to provide:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Certificate of incorporation or equivalent registration document.</li>
            <li>Business registration number.</li>
            <li>Registered business address.</li>
            <li>Tax registration details (where applicable).</li>
            <li>Names of directors or authorised representatives.</li>
            <li>Identification of beneficial owners where required.</li>
            <li>Bank account information.</li>
            <li>Any additional information reasonably requested to satisfy compliance obligations.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">5. Verification Process</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Users may be asked to:</p>
          <ol className="list-decimal ml-5 mt-3 text-gray-600 space-y-1">
            <li>Upload identity documents.</li>
            <li>Complete facial verification where required.</li>
            <li>Confirm contact details.</li>
            <li>Submit supporting documentation.</li>
            <li>Respond to requests for additional information.</li>
          </ol>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica may use trusted third-party verification providers to assist in confirming identity.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">6. Ongoing Monitoring</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Verification is not always a one-time process. We may request updated information where:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Identity documents expire.</li>
            <li>Account details change.</li>
            <li>Transaction patterns change significantly.</li>
            <li>Regulatory requirements change.</li>
            <li>Suspicious activity is detected.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">7. Failure to Complete Verification</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">If a user fails to complete required verification, EscrowAfrica may:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Restrict account functionality.</li>
            <li>Delay or suspend transactions.</li>
            <li>Withhold payouts until verification is completed.</li>
            <li>Limit transaction values.</li>
            <li>Suspend or terminate the account where permitted by law.</li>
          </ul>
          <p className="mt-2 text-gray-600">These measures help protect all users of the platform.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">8. Protection of Verification Information</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Verification information is handled in accordance with our Privacy Policy. We implement appropriate administrative, technical, and organisational safeguards to protect identity documents and personal information from unauthorised access, disclosure, alteration, or destruction.</p>
          <p className="mt-2 text-gray-600">Access to verification data is limited to authorised personnel and approved service providers with a legitimate business need.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">9. Fraudulent Information</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Providing false, forged, altered, or misleading documents or information is strictly prohibited. Where fraudulent verification attempts are identified, EscrowAfrica may:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Reject the verification request.</li>
            <li>Suspend or permanently terminate the account.</li>
            <li>Cancel pending transactions.</li>
            <li>Report suspected criminal activity to relevant authorities where required by law.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">10. Policy Updates</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We may update this Policy periodically to reflect changes in legal requirements, industry standards, or our business operations. Material changes will be communicated through our website or other official communication channels.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Contact Us</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Questions regarding identity verification or this Policy may be directed to EscrowAfrica through the official support channels listed on our website.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Commitment</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Identity verification is one of the ways we protect our community. By verifying users responsibly and securely, EscrowAfrica helps create a marketplace where individuals and businesses can transact with greater confidence and reduced risk.</p>
        </div>
      </div>
    </main>
  );
}
