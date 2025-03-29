"use client";

import SplitText from "@/components/ui/SplitText";
import ShinyButton from "@/components/ui/ShinyButton";

// Home page component
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-4">
        <div className="w-full md:max-w-2xl lg:max-w-4xl space-y-4 md:space-y-6">
          <SplitText text="UiTM Blockchain Association" variant="title" />
          <SplitText text="Empowering Students to Build The Future of Blockchain" variant="subtitle" />
        </div>
        
        <div className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0">
          <ShinyButton 
            text="Join The Club"
            onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
            className="w-full sm:w-auto"
          />
          <ShinyButton 
            text="Learn More"
            onClick={() => window.location.href = '/about'}
            className="w-full sm:w-auto"
            speed={7}
          />
        </div>
      </div>
    </main>
  );
}