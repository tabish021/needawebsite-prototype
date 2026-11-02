import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact NeedAWebsite | Get a Free Website Quote, Mumbai',
  description: 'Get a free website quote. Call +91 9987455707, WhatsApp or use the form. Mumbai-based web design for businesses across India. Fast replies.',
  alternates: {
    canonical: 'https://needawebsite.in/contact',
  },
  openGraph: {
    title: 'Contact NeedAWebsite | Get a Free Website Quote, Mumbai',
    description: 'Get a free website quote. Call +91 9987455707, WhatsApp or use the form. Mumbai-based web design for businesses across India. Fast replies.',
    url: 'https://needawebsite.in/contact',
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
    title: 'Contact NeedAWebsite | Get a Free Website Quote, Mumbai',
    description: 'Get a free website quote. Call +91 9987455707, WhatsApp or use the form. Mumbai-based web design for businesses across India. Fast replies.',
    images: ['https://needawebsite.in/og-image.png'],
  },
};

const contactFaqs = [
  {
    question: 'How do I get a free quote for a website?',
    answer: "Fill out the form on this page, call +91 9987455707 or +91 9820795707, or message me on WhatsApp. Tell me what you need and I'll send a clear, written quote at no cost.",
  },
  {
    question: 'How quickly will you reply?',
    answer: "I'll get back to you shortly. For the fastest response, call or message me on WhatsApp.",
  },
  {
    question: 'What should I prepare before contacting you?',
    answer: "Nothing formal. Share your business name, what you sell or offer, and your current website if you have one. If you're not sure what you need, say so and I'll guide you.",
  },
  {
    question: 'Can you work with me if I\'m not in Mumbai?',
    answer: "Yes. I'm based in Mumbai but work remotely with businesses across India, over calls, WhatsApp and email.",
  },
  {
    question: 'What happens after I send the form?',
    answer: "I review your request, get in touch to understand your business, and send a written quote. You decide whether to go ahead. There is no obligation.",
  },
];

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://needawebsite.in/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'NeedAWebsite',
    telephone: ['+91 9987455707', '+91 9820795707'],
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
      name: 'Contact',
      item: 'https://needawebsite.in/contact',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ContactPage() {
  const faqItems = contactFaqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
  }));

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />

      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-white to-[#FAFAFA] dark:from-[#09090B] dark:to-[#121215] py-20 md:py-28 border-b border-[#E5E7EB] dark:border-zinc-800 transition-colors duration-200">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] text-balance text-[#0A0A0A] dark:text-zinc-50">
            Let's Talk About Your Website
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#3F3F46] dark:text-zinc-300 max-w-3xl leading-relaxed">
            Whether you're starting from scratch, want a redesign, or just want to know why customers aren't finding you, I'm happy to help. Tell me a little about your business and I'll come back with honest advice and a free quote. No pressure, no jargon.
          </p>
          <p className="mt-4 text-sm text-[#71717A] dark:text-zinc-400">
            I'll get back to you shortly.
          </p>
        </div>
      </section>

      {/* 2. WAYS TO REACH ME & 3. CONTACT FORM */}
      <Section
        eyebrow="CONTACT"
        title="Ways to Reach Me"
        className="border-b border-[#E5E7EB] dark:border-zinc-800"
      >
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Card icon={<Mail className="w-5 h-5" />}>
            <h3 className="font-semibold mb-1 text-[#0A0A0A] dark:text-zinc-100">Message me</h3>
            <p className="text-sm text-[#52525B] dark:text-zinc-300 leading-relaxed">
              Fill out the form below and I'll reply personally.
            </p>
          </Card>

          <Card icon={<Phone className="w-5 h-5" />}>
            <h3 className="font-semibold mb-2 text-[#0A0A0A] dark:text-zinc-100">Call me directly</h3>
            <div className="flex flex-col gap-1.5">
              <a
                href="tel:+919987455707"
                className="text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 hover:text-brand dark:hover:text-emerald-400 transition-colors block"
              >
                +91 9987455707
              </a>
              <a
                href="tel:+919820795707"
                className="text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 hover:text-brand dark:hover:text-emerald-400 transition-colors block"
              >
                +91 9820795707
              </a>
            </div>
          </Card>

          <Card icon={<MessageCircle className="w-5 h-5" />}>
            <h3 className="font-semibold mb-2 text-[#0A0A0A] dark:text-zinc-100">Message me on WhatsApp</h3>
            <div>
              <Button
                variant="ghost"
                href="https://wa.me/919987455707?text=Hi%20Tabish%2C%20I%27d%20like%20a%20quote%20for%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="!px-4 !py-2 !min-h-[44px] text-sm w-full"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Card>
        </div>

        {/* 3. CONTACT FORM */}
        <Card className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#0A0A0A] dark:text-zinc-100">Send a message</h2>
          <ContactForm />
        </Card>
      </Section>

      {/* 4. NOT SURE WHERE TO START */}
      <Section bg="grey" className="text-center border-b border-[#E5E7EB] dark:border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 mb-4 text-balance">
          Not sure where to start?
        </h2>
        <p className="max-w-2xl mx-auto text-center text-[#52525B] dark:text-zinc-300 text-lg leading-relaxed">
          Run your current website through the free AI Visibility Scanner and see your score in seconds. It's a good starting point for our conversation.
        </p>
        <div className="mt-8 flex justify-center">
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

      {/* 5. FAQ */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <Faq items={faqItems} />
      </Section>
    </>
  );
}
