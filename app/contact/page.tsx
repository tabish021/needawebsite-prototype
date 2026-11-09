'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnppyvyv';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    helpType: 'New Website',
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', website: '', helpType: 'New Website' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#09090B] min-h-screen text-[#0A0A0A] dark:text-zinc-50 font-sans py-20 px-6 transition-colors duration-200">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Talk About Your Website</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Whether you're starting from scratch, want a redesign, or just want to know why customers aren't finding you, I'm happy to help. Tell me a little about your business and I'll come back with honest advice and a free quote. No pressure, no jargon.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#16A34A]">I'll get back to you shortly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Left Column: Ways to Reach Me */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Ways to Reach Me</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Fill out the form below and I'll reply personally.</p>
            
            <div className="space-y-4">
              <a href="tel:+919987455707" className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-[#16A34A] transition-colors">
                <Phone className="w-5 h-5 text-[#16A34A]" />
                <span className="font-medium">+91 9987455707</span>
              </a>
              <a href="tel:+919820795707" className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-[#16A34A] transition-colors">
                <Phone className="w-5 h-5 text-[#16A34A]" />
                <span className="font-medium">+91 9820795707</span>
              </a>
              <a href="https://wa.me/919987455707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-[#16A34A] transition-colors">
                <MessageCircle className="w-5 h-5 text-[#16A34A]" />
                <span className="font-medium">WhatsApp me</span>
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm">
            
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#16A34A] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-zinc-600 dark:text-zinc-400">I've received your request and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="Your name" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="Where should I send your quote?" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="Best number to reach you (WhatsApp is fine)" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Website URL (Optional)</label>
                  <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="Your current website, if you have one" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">What do you need help with? *</label>
                  <select name="helpType" value={formData.helpType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none">
                    <option value="New Website">New Website</option>
                    <option value="Redesign">Redesign</option>
                    <option value="AI Optimization">AI Optimization</option>
                    <option value="Custom App">Custom App</option>
                  </select>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-semibold">Something went wrong. Please try again or email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg transition-all duration-300"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    'Send My Request'
                  )}
                </button>
                <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-2">
                  Free quote. No spam. I'll only use your details to reply.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24 pt-16 border-t border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-zinc-800 dark:text-zinc-200 hover:text-[#16A34A] transition-colors list-none">
                How do I get a free quote for a website?
                <span className="text-2xl text-zinc-400 group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Fill out the form on this page, call +91 9987455707 or +91 9820795707, or message me on WhatsApp. Tell me what you need and I'll send a clear, written quote at no cost.
              </div>
            </details>

            <details className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-zinc-800 dark:text-zinc-200 hover:text-[#16A34A] transition-colors list-none">
                How quickly will you reply?
                <span className="text-2xl text-zinc-400 group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I'll get back to you shortly. For the fastest response, call or message me on WhatsApp.
              </div>
            </details>

            <details className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-zinc-800 dark:text-zinc-200 hover:text-[#16A34A] transition-colors list-none">
                What should I prepare before contacting you?
                <span className="text-2xl text-zinc-400 group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nothing formal. Share your business name, what you sell or offer, and your current website if you have one. If you're not sure what you need, say so and I'll guide you.
              </div>
            </details>

            <details className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-zinc-800 dark:text-zinc-200 hover:text-[#16A34A] transition-colors list-none">
                Can you work with me if I'm not in Mumbai?
                <span className="text-2xl text-zinc-400 group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Yes. I'm based in Mumbai but work remotely with businesses across India, over calls, WhatsApp and email.
              </div>
            </details>

            <details className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-zinc-800 dark:text-zinc-200 hover:text-[#16A34A] transition-colors list-none">
                What happens after I send the form?
                <span className="text-2xl text-zinc-400 group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I review your request, get in touch to understand your business, and send a written quote. You decide whether to go ahead. There is no obligation.
              </div>
            </details>
          </div>
        </div>

      </div>
    </div>
  );
}
