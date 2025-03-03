"use client"

import { TubelightNavbarWithRoutes } from "@/components/blocks/tubelight-navbar-with-routes"

export default function TeamPage() {
  return (
    <main className="relative min-h-screen">
      <TubelightNavbarWithRoutes />
      <div className="container py-20">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Meet the dedicated individuals behind UBA.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add team member cards here */}
        </div>
      </div>
    </main>
  )
} 