import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Faq from '@/components/Faq';
import { Check, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design & AI Search Optimization Services | NeedAWebsite',
  description: 'Website design, AI search optimization (GEO/AEO) and custom web apps for Indian businesses. Fast, mobile-ready sites that win customers. Free quote.',
  alternates: {
    canonical: 'https://needawebsite.in/services',
  },
  openGraph: {
    title: 'Web Design & AI Search Optimization Services | NeedAWebsite',
    description: 'Website design, AI search optimization (GEO/AEO) and custom web apps for Indian businesses. Fast, mobile-ready sites that win customers. Free quote.',
    url: 'https://needawebsite.in/services',
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
    title: 'Web Design & AI Search Optimization Services | NeedAWebsite',
    description: 'Website design, AI search optimization (GEO/AEO) and custom web apps for Indian businesses. Fast, mobile-ready sites that win customers. Free quote.',
    images: ['https://needawebsite.in/og-image.png'],
  },
};

const servicesFaqs = [
  {
    question: 'What is the difference between SEO, AEO and GEO?',
    answer: 'SEO helps your website rank in a list of Google results. AEO (Answer Engine Optimization) helps your site give direct answers to customer questions. GEO (Generative Engine Optimization) helps AI tools like ChatGPT understand and recommend your business. A modern website needs all three.',
  },
  {
    question: 'What is an llms.txt file?',
    answer: 'An llms.txt file is a short text file on your website that introduces your business to AI tools in plain language: who you are, what you offer and which pages matter most.',
  },
  {
    question: 'Can you guarantee that ChatGPT will recommend my business?',
    answer: 'No one honestly can. AI tools decide for themselves. What I do is build the strongest possible foundation so your business is easy to find, understand and trust, and I measure your progress with a visibility score.',
  },
  {
    question: 'What is JSON-LD schema and why does my website need it?',
    answer: 'JSON-LD schema is a set of hidden labels added to your pages that tell search engines and AI exactly what your business is, where it is and what it offers. It reduces confusion, so search engines and AI can describe you correctly.',
  },
  {
    question: 'How is a landing page different from a full website?',
    answer: 'A landing page is one focused page designed to get a visitor to act, such as calling or booking. A full website has multiple pages for more services, content or products. An e-commerce store adds a catalogue, cart and payments.',
  },
];

const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design & Development',
    provider: {
      '@type': 'Organization',
      name: 'NeedAWebsite',
      url: 'https://needawebsite.in',
    },
    areaServed: 'India',
    description: 'Landing pages, portfolios and online stores that load fast and convert.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Search Optimization',
    provider: {
      '@type': 'Organization',
      name: 'NeedAWebsite',
      url: 'https://needawebsite.in',
    },
    areaServed: 'India',
    description: "Making a business easy for ChatGPT, Perplexity and Google's AI to understand, trust and recommend (SEO, AEO, GEO).",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Web Apps & Dashboards',
    provider: {
      '@type': 'Organization',
      name: 'NeedAWebsite',
      url: 'https://needawebsite.in',
    },
    areaServed: 'India',
    description: 'Booking systems, client portals and internal dashboards built around how the business works.',
  },
];

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
      name: 'Services',
      item: 'https://needawebsite.in/services',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: servicesFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  const faqItems = servicesFaqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
  }));

  return (
    <>
      {serviceSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />

      {/* 1. INTRO HERO */}
      <Section
        eyebrow="SERVICES"
        className="bg-gradient-to-b from-white to-[#FAFAFA] dark:from-[#09090B] dark:to-[#121215] border-b border-[#E5E7EB] dark:border-zinc-800"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-[#0A0A0A] dark:text-zinc-50 text-balance">
          Websites Built to Win Customers on Google and AI Search
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#3F3F46] dark:text-zinc-300 max-w-3xl leading-relaxed">
          Everything your business needs to be found, trusted and chosen. Three services, one goal: more of the right customers finding you online. Start with one, or combine them.
        </p>
      </Section>

      {/* 2. SERVICE 1 — Web Design & Development */}
      <Section
        eyebrow="01"
        title="1. Web Design & Development"
        className="border-b border-[#E5E7EB] dark:border-zinc-800"
      >
        <p className="text-lg text-[#52525B] dark:text-zinc-300 max-w-3xl mb-10 leading-relaxed">
          A good website does three things: it loads quickly, it works perfectly on a phone, and it makes the next step obvious. Most of your visitors will arrive on mobile, and most will leave within seconds if the site is slow or confusing. I build every site around those realities.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="border border-[#E5E7EB] dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm inline-block min-w-full bg-white dark:bg-zinc-900">
            <table className="min-w-full divide-y divide-[#E5E7EB] dark:divide-zinc-800 text-left">
              <thead className="bg-[#FAFAFA] dark:bg-zinc-800/80">
                <tr className="divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <th scope="col" className="px-5 py-4 text-left text-sm md:text-base font-semibold text-[#0A0A0A] dark:text-zinc-100 w-1/4"></th>
                  <th scope="col" className="px-5 py-4 text-left text-sm md:text-base font-semibold text-[#0A0A0A] dark:text-zinc-100 w-3/8">One-Page Website</th>
                  <th scope="col" className="px-5 py-4 text-left text-sm md:text-base font-semibold text-[#0A0A0A] dark:text-zinc-100 w-3/8">Full Website / E-commerce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] dark:divide-zinc-800">
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="px-5 py-4 text-left text-sm md:text-base bg-[#FAFAFA] dark:bg-zinc-800/50 font-semibold text-[#0A0A0A] dark:text-zinc-100">Best for</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">Clinics, consultants, local services, new businesses, campaigns</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">Businesses with many services or products, or those that sell online</td>
                </tr>
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="px-5 py-4 text-left text-sm md:text-base bg-[#FAFAFA] dark:bg-zinc-800/50 font-semibold text-[#0A0A0A] dark:text-zinc-100">What you get</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">One focused page: who you are, what you offer, proof, and a clear call to action</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">Multiple pages, product catalogue, cart, secure payments, order management</td>
                </tr>
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="px-5 py-4 text-left text-sm md:text-base bg-[#FAFAFA] dark:bg-zinc-800/50 font-semibold text-[#0A0A0A] dark:text-zinc-100">Delivery</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">About 5 days</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">4 to 8 weeks</td>
                </tr>
                <tr className="border-t border-[#E5E7EB] dark:border-zinc-800 divide-x divide-[#E5E7EB] dark:divide-zinc-800">
                  <td className="px-5 py-4 text-left text-sm md:text-base bg-[#FAFAFA] dark:bg-zinc-800/50 font-semibold text-[#0A0A0A] dark:text-zinc-100">Pricing</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">Request a Custom Quote</td>
                  <td className="px-5 py-4 text-left text-sm md:text-base text-[#52525B] dark:text-zinc-300">Request a Custom Quote</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What every website includes */}
        <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mt-12 mb-4">
          What every website includes
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Speed: </span>pages that load in moments, so visitors don't leave and Google ranks you higher.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Mobile-friendly design: </span>looks and works beautifully on every screen size.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Built to convert: </span>clear buttons, click-to-call, WhatsApp links and simple enquiry forms.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Search-ready foundation: </span>clean structure that Google and AI assistants can read.
            </div>
          </div>
        </div>
      </Section>

      {/* 3. SERVICE 2 — AI Search Optimization */}
      <Section
        eyebrow="02"
        title="2. AI Search Optimization (GEO & AEO)"
        bg="grey"
        className="border-b border-[#E5E7EB] dark:border-zinc-800"
      >
        <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mt-6 mb-4">
          First, in plain English
        </h3>
        <p className="text-lg text-[#52525B] dark:text-zinc-300 leading-relaxed max-w-3xl">
          Until recently, people found businesses by typing into Google and clicking links. Now many of them just ask a question and get a direct answer from ChatGPT, Perplexity or Google's AI summaries. AI Search Optimization is the work of making sure your business is one of the names in that answer.
        </p>

        <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mt-10 mb-4">
          An easy way to picture it
        </h3>
        <div className="mt-8 border-l-4 border-brand dark:border-emerald-500 bg-white dark:bg-zinc-900 rounded-r-lg p-6 md:p-8 shadow-sm border-y border-r border-[#E5E7EB] dark:border-zinc-800">
          <BookOpen className="w-6 h-6 text-brand dark:text-emerald-400 mb-3" />
          <p className="text-[#52525B] dark:text-zinc-300 leading-relaxed italic">
            Imagine a library. Traditional SEO is the card catalogue. It helps people look up the right shelf and find a list of books to go through themselves. AI search is a helpful librarian. You ask a question, and she hands you the answer, along with the two or three books she trusts most. SEO gets you into the catalogue. AI Search Optimization makes sure the librarian knows you, understands what you offer, and is comfortable recommending you.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mt-10 mb-4">
          The technical names (for the curious)
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">AEO (Answer Engine Optimization): </span>shaping your website so it gives clear, direct answers to the questions your customers actually ask, which is what answer engines look for.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">GEO (Generative Engine Optimization): </span>making your business easy for AI tools that write their own answers, like ChatGPT, to understand, trust and mention.
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-zinc-100 mt-10 mb-4">
          What I set up for you
        </h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">An llms.txt file. </span>A short, plain-text &quot;introduction card&quot; placed on your website that tells AI tools who you are, what you do, and which pages matter most.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">JSON-LD schema. </span>Behind-the-scenes labels on your pages that say, in a language machines understand, &quot;this is a dental clinic, here is the address, here are the opening hours, here are the services.&quot;
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Question-and-answer content. </span>FAQs written the way your customers actually ask, so your answers can be quoted directly.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Clean technical foundation. </span>Fast loading, correct page structure and crawlable pages for Google and AI.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Your AI Visibility Score. </span>I test your site with my own scanner before and after, so you can see the improvement.
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white dark:bg-zinc-900 border border-[#E5E7EB] dark:border-zinc-800 rounded-lg">
            <Check className="w-5 h-5 text-brand dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="text-[#52525B] dark:text-zinc-300 leading-relaxed">
              <span className="font-semibold text-[#0A0A0A] dark:text-zinc-100">Continuous ranking support. </span>Search keeps changing, so I stay on hand to keep your foundation strong.
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button variant="primary" href="/contact">
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="mt-4 text-sm italic text-[#71717A] dark:text-zinc-400">
            An honest note: nobody can promise a place in an AI's answer, and I won't. What I can do is build the strongest foundation possible and show you the proof.
          </p>
        </div>
      </Section>

      {/* 4. SERVICE 3 — Custom Web Apps & Dashboards */}
      <Section
        eyebrow="03"
        title="3. Custom Web Apps & Dashboards"
        className="border-b border-[#E5E7EB] dark:border-zinc-800"
      >
        <p className="text-lg text-[#52525B] dark:text-zinc-300 max-w-3xl leading-relaxed">
          Some businesses need more than a website. If you're still managing bookings on WhatsApp, customer details in notebooks, or reports in scattered spreadsheets, a custom tool can give you hours back every week. I build booking systems, client portals, internal dashboards, and simple business tools built around exactly how you work.
        </p>
        <p className="mt-4 text-sm sm:text-base text-[#52525B] dark:text-zinc-400 font-medium">
          Typically takes 4 to 8 weeks depending on scope.
        </p>
        <div className="mt-8">
          <Button variant="primary" href="/contact">
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* 5. READY TO START */}
      <Section bg="grey" className="text-center border-b border-[#E5E7EB] dark:border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 mb-4 text-balance">
          Ready to start?
        </h2>
        <p className="text-lg text-[#52525B] dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Tell me what you need. I'll recommend the simplest option that gets results and send a clear quote, free.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" href="/contact">
            Get a Free Quote
          </Button>
          <Button
            variant="ghost"
            href="https://aiscan.needawebsite.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Check Your Website's AI Score</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <Faq items={faqItems} />
      </Section>
    </>
  );
}
