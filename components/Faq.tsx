import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqProps {
  items: FaqItem[];
  className?: string;
}

export default function Faq({ items, className = '' }: FaqProps) {
  return (
    <div className={`divide-y divide-[#E5E7EB] dark:divide-zinc-800 border-y border-[#E5E7EB] dark:border-zinc-800 ${className}`.trim()}>
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[#0A0A0A] dark:text-zinc-100 py-5 hover:text-brand dark:hover:text-emerald-400 transition-colors [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <ChevronDown className="w-5 h-5 text-brand dark:text-emerald-400 transition-transform group-open:rotate-180 flex-shrink-0" />
          </summary>
          <div className="pb-5 text-[#52525B] dark:text-zinc-400 leading-relaxed pt-1">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
