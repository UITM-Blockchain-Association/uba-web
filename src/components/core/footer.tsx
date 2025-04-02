"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="flex items-center justify-between px-6 py-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/uba.png" 
                alt="UBA Logo" 
                width={220} 
                height={220} 
                className="object-contain -mt-10 -mb-10" 
                priority 
              />
            </Link>
          </div>

          {/* Quick Links and Socials */}
          <div className="flex items-center space-x-30">
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-medium text-white mb-3">Quick Links</h3>
              <div className="flex space-x-6">
                <Link
                  href="/events"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Events
                </Link>
                <Link
                  href="/team"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Team
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-medium text-white mb-3">Socials</h3>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://x.com/ubachain"
                  className="text-white/70 transition-colors hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/uitmblockchainassociation/"
                  className="text-white/70 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/uitm-blockchain-association"
                  className="text-white/70 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-white/50 mb-2 sm:mb-0">
            © {currentYear} UiTM Blockchain Association. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
