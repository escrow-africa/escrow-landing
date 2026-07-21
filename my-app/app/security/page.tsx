import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";

export default function SecurityPage() {
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
                Security
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">EscrowAfrica Security Center</h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">Security is the foundation of trust. We protect accounts, safeguard sensitive information, and prevent fraud so you can transact with confidence.</p>
              <p className="text-xs text-gray-400 mt-4">Last updated: July 2026</p>
            </div>

            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <ShieldCheck className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* Content: convert existing cards into the policy-style stacked cards */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h3 className="text-lg font-semibold text-[#062B22]">Protect customer funds</h3>
          <p className="mt-2 text-gray-700">We hold funds in escrow and only release them once agreed conditions are satisfied or disputes are resolved per policy.</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h3 className="text-lg font-semibold text-[#062B22]">Protect customer data</h3>
          <p className="mt-2 text-gray-700">We encrypt sensitive data, apply role-based access controls, and restrict administrative privileges to required personnel.</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h3 className="text-lg font-semibold text-[#062B22]">Prevent fraud & respond fast</h3>
          <p className="mt-2 text-gray-700">We combine automated detection, manual review, and incident response to reduce fraud and limit impact.</p>
        </div>

        {/* Details */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Account Security</h4>
            <p className="text-gray-700 mb-3">You play an important role in keeping your account secure. We recommend:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Use strong, unique passwords and a password manager.</li>
              <li>Enable multi-factor authentication when available.</li>
              <li>Keep contact details up to date for account recovery.</li>
              <li>Never share login credentials or one-time verification codes.</li>
            </ul>
            <p className="text-sm text-gray-500 mt-3">We may temporarily restrict access if we detect unusual login activity.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Identity Verification (KYC)</h4>
            <p className="text-gray-700 mb-3">Verification helps build trust and meet regulatory obligations. Depending on risk, verification may include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Government-issued ID and selfie/facial checks</li>
              <li>Phone, email, and address verification</li>
              <li>Business registration and beneficial ownership documents</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Fraud Prevention</h4>
            <p className="text-gray-700 mb-3">We use automated systems and manual reviews to detect and prevent fraudulent activity:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Transaction monitoring and velocity checks</li>
              <li>Device, session, and behavioral analysis</li>
              <li>Sanctions and watchlist screening where required</li>
            </ul>
            <p className="text-sm text-gray-500 mt-3">High-risk transactions may be delayed or suspended for additional review.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Protection of Customer Data</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Encryption in transit and, where appropriate, at rest</li>
              <li>Role-based access controls and least-privilege administration</li>
              <li>Secure authentication mechanisms and continuous logging</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Infrastructure Security</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Secure cloud infrastructure and network protections</li>
              <li>Continuous monitoring and controlled production access</li>
              <li>Backup and recovery procedures to support business continuity</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Monitoring & Incident Response</h4>
            <p className="text-gray-700 mb-3">We monitor systems continuously and investigate incidents promptly. If an incident occurs we:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Contain and mitigate impact</li>
              <li>Notify affected users where required or appropriate</li>
              <li>Cooperate with authorities where necessary</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm mb-6">
          <h4 className="text-md font-semibold mb-2">Responsible Disclosure</h4>
          <p className="text-gray-700 mb-3">We welcome responsible reports of security vulnerabilities through our official support channels. Please avoid accessing or modifying customer data, do not disrupt service availability, and allow reasonable time for investigation before public disclosure.</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm mb-6">
          <h4 className="text-md font-semibold mb-2">Your Role</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Keep passwords confidential and use a password manager</li>
            <li>Verify counterparties and never send money outside an active escrow</li>
            <li>Review transaction details before approving payments</li>
            <li>Report suspicious emails, messages, or calls claiming to be EscrowAfrica</li>
          </ul>
        </div>

        <footer className="mt-10 text-sm text-gray-500">If you have security questions, contact us via the official support channels on the website.</footer>
      </div>
    </main>
  );
}
