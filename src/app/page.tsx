import { NavbarDemo } from "@/components/ui/code.demo";
import { TypewriterEffectSmoothDemo } from "@/components/ui/code.demo";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Preview as TypewriterDemo } from "@/components/ui/typewriter-demo";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-purple-50/50 dark:from-gray-950 dark:to-purple-950/10">
      {/* Navbar - fixed position to ensure it's visible while scrolling */}
      <div className="sticky top-0 z-50 w-full">
        <NavbarDemo />
      </div>
      
      <div className="relative flex flex-col items-start justify-start w-full min-h-screen pt-0 -mt-20 md:-mt-10">
        {/* Typewriter Effect */}
        <div className="w-full flex justify-center">
          <TypewriterEffectSmoothDemo />
        </div>
        
        {/* New Typewriter Component */}
        <div className="w-full mt-27">
          <TypewriterDemo />
        </div>
        
        {/* Club Description Text */}
        <div className="pl-16 pr-4 mt-1 text-xl md:text-2xl text-white leading-relaxed text-left font-medium max-w-2xl">
          <p>
          Our mission is to grow the student blockchain ecosystem and build a dynamic community where 
          academics, students, and professionals collaborate, innovate, and leverage blockchain technology to create a positive impact.
          </p>
        </div>
        
        {/* Animated grid pattern background */}
        <AnimatedGridPattern
          numSquares={10}
          maxOpacity={0.15}
          duration={1}
          repeatDelay={0.1}
          className={cn(
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-0 h-full w-full scale-125 fill-[#EC0AF0]/20 stroke-[#EC0AF0]/10"
          )}
        />
      </div>
    </main>
  );
}