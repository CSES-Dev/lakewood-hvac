export const dynamic = 'force-dynamic';

import { DetailRenderer } from './renderer';
import { Suspense } from 'react';
import { CommunityEvent } from '@/types/event';

export default async function EventDetailPage() {
  const baseURL = process.env.BASE_URL ?? ''
  const res = await fetch(baseURL + '/api/engagements', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to load event details');
  }

  const events: CommunityEvent[] = (await res.json()) as CommunityEvent[];

  return (
    <Suspense fallback={<p className="text-white p-4">Loading event...</p>}>
      <DetailRenderer events={events} />
    </Suspense>
  );
}
