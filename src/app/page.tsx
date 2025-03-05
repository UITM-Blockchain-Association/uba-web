import { NavbarDemo } from "@/components/ui/code.demo";
import { TypewriterEffectSmoothDemo } from "@/components/ui/code.demo";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-purple-50/50 dark:from-gray-950 dark:to-purple-950/10">
      {/* Navbar */}
      <NavbarDemo />
      
      <div className="relative flex flex-col items-center justify-start w-full min-h-screen pt-0 -mt-20 md:-mt-10">
        {/* Typewriter Effect */}
        <TypewriterEffectSmoothDemo />
        
        {/* Animated grid pattern background */}
        <AnimatedGridPattern
          numSquares={10}
          maxOpacity={0.15}
          duration={1}
          repeatDelay={0.1}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-0 h-full fill-[#EC0AF0]/20 stroke-[#EC0AF0]/10"
          )}
        />
      </div>
    </main>
  );
}