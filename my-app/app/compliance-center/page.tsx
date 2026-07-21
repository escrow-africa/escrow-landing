import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Center - Escrow Africa",
  description: "Explore the Escrow Africa Compliance Center. Read about our licensing, anti-money laundering (AML) controls, and regulatory adherence.",
};

export default function ComplianceCenter() {
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
                <Scale className="w-3.5 h-3.5" />
                Trust & Security
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">
                Compliance Center
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                Escrow Africa operates under strict compliance with financial regulations and industry best practices to guarantee a safe and legal environment for peer-to-peer commerce.
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

        {/* Compliance Center Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-2">EscrowAfrica Compliance Center</h2>
          <p className="text-sm text-gray-500 mb-4">Effective Date: July 7, 2026</p>

          <h4 className="mt-4 text-lg font-bold text-[#062B22]">Building Trust Through Compliance</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            EscrowAfrica is committed to operating responsibly, ethically, and in compliance with applicable laws and regulatory requirements in every jurisdiction where we provide our services. Our compliance program is designed to protect our customers, partners, and the integrity of our platform while supporting safer digital commerce across Africa.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Compliance Principles</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Our compliance framework is built on five key principles:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Protect customer funds.</li>
            <li>Prevent financial crime.</li>
            <li>Safeguard customer data.</li>
            <li>Promote transparency.</li>
            <li>Continuously improve our controls.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Know Your Customer (KYC)</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">To help create a trusted marketplace, EscrowAfrica verifies the identity of users where appropriate. Depending on the nature of the account or transaction, verification may include:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Government-issued identification.</li>
            <li>Selfie or facial verification.</li>
            <li>Email verification.</li>
            <li>Phone verification.</li>
            <li>Address verification.</li>
            <li>Business registration documents.</li>
            <li>Beneficial ownership information.</li>
            <li>Additional due diligence for higher-risk transactions.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Anti-Money Laundering (AML)</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica maintains risk-based controls designed to detect and deter money laundering.</p>
          <p className="mt-2 text-gray-600 leading-relaxed">Our AML program includes:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Customer due diligence.</li>
            <li>Enhanced due diligence for higher-risk users.</li>
            <li>Transaction monitoring.</li>
            <li>Record keeping.</li>
            <li>Risk assessments.</li>
            <li>Internal compliance procedures.</li>
            <li>Staff awareness and training.</li>
            <li>Reporting of suspicious activity where required by law.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Counter-Terrorist Financing (CFT)</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We prohibit the use of our platform for financing terrorism or supporting sanctioned individuals, entities, or activities. Where required, we may:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Screen users against applicable sanctions lists.</li>
            <li>Monitor transactions for unusual patterns.</li>
            <li>Block or suspend transactions.</li>
            <li>Report suspicious activity to competent authorities.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Fraud Prevention</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Protecting users from fraud is central to our mission. We use a combination of automated systems and manual review to identify:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Account takeover attempts.</li>
            <li>Identity fraud.</li>
            <li>Payment fraud.</li>
            <li>Fake buyer or seller activity.</li>
            <li>Document fraud.</li>
            <li>Suspicious transaction patterns.</li>
          </ul>
          <p className="mt-2 text-gray-600 leading-relaxed">Where necessary, transactions may be delayed while additional checks are completed.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Data Protection</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We are committed to protecting personal information through:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Secure handling of customer data.</li>
            <li>Role-based access controls.</li>
            <li>Encryption of sensitive information in transit and, where appropriate, at rest.</li>
            <li>Secure authentication.</li>
            <li>Continuous monitoring.</li>
            <li>Responsible data retention practices.</li>
          </ul>
          <p className="mt-2 text-gray-600 leading-relaxed">Our handling of personal information is governed by our Privacy Policy.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Regulatory Cooperation</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Where legally required, EscrowAfrica may cooperate with regulators, law enforcement agencies, courts, and other competent authorities. This may include providing information in response to lawful requests or complying with applicable reporting obligations.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Prohibited Activities</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Our platform may not be used for:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Money laundering.</li>
            <li>Terrorist financing.</li>
            <li>Fraud.</li>
            <li>Identity theft.</li>
            <li>Sanctions evasion.</li>
            <li>Human trafficking.</li>
            <li>Illegal gambling.</li>
            <li>Counterfeit goods.</li>
            <li>Stolen property.</li>
            <li>Any activity prohibited by applicable law or our Terms of Service.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Continuous Improvement</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Compliance is an ongoing process. We regularly review and improve our policies, procedures, and controls to address evolving risks, regulatory developments, and industry best practices.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Commitment</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Compliance is more than a legal obligation—it is fundamental to earning and maintaining the trust of our customers. EscrowAfrica is committed to operating responsibly while helping build a safer digital economy across Africa.</p>
        </div>
      </div>
    </main>
  );
}
