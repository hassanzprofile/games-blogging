export type NavSection = 'home' | 'products' | 'blog' | 'about' | 'reviews' | 'contact';

export interface GameReview {
  id: string;
  userName: string;
  userAvatar: string;
  gamerTag: string;
  rating: number; // 1 to 5
  date: string;
  title: string;
  comment: string;
  helpfulCount: number;
  isVerifiedGamer: boolean;
  platformPlayed: 'Mobile' | 'PC' | 'Console';
}

export interface GameProduct {
  id: string;
  title: string;
  slug: string;
  genre: 'Battle Royale' | 'FPS / Shooter' | 'RPG / MMORPG' | 'Action' | 'Strategy' | 'MOBA' | 'Sci-Fi';
  tagline: string;
  description: string;
  longDescription: string;
  rating: number; // 0 to 5 e.g. 4.8
  totalRatingsCount: number;
  downloadsCount: string; // e.g. "50M+"
  downloadsExact: number;
  releaseYear: string;
  developer: string;
  publisher: string;
  playStoreUrl: string;
  posterImage: string;
  heroBanner: string;
  screenshots: string[]; // Must contain exactly 5 high quality images
  tags: string[];
  features: string[];
  systemRequirements: {
    os: string;
    ram: string;
    storage: string;
    graphics: string;
  };
  reviews: GameReview[];
  heroInteractiveType: 'cyber_weapon' | '3d_hologram' | 'particle_core' | 'energy_radar' | 'stat_wheel';
  themeColor: string; // e.g. '#00f0ff'
  featuredScore: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: 'Guides' | 'Esports' | 'Game Updates' | 'Tier Lists' | 'News';
  image: string;
  tags: string[];
}

export interface GlobalReview {
  id: string;
  gameId: string;
  gameTitle: string;
  userName: string;
  userAvatar: string;
  gamerTag: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
