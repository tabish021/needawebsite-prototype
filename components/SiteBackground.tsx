'use client';

import React from 'react';

export default function SiteBackground() {
  // Generate an array of 15 lines for each side
  const lines = Array.from({ length: 15 });

  return (
    // The main wrapper: fixed, behind everything, hidden in dark mode
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden dark:hidden bg-[#FAFAFA]">
      
      {/* Soft Green Gradient Glows on the left and right */}
      <div className="absolute top-0 -left-[20%] w-[50%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#dcfce7]/50 via-[#f0fdf4]/30 to-transparent blur-3xl opacity-60" />
      <div className="absolute bottom-0 -right-[20%] w-[50%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bbf7d0]/40 via-[#f0fdf4]/20 to-transparent blur-3xl opacity-60" />

      {/* LEFT SIDE LINES */}
      <div className="absolute top-0 left-0 h-full w-1/3 flex flex-col justify-center overflow-hidden">
        {lines.map((_, i) => (
          <div
            key={`left-${i}`}
            className="absolute left-0 border-r-[2.5px] border-[#16A34A]/20 rounded-r-full animate-line-pulse"
            style={{
              width: `${60 + i * 15}px`,
              height: '120%', // Make them tall so they curve off-screen
              top: '-10%',
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* RIGHT SIDE LINES */}
      <div className="absolute top-0 right-0 h-full w-1/3 flex flex-col justify-center overflow-hidden">
        {lines.map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute right-0 border-l-[2.5px] border-[#16A34A]/20 rounded-l-full animate-line-pulse"
            style={{
              width: `${60 + i * 15}px`,
              height: '120%',
              top: '-10%',
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* A very subtle dotted grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#16A34A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
        }}
      />
    </div>
  );
}
