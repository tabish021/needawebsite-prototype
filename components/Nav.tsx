'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#121215]/80 backdrop-blur-md border-b border-[#E5E7EB] dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand with green dot */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 flex items-center py-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-brand mr-2" />
          NeedAWebsite
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors py-2 ${
                  active
                    ? 'text-brand dark:text-emerald-400 font-medium'
                    : 'font-medium text-[#52525B] dark:text-zinc-400 hover:text-[#0A0A0A] dark:hover:text-zinc-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <ThemeToggle />

          <Button
            variant="primary"
            href="/contact"
            className="!px-5 !py-2.5 !min-h-[44px] text-sm shadow-none hover:shadow-sm"
          >
            Get a Free Quote
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="min-h-[40px] px-3.5 py-1.5 bg-brand hover:bg-brand-dark text-white text-xs font-semibold rounded-md inline-flex items-center justify-center transition-colors shadow-sm"
          >
            Get Quote
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="min-h-[44px] min-w-[44px] p-2 text-[#0A0A0A] dark:text-zinc-100 hover:text-brand dark:hover:text-emerald-400 inline-flex items-center justify-center rounded-md border border-[#E5E7EB] dark:border-zinc-700 bg-white dark:bg-zinc-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel with max-height transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#E5E7EB] dark:border-zinc-800 bg-white dark:bg-[#121215] ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <div className="px-5 py-4 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center min-h-[44px] px-3 py-2 text-base rounded-md transition-colors ${
              pathname === '/'
                ? 'text-brand dark:text-emerald-400 font-medium bg-brand-light dark:bg-brand-deep/30'
                : 'text-[#0A0A0A] dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-800/60'
            }`}
          >
            Home
          </Link>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center min-h-[44px] px-3 py-2 text-base rounded-md transition-colors ${
                  active
                    ? 'text-brand dark:text-emerald-400 font-medium bg-brand-light dark:bg-brand-deep/30'
                    : 'text-[#0A0A0A] dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-800/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Button
              variant="primary"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-sm"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
