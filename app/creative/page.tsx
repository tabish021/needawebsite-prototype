import type { Metadata } from 'next';
import Button from '@/components/Button';
import Section from '@/components/Section';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Creative Web Design & Interactive Experiences | NeedAWebsite',
  description: 'Creative web design, 3D web experiences, and high-impact digital craft for forward-thinking brands in India.',
  alternates: {
    canonical: 'https://needawebsite.in/creative',
  },
};

export default function CreativePage() {
  return (
    <div className="min-h-screen">
      <Section eyebrow="PORTFOLIO & CRAFT" title="Creative Web Experiences" bg="white">
        <p className="max-w-2xl text-lg text-[#52525B] dark:text-zinc-400 leading-relaxed mb-8">
          Crafting memorable web interactions, fluid motion, and bespoke design that make businesses stand out in an AI-driven digital world.
        </p>

        <div className="p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/40 text-center max-w-2xl mx-auto my-12">
          <Sparkles className="w-8 h-8 text-brand mx-auto mb-3" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Creative Showcase Coming Soon</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            We are curating interactive design case studies, generative experiments, and creative motion samples.
          </p>
          <Button variant="primary" href="/contact">
            <span>Discuss a Creative Project</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>
    </div>
  );
}
