import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="bg-white  p-8 md:p-12 mb-10">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="md:flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22]">EscrowAfrica Security Center</h1>
          
            <p className="mt-4 text-gray-700 max-w-2xl">Security is the foundation of trust. We protect accounts, safeguard sensitive information, and prevent fraud so you can transact with confidence.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-[#F3B659] text-[#062B22] rounded-full font-medium hover:opacity-95">Contact Support</Link>
              <a href="#principles" className="inline-flex items-center px-5 py-2.5 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50">Learn more</a>
            </div>
          </div>

          <div className="md:w-44 md:shrink-0 mt-6 md:mt-0">
            <div className="bg-[#062B22] rounded-xl p-4 shadow-lg flex items-center justify-center">
              <Image src="/padlock.png" alt="Padlock" width={120} height={120} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section id="principles" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <article className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#062B22] mb-2">Protect customer funds</h3>
          <p className="text-sm text-gray-600">We hold funds in escrow and only release them once agreed conditions are satisfied or disputes are resolved per policy.</p>
        </article>

        <article className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#062B22] mb-2">Protect customer data</h3>
          <p className="text-sm text-gray-600">We encrypt sensitive data, apply role-based access controls, and restrict administrative privileges to required personnel.</p>
        </article>

        <article className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#062B22] mb-2">Prevent fraud & respond fast</h3>
          <p className="text-sm text-gray-600">We combine automated detection, manual review, and incident response to reduce fraud and limit impact.</p>
        </article>
      </section>

      {/* Details - cards layout */}
      <section className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
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

          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Identity Verification (KYC)</h4>
            <p className="text-gray-700 mb-3">Verification helps build trust and meet regulatory obligations. Depending on risk, verification may include:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Government-issued ID and selfie/facial checks</li>
              <li>Phone, email, and address verification</li>
              <li>Business registration and beneficial ownership documents</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Fraud Prevention</h4>
            <p className="text-gray-700 mb-3">We use automated systems and manual reviews to detect and prevent fraudulent activity:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Transaction monitoring and velocity checks</li>
              <li>Device, session, and behavioral analysis</li>
              <li>Sanctions and watchlist screening where required</li>
            </ul>
            <p className="text-sm text-gray-500 mt-3">High-risk transactions may be delayed or suspended for additional review.</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Protection of Customer Data</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Encryption in transit and, where appropriate, at rest</li>
              <li>Role-based access controls and least-privilege administration</li>
              <li>Secure authentication mechanisms and continuous logging</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Infrastructure Security</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Secure cloud infrastructure and network protections</li>
              <li>Continuous monitoring and controlled production access</li>
              <li>Backup and recovery procedures to support business continuity</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <h4 className="text-md font-semibold mb-2">Monitoring & Incident Response</h4>
            <p className="text-gray-700 mb-3">We monitor systems continuously and investigate incidents promptly. If an incident occurs we:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Contain and mitigate impact</li>
              <li>Notify affected users where required or appropriate</li>
              <li>Cooperate with authorities where necessary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
          <h4 className="text-md font-semibold mb-2">Responsible Disclosure</h4>
          <p className="text-gray-700 mb-3">We welcome responsible reports of security vulnerabilities through our official support channels. Please avoid accessing or modifying customer data, do not disrupt service availability, and allow reasonable time for investigation before public disclosure.</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm mt-6">
          <h4 className="text-md font-semibold mb-2">Your Role</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Keep passwords confidential and use a password manager</li>
            <li>Verify counterparties and never send money outside an active escrow</li>
            <li>Review transaction details before approving payments</li>
            <li>Report suspicious emails, messages, or calls claiming to be EscrowAfrica</li>
          </ul>
        </div>
      </section>

      <footer className="mt-10 text-sm text-gray-500">If you have security questions, contact us via the official support channels on the website.</footer>
    </main>
  );
}
