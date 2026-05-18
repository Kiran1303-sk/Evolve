import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://evolveplots.com'),
  title: 'Evolve By Dsquare',
  description: 'Premium farm-style open plots with plantation living. Explore EVOLVE and book your site visit.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
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
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

