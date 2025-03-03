"use client"

import { TubelightNavbarWithRoutes } from "@/components/blocks/tubelight-navbar-with-routes"

export default function EventsPage() {
  return (
    <main className="relative min-h-screen">
      <TubelightNavbarWithRoutes />
      <div className="container py-20">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stay tuned for upcoming UBA events.
        </p>
      </div>
    </main>
  )
} 