'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import FullScreenNav from './FullScreenNav';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isCreativeHub = pathname === '/creative';
  const isDemoPage = pathname?.startsWith('/creative/');

  // Hide the nav entirely on the sub-demo pages (though these are mostly unused now)
  if (isDemoPage) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-colors duration-200 ${
          isCreativeHub
            ? 'bg-transparent border-none text-white'
            : 'bg-white border-b border-gray-200 dark:bg-black dark:border-gray-800'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Left: Brand with green dot */}
          <Link
            href="/"
            className={`text-xl font-bold tracking-tight flex items-center py-2 ${
              isCreativeHub ? 'text-white' : 'text-black dark:text-white'
            }`}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-brand mr-2" />
            NeedAWebsite
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {!isCreativeHub && <ThemeToggle />}

            {!isCreativeHub && (
              <Button
                variant="primary"
                href="/contact"
                className="!px-3.5 sm:!px-4 !py-2 !min-h-[40px] text-xs sm:text-sm shadow-none hover:shadow-sm hidden md:inline-flex"
              >
                Get a Free Quote
              </Button>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open full screen navigation menu"
              aria-expanded={menuOpen}
              className={`min-h-[44px] min-w-[44px] px-3 sm:px-3.5 py-2 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-md border transition-colors cursor-pointer ${
                isCreativeHub
                  ? 'border-white/20 bg-black/40 text-white hover:border-white/40'
                  : 'border-[#E5E7EB] dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white hover:text-brand dark:hover:text-emerald-400'
              }`}
            >
              <Menu className={`w-5 h-5 ${isCreativeHub ? 'text-white' : 'text-black dark:text-white'}`} />
              <span
                className={`text-xs sm:text-sm font-semibold tracking-wide ${
                  isCreativeHub ? 'text-white' : 'text-black dark:text-white'
                }`}
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full screen curtain navigation */}
      <FullScreenNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
