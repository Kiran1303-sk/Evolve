"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#features', label: 'Features' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="section-wrap mt-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-1.5 md:px-6 md:py-2">
          <Link href="#" className="relative -ml-1 h-10 w-40 overflow-hidden md:h-12 md:w-48">
            <Image
              src="/images/evolve-logo-trimmed.png"
              alt="EVOLVE by DSQUARE logo"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]"
            />
          </Link>
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-sand/80 transition hover:text-sand">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        {open && (
          <div className="glass mt-2 rounded-2xl p-4 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-sand/80">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
