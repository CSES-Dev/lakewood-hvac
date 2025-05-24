import { getCommunityEvents } from '@/lib/getCommunityEvents';
import { DetailRenderer } from './renderer';
import { Suspense } from 'react';

export default async function EventDetailPage() {
  const events = await getCommunityEvents();

  return (
    <Suspense fallback={<p className="text-white p-4">Loading event...</p>}>
      <DetailRenderer events={events} />
    </Suspense>
  );
}
