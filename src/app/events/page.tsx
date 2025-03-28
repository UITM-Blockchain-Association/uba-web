export default function EventsPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Events
      </h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Event cards will go here */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
          <p className="mt-2 text-white/80">Stay tuned for our upcoming events!</p>
        </div>
      </div>
    </main>
  );
}
