export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  address: string;
  imageUrl?: string;
}

const events: CommunityEvent[] = [
  {
    id: '1',
    title: 'HVAC Donation Drive',
    date: '2025-06-20',
    description: 'Join us for our annual HVAC Donation Drive where we collect gently used HVAC equipment for families in need. Enjoy refreshments and meet our team! This event is a great opportunity to give back to the community and help those who may not have access to reliable heating and cooling. Our technicians will be on hand to answer questions about HVAC maintenance and energy efficiency. All donated equipment will be inspected and refurbished before being distributed to local families.',
    address: '123 Main St, Lakewood, CO',
    imageUrl: '/images/hvac.jpg',
  },
  {
    id: '2',
    title: 'Community BBQ & Open House',
    date: '2025-07-15',
    description: 'Bring your family and friends to our community BBQ! Tour our facility, meet our technicians, and learn about energy-efficient HVAC solutions. Enjoy delicious food, fun games for kids, and a chance to win exciting prizes. Our team will provide demonstrations on the latest HVAC technology and answer any questions you may have about improving your home’s comfort. Don’t miss this fun-filled day designed to bring neighbors together!',
    address: '456 Oak Ave, Lakewood, CO',
    imageUrl: '/images/bbq.jpg',
  },
  {
    id: '3',
    title: 'Free HVAC Inspection Day',
    date: '2025-08-10',
    description: 'We are offering free HVAC inspections for all Lakewood residents. Book your slot in advance and ensure your system is ready for the season. Our certified technicians will perform a comprehensive check of your heating and cooling systems, provide maintenance tips, and recommend any necessary repairs. This is a perfect opportunity to catch potential issues early and keep your home comfortable year-round. Light refreshments will be served during the event.',
    address: '789 Pine Rd, Lakewood, CO',
    imageUrl: '/images/inspection.jpg',
  },
  {
    id: '4',
    title: 'Winter Prep Workshop',
    date: '2025-09-05',
    description: 'Learn how to prepare your home for winter with our expert-led workshop. Tips, Q&A, and free giveaways for attendees! Our specialists will cover essential topics such as insulating your home, maintaining your furnace, and optimizing energy usage during colder months. Attendees will receive a complimentary winter prep checklist and have the chance to ask questions specific to their homes. Refreshments and workshop materials will be provided.',
    address: '321 Maple St, Lakewood, CO',
    imageUrl: '/images/workshop.jpg',
  },
  {
    id: '5',
    title: 'Customer Appreciation Day',
    date: '2025-10-12',
    description: 'A special day to thank our loyal customers! Enjoy snacks, games, and exclusive discounts on HVAC services. We’ll have fun activities for all ages, including a raffle with great prizes and interactive demonstrations of our latest products. Our staff will be available to discuss your HVAC needs and offer personalized recommendations. It’s our way of saying thank you for trusting us with your home comfort.',
    address: '654 Cedar Blvd, Lakewood, CO',
    imageUrl: '/images/appreciation.jpg',
  },
  {
    id: '6',
    title: 'Spring HVAC Tune-Up Event',
    date: '2025-04-18',
    description: 'Get your HVAC system ready for the warmer months! Free consultations, special discounts, and refreshments provided. Our experienced technicians will offer on-site tune-ups, answer your questions about system upgrades, and share tips for maximizing efficiency. Attendees can take advantage of exclusive event-only offers and enter to win a free smart thermostat. Don’t miss this chance to prepare your home for spring and summer comfort.',
    address: '100 Spring Ln, Lakewood, CO',
    imageUrl: '/images/spring-tuneup.jpg',
  },
];

export const getCommunityEvents = async (): Promise<CommunityEvent[]> => events;
