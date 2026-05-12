"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#story', label: 'Story' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#features', label: 'Features' },
  { href: '#master-plan', label: 'Master Plan' },
  { href: '#connectivity', label: 'Connectivity' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#5ea669]/26 bg-[#f7fff5] shadow-[0_6px_18px_rgba(28,69,45,0.10)]">
      <nav className="section-wrap flex h-16 items-center md:h-20">
        <Link href="#home" className="relative h-10 w-36 overflow-hidden rounded-lg bg-[#edf7ea] px-2 py-1 md:h-11 md:w-44" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo_gold2.png"
            alt="EVOLVE by DSQUARE logo"
            fill
            sizes="(max-width: 768px) 144px, 176px"
            className="object-contain object-left"
          />
        </Link>

        <div className="ml-8 hidden items-center gap-5 xl:gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="field-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#5ea669]/35 text-[#245538] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-wrap border-t border-[#5ea669]/15 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#5ea669]/10 py-2 text-sm font-semibold text-[#245538]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
