import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Melli 3D Artistry Demo | NeedAWebsite',
  description: 'Interactive 3D Motion and WebGL showcase.',
};

export default function MelliDemoPage() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black z-50">
      <Link
        href="/creative"
        className="absolute top-4 left-4 z-50 bg-black/50 text-white backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/80 transition-colors flex items-center gap-2 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Playground</span>
      </Link>
      <iframe
        src="/demos/melli.html"
        title="Melli 3D Demo"
        className="w-full h-full border-none"
      />
    </div>
  );
}
