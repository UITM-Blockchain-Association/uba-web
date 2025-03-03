import { PageBackground } from "@/components/ui/page-background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24">
      <PageBackground />
      <div className="z-10 relative">
        <h1 className="text-4xl font-bold">Welcome to UBA Web</h1>
        <p className="mt-4 text-xl">A fresh start for your project</p>
      </div>
    </main>
  )
}