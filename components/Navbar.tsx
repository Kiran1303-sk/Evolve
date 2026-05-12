"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#story', label: 'Story' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#features', label: 'Features' },
  { href: '#master-plan', label: 'Master Plan' },
  { href: '#connectivity', label: 'Connectivity' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-wrap pt-4">
        <div className="farm-nav flex items-center rounded-full px-4 py-2 md:px-5 md:py-2.5">
          <Link href="#home" className="relative h-10 w-36 overflow-hidden md:h-11 md:w-44" onClick={() => setOpen(false)}>
            <Image
              src="/images/evolve-logo-trimmed.png"
              alt="EVOLVE by DSQUARE logo"
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-contain object-left"
            />
          </Link>

          <div className="ml-8 hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="farm-nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-sand lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="farm-nav-mobile mt-3 rounded-2xl p-3 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-sand/90 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
