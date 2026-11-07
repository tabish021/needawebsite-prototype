'use client';

import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// The core NDA clauses
const ndaClauses = [
  { title: "1. Purpose", text: "The Parties wish to share confidential information in order to discuss or carry out a possible or actual business relationship, such as a website project (the \"Purpose\")." },
  { title: "2. What is Confidential Information", text: "\"Confidential Information\" means any non-public information that one Party (the \"Discloser\") shares with the other (the \"Recipient\"), in any form, that is marked confidential or that a reasonable person would understand to be confidential. This includes business plans, customer details, pricing, designs, content, source code, passwords and access details, and technical or financial information." },
  { title: "3. What is not Confidential Information", text: "Information is not confidential if the Recipient can show that it: (a) Is or becomes public without the Recipient's fault; (b) Was already known to the Recipient before it was shared; (c) Was received from a third party who had the right to share it; (d) Was developed by the Recipient independently, without using the Confidential Information." },
  { title: "4. Recipient's obligations", text: "The Recipient agrees to: (a) Use the Confidential Information only for the Purpose; (b) Keep it confidential, with at least the same care it uses for its own confidential information, and no less than reasonable care; (c) Not share it with anyone except as allowed in clause 5." },
  { title: "5. Who may see it", text: "The Recipient may share Confidential Information only with its employees, advisors and specialists (such as writers, designers and engineers) who need to know it for the Purpose and who are bound by confidentiality obligations at least as strict as this Agreement. The Recipient is responsible if any of them breaches it." },
  { title: "6. Required disclosure", text: "If the law or a court requires the Recipient to disclose Confidential Information, the Recipient will, where legally allowed, tell the Discloser first and share only what's legally required." },
  { title: "7. Return or deletion", text: "On written request, or when the Purpose ends, the Recipient will return or delete the Confidential Information, including copies, and confirm this in writing if asked. The Recipient may keep copies that the law requires it to keep, which stay confidential." },
  { title: "8. No licence and no obligation", text: "Confidential Information stays the property of the Discloser. Nothing in this Agreement gives the Recipient any rights to it, and nothing forces either Party to enter into any further agreement." },
  { title: "9. Term", text: "This Agreement lasts for two (2) years from the Effective Date. The confidentiality obligations continue for two (2) years after the Effective Date, except that trade secrets stay protected for as long as they remain trade secrets." },
  { title: "10. Remedies", text: "A breach of this Agreement could cause serious harm that money alone can't fix. The Discloser may seek an injunction or other court order in addition to any other remedy available." },
  { title: "11. Governing law", text: "This Agreement is governed by the laws of India. The courts at Thane, Maharashtra have jurisdiction over any dispute." },
  { title: "12. General", text: "This is the full agreement between the Parties about its subject and replaces any earlier discussions on it. It can be changed only in writing signed by both Parties. If any part is found unenforceable, the rest still applies. It may be signed in counterparts and electronically." }
];

export default function NDAPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    address: '',
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    let y = 20;

    // Helper to add text and handle page breaks
    const addWrappedText = (text: string, fontSize = 10, lineHeight = 5) => {
      doc.setFontSize(fontSize);
      const splitText = doc.splitTextToSize(text, pageWidth - margin * 2);
      for (let i = 0; i < splitText.length; i++) {
        if (y + lineHeight > pageHeight - margin) {
          doc.addPage();
          y = 20;
        }
        doc.text(splitText[i], margin, y);
        y += lineHeight;
      }
    };

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("MUTUAL NON-DISCLOSURE AGREEMENT", pageWidth / 2, y, { align: "center" });
    y += 10;

    // Date
    doc.setFont("helvetica", "normal");
    addWrappedText(`Effective Date: ${currentDate}`, 10, 6);
    y += 5;

    // Parties
    doc.setFont("helvetica", "bold");
    addWrappedText("Party 1:", 10, 5);
    doc.setFont("helvetica", "normal");
    addWrappedText("Tabish, trading as NeedAWebsite, of Thane, Maharashtra, India (\"NeedAWebsite\")", 10, 5);
    y += 3;
    doc.setFont("helvetica", "bold");
    addWrappedText("Party 2:", 10, 5);
    doc.setFont("helvetica", "normal");
    addWrappedText(`${formData.fullName}${formData.companyName ? `, of ${formData.companyName}` : ''}, of ${formData.address} (the "Other Party")`, 10, 5);
    y += 8;

    // Clauses
    ndaClauses.forEach(clause => {
      doc.setFont("helvetica", "bold");
      addWrappedText(clause.title, 11, 6);
      doc.setFont("helvetica", "normal");
      addWrappedText(clause.text, 10, 5);
      y += 4;
    });

    // Signatures
    y += 10;
    if (y > pageHeight - 50) { doc.addPage(); y = 20; }

    doc.setFont("helvetica", "bold");
    addWrappedText("SIGNATURES", 12, 6);
    y += 5;

    // Tabish Signature
    doc.setFont("helvetica", "normal");
    addWrappedText("NeedAWebsite", 10, 5);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(16);
    doc.text("Tabish", margin, y + 5);
    y += 12;
    doc.setFont("helvetica", "normal");
    addWrappedText(`Date: ${currentDate}`, 10, 5);
    y += 15;

    // Client Signature
    doc.setFont("helvetica", "normal");
    addWrappedText("The Other Party", 10, 5);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(16);
    doc.text(formData.fullName, margin, y + 5);
    y += 12;
    doc.setFont("helvetica", "normal");
    addWrappedText(`Date: ${currentDate}`, 10, 5);

    doc.save(`NeedAWebsite_Mutual_NDA_${formData.fullName.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed) return;

    setStatus('submitting');

    try {
      // 1. Send to Formspree
      const response = await fetch('https://formspree.io/f/mnppyvyv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          signature: formData.fullName,
          date: currentDate,
          agreement: 'Signed Mutual NDA',
        }),
      });

      if (response.ok) {
        // 2. Generate and download PDF
        generatePDF();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] flex items-center justify-center px-6 transition-colors duration-200">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl text-center shadow-xl">
          <CheckCircle2 className="w-16 h-16 text-[#16A34A] mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-[#0A0A0A] dark:text-white mb-2">NDA Signed Successfully</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Thank you, {formData.fullName}. Your NDA has been sent to Tabish and a copy has been downloaded to your device.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={generatePDF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <Download className="w-4 h-4" /> Download Another Copy
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#16A34A] text-white font-semibold rounded-lg hover:bg-[#15803D] transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#09090B] min-h-screen text-[#0A0A0A] dark:text-zinc-50 font-sans py-20 px-6 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <ShieldCheck className="w-12 h-12 text-[#16A34A] mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Mutual NDA</h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Please review the agreement below. When you're ready, fill in your details at the bottom to sign it electronically.
          </p>
        </div>

        {/* NDA Document View */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-12 mb-12 shadow-sm text-sm md:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-widest">Mutual Non-Disclosure Agreement</h2>
          
          <p className="mb-6 font-semibold">Effective Date: {currentDate}</p>
          
          <p className="mb-4">This Mutual Non-Disclosure Agreement is made between:</p>
          <p className="mb-4"><strong>Party 1:</strong> Tabish, trading as NeedAWebsite, of Thane, Maharashtra, India ("NeedAWebsite")</p>
          <p className="mb-6"><strong>Party 2:</strong> The individual or company signing this form (the "Other Party")</p>
          
          <div className="space-y-6 mt-8">
            {ndaClauses.map((clause, i) => (
              <div key={i}>
                <h3 className="font-bold mb-1">{clause.title}</h3>
                <p className="text-zinc-700 dark:text-zinc-300">{clause.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold mb-4 uppercase tracking-widest text-center">Signatures</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold mb-2">NeedAWebsite</p>
                <p className="font-serif italic text-3xl text-zinc-400 dark:text-zinc-500 mb-2">Tabish</p>
                <p className="text-sm text-zinc-500">Date: {currentDate}</p>
              </div>
              <div>
                <p className="font-semibold mb-2">The Other Party</p>
                <div className="h-10 border-b border-dashed border-zinc-300 dark:border-zinc-700 mb-2 flex items-end">
                  <span className="font-serif italic text-2xl text-[#16A34A]">{formData.fullName || '\u00A0'}</span>
                </div>
                <p className="text-sm text-zinc-500">Date: {currentDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Form */}
        <div className="bg-white dark:bg-zinc-900 border border-[#16A34A]/30 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Sign the NDA</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="e.g. Rahul Sharma" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Company Name (Optional)</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="e.g. Sharma & Co." />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Address *</label>
                <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-[#16A34A] focus:border-transparent outline-none" placeholder="City, State" />
              </div>
            </div>

            <label className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg cursor-pointer border border-zinc-200 dark:border-zinc-700">
              <input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className="mt-1 w-5 h-5 accent-[#16A34A]" required />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                I agree that typing my full name and clicking "Sign & Send" constitutes a legally binding electronic signature to this Mutual Non-Disclosure Agreement.
              </span>
            </label>

            {status === 'error' && (
              <p className="text-red-500 text-sm font-semibold">Something went wrong. Please try again or email us directly.</p>
            )}

            <button
              type="submit"
              disabled={!isAgreed || status === 'submitting'}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg shadow-lg transition-all duration-300"
            >
              {status === 'submitting' ? 'Signing...' : (
                <>
                  Sign & Send NDA <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
