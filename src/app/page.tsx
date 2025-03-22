import { NavbarDemo } from "@/components/ui/code.demo";
import { TypewriterEffectSmoothDemo } from "@/components/ui/code.demo";
import { BentoGridGalleryDemo } from "@/components/ui/code.demo";
import { BackgroundTheme } from "@/components/ui/background-theme";
import { MagneticNested } from "@/components/ui/magnetic-demo";
import { FloatingImage } from "@/components/ui/floating-image";
import { StatsCard } from "@/components/ui/card";

export default function Home() {
  return (
    <BackgroundTheme>
      <main className="relative w-full overflow-visible min-h-screen">
        {/* Navbar - fixed position to ensure it's visible while scrolling */}
        <div className="sticky top-0 z-50 w-full animate-fade-in opacity-0">
          <NavbarDemo />
        </div>
        
        <div className="relative flex flex-col items-start justify-start w-full pt-0 -mt-20 sm:-mt-25 md:-mt-1">
          {/* Typewriter Effect */}
          <div className="w-full flex justify-center animate-fade-in opacity-0 stagger-delay-1">
            <TypewriterEffectSmoothDemo />
          </div>
          
          {/* Content Section */}
          <div className="w-full flex flex-col lg:flex-row mt-0 sm:mt-2 relative pb-[8vmin] sm:pb-[12vmin] md:pb-[16vmin] lg:pb-[20vmin]">
            {/* Mobile Floating Image - Only visible on mobile */}
            <div className="block lg:hidden w-full -mt-16 sm:-mt-18 mb-2 sm:mb-4 animate-fade-in opacity-0 stagger-delay-4">
              <FloatingImage />
            </div>
            
            {/* Left Side - Text and Button */}
            <div className="w-full lg:w-1/2 flex flex-col animate-fade-in opacity-0 stagger-delay-3">
              {/* Club Description Text */}
              <div className="px-3 sm:px-4 md:px-6 lg:pl-12 lg:pr-4 mt-1 sm:mt-2 md:mt-4 lg:mt-1 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed text-justify font-medium max-w-2xl mx-auto lg:mx-0">
                <p>
                  UiTM Blockchain Association&apos;s (UBA) mission is to grow the student blockchain ecosystem and build a dynamic community where 
                  academics, students, and professionals collaborate, innovate, 
                  and leverage blockchain technology to create a positive impact.
                </p>
              </div>
              
              {/* Button */}
              <div className="px-3 sm:px-4 md:px-6 lg:pl-60 mt-3 sm:mt-4 md:mt-6 mx-auto lg:mx-0 flex justify-center lg:justify-start w-full">
                <MagneticNested />
              </div>
            </div>
            
            {/* Right Side - Desktop Floating Image - Only visible on desktop */}
            <div className="hidden lg:block w-full lg:w-1/2 mt-4 lg:-mt-20 xl:-mt-24 2xl:-mt-28 lg:absolute lg:right-0 lg:top-0 z-10 animate-fade-in opacity-0 stagger-delay-4">
              <FloatingImage />
            </div>
          </div>
          
          {/* Stats Card - Centered */}
          <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 mt-0 sm:mt-2 md:mt-4 mb-12 sm:mb-16 md:mb-20 relative z-20 animate-fade-in opacity-0 stagger-delay-4">
            <div className="max-w-4xl w-full">
              <StatsCard />
            </div>
          </div>
          
          {/* Bento Grid Gallery - Centered with proper spacing */}
          <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8 mb-12 sm:mb-16 md:mb-20 animate-fade-in opacity-0 stagger-delay-5">
            <div className="max-w-5xl w-full">
              <BentoGridGalleryDemo />
            </div>
          </div>
        </div>
      </main>
    </BackgroundTheme>
  );
}