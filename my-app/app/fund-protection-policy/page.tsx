import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fund Protection Policy - Escrow Africa",
  description: "Learn how Escrow Africa keeps your funds safe. Read about our trust accounts, partner banks, and data security.",
};

export default function FundProtectionPolicy() {
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
                Fund Protection Policy
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                The safety of your money is our absolute priority. Our Fund Protection Policy outlines the strict bank-grade safeguards we use to secure client funds at all times.
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

        {/* Fund Protection Policy Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-2">EscrowAfrica Fund Protection Policy</h2>
          <p className="text-sm text-gray-500 mb-4">Effective Date: July 7, 2026</p>

          <h4 className="mt-4 text-lg font-bold text-[#062B22]">Your Money. Protected.</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">At EscrowAfrica, protecting customer funds is our highest operational priority. Our platform is designed so that payments are held securely until the agreed transaction conditions have been satisfied. This helps reduce fraud and gives both buyers and sellers greater confidence when transacting online.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">How Escrow Works</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Unlike a direct payment, funds sent through EscrowAfrica are not immediately released to the seller. Instead:</p>
          <ol className="list-decimal ml-5 mt-3 text-gray-600 space-y-1">
            <li>The buyer and seller agree on the transaction terms.</li>
            <li>The buyer funds the escrow transaction.</li>
            <li>EscrowAfrica confirms receipt of the funds.</li>
            <li>The seller delivers the agreed goods or services.</li>
            <li>The buyer inspects the delivery during the agreed inspection period.</li>
            <li>Funds are released only when the agreed release conditions are met or the transaction is otherwise resolved in accordance with our policies.</li>
          </ol>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">When Funds Are Released</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Funds may be released when:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>The buyer confirms acceptance.</li>
            <li>The inspection period expires without a dispute.</li>
            <li>Both parties jointly authorise the release.</li>
            <li>A dispute is resolved.</li>
            <li>A court or competent authority requires release.</li>
            <li>Release is otherwise permitted under our Terms of Service.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">When Funds May Be Delayed</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To protect our users, we may temporarily delay the release of funds where:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Identity verification is incomplete.</li>
            <li>Fraud is suspected.</li>
            <li>A dispute has been opened.</li>
            <li>Payment verification is pending.</li>
            <li>Additional compliance checks are required.</li>
            <li>We are required to comply with a legal or regulatory obligation.</li>
          </ul>
          <p className="mt-2 text-gray-600 leading-relaxed">These measures are intended to protect both buyers and sellers.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Refunds</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Where a transaction is cancelled or resolved in favour of the buyer, funds may be returned in accordance with our Terms of Service and Refund Policy. Refund processing times may vary depending on banks, payment providers, and the payment method used.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Security Measures</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To help safeguard customer funds, EscrowAfrica implements measures such as:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Secure payment processing.</li>
            <li>Identity verification.</li>
            <li>Fraud monitoring.</li>
            <li>Access controls.</li>
            <li>Transaction logging.</li>
            <li>Continuous security monitoring.</li>
            <li>Risk-based transaction reviews.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">User Responsibilities</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Customers also play an important role in protecting their funds. We encourage users to:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Verify transaction details before making payment.</li>
            <li>Never send money outside the EscrowAfrica platform for an active escrow transaction.</li>
            <li>Protect their account credentials.</li>
            <li>Report suspicious activity immediately.</li>
            <li>Review goods or services during the inspection period before approving fund release.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Important Information</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica acts as an independent escrow service provider. We facilitate secure holding and release of funds in accordance with agreed transaction terms. EscrowAfrica does not guarantee the quality, legality, or performance of the underlying goods or services. Users remain responsible for conducting appropriate due diligence before entering into a transaction.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Commitment</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Trust begins with protecting your money. Every safeguard we implement—from identity verification to fraud monitoring and controlled fund release—is designed to help ensure that your funds are handled securely and fairly throughout the transaction process. EscrowAfrica is committed to providing a trusted escrow experience that empowers individuals and businesses to transact with confidence across Africa.</p>
        </div>
      </div>
    </main>
  );
}
