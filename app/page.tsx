import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Faq from '@/components/Faq';
import HeroMotion from '@/components/HeroMotion';
import ProofBadges from '@/components/ProofBadges';
import {
  ArrowRight,
  Check,
  Layout,
  Sparkles,
  LayoutDashboard,
  Quote,
  Phone,
  MessageCircle,
  Zap,
} from 'lucide-react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
} from 'react-icons/si';

function LenisIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || 'w-[1em] h-[1em]'}
      aria-label="Lenis"
    >
      <path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

const techStackLogos = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'Three.js', icon: SiThreedotjs, color: 'text-black dark:text-white' },
  { name: 'Lenis', icon: LenisIcon, color: '#F97316' }, 
];

export const metadata: Metadata = {
  title: 'NeedAWebsite | Web Design Mumbai, Found on Google & AI',
  description: 'Mumbai web designer building fast, mobile-friendly websites that get found on Google, ChatGPT and Perplexity. One-page sites in 5 days. Free quote.',
  alternates: {
    canonical: 'https://needawebsite.in/',
  },
  openGraph: {
    title: 'NeedAWebsite | Web Design Mumbai, Found on Google & AI',
    description: 'Mumbai web designer building fast, mobile-friendly websites that get found on Google, ChatGPT and Perplexity. One-page sites in 5 days. Free quote.',
    url: 'https://needawebsite.in/',
    type: 'website',
    siteName: 'NeedAWebsite',
    images: [
      {
        url: 'https://needawebsite.in/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeedAWebsite | Web Design Mumbai, Found on Google & AI',
    description: 'Mumbai web designer building fast, mobile-friendly websites that get found on Google, ChatGPT and Perplexity. One-page sites in 5 days. Free quote.',
    images: ['https://needawebsite.in/og-image.png'],
  },
};

const homeFaqs = [
  {
    question: 'What does NeedAWebsite do?',
    answer: 'NeedAWebsite is a Mumbai-based web design and development studio run by Tabish. I build fast, mobile-friendly websites for small businesses across India and set them up to be found on Google and AI assistants such as ChatGPT and Perplexity.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Pricing depends on the type of site. You get a clear written quote before any work starts, with no hidden fees. Request a quote to get started.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A one-page website is typically ready in 5 days. Multi-page websites, online stores and custom builds take 4 to 8 weeks, depending on size and complexity.',
  },
  {
    question: 'What does it mean for a website to be "found by ChatGPT"?',
    answer: 'When people ask AI tools for a recommendation, the tool pulls answers from websites it can read and understand. A website that is clearly structured and clearly describes your business is far more likely to be mentioned. I build that structure into every site.',
  },
  {
    question: 'Do you work with businesses outside Mumbai?',
    answer: 'Yes. I work remotely with small businesses across India, including dentists, boutiques, restaurants, clinics and local service providers. Everything happens over calls, WhatsApp and email.',
  },
  {
    question: 'Can I update the website myself after launch?',
    answer: 'Yes, where it makes sense. I also offer ongoing edits and support, so you can simply message me when you need a change. Terms are agreed with you before you start.',
  },
];

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NeedAWebsite',
  url: 'https://needawebsite.in',
  publisher: {
    '@type': 'Organization',
    name: 'NeedAWebsite',
  },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  const faqItems = homeFaqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
  }));

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqPageSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-24 md:py-32 border-b border-[#E5E7EB] dark:border-zinc-800 transition-colors duration-200">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 relative">
          <HeroMotion>
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-[#0A0A0A] dark:text-zinc-50 text-balance">
                Your Customers Are Asking AI. <span className="text-brand dark:text-emerald-400">Will It Name You?</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#3F3F46] dark:text-zinc-300 leading-relaxed max-w-2xl">
                I build fast, beautiful websites for small businesses across India, and set them up to be found on Google, ChatGPT and Perplexity, so the right customers find you first.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button variant="primary" href="/contact">
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  href="https://aiscan.needawebsite.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Your Website's AI Score
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm bg-brand-light dark:bg-brand-deep/30 text-brand-deep dark:text-emerald-300 border border-brand-ring dark:border-brand-deep/60">
                  <Check className="w-3.5 h-3.5" />
                  Written quote before work starts
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm bg-brand-light dark:bg-brand-deep/30 text-brand-deep dark:text-emerald-300 border border-brand-ring dark:border-brand-deep/60">
                  <Check className="w-3.5 h-3.5" />
                  No hidden fees
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm bg-brand-light dark:bg-brand-deep/30 text-brand-deep dark:text-emerald-300 border border-brand-ring dark:border-brand-deep/60">
                  <Check className="w-3.5 h-3.5" />
                  You deal directly with the founder
                </span>
              </div>
            </div>
          </HeroMotion>
        </div>
      </section>

      {/* NEW: 1499 PROMO BANNER */}
      <section className="bg-brand text-white py-4 px-6 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium text-sm sm:text-base">
            <Zap className="w-5 h-5 text-yellow-300 shrink-0" />
            <span>Need a simple presence fast? Get a one-page website for just ₹1,499.</span>
          </div>
          <Link
            href="/websitefor1499"
            className="bg-white text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-zinc-100 transition-colors whitespace-nowrap shadow-sm"
          >
            View Offer
          </Link>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-12 border-b border-[#E5E7EB] dark:border-zinc-800 overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <p className="text-center text-sm font-semibold tracking-widest text-[#71717A] uppercase mb-6">Technologies I build with</p>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#FAFAFA] dark:from-[#09090B] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#FAFAFA] dark:from-[#09090B] to-transparent z-10" />

          <div className="animate-marquee flex items-center pt-12 pb-4 w-max">
            {[...techStackLogos, ...techStackLogos].map((tech, idx) => {
              const Icon = tech.icon;
              const isClass = tech.color.startsWith('text-');
              return (
                <div
                  key={`${tech.name}-${idx}`}
                  className="relative group flex items-center justify-center px-12 sm:px-20 shrink-0 text-5xl md:text-6xl cursor-pointer"
                >
                  <Icon
                    className={`w-[1em] h-[1em] transition-transform duration-300 group-hover:scale-110 ${isClass ? tech.color : ''}`}
                    style={!isClass ? { color: tech.color } : undefined}
                  />
                  
                  {/* CUSTOM TOOLTIP */}
                  <div className="absolute top-[-48px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex flex-col items-center z-50">
                    <span className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-bold py-2 px-4 rounded-lg whitespace-nowrap shadow-xl">
                      {tech.name}
                    </span>
                    <div className="w-2.5 h-2.5 bg-zinc-900 dark:bg-white rotate-45 -mt-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SECTION 2 (The Problem) */}
      <Section eyebrow="THE SHIFT" title="Customers have started asking AI instead of searching.">
        <p className="max-w-3xl text-lg text-[#52525B] dark:text-zinc-400 leading-relaxed">
          A few years ago, someone looking for a dentist typed a few words into Google and scrolled through a list. Today, a growing number of people simply ask ChatGPT, Perplexity or Google's AI: "Who is the best dentist near me?" They get one short answer with a few names. Not ten blue links. A handful of names. If your website isn't built in a way these tools can read and trust, they skip over you. Not because you're not good, but because they can't tell that you are. Meanwhile, a competitor with a better-prepared website gets the recommendation. The good news: this is fixable, and most businesses haven't started yet. That means acting now puts you ahead.
        </p>
      </Section>

      {/* 3. SECTION 3 (What I Do) */}
      <Section eyebrow="SERVICES" title="What I Do">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<Layout className="w-5 h-5" />}>
            <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mb-3">
              Web Design & Development
            </h3>
            <p className="text-sm sm:text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
              Landing pages, portfolios and online stores that look sharp, load fast on any phone, and make it easy for visitors to call, book or buy. Your website should work as your best salesperson, every hour of the day.
            </p>
          </Card>

          <Card icon={<Sparkles className="w-5 h-5" />}>
            <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mb-3">
              AI Search Optimization
            </h3>
            <p className="text-sm sm:text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
              I prepare your website so ChatGPT, Perplexity and Google's AI can understand your business and confidently recommend it. Think of it as making sure the new search engines know exactly who you are and what you do.
            </p>
          </Card>

          <Card icon={<LayoutDashboard className="w-5 h-5" />}>
            <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mb-3">
              Custom Web Apps & Dashboards
            </h3>
            <p className="text-sm sm:text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
              Need customers to book appointments, log in to a portal, or want a simple dashboard for your team? I build custom tools that take repetitive work off your plate.
            </p>
          </Card>
        </div>
      </Section>

      {/* 4. SECTION 4 (How It Works) */}
      <Section eyebrow="PROCESS" title="How It Works">
        <div className="grid md:grid-cols-3 gap-6 relative">
          <Card>
            <span className="block text-5xl font-bold text-brand-ring dark:text-emerald-900/60 tabular-nums mb-4">
              01
            </span>
            <p className="text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
              Tell me about your business. A short call or WhatsApp chat. I ask the questions, you answer in plain language.
            </p>
          </Card>

          <Card>
            <span className="block text-5xl font-bold text-brand-ring dark:text-emerald-900/60 tabular-nums mb-4">
              02
            </span>
            <p className="text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
              I design and build. You see progress along the way. One-page sites are ready in 5 days. Larger projects take 4 to 8 weeks.
            </p>
          </Card>

          <Card>
            <span className="block text-5xl font-bold text-brand-ring dark:text-emerald-900/60 tabular-nums mb-4">
              03
            </span>
            <p className="text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
              You launch, then grow. Your site goes live ready for Google and AI search, with edits and ranking support available afterwards.
            </p>
          </Card>
        </div>
      </Section>

      {/* 5. SECTION 5 (Proof) */}
      <Section
        eyebrow="PROOF"
        title="I don't just talk about AI search. I built the tool that measures it."
      >
        <p className="text-lg text-[#52525B] dark:text-zinc-400 max-w-3xl leading-relaxed">
          To show business owners exactly how AI reads a website, I built the AI Visibility Scanner from scratch. Paste in any website address and see how easily AI assistants can find, understand and recommend it. It's free to use.
        </p>

        <Card className="mt-10">
          <Quote className="w-6 h-6 text-brand dark:text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mb-2">
            Nourish by Neelam
          </h3>
          <p className="text-base text-[#52525B] dark:text-zinc-400 leading-relaxed">
            A clinical and sports nutrition practice. I built its website with a full SEO, AEO and GEO foundation (in plain words: set up to be found on Google and recommended by AI assistants), and I continue to support its rankings as it grows.
          </p>
          <ProofBadges />
        </Card>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            href="https://nourishbyneelam.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Nourish by Neelam Case Study
          </Button>
          <Button
            variant="ghost"
            href="https://aiscan.needawebsite.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the Free AI Scanner
          </Button>
        </div>
      </Section>

      {/* 6. SECTION 6 (Final CTA) */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="bg-[#0A0A0A] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 text-white rounded-2xl px-8 md:px-16 py-16 md:py-20 text-center max-w-[1100px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Let's get your business found.
            </h2>
            <p className="text-[#D4D4D8] dark:text-zinc-300 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed">
              Whether you need a brand new website or want to know why your current one isn't bringing in customers, let's talk. The first conversation and the quote are free, with no pressure and no jargon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" href="/contact">
                Get a Free Quote
              </Button>
              <Button variant="dark" href="tel:+919987455707">
                <Phone className="w-4 h-4" />
                <span>Call +91 9987455707</span>
              </Button>
              <Button
                variant="dark"
                href="https://wa.me/919987455707?text=Hi%20Tabish%2C%20I%27d%20like%20a%20quote%20for%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp me</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <Faq items={faqItems} />
      </Section>
    </>
  );
}
