import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | NeedAWebsite',
  description: 'Terms of Service for NeedAWebsite. Read our website terms and service terms for clients.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#09090B] min-h-screen text-[#0A0A0A] dark:text-zinc-50 font-sans py-20 px-6 transition-colors duration-200">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-2xl shadow-sm">
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          Last updated: November 2026
        </p>

        <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
          <p>
            These Terms have two parts. <strong>Part A</strong> applies to everyone who visits needawebsite.in. <strong>Part B</strong> applies to clients who hire NeedAWebsite for a project. By using the website or hiring us, you agree to the relevant terms.
          </p>

          <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-white mt-12 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Part A: Website Terms</h2>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A1. Using this website</h3>
          <p>You may use this website for lawful purposes only. Please don't try to break it, copy it in bulk, interfere with how it works, or use it to harm others.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A2. Our content and ownership</h3>
          <p>Everything on this website, including text, designs, graphics, logos, images and code, belongs to NeedAWebsite or its licensors and is protected by law. You may not copy, reproduce or reuse it without our written permission.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A3. Information is general</h3>
          <p>The content on this website is for general information. We work to keep it accurate and up to date, but we make no promises that it is complete or error-free.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A4. Results are not guaranteed</h3>
          <p>Outcomes such as search rankings, traffic or enquiries depend on many things outside our control. Nothing on this website is a guarantee of any specific result.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A5. Links to other websites</h3>
          <p>We may link to third-party websites. We don't control them and aren't responsible for them.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A6. Limitation of liability</h3>
          <p>The website is provided "as is". To the extent allowed by law, NeedAWebsite is not liable for any loss arising from your use of the website.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">A7. Changes</h3>
          <p>We may update the website and these terms at any time. Continuing to use the website means you accept the updated terms.</p>

          <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-white mt-12 mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Part B: Service Terms for Clients</h2>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B1. Scope of work</h3>
          <p>Each project is defined by a written quote, proposal or message exchange that sets out what we'll deliver, what's included and the price (the "Agreed Scope"). Anything not listed in the Agreed Scope is not included. Extra work, such as additional pages or features, will be quoted separately.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B2. Fees and payment</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fees are as stated in the Agreed Scope and are in Indian rupees.</li>
            <li>Payment may be made in full upfront or in two parts (for example 50% to begin and 50% before final delivery), as agreed for your project.</li>
            <li>Work begins once the first payment is received.</li>
            <li>Final files and access are handed over after full payment.</li>
            <li>Late payments may pause the project.</li>
          </ul>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B3. Timelines</h3>
          <p>We'll give you an estimated delivery time with your quote. Timelines start once we have received the first payment and all the content and details we need from you. If we're waiting for your content, feedback or approvals, the timeline is extended accordingly.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B4. Your responsibilities</h3>
          <p>You agree to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Give us accurate details, content and materials on time</li>
            <li>Make sure you own or have permission to use everything you send us (text, images, logos, music, fonts and so on)</li>
            <li>Review work and give feedback promptly</li>
          </ul>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B5. Revisions</h3>
          <p>The number of revision rounds is stated in your Agreed Scope. (The ₹1,499 one page website includes one revision round.) Further changes are quoted separately.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B6. Specialists</h3>
          <p>To deliver your project, we may bring in trusted specialists, such as writers, designers or engineers. They work under our direction and are bound by confidentiality. We remain your point of contact.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B7. Ownership of the work</h3>
          <p>Once you've paid in full, you own the final website design and content created for you. Until then, we keep ownership of all work. We keep the right to use general tools, code and methods that we use across projects. Third-party items, such as stock images, fonts and plugins, stay under their own licences.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B8. Portfolio</h3>
          <p>We may show the completed project in our portfolio and marketing, unless you ask us in writing not to.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B9. Domain and hosting</h3>
          <p>Your domain name is bought and owned by you. Hosting, where included, is provided for the period stated in your Agreed Scope and renews at the price stated there. Design updates after launch are quoted separately.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B10. Access and passwords</h3>
          <p>If you share logins with us, we'll use them only for your project. When the project is complete, we'll give you full access and ask you to change all passwords. We then remove our access.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B11. No guarantee of results</h3>
          <p>We'll set up your website with care, including basic SEO where included. But we can't promise any specific search ranking, traffic, enquiries or sales.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B12. Confidentiality</h3>
          <p>We keep your business information confidential. If you'd like a formal agreement, we're happy to sign the Mutual NDA available on our website.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B13. Cancellation and refunds</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>You may cancel a project at any time by telling us in writing.</li>
            <li>Payments for work already done, and any amount paid to start the project, are non-refundable.</li>
            <li>If we cancel before completing the work, we'll refund the part of the payment that covers work not yet done.</li>
          </ul>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B14. Limitation of liability</h3>
          <p>To the extent allowed by law, NeedAWebsite's total liability for any claim related to a project is limited to the amount you paid us for that project. We are not liable for indirect or consequential losses, such as lost profits, lost business or lost data.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B15. Your content and legal claims</h3>
          <p>You are responsible for the content you give us. You agree to protect NeedAWebsite against claims arising from material you provided that you did not have the right to use.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B16. Events beyond our control</h3>
          <p>Neither of us is responsible for delays or failures caused by events outside our reasonable control, such as power or internet outages, natural events or government actions.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B17. Dispute resolution and governing law</h3>
          <p>We hope to solve any problem by talking it through first. If we can't, these terms are governed by the laws of India, and the courts at Thane, Maharashtra will have jurisdiction.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">B18. General</h3>
          <p>These terms, together with your Agreed Scope, are the full agreement between us. If any part is found unenforceable, the rest still applies. We may update these terms; changes don't affect projects already agreed.</p>

          <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mt-6 mb-2">Contact</h3>
          <p>Email: hello@needawebsite.in</p>
        </div>
      </div>
    </div>
  );
}
