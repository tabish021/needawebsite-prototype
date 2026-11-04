import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MaisonDemo() {
  return (
    <div className="fixed inset-0 w-full h-full bg-white">
      <iframe
        src="/demos/maison.html"
        title="Maison Vell Runway Demo"
        className="w-full h-full border-none"
      />
      <div className="absolute top-4 left-4 z-50">
        <Link
          href="/creative"
          className="bg-black/50 text-white backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/80 transition-colors flex items-center gap-2 text-sm font-medium border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Playground
        </Link>
      </div>
    </div>
  );
}
