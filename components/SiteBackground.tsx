'use client';

import React from 'react';

export default function SiteBackground() {
  const rings = Array.from({ length: 12 });

  return (
    // Subtle light green tint background, completely hidden in dark mode
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#F7FDF9] dark:bg-[#09090B]">
      
      <div className="absolute inset-0 dark:hidden">
        
        {/* Very subtle green ambient glow */}
        <div className="absolute top-0 left-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#dcfce7]/40 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bbf7d0]/30 via-transparent to-transparent blur-3xl opacity-60" />

        {/* LEFT SIDE CONCENTRIC CIRCLES */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
          {rings.map((_, i) => (
            <div
              key={`left-${i}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-white rounded-full animate-line-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{
                width: `${150 + i * 15}vw`, // Massive width to create a subtle curve at the edge
                height: `${150 + i * 15}vw`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* RIGHT SIDE CONCENTRIC CIRCLES */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
          {rings.map((_, i) => (
            <div
              key={`right-${i}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-white rounded-full animate-line-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{
                width: `${150 + i * 15}vw`,
                height: `${150 + i * 15}vw`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle noise/grain overlay for that premium texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
      </div>
    </div>
  );
}
