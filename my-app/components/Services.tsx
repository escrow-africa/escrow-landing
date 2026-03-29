"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Megaphone, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Escrow Services",
    description: "Secure your transactions with our state-of-the-art escrow system. We protect both buyers and sellers until the deal is successfully completed seamlessly.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/30",
  },
  {
    title: "Social Media Ads",
    description: "Amplify your reach and engage your target audience. Our data-driven ad strategies ensure maximum ROI across all major social platforms.",
    icon: Megaphone,
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/30",
  },
  {
    title: "Delivery Services",
    description: "Experience fast, reliable, and fully trackable deliveries. We ensure your products reach their destination safely and on time, every time.",
    icon: Truck,
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/30",
  },
];

export default function Services() {
  return (
    <section id="our-services" className="relative py-24 bg-[#062B22] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#0B493A] rounded-full blur-[100px] opacity-80" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#F3B659] rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[#F3B659] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Our Core Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Premium Solutions Tailored For Your Success
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              We provide end-to-end solutions designed to scale your operations, secure your transactions, and reach your customers faster.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col h-full"
            >
              {/* Outer glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`} 
              />
              
              {/* Card Content */}
              <div className="relative flex flex-col h-full bg-[#0B493A]/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-[#0B493A]/60 transition-all duration-300 hover:-translate-y-2">
                
                {/* Icon Wrapper */}
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} ${service.shadow} shadow-lg mb-8 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white drop-shadow-sm" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 flex-grow mb-8 leading-relaxed font-light">
                  {service.description}
                </p>

                <a 
                  href="#" 
                  className="inline-flex items-center text-[#F3B659] font-semibold hover:text-white transition-colors mt-auto group/btn w-fit"
                >
                  Explore Service
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
