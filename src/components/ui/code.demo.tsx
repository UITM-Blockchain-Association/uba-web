"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BentoGridGalleryDemo } from "@/components/ui/bento-gallery-demo";

export { BentoGridGalleryDemo };

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About" href="/about" />
        <MenuItem setActive={setActive} active={active} item="Our Team" href="/team" />
        <MenuItem setActive={setActive} active={active} item="Events" href="/events" />
        <MenuItem setActive={setActive} active={active} item="Our Community" href="/" className="bg-[#4B9EE4] text-white rounded-full px-4 py-1" />
      </Menu>
    </div>
  );
}

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "UiTM",
    },
    {
      text: "Blockchain",
    },
    {
      text: "Association",
      className: "text-[#4B9EE4] dark:text-[#4B9EE4]",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] md:h-[25rem] mt-20 md:-mt-1">
      <TypewriterEffectSmooth words={words} />
      <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-700 dark:text-neutral-200 mt-1 font-montserrat">
        Learn • Explore • Create
      </p>
    </div>
  );
} 