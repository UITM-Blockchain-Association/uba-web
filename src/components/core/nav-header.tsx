"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

interface CursorProps {
  position: Position;
}

function NavHeader() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
          <Image
            src="/uba3d.png"
            alt="UBA Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <ul
          className="relative flex items-center justify-center space-x-2"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          <Tab href="/about" setPosition={setPosition}>About</Tab>
          <Tab href="/events" setPosition={setPosition}>Events</Tab>
          <Tab href="/team" setPosition={setPosition}>Team</Tab>

          <Cursor position={position} />
        </ul>
      </div>
    </nav>
  );
}

const Tab = ({ children, href, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10"
    >
      <Link 
        href={href}
        className="block px-4 py-3 text-base font-semibold text-white/90 transition-colors hover:text-white md:px-5 md:text-lg"
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      style={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25
      }}
      className="absolute bottom-0 left-0 top-0 z-0 rounded-md bg-white/10"
    />
  );
};

export default NavHeader; 