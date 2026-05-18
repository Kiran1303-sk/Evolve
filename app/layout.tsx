/* eslint-disable @next/next/no-page-custom-font */
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

