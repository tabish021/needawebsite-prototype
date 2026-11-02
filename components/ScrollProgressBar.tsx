'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgressBar() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const springScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const scaleX = shouldReduceMotion ? scrollYProgress : springScaleX;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] pointer-events-none bg-transparent"
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-brand via-emerald-500 to-emerald-400 dark:from-emerald-500 dark:to-emerald-300 origin-left shadow-[0_0_8px_rgba(22,163,74,0.4)]"
        style={{ scaleX }}
      />
    </div>
  );
}
