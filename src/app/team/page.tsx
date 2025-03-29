export default function TeamPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
        Our Team
      </h1>
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Team member cards will go here */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Team Members</h2>
          <p className="mt-2 text-sm sm:text-base text-white/80">Meet our dedicated team members!</p>
        </div>
      </div>
    </main>
  );
}
