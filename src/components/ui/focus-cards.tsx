"use client";
import Image from "next/image";
import React, { useState } from "react";
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
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    size: string;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-black overflow-hidden transition-all duration-300 ease-out group grayscale-[80%] brightness-[0.2]",
        size,
        hovered === index && "grayscale-0 brightness-100"
      )}
      style={{
        filter: hovered === index ? 'none' : 'blur(1.5px)'
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
            hovered === index && "scale-105"
          )}
          unoptimized
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 transition-opacity duration-300",
          hovered === index ? "opacity-40" : "opacity-90"
        )} />
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards = galleryCards }: { cards?: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

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
        />
      ))}
    </div>
  );
} 