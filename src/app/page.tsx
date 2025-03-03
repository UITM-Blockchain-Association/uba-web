"use client"

import { useEffect, useState } from "react"
import { Book, Sunset, Trees, Zap } from "lucide-react"
import { useTheme } from "next-themes"

import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1"
import { Particles } from "@/components/ui/particles"

const navbarData = {
  logo: {
    url: "/",
    src: "/2.png",
    alt: "UBA Web",
    title: "UBA Web",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "About Us",
      url: "#",
      items: [
        {
          title: "Vision and Mission",
          description: "Vision and Mission of UBA",
          icon: <Book className="size-5 shrink-0" />,
          url: "/vision-and-mission",
        },
        {
          title: "Our Team",
          description: "UBA Team",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/team",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
    },
  ],
}

export default function Home() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <main className="relative min-h-screen">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <Navbar1 {...navbarData} />
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to UBA Web</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your gateway to UBA&apos;s digital presence
        </p>
      </div>
    </main>
  )
}