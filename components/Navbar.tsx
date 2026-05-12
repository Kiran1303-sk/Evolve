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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#b8cad6]/28 bg-gradient-to-r from-[#121619]/86 via-[#1a2228]/82 to-[#141b21]/86 backdrop-blur-2xl shadow-[0_10px_26px_rgba(10,14,18,0.34)]">
      <nav className="section-wrap flex h-16 items-center justify-between md:h-20">
        <Link href="#home" className="relative h-12 w-44 overflow-hidden md:h-14 md:w-52" onClick={() => setOpen(false)}>
          <Image
            src="/images/evolve-logo-transparent.png"
            alt="EVOLVE by DSQUARE logo"
            fill
            sizes="(max-width: 768px) 176px, 208px"
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
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#a9c0cf]/45 text-[#deedf7] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-wrap border-t border-[#a9c0cf]/32 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#91a9ba]/28 py-2 text-sm font-semibold text-[#deedf7]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
