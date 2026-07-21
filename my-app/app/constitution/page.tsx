import React from "react";
import Link from "next/link";
import { Landmark, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Constitution - Escrow Africa",
  description: "Read the Corporate Constitution of Escrow Africa. This documents our organizational guidelines, shareholder terms, and governing rules.",
};

export default function Constitution() {
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
                <Landmark className="w-3.5 h-3.5" />
                Corporate Constitution
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#062B22] tracking-tight">
                Corporate Constitution
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                The constitutional bylaws of Escrow Africa outlining the legal rules, corporate operations, rights of shareholders, and board responsibilities.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Last updated: July 2026
              </p>
            </div>
            
            <div className="w-24 h-24 rounded-2xl bg-[#062B22] flex items-center justify-center shadow-lg shrink-0">
              <Landmark className="w-12 h-12 text-[#F3B659]" />
            </div>
          </div>
        </div>

        {/* Constitution Content */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs mb-8">
          <h2 className="text-2xl font-extrabold text-[#062B22] mb-4">EscrowAfrica Constitution</h2>
          <p className="text-sm text-gray-500 mb-4">Version 1.0<br/>Internal Document</p>

          <h4 className="mt-4 text-lg font-bold text-[#062B22]">Our Purpose</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            EscrowAfrica exists to increase trust in African commerce.
            Every product we build, every partnership we form, every decision we make must move Africa toward a future where people and businesses can transact with confidence.
            Revenue is important. Growth is important. But trust comes first.
            If increasing short-term revenue requires sacrificing long-term trust, we choose trust.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">What We Believe</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We believe:</p>
          <ul className="list-disc ml-5 mt-3 text-gray-600 space-y-1">
            <li>Commerce grows where trust exists.</li>
            <li>Small businesses flourish when customers feel protected.</li>
            <li>Entrepreneurs take more risks when payments are secure.</li>
            <li>Communities prosper when fraud is reduced.</li>
            <li>Technology should create confidence—not confusion.</li>
          </ul>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Responsibility</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We are entrusted with something more valuable than money. We are entrusted with confidence.</p>
          <p className="mt-2 text-gray-600 leading-relaxed">Every transaction on our platform represents someone taking a risk.
            A student buying their first laptop.
            A tailor ordering inventory.
            A manufacturer sourcing raw materials.
            A freelancer completing a project.
            A family purchasing a vehicle.
            Behind every payment is a person trusting us to protect what they have earned. We must never forget that.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Decision Framework</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Before launching any feature, every team should ask:</p>
          <ol className="list-decimal ml-5 mt-3 text-gray-600 space-y-1">
            <li>Does it increase trust? If not, don't build it.</li>
            <li>Does it reduce fraud? If not, improve it.</li>
            <li>Does it make transactions simpler? If not, redesign it.</li>
            <li>Is it transparent? If users cannot easily understand it, simplify it.</li>
            <li>Would we trust our own families to use it? If the answer is no, it is not ready.</li>
          </ol>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">How We Treat Customers</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Customers are not transactions. Customers are partners. We speak respectfully. We explain clearly. We admit mistakes. We fix problems quickly. We never hide behind complicated policies.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">How We Build Products</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Good software solves problems. Great software creates confidence. Every screen should answer: What is happening? Why is it happening? What happens next? Users should never feel uncertain about where their money is or what they need to do.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">How We Hire</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We hire for: Integrity. Curiosity. Ownership. Humility. Kindness. Technical excellence. A brilliant engineer who lacks integrity weakens the company. Character matters as much as competence.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Leadership Principles</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Leaders at EscrowAfrica: Protect customers. Support their teams. Accept accountability. Communicate openly. Make decisions using evidence. Think long term. Leave the company stronger than they found it.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Innovation</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We will not innovate simply because technology exists. We innovate when technology helps people trust one another more.
            Artificial intelligence. Identity systems. APIs. Automation. Machine learning. These are tools. Trust is the objective.
          </p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Competition</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">We respect competitors. We learn from them. But we do not define ourselves by them. Our benchmark is not whether we are better than another escrow company. Our benchmark is whether commerce across Africa becomes safer because EscrowAfrica exists.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Integrity</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">There will be opportunities to cut corners. We will not. There will be pressure to sacrifice security for growth. We will not. There will be moments when honesty is expensive. We will still choose honesty. Trust is earned slowly and lost quickly. We intend to earn it every day.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Our Legacy</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Years from now, people may not remember every feature we built. They may not remember every product release. But they should remember one thing: EscrowAfrica made it easier to trust. That is the legacy worth building.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Founder Commitment</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">As founders, we commit ourselves to building a company worthy of the trust our customers place in us. We will act responsibly. We will listen. We will learn. We will improve continuously. And we will never forget that behind every successful transaction is a person who chose to believe in us.</p>

          <h4 className="mt-6 text-lg font-bold text-[#062B22]">Closing</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">Our mission is not merely to process payments. Our mission is to strengthen trust. Because when trust grows, commerce grows. When commerce grows, opportunity grows. And when opportunity grows, Africa prospers.</p>

          <p className="mt-4 text-gray-600 font-semibold">EscrowAfrica</p>
          <p className="mt-1 text-gray-600">Building Trust. Enabling Commerce. Empowering Africa.</p>
        </div>
      </div>
    </main>
  );
}
