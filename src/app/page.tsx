"use client";

import { useEffect, useState } from "react";
import HeroBackground from "@/components/home/HeroBackground";
import HeroTitle from "@/components/home/HeroTitle";
import ScrollIndicator from "@/components/home/ScrollIndicator";
import ScrollPage from "@/components/home/ScrollPage";

// Main Home component
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Hero section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24">
        <HeroBackground scrollY={scrollY} />
        
        <div className="w-full flex flex-col items-center text-center gap-8 md:gap-10">
          <HeroTitle />
          
          
        </div>
        
        <ScrollIndicator scrollY={scrollY} />
      </div>

      {/* About section */}
      <ScrollPage scrollY={scrollY} />
    </main>
  );
}