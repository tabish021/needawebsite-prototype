import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'dark';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-emerald-400 justify-center text-center select-none';

  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses =
      'bg-brand hover:bg-brand-dark text-white font-semibold rounded-md px-6 py-3 inline-flex items-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md';
  } else if (variant === 'ghost') {
    variantClasses =
      'border border-[#D4D4D8] dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-[#FAFAFA] dark:hover:bg-zinc-800 text-[#0A0A0A] dark:text-zinc-100 font-medium rounded-md px-6 py-3 inline-flex items-center gap-2 transition-all hover:-translate-y-0.5';
  } else if (variant === 'dark') {
    variantClasses =
      'border border-white/20 hover:bg-white/10 text-white rounded-md px-6 py-3 inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 dark:bg-zinc-800 dark:hover:bg-zinc-700';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
