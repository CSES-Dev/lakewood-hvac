import { DetailRenderer } from './renderer';
import { Suspense } from 'react';
import { CommunityEvent } from '@/types/event';

export default async function EventDetailPage() {
  const res = await fetch('http://localhost:3000/api/engagements', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to load event details');
  }

  const events: CommunityEvent[] = await res.json();

  return (
    <Suspense fallback={<p className="text-white p-4">Loading event...</p>}>
      <DetailRenderer events={events} />
    </Suspense>
  );
}
