"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function FloatingImage() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] 2xl:h-[480px]"
    >
      <Image
        src="/uba3d.png"
        alt="UBA 3D"
        fill
        className="object-contain"
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 45vw, 40vw"
        priority
      />
    </motion.div>
  );
} 