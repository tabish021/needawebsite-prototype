// @ts-nocheck
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { X, Move } from 'lucide-react';

const HTMLFlipBook = dynamic(() => import('react-pageflip'), { ssr: false });

const Page = React.forwardRef(({ children, number }: { children: React.ReactNode, number: number }, ref: any) => {
  return (
    <div className="bg-[#f4ebd9] shadow-inner overflow-hidden" ref={ref} data-density="hard">
      {children}
    </div>
  );
});
Page.displayName = 'Page';

export default function ProcessBook() {
  const [isOpen, setIsOpen] = useState(false);
  const bookRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 3D Rotation Logic
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startRot, setStartRot] = useState({ x: 0, y: 0 });

  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartRot({ x: rotateX.get(), y: rotateY.get() });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startPos.x;
    const dy = e.clientY - startPos.y;
    
    // Calculate new rotation (drag right = positive Y, drag up = negative X)
    rotateY.set(startRot.y + dx * 0.4);
    rotateX.set(startRot.x - dy * 0.4);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    // Optional: Snap back to center on release
    // rotateX.set(0);
    // rotateY.set(0);
  };

  // Dynamic lighting based on rotation
  const shadowIntensity = useTransform(rotateX, [-30, 0, 30], [0.8, 0.4, 0.8]);
  const shadowX = useTransform(rotateY, [-30, 30], [40, -40]);

  useEffect(() => {
    audioRef.current = new Audio('/page-turn.mp3');
  }, []);

  const onFlip = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Velvet Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a1215] via-[#0a0505] to-black opacity-95 z-0" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          How I Work
        </h2>
        <p className="text-zinc-400 mt-4 text-lg flex items-center justify-center gap-2">
          <Move className="w-4 h-4" /> Drag to rotate the book. Click to open.
        </p>
      </div>

      {/* The Draggable 3D Book */}
      <motion.div
        className="relative z-10 cursor-grab active:cursor-grabbing"
        style={{
          perspective: 1500,
          width: '100%',
          maxWidth: '600px', // Much larger size
          display: 'flex',
          justifyContent: 'center',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={() => { if (!isDragging) setIsOpen(true); }} // Only open if not dragging
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Dynamic shadow */}
          <motion.div 
            className="absolute inset-0 bg-black rounded-lg blur-3xl -z-10"
            style={{
              opacity: shadowIntensity,
              x: shadowX,
              y: 50,
              scale: 0.9
            }}
          />
          
          <img 
            src="/process-book.jpg" 
            alt="The Process Book" 
            className="w-[350px] md:w-[550px] h-auto rounded-r-lg rounded-l-sm shadow-2xl pointer-events-none select-none"
          />
          
          {/* Spine Highlight Effect */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/60 to-transparent rounded-l-sm pointer-events-none" />
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-yellow-600/0 hover:bg-yellow-600/10 transition-colors duration-500 rounded-lg pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* The Book Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="w-full max-w-5xl"
            >
              {/* @ts-ignore */}
              <HTMLFlipBook
                width={500}
                height={700}
                size="stretch"
                minWidth={300}
                maxWidth={600}
                minHeight={400}
                maxHeight={800}
                maxShadowOpacity={0.5}
                showCover={false}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="mx-auto"
                ref={bookRef}
                usePortrait={true}
              >
                {/* SPREAD 1 */}
                <Page number={1}>
                  <img src="/book/page-1.webp" className="w-full h-full object-cover" alt="Intro Art" />
                </Page>
                <Page number={2}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">The NeedAWebsite Method</h3>
                    <p className="italic text-gray-600 mb-6 text-lg">How I Build Digital Experiences</p>
                    <blockquote className="italic text-xl border-l-4 border-gray-400 pl-4 mb-6">"A website isn't a brochure. It's the hardest-working person on your team."</blockquote>
                    <p className="text-gray-800 leading-relaxed font-sans">I don't just build websites. I build digital assets that work for you while you're in meetings, while you're asleep, and while you're finally on that holiday.</p>
                  </div>
                </Page>

                {/* SPREAD 2 */}
                <Page number={3}>
                  <img src="/book/page-2.webp" className="w-full h-full object-cover" alt="Chapter 1 Art" />
                </Page>
                <Page number={4}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Chapter 1: The Blank Slate</h3>
                    <p className="italic text-gray-600 mb-6">The Brief</p>
                    <blockquote className="italic text-lg border-l-4 border-gray-400 pl-4 mb-4">"Every good website starts with a simple hello."</blockquote>
                    <p className="text-gray-800 mb-4 font-sans">You start by sending me a few details about your business. That's it. No long forms, no tech talk. I'd like to know:</p>
                    <ul className="list-disc pl-5 text-gray-800 space-y-2 font-sans text-sm md:text-base">
                      <li>What you sell, whether it's a product or a service</li>
                      <li>Who your customers are</li>
                      <li>How you sell: to businesses, individuals, or online</li>
                      <li>Where you sell: locally, across the country, or worldwide</li>
                    </ul>
                  </div>
                </Page>

                {/* SPREAD 3 */}
                <Page number={5}>
                  <img src="/book/page-3.webp" className="w-full h-full object-cover" alt="Chapter 2 Art" />
                </Page>
                <Page number={6}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Chapter 2: The Deep Dive</h3>
                    <p className="italic text-gray-600 mb-6">The Meeting</p>
                    <blockquote className="italic text-lg border-l-4 border-gray-400 pl-4 mb-4">"Let's talk about you, not just the business."</blockquote>
                    <p className="text-gray-800 mb-4 font-sans">Once I have your brief, we sit down for an online meeting, the kind where you could comfortably have a cup of chai in hand.</p>
                    <p className="text-gray-800 mb-4 font-sans">We talk about your background, your qualifications, and how it all began. Then we look at what isn't working today and how a website can fix it.</p>
                    <p className="text-gray-800 font-semibold mb-2 font-sans">In plain words:</p>
                    <p className="text-gray-800 text-sm font-sans"><strong>SEO</strong> is getting found on Google. <strong>GEO</strong> is getting recommended by AI tools like ChatGPT. <strong>AEO</strong> is being the answer when someone asks a direct question.</p>
                  </div>
                </Page>

                {/* SPREAD 4 */}
                <Page number={7}>
                  <img src="/book/page-4.webp" className="w-full h-full object-cover" alt="Chapter 3 Art" />
                </Page>
                <Page number={8}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Chapter 3: The Blueprint</h3>
                    <p className="italic text-gray-600 mb-6">Design & Strategy</p>
                    <blockquote className="italic text-lg border-l-4 border-gray-400 pl-4 mb-4">"Big decisions feel small when you take them one at a time."</blockquote>
                    <p className="text-gray-800 mb-4 font-sans">Now we shape how your website will look and feel, and we decide it together:</p>
                    <ul className="list-disc pl-5 text-gray-800 space-y-2 font-sans text-sm md:text-base">
                      <li>Your logo, whether it's brand new or a fresh revamp</li>
                      <li>Your colour palette</li>
                      <li>The vibe: cinematic, 3D, scroll-driven, parallax, image-led or text-led</li>
                      <li>The sections and layout, meaning what goes where</li>
                    </ul>
                  </div>
                </Page>

                {/* SPREAD 5 */}
                <Page number={9}>
                  <img src="/book/page-5.webp" className="w-full h-full object-cover" alt="Chapter 4 Art" />
                </Page>
                <Page number={10}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Chapter 4: The Engine Room</h3>
                    <p className="italic text-gray-600 mb-6">The Team</p>
                    <blockquote className="italic text-lg border-l-4 border-gray-400 pl-4 mb-4">"One-man agency. Never a one-man band."</blockquote>
                    <p className="text-gray-800 mb-4 font-sans">Yes, I'm a one-man agency, but I'm not alone. You get one direct line to me, with no account managers and no messages lost in between.</p>
                    <p className="text-gray-800 mb-2 font-semibold font-sans">Behind me is a bench of specialists I bring in only when needed:</p>
                    <ul className="list-disc pl-5 text-gray-800 space-y-1 text-sm font-sans">
                      <li>A content writer</li>
                      <li>A graphic designer</li>
                      <li>A backend engineer</li>
                      <li>An SEO and search specialist</li>
                      <li>A motion and 3D artist</li>
                      <li>A photographer or videographer</li>
                    </ul>
                  </div>
                </Page>

                {/* SPREAD 6 */}
                <Page number={11}>
                  <img src="/book/page-6.webp" className="w-full h-full object-cover" alt="Chapter 5 Art" />
                </Page>
                <Page number={12}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Chapter 5: The Sprint</h3>
                    <p className="italic text-gray-600 mb-6">The Build & Delivery</p>
                    <blockquote className="italic text-lg border-l-4 border-gray-400 pl-4 mb-4">"No disappearing acts. Watch it come to life."</blockquote>
                    <p className="text-gray-800 mb-4 font-sans">Most projects are delivered in about 4 to 8 weeks, depending on complexity.</p>
                    <p className="text-gray-800 mb-4 font-sans">While I build, your website lives on a private prototype link on Vercel. Once a week, we meet to go through it together and make revisions.</p>
                    <blockquote className="italic text-gray-800 font-semibold mt-6 text-center font-sans">"Your satisfaction is the only metric that matters."</blockquote>
                  </div>
                </Page>

                {/* SPREAD 7 */}
                <Page number={13}>
                  <img src="/book/page-7.webp" className="w-full h-full object-cover" alt="Chapter 6 Art" />
                </Page>
                <Page number={14}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center text-black font-serif">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Chapter 6: The Long Game</h3>
                    <p className="italic text-gray-600 mb-6">Post-Launch & Growth</p>
                    <blockquote className="italic text-lg border-l-4 border-gray-400 pl-4 mb-4">"Launch day isn't the finish line. It's the starting line."</blockquote>
                    <p className="text-gray-800 mb-4 font-sans">When your site goes live, my work doesn't stop. I stay on to support your edits, updates and rankings.</p>
                    <p className="text-gray-800 mb-4 font-sans">I'll be honest: ranking higher on Google and in AI searches takes time. Together we'll agree on what to track, and I'll walk you through what's realistic.</p>
                  </div>
                </Page>

                {/* SPREAD 8 */}
                <Page number={15}>
                  <img src="/book/page-8.webp" className="w-full h-full object-cover" alt="Closing Art" />
                </Page>
                <Page number={16}>
                  <div className="p-8 md:p-12 h-full flex flex-col justify-center items-center text-center text-black font-serif">
                    <h3 className="text-3xl font-bold mb-8">Write your own story.</h3>
                    <p className="text-gray-800 mb-8 text-lg font-sans">Every business has one worth telling. Let's build the website that tells yours.</p>
                    <a 
                      href="/contact" 
                      className="px-8 py-3 bg-[#2a1215] text-white rounded-md font-semibold hover:bg-black transition-colors font-sans"
                    >
                      Book a Call
                    </a>
                  </div>
                </Page>
              </HTMLFlipBook>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
