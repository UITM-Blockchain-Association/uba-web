"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
}) => {
  const content = (
    <motion.p
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white font-medium text-base md:text-lg px-2"
    >
      {item}
    </motion.p>
  );

  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onClick={() => setActive(active === item ? null : item)}
      className="relative md:inline-block"
    >
      {href ? (
        <Link href={href} className="block py-2 md:py-1">
          {content}
        </Link>
      ) : (
        <div className="block py-2 md:py-1">
          {content}
        </div>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="md:absolute md:top-[calc(100%_+_1.7rem)] md:left-1/2 md:transform md:-translate-x-1/2 md:pt-5 z-50 mt-3 md:mt-0">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-full md:w-max h-full p-5"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActive(null);
    }
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full bg-transparent dark:bg-transparent px-0 py-4 md:py-5 w-full"
    >
      <div className="flex items-center justify-between w-full">
        <motion.div 
          className="flex items-center pl-1 md:pl-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100 
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/1.png"
            width={45}
            height={45}
            alt="Logo"
            className="rounded-full object-contain"
            priority
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-end space-x-8 flex-1 ml-auto pr-3">
          {children}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-black dark:bg-white block"
          ></motion.span>
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-black dark:bg-white block"
          ></motion.span>
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-black dark:bg-white block"
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 mt-3 bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden z-50 border border-black/[0.1] dark:border-white/[0.1]"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
              className="flex flex-col space-y-6 p-8"
            >
              {React.Children.map(children, (child, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  {child}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ 
  children, 
  ...rest 
}: React.ComponentPropsWithoutRef<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black py-2 block text-base transition-all duration-200 hover:translate-x-1"
    >
      {children}
    </Link>
  );
}; 