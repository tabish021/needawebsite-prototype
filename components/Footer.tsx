import React from 'react';
import Link from 'next/link';
import { Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0A0A0A] border-t border-[#E5E7EB] dark:border-zinc-800 pt-16 pb-12 mt-auto transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 (Brand) */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[#0A0A0A] dark:text-white flex items-center mb-3"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-brand mr-2" />
              NeedAWebsite
            </Link>
            <p className="text-sm text-[#71717A] dark:text-[#D4D4D8] leading-relaxed mb-4">
              Web design and AI search optimization for businesses across India. Based in Mumbai.
            </p>
            <a
              href="mailto:hello@needawebsite.in"
              className="text-sm text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors inline-block"
            >
              hello@needawebsite.in
            </a>
          </div>

          {/* Column 2 (Sitemap) */}
          <div>
            <h3 className="text-sm font-semibold text-[#0A0A0A] dark:text-white mb-4">
              Sitemap
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Services
              </Link>
              <Link
                href="/creative"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Creative
              </Link>
              <Link
                href="/about"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3 (Legal & Trust) */}
          <div>
            <h3 className="text-sm font-semibold text-[#0A0A0A] dark:text-white mb-4">
              Legal
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/privacy"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Terms of Service
              </Link>
              <Link
                href="/nda"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                Mutual NDA
              </Link>
            </div>
          </div>

          {/* Column 4 (Let's Talk) */}
          <div>
            <h3 className="text-sm font-semibold text-[#0A0A0A] dark:text-white mb-4">
              Let's Talk
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+919987455707"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                +91 99874 55707
              </a>
              <a
                href="tel:+919820795707"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                +91 98207 95707
              </a>
              <a
                href="https://wa.me/919987455707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-block"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/needawebsitedotin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52525B] dark:text-[#D4D4D8] hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors py-0.5 inline-flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] dark:border-zinc-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#71717A] dark:text-zinc-500">
          <p>© 2026 NeedAWebsite. All rights reserved.</p>
          <div className="inline-flex items-center gap-1.5 text-[#71717A] dark:text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-brand" />
            <span>Made in Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
