import type { Metadata } from 'next';
import { Check, X, ArrowRight, Zap, ShieldCheck, MapPin, MessageCircle, BarChart, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '₹1,499 One Page Website for Small Business | NeedAWebsite',
  description: 'Get a beautiful one page website with SEO setup, hosting, SSL, WhatsApp button and Google Maps for ₹1,499. Delivered in 48 hours. Serving all of India.',
  alternates: {
    canonical: 'https://needawebsite.in/websitefor1499',
  },
};

const WHATSAPP_LINK = "https://wa.me/919987455707?text=Hi%20Tabish%2C%20I%20want%20to%20buy%20the%20%E2%82%B91%2C499%20One%20Page%20Website.";

// FAQ Data for Schema
const faqs = [
  { q: "How much does a one page website cost in India?", a: "A one page website for a small business can cost anywhere from a few thousand rupees to much more. At NeedAWebsite, it's ₹1,499, with hosting, SSL, basic SEO setup and more included for the first year." },
  { q: "What is included in the ₹1,499 website?", a: "You get a custom-designed, mobile-friendly one page website with basic SEO setup, 1 year of hosting, SSL security, a WhatsApp chat button, a contact form, Google Maps, social media integration, analytics, Google Business Profile setup and one round of revisions." },
  { q: "Is the domain name included?", a: "No. You buy the domain name yourself, in your own name, so you fully own it. I can guide you on how to pick one." },
  { q: "How fast will my website be ready?", a: "Within 48 hours." },
  { q: "How many revisions do I get?", a: "One round of revisions is included. After that, any further changes are quoted separately." },
  { q: "What happens after the first year?", a: "Hosting renews at ₹1,999 per year, so your website stays live. If you'd like design changes, those are quoted separately." },
  { q: "Do I really need a website if I already have Instagram or Facebook?", a: "Yes, it helps a lot. Social media is great for reaching people, but a website is the place that you own, where customers can find your services, contact details and location. It also helps you show up on Google and in AI search results." },
  { q: "Will my website show up on Google?", a: "Your website will be set up with basic SEO so that Google can find and understand it. Rankings depend on many things, such as competition and how long the site has been live, so no one can honestly promise a specific position." },
  { q: "What is SEO?", a: "SEO stands for Search Engine Optimization. It simply means setting up your website so that Google can find it and show it to people searching for what you offer." },
  { q: "What are GEO and AEO?", a: "GEO means Generative Engine Optimization, and AEO means Answer Engine Optimization. In plain words, they're about making your website easy for AI tools like ChatGPT and for answer boxes on Google to understand and recommend." },
  { q: "Is a one page website enough for my business?", a: "For most small businesses, yes. A one page website puts everything in one place. If your business grows, we can add more pages later." },
  { q: "Do I need to be tech-savvy?", a: "Not at all. You send me your details, and I handle the design, setup and going live. If you can send a WhatsApp message, you can get a website." },
  { q: "What do I need to send you?", a: "Your business name, a short description of what you do, your logo (if you have one), a few photos, your contact details and links to your social media profiles." },
  { q: "Will my website work on mobile phones?", a: "Yes. Most people browse on their phones, so every website is designed to look great and work smoothly on mobile, tablet and desktop." },
  { q: "What does the WhatsApp chat button do?", a: "It places a button on your website that opens a chat with you on WhatsApp in one tap, so customers can message you instantly." },
  { q: "What is Google Business Profile, and why does it matter?", a: "It's the free listing that shows your business on Google Search and Google Maps, with your address, hours and reviews. Setting it up helps nearby customers find you." },
  { q: "Can I sell products online with this?", a: "No. This package is a one page business website. Online selling (e-commerce) is not included, but I can quote a custom project for it." },
  { q: "Can I add more pages later?", a: "Yes. Extra pages and design updates are quoted separately, depending on what you need." },
  { q: "Do you work with businesses outside the big cities?", a: "Yes. I work with businesses in Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad and every other city and town across India." },
  { q: "Who owns the website and the domain?", a: "You do. The domain is bought by you, in your name." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
  }))
};

export default function Website1499() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#09090B] text-[#0A0A0A] dark:text-zinc-50 font-sans overflow-hidden transition-colors duration-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A34A]/10 dark:bg-[#16A34A]/20 text-[#15803D] dark:text-[#4ADE80] text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" /> Delivered in 48 Hours
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            A Beautiful One Page Website for Your Business, for <span className="text-[#16A34A]">₹1,499</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
            For ₹1,499, you get a professionally designed one page website with basic SEO setup, hosting for the first year, SSL security, a WhatsApp chat button, a contact form, Google Maps, social media integration, analytics and Google Business Profile setup. It's delivered within 48 hours. Your domain name is the only extra, and it's bought by you, in your name.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" /> Get My Website
          </a>
        </div>

        {/* 3D CSS Mockup - FIXED */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[1500px]">
          <div className="relative w-full max-w-lg transform-style-preserve-3d hover:rotate-y-0 rotate-y-[-15deg] rotate-x-[10deg] transition-transform duration-700 ease-out">
            
            {/* Laptop Frame */}
            <div className="w-full aspect-[16/10] bg-zinc-900 dark:bg-zinc-800 rounded-t-xl p-2 shadow-2xl border border-zinc-700/50 relative z-10">
              <div className="w-full h-full bg-white dark:bg-zinc-900 rounded overflow-hidden flex flex-col">
                {/* Fake Website Navbar */}
                <div className="h-6 w-full border-b border-zinc-100 dark:border-zinc-800 flex items-center px-2 gap-1.5 bg-zinc-50 dark:bg-zinc-900">
                  <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                {/* Fake Website Hero */}
                <div className="flex-1 p-4 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900">
                  <div className="w-24 h-3 bg-green-200 dark:bg-green-900/50 rounded mb-3" />
                  <div className="w-48 h-5 bg-zinc-800 dark:bg-zinc-200 rounded mb-3" />
                  <div className="w-32 h-2 bg-zinc-200 dark:bg-zinc-700 rounded mb-5" />
                  <div className="px-4 py-2 bg-green-600 text-white text-[10px] font-bold rounded shadow-sm">Contact Us</div>
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="w-[110%] h-4 bg-zinc-800 dark:bg-zinc-700 rounded-b-xl absolute -bottom-4 -left-[5%] shadow-xl border-t border-zinc-600 z-0" />

            {/* Phone Frame */}
            <div className="absolute -right-8 -bottom-12 w-28 md:w-32 aspect-[9/19] bg-zinc-900 dark:bg-zinc-800 rounded-[1.5rem] p-1.5 shadow-2xl border-[3px] border-zinc-700 dark:border-zinc-600 z-20 rotate-y-[10deg] hover:rotate-y-0 transition-transform duration-500">
              <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[1rem] overflow-hidden flex flex-col relative">
                {/* Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-zinc-900 dark:bg-zinc-800 rounded-full z-10" />
                {/* Fake Mobile Hero */}
                <div className="flex-1 flex flex-col items-center justify-center p-2 text-center bg-white dark:bg-zinc-900 mt-4">
                  <div className="w-12 h-2 bg-green-200 dark:bg-green-900/50 rounded mb-2" />
                  <div className="w-20 h-3 bg-zinc-800 dark:bg-zinc-200 rounded mb-2" />
                  <div className="w-16 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded mb-4" />
                  <div className="w-full py-1.5 bg-green-600 text-white text-[8px] font-bold rounded">Contact Us</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Every Business Needs a Website Today</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            Here's a simple question: when you want to try a new cafe, find a good salon or check out a gym, what's the first thing you do? You search on your phone.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            Your customers do exactly the same. If your business doesn't show up with a proper website, they usually don't wonder why. They simply pick the next option.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
            A website is not a luxury for big companies anymore. It's your digital shopfront, and it's open 24 hours a day, 7 days a week, even when you're asleep or on holiday.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#FAFAFA] dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <ShieldCheck className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-xl mb-2">Builds trust in seconds.</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">People trust businesses that look professional and are easy to find.</p>
            </div>
            <div className="p-6 bg-[#FAFAFA] dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <Globe className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-xl mb-2">Gets you found.</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Customers search on Google and ask AI tools like ChatGPT. A website gives them something to find.</p>
            </div>
            <div className="p-6 bg-[#FAFAFA] dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <MapPin className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-xl mb-2">Gives you a place that's yours.</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">Social media platforms can change their rules overnight. Your website belongs to you.</p>
            </div>
            <div className="p-6 bg-[#FAFAFA] dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <MessageCircle className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-xl mb-2">Makes it easy to contact you.</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">One tap to call, WhatsApp or find your location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Who Is This For?</h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            This is for any small business that wants to be found and trusted online, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {["Gyms & Fitness", "Salons & Spas", "Cafes & Restaurants", "Clinics & Dentists", "Coaches & Tutors", "Freelancers", "Boutiques", "Professionals"].map((item, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm font-medium text-zinc-700 dark:text-zinc-300">
                {item}
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-zinc-500 dark:text-zinc-500 italic">
            If you run a small business and you're not sure whether this is for you, it probably is.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Get for ₹1,499</h2>
          
          {/* Added max-w-2xl mx-auto to center the list, and increased gap-x for balance */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl mx-auto text-left">
            {[
              "A beautiful one page website, custom designed",
              "Mobile-friendly design",
              "Basic SEO setup",
              "Hosting for 1 year",
              "SSL certificate and security",
              "WhatsApp chat button",
              "Contact form",
              "Google Maps integration",
              "Social media integration",
              "Analytics (Visitor tracking)",
              "Google Business Profile setup",
              "One round of revisions"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Not Included */}
      <section className="py-12 bg-zinc-900 dark:bg-zinc-950 text-white transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <X className="w-6 h-6 text-red-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">What's Not Included</h3>
              <p className="text-zinc-400 dark:text-zinc-500 leading-relaxed">
                I'd rather be clear than surprise you later. Anything not listed above is not included, and that includes your domain name, extra pages and online selling (e-commerce). If you need any of these, we can talk about a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "You send me the details.", desc: "Your business name, what you do, your photos, your contact details and anything you'd like on the page." },
              { step: "02", title: "I design and build it.", desc: "I create your one page website and send you a private link to see it." },
              { step: "03", title: "You review it.", desc: "You get one round of revisions to get things just right." },
              { step: "04", title: "Go live.", desc: "Your website is published within 48 hours, and it's ready for customers." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-4xl font-black text-[#16A34A]/30 dark:text-[#16A34A]/20">{item.step}</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Simple, Honest Pricing</h2>
          <div className="bg-[#FAFAFA] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <ul className="space-y-6">
              <li className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-4">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Website + 1st Year Hosting</span>
                <span className="text-2xl font-bold text-[#16A34A]">₹1,499</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-4">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Hosting Renewal (Year 2+)</span>
                <span className="text-xl font-bold text-zinc-600 dark:text-zinc-400">₹1,999 / year</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-4">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Domain Name</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Bought by you, in your name</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Design Updates Later</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Quoted separately</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-zinc-800 dark:text-zinc-200 hover:text-[#16A34A] dark:hover:text-[#16A34A] transition-colors list-none">
                  {faq.q}
                  <span className="text-2xl text-zinc-400 dark:text-zinc-500 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-900 dark:bg-zinc-950 text-white text-center transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Online?</h2>
          <p className="text-xl text-zinc-400 dark:text-zinc-500 mb-10">Your customers are already searching. Let's make sure they find you.</p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#16A34A] hover:bg-[#15803D] text-white text-lg font-bold rounded-lg shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" /> Get My Website
          </a>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">A beautiful, professional website for ₹1,499, delivered in 48 hours.</p>
        </div>
      </section>

    </div>
  );
}
