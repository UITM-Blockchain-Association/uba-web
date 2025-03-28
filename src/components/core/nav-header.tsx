"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  isMobile?: boolean;
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black/80 backdrop-blur-sm before:absolute before:inset-0 before:z-[-1] before:opacity-50 before:[background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              x: { type: "spring", stiffness: 100, damping: 15 },
              scale: { type: "spring", stiffness: 200, damping: 12 }
            }}
            className="w-full h-full"
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <Image
              src="/uba3d.png"
              alt="UBA Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="relative hidden items-center justify-center space-x-4 md:flex"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          <Tab href="/about" setPosition={setPosition}>About</Tab>
          <Tab href="/events" setPosition={setPosition}>Events</Tab>
          <Tab href="/team" setPosition={setPosition}>Team</Tab>
          <Tab href="https://t.me/+N8jDDGAYQq5mMWU1" setPosition={setPosition}>Our Community</Tab>
          <Cursor position={position} />
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="flex flex-col justify-center space-y-1.5 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 bg-white"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 bg-white"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 bg-white"
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <motion.ul
              className="flex flex-col divide-y divide-white/10 bg-black/90 backdrop-blur-sm"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              <MobileTab href="/about" setPosition={setPosition}>About</MobileTab>
              <MobileTab href="/events" setPosition={setPosition}>Events</MobileTab>
              <MobileTab href="/team" setPosition={setPosition}>Team</MobileTab>
              <MobileTab href="https://t.me/+N8jDDGAYQq5mMWU1" setPosition={setPosition}>Our Community</MobileTab>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const Tab = ({ children, href, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const isCommunity = children === "Our Community";
  
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
        target={isCommunity ? "_blank" : undefined}
        rel={isCommunity ? "noopener noreferrer" : undefined}
        className={`block px-5 py-3 text-base font-semibold text-white/90 transition-colors hover:text-white md:text-lg ${
          isCommunity ? "border-2 border-blue-500 hover:border-blue-400" : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const MobileTab = ({ children, href }: TabProps) => {
  const isCommunity = children === "Our Community";
  
  return (
    <motion.li
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 20 }
      }}
      className={`relative z-10 ${isCommunity ? "px-4" : ""}`}
    >
      <Link 
        href={href}
        target={isCommunity ? "_blank" : undefined}
        rel={isCommunity ? "noopener noreferrer" : undefined}
        className={`block w-full px-6 py-4 text-base font-semibold text-white/90 transition-all hover:bg-white/10 hover:text-white hover:pl-8 ${
          isCommunity ? "mx-2 my-2 border-2 border-blue-500 hover:border-blue-400" : ""
        }`}
      >
        {children}
      </Link>
    </motion.li>
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
      className="absolute bottom-0 left-0 top-0 z-0 bg-white/10"
    />
  );
};

export default NavHeader; 