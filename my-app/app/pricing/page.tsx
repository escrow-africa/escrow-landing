"use client";

import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-[#062B22]">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold sm:text-5xl">EscrowAfrica Pricing</h1>
          <h2 className="mt-4 text-2xl font-semibold text-[#0B493A]">Simple. Transparent. Affordable.</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">
            At EscrowAfrica, we believe secure transactions should be accessible to everyone. That's why our pricing
            is straightforward, with no hidden fees and no surprise charges.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Image src="/trust.jpg" alt="trust" width={800} height={500} className="h-64 w-full rounded-2xl object-cover shadow-sm" />
            <Image src="/affordable.jpg" alt="affordable" width={800} height={500} className="h-64 w-full rounded-2xl object-cover shadow-sm" />
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-[#F7FAF8] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Individual Transactions</h3>
            <p className="mt-4 text-gray-700">
              For personal buyers and sellers, every completed escrow transaction is charged at:
            </p>
            <p className="mt-3 text-lg font-semibold">1.5% of the transaction value</p>
            <p className="mt-2 text-gray-700">Maximum Fee: ₦5,000 per transaction</p>
            <p className="mt-4 text-gray-700">
              This means you'll never pay more than ₦5,000 in EscrowAfrica service fees on a single transaction,
              regardless of the transaction amount.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#062B22] text-white">
                  <tr>
                    <th className="px-4 py-3">Transaction Value</th>
                    <th className="px-4 py-3">Escrow Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦10,000</td><td className="px-4 py-3">₦150</td></tr>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦50,000</td><td className="px-4 py-3">₦750</td></tr>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦100,000</td><td className="px-4 py-3">₦1,500</td></tr>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦200,000</td><td className="px-4 py-3">₦3,000</td></tr>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦333,333</td><td className="px-4 py-3">₦5,000</td></tr>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦500,000</td><td className="px-4 py-3">₦5,000</td></tr>
                  <tr className="border-t border-gray-200"><td className="px-4 py-3">₦1,000,000</td><td className="px-4 py-3">₦5,000</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold">What's Included</h4>
              <p className="mt-4 text-gray-700">Every escrow transaction includes:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Secure payment holding.</li>
                <li>Buyer and seller protection.</li>
                <li>Identity verification checks where required.</li>
                <li>Fraud monitoring.</li>
                <li>Transaction tracking.</li>
                <li>Dispute support.</li>
                <li>Secure release of funds after agreed conditions are met.</li>
              </ul>
              <p className="mt-4 text-gray-700">There are no monthly fees for individual users.</p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Business Plans</h3>
            <p className="mt-4 text-gray-700">
              Businesses that transact regularly can subscribe to unlock additional features designed to streamline
              operations and build customer trust.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h4 className="text-xl font-semibold">Starter</h4>
                <p className="mt-3 text-lg font-semibold">₦10,000/month</p>
                <p className="mt-3 text-gray-700">Ideal for small businesses and online vendors.</p>
                <p className="mt-4 font-semibold">Includes:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
                  <li>Business dashboard.</li>
                  <li>Team account access.</li>
                  <li>Transaction history and reporting.</li>
                  <li>Email support.</li>
                  <li>Business verification badge.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h4 className="text-xl font-semibold">Growth</h4>
                <p className="mt-3 text-lg font-semibold">₦25,000/month</p>
                <p className="mt-3 text-gray-700">Designed for growing businesses with higher transaction volumes.</p>
                <p className="mt-4 font-semibold">Everything in Starter, plus:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
                  <li>Priority customer support.</li>
                  <li>Advanced reporting and analytics.</li>
                  <li>Multiple team members.</li>
                  <li>Higher transaction limits.</li>
                  <li>Early access to new features.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <h4 className="text-xl font-semibold">Enterprise</h4>
                <p className="mt-3 text-lg font-semibold">Custom Pricing</p>
                <p className="mt-3 text-gray-700">For marketplaces, fintechs, platforms, and large organisations.</p>
                <p className="mt-4 font-semibold">Includes:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
                  <li>Dedicated account manager.</li>
                  <li>Custom onboarding.</li>
                  <li>API access and integrations.</li>
                  <li>Custom workflows.</li>
                  <li>Service Level Agreement (SLA).</li>
                  <li>Premium support.</li>
                  <li>Tailored reporting.</li>
                </ul>
                <p className="mt-4 text-gray-700">Contact our sales team to discuss your requirements.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-[#F7FAF8] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Additional Charges</h3>
            <p className="mt-4 text-gray-700">Where applicable, additional charges may apply for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Currency conversion.</li>
              <li>Bank transfer fees charged by financial institutions.</li>
              <li>Cross-border transactions.</li>
              <li>Third-party payment processing fees.</li>
              <li>Government taxes or statutory charges required by law.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Any applicable charges will be disclosed before you complete your transaction whenever possible.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Refunds</h3>
            <p className="mt-4 text-gray-700">
              Escrow service fees are generally non-refundable once the escrow service has been provided.
            </p>
            <p className="mt-4 text-gray-700">However, fees may be refunded where:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>A duplicate payment was made.</li>
              <li>EscrowAfrica cancels a transaction before providing the escrow service.</li>
              <li>A refund is required by applicable law.</li>
            </ul>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-[#F7FAF8] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Why Choose EscrowAfrica?</h3>
            <p className="mt-4 text-gray-700">
              When you pay an EscrowAfrica fee, you're paying for more than payment processing. You're investing
              in:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Secure escrow protection.</li>
              <li>Fraud prevention.</li>
              <li>Identity verification.</li>
              <li>Safe release of funds.</li>
              <li>Dispute support.</li>
              <li>Trusted infrastructure built for African commerce.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Our goal is to make every transaction safer, whether you're buying a smartphone, hiring a freelancer,
              purchasing inventory, or running a growing business.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
            <div className="mt-6 space-y-6">
              <div>
                <p className="font-semibold">Who pays the escrow fee?</p>
                <p className="mt-2 text-gray-700">The buyer, seller, or both parties can decide how to split the fee before the transaction is funded.</p>
              </div>
              <div>
                <p className="font-semibold">Are there hidden fees?</p>
                <p className="mt-2 text-gray-700">No. We believe in transparent pricing.</p>
              </div>
              <div>
                <p className="font-semibold">Is there a limit to the transaction amount?</p>
                <p className="mt-2 text-gray-700">Transaction limits may vary depending on your account verification level and applicable regulations.</p>
              </div>
              <div>
                <p className="font-semibold">Can businesses receive discounted pricing?</p>
                <p className="mt-2 text-gray-700">
                  Yes. Enterprise customers and strategic partners may qualify for customised pricing based on
                  transaction volume and business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-[#0B493A] bg-[#0B493A] p-8 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">Our Promise</h3>
            <p className="mt-4 text-lg">Simple pricing. Transparent fees. Secure transactions.</p>
            <p className="mt-2 text-white/90">That's the EscrowAfrica commitment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
