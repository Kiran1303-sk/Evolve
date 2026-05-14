"use client";

import { useState } from 'react';
import Link from 'next/link';
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#C8A96B]/35 bg-[#F8F5EF]/95 backdrop-blur-xl shadow-[0_10px_26px_rgba(31,77,58,0.10)]">
      <nav className="section-wrap flex h-16 items-center justify-between md:h-20">
        <Link href="#home" className="logo-gradient-wrap relative h-16 w-60 overflow-hidden md:h-20 md:w-72" onClick={() => setOpen(false)}>
          <span className="sr-only">EVOLVE by DSQUARE logo</span>
          <span aria-hidden="true" className="logo-gradient-mark" />
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
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8A96B]/45 text-[#1F4D3A] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-wrap border-t border-[#C8A96B]/30 py-3 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#C8A96B]/20 py-2 text-sm font-semibold text-[#1F4D3A]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
