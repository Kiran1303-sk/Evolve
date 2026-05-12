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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#26462d]/20 bg-[#f5f1e7]/90 backdrop-blur-md">
      <nav className="section-wrap flex h-16 items-center md:h-20">
        <Link href="#home" className="relative h-10 w-36 overflow-hidden md:h-11 md:w-44" onClick={() => setOpen(false)}>
          <Image
            src="/images/evolve-logo-trimmed.png"
            alt="EVOLVE by DSQUARE logo"
            fill
            sizes="(max-width: 768px) 144px, 176px"
            className="object-contain object-left"
          />
        </Link>

        <div className="ml-10 hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="field-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#26462d]/20 text-[#26462d] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-wrap border-t border-[#26462d]/15 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#26462d]/10 py-2 text-sm font-semibold text-[#26462d]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
