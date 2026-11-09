import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 transition-colors duration-200">
      <div className="text-center max-w-lg mx-auto">
        
        {/* The giant 404 */}
        <h1 className="text-[8rem] md:text-[10rem] font-black leading-none text-[#16A34A] tracking-tighter">
          404
        </h1>
        
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] dark:text-white mt-4 mb-4">
          Looks like this page got lost in the AI.
        </h2>
        
        {/* Subtext */}
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          The link might be broken, or the page has moved. Don't worry, it happens to the best of us.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" /> Take me home
          </Link>
          
          <Link 
            href="https://aiscan.needawebsite.in" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E5E7EB] dark:border-zinc-700 bg-white dark:bg-zinc-900 text-[#0A0A0A] dark:text-white font-semibold rounded-lg hover:bg-[#FAFAFA] dark:hover:bg-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Search className="w-4 h-4" /> Scan a website
          </Link>
        </div>

      </div>
    </div>
  );
}


