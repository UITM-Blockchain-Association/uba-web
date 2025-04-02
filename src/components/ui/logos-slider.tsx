'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState, useMemo } from 'react';

const logos = [
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto",
  },
];

export function LogosSlider() {
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const duration = 3; // Faster animation (reduced from 30)
  const gap = 10; // Reduced gap between logos (was 48)

  useEffect(() => {
    const calculateWidth = () => {
      if (wrapperRef.current && contentRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth);
        setContentWidth(contentRef.current.offsetWidth);
      }
    };

    // Calculate on mount
    calculateWidth();

    // Recalculate on window resize
    window.addEventListener('resize', calculateWidth);
    
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  // Memoize computed values to avoid recalculation on each render
  const { optimizedCloneCount, translateX, animationDuration } = useMemo(() => {
    const optCloneCount = Math.max(Math.ceil(wrapperWidth / (contentWidth || 1)) + 1, 2);
    const transX = -(contentWidth || 0);
    // Faster animation speed with reduced duration factor
    const animDuration = (contentWidth || 1000) * duration / 200;
    
    return {
      optimizedCloneCount: optCloneCount,
      translateX: transX,
      animationDuration: animDuration
    };
  }, [wrapperWidth, contentWidth, duration]);

  // Memoize the logo elements to avoid recreating on every render
  const logoElements = useMemo(() => (
    logos.map((logo) => (
      <div 
        key={logo.id} 
        className='flex w-24 items-center justify-center transform transition-transform duration-200 hover:scale-110'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <img
          src={logo.image}
          alt={logo.description}
          className={cn(logo.className, 'transition-opacity duration-200 hover:opacity-90')}
          loading="lazy"
        />
      </div>
    ))
  ), []);

  return (
    <div 
      ref={wrapperRef}
      className='relative h-[100px] w-full overflow-hidden'
    >
      <div
        className="flex"
        style={{
          transform: `translateX(${translateX}px)`,
          animationName: 'slide',
          animationDuration: `${animationDuration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: isPaused ? 'paused' : 'running',
          gap: `${gap}px`,
          willChange: 'transform',
        }}
      >
        <div
          ref={contentRef}
          className="flex shrink-0 items-center"
          style={{ gap: `${gap}px` }}
        >
          {logoElements}
        </div>
        
        {Array.from({ length: optimizedCloneCount }).map((_, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center"
            style={{ gap: `${gap}px` }}
          >
            {logoElements}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth + gap}px);
          }
        }
      `}</style>
    </div>
  );
} 