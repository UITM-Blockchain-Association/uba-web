"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-20 pb-16 px-4">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          UiTM Blockchain Association
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <WordRotate
          className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none font-medium"
          words={[
            "We Learn",
            "We Explore",
            "We Create",
          ]}
          duration={2000}
        />
      </BlurFade>
    </div>
  );
} 