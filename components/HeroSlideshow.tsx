"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/optimized/new-farm.webp',
    alt: 'Planned farm-style plots with green landscape',
    kicker: 'PHASE 1 | 12 ACRES',
    title: 'Farm-Style Plots Crafted for Living.',
    desc: 'Low-density planning with practical land structuring for buyers who want usable farmland and future growth potential.'
  },
  {
    src: '/new-farm3.webp',
    alt: 'Connected farmland location near growth corridors',
    kicker: 'STRONG CONNECTIVITY',
    title: 'Own Land With Better Access.',
    desc: 'Well-positioned near key mobility corridors with planned internal roads that keep every plot easy to reach and maintain.'
  }
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="neo-hero-bg">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={72}
            className={`hero-slide ${i === index ? 'is-active' : ''}`}
          />
        ))}
      </div>
      <div className="neo-overlay" />
      <div className="section-wrap relative z-10 flex min-h-screen items-center py-28">
        <div key={slides[index].src} className="hero-copy hero-copy-enter max-w-3xl">
          <p className="kicker">{slides[index].kicker}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">{slides[index].title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">{slides[index].desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#showcase" className="field-cta-primary">See New Gallery</a>
            <a href="#contact" className="field-cta-secondary">Book Site Visit</a>
          </div>
        </div>
      </div>
    </>
  );
}
