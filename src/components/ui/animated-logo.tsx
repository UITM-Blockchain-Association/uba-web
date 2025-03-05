"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AnimatedLogo() {
  return (
    <motion.div 
      className="absolute left-4 md:left-12 lg:left-20 bottom-12 md:bottom-20 z-10"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Image
        src="/ubalogo3dstaticimage 1.png"
        alt="UBA Logo"
        width={500}
        height={500}
        className="object-contain"
      />
    </motion.div>
  );
} 