import { getCommunityEvents, getEventBySlug } from '@/lib/getCommunityEvents';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// ✅ Pre-render pages for all event slugs
export async function generateStaticParams() {
  const events = await getCommunityEvents();
  return events.map(event => ({ slug: event.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = await getEventBySlug(params.slug);
  if (!event) return notFound();

  return (
    <div className="p-8">
      <h1 className="text-4xl text-white font-bold">{event.title}</h1>
      <p className="text-sm text-gray-400">
        {new Date(event.date).toDateString()}
      </p>

      <div className="relative w-[150px] h-[150px] flex-shrink-0 mb-6">
        <Image
          src={event.imageUrl || '/default-image.jpg'}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="mt-4 text-white whitespace-pre-wrap">
        <p>{event.description}</p>
      </div>
    </div>
  );
}
