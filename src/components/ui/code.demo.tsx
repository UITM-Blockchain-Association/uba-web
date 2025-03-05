"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-2 text-base">
            <HoveredLink href="/vision-and-mission">Vision and Mission</HoveredLink>
            <HoveredLink href="/team">Our Team</HoveredLink>
            <HoveredLink href="/historyclub">History</HoveredLink>
          </div>
        </MenuItem>
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
      className: "text-blue-500 dark:text-blue-500",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] md:h-[30rem] mt-20 md:mt-0">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
        Learn , Explore , Create
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
} 