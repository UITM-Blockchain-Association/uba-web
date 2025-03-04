import { PageBackground } from "@/components/ui/page-background";
import { HeroSection } from "@/components/ui/hero-section";

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center p-16">
        <PageBackground />
        <div className="z-10 relative w-full">
          <HeroSection />
        </div>
      </main>
    </>
  )
}