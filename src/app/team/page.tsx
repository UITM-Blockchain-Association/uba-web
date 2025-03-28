export default function TeamPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Our Team
      </h1>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Team member cards will go here */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white">Team Members</h2>
          <p className="mt-2 text-white/80">Meet our dedicated team members!</p>
        </div>
      </div>
    </main>
  );
}
