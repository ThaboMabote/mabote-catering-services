export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  allergens?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    type: 'per_person' | 'flat_rate' | 'custom';
    amount?: number;
    currency: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  specialties: string[];
}
