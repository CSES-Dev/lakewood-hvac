import { getCommunityEvents } from '@/lib/getCommunityEvents';
import { DetailRenderer } from './renderer';

export default async function EventDetailPage() {
  const events = await getCommunityEvents();

  return <DetailRenderer events={events} />;
}
