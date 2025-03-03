"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

interface PageBackgroundProps {
  className?: string;
}

export function PageBackground({ className = "" }: PageBackgroundProps) {
  return (
    <FlickeringGrid
      className={`absolute inset-0 z-0 ${className}`}
      squareSize={4}
      gridGap={6}
      color="#337065"
      maxOpacity={0.3}
      flickerChance={0.1}
    />
  );
} 