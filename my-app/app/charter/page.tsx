import React from "react";
import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Charter - Escrow Africa",
  description: "Read the official Corporate Charter of Escrow Africa. Learn about our governance framework, mission statement, and operational values.",
};

export default function Charter() {
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
                <BookOpen className="w-3.5 h-3.5" />
                Corporate Governance
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">
                Corporate Charter
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                The governing document establishing the mission, objectives, operational structure, and leadership code of conduct for Escrow Africa.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Last updated: July 2026
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <BookOpen className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* Charter Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-4">The EscrowAfrica Charter</h2>
          <p className="text-sm text-gray-500 mb-4">Version 1.0</p>

          <h3 className="text-lg font-semibold text-[#062B22]">"Trust is our product."</h3>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Preamble</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            EscrowAfrica was founded on a simple observation:
            Every day across Africa, opportunities are lost because people do not trust one another enough to transact.
            A merchant declines an order.
            A buyer abandons a purchase.
            A freelancer rejects a project.
            A supplier demands full payment before production.
            An investor hesitates.
            A partnership never begins.
            The problem is rarely the ability to move money. The problem is confidence. We exist to change that.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Purpose</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Our purpose is to increase trust in African commerce. We build systems that help people and businesses exchange value with confidence. Every product we launch should make trustworthy commerce easier than untrustworthy commerce.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Mission</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            To provide secure, transparent, and reliable trust infrastructure that enables anyone doing business in Africa to transact with confidence.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Vision</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            We envision a continent where trust is no longer a barrier to opportunity. Where businesses of every size can reach new customers. Where entrepreneurs can trade across borders. Where buyers and sellers confidently engage with people they have never met. Where technology strengthens confidence instead of exploiting uncertainty.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Promise</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            When someone chooses EscrowAfrica, they are placing more than money in our hands. They are placing expectations. Hope. Opportunity. Sometimes their savings. Sometimes their livelihood. We will treat that responsibility with humility, care, and professionalism.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">What We Will Always Protect</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We will always protect:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>The integrity of every transaction.</li>
            <li>The security of customer funds.</li>
            <li>The privacy of customer information.</li>
            <li>The fairness of our dispute process.</li>
            <li>The independence of our decision-making.</li>
            <li>The reputation of our platform.</li>
          </ul>
          <p className="mt-3 text-gray-600">These commitments are non-negotiable.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">How We Make Decisions</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Before approving any product, feature, policy, partnership, or strategic initiative, we ask:</p>
          <ol className="list-decimal ml-5 mt-3 text-gray-600 space-y-1">
            <li>Does this increase trust?</li>
            <li>Does this improve security?</li>
            <li>Does this make commerce more accessible?</li>
            <li>Does this treat customers fairly?</li>
            <li>Can we clearly explain it to a first-time user?</li>
            <li>Would we be comfortable if our own family used this feature?</li>
          </ol>
          <p className="mt-3 text-gray-600">If the answer to any of these questions is "no," we revisit the decision.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Standards</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We strive to be:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Trusted before we are popular.</li>
            <li>Reliable before we are fast.</li>
            <li>Transparent before we are persuasive.</li>
            <li>Secure before we are convenient.</li>
            <li>Sustainable before we are large.</li>
          </ul>
          <p className="mt-3 text-gray-600">Growth is meaningful only if it is built on trust.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Customers</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We serve:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Students buying their first laptop.</li>
            <li>Freelancers completing international projects.</li>
            <li>Small businesses purchasing inventory.</li>
            <li>Farmers buying equipment.</li>
            <li>Manufacturers sourcing raw materials.</li>
            <li>Marketplaces connecting buyers and sellers.</li>
            <li>Enterprises managing complex transactions.</li>
          </ul>
          <p className="mt-3 text-gray-600">No customer is too small to deserve protection. No business is too large to deserve accountability.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Responsibility to Africa</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica exists because we believe Africa deserves world-class trust infrastructure. As we grow, we will seek to:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Reduce online fraud.</li>
            <li>Enable cross-border commerce.</li>
            <li>Support women-owned businesses.</li>
            <li>Empower entrepreneurs.</li>
            <li>Improve confidence in digital trade.</li>
            <li>Strengthen economic inclusion through trusted transactions.</li>
          </ul>
          <p className="mt-3 text-gray-600">We measure our success not only by revenue, but by the confidence we help create.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Responsibility to Our Team</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We will build a company where:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Integrity is rewarded.</li>
            <li>Learning is continuous.</li>
            <li>Diverse perspectives are valued.</li>
            <li>Decisions are made with evidence.</li>
            <li>Respect is expected.</li>
            <li>Accountability is embraced.</li>
          </ul>
          <p className="mt-3 text-gray-600">Every employee shares responsibility for protecting our customers and our reputation.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Innovation with Purpose</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We will adopt new technologies only when they create meaningful value for our customers. Artificial intelligence, automation, identity systems, APIs, and analytics are tools—not goals. Our goal remains constant: To make trusted commerce easier.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Looking Ahead</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">EscrowAfrica may evolve beyond escrow. We may build verification services, trust scoring, embedded APIs, procurement tools, cross-border solutions, or products we have not yet imagined. Whatever we build, we will remain guided by one principle: Trust is our product.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Commitment</h4>
          <p className="mt-2 text-gray-600">We commit to earning trust—not assuming it. We commit to listening before deciding. We commit to protecting before profiting. We commit to improving continuously. We commit to serving Africa with excellence.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Closing Declaration</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We believe trust is one of the most valuable forms of infrastructure any economy can possess. Roads move goods. Telecommunications move information. Financial systems move money. Trust moves commerce. EscrowAfrica exists to build that infrastructure—one transaction, one relationship, and one business at a time.</p>

          <p className="mt-4 text-gray-600 font-semibold">Trust Every Transaction.</p>
          <p className="mt-1 text-gray-600">EscrowAfrica<br/>The Trust Infrastructure for African Commerce.</p>
        </div>
      </div>
    </main>
  );
}
