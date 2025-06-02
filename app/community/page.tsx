import { EventCard } from '@/components/EventCard';

interface CommunityEvent {
  id: number;
  title: string;
  date: string;
  address: string;
  description: string;
  imageUrl?: string;
}

export default async function CommunityPage() {
  const res = await fetch('http://localhost:3000/api/engagements', {
    cache: 'no-store', // Optional: disables caching for fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch community events');
  }

  const events: CommunityEvent[] = await res.json();
  const now = new Date();

  const pastEvents = events.filter(e => new Date(e.date) < now);
  const futureEvents = events.filter(e => new Date(e.date) >= now);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-white mt-14">Events</h1>

      <p className="text-white text-2xl mb-10">
        Discover our impact across Lakewood.
      </p>

      <section className="mb-16 space-y-6">
        {futureEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Past Events</h2>
        {pastEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </div>
  );
}
