import { CommunityEvent } from '@/types/event';

const generateSlug = (title: string): string =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const rawEvents: Omit<CommunityEvent, 'slug'>[] = [
  {
    title: 'HVAC Donation Drive',
    date: '2025-06-20',
    description:
      'We donated HVAC units to underserved communities to improve indoor air quality and comfort. Volunteers helped install the systems and educated residents about maintenance and energy savings. This event was a collaborative effort with local non-profits and community leaders. The goal was to ensure that every household had access to reliable and efficient HVAC systems, reducing health risks associated with poor air quality. The event also included a community lunch and a panel discussion on the importance of sustainable living.',
    address: '123 Main St, Lakewood, CO',
  },
  {
    title: 'Green Homes Workshop',
    date: '2024-10-10',
    description:
      'Our team hosted a workshop on energy-efficient heating and cooling systems. Attendees learned about HVAC upgrades, government rebates, and sustainable building practices. The workshop included hands-on demonstrations and Q&A sessions with industry experts. Participants were also provided with informational brochures, access to online resources, and a checklist for improving energy efficiency in their homes. The event concluded with a networking session where attendees could connect with local contractors and sustainability advocates.',
    address: '456 Elm St, Lakewood, CO',
  },
  {
    title: 'Community Cooling Initiative',
    date: '2025-08-15',
    description:
      'A program to provide free cooling solutions to senior citizens during the summer. The event included free consultations and installation of energy-efficient cooling systems. Local HVAC professionals volunteered their time to support this initiative. Additionally, the program featured educational sessions on staying cool during heatwaves, tips for reducing energy consumption, and the importance of regular HVAC maintenance. The initiative aimed to protect vulnerable populations from extreme heat while promoting community engagement and support.',
    address: '789 Pine St, Lakewood, CO',
  },
  {
    title: 'Winter Warmth Campaign',
    date: '2024-12-05',
    description:
      'An initiative to distribute portable heaters and educate residents on safe heating practices during the winter months. The campaign also provided free safety inspections for existing heating systems. Attendees received guidance on reducing heating costs, preventing carbon monoxide poisoning, and improving insulation in their homes. The event featured a live demonstration on how to properly use portable heaters and included a giveaway of winter care packages containing blankets, gloves, and other essentials.',
    address: '321 Oak St, Lakewood, CO',
  },
  {
    title: 'Energy Efficiency Fair',
    date: '2025-03-22',
    description:
      'A fair showcasing the latest in energy-efficient HVAC technologies, with live demonstrations, expert talks, and vendor booths. Attendees had the opportunity to learn about cost-saving solutions and meet with local service providers. The event also featured interactive exhibits, workshops on DIY energy-saving projects, and a panel discussion on the future of sustainable HVAC systems. Families enjoyed kid-friendly activities, including a scavenger hunt focused on energy efficiency, making it a fun and educational experience for all ages.',
    address: '654 Maple St, Lakewood, CO',
  },
];

const events: CommunityEvent[] = rawEvents.map(event => ({
  ...event,
  slug: generateSlug(event.title),
}));

export const getCommunityEvents = async (): Promise<CommunityEvent[]> => {
  return events;
};

export const getEventBySlug = async (slug: string): Promise<CommunityEvent | null> => {
  console.log('Fetching event by slug:', slug);
  const result = events.find(e => e.slug === slug);
  console.log('Found:', result?.title);
  return result || null;
};
