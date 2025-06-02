<<<<<<< HEAD
export const dynamic = 'force-dynamic';

=======
>>>>>>> 5bd1e1b (Connect Community page to /api/engagements and render detail view and added component to navbar)
import { DetailRenderer } from './renderer';
import { Suspense } from 'react';
import { CommunityEvent } from '@/types/event';

export default async function EventDetailPage() {
<<<<<<< HEAD
  const baseURL = process.env.BASE_URL ?? ''
  const res = await fetch(baseURL + '/api/engagements', {
=======
  const res = await fetch('http://localhost:3000/api/engagements', {
>>>>>>> 5bd1e1b (Connect Community page to /api/engagements and render detail view and added component to navbar)
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to load event details');
  }

<<<<<<< HEAD
  const events: CommunityEvent[] = (await res.json()) as CommunityEvent[];
=======
  const events: CommunityEvent[] = await res.json();
>>>>>>> 5bd1e1b (Connect Community page to /api/engagements and render detail view and added component to navbar)

  return (
    <Suspense fallback={<p className="text-white p-4">Loading event...</p>}>
      <DetailRenderer events={events} />
    </Suspense>
  );
}
