import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Waves } from '@/components/ui/wave-background';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Creative Web Experiences | NeedAWebsite',
  description: "Websites that don't just work. They wow. Interactive, custom-coded experiences.",
  alternates: {
    canonical: 'https://needawebsite.in/creative',
  },
  openGraph: {
    title: 'Creative Web Experiences | NeedAWebsite',
    description: "Websites that don't just work. They wow.",
    url: 'https://needawebsite.in/creative',
    type: 'website',
    siteName: 'NeedAWebsite',
  },
};

export default function CreativePage() {
  return (
    <div className="dark bg-black min-h-screen text-white">
      <SmoothScroll />

      {/* Waves Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Waves backgroundColor="#000000" strokeColor="#FFFFFF" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex items-center justify-center pointer-events-none">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center tracking-tight leading-[1.08] select-none">
            Websites That Don't Just Work. They Wow.
          </h1>
        </div>
      </section>

      {/* Interactive Playground Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Interactive Playground
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Melli 3D Artistry */}
          <Link
            href="/creative/melli"
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-white/30 transition-all duration-300 block"
          >
            {/* Subtle purple-to-black gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-zinc-900/80 to-black transition-transform duration-500 group-hover:scale-105" />

            {/* Glowing ambient light */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/35 transition-colors" />

            {/* Overlay with title and subtitle */}
            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-xl">Melli 3D Artistry</h3>
                <p className="text-zinc-400 text-sm mt-0.5">3D Scroll & WebGL</p>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <span>View Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Placeholder Cards */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="relative aspect-video rounded-2xl border border-white/10 bg-zinc-900/50 flex items-center justify-center p-6 text-center"
            >
              <span className="text-zinc-600 font-medium text-sm tracking-wide">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
