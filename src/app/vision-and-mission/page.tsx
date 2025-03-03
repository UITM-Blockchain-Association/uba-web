"use client"

import { TubelightNavbarWithRoutes } from "@/components/blocks/tubelight-navbar-with-routes"

export default function VisionAndMissionPage() {
  return (
    <main className="relative min-h-screen">
      <TubelightNavbarWithRoutes />
      <div className="container py-20">
        <h1 className="text-4xl font-bold">Vision and Mission</h1>
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              To be a leading organization in promoting and fostering technological innovation and development.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              To empower and connect individuals through technology, creating meaningful impact in our community.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 