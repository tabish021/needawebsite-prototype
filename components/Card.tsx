import React from 'react';

export interface CardProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ icon, children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-xl p-8 transition-all duration-200 hover:border-brand-ring dark:hover:border-brand-dark hover:shadow-lg dark:hover:shadow-zinc-950/50 hover:-translate-y-1 ${className}`.trim()}
    >
      {icon && (
        <div className="w-10 h-10 bg-brand-light dark:bg-brand-deep/30 rounded-lg flex items-center justify-center mb-5 text-brand dark:text-emerald-400 [&>svg]:w-5 [&>svg]:h-5">
          {icon}
        </div>
      )}
      {children}
    </div>
  );
}
