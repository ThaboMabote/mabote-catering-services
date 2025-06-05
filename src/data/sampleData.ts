import { MenuItem, Service, Testimonial, TeamMember } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Braai Platter',
    description: 'Traditional South African braai with boerewors, lamb chops, and chicken sosaties served with pap, chakalaka, and roasted vegetables',
    price: 285,
    category: 'Traditional Braai',
    image: '/images/braai-platter.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: ['gluten']
  },
  {
    id: '2',
    name: 'Cape Malay Curry Bowl',
    description: 'Aromatic Cape Malay chicken curry with fragrant basmati rice, sambals, and fresh naan bread',
    price: 195,
    category: 'Cape Malay',
    image: '/images/cape-malay-curry.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: ['gluten', 'dairy']
  },
  {
    id: '3',
    name: 'Snoek & Sweet Potato',
    description: 'West Coast snoek with roasted sweet potato, waterblommetjie bredie, and fresh herb salad',
    price: 225,
    category: 'Seafood',
    image: '/images/snoek-sweet-potato.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: ['fish']
  },
  {
    id: '4',
    name: 'Karoo Lamb Shank',
    description: 'Slow-braised Karoo lamb shank with sweet potato mash, roasted vegetables, and rosemary jus',
    price: 345,
    category: 'Premium',
    image: '/images/karoo-lamb.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: []
  },
  {
    id: '5',
    name: 'Vegan Rooibos Bowl',
    description: 'Nutritious bowl with quinoa, roasted butternut, sweet potato, baby spinach, and rooibos-infused tahini dressing',
    price: 165,
    category: 'Vegan',
    image: '/images/rooibos-bowl.jpg',
    isVegetarian: true,
    isVegan: true,
    allergens: ['sesame']
  },
  {
    id: '6',
    name: 'Bobotie with Yellow Rice',
    description: 'Traditional Cape Malay bobotie with fragrant yellow rice, sambals, and Mrs. Balls chutney',
    price: 175,
    category: 'Traditional',
    image: '/images/bobotie.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '7',
    name: 'Potjiekos Feast',
    description: 'Authentic three-legged pot stew with tender beef, vegetables, and traditional spices, served with fresh bread',
    price: 210,
    category: 'Traditional',
    image: '/images/potjiekos.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: ['gluten']
  },
  {
    id: '8',
    name: 'Kingklip & Morogo',
    description: 'Grilled kingklip with traditional morogo (African spinach), samp and beans, and lemon butter',
    price: 275,
    category: 'Seafood',
    image: '/images/kingklip-morogo.jpg',
    isVegetarian: false,
    isVegan: false,
    allergens: ['fish', 'dairy']
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Corporate Events',
    description: 'Professional catering for business meetings, conferences, and corporate gatherings across South Africa',
    icon: 'briefcase',
    features: [
      'Traditional braai setups',
      'Executive lunch meetings',
      'Conference catering',
      'Team building events',
      'Professional service staff'
    ],
    pricing: {
      type: 'per_person',
      amount: 250,
      currency: 'ZAR'
    }
  },
  {
    id: '2',
    title: 'Traditional Braais',
    description: 'Authentic South African braai experiences for your special celebrations',
    icon: 'flame',
    features: [
      'Traditional braai master service',
      'Premium meat selection',
      'Traditional sides (pap, chakalaka)',
      'Full setup and cleanup',
      'Authentic South African atmosphere'
    ],
    pricing: {
      type: 'per_person',
      amount: 185,
      currency: 'ZAR'
    }
  },
  {
    id: '3',
    title: 'Wedding & Lobola Ceremonies',
    description: 'Beautiful catering for traditional and modern South African weddings',
    icon: 'heart',
    features: [
      'Traditional & contemporary menus',
      'Umqombothi (traditional beer)',
      'Multi-cultural cuisine options',
      'Professional wedding coordination',
      'Elegant presentation and service'
    ],
    pricing: {
      type: 'per_person',
      amount: 350,
      currency: 'ZAR'
    }
  },
  {
    id: '4',
    title: 'Heritage Day Celebrations',
    description: 'Celebrate South African diversity with our multicultural catering services',
    icon: 'flag',
    features: [
      'Multi-cultural menu options',
      'Traditional dress-up service',
      'Cultural entertainment coordination',
      'Educational food presentations',
      'Community event expertise'
    ],
    pricing: {
      type: 'per_person',
      amount: 195,
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
    comment: 'Mabote Catering made our lobola and wedding ceremonies absolutely perfect. The traditional dishes were authentic and delicious. All our family from KZN were impressed!',
    date: '2024-01-15',
    image: '/images/testimonial-1.jpg'
  },
  {
    id: '2',
    name: 'Pieter van der Merwe',
    event: 'Corporate Braai',
    rating: 5,
    comment: 'Outstanding braai service for our company year-end function. The boerewors and lamb chops were perfectly done. Very professional team!',
    date: '2024-02-03',
    image: '/images/testimonial-2.jpg'
  },
  {
    id: '3',
    name: 'Fatima Patel',
    event: 'Heritage Day Celebration',
    rating: 5,
    comment: 'They catered our community Heritage Day event with dishes from all South African cultures. The Cape Malay curry was absolutely divine!',
    date: '2024-01-28',
    image: '/images/testimonial-3.jpg'
  },
  {
    id: '4',
    name: 'Sipho Ndaba',
    event: 'Company Potjiekos Competition',
    rating: 5,
    comment: 'Amazing potjiekos and traditional sides for our office competition. The team knows authentic South African flavors. Highly recommended!',
    date: '2024-02-10',
    image: '/images/testimonial-4.jpg'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Chef Nomsa Mabote',
    position: 'Executive Chef & Founder',
    bio: 'Born in Limpopo and trained in Cape Town, Chef Nomsa brings authentic South African flavors with modern techniques. She founded Mabote Catering to celebrate our rich culinary heritage.',
    image: '/images/chef-nomsa.jpg',
    specialties: ['Traditional SA Cuisine', 'Cape Malay Cooking', 'Braai Mastery', 'Heritage Menus']
  },
  {
    id: '2',
    name: 'Thabo Mokwena',
    position: 'Braai Master & Operations Manager',
    bio: 'Thabo learned the art of braai from his grandfather in the Free State. He ensures every braai is authentic and every event runs perfectly.',
    image: '/images/thabo-mokwena.jpg',
    specialties: ['Traditional Braai', 'Event Management', 'Meat Selection', 'Fire Management']
  },
  {
    id: '3',
    name: 'Aisha Samodien',
    position: 'Cape Malay Specialist',
    bio: 'From Bo-Kaap in Cape Town, Aisha brings generations of Cape Malay cooking knowledge, creating authentic curries and traditional sweets.',
    image: '/images/aisha-samodien.jpg',
    specialties: ['Cape Malay Curries', 'Traditional Desserts', 'Spice Blending', 'Cultural Authenticity']
  },
  {
    id: '4',
    name: 'Johan Steyn',
    position: 'Sous Chef & Potjie Specialist',
    bio: 'Johan specializes in traditional potjiekos and outdoor cooking. His farm background brings authentic country flavors to urban events.',
    image: '/images/johan-steyn.jpg',
    specialties: ['Potjiekos', 'Game Meat', 'Farm-to-Table', 'Outdoor Cooking']
  }
];
