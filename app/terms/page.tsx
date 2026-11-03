import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | NeedAWebsite',
  description: 'Terms of Service for NeedAWebsite web design and digital optimization services.',
  alternates: {
    canonical: 'https://needawebsite.in/terms',
  },
  openGraph: {
    title: 'Terms of Service | NeedAWebsite',
    description: 'Terms of Service for NeedAWebsite web design and digital optimization services.',
    url: 'https://needawebsite.in/terms',
    type: 'website',
    siteName: 'NeedAWebsite',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | NeedAWebsite',
    description: 'Terms of Service for NeedAWebsite web design and digital optimization services.',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 md:py-28 px-5">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 mb-8">
        Terms of Service
      </h1>
      <p className="text-[#52525B] dark:text-zinc-400 leading-relaxed">
        [TODO: Standard Terms of Service to be added in Phase 2.]
      </p>
    </div>
  );
}
