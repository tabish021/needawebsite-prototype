// @ts-nocheck
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { X, BookOpen } from 'lucide-react';

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
    <div className="relative w-full min-h-[800px] md:min-h-[100vh] flex items-center justify-start overflow-hidden">
      
      {/* The Canva Table Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/table-bg.webp')" }}
      />
      
      {/* A very subtle dark gradient on the left to make the book pop slightly */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-0" />

      {/* Content Container - Pushed to the left */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-24 flex items-center justify-start h-full pt-20">
        
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Image now expects a transparent .webp with a heavy drop shadow */}
            <img 
              src="/process-book.webp" 
              alt="The Process Book" 
              className="w-[350px] md:w-[650px] lg:w-[750px] h-auto drop-shadow-[0_35px_50px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#4a2c1a] font-bold tracking-widest uppercase text-sm md:text-base transition-transform duration-300 group-hover:-translate-y-2">
              <BookOpen className="w-5 h-5" /> Open The Book
            </div>
          </motion.div>
        </div>

      </div>

      {/* The Book Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-[10010] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 30, rotateX: 15 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 30, rotateX: 15 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
              className="w-full max-w-5xl perspective-[2000px]"
            >
              {/* THE LEATHER COVER WRAPPER (Simulates the thick book cover) */}
              <div className="relative p-3 md:p-6 bg-[#1a0f0f] rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-[#3a251a]">
                
                {/* Page Stack Visual (Thickness at the bottom) */}
                <div className="absolute bottom-[-4px] left-3 right-3 h-3 bg-[#d4c5ab] rounded-b-md shadow-inner z-0" />
                <div className="absolute bottom-[-8px] left-4 right-4 h-3 bg-[#e8dcc4] rounded-b-md shadow-inner z-0" />
                <div className="absolute bottom-[-12px] left-5 right-5 h-3 bg-[#f4ebd9] rounded-b-md shadow-inner z-0" />

                {/* The Flip Book Pages */}
                <div className="relative z-10 w-full max-w-[1000px] mx-auto bg-[#f4ebd9]">
                  {/* @ts-ignore */}
                  <HTMLFlipBook
                    width={500}
                    height={700}
                    size="stretch"
                    minWidth={300}
                    maxWidth={550}
                    minHeight={400}
                    maxHeight={750}
                    maxShadowOpacity={0.6}
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
                          className="px-8 py-3 bg-[#2a1215] text-white rounded-md font-semibold hover:bg-black transition-colors font-sans shadow-lg"
                        >
                          Book a Call
                        </a>
                      </div>
                    </Page>
                  </HTMLFlipBook>
                </div>

                {/* Spine Crease Gradient */}
                <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-black/0 via-black/40 to-black/0 pointer-events-none z-20 mix-blend-multiply" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
