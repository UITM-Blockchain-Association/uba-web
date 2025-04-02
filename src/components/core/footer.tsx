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
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-6 py-8 gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/uba.png" 
                alt="UBA Logo" 
                width={180} 
                height={180} 
                className="object-contain -mt-4 -mb-4 md:-mt-15 md:-mb-8" 
                priority 
              />
            </Link>
          </div>

          {/* Quick Links and Socials */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-8 sm:gap-25">
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-medium text-white mb-3">Quick Links</h3>
              <div className="flex space-x-6">
                <Link
                  href="/events"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Events
                </Link>
                <Link
                  href="/team"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/uitmblockchainassociation/"
                  className="text-white/70 transition-colors hover:text-white"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/uitm-blockchain-association"
                  className="text-white/70 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policy Links */}
        <div className="border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-white/50 mb-2 sm:mb-0 text-center sm:text-left">
            © {currentYear} UiTM Blockchain Association. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
