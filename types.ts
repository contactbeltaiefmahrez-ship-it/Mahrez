
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  status?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Health' | 'Behavior' | 'Safety' | 'Community';
  excerpt: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string | string[];
  category: 'Générales' | 'Produits' | 'Commandes';
}
