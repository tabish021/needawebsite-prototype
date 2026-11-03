import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mutual Non-Disclosure Agreement | NeedAWebsite',
  description: 'Mutual Non-Disclosure Agreement for confidential client discussions with NeedAWebsite.',
  alternates: {
    canonical: 'https://needawebsite.in/nda',
  },
  openGraph: {
    title: 'Mutual Non-Disclosure Agreement | NeedAWebsite',
    description: 'Mutual Non-Disclosure Agreement for confidential client discussions with NeedAWebsite.',
    url: 'https://needawebsite.in/nda',
    type: 'website',
    siteName: 'NeedAWebsite',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Non-Disclosure Agreement | NeedAWebsite',
    description: 'Mutual Non-Disclosure Agreement for confidential client discussions with NeedAWebsite.',
  },
};

export default function NdaPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 md:py-28 px-5">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 mb-8">
        Mutual Non-Disclosure Agreement
      </h1>
      <p className="text-[#52525B] dark:text-zinc-400 leading-relaxed">
        I take your privacy seriously. Before we discuss the details of your project, I'm happy to sign a mutual NDA. Please reach out via the Contact page to request one. [TODO: Standard NDA template to be linked here.]
      </p>
    </div>
  );
}
