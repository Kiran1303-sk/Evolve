'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#vision', label: 'Vision' },
  { href: '#features', label: 'Features' },
  { href: '#land-experience', label: 'Land' },
  { href: '#investment', label: 'Investment' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#C8A96B]/25 bg-[#0F0F0F] backdrop-blur-2xl shadow-[0_18px_44px_rgba(0,0,0,0.22)]">
      <nav className="section-wrap flex h-16 items-center justify-between sm:h-[4.75rem] md:h-[4.75rem]">
        <Link
          href="#home"
          className="logo-image-wrap relative h-11 w-40 sm:h-14 sm:w-56 md:h-14 md:w-56"
          onClick={() => setOpen(false)}
        >
          <span className="sr-only">EVOLVE by DSQUARE logo</span>
          <Image
            src="/optimized/new-logo.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 10rem, 14rem"
            quality={80}
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-5 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="field-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/45 text-[#F5F1E8] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-wrap border-t border-[#C8A96B]/25 bg-[#0F0F0F]/88 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#C8A96B]/15 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#F5F1E8]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
