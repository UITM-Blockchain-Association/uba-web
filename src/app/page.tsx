import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#794199"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
      </div>
      
      {/* Content */}
     
    </div>
  );
}