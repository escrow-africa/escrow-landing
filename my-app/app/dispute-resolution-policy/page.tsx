import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispute Resolution Policy - Escrow Africa",
  description: "Learn about the Escrow Africa dispute resolution process. Find out how we resolve transaction disputes fairly and transparently.",
};


export default function DisputeResolutionPolicy() {
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
                Dispute Resolution Policy
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                Transactions don't always go as planned. Our Dispute Resolution Policy ensures a fair, prompt, and evidence-based process to resolve issues between buyers and sellers.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Last updated: July 2026
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <Scale className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* Dispute Resolution Document */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs">
          <h2 className="text-2xl font-bold text-[#062B22] mb-4">EscrowAfrica Dispute Resolution Policy</h2>
          <p className="text-sm text-gray-600 mb-6">Effective Date: July 3, 2026</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-4">Our Commitment to Fair Resolution</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica exists to make online transactions safer and more trustworthy. While most transactions are completed successfully, disputes may occasionally arise. Our role is to act as a neutral escrow service provider, reviewing the available evidence and facilitating a fair resolution. This Policy explains how disputes are handled for transactions completed through the EscrowAfrica platform.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">1. When Can a Dispute Be Opened?</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">A dispute may be opened before funds are released if there is a genuine disagreement regarding the transaction, including but not limited to:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Goods were not delivered.</li>
            <li>Services were not completed as agreed.</li>
            <li>Goods received are materially different from the agreed description.</li>
            <li>The wrong item was delivered.</li>
            <li>A transaction appears to involve fraud or misrepresentation.</li>
            <li>The buyer or seller believes the agreed transaction terms have been breached.</li>
          </ul>
          <p className="text-gray-700 mt-2 leading-relaxed">Disputes should be raised during the agreed inspection period or within any other timeframe specified for the transaction.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">2. How to Open a Dispute</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">To initiate a dispute, the affected party should:</p>
          <ol className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>Log in to their EscrowAfrica account.</li>
            <li>Open the relevant transaction.</li>
            <li>Select "Raise a Dispute."</li>
            <li>Provide a detailed explanation of the issue.</li>
            <li>Upload all available supporting evidence.</li>
          </ol>
          <p className="text-gray-700 mt-2 leading-relaxed">Once a dispute is opened, the release of funds will generally be paused until the matter is resolved.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">3. Evidence We May Request</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">To ensure a fair review, EscrowAfrica may request evidence from either or both parties, including:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Purchase agreements or contracts.</li>
            <li>Product descriptions.</li>
            <li>Screenshots of conversations.</li>
            <li>In-platform messages.</li>
            <li>Photographs or videos.</li>
            <li>Shipping receipts and tracking information.</li>
            <li>Delivery confirmations.</li>
            <li>Signed acceptance documents.</li>
            <li>Invoices and receipts.</li>
            <li>Proof of service completion.</li>
            <li>Expert assessments where relevant.</li>
            <li>Any other documentation reasonably related to the dispute.</li>
          </ul>
          <p className="text-gray-700 mt-2">Failure to provide requested information within the specified timeframe may affect the outcome.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">4. Our Review Process</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Every dispute is reviewed individually. During our investigation, we may:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Examine all evidence submitted.</li>
            <li>Request additional information.</li>
            <li>Review transaction records.</li>
            <li>Analyse communication history.</li>
            <li>Verify payment status.</li>
            <li>Review delivery or service completion records.</li>
            <li>Contact both parties for clarification.</li>
            <li>Consult trusted third parties where appropriate.</li>
          </ul>
          <p className="text-gray-700 mt-2">Our objective is to make a fair and impartial determination based on the available evidence.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">5. Possible Outcomes</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">After completing our review, EscrowAfrica may:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Release the full payment to the Seller.</li>
            <li>Refund the full payment to the Buyer.</li>
            <li>Split the funds between the parties where appropriate and agreed.</li>
            <li>Request additional evidence before making a final decision.</li>
            <li>Cancel the transaction if permitted under our Terms of Service or required by law.</li>
          </ul>
          <p className="text-gray-700 mt-2">Each decision is made based on the specific facts of the transaction.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">6. Timelines</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">We aim to resolve disputes as quickly as possible while ensuring a thorough review. Resolution times may vary depending on:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>The complexity of the dispute.</li>
            <li>The quality and completeness of the evidence.</li>
            <li>The responsiveness of the parties.</li>
            <li>Verification requirements.</li>
            <li>Legal or regulatory obligations.</li>
          </ul>
          <p className="text-gray-700 mt-2">While many disputes can be resolved within a few business days, more complex cases may require additional time.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">7. Responsibilities of Buyers and Sellers</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Both parties are expected to:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Act honestly and in good faith.</li>
            <li>Respond promptly to requests for information.</li>
            <li>Provide accurate and complete evidence.</li>
            <li>Communicate respectfully.</li>
            <li>Avoid submitting false or misleading information.</li>
          </ul>
          <p className="text-gray-700 mt-2">Attempts to manipulate the dispute process may result in account suspension or termination.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">8. Fraudulent Claims</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica takes fraudulent disputes seriously. We may take action against users who:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Submit fabricated evidence.</li>
            <li>Misrepresent the facts of a transaction.</li>
            <li>Attempt to obtain funds dishonestly.</li>
            <li>Collude with another party to defraud the platform.</li>
            <li>Abuse the dispute process repeatedly.</li>
          </ul>
          <p className="text-gray-700 mt-2">Such actions may result in:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Loss of Buyer or Seller Protection.</li>
            <li>Suspension or termination of the account.</li>
            <li>Reporting to payment providers, regulators, or law enforcement where required.</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">9. Neutrality</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">EscrowAfrica is an independent escrow provider. We do not automatically favour buyers or sellers. Every case is assessed impartially based on:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>The agreed transaction terms.</li>
            <li>Evidence provided by the parties.</li>
            <li>Relevant platform records.</li>
            <li>Applicable laws and regulations.</li>
          </ul>
          <p className="text-gray-700 mt-2">Our goal is to reach a fair outcome that reflects the facts of the case.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">10. Mediation and Legal Proceedings</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Before pursuing legal action, we encourage both parties to work toward an amicable resolution. Where appropriate, EscrowAfrica may facilitate communication between the parties to help resolve misunderstandings. Nothing in this Policy prevents either party from exercising any legal rights available under applicable law.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">11. Final Decisions</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">After reviewing the available evidence, EscrowAfrica will communicate its decision to the parties through the Platform or other official communication channels. Users are expected to comply with the outcome unless a court of competent jurisdiction or another legally binding authority orders otherwise.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">12. Policy Updates</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">We may update this Policy periodically to reflect improvements to our Services, changes in legal requirements, or operational enhancements. Material updates will be communicated through our website or other official channels.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Contact Us</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">If you have questions about this Policy or need assistance with an active dispute, please contact EscrowAfrica through the official support channels available on our website.</p>

          <h3 className="text-lg font-semibold text-[#062B22] mt-6">Our Promise</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">Every dispute deserves a fair hearing. EscrowAfrica is committed to resolving disagreements with integrity, transparency, and impartiality—helping buyers and sellers across Africa transact with greater confidence.</p>

        </div>
      </div>
    </main>
  );
}
