import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evolveplots.com'),
  title: 'Evolve By Dsquare',
  description: 'Premium farm-style open plots with plantation living. Explore EVOLVE and book your site visit.',
  icons: {
    icon: '/single-logo.png',
    shortcut: '/single-logo.png',
    apple: '/single-logo.png'
  },
  openGraph: {
    title: 'Evolve By Dsquare',
    description: 'Cinematic real estate experience for mindful land ownership and long-term investment.',
    images: ['/images/hero-farm.webp'],
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

