"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Define different card sizes for the masonry layout
const cardSizes = [
  "row-span-1 col-span-2",                   // Standard
  "row-span-1 col-span-2",                   // Wide
  "row-span-1 col-span-2",                   // Tall
  "row-span-1 col-span-1",                   // Large
  "row-span-1 col-span-1",                   // Standard
  "row-span-1 col-span-2",                   // Standard
  "row-span-1 col-span-2",                   // Wide
  "row-span-1 col-span-2",                   // Standard
  "row-span-1 col-span-2",                   // Large
  "row-span-1 col-span-1",                   // Standard
  "row-span-1 col-span-1",                   // Standard
];

// Card data with images from public/gambar
const galleryCards = [
  {
    title: "Satu",
    src: "/gambar/satu.jpeg",
  },
  {
    title: "Dua",
    src: "/gambar/dua.JPG",
  },
  {
    title: "Tiga",
    src: "/gambar/tiga.jpg",
  },
  {
    title: "Lima",
    src: "/gambar/lima.JPG",
  },
  {
    title: "Enam",
    src: "/gambar/enam.png",
  },
  {
    title: "Tujuh",
    src: "/gambar/tujuh.jpg",
  },
  {
    title: "Lapan",
    src: "/gambar/lapan.JPG",
  },
  {
    title: "Sembilan",
    src: "/gambar/sembilan.png",
  },
  {
    title: "Sepuluh",
    src: "/gambar/sepuluh.png",
  },
 
];

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    size,
    isMobile,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    size: string;
    isMobile: boolean;
  }) => {
    const isActive = hovered === index;
    
    const handleInteraction = () => {
      if (isMobile) {
        // On mobile, toggle the active state on click
        setHovered(isActive ? null : index);
      }
    };
    
    return (
      <div
        onClick={handleInteraction}
        onMouseEnter={() => !isMobile && setHovered(index)}
        onMouseLeave={() => !isMobile && setHovered(null)}
        className={cn(
          "rounded-lg relative bg-black overflow-hidden transition-all duration-300 ease-out group grayscale-[80%] brightness-[0.2]",
          size,
          isActive && "grayscale-0 brightness-100",
          isMobile && "cursor-pointer"
        )}
        style={{
          filter: isActive ? 'none' : 'blur(1.5px)'
        }}
      >
        <div className="h-full w-full">
          <Image
            src={card.src}
            alt={card.title}
            width={600}
            height={600}
            className={cn(
              "object-cover w-full h-full transition-all duration-700",
              isActive && "scale-105"
            )}
            unoptimized
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 transition-opacity duration-300",
            isActive ? "opacity-40" : "opacity-90"
          )} />
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards = galleryCards }: { cards?: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Detect if we're on mobile based on window width
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkIsMobile();
    
    // Check on resize
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] gap-2 sm:gap-3 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          size={cardSizes[index % cardSizes.length]}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
} 