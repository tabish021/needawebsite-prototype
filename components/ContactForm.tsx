'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import { Send, Check } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeeodvr';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteUrl: '',
    service: 'New Website',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="mt-6 p-4 bg-brand-light dark:bg-brand-deep/20 border border-brand-ring dark:border-brand-deep rounded-md text-brand-deep dark:text-emerald-300 text-sm font-medium flex items-center gap-2">
        <Check className="w-4 h-4 flex-shrink-0" />
        <span>Thank you! I've received your request and will be in touch shortly.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-[#E5E7EB] dark:border-zinc-700 rounded-md focus:border-brand focus:ring-2 focus:ring-brand-ring dark:focus:ring-brand-deep focus:outline-none transition-colors bg-white dark:bg-zinc-800 text-[#0A0A0A] dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
        />
        <p className="mt-1 text-xs text-[#71717A] dark:text-zinc-400">Your name</p>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Where should I send your quote?"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-[#E5E7EB] dark:border-zinc-700 rounded-md focus:border-brand focus:ring-2 focus:ring-brand-ring dark:focus:ring-brand-deep focus:outline-none transition-colors bg-white dark:bg-zinc-800 text-[#0A0A0A] dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
        />
        <p className="mt-1 text-xs text-[#71717A] dark:text-zinc-400">Where should I send your quote?</p>
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 mb-2">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Best number to reach you (WhatsApp is fine)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-[#E5E7EB] dark:border-zinc-700 rounded-md focus:border-brand focus:ring-2 focus:ring-brand-ring dark:focus:ring-brand-deep focus:outline-none transition-colors bg-white dark:bg-zinc-800 text-[#0A0A0A] dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
        />
        <p className="mt-1 text-xs text-[#71717A] dark:text-zinc-400">Best number to reach you (WhatsApp is fine)</p>
      </div>

      <div className="mb-5">
        <label htmlFor="websiteUrl" className="block text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 mb-2">
          Website URL
        </label>
        <input
          id="websiteUrl"
          name="websiteUrl"
          type="url"
          placeholder="Your current website, if you have one"
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
          className="w-full px-4 py-3 border border-[#E5E7EB] dark:border-zinc-700 rounded-md focus:border-brand focus:ring-2 focus:ring-brand-ring dark:focus:ring-brand-deep focus:outline-none transition-colors bg-white dark:bg-zinc-800 text-[#0A0A0A] dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
        />
        <p className="mt-1 text-xs text-[#71717A] dark:text-zinc-400">Your current website, if you have one</p>
      </div>

      <div className="mb-5">
        <label htmlFor="service" className="block text-sm font-medium text-[#0A0A0A] dark:text-zinc-200 mb-2">
          What do you need help with? <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 border border-[#E5E7EB] dark:border-zinc-700 rounded-md focus:border-brand focus:ring-2 focus:ring-brand-ring dark:focus:ring-brand-deep focus:outline-none transition-colors bg-white dark:bg-zinc-800 text-[#0A0A0A] dark:text-zinc-100"
        >
          <option value="New Website">New Website</option>
          <option value="Redesign">Redesign</option>
          <option value="AI Optimization">AI Optimization</option>
          <option value="Custom App">Custom App</option>
        </select>
      </div>

      <div>
        <Button variant="primary" className="w-full" type="submit">
          <span>Send My Request</span>
          <Send className="w-4 h-4" />
        </Button>
        <p className="mt-3 text-xs text-[#71717A] dark:text-zinc-400 text-center">
          Free quote. No spam. I'll only use your details to reply.
        </p>
      </div>
    </form>
  );
}
