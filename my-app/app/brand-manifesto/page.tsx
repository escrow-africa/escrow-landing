import React from "react";
import Link from "next/link";
import { Award, ArrowLeft, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Manifesto - Escrow Africa",
  description: "Read the Escrow Africa Brand Manifesto. Discover our mission, our values, and how we are building trust for African commerce.",
};

export default function BrandManifesto() {
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
                <Heart className="w-3.5 h-3.5" />
                Our Beliefs
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">
                Brand Manifesto
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                A declaration of our core beliefs and principles. We believe that trust shouldn't be a barrier to opportunity, and that every transaction should be secure and reliable.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Last updated: July 2026
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <Award className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* Brand Manifesto Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-4">EscrowAfrica Brand Manifesto</h2>
          <h3 className="text-lg font-semibold text-[#062B22]">We Believe Trust Should Never Be a Barrier to Opportunity</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Across Africa, millions of transactions begin with uncertainty.
            A small business hesitates to pay a supplier it has never met.
            A freelancer worries about completing work without guaranteed payment.
            An online shopper fears sending money to a stranger.
            A merchant loses customers because buyers simply don't trust online transactions.
            These aren't just payment problems. They are trust problems. EscrowAfrica was founded to solve them.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Why We Exist</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            We believe commerce grows where trust exists.
            When people trust one another, they buy more confidently, sell more widely, build stronger businesses, and create greater economic opportunity.
            Our purpose is to remove trust as a barrier to doing business.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Mission</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            To provide trusted transaction infrastructure that enables individuals, businesses, and institutions across Africa to exchange value securely and confidently.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Vision</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            To become Africa's most trusted transaction infrastructure, powering secure commerce across every industry and every market on the continent.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">What We Build</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            EscrowAfrica is more than an escrow platform. We build systems that help people trust one another before money changes hands. Our platform enables secure transactions for:
          </p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Online marketplaces</li>
            <li>Freelancers and agencies</li>
            <li>SMEs</li>
            <li>Manufacturers</li>
            <li>Importers and exporters</li>
            <li>Professional service providers</li>
            <li>Vehicle sales</li>
            <li>Property deposits</li>
            <li>Construction milestones</li>
            <li>Procurement</li>
            <li>Cross-border trade</li>
            <li>Digital commerce</li>
          </ul>
          <p className="mt-3 text-gray-600">Every product we build must strengthen trust between parties.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Principles</h4>

          <h5 className="mt-4 font-semibold text-[#062B22]">Trust First</h5>
          <p className="text-gray-600 mt-1">Every decision begins with one question: Does this increase trust? If the answer is no, we rethink it.</p>

          <h5 className="mt-4 font-semibold text-[#062B22]">Neutrality</h5>
          <p className="text-gray-600 mt-1">We do not take sides. We provide an independent platform that protects both buyers and sellers through transparent processes and fair outcomes.</p>

          <h5 className="mt-4 font-semibold text-[#062B22]">Transparency</h5>
          <p className="text-gray-600 mt-1">Clear pricing. Clear policies. Clear communication. No hidden surprises. Trust depends on transparency.</p>

          <h5 className="mt-4 font-semibold text-[#062B22]">Security by Design</h5>
          <p className="text-gray-600 mt-1">Security is built into every layer of our platform—from authentication and identity verification to transaction monitoring and dispute resolution.</p>

          <h5 className="mt-4 font-semibold text-[#062B22]">Customer-Centric Innovation</h5>
          <p className="text-gray-600 mt-1">We listen to our users, understand their challenges, and design solutions that make secure commerce simpler and more accessible.</p>

          <h5 className="mt-4 font-semibold text-[#062B22]">Integrity</h5>
          <p className="text-gray-600 mt-1">We act honestly, responsibly, and ethically in every interaction. Trust is earned through consistent actions.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">The Future We're Building</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Today, EscrowAfrica helps secure transactions. Tomorrow, we will power trust across African commerce through:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Escrow APIs</li>
            <li>Marketplace integrations</li>
            <li>Business verification</li>
            <li>Digital identity</li>
            <li>Milestone payments</li>
            <li>Procurement workflows</li>
            <li>Cross-border trade support</li>
            <li>Intelligent fraud prevention</li>
            <li>Reputation and trust services</li>
          </ul>
          <p className="mt-3 text-gray-600">Our ambition is not merely to facilitate payments but to become the infrastructure that businesses rely on when trust matters most.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Promise</h4>
          <p className="mt-2 text-gray-600">Every feature we develop, every partnership we form, and every decision we make is guided by one commitment: To make doing business in Africa safer, fairer, and more trustworthy.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Tagline</h4>
          <p className="mt-2 text-gray-600">Trust Every Transaction.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our North Star</h4>
          <p className="mt-2 text-gray-600">Build the infrastructure that allows anyone in Africa to transact with confidence, regardless of who they are doing business with.
            When trust becomes easier, commerce becomes stronger. When commerce becomes stronger, communities prosper. That is the future EscrowAfrica exists to create.
          </p>
        </div>
      </div>
    </main>
  );
}
