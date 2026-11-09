import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SiteBackground from '@/components/SiteBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://needawebsite.in'),
  title: 'NeedAWebsite | Web Design Mumbai, Found on Google & AI',
  description: 'Web design and AI search optimization (SEO, AEO, GEO) for small businesses across India.',
  openGraph: {
    title: 'NeedAWebsite',
    description: 'Web design and AI search optimization (SEO, AEO, GEO) for small businesses across India.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 1. NEW: Explicit Organization Schema (Fixes the 65% score)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NeedAWebsite',
  url: 'https://needawebsite.in',
  logo: 'https://needawebsite.in/og-image.png',
  description: 'Web design and AI search optimization (SEO, AEO, GEO) for small businesses across India.',
  telephone: ['+91 9987455707', '+91 9820795707'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Tabish',
  },
  sameAs: [
    'https://www.instagram.com/needawebsitedotin'
  ]
};

// 2. Keep the ProfessionalService Schema too
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NeedAWebsite',
  url: 'https://needawebsite.in',
  description: 'Web design and AI search optimization (SEO, AEO, GEO) for small businesses across India.',
  telephone: ['+91 9987455707', '+91 9820795707'],
  areaServed: 'India',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Tabish',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Add BOTH schemas to the head */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={professionalServiceSchema} />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-transparent text-[#3F3F46] dark:text-zinc-300 min-h-screen flex flex-col antialiased font-sans transition-colors duration-200">
        
        <SiteBackground />

        <ThemeProvider>
          <ScrollProgressBar />
          <Nav />
          <main id="main-content" className="flex-1 relative z-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}



