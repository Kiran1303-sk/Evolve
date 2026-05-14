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
  title: 'evolve by dsquare',
  description: 'Premium farm-style open plots with plantation living. Explore EVOLVE and book your site visit.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'evolve by dsquare',
    description: 'Cinematic real estate experience for mindful land ownership and long-term investment.',
    images: ['/images/hero-farm.png'],
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

