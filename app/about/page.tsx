import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Faq from '@/components/Faq';
import { User, FileCheck, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Tabish | Technical Web Specialist in Mumbai',
  description: 'Meet Tabish, a Mumbai web specialist who builds affordable, search-ready websites for small businesses and created the free AI Visibility Scanner.',
  alternates: {
    canonical: 'https://needawebsite.in/about',
  },
  openGraph: {
    title: 'About Tabish | Technical Web Specialist in Mumbai',
    description: 'Meet Tabish, a Mumbai web specialist who builds affordable, search-ready websites for small businesses and created the free AI Visibility Scanner.',
    url: 'https://needawebsite.in/about',
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
    title: 'About Tabish | Technical Web Specialist in Mumbai',
    description: 'Meet Tabish, a Mumbai web specialist who builds affordable, search-ready websites for small businesses and created the free AI Visibility Scanner.',
    images: ['https://needawebsite.in/og-image.png'],
  },
};

const aboutFaqs = [
  {
    question: 'Who is behind NeedAWebsite?',
    answer: 'NeedAWebsite is run by Tabish, a technical web specialist based in Mumbai. He designs, builds and supports every website personally, so you always deal directly with the founder.',
  },
  {
    question: 'Why did you build the AI Visibility Scanner?',
    answer: 'I built it so business owners can see for themselves how AI reads their website. So many people now depend on AI for information that every site needs at least a readable foundation, which can then be improved over time.',
  },
  {
    question: 'What is the AI Visibility Scanner?',
    answer: "It's a free tool at aiscan.needawebsite.in. Enter your website address and it checks how easily AI assistants and search engines can find, read and understand your site, then gives you a score.",
  },
  {
    question: 'Who do you work with?',
    answer: 'Small and medium businesses across India: dentists, clinics, boutiques, restaurants, consultants and local service providers. If you want more customers from search, I can help.',
  },
  {
    question: 'How is NeedAWebsite different from a freelancer or a large agency?',
    answer: 'Freelancers can be quick and affordable, and agencies bring large teams. I offer a middle path: direct access to the founder, clear pricing, and a website built for both Google and AI search from day one.',
  },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tabish',
  jobTitle: 'Founder & Web Specialist',
  worksFor: {
    '@type': 'Organization',
    name: 'NeedAWebsite',
    url: 'https://needawebsite.in',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'IN',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://needawebsite.in/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Tabish',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://needawebsite.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://needawebsite.in/about',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aboutFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AboutPage() {
  const faqItems = aboutFaqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
  }));

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />

      {/* 1. HERO + FOUNDER STORY */}
      <section className="bg-gradient-to-b from-white to-[#FAFAFA] dark:from-[#09090B] dark:to-[#121215] py-20 md:py-28 border-b border-[#E5E7EB] dark:border-zinc-800 transition-colors duration-200">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] max-w-4xl text-balance text-[#0A0A0A] dark:text-zinc-50">
            Hi, I'm Tabish. I Build Websites That Get Found.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#3F3F46] dark:text-zinc-300 max-w-3xl leading-relaxed">
            I'm a technical web specialist based in Mumbai, and I help small businesses get found online.
          </p>

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-light dark:bg-brand-deep/30 border border-brand-ring dark:border-brand-deep/60 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-brand-deep dark:text-emerald-300">T</span>
            </div>
            <p className="text-lg text-[#52525B] dark:text-zinc-300 leading-relaxed">
              I didn't start out in tech. A few years ago I decided to change my career path. I had always been drawn to technology, so I taught myself, one skill at a time: designing websites, building tools and apps, creating graphics, and understanding how SEO, AEO and GEO really work.
            </p>
            <p className="text-lg text-[#52525B] dark:text-zinc-300 leading-relaxed">
              Along the way I noticed something. Plenty of people now rely on AI assistants for answers, yet most small business websites are not set up for them. The owners aren't doing anything wrong. They just haven't been told that the rules of search have changed.
            </p>
            <p className="text-lg text-[#52525B] dark:text-zinc-300 leading-relaxed">
              That's why I built the AI Visibility Scanner. I wanted owners to be able to see for themselves how AI reads their website, and why even a basic foundation matters. A website that AI can read is a website you can keep improving. One that it can't read has nowhere to climb from.
            </p>
            <p className="text-lg text-[#52525B] dark:text-zinc-300 leading-relaxed">
              I started NeedAWebsite to make this easier for everyone who can benefit from it, without huge invoices. You get a real person who explains things in plain language, does the work properly and stays in touch.
            </p>
            <p className="text-lg text-[#52525B] dark:text-zinc-300 leading-relaxed">
              If your business is good, your website should prove it, to Google, to AI and most of all to your next customer.
            </p>
            <p className="mt-8 text-sm font-medium text-[#0A0A0A] dark:text-zinc-100">
              Tabish, Founder, NeedAWebsite
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE */}
      <Section
        eyebrow="WHY ME"
        title="Why Choose NeedAWebsite"
        className="border-b border-[#E5E7EB] dark:border-zinc-800"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={<User className="w-5 h-5" />}>
            <p className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              You talk directly to the person building your site. No account managers, no passing messages along. I answer your calls and WhatsApp messages myself.
            </p>
          </Card>
          <Card icon={<FileCheck className="w-5 h-5" />}>
            <p className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              Clear pricing, no hidden fees. You get a written quote before we begin. What we agree is what you pay.
            </p>
          </Card>
          <Card icon={<ShieldCheck className="w-5 h-5" />}>
            <p className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              Future-proof by design. Every website is built for how people search now, on Google and on AI assistants, so you aren't paying for a rebuild next year.
            </p>
          </Card>
        </div>
      </Section>

      {/* 3. WHERE I FIT */}
      <Section bg="grey" title="Where I Fit" className="border-b border-[#E5E7EB] dark:border-zinc-800">
        <p className="text-lg text-[#52525B] dark:text-zinc-300 max-w-3xl mb-10 leading-relaxed">
          Freelancers and large agencies each suit certain projects. I sit between them, aiming for the personal attention of one and the thoroughness of the other.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="border border-[#E5E7EB] dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm inline-block min-w-full bg-white dark:bg-zinc-900">
            <table className="min-w-full divide-y divide-[#E5E7EB] dark:divide-zinc-800 text-left text-sm md:text-base">
              <thead className="bg-[#FAFAFA] dark:bg-zinc-800/80">
                <tr className="divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 w-1/4"></th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 w-1/4">Freelancers</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 bg-brand-light/50 dark:bg-brand-deep/20 w-1/4">NeedAWebsite</th>
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 w-1/4">Large Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] dark:divide-zinc-800">
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 bg-[#FAFAFA] dark:bg-zinc-800/50">Who you speak to</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">The freelancer</td>
                  <td className="p-4 sm:p-5 font-medium text-[#0A0A0A] dark:text-zinc-100 bg-brand-light/50 dark:bg-brand-deep/20">The founder, directly</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Account and project managers</td>
                </tr>
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 bg-[#FAFAFA] dark:bg-zinc-800/50">Pricing</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Often lowest, scope varies</td>
                  <td className="p-4 sm:p-5 font-medium text-[#0A0A0A] dark:text-zinc-100 bg-brand-light/50 dark:bg-brand-deep/20">Fair and clearly quoted</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Typically highest</td>
                </tr>
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 bg-[#FAFAFA] dark:bg-zinc-800/50">Search readiness</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Varies by person</td>
                  <td className="p-4 sm:p-5 font-medium text-[#0A0A0A] dark:text-zinc-100 bg-brand-light/50 dark:bg-brand-deep/20">Google and AI search built in</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Often an extra service</td>
                </tr>
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="p-4 sm:p-5 font-semibold text-[#0A0A0A] dark:text-zinc-100 bg-[#FAFAFA] dark:bg-zinc-800/50">Ongoing support</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Varies</td>
                  <td className="p-4 sm:p-5 font-medium text-[#0A0A0A] dark:text-zinc-100 bg-brand-light/50 dark:bg-brand-deep/20">Edits and ranking support available</td>
                  <td className="p-4 sm:p-5 text-[#52525B] dark:text-zinc-300">Usually on a retainer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 4. FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <Faq items={faqItems} />
      </Section>
    </>
  );
}
