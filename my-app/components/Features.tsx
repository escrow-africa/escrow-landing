// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Zap,
//   Globe,
  
//   Scale,
//   Smartphone,
//  MoveRight,
//   Briefcase,
//   MoveLeft,
// } from "lucide-react";


// const Features = () => {
//   const [isMobile, setIsMobile] = useState(false);

// useEffect(() => {
//   const checkScreen = () => setIsMobile(window.innerWidth < 768);
//   checkScreen();
//   window.addEventListener("resize", checkScreen);

//   return () => window.removeEventListener("resize", checkScreen);
// }, []);

//     return(
// <section id="features" className="py-20 lg:py-15">
//           <div className="mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center max-w-3xl mx-auto mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Why choose our Escrow service?
//               </h2>
//               <p className="text-lg text-gray-600">
//                 We provide a secure environment for your transactions, ensuring
//                 peace of mind for both buyers and sellers.
//               </p>
//             </div>

    
//             <div className="relative overflow-hidden">
//   <motion.div
//     className="flex gap-8 overflow-x-auto lg:overflow-hidden scroll-smooth snap-x snap-mandatory"
//     animate={!isMobile ?{ x: ["0%", "-50%"] }:{}}
//     transition={!isMobile ?{ repeat: Infinity, duration: 20, ease: "linear" }:{}}
//   >
//     <div className="card card snap-start min-w-[280px]">
//       <div className="card-icon bg-blue-100">
//         <ShieldCheck className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">Bank-Grade Security</h3>
//       <p className="text-gray-600">
//         Advanced encryption protects every transaction from start to finish.
//       </p>
//     </div>

//     <div className="card card snap-start min-w-[280px]">
//       <div className="card-icon bg-green-100 text-green-600">
//         <Zap className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
//       <p className="text-gray-600">
//        Automated workflows ensure quick release of funds once conditions are met, keeping your business moving.
//       </p>
//     </div>

//     <div className="card card snap-start min-w-[280px]">
//       <div className="card-icon bg-blue-100">
//         <Scale className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Dispute Resolution</h3>
//       <p className="text-gray-600">
//         Independent mediation ensures both parties are protected.
//       </p>
//     </div>
//      <div className="card card snap-start min-w-[280px]">
//       <div className="card-icon bg-blue-100">
//         <Globe className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Africa</h3>
//       <p className="text-gray-600">
// Designed around African markets, currencies, and trade realities.
//       </p>
//     </div>
//      <div className="card card snap-start min-w-[280px]">
//       <div className="card-icon bg-blue-100">
//         <Briefcase className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect for SMEs</h3>
//       <p className="text-gray-600">
//          Ideal for online sellers, freelancers, and growing businesses.
//       </p>
//     </div>
//      <div className="card card snap-start min-w-[280px]">
//       <div className="card-icon bg-blue-100">
//         <Smartphone className="w-6 h-6" />
//       </div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First Platform</h3>
//       <p className="text-gray-600">
//        Simple, intuitive experience built for seamless mobile transactions.
//       </p>
//     </div>

    
//   </motion.div>
// </div>
// <div className="flex gap-2  my-2 lg:hidden">
//           <MoveLeft color="#F3B659"  />
//  <h1 className=" font-bold text-[#F3B659]">Swipe</h1>
//    <MoveRight color="#F3B659"  />
// </div>
            
//           </div>
          
//         </section>

        
//     )
// }
// export default Features;


// import {
//   ShieldCheck,
//   Zap,
//   Globe,
//   Scale,
//   Smartphone,
//   Briefcase,
// } from "lucide-react";

// const Features = () => {
//   return (
//     <section id="features" className="py-20 lg:py-15">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Why choose our Escrow service?
//           </h2>
//           <p className="text-lg text-gray-600">
//             We provide a secure environment for your transactions, ensuring
//             peace of mind for both buyers and sellers.
//           </p>
//         </div>

//         {/* Feature Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

//           <div className="card">
//             <div className="card-icon bg-blue-100">
//               <ShieldCheck className="w-6 h-6" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Bank-Grade Security
//             </h3>

//             <p className="text-gray-600">
//               Advanced encryption protects every transaction from start to finish.
//             </p>
//           </div>

//           <div className="card">
//             <div className="card-icon bg-green-100 text-green-600">
//               <Zap className="w-6 h-6" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Fast Processing
//             </h3>

//             <p className="text-gray-600">
//               Automated workflows ensure quick release of funds once conditions
//               are met, keeping your business moving.
//             </p>
//           </div>

//           <div className="card">
//             <div className="card-icon bg-blue-100">
//               <Scale className="w-6 h-6" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Fair Dispute Resolution
//             </h3>

//             <p className="text-gray-600">
//               Independent mediation ensures both parties are protected.
//             </p>
//           </div>

//           <div className="card">
//             <div className="card-icon bg-blue-100">
//               <Globe className="w-6 h-6" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Built for Africa
//             </h3>

//             <p className="text-gray-600">
//               Designed around African markets, currencies, and trade realities.
//             </p>
//           </div>

//           <div className="card">
//             <div className="card-icon bg-blue-100">
//               <Briefcase className="w-6 h-6" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Perfect for SMEs
//             </h3>

//             <p className="text-gray-600">
//               Ideal for online sellers, freelancers, and growing businesses.
//             </p>
//           </div>

//           <div className="card">
//             <div className="card-icon bg-blue-100">
//               <Smartphone className="w-6 h-6" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               Mobile-First Platform
//             </h3>

//             <p className="text-gray-600">
//               Simple, intuitive experience built for seamless mobile transactions.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
import {
  ShieldCheck,
  Zap,
  Globe,
  Scale,
  Smartphone,
  Briefcase,
} from "lucide-react";

const Features = () => {

  const features = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      description:
        "Advanced encryption protects every transaction from start to finish.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description:
        "Automated workflows ensure quick release of funds once conditions are met, keeping your business moving.",
      iconBg: "bg-green-100",
    },
    {
      icon: Scale,
      title: "Fair Dispute Resolution",
      description:
        "Independent mediation ensures both parties are protected.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Globe,
      title: "Built for Africa",
      description:
        "Designed around African markets, currencies, and trade realities.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Briefcase,
      title: "Perfect for SMEs",
      description:
        "Ideal for online sellers, freelancers, and growing businesses.",
      iconBg: "bg-blue-100",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description:
        "Simple, intuitive experience built for seamless mobile transactions.",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-15">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose our Escrow service?
          </h2>
          <p className="text-lg text-gray-600">
            We provide a secure environment for your transactions, ensuring
            peace of mind for both buyers and sellers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="card "
              >
                <div
                  className={`card-icon ${feature.iconBg} group-hover:bg-white/20`}
                >
                  <Icon className="w-6 h-6 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;