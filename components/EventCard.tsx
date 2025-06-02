import Link from 'next/link';
import { CommunityEvent } from '@/types/event';

export const EventCard = ({ event }: { event: CommunityEvent }) => {
  const preview = event.description.split('.').slice(0, 2).join('. ') + '...';

  return (
    <Link href={`/community/detail?id=${String(event.id)}`}>
      <div className="w-full mx-auto p-6 rounded-2xl hover:shadow-md transition mb-8 bg-[#FFFDF5] cursor-pointer">
        <div className="flex items-center space-x-6">
          <div className="bg-[#5C6F5F] text-white w-[120px] aspect-square p-2 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-lg font-medium">
              {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
            </h1>
            <h1 className="text-4xl font-bold">
              {new Date(event.date).getDate()}
            </h1>
            <p className="text-sm mt-1">6–7 PM</p>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-black">{event.title}</h1>
            <h3 className="text-base font-semibold text-black uppercase tracking-wide mt-1">
              {event.address}
            </h3>
            <p className="mt-2 text-black">{preview}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
