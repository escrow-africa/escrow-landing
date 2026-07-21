import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Escrow Africa",
  description: "Read the Escrow Africa Terms of Service. Learn about your rights, responsibilities, fees, and legal agreement when using our platform.",
};

export default function TermsOfService() {
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
                Legal & Governance
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">
                Terms of Service
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                Please read these Terms of Service carefully before using Escrow Africa. By using our platform, you agree to comply with and be bound by these terms.
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

        {/* Terms of Service Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-2">EscrowAfrica Terms of Service</h2>
          <p className="text-sm text-gray-500 mb-4">Effective Date: July 3, 2026</p>

          <h4 className="mt-4 text-lg font-bold text-[#062B22]">1. Introduction</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Welcome to EscrowAfrica. These Terms of Service ("Terms") govern your access to and use of the EscrowAfrica website, mobile applications, APIs, and related services (collectively, the "Services"). By creating an account, accessing, or using our Services, you agree to be legally bound by these Terms. If you do not agree to these Terms, you must not use our Services. EscrowAfrica provides a technology platform that facilitates secure transactions by holding funds in escrow until the buyer and seller have fulfilled the agreed transaction conditions. EscrowAfrica is not the buyer or seller of goods or services offered through the platform. We act as an independent escrow service provider, facilitating secure payments and helping reduce fraud between transacting parties.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">2. Definitions</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">For the purposes of these Terms:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li><strong>Account</strong> means your registered EscrowAfrica profile.</li>
            <li><strong>Buyer</strong> means a person or business purchasing goods or services through an EscrowAfrica transaction.</li>
            <li><strong>Seller</strong> means a person or business offering goods or services through an EscrowAfrica transaction.</li>
            <li><strong>Escrow Transaction</strong> means a transaction in which funds are held by EscrowAfrica until the agreed release conditions have been satisfied.</li>
            <li><strong>Business Account</strong> means an account registered by a legally recognized business entity.</li>
            <li><strong>Individual Account</strong> means an account registered by a private individual.</li>
            <li><strong>Inspection Period</strong> means the agreed period during which the Buyer may inspect delivered goods or completed services before funds are released.</li>
            <li><strong>Dispute</strong> means a disagreement between parties regarding a transaction.</li>
            <li><strong>Platform</strong> means all EscrowAfrica products and services.</li>
            <li><strong>Transaction Fee</strong> means the fee charged for facilitating an escrow transaction.</li>
            <li><strong>Wallet</strong> means any balance maintained on behalf of a user within the platform where supported.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">3. Eligibility</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To use our Services, you must:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Be at least 18 years old or the legal age of majority in your jurisdiction.</li>
            <li>Have the legal capacity to enter into binding contracts.</li>
            <li>Provide accurate and complete information.</li>
            <li>Not be prohibited from using financial services under applicable laws.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>
          <p className="mt-2 text-gray-600">Businesses registering with EscrowAfrica must be legally incorporated or otherwise authorized to conduct business within their jurisdiction.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">4. Account Registration</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">You agree that all information submitted during registration is accurate, current, and complete. You are responsible for:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Maintaining the confidentiality of your login credentials.</li>
            <li>Keeping your contact information up to date.</li>
            <li>Securing your devices.</li>
            <li>Promptly notifying EscrowAfrica of any unauthorized access to your account.</li>
          </ul>
          <p className="mt-2 text-gray-600">You remain responsible for all activity conducted through your account unless you notify us of unauthorized use without unreasonable delay.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">5. Identity Verification (KYC)</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To protect users and comply with financial regulations, EscrowAfrica may require identity verification at any time. Verification may include government-issued identification, facial verification, phone verification, email verification, residential address verification, bank account verification, business registration documents, tax identification information where required, and information regarding the source of funds for certain transactions. EscrowAfrica may decline, delay, suspend, or cancel transactions until satisfactory verification has been completed. Submitting false or misleading information may result in immediate suspension or permanent termination of your account.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">6. Business Verification</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Businesses may be required to provide additional information, including certificate of incorporation or equivalent registration documents, business address, names of directors or authorized representatives, beneficial ownership information where required by law, tax registration details, and additional documentation reasonably requested for compliance purposes. Business accounts may receive access to additional platform features, including subscription plans, reporting tools, APIs, and team management capabilities.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">7. How EscrowAfrica Works</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">A typical transaction follows these steps:</p>
          <ol className="list-decimal ml-5 mt-3 text-gray-600 space-y-1">
            <li>The buyer and seller agree on the terms of the transaction.</li>
            <li>One party creates an escrow transaction on the platform.</li>
            <li>The other party reviews and accepts the transaction terms.</li>
            <li>The buyer deposits the agreed amount into escrow.</li>
            <li>EscrowAfrica confirms receipt of funds.</li>
            <li>The seller delivers the agreed goods or services.</li>
            <li>The buyer inspects the goods or services during the agreed inspection period.</li>
            <li>If the buyer accepts the transaction, the funds are released to the seller.</li>
            <li>If a dispute arises, the transaction enters the dispute resolution process.</li>
          </ol>
          <p className="mt-2 text-gray-600">EscrowAfrica reserves the right to delay fund release where required by law, regulatory obligations, fraud prevention measures, or pending investigations.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">8. User Responsibilities</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">All users agree to:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Act honestly and in good faith.</li>
            <li>Provide truthful information.</li>
            <li>Respect agreed transaction terms.</li>
            <li>Respond promptly to verification requests.</li>
            <li>Cooperate during dispute investigations.</li>
            <li>Comply with applicable laws.</li>
            <li>Protect the confidentiality of their account credentials.</li>
          </ul>
          <p className="mt-2 text-gray-600">Users are responsible for ensuring that goods and services exchanged through the platform comply with applicable laws.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">9. Prohibited Activities</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">You may not use EscrowAfrica to facilitate transactions involving:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Illegal goods or services.</li>
            <li>Counterfeit products.</li>
            <li>Stolen property.</li>
            <li>Weapons where prohibited by law.</li>
            <li>Controlled substances.</li>
            <li>Human trafficking or exploitation.</li>
            <li>Terrorism financing.</li>
            <li>Money laundering.</li>
            <li>Fraudulent schemes.</li>
            <li>Pyramid or Ponzi schemes.</li>
            <li>Intellectual property infringement.</li>
            <li>Sanctioned individuals or organizations.</li>
            <li>Transactions intended to evade applicable laws or taxes.</li>
          </ul>

          <p className="mt-2 text-gray-600 leading-relaxed">You also agree not to:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Use another person's identity.</li>
            <li>Interfere with platform security.</li>
            <li>Attempt unauthorized access to our systems.</li>
            <li>Upload malicious software or code.</li>
            <li>Reverse engineer or exploit the platform.</li>
            <li>Create multiple accounts to evade restrictions.</li>
            <li>Abuse customer support personnel.</li>
            <li>Manipulate or falsify transaction records.</li>
          </ul>
          <p className="mt-2 text-gray-600">EscrowAfrica reserves the right to suspend or terminate accounts engaged in prohibited activities and to report suspected unlawful conduct to relevant authorities where required.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">10. Transaction Fees</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica charges a service fee for facilitating escrow transactions. For individual users, the standard transaction fee is:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>1.5% of the transaction value, subject to a maximum fee of ₦5,000 per transaction, unless otherwise stated.</li>
          </ul>
          <p className="mt-2 text-gray-600">For business accounts, separate subscription plans and pricing may apply. Additional services, including API integrations, premium support, or custom enterprise features, may attract separate fees. All applicable fees will be disclosed before a transaction is confirmed. Fees paid for completed escrow services are generally non-refundable except where required by law or expressly stated in these Terms.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">11. Payments and Funding Transactions</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To initiate an escrow transaction, the Buyer must deposit the agreed purchase amount, together with any applicable fees, using one of the payment methods supported by EscrowAfrica. A transaction will only be considered "Funded" after EscrowAfrica has received the funds and completed any required verification checks. EscrowAfrica reserves the right to delay or reject funding where:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>A payment appears fraudulent or unauthorized.</li>
            <li>Required identity verification has not been completed.</li>
            <li>The payment is subject to legal or regulatory review.</li>
            <li>The payment provider reverses or declines the transaction.</li>
            <li>We reasonably suspect money laundering, terrorist financing, or other unlawful activity.</li>
          </ul>
          <p className="mt-2 text-gray-600">Funds held in escrow remain subject to these Terms until they are released, refunded, or otherwise disposed of in accordance with applicable law.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">12. Delivery of Goods and Services</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Once a transaction has been successfully funded, the Seller should deliver the goods or perform the services in accordance with the agreed transaction terms. The Seller is responsible for ensuring that:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>The goods or services match the agreed description.</li>
            <li>Delivery is completed within the agreed timeframe.</li>
            <li>Any required tracking information or proof of delivery is provided where applicable.</li>
            <li>Goods are packaged appropriately to minimize the risk of damage during transit.</li>
          </ul>
          <p className="mt-2 text-gray-600">EscrowAfrica does not inspect, store, transport, manufacture, or guarantee the quality of any goods or services exchanged through the Platform.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">13. Inspection Period</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Unless otherwise agreed by both parties, each transaction includes an Inspection Period during which the Buyer may examine the delivered goods or completed services. During the Inspection Period, the Buyer may:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Accept the transaction.</li>
            <li>Report a problem.</li>
            <li>Request additional clarification from the Seller.</li>
            <li>Initiate a dispute if the delivered goods or services materially differ from the agreed terms.</li>
          </ul>
          <p className="mt-2 text-gray-600">If the Buyer neither accepts the transaction nor raises a dispute before the Inspection Period expires, EscrowAfrica may release the funds to the Seller in accordance with the transaction terms.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">14. Release of Funds</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Funds will generally be released when one of the following occurs:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>The Buyer confirms satisfactory completion of the transaction.</li>
            <li>The Inspection Period expires without a dispute.</li>
            <li>Both parties jointly instruct EscrowAfrica to release the funds.</li>
            <li>A dispute is resolved in favor of one party.</li>
            <li>EscrowAfrica is legally required to release or return the funds.</li>
          </ul>
          <p className="mt-2 text-gray-600">Before releasing funds, EscrowAfrica may perform additional verification checks where reasonably necessary to prevent fraud or comply with legal obligations. EscrowAfrica is not responsible for delays caused by banks, payment processors, public holidays, compliance reviews, or circumstances beyond our reasonable control.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">15. Transaction Cancellation</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Transactions may only be cancelled under circumstances permitted by these Terms or applicable law. Before funding, either party may cancel a transaction without penalty unless otherwise agreed. After funding, cancellation generally requires mutual agreement between the Buyer and Seller; or a determination by EscrowAfrica under its Dispute Resolution Policy. Where a transaction is cancelled, EscrowAfrica may deduct any non-refundable processing costs, banking charges, or other fees permitted by law before returning the remaining balance.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">16. Refunds</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Refunds may be issued where both parties mutually agree; a dispute is resolved in favor of the Buyer; the Seller is unable or unwilling to fulfill the agreed transaction; a duplicate payment was received; EscrowAfrica determines that a transaction violates these Terms; or applicable law requires a refund. Refund processing times may vary depending on the payment provider, banking system, currency, and jurisdiction. EscrowAfrica cannot guarantee the speed at which financial institutions process returned funds.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">17. Dispute Resolution</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">If a disagreement arises between the Buyer and Seller, either party may initiate a dispute before funds are released. Upon receiving a dispute, EscrowAfrica may temporarily suspend the release of funds; request additional documentation from either party; review communications exchanged through the Platform; examine delivery records, invoices, contracts, receipts, photographs, or other relevant evidence; request written statements from the parties; and seek clarification from third-party service providers where appropriate. Both parties agree to cooperate fully and provide accurate information during the investigation. Failure to respond within the requested timeframe may result in EscrowAfrica making a determination based on the available evidence. EscrowAfrica will make reasonable efforts to resolve disputes fairly and impartially; however, our decision will be based solely on the evidence available to us and does not replace any rights either party may have under applicable law.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">18. Chargebacks and Payment Reversals</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">If a Buyer initiates a chargeback, payment reversal, or similar action after funding a transaction, EscrowAfrica may suspend the transaction; freeze the associated account; delay fund release; recover any losses incurred; and require additional verification from the parties. Users remain responsible for any transaction that is later determined to have been funded using unauthorized or fraudulent payment methods. Fraudulent chargebacks may result in permanent account suspension and referral to the relevant financial institutions or law enforcement authorities.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">19. Suspicious Transactions</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica monitors transactions for unusual or suspicious activity. We may suspend, delay, or decline transactions where we reasonably believe they involve fraud, identity theft, money laundering, terrorist financing, sanctions violations, stolen financial instruments, unauthorized account access, or any activity prohibited by applicable law. Where legally required, EscrowAfrica may report suspicious activity to the appropriate regulatory or law enforcement authorities without prior notice to the affected user.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">20. Account Suspension and Termination</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica may suspend, restrict, or permanently terminate an account where a user violates these Terms; provides false or misleading information; fails identity verification; engages in fraudulent conduct; uses the Platform for unlawful purposes; or creates unacceptable financial or legal risk for EscrowAfrica or other users. Where appropriate, we may provide notice before taking action. However, immediate suspension may occur where necessary to protect users, comply with legal obligations, or prevent financial loss. Termination of an account does not relieve a user of obligations arising from transactions initiated before termination, including outstanding fees, dispute resolution, or legal responsibilities.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">21. Intellectual Property</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">All rights, title, and interest in the EscrowAfrica Platform, including its software, designs, logos, trademarks, graphics, content, documentation, APIs, and technology, are owned by or licensed to EscrowAfrica. Your use of the Services does not grant you ownership of any intellectual property rights. You may not copy, reproduce, or distribute our content without prior written permission. You may not modify, reverse engineer, decompile, or disassemble any part of the Platform except where expressly permitted by applicable law. You may not use the EscrowAfrica name, logo, or trademarks in a manner that suggests endorsement or affiliation without our prior written consent.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">22. User Content</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">You retain ownership of any information, documents, images, or other content you submit to the Platform. By submitting content, you grant EscrowAfrica a limited, non-exclusive, worldwide, royalty-free license to use, store, reproduce, and process such content solely for the purpose of providing the Services, verifying transactions, investigating disputes, preventing fraud, meeting legal and regulatory obligations, and improving our Services. You represent and warrant that you have the necessary rights to submit any content you provide.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">23. Limitation of Liability</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To the fullest extent permitted by law, EscrowAfrica shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages, including but not limited to loss of profits, loss of revenue, loss of business opportunities, loss of goodwill, loss of data, or business interruption. EscrowAfrica facilitates secure payment transactions but is not a party to the underlying contract between the Buyer and Seller. We do not guarantee the quality, safety, or legality of goods or services. We do not guarantee that a Buyer or Seller will fulfill their contractual obligations. We do not guarantee that every dispute will be resolved to the satisfaction of both parties. We do not guarantee uninterrupted or error-free operation of the Platform. Where liability cannot be excluded under applicable law, EscrowAfrica's total liability arising from a specific transaction shall not exceed the total fees paid to EscrowAfrica for that transaction. Nothing in these Terms excludes liability that cannot lawfully be limited or excluded.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">24. Indemnification</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">You agree to indemnify and hold harmless EscrowAfrica, its directors, employees, officers, contractors, affiliates, and partners from any claims, liabilities, losses, damages, costs, or expenses (including reasonable legal fees) arising out of or related to your breach of these Terms, your misuse of the Services, your violation of any law or regulation, your infringement of the rights of another person or entity, or fraudulent or negligent acts committed by you.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">25. Force Majeure</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica shall not be liable for delays or failures in performance caused by events beyond our reasonable control, including but not limited to natural disasters, floods, fires, epidemics or pandemics, war or civil unrest, terrorist attacks, government actions, internet or telecommunications outages, banking system failures, power outages, or cybersecurity incidents despite reasonable safeguards. We will make reasonable efforts to resume normal operations as soon as practicable.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">26. Electronic Communications</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">By creating an account and using the Services, you consent to receive communications electronically, including account notifications, security alerts, transaction updates, verification requests, service announcements, and legal notices. Electronic communications satisfy any legal requirement that such communications be in writing.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">27. Changes to These Terms</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica may amend these Terms from time to time to reflect changes in our Services, legal requirements, or business operations. Where changes are material, we will provide reasonable notice through our website, email, or in-app notifications. Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the updated Terms.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">28. Governing Law and Jurisdiction</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, unless mandatory laws of another jurisdiction require otherwise. Before commencing legal proceedings, the parties are encouraged to attempt to resolve disputes through good-faith discussions or mediation where appropriate. If a dispute cannot be resolved amicably, it shall be submitted to the courts of competent jurisdiction in Nigeria, unless otherwise required by applicable law.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">29. Severability</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">30. Assignment</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">You may not assign or transfer your rights or obligations under these Terms without the prior written consent of EscrowAfrica. EscrowAfrica may assign or transfer its rights and obligations in connection with a merger, acquisition, restructuring, financing, or sale of assets, provided that such assignment does not materially reduce your rights under these Terms.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">31. Entire Agreement</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">These Terms, together with our Privacy Policy and any additional policies referenced herein, constitute the entire agreement between you and EscrowAfrica regarding your use of the Services and supersede all prior agreements, understandings, and communications relating to the Services.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">32. Contact Information</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Questions, complaints, or legal notices relating to these Terms may be submitted through the official support channels published on the EscrowAfrica website.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Acknowledgement</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">By creating an account or using the Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. Thank you for choosing EscrowAfrica. Our mission is to make online transactions across Africa safer, simpler, and more trustworthy for individuals and businesses alike.</p>
        </div>
      </div>
    </main>
  );
}
