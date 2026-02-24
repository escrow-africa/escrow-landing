import HeroImage from "../components/HeroImage";
import {
  
  ArrowRight,
  CheckCircle2,
 
} from "lucide-react";

import Link from "next/link";

const Hero = () => {
    return (
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
               
                <HeroImage />

               
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Hero;