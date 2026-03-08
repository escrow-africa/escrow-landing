// import { useEffect, useState } from "react";
// import {
  
//   ArrowRight,
//   CheckCircle2,
 
// } from "lucide-react";

// import Link from "next/link";
// import Image from "next/image";

// const Hero = () => {
//   export default function HeroTyping() {
//   const text = "Secure Your Transactions with ";
//   const highlight = "Confidence";

//   const [displayedText, setDisplayedText] = useState("");
//   const [displayedHighlight, setDisplayedHighlight] = useState("");
//   const [phase, setPhase] = useState("text");

//   useEffect(() => {
//     let index = 0;

//     const typeText = () => {
//       const interval = setInterval(() => {
//         setDisplayedText(text.slice(0, index + 1));
//         index++;

//         if (index === text.length) {
//           clearInterval(interval);
//           setPhase("highlight");
//         }
//       }, 40);
//     };

//     typeText();
//   }, []);

//   useEffect(() => {
//     if (phase !== "highlight") return;

//     let index = 0;

//     const interval = setInterval(() => {
//       setDisplayedHighlight(highlight.slice(0, index + 1));
//       index++;

//       if (index === highlight.length) {
//         clearInterval(interval);
//       }
//     }, 50);

//     return () => clearInterval(interval);
//   }, [phase]);
//     return (
//          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
//               <div className="text-center lg:text-left">
//                 {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
//                   Secure Your Transactions with{" "}
//                   <span className="text-[#F3B659]">Confidence</span>
//                 </h1> */} <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
//       {displayedText}
//       <span className="text-[#F3B659]">{displayedHighlight}</span>

//       <span className="animate-pulse ml-1">|</span>
//     </h1>
//                 <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
//                   The safest way to buy and sell online. We hold funds until
//                   both parties are satisfied, ensuring a risk-free experience
//                   for everyone.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                   <Link
//                     href="/signup"
//                     className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#062B22] bg-[#F3B659] hover:bg-[#062B22] hover:text-[#F3B659] rounded-full transition-all shadow-lg shadow-blue-600/20"
//                   >
//                     Start a Transaction
//                     <ArrowRight className="ml-2 w-5 h-5" />
//                   </Link>
//                   <Link
//                     href="#how-it-works"
//                     className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#F3B659] bg-[#0B493A] hover:bg-[#F3B659] hover:text-[#0B493A] rounded-full transition-all"
//                   >
//                     How it Works
//                   </Link>
//                 </div>
//                 <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
//                   <span className="flex items-center gap-1">
//                     <CheckCircle2 className="w-4 h-4 text-green-500" /> No
//                     hidden fees
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7
//                     Support
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <CheckCircle2 className="w-4 h-4 text-green-500" />{" "}
//                     Bank-grade security
//                   </span>
//                 </div>
//               </div>
//               <div className="relative lg:h-auto">
               
//                <Image src="/landpage-mockup.png" alt="Hero Image" width={500} height={500} className="w-full h-auto object-contain shadow-lg rounded-lg" />

               
                
//               </div>
//             </div>
//           </div>
//         </section>
//     )
// }
// export default Hero;
"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const text = "Secure Your Transactions with ";
  const highlight = "Confidence";

  const fullText = `${text}${highlight}`;
  const [typedIndex, setTypedIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setTypedIndex((prev) => {
        const next = prev + 1;
        if (next >= fullText.length) {
          clearInterval(interval);
          return fullText.length;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [fullText]);

  const displayedText = fullText.slice(0, Math.min(typedIndex, text.length));
  const displayedHighlight =
    typedIndex > text.length ? fullText.slice(text.length, typedIndex) : "";
  const showCursor = typedIndex < fullText.length;

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* TYPING HERO TEXT */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              {displayedText}
              <span className="text-[#F3B659]">{displayedHighlight}</span>
              {showCursor && <span className="animate-pulse ml-1">|</span>}
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
                <CheckCircle2 className="w-4 h-4 text-green-500" /> No hidden fees
              </span>

              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support
              </span>

              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Bank-grade security
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:h-auto">
            <Image
              src="/landpage-mockup.png"
              alt="Hero Image"
              width={500}
              height={500}
              priority
              className="w-full h-auto object-contain shadow-lg rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;