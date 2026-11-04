import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center transition-all duration-300 hover:border-white/30 block"
            style={{ backgroundImage: "url('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261016_130303_301c35dd-e2d1-4b40-a396-2b53f884d787.png')" }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
              <p className="text-black font-extrabold text-xl md:text-3xl tracking-tight leading-tight text-center">
                Imagine your next site built just like this
              </p>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
              <h3 className="text-white font-bold text-2xl mb-1">Melli 3D Artistry</h3>
              <p className="text-zinc-300 text-sm mb-4">3D Scroll & WebGL</p>
              <span className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
                View Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['Three.js', 'React', 'Framer Motion'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </Link>

          {/* Card 2: Solaris */}
          <Link
            href="/creative/solaris"
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center transition-all duration-300 hover:border-white/30 block"
            style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261102_040308_f31964ab-ed8e-4ea4-90eb-3226c0859936.png&w=1600&q=80')" }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
              <p className="text-white font-medium text-xl md:text-3xl tracking-tight leading-tight text-center drop-shadow-md">
                $0 Electricity Bills
              </p>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
              <h3 className="text-white font-bold text-2xl mb-1">Solaris</h3>
              <p className="text-zinc-300 text-sm mb-4">Morning / Night Fog Hero</p>
              <span className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
                View Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['WebGL2', 'Canvas', 'Vanilla JS'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </Link>

          {/* Card 3: Maison Vell */}
          <Link
            href="/creative/maison"
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center transition-all duration-300 hover:border-white/30 block"
            style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261102_042056_1a704ff7-b0e5-4a9f-bbda-62392b819fb6.png&w=1600&q=80')", backgroundSize: '120%', backgroundPosition: 'left center' }}
          >
            <div className="absolute inset-0 flex flex-col items-end justify-end p-4 z-10 bg-gradient-to-l from-white/80 to-transparent">
              <p className="text-black font-serif text-xl md:text-3xl italic tracking-tight text-right">
                Maison Vell
              </p>
              <p className="text-black/60 text-xs font-sans tracking-widest uppercase mt-1">Runway</p>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
              <h3 className="text-white font-bold text-2xl mb-1">Maison Vell</h3>
              <p className="text-zinc-300 text-sm mb-4">Depth Lookbook</p>
              <span className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
                View Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['CSS Transforms', 'Math', 'Vanilla JS'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </Link>

          {/* Placeholder Cards */}
          {[1, 2, 3].map((item) => (
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
