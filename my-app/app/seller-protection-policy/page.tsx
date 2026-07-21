import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seller Protection Policy - Escrow Africa",
  description: "Learn how Escrow Africa protects sellers. Read about delivery verification, chargeback protection, and payout schedules.",
};


export default function SellerProtectionPolicy() {
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
                Seller Protection Policy
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                Sell with total peace of mind. Our Seller Protection Policy secures your payment in escrow before you ship, safeguarding you against non-payment and fraudulent chargebacks.
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

        {/* Seller Protection Document */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs">
          <h2 className="text-2xl font-bold text-[#062B22] mb-4">Seller Protection Policy</h2>
          <p className="text-sm text-gray-600 mb-6">Effective Date: July 3, 2026</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-4">Sell with Confidence</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica is committed to creating a fair marketplace where honest sellers can do business with confidence. Our Seller Protection Policy is designed to help protect sellers from fraudulent buyers, unauthorized payment activity, and unfair disputes while ensuring buyers receive the goods and services they were promised.
          Seller Protection applies only to eligible transactions completed entirely through the EscrowAfrica platform.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">How Seller Protection Works</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">When a Buyer funds an escrow transaction, EscrowAfrica securely holds the payment until the agreed transaction conditions have been met. This means Sellers can begin fulfilling their obligations knowing that:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>The Buyer has committed the agreed funds.</li>
            <li>Funds are securely held by EscrowAfrica.</li>
            <li>Payments are not released until the transaction reaches its agreed outcome.</li>
            <li>EscrowAfrica will investigate disputes fairly and impartially.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">What Seller Protection Covers</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Eligible Sellers may be protected in the following situations.</p>

          <h4 className="font-semibold text-[#062B22] mt-4">Verified Buyer Funding</h4>
          <p className="text-gray-700 mt-2">Before a Seller is expected to deliver goods or begin providing services, EscrowAfrica confirms that the transaction has been successfully funded, subject to any required verification or compliance checks. Sellers should only proceed after receiving confirmation through the EscrowAfrica platform that funds have been secured.</p>

          <h4 className="font-semibold text-[#062B22] mt-4">Fraudulent Buyer Activity</h4>
          <p className="text-gray-700 mt-2">EscrowAfrica may protect Sellers where a Buyer:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Uses stolen payment credentials.</li>
            <li>Creates fraudulent accounts.</li>
            <li>Attempts to deceive the Platform.</li>
            <li>Provides false information during a dispute.</li>
            <li>Engages in abusive or dishonest conduct.</li>
          </ul>
          <p className="text-gray-700 mt-2">Where fraudulent activity is confirmed, EscrowAfrica may suspend the Buyer’s account and take any other action permitted under our Terms or required by law.</p>

          <h4 className="font-semibold text-[#062B22] mt-4">Unfair Disputes</h4>
          <p className="text-gray-700 mt-2">If a Buyer raises a dispute after the Seller has fulfilled the agreed transaction terms, EscrowAfrica will review all available evidence before making a decision. Sellers will have the opportunity to submit supporting information, including:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Shipping records.</li>
            <li>Delivery confirmations.</li>
            <li>Signed acceptance documents.</li>
            <li>Screenshots.</li>
            <li>Photographs.</li>
            <li>Videos.</li>
            <li>Contracts.</li>
            <li>Communication history.</li>
            <li>Service completion evidence.</li>
            <li>Any other relevant documentation.</li>
          </ul>
          <p className="text-gray-700 mt-2">EscrowAfrica will assess the evidence from both parties before determining the outcome.</p>

          <h4 className="font-semibold text-[#062B22] mt-4">Completed Services</h4>
          <p className="text-gray-700 mt-2">For service-based transactions, Sellers are encouraged to maintain clear records demonstrating completion of the agreed work. Evidence may include:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Project deliverables.</li>
            <li>Reports.</li>
            <li>Source files.</li>
            <li>Client approvals.</li>
            <li>Emails.</li>
            <li>Platform messages.</li>
            <li>Meeting records.</li>
            <li>Milestone confirmations.</li>
          </ul>
          <p className="text-gray-700 mt-2">Providing complete documentation helps facilitate a fair dispute resolution process.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">What Seller Protection Does Not Cover</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Seller Protection does not apply where the Seller:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Delivers goods materially different from the agreed description.</li>
            <li>Knowingly sells counterfeit or prohibited goods.</li>
            <li>Fails to deliver the agreed goods or services.</li>
            <li>Provides misleading or false information.</li>
            <li>Conducts transactions outside the EscrowAfrica platform.</li>
            <li>Violates applicable laws or regulations.</li>
            <li>Breaches the Terms of Service.</li>
            <li>Attempts to manipulate the dispute process.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Seller Responsibilities</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">To remain eligible for Seller Protection, Sellers should:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Accurately describe goods and services.</li>
            <li>Deliver within the agreed timeframe.</li>
            <li>Maintain proof of delivery or completion.</li>
            <li>Communicate honestly with Buyers.</li>
            <li>Respond promptly to requests from EscrowAfrica.</li>
            <li>Cooperate during investigations.</li>
            <li>Comply with applicable laws and platform policies.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Payment Release</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Funds will generally be released to the Seller when:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>The Buyer confirms satisfaction.</li>
            <li>The inspection period expires without a dispute.</li>
            <li>A dispute is resolved in the Seller's favour.</li>
            <li>Both parties jointly authorise the release of funds.</li>
            <li>Release is required by law.</li>
          </ul>
          <p className="text-gray-700 mt-3">EscrowAfrica may delay payment where additional verification or regulatory review is necessary.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Handling Disputes</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">If a dispute is opened, Sellers should:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Respond promptly.</li>
            <li>Submit all requested evidence.</li>
            <li>Maintain professional communication.</li>
            <li>Avoid contacting Buyers in a threatening or abusive manner.</li>
            <li>Continue cooperating until the investigation is complete.</li>
          </ul>
          <p className="text-gray-700 mt-3">Failure to participate in the dispute process may affect the outcome.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Protection Against Chargebacks</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Where a Buyer attempts an unauthorised chargeback or payment reversal, EscrowAfrica may:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Temporarily suspend the transaction.</li>
            <li>Conduct an investigation.</li>
            <li>Work with payment partners to contest fraudulent chargebacks where appropriate.</li>
            <li>Suspend accounts involved in abusive chargeback activity.</li>
          </ul>
          <p className="text-gray-700 mt-3">While EscrowAfrica works to reduce the risk of chargebacks, outcomes may also depend on the rules of banks, card networks, and payment providers.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Fair and Neutral Decision-Making</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica is an independent escrow provider. We do not automatically favour Buyers or Sellers. Every dispute is reviewed on its own facts using the available evidence, applicable policies, and relevant legal obligations. Our goal is to deliver decisions that are fair, transparent, and consistent.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Best Practices for Sellers</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">To reduce the likelihood of disputes, we recommend that Sellers:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Clearly describe goods and services.</li>
            <li>Use quality photographs where applicable.</li>
            <li>Keep copies of invoices and receipts.</li>
            <li>Ship using reliable carriers with tracking.</li>
            <li>Document service milestones.</li>
            <li>Keep communications within the EscrowAfrica platform whenever possible.</li>
            <li>Retain transaction records until the transaction has been fully completed.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Our Commitment</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica is committed to supporting honest businesses, entrepreneurs, freelancers, and merchants across Africa. By providing secure payment protection, transparent dispute resolution, and fair treatment for all parties, we aim to create a marketplace where Sellers can grow their businesses with confidence and Buyers can transact with peace of mind.</p>

        </div>
      </div>
    </main>
  );
}
