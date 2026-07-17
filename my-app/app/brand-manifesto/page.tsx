import React from "react";
import Link from "next/link";
import { Award, Clock, ArrowLeft, Heart, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Manifesto - Escrow Africa",
  description: "Read the Escrow Africa Brand Manifesto. Discover our mission, our values, and how we are building trust for African commerce.",
};

const outlineItems = [
  { title: "Our Core Vision & Purpose", desc: "Why we exist: to eliminate transaction anxiety and build a frictionless digital economy for Africa." },
  { title: "The Pillars of Financial Trust", desc: "Our commitment to safety, neutrality, and operational excellence as a licensed neutral third party." },
  { title: "Building for African Commerce", desc: "Tailoring digital escrow to the unique local dynamics of peer-to-peer and business trade across Africa." },
  { title: "Innovation and User Centricity", desc: "Designing simple, accessible, and fast technology that fits into every transaction workflow." },
  { title: "Transparency & Ethical Conduct", desc: "Why absolute honesty, clear pricing, and fair terms form the bedrock of everything we do." },
  { title: "Empowering the Next Generation", desc: "How securing transactions helps small businesses, creators, and freelancers grow their livelihoods." }
];

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

        {/* Coming Soon Notice */}
        <div className="bg-[#062B22] text-white rounded-3xl p-8 md:p-10 shadow-md mb-8 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 bg-white/10 rounded-xl shrink-0 mt-1">
              <Clock className="w-6 h-6 text-[#F3B659]" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-[#F3B659]">Manifesto Finalization in Progress</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We are currently crafting our official <strong>Brand Manifesto</strong>. This document outlines the heart, soul, and future direction of Escrow Africa. The full publication will be available soon.
              </p>
            </div>
          </div>
        </div>

        {/* Document Outline Preview */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xs">
          <h3 className="text-lg font-bold text-[#062B22] mb-6">What this manifesto will cover:</h3>
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
