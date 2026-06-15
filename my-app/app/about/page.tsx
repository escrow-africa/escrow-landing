"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Truck,
  ThumbsUp,
  Wallet,
  TrendingUp,
  Globe2,
  Target,
  CheckCircle2,
  Users,
  MapPin,
  ArrowRight
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#F3B659] selection:text-[#062B22]">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-[#062B22]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-[#F3B659] rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-[#0B493A] rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#F3B659]/10 text-[#F3B659] font-semibold text-sm tracking-widest uppercase mb-8 border border-[#F3B659]/20 shadow-[0_0_15px_rgba(243,182,89,0.1)]">
              <ShieldCheck className="w-4 h-4" /> About EscrowAfrica NG
            </motion.span>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Building <span className="text-[#F3B659]">Trust</span> in Digital Commerce
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12">
              We are a fintech platform helping buyers and sellers across Nigeria carry out safe and secure online transactions using escrow protection.
            </motion.p>
          </motion.div>
        </div>

  
      </section>

      {/* 2. Intro / The Problem We're Solving */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-4xl md:text-5xl font-bold text-[#062B22] leading-tight mb-6">
                The Problem <br /><span className="text-gray-400 font-light">We're Solving.</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#F3B659] rounded-full"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-8 text-lg text-gray-600 leading-relaxed">
              <p className="text-2xl text-[#0B493A] font-medium leading-snug">
                We exist to solve one of the biggest problems in digital commerce today — lack of trust.
              </p>
              <p>
                Every day, people lose money to online scams, fake sellers, failed deliveries, and "send money first" transactions that go wrong. EscrowAfrica NG was built to eliminate that risk and give both buyers and sellers the confidence to transact without fear.
              </p>
              <p>
                Online commerce in Nigeria has grown rapidly, but trust has not grown with it. From Instagram vendors to WhatsApp businesses and marketplace deals, many transactions happen between people who don’t know each other. This creates a risky environment where:
              </p>
              <ul className="space-y-4 my-8 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <span>Buyers fear paying and not receiving their goods</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <span>Sellers fear delivering without getting paid</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <span>Both sides are exposed to fraud and loss</span>
                </li>
              </ul>
              <p className="font-semibold text-[#062B22]">
                For many, one bad experience is enough to stop trusting online transactions altogether.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Solution */}
      <section className="py-24 md:py-32 bg-[#062B22] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0B493A] rounded-full opacity-20 -translate-y-1/2 translate-x-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h2>
            <p className="text-xl text-[#F3B659] mb-8 font-medium">Secure escrow transactions.</p>
            <p className="text-gray-300 leading-relaxed text-lg">
              EscrowAfrica NG introduces a simple but powerful solution to protect every transaction. We act as a trusted middle layer, protecting both sides and ensuring fairness. Here's how it works:
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Lock, title: "Funds Secured", desc: "The buyer makes payment, but the funds are held securely by EscrowAfrica." },
              { icon: Truck, title: "Seller Delivers", desc: "The seller is notified of secured payment and delivers the product or service." },
              { icon: ThumbsUp, title: "Buyer Confirms", desc: "The buyer inspects the delivery and confirms satisfaction on our platform." },
              { icon: Wallet, title: "Seller Paid", desc: "The seller safely receives their payment instantly after confirmation." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-[120px] font-black text-white/[0.03] leading-none select-none group-hover:scale-110 transition-transform duration-500 origin-bottom-left">
                  {idx + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#0B493A] text-[#F3B659] flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="mt-16 bg-[#0B493A]/50 border border-[#F3B659]/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-2">The Guarantee</h4>
              <p className="text-gray-300">Buyers only pay when they receive what they expect. Sellers are guaranteed payment once they deliver.</p>
            </div>
            <div className="shrink-0 w-16 h-16 rounded-full bg-[#F3B659] flex items-center justify-center shadow-[0_0_30px_rgba(243,182,89,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-[#062B22]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. More Than Escrow / Built in Nigeria */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">

          {/* Growth Grid */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative h-[500px] rounded-[2rem] bg-gray-100 overflow-hidden group">
              <img src="/ecommerce.png" alt="Supporting Sellers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#062B22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062B22]/5 text-[#0B493A] font-semibold text-sm">
                <TrendingUp className="w-4 h-4" /> Supporting Sellers
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#062B22] leading-tight">
                More Than Escrow. <br />
                <span className="text-[#F3B659]">Helping Businesses Grow.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EscrowAfrica NG is not just about protection , it’s also about growth. We are building tools to help sellers scale successfully:
              </p>
              <ul className="space-y-6">
                {[
                  "Reach more customers across the continent",
                  "Promote their products using AI-powered social media ads",
                  "Close more sales with absolute confidence"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-[#0B493A] text-[#F3B659] flex items-center justify-center shrink-0 shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-600 font-medium pt-4">
                By combining secure payments and growth tools, we empower businesses to thrive safely.
              </p>
            </motion.div>
          </motion.div>

          <hr className="border-gray-200" />

          {/* Built in Nigeria Grid */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062B22]/5 text-[#0B493A] font-semibold text-sm">
                <MapPin className="w-4 h-4" /> Local Context
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#062B22] leading-tight">
                Built in Nigeria,<br />
                <span className="text-[#0B493A]">for Africa.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EscrowAfrica NG is proudly built in Lagos, Nigeria a fast-growing hub of digital commerce, innovation, and entrepreneurship. We deeply understand the realities of the African market.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Irregular trust systems" },
                  { label: "Informal online businesses" },
                  { label: "High exposure to fraud" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <p className="font-semibold text-gray-800 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600 pt-4">
                Our platform is designed specifically to solve these challenges in a way that works for everyday people and businesses across the continent.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative h-[600px] rounded-[2rem] bg-[#062B22] overflow-hidden group flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
              <Globe2 className="w-64 h-64 text-[#0B493A] opacity-50 group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <p className="text-white font-medium text-lg text-center">Transforming informal commerce into trusted transactions.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission */}
            <motion.div variants={fadeInUp} className="bg-[#FAFAFA] border border-gray-200 p-12 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-20 h-20 bg-[#062B22] rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:bg-[#F3B659] transition-colors duration-500">
                <Target className="w-10 h-10 text-[#F3B659] group-hover:text-[#062B22] transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-bold text-[#062B22] mb-6">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                To make online transactions safe, simple, and trustworthy for everyone in Africa.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeInUp} className="bg-[#062B22] border border-[#0B493A] p-12 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-20 h-20 bg-[#0B493A] rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:bg-[#F3B659] transition-colors duration-500">
                <Globe2 className="w-10 h-10 text-white group-hover:text-[#062B22] transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                To become the trusted infrastructure for digital commerce across Africa, where anyone can buy or sell online without fear of fraud.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. About the Founder */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-16 shadow-lg flex flex-col lg:flex-row gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="w-64 h-64 lg:w-96 lg:h-96 shrink-0 relative rounded-full overflow-hidden border-8 border-gray-50 shadow-xl mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[#062B22]/10 mix-blend-overlay z-10"></div>
              <img src="/Louise.jpeg" alt="Louis Idundun" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div variants={fadeInUp} className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#062B22]">About the Founder</h2>
              <div className="w-16 h-1 bg-[#F3B659] rounded-full mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                EscrowAfrica NG was founded by <strong className="text-[#0B493A]">Louis Idundun</strong>, a software engineer with a background in building scalable systems and solving real-world problems through technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With experience across software development, operations, and fintech-related projects, Louis saw firsthand the growing problem of trust in online transactions — especially within Nigeria’s fast-rising digital economy.
              </p>
              <p className="text-xl font-medium text-[#062B22] leading-relaxed italic border-l-4 border-[#F3B659] pl-6 mt-8">
                "Driven by the vision to create safer systems and empower individuals and businesses, EscrowAfrica NG provides a reliable way for people to transact online without fear of being scammed."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Why You Can Trust Us */}
      <section className="py-24 md:py-32 bg-[#062B22] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why You Can Trust Us</h2>
            <p className="text-xl text-[#F3B659] font-medium">As we grow, we remain committed to one core principle:</p>
            <p className="text-2xl mt-4 max-w-2xl mx-auto leading-snug">"No one should lose money because they chose to transact online."</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              "We use a structured escrow system that protects both buyers and sellers",
              "Transactions are transparent and tracked from start to finish",
              "Our focus is on fairness, security, and user confidence",
              "We are continuously improving the platform based on real user needs"
            ].map((reason, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex gap-6 items-start bg-white/5 border border-white/10 p-8 rounded-3xl">
                <div className="w-12 h-12 rounded-full bg-[#0B493A] text-[#F3B659] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-lg leading-relaxed text-gray-200 mt-2">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA / Community */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-gray-100">
              <Users className="w-8 h-8 text-[#0B493A]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#062B22] leading-tight max-w-3xl mx-auto">
              Growing With Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              EscrowAfrica NG is currently in its early stage, and we are actively building with our community of users, partners, and early adopters. We believe in building in public, listening to feedback, and evolving the platform to better serve the needs of African commerce.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="bg-[#062B22] rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-left mt-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F3B659] mix-blend-multiply filter blur-[150px] opacity-40 rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us on Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Whether you’re a buyer, seller, or business owner, EscrowAfrica NG is here to help you transact with confidence.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button className="bg-[#F3B659] text-[#062B22] font-bold text-lg py-4 px-10 rounded-full hover:bg-white transition-colors duration-300 shadow-lg flex items-center gap-3 group">
                Join our growing community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}