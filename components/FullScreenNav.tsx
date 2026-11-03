'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FullScreenNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { heading: 'Home', href: '/' },
  { heading: 'Services', href: '/services' },
  { heading: 'Creative', href: '/creative' },
  { heading: 'About', href: '/about' },
  { heading: 'Contact', href: '/contact' },
];

function NavLink({
  heading,
  href,
  onClick,
}: {
  heading: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center border-b border-[#E5E7EB] dark:border-white/10 py-4 md:py-6"
    >
      <Link href={href} onClick={onClick} className="block w-full">
        <motion.span
          variants={{ initial: { x: 0 }, whileHover: { x: -16 } }}
          transition={{ type: 'spring', staggerChildren: 0.05, delayChildren: 0.1 }}
          className="relative z-10 block text-4xl font-bold text-[#16A34A] transition-colors duration-500 group-hover:text-[#15803D] dark:group-hover:text-[#4ADE80] md:text-7xl"
        >
          {heading.split('').map((l, i) => (
            <motion.span
              variants={{ initial: { x: 0 }, whileHover: { x: 16 } }}
              transition={{ type: 'spring' }}
              className="inline-block"
              key={i}
            >
              {l === ' ' ? '\u00A0' : l}
            </motion.span>
          ))}
        </motion.span>
      </Link>
    </motion.div>
  );
}

export default function FullScreenNav({ isOpen, onClose }: FullScreenNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[100] bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white flex flex-col justify-center px-6 md:px-24"
        >
          {/* Top Bar inside Overlay */}
          <div className="absolute top-6 left-6 md:top-10 md:left-24 flex items-center">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand mr-2.5" />
            <span className="text-xl font-bold tracking-tight text-[#0A0A0A] dark:text-white">NeedAWebsite</span>
          </div>

          {/* Close button at top right */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="absolute top-6 right-6 md:top-10 md:right-24 z-20 flex items-center gap-2 p-2.5 text-[#0A0A0A] dark:text-white hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors cursor-pointer group"
          >
            <span className="text-xs uppercase tracking-widest font-semibold transition-colors hidden sm:inline-block">
              Close
            </span>
            <X className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-200 group-hover:rotate-90" />
          </button>

          {/* Nav Links */}
          <nav className="w-full max-w-4xl mx-auto flex flex-col justify-center my-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.heading}
                heading={link.heading}
                href={link.href}
                onClick={onClose}
              />
            ))}
          </nav>

          {/* Bottom info inside Overlay */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-24 text-xs md:text-sm text-[#52525B] dark:text-[#A1A1AA] flex flex-wrap items-center gap-4 md:gap-8">
            <a href="tel:+919987455707" className="hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors">
              +91 99874 55707
            </a>
            <a
              href="https://wa.me/919987455707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#16A34A] dark:hover:text-[#4ADE80] transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-[#A1A1AA] dark:text-zinc-600 hidden sm:inline">•</span>
            <span className="text-[#52525B] dark:text-[#A1A1AA]">Mumbai, India</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
