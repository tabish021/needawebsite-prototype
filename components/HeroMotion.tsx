'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroMotion({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

