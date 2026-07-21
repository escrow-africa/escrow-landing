import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer Protect Policy - Escrow Africa",
  description: "Learn how Escrow Africa protects buyers in every transaction. Read about our escrow process, inspection periods, and refund policy.",
};


export default function BuyerProtectionPolicy() {
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
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">
                Buyer Protect Policy
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                Escrow Africa is committed to ensuring that buyers get exactly what they pay for. Our Buyer Protect Policy ensures your funds are kept safe until you verify and accept delivery.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Last updated: July 2026
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <ShieldCheck className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* Buyer Protection Document */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs">
          <h2 className="text-2xl font-bold text-[#062B22] mb-4">Buyer Protection Policy</h2>
          <p className="text-sm text-gray-600 mb-6">Effective Date: July 3, 2026</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-4">Buy with Confidence</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            At EscrowAfrica, we believe every buyer deserves confidence when making a purchase online. Our Buyer Protection Policy is designed to reduce the risks associated with online transactions by ensuring that your payment is not released until you have had the opportunity to verify that the agreed goods or services have been delivered.
            Buyer Protection applies only to eligible transactions completed through the EscrowAfrica platform and is subject to this Policy, our Terms of Service, and applicable laws.
          </p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">How Buyer Protection Works</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            EscrowAfrica acts as a neutral escrow provider. Instead of paying the seller directly, your payment is securely held by EscrowAfrica until one of the following occurs:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>You confirm that you are satisfied with the goods or services.</li>
            <li>The agreed inspection period expires without a dispute being raised.</li>
            <li>A dispute is resolved in accordance with our Dispute Resolution Policy.</li>
            <li>Release is required by law or a binding legal order.</li>
          </ul>
          <p className="text-gray-700 mt-3 leading-relaxed">This process helps reduce the risk of fraud and builds trust between buyers and sellers.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">What Buyer Protection Covers</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Eligible transactions may be protected where:</p>
          <h4 className="font-semibold text-[#062B22] mt-4">Item Not Received</h4>
          <p className="text-gray-700 mt-2">The seller fails to deliver the goods or provide the agreed service within the agreed timeframe.</p>

          <h4 className="font-semibold text-[#062B22] mt-4">Item Materially Different from Description</h4>
          <p className="text-gray-700 mt-2">The goods or services received differ significantly from what both parties agreed before the transaction was funded.</p>
          <p className="text-gray-700 mt-2">Examples include:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Wrong item delivered.</li>
            <li>Incorrect quantity.</li>
            <li>Incorrect model or specification.</li>
            <li>Significant undisclosed damage.</li>
            <li>Counterfeit item represented as genuine.</li>
            <li>Services materially different from the agreed scope.</li>
          </ul>

          <h4 className="font-semibold text-[#062B22] mt-4">Incomplete Service</h4>
          <p className="text-gray-700 mt-2">For service-based transactions, Buyer Protection may apply where the agreed work has not been substantially completed or delivered according to the agreed terms.</p>

          <h4 className="font-semibold text-[#062B22] mt-4">Fraudulent Transactions</h4>
          <p className="text-gray-700 mt-2">Where EscrowAfrica determines that a seller intentionally attempted to deceive a buyer or misrepresent the transaction.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">What Buyer Protection Does Not Cover</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Buyer Protection does not cover:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Buyer remorse or change of mind.</li>
            <li>Minor cosmetic issues disclosed before purchase.</li>
            <li>Damage occurring after the buyer has accepted the transaction.</li>
            <li>Delays caused solely by customs authorities, natural disasters, strikes, or other events beyond the seller's reasonable control.</li>
            <li>Transactions conducted outside the EscrowAfrica platform.</li>
            <li>Payments made directly to a seller outside EscrowAfrica.</li>
            <li>Illegal goods or services.</li>
            <li>Transactions prohibited under our Terms of Service.</li>
            <li>Disputes based solely on personal preference where the agreed specifications were met.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Inspection Period</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Each transaction includes an agreed inspection period. During this time, buyers should:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Carefully inspect goods.</li>
            <li>Test products where appropriate.</li>
            <li>Review completed services.</li>
            <li>Compare the delivered item against the agreed description.</li>
            <li>Notify the seller promptly if an issue exists.</li>
          </ul>
          <p className="text-gray-700 mt-3">If no dispute is raised before the inspection period expires, funds may be released automatically to the seller.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Raising a Dispute</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">If you believe there is a problem with your transaction, you should initiate a dispute as soon as possible through your EscrowAfrica account. You may be asked to provide evidence such as:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Photographs.</li>
            <li>Videos.</li>
            <li>Delivery records.</li>
            <li>Screenshots.</li>
            <li>Contracts.</li>
            <li>Product descriptions.</li>
            <li>Communication between the parties.</li>
            <li>Expert reports where appropriate.</li>
          </ul>
          <p className="text-gray-700 mt-3">Providing complete and accurate information helps us resolve disputes more efficiently.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Our Investigation Process</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">When a dispute is opened, EscrowAfrica may:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Review all available evidence.</li>
            <li>Request additional documentation.</li>
            <li>Contact both parties for clarification.</li>
            <li>Examine transaction history.</li>
            <li>Review delivery records.</li>
            <li>Consult independent information where appropriate.</li>
            <li>Temporarily suspend the release of funds while the investigation is ongoing.</li>
          </ul>
          <p className="text-gray-700 mt-3">Our goal is to reach a fair and impartial outcome based on the available evidence.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Possible Outcomes</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Following our review, EscrowAfrica may:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Release all funds to the seller.</li>
            <li>Refund all funds to the buyer.</li>
            <li>Split the funds between both parties where appropriate and agreed.</li>
            <li>Require additional information before making a determination.</li>
            <li>Take any other action permitted under our Terms of Service or required by applicable law.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Your Responsibilities as a Buyer</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">To benefit from Buyer Protection, you should:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Read the transaction terms carefully before funding.</li>
            <li>Verify the seller's identity where appropriate.</li>
            <li>Keep all communication within the EscrowAfrica platform whenever possible.</li>
            <li>Inspect goods promptly upon delivery.</li>
            <li>Raise disputes within the inspection period.</li>
            <li>Provide truthful and complete information during investigations.</li>
            <li>Avoid approving transactions until you are satisfied.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Transactions Not Eligible for Protection</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Buyer Protection may not apply if:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>You intentionally bypass EscrowAfrica's payment process.</li>
            <li>You authorize payment outside the Platform.</li>
            <li>You submit fraudulent evidence.</li>
            <li>You collude with another party to commit fraud.</li>
            <li>You violate the Terms of Service.</li>
            <li>Your account has been suspended for fraudulent activity.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Fair and Neutral Resolution</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica is an independent escrow provider. We do not automatically favour buyers or sellers. Every dispute is assessed on its own merits using the evidence provided by the parties and any other relevant information available to us. Our objective is to deliver a fair, transparent, and impartial resolution.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Our Commitment</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">We are committed to making online commerce safer across Africa by giving buyers greater confidence that their money will only be released when the agreed transaction conditions have been met. Buyer Protection is one of the ways we help build trust between strangers doing business online.</p>

        </div>
      </div>
    </main>
  );
}
