"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import HowItWorks from "../components/How-it-works";
import CTA from "../components/CTA";



export default function Home() {
  

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />

      <main>
        
       
<Hero />
        <HowItWorks />
        
                 

        <FAQ />

        <CTA />
        
      </main>

      <Footer />
    </div>
  );
}
