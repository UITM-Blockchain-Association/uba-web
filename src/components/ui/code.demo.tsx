"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

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