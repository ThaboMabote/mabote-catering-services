import { MenuItem, Service, Testimonial, TeamMember, EquipmentItem } from '../types';

export const equipmentItems: EquipmentItem[] = [
  {
    id: '1',
    name: 'Chiavari Chair',
    description: 'Elegant gold or silver chiavari chairs perfect for weddings and formal events',
    pricePerDay: 25,
    category: 'Chairs',
    image: '/images/chiavari-chair.jpg',
    quantity: 200,
    dimensions: '40cm W x 40cm D x 92cm H',
    material: 'Aluminum',
    color: 'Gold/Silver'
  },
  {
    id: '2',
    name: 'Round Table (10 Seater)',
    description: 'Classic round tables perfect for intimate dining and conversations',
    pricePerDay: 85,
    category: 'Tables',
    image: '/images/round-table.jpg',
    quantity: 50,
    dimensions: '180cm diameter',
    material: 'Wood',
    color: 'Natural'
  },
  {
    id: '3',
    name: 'Premium Table Linen',
    description: 'High-quality table linens in various colors to match your event theme',
    pricePerDay: 15,
    category: 'Linens',
    image: '/images/table-linen.jpg',
    quantity: 300,
    dimensions: 'Various sizes',
    material: '100% Cotton',
    color: 'White/Ivory/Colors'
  },
  {
    id: '4',
    name: 'Plastic Chair (White)',
    description: 'Comfortable white plastic chairs ideal for outdoor events and casual gatherings',
    pricePerDay: 8,
    category: 'Chairs',
    image: '/images/plastic-chair.jpg',
    quantity: 500,
    dimensions: '45cm W x 45cm D x 80cm H',
    material: 'High-grade Plastic',
    color: 'White'
  },
  {
    id: '5',
    name: 'Rectangular Table (8 Seater)',
    description: 'Versatile rectangular tables perfect for banquet-style seating',
    pricePerDay: 65,
    category: 'Tables',
    image: '/images/rectangular-table.jpg',
    quantity: 75,
    dimensions: '240cm L x 75cm W x 75cm H',
    material: 'Wood',
    color: 'Natural'
  },
  {
    id: '6',
    name: 'Wedding Arch',
    description: 'Beautiful decorative arch perfect for wedding ceremonies and photo backdrops',
    pricePerDay: 150,
    category: 'Decor',
    image: '/images/wedding-arch.jpg',
    quantity: 10,
    dimensions: '250cm W x 250cm H',
    material: 'Metal/Wood',
    color: 'White/Natural'
  },
  {
    id: '7',
    name: 'Cocktail Table',
    description: 'High cocktail tables perfect for standing receptions and networking events',
    pricePerDay: 45,
    category: 'Tables',
    image: '/images/cocktail-table.jpg',
    quantity: 30,
    dimensions: '60cm diameter x 110cm H',
    material: 'Wood',
    color: 'Natural'
  },
  {
    id: '8',
    name: 'Tent (6x6m)',
    description: 'Weather-resistant tents for outdoor events and celebrations',
    pricePerDay: 450,
    category: 'Tents',
    image: '/images/tent-6x6.jpg',
    quantity: 15,
    dimensions: '6m x 6m',
    material: 'Waterproof Canvas',
    color: 'White'
  }
];

export const menuItems: MenuItem[] = [
  // Food items removed as business focuses on equipment rental
  // Keeping empty array for compatibility with existing code
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Corporate Events',
    description: 'Professional event equipment rental for business meetings, conferences, and corporate gatherings',
    icon: 'briefcase',
    features: [
      'Conference tables and chairs',
      'Audio visual equipment stands',
      'Lecterns and presentation tables',
      'Professional linens and covers',
      'Setup and breakdown service'
    ],
    pricing: {
      type: 'flat_rate',
      amount: 1500,
      currency: 'ZAR'
    }
  },
  {
    id: '2',
    title: 'Wedding Equipment',
    description: 'Complete equipment rental for beautiful wedding ceremonies and receptions',
    icon: 'heart',
    features: [
      'Elegant chiavari chairs',
      'Round and rectangular tables',
      'Premium table linens',
      'Wedding arches and backdrops',
      'Dance floor installation'
    ],
    pricing: {
      type: 'per_person',
      amount: 85,
      currency: 'ZAR'
    }
  },
  {
    id: '3',
    title: 'Party & Celebration Equipment',
    description: 'Everything you need for birthdays, anniversaries, and special celebrations',
    icon: 'users',
    features: [
      'Plastic and wooden chairs',
      'Folding tables various sizes',
      'Colorful tablecloths and runners',
      'Tent and marquee options',
      'Party lighting equipment'
    ],
    pricing: {
      type: 'per_person',
      amount: 45,
      currency: 'ZAR'
    }
  },
  {
    id: '4',
    title: 'Traditional & Cultural Events',
    description: 'Equipment rental for traditional ceremonies, church events, and community gatherings',
    icon: 'flag',
    features: [
      'Traditional seating arrangements',
      'Cultural ceremony setups',
      'Community hall equipment',
      'Religious event furnishings',
      'Cultural decor accessories'
    ],
    pricing: {
      type: 'per_person',
      amount: 55,
      currency: 'ZAR'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Thandiwe Mthembu',
    event: 'Traditional Wedding',
    rating: 5,
    comment: 'Mabote Equipment Rental made our wedding absolutely perfect. The chiavari chairs and elegant linens transformed our venue. Professional setup and breakdown service!',
    date: '2024-01-15',
    image: '/images/testimonial-1.jpg'
  },
  {
    id: '2',
    name: 'Pieter van der Merwe',
    event: 'Corporate Conference',
    rating: 5,
    comment: 'Outstanding equipment rental service for our company conference. The tables, chairs, and AV stands were top quality. Very professional team!',
    date: '2024-02-03',
    image: '/images/testimonial-2.jpg'
  },
  {
    id: '3',
    name: 'Fatima Patel',
    event: 'Community Celebration',
    rating: 5,
    comment: 'They provided all the equipment for our community Heritage Day event. The tent, tables, and seating arrangements were perfect for 200+ guests!',
    date: '2024-01-28',
    image: '/images/testimonial-3.jpg'
  },
  {
    id: '4',
    name: 'Sipho Ndaba',
    event: 'Birthday Party',
    rating: 5,
    comment: 'Amazing service for my father\'s 60th birthday party. The tables, chairs, and tent made our backyard celebration look professional. Highly recommended!',
    date: '2024-02-10',
    image: '/images/testimonial-4.jpg'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Nomsa Mabote',
    position: 'Founder & Operations Manager',
    bio: 'Born in Limpopo, Nomsa founded Mabote Equipment Rental to provide quality event equipment across South Africa. Her attention to detail ensures every event is perfectly equipped.',
    image: '/images/nomsa-mabote.jpg',
    specialties: ['Event Planning', 'Equipment Logistics', 'Customer Service', 'Quality Control']
  },
  {
    id: '2',
    name: 'Thabo Mokwena',
    position: 'Logistics & Setup Manager',
    bio: 'Thabo manages all equipment delivery, setup, and breakdown operations. His efficient team ensures your event equipment is ready when you need it.',
    image: '/images/thabo-mokwena.jpg',
    specialties: ['Equipment Setup', 'Logistics Management', 'Team Coordination', 'Problem Solving']
  },
  {
    id: '3',
    name: 'Aisha Samodien',
    position: 'Wedding & Events Specialist',
    bio: 'From Cape Town, Aisha specializes in wedding and special event equipment. She helps clients choose the perfect pieces to match their vision and style.',
    image: '/images/aisha-samodien.jpg',
    specialties: ['Wedding Planning', 'Equipment Styling', 'Color Coordination', 'Client Consultation']
  },
  {
    id: '4',
    name: 'Johan Steyn',
    position: 'Equipment Maintenance & Quality Manager',
    bio: 'Johan ensures all equipment is in pristine condition and ready for every event. His background in manufacturing brings quality control expertise.',
    image: '/images/johan-steyn.jpg',
    specialties: ['Equipment Maintenance', 'Quality Assurance', 'Inventory Management', 'Technical Support']
  }
];
