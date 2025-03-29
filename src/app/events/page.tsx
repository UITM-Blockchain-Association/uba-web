export default function EventsPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
        Events
      </h1>
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Event cards will go here */}
        <div className="rounded-lg border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Upcoming Events</h2>
          <p className="mt-2 text-sm sm:text-base text-white/80">Stay tuned for our upcoming events!</p>
        </div>
      </div>
    </main>
  );
}
