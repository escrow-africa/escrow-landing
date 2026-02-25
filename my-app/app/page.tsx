"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import HowItWorks from "../components/How-it-works";
import CTA from "../components/CTA";
import Features from "@/components/Features";
import WorkFlow from "@/components/Workflow";



export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
      <Hero />
      <Features/>
      <HowItWorks />
      <FAQ />
      <WorkFlow />
      <CTA />

      </main>
      <Footer />
    </div>
  );
}
