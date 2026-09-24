export interface ServiceItem {
  id: string;
  title: string;
  seoTitle: string;
  desc: string;
  icon: 'car' | 'bike' | 'truck' | 'shield' | 'disc' | 'battery' | 'fuel' | 'siren';
  msg: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
  icon: 'clock' | 'zap' | 'users' | 'map-pin' | 'tag' | 'shield-check';
}

export interface TestimonialItem {
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  cnpj: string;
  city: string;
  state: string;
  region: string;
  phone: string;
  phoneTel: string;
  whatsappNumber: string;
  logoUrl: string;
  heroBgUrl: string;
  whyUsImgUrl: string;
  coverageImgUrl: string;
  ratingValue: string;
  reviewsCount: string;
}
