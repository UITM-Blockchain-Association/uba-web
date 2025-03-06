"use client"

import { Typewriter } from "@/components/ui/typewriter"

function Preview() {
  return (
    <div className="w-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start font-normal p-8 pl-16 -mt-32" style={{ fontFamily: 'HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      <p className="whitespace-pre-wrap">
        <span>{"The Future is  "}</span>
        <Typewriter
          text={[
            "decentralized",
            "on-chain",
            "automated",
            
          ]}
          speed={100}
          className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/44"
          waitTime={3000}
          deleteSpeed={80}
          cursorChar={"_"}
        />
      </p>
    </div>
  )
}

export { Preview } 