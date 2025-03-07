import { NavbarDemo } from "@/components/ui/code.demo";
import { TypewriterEffectSmoothDemo } from "@/components/ui/code.demo";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Preview as TypewriterDemo } from "@/components/ui/typewriter-demo";
import { MagneticNested } from "@/components/ui/magnetic-demo";
import { CarouselDemo } from "@/components/ui/carousel-demo";

export default function Home() {
  return (
    <main className="relative w-full overflow-visible bg-gradient-to-b from-white to-purple-50/50 dark:from-gray-950 dark:to-purple-950/10 min-h-screen">
      {/* Navbar - fixed position to ensure it's visible while scrolling */}
      <div className="sticky top-0 z-50 w-full">
        <NavbarDemo />
      </div>
      
      <div className="relative flex flex-col items-start justify-start w-full pt-0 -mt-16 md:-mt-10">
        {/* Typewriter Effect */}
        <div className="w-full flex justify-center">
          <TypewriterEffectSmoothDemo />
        </div>
        
        {/* New Typewriter Component */}
        <div className="w-full mt-12 md:mt-8">
          <TypewriterDemo />
        </div>
        
        {/* Content Section  */}
        <div className="w-full flex flex-col lg:flex-row mt-2 relative pb-[65vmin]">
          {/* Left Side - Text and Button */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Club Description Text */}
            <div className="px-4 pl-4 md:pl-16 md:pr-4 mt-1 md:mt-12 text-xl md:text-2xl text-white leading-relaxed text-justify font-medium max-w-2xl mx-auto md:mx-0">
              <p>
              UiTM Blockchain Association&apos;s mission is to grow the student blockchain ecosystem and build a dynamic community where 
              academics, students, and professionals collaborate, innovate, 
              and leverage blockchain technology to create a positive impact.
              </p>
            </div>
            
            {/* Button */}
            <div className="px-4 pl-4 md:pl-16 mt-4 md:mt-6 mx-auto md:mx-0 flex justify-center md:justify-start w-full">
              <MagneticNested />
            </div>
          </div>
          
          {/* Right Side - gambar */}
          <div className="w-full lg:w-1/2 mt-12 lg:-mt-20 lg:absolute lg:right-0 lg:top-0 z-10">
            <CarouselDemo />
          </div>
        </div>
        
        {/* Animated grid pattern background */}
        <AnimatedGridPattern
          numSquares={10}
          maxOpacity={0.15}
          duration={1}
          repeatDelay={0.1}
          className={cn(
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-0 h-full w-full scale-125 fill-[#EC0AF0]/20 stroke-[#EC0AF0]/10",
            "fixed"
          )}
        />
      </div>
    </main>
  );
}