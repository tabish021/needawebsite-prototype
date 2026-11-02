'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import FullScreenNav from './FullScreenNav';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <Button
              variant="primary"
              href="/contact"
              className="!px-3.5 sm:!px-4 !py-2 !min-h-[40px] text-xs sm:text-sm shadow-none hover:shadow-sm"
            >
              Get a Free Quote
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open full screen navigation menu"
              aria-expanded={menuOpen}
              className="min-h-[44px] min-w-[44px] px-3 sm:px-3.5 py-2 text-[#0A0A0A] dark:text-zinc-100 hover:text-brand dark:hover:text-emerald-400 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-md border border-[#E5E7EB] dark:border-zinc-700 bg-white dark:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full screen curtain navigation */}
      <FullScreenNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
