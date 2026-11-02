import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NeedAWebsite',
  description: 'Privacy Policy for NeedAWebsite. How contact form details are used.',
  alternates: {
    canonical: 'https://needawebsite.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | NeedAWebsite',
    description: 'Privacy Policy for NeedAWebsite. How contact form details are used.',
    url: 'https://needawebsite.in/privacy',
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
    title: 'Privacy Policy | NeedAWebsite',
    description: 'Privacy Policy for NeedAWebsite. How contact form details are used.',
    images: ['https://needawebsite.in/og-image.png'],
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 md:py-28 px-5">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] dark:text-zinc-50 mb-8">
        Privacy Policy
      </h1>
      <p className="text-[#52525B] dark:text-zinc-400 leading-relaxed">
        [TODO — full privacy policy to be added in Phase 2. This page is a placeholder so the footer link resolves. In short: I collect only the details you submit through the contact form (name, email, phone, website URL and the service you're enquiring about) and use them solely to reply to your enquiry. I do not sell or share your data. For any privacy question, email hello@needawebsite.in.]
      </p>
    </div>
  );
}
