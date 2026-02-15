"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative rounded-2xl overflow-hidden  bg-white">
      <motion.div
       animate={{
      x: [0, 50, 50, 0, 0],
      y: [0, 0, 50, 50, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
        className="w-full h-auto"
      >
        <Image
          src="/landpage-mockup.png"
          alt="landingpage mockup"
          width={800}
          height={800}
          priority
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
