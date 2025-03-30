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
        "rounded-lg relative bg-black overflow-hidden transition-all duration-300 ease-out group",
        size,
        hovered !== null && hovered !== index && "brightness-[0.3] grayscale"
      )}
    >
      <div className="h-full w-full">
        <Image
          src={card.src}
          alt={card.title}
          width={600}
          height={600}
          className="object-cover w-full h-full brightness-[0.6] group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />
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