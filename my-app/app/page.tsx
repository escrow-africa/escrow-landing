"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import HeroImage from "../components/HeroImage";
import {
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import WaitlistModal from "../components/WaitlistModal";
export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                  Secure Your Transactions with{" "}
                  <span className="text-[#F3B659]">Confidence</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  The safest way to buy and sell online. We hold funds until
                  both parties are satisfied, ensuring a risk-free experience
                  for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#062B22] bg-[#F3B659] hover:bg-[#062B22] hover:text-[#F3B659] rounded-full transition-all shadow-lg shadow-blue-600/20"
                  >
                    Start a Transaction
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#F3B659] bg-[#0B493A] hover:bg-[#F3B659] hover:text-[#0B493A] rounded-full transition-all"
                  >
                    How it Works
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> No
                    hidden fees
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7
                    Support
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
                    Bank-grade security
                  </span>
                </div>
              </div>
              <div className="relative lg:h-auto">
                {/* Main Hero Visual */}
                <HeroImage />

                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why choose our Escrow service?
              </h2>
              <p className="text-lg text-gray-600">
                We provide a secure environment for your transactions, ensuring
                peace of mind for both buyers and sellers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Maximum Security
                </h3>
                <p className="text-gray-600">
                  Funds are held securely in a trust account until all terms of
                  the transaction are met and verified.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast Processing
                </h3>
                <p className="text-gray-600">
                  Automated workflows ensure quick release of funds once
                  conditions are met, keeping your business moving.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Support for multiple currencies and payment methods, allowing
                  you to do business worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/escrow.png"
                  alt="How it works illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto shadow-lg rounded-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How Escrow Works
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Buyer and Seller Agree to Terms
                      </h3>
                      <p className="text-gray-600">
                        Both parties agree to the terms of the transaction,
                        including price, merchandise description, and shipping.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Buyer Pays Escrow
                      </h3>
                      <p className="text-gray-600">
                        The buyer submits payment to our secure Escrow account.
                        We verify the payment.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Seller Ships Merchandise
                      </h3>
                      <p className="text-gray-600">
                        Upon payment verification, the seller is authorized to
                        ship merchandise and submit tracking information.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Buyer Accepts Merchandise
                      </h3>
                      <p className="text-gray-600">
                        The buyer has a set number of days to inspect the
                        merchandise and accept or reject it.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                      <img src="/escrow logo 32.png" alt="logo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Escrow Releases Funds
                      </h3>
                      <p className="text-gray-600">
                        We release funds to the seller from the Escrow account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-20 bg-[#0B493A]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start a secure transaction?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of others who use our platform for safe, reliable,
              and fast escrow services.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#062B22] bg-[#F3B659] hover:bg-[#062B22] hover:text-[#F3B659] rounded-full "
            >
              Get Started Now
            </Link>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className=" ml-4 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#F3B659] border-2 border-[#F3B659] hover:bg-[#F3B659] hover:text-[#062B22] rounded-full mt-4 md:mt-0"
            >
              Join the Waitlist
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
