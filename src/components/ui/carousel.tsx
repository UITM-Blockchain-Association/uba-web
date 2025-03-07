"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[60vmin] h-[60vmin] lg:w-[55vmin] lg:h-[55vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <div className="absolute inset-0 w-[120%] h-[120%]">
            <Image
              className="object-cover transition-opacity duration-600 ease-in-out"
              style={{
                opacity: current === index ? 1 : 0.5,
              }}
              alt={title}
              src={src}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
              onLoad={imageLoaded}
            />
          </div>
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold relative">
            {title}
          </h2>
          <div className="flex justify-center">
            <button className="mt-4 px-3 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-9 border border-transparent text-xs flex justify-center items-center rounded-xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-8 h-8 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200 w-4 h-4" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const id = useId();

  // Auto-slide functionality
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    };

    // Set up the interval for auto-sliding
    autoplayRef.current = setInterval(nextSlide, 4000);

    // Clean up the interval when the component unmounts
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [slides.length]);

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
      
      // Reset the auto-slide timer when a slide is clicked
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
          setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
        }, 4000);
      }
    }
  };

  return (
    <div
      className="relative w-[60vmin] h-[60vmin] lg:w-[55vmin] lg:h-[55vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <CarouselControl
            type="previous"
            title="Previous slide"
            handleClick={() => {
              setCurrent((prevCurrent) => (prevCurrent - 1 + slides.length) % slides.length);
              // Reset timer on manual navigation
              if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = setInterval(() => {
                  setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
                }, 4000);
              }
            }}
          />
        </div>
        <div className="pointer-events-auto">
          <CarouselControl
            type="next"
            title="Next slide"
            handleClick={() => {
              setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
              // Reset timer on manual navigation
              if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
                autoplayRef.current = setInterval(() => {
                  setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
                }, 4000);
              }
            }}
          />
        </div>
      </div>
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
    </div>
  );
} 