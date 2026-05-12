"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/Mango-farm.jpg',
    alt: 'Mango farm landscape',
    kicker: 'MANGO FARMLAND',
    title: 'Mango Groves Crafted for Long-Term Value.',
    desc: 'Plan your space around premium mango cultivation with practical infrastructure and future-ready plot access.'
  },
  {
    src: '/guava_farm2.jpg',
    alt: 'Guava farm view',
    kicker: 'GUAVA PLANTATION',
    title: 'Guava Plots Designed for Productive Living.',
    desc: 'A green, low-density layout where guava cultivation meets clean land planning and smooth internal connectivity.'
  },
  {
    src: '/papamango-farm.webp',
    alt: 'Papaya and mango mixed farm',
    kicker: 'MIXED CROP ZONE',
    title: 'Diversified Farming Backed by Modern Layout.',
    desc: 'From papaya to mango, build a flexible farm vision in a location aligned with growth, utility, and access.'
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
            className={`hero-slide ${i === index ? 'is-active' : ''}`}
          />
        ))}
      </div>
      <div className="neo-overlay" />
      <div className="section-wrap relative z-10 flex min-h-screen items-center py-28">
        <div className="hero-copy max-w-3xl">
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

