'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`w-9 h-9 rounded-md border border-[#E5E7EB] dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[#52525B] dark:text-zinc-400 inline-flex items-center justify-center transition-colors ${className}`.trim()}
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-9 h-9 rounded-md border border-[#E5E7EB] dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[#52525B] hover:text-[#0A0A0A] dark:text-zinc-400 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 inline-flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer ${className}`.trim()}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-600 transition-transform duration-200" />
      )}
    </button>
  );
}
