'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CommunityEvent } from '@/types/event';

export const DetailRenderer = ({ events }: { events: CommunityEvent[] }) => {
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');

  const event = events.find((e) => e.id === id);

  if (!event) return <p className="text-white text-center mt-10">Event not found.</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {new Date(event.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        — {event.address}
      </p>

      <div className="relative w-full h-[300px] mb-6">
        <Image
          src={event.imageUrl || '/default-image.jpg'}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <p className="whitespace-pre-wrap">{event.description}</p>
    </div>
  );
};
