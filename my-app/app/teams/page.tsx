"use client";

import React from "react";
import { motion } from "framer-motion";

const founder = { name: "Idundun Louis", role: "Founder & CEO", image: "/Louise.jpeg" };

const managementTeam = [
  { name: "Idundun Louis", role: "Founder/CEO", image: "/Louise.jpeg" },
  { name: "Olude Fiyinfoluwa", role: "Head of Engineering", image: "/fiyin.jpeg" },
  { name: "Lawreta", role: "Heading of Marketing", image: "/lawreta.jpeg" },
  { name: " Madeline", role: "Head of product", image: "" },
  { name: "Esther", role: "Head of Media and Publicity", image: "/P1.jpeg" },
  { name: "Amara", role: "Head of Legal, Risk and Compliance", image: "/P2.jpeg" },
];

const engineeringTeam = [
  { name: "Idundun Louis", role: "Founder/CTO", image: "/Louise.jpeg" },
  { name: "Olude Fiyinfoluwa", role: "Head of Engineering", image: "/fiyin.jpeg" },
  { name: "Okoduwa Joy", role: "Lead Frontend Engineer", image: "/joy.jpeg" },
];

const mediaTeam = [
  { name: "Esther", role: "Head of Media and Publicity", image: "/P1.jpeg" },
  { name: "Seun", role: "Lead Content Creator and Community Manager", image: "" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function TeamMemberCard({ member, featured = false }: { member: { name: string; role: string; image: string; linkedin?: string }, featured?: boolean }) {
  return (
    <motion.div variants={fadeInUp} className={`relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-500 flex flex-col ${featured ? 'md:flex-row' : ''}`}>
      <div className={`relative bg-gray-100 flex items-center justify-center overflow-hidden ${featured ? 'md:w-2/5 aspect-square md:aspect-auto' : 'aspect-square'}`}>
        {member.image && (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        )}
      </div>
      <div className={`p-8 md:p-10 flex flex-col justify-center flex-1 ${featured ? 'bg-[#0B493A] text-white' : ''}`}>
        <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
          <a href={member.linkedin || "#"} target={member.linkedin ? "_blank" : undefined} rel={member.linkedin ? "noopener noreferrer" : undefined} className="hover:underline decoration-2 underline-offset-4 transition-all">
            {member.name}
          </a>
        </h3>
        <p className={`font-medium text-lg mb-6 ${featured ? 'text-[#F3B659]' : 'text-[#0B493A]'}`}>{member.role}</p>

        {featured && (
          <p className="text-white/80 mb-8 leading-relaxed max-w-lg">
            Brief bio goes here. Add a short description about the founder's vision, background, and what drives them to build this amazing company.
          </p>
        )}


      </div>
    </motion.div>
  );
}

export default function TeamsPage() {
  const [btnText, setBtnText] = React.useState("View Open Positions");

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#062B22]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#F3B659] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#0B493A] rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#F3B659]/20 text-[#F3B659] font-medium text-sm tracking-wide uppercase mb-6 border border-[#F3B659]/30">
              The People Behind The Vision
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Meet Our <span className="text-[#F3B659] inline-block">Brilliant</span> Team
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We are a group of passionate individuals dedicated to revolutionizing the way you do business. Get to know the minds powering our innovation.
            </p>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FAFAFA]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 space-y-32">

        {/* Founder Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062B22] mb-4">The Visionary</h2>
            <div className="w-24 h-1 bg-[#F3B659] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <TeamMemberCard member={founder} featured={true} />
          </motion.div>
        </section>

        {/* Management Team Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062B22] mb-4">Management Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Steering the ship and ensuring our strategic goals are met with precision and excellence.</p>
            <div className="w-24 h-1 bg-[#F3B659] mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {managementTeam.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Engineering Team Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062B22] mb-4">Engineering Hub</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The brilliant minds building robust, scalable, and secure solutions behind the scenes.</p>
            <div className="w-24 h-1 bg-[#F3B659] mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {engineeringTeam.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Media Team Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062B22] mb-4">Media & Creative</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Crafting compelling narratives and visual experiences that connect with our audience.</p>
            <div className="w-24 h-1 bg-[#F3B659] mx-auto rounded-full mt-6"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {mediaTeam.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </motion.div>
        </section>

      </div>

      {/* Join CTA */}
      <section className="bg-[#062B22] py-24 px-6 relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Want to join our amazing team?</h2>
          <p className="text-xl text-[#F3B659] mb-10">We are always looking for talented individuals to help us build the future.</p>
          <button 
            className="btn-primary min-w-[200px]"
            onClick={() => setBtnText(prev => prev === "View Open Positions" ? "No available position at the moment" : "View Open Positions")}
          >
            {btnText}
          </button>
        </div>
      </section>

    </div>
  );
}
