import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#0E0E10] border-t border-[#E5E7EB] dark:border-zinc-800 pt-16 pb-8 mt-auto transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Wordmark + Tagline */}
          <div>
            <span className="font-semibold text-lg text-[#0A0A0A] dark:text-zinc-50 block mb-3">
              NeedAWebsite
            </span>
            <p className="text-sm text-[#71717A] dark:text-zinc-400 leading-relaxed">
              NeedAWebsite: Web design and AI search optimization for businesses across India. Based in Mumbai.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <p className="text-sm font-semibold text-[#0A0A0A] dark:text-zinc-200 mb-3">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+919987455707"
                className="text-[#52525B] dark:text-zinc-400 hover:text-brand dark:hover:text-emerald-400 transition-colors py-0.5 inline-block"
              >
                Call +91 9987455707
              </a>
              <a
                href="tel:+919820795707"
                className="text-[#52525B] dark:text-zinc-400 hover:text-brand dark:hover:text-emerald-400 transition-colors py-0.5 inline-block"
              >
                Call +91 9820795707
              </a>
              <a
                href="https://wa.me/919987455707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52525B] dark:text-zinc-400 hover:text-brand dark:hover:text-emerald-400 transition-colors py-0.5 inline-block"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Col 3: Tools */}
          <div>
            <p className="text-sm font-semibold text-[#0A0A0A] dark:text-zinc-200 mb-3">
              Tools
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://aiscan.needawebsite.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52525B] dark:text-zinc-400 hover:text-brand dark:hover:text-emerald-400 transition-colors py-0.5 inline-block"
              >
                Free AI Scanner
              </a>
              <Link
                href="/privacy"
                className="text-[#52525B] dark:text-zinc-400 hover:text-brand dark:hover:text-emerald-400 transition-colors py-0.5 inline-block"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7EB] dark:border-zinc-800 mt-12 pt-6 text-sm text-[#71717A] dark:text-zinc-500 text-center">
          <p>© 2026 NeedAWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
