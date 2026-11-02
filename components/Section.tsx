'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface SectionProps {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  bg?: 'white' | 'grey';
  className?: string;
  id?: string;
}

export default function Section({
  eyebrow,
  title,
  children,
  bg = 'white',
  className = '',
  id,
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const bgClass =
    bg === 'grey'
      ? 'bg-[#FAFAFA] dark:bg-[#0E0E10]'
      : 'bg-white dark:bg-[#121215]';

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-28 ${bgClass} transition-colors duration-200 ${className}`.trim()}
      id={id}
    >
      <div
        className={`max-w-[1100px] mx-auto px-5 sm:px-6 transition-all duration-700 ease-out transform motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand dark:text-emerald-400 mb-3 block">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 mb-10 text-balance">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

