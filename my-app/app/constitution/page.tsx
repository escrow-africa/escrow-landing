import React from "react";
import Link from "next/link";
import { Landmark, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Constitution - Escrow Africa",
  description: "Read the Corporate Constitution of Escrow Africa. This documents our organizational guidelines, shareholder terms, and governing rules.",
};

const outlineItems = [
  { title: "Corporate Principles & Framework", desc: "The legal foundation and governing laws under which Escrow Africa is constituted and operated." },
  { title: "Shareholder Rights & Voting", desc: "Framework detailing how shareholder decisions, corporate voting, and equity guidelines are structured." },
  { title: "Board Composition & Duties", desc: "The role, assembly, and code of responsibilities governing the Board of Directors." },
  { title: "Operating Rules & Amendments", desc: "Procedures for introducing changes, proposing modifications, and amending this constitution." },
  { title: "Risk Management & Board Oversight", desc: "Mandates for board committees overseeing audit, security, product risk, and compensation." },
  { title: "Conflict of Interest & Disclosures", desc: "Clear guidelines preventing conflicts of interest and ensuring ethical separation of private interest." }
];

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

        {/* Coming Soon Notice */}
        <div className="bg-[#062B22] text-white rounded-3xl p-8 md:p-10 shadow-md mb-8 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 bg-white/10 rounded-xl shrink-0 mt-1">
              <Clock className="w-6 h-6 text-[#F3B659]" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-[#F3B659]">Constitution Finalization in Progress</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We are currently finalizing the legal layout of our corporate <strong>Constitution</strong>. 
                This document serves as our constitutional foundation and bylaws. The complete rules will be posted here soon.
              </p>
            </div>
          </div>
        </div>

        {/* Document Outline Preview */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs">
          <h3 className="text-lg font-bold text-[#062B22] mb-6">What this constitution will cover:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outlineItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-[#F3B659] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#062B22]">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
