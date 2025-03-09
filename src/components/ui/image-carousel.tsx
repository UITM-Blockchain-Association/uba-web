"use client";

import * as React from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  slides: Array<{
    src: string;
    title: string;
    button: string;
  }>;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function ImageCarousel({
  slides,
  className,
  autoplay = true,
  autoplayInterval = 5000,
  ...props
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const dragX = useMotionValue(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    })
  };

  const handleNext = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === slides.length ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const handlePrevious = React.useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -50 && currentIndex < slides.length - 1) {
      handleNext();
    } else if (x >= 50 && currentIndex > 0) {
      handlePrevious();
    }
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);
    }
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, handleNext]);

  return (
    <div 
      className={cn("relative w-full h-[300px] sm:h-[400px] overflow-hidden bg-black/5 backdrop-blur-sm rounded-xl sm:rounded-2xl group", className)}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0
              }}
              dragElastic={0.1}
              dragMomentum={false}
              style={{
                x: dragX
              }}
              onDragEnd={onDragEnd}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full h-full p-2 sm:p-4">
                <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={slides[currentIndex].src} 
                    alt={slides[currentIndex].title || `Slide ${currentIndex + 1}`}
                    fill
                    className="object-contain" 
                    priority={currentIndex === 0}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4">
        <button
          onClick={handlePrevious}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/30 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/30 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </button>
      </div>
    </div>
  );
} 