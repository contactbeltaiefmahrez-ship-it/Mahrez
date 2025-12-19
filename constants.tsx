
import React from 'react';

export const COLORS = {
  primary: '#5D4A99', // Deep Purple from Logo
  secondary: '#F3F4F6', // Light Gray
  accent: '#F59E0B', // Warm Orange/Gold
  white: '#FFFFFF',
  dark: '#1F2937'
};

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg viewBox="0 0 500 200" className="h-full">
      {/* Simplified representation of the PETICA logo based on the provided image */}
      <path d="M50 40h60c40 0 60 25 60 55s-20 55-60 55H50V40zm60 85c25 0 35-15 35-30s-10-30-35-30H75v60h35z" fill={COLORS.primary} />
      <circle cx="105" cy="95" r="35" fill="white" />
      <path d="M105 75v10m-10 10h10m10 0h10" stroke={COLORS.primary} strokeWidth="4" />
      <circle cx="95" cy="105" r="5" fill={COLORS.primary} />
      <circle cx="115" cy="105" r="5" fill={COLORS.primary} />
      <text x="180" y="145" fontFamily="Nunito" fontSize="110" fontWeight="800" fill={COLORS.primary}>etica</text>
    </svg>
  </div>
);

export const ROUTES = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/about' },
  { name: 'Offres', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' }
];
