import { NavbarDemo } from "@/components/ui/code.demo";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function TeamPage() {
  return (
    <main className="relative w-full overflow-visible bg-gradient-to-b from-white to-purple-50/50 dark:from-gray-950 dark:to-purple-950/10 min-h-screen">
      {/* Navbar - fixed position to ensure it's visible while scrolling */}
      <div className="sticky top-0 z-50 w-full">
        <NavbarDemo />
      </div>
      
      <div className="relative flex flex-col items-start justify-start w-full pt-0 -mt-16 md:-mt-10">
        {/* Team Page Content */}
        <div className="w-full flex flex-col mt-24 md:mt-32 px-4 md:px-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Team</h1>
          
          <div className="text-xl text-white leading-relaxed max-w-4xl">
            <p className="mb-6">
              Meet the dedicated team behind UiTM Blockchain Association. This page is currently under development.
            </p>
            <p>
              Information about our team members, leadership, and organizational structure will be added soon.
            </p>
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