import { NavbarDemo } from "@/components/ui/code.demo";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/20">
      {/* Navbar */}
      <NavbarDemo />
      
      
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen pt-24">
        
        
        {/* Animated grid pattern background */}
        <AnimatedGridPattern
          numSquares={60}
          maxOpacity={0.25}
          duration={5}
          repeatDelay={0.5}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-0 h-full fill-[#BE64BF]/30 stroke-[#BE64BF]/20"
          )}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-[#BE64BF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-[#BE64BF]/10 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}