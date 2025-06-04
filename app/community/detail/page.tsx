import { DetailRenderer } from './renderer';
import { Suspense } from 'react';
import { CommunityEvent } from '@/types/event';

export const dynamic = 'force-dynamic';

export default async function EventDetailPage() {
  let events: CommunityEvent[] = [];

  try {
    const res = await fetch('http://localhost:3000/api/engagements', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to load event details');
    }

    events = (await res.json()) as CommunityEvent[];
  } catch (error) {
    console.error('Error fetching event data:', error);
  }

  return (
    <Suspense fallback={<p className="text-white p-4">Loading event...</p>}>
      <DetailRenderer events={events} />
    </Suspense>
  );
}
