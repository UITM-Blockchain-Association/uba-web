import { NavbarDemo } from "@/components/ui/code.demo";
import { TypewriterEffectSmoothDemo } from "@/components/ui/code.demo";

import { MagneticNested } from "@/components/ui/magnetic-demo";
import { FloatingImage } from "@/components/ui/floating-image";

export default function Home() {
  return (
    <main className="relative w-full overflow-visible bg-black min-h-screen">
      {/* Navbar - fixed position to ensure it's visible while scrolling */}
      <div className="sticky top-0 z-50 w-full animate-fade-in opacity-0">
        <NavbarDemo />
      </div>
      
      <div className="relative flex flex-col items-start justify-start w-full pt-0 -mt-25 md:-mt-1">
        {/* Typewriter Effect */}
        <div className="w-full flex justify-center animate-fade-in opacity-0 stagger-delay-1">
          <TypewriterEffectSmoothDemo />
        </div>
        
      
        
        {/* Content Section */}
        <div className="w-full flex flex-col lg:flex-row mt-2 relative pb-[20vmin] sm:pb-[25vmin] md:pb-[30vmin] lg:pb-[35vmin]">
          {/* Mobile Floating Image - Only visible on mobile */}
          <div className="block lg:hidden w-full -mt-18 mb-4 animate-fade-in opacity-0 stagger-delay-4">
            <FloatingImage />
          </div>
          
          {/* Left Side - Text and Button */}
          <div className="w-full lg:w-1/2 flex flex-col animate-fade-in opacity-0 stagger-delay-3">
            {/* Club Description Text */}
            <div className="px-4 sm:px-6 md:px-8 lg:pl-16 lg:pr-4 mt-1 sm:mt-4 md:mt-8 lg:mt-1 text-lg sm:text-xl md:text-2xl text-white leading-relaxed text-justify font-medium max-w-2xl mx-auto lg:mx-0">
              <p>
                UiTM Blockchain Association&apos;s (UBA) mission is to grow the student blockchain ecosystem and build a dynamic community where 
                academics, students, and professionals collaborate, innovate, 
                and leverage blockchain technology to create a positive impact.
              </p>
            </div>
            
            {/* Button */}
            <div className="px-4 sm:px-6 md:px-8 lg:pl-70 mt-4 sm:mt-6 md:mt-8 mx-auto lg:mx-0 flex justify-center lg:justify-start w-full">
              <MagneticNested />
            </div>
          </div>
          
          {/* Right Side - Desktop Floating Image - Only visible on desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 mt-4 sm:mt-6 md:mt-8 lg:-mt-24 xl:-mt-28 2xl:-mt-35 lg:absolute lg:right-0 lg:top-0 z-10 animate-fade-in opacity-0 stagger-delay-4">
            <FloatingImage />
          </div>
        </div>
      </div>
    </main>
  );
}