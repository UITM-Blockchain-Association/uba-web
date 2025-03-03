"use client"

import { Book, Home, Trees, Calendar } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function TubelightNavbarWithRoutes() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Vision and Mission", url: "/vision-and-mission", icon: Book },
    { name: "Our Team", url: "/team", icon: Trees },
    { name: "Events", url: "/events", icon: Calendar },
  ]

  return <NavBar items={navItems} />
}