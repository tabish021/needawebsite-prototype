// @ts-nocheck
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { Waves } from '@/components/ui/wave-background';
import SmoothScroll from '@/components/SmoothScroll';
import TechText from '@/components/ui/TechText';
import CircularGallery from '@/components/ui/CircularGallery';

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

const portfolioImages = [
  { image: "/products/airin-morning-star.webp", text: "Airin Morning Star" },
  { image: "/products/airin-perfume-black.webp", text: "Airin Perfume Black" },
  { image: "/products/airin-perfume-red.webp", text: "Airin Perfume Red" },
  { image: "/products/bella-luxury-jewellery.webp", text: "Bella Luxury Jewellery" },
  { image: "/products/coffee-ad.webp", text: "Coffee Ad" },
  { image: "/products/dr-kratos-original.webp", text: "Dr. Kratos Original" },
  { image: "/products/elane-bag-ad.webp", text: "Elane Bag Ad" },
  { image: "/products/elsa-lipstick.webp", text: "Elsa Lipstick" },
  { image: "/products/encore-keyboard.webp", text: "Encore Keyboard" },
  { image: "/products/eyewear-men.webp", text: "Eyewear Men" },
  { image: "/products/eyewear-women.webp", text: "Eyewear Women" },
  { image: "/products/nexa-blue-shoes.webp", text: "Nexa Blue Shoes" },
  { image: "/products/nexa-purple-shoes.webp", text: "Nexa Purple Shoes" },
  { image: "/products/nocco-sports.webp", text: "Nocco Sports" },
  { image: "/products/north-fly-high-shoes.webp", text: "North Fly High Shoes" },
  { image: "/products/north-light-shoes.webp", text: "North Light Shoes" },
  { image: "/products/north-multiple-shoes.webp", text: "North Multiple Shoes" },
  { image: "/products/north-smoke-shoes.webp", text: "North Smoke Shoes" },
  { image: "/products/nouri-serum.webp", text: "Nouri Serum" },
  { image: "/products/nouri-night-cream.webp", text: "Nouri Night Cream" },
  { image: "/products/reus-headphones.webp", text: "Reus Headphones" },
  { image: "/products/rivendell-wallet.webp", text: "Rivendell Wallet" },
  { image: "/products/sr-buns-burger.webp", text: "Sr. Buns Burger" },
  { image: "/products/varel-luxury-pen.webp", text: "Varel Luxury Pen" },
  { image: "/products/veran-watch-ad.webp", text: "Veran Watch Ad" },
  { image: "/products/v-luggages-bag.webp", text: "V Luggages Bag" },
  { image: "/products/vybe-berry-kiss.webp", text: "Vybe Berry Kiss" },
  { image: "/products/vybe-sky-cherry.webp", text: "Vybe Sky Cherry" },
  { image: "/products/vybe-sparkling-water.webp", text: "Vybe Sparkling Water" },
  { image: "/products/vybe-watermelon.webp", text: "Vybe Watermelon" },
];

export default function CreativePage() {
  return (
    <div className="dark bg-black min-h-screen text-white">
      <SmoothScroll />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col bg-black overflow-hidden border-b border-white/10">
        
        {/* Waves - Reduced to 60% to give text more room */}
        <div className="absolute top-0 left-0 right-0 h-[60%] z-0">
          <Waves backgroundColor="#000000" strokeColor="#FFFFFF" />
        </div>

        {/* Text Container - Increased to 40%, centered with equal gaps */}
        <div className="relative z-10 mt-auto w-full h-[40%] bg-black flex flex-col justify-center gap-6 md:gap-10 px-8 md:px-16 lg:px-24 pb-8 md:pb-12">
          
          {/* Line 1 */}
          <div className="w-full h-[60px] md:h-[100px] lg:h-[130px] relative">
            <TechText
              text="Websites That Don't Just Work."
              fontWeight={700}
              fontSize={140}
              reveal="letter"
              dashLength={5}
              dashGap={3}
              specks={20}
              intro="metrics"
              introDuration={2}
              clickKick
              guides={false}
              color="#ffffff"
              accentColor="#16A34A"
              align="left"
              sweep={false} 
            />
          </div>

          {/* Line 2 */}
          <div className="w-full h-[80px] md:h-[130px] lg:h-[170px] relative">
            <TechText
              text="THEY WOW."
              fontWeight={900}
              fontSize={200}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="assemble"
              introDuration={2.5}
              clickKick
              guides={true}
              color="#ffffff"
              accentColor="#16A34A"
              align="left"
              sweep={false}
            />
          </div>

        </div>

      </section>

      {/* 3D Product Gallery Section */}
      <section className="relative w-full bg-black border-b border-white/10 overflow-hidden py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Visual Explorations
          </h2>
          <p className="text-zinc-400 mt-4">Drag to explore my latest product designs</p>
        </div>
        
        <div className="relative h-[600px] md:h-[800px] w-full">
          <CircularGallery
            items={portfolioImages}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            font="bold 30px Inter, sans-serif"
            itemAspect={0.6}
            onItemClick={(item, index) => console.log(item.text, index)}
          />
        </div>
      </section>

      {/* Interactive Playground Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Interactive Playground
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Melli 3D Artistry */}
          <a
            href="/demos/melli.html"
            target="_blank"
            rel="noopener noreferrer"
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
                Open Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['Three.js', 'React', 'Framer Motion'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>

          {/* Card 2: Solaris */}
          <a
            href="/demos/solaris.html"
            target="_blank"
            rel="noopener noreferrer"
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
                Open Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['WebGL2', 'Canvas', 'Vanilla JS'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>

          {/* Card 3: Maison Vell */}
          <a
            href="/demos/maison.html"
            target="_blank"
            rel="noopener noreferrer"
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
                Open Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['CSS Transforms', 'Math', 'Vanilla JS'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>

          {/* Card 4: Dentiq */}
          <a
            href="/demos/dentiq.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center transition-all duration-300 hover:border-white/30 block"
            style={{ backgroundImage: "url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260626_041422_4a459e05-abce-4150-9fb7-4ededc423cd1.png&w=1280&q=85')" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 bg-white/40 backdrop-blur-sm">
              <p className="text-black font-serif text-3xl italic tracking-tighter text-center">
                Dentiq
              </p>
              <p className="text-black/60 text-xs font-sans tracking-widest uppercase mt-1">On Demand</p>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
              <h3 className="text-white font-bold text-2xl mb-1">Dentiq</h3>
              <p className="text-zinc-300 text-sm mb-4">Editorial Typography</p>
              <span className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
                Open Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['CSS Animations', 'Typography', 'Vanilla JS'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>

          {/* Card 5: Clothing Rail */}
          <a
            href="/creative/clothing-rail"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center transition-all duration-300 hover:border-white/30 block"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 bg-black/30 backdrop-blur-[2px]">
              <p className="text-white font-bold text-xl md:text-3xl tracking-tight text-center drop-shadow-lg">
                Clothing Rail
              </p>
              <p className="text-white/80 text-xs font-sans tracking-widest uppercase mt-1">Interactive Lookbook</p>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
              <h3 className="text-white font-bold text-2xl mb-1">Clothing Rail</h3>
              <p className="text-zinc-300 text-sm mb-4">Physics-based Product Gallery</p>
              <span className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
                Open Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['React', 'Framer Motion', 'SVG Masks'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>

          {/* Card 6: NORVA */}
          <a
            href="/demos/norva.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center transition-all duration-300 hover:border-white/30 block"
            style={{ backgroundImage: "url('/norva-poster.jpg')" }}
          >
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 z-10 bg-gradient-to-t from-[#0f1626] via-[#0f1626]/50 to-transparent">
              <p className="text-white font-semibold text-2xl tracking-tight">
                NORVA
              </p>
              <p className="text-white/60 text-xs font-sans tracking-widest uppercase mt-1">3D Isometric Scroll</p>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
              <h3 className="text-white font-bold text-2xl mb-1">NORVA</h3>
              <p className="text-zinc-300 text-sm mb-4">Night City Staffing</p>
              <span className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
                Open Demo <ExternalLink className="w-4 h-4" />
              </span>
            </div>
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none z-30">
              {['Video Scrubbing', '3D Transforms', 'Vanilla JS'].map((tech) => (
                <span key={tech} className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>
          
        </div>
      </section>
    </div>
  );
}
