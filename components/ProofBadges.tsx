'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiJavascript,
} from 'react-icons/si';

const badges = [
  { name: 'React', icon: SiReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Lenis.js', icon: SiJavascript },
];

export default function ProofBadges() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.08,
            delayChildren: 0.12,
          },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          scale: 0.7,
          y: 8,
        },
    visible: shouldReduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 350,
            damping: 22,
          },
        },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mt-4 flex flex-wrap gap-2"
    >
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <motion.span
            key={badge.name}
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FAFAFA] dark:bg-zinc-800/80 border border-[#E5E7EB] dark:border-zinc-700 px-3 py-1 text-xs font-medium text-[#52525B] dark:text-zinc-300"
          >
            <Icon className="w-3.5 h-3.5" />
            {badge.name}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
