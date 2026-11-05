import type { Metadata } from 'next';
import CreativeClient from './CreativeClient';

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

export default function CreativePage() {
  return <CreativeClient />;
}
