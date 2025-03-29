import SplitText from "@/components/ui/SplitText";
import RotatingText from "@/components/ui/RotatingText";

// Hero title component
const HeroTitle = () => (
  <div className="w-full max-w-9xl space-y-6">
    <div className="flex flex-col gap-2 items-center text-center">
      <SplitText 
        text="UiTM Blockchain" 
        variant="title" 
        className="text-5xl md:text-6xl lg:text-5xl font-bold" 
      />
      <SplitText 
        text="Association" 
        variant="title" 
        className="text-6xl md:text-7xl lg:text-8xl font-bold" 
      />
    </div>
    <div className="flex justify-center w-full">
      <RotatingText
        texts={["We Learn", "We Explore", "We Create"]}
        className="text-2xl md:text-3xl lg:text-4xl text-gray-200 text-center"
        elementLevelClassName="text-white/90"
        splitBy="characters"
        staggerDuration={0.02}
        rotationInterval={3000}
      />
    </div>
  </div>
);

export default HeroTitle; 