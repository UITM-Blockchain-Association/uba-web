"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

interface PageBackgroundProps {
  className?: string;
}

export function PageBackground({ className = "" }: PageBackgroundProps) {
  return (
    <>
      {/* First grid with teal color */}
      <FlickeringGrid
        className={`absolute inset-0 z-0 ${className}`}
        squareSize={4}
        gridGap={6}
        color="#169882"
        maxOpacity={0.25}
        flickerChance={0.1}
      />
      
      {/* Second grid with purple color - slightly offset and different parameters */}
      <FlickeringGrid
        className={`absolute inset-0 z-0 opacity-70 ${className}`}
        squareSize={5}
        gridGap={7}
        color="#A01CA3"
        maxOpacity={0.2}
        flickerChance={0.07}
      />
    </>
  );
} 