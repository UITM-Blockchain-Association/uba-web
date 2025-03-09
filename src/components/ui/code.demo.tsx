"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

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
        <MenuItem setActive={setActive} active={active} item="Join The Club" href="/" />
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
      className: "text-[#0CD8B6] dark:text-[#0CD8B6]",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] md:h-[30rem] mt-20 md:mt-0">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
        Learn • Explore • Create
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
} 