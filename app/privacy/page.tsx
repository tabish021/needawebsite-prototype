import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NeedAWebsite',
  description: 'Privacy Policy for NeedAWebsite. Learn how we collect, use and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#09090B] min-h-screen text-[#0A0A0A] dark:text-zinc-50 font-sans py-20 px-6 transition-colors duration-200">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 rounded-2xl shadow-sm">
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          Last updated: November 2026
        </p>

        <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
          <p>
            This Privacy Policy explains how NeedAWebsite ("we", "us", "our") collects, uses and protects your personal information when you visit needawebsite.in or use our services.
          </p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">1. Information we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Information you give us:</strong> your name, email address and phone number when you fill in a contact form, message us on WhatsApp, email us or speak to us on a call.</li>
            <li><strong>Project information:</strong> if you become a client, your business details, text, images and other materials you share with us, and, where needed to do the work, access details (such as logins) for your website, hosting, domain or accounts.</li>
            <li><strong>Basic technical information:</strong> details such as your browser, device and the pages you visit, collected automatically through standard website tools.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">2. How we use your information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To reply to your enquiries and send you quotes or proposals</li>
            <li>To deliver the services you ask for</li>
            <li>To communicate with you about your project</li>
            <li>To keep our website working and improve it</li>
            <li>To meet legal and tax obligations</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">3. Consent</h2>
          <p>We collect and use your personal information with your consent, which you give when you submit your details to us. You can withdraw your consent at any time by writing to hello@needawebsite.in. Withdrawing consent does not affect anything done before you withdrew it.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">4. Access details you share with us</h2>
          <p>If you share logins or other access details so that we can build or update your website:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>We use them only for your project.</li>
            <li>We store them securely and share them only with specialists who need them to work on your project.</li>
            <li>When the project is complete, we hand over full access to you and ask you to change all passwords. We then remove our access and delete any stored copies of your access details.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">5. Sharing your information</h2>
          <p>We share personal information only when it's needed:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Third-party service providers,</strong> when and if required, such as for hosting, analytics, communication or payments. These providers have their own privacy policies.</li>
            <li><strong>Specialists working on your project,</strong> such as writers, designers or engineers, who are bound by confidentiality.</li>
            <li><strong>Authorities,</strong> where the law requires it.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">6. Cookies</h2>
          <p>Our website may use basic cookies to work properly and to understand how visitors use it. You can control or delete cookies in your browser settings. If you turn cookies off, parts of the website may not work as expected.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">7. How long we keep your information</h2>
          <p>We keep your information only for as long as needed for the purposes above or as required by law. After that, we delete it or make it anonymous.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">8. Security</h2>
          <p>We take reasonable steps to protect your information. However, no method of sending or storing data online is completely secure, so we can't guarantee absolute security.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">9. Your rights</h2>
          <p>You can ask us to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-2">
            <li>Tell you what personal information we hold about you</li>
            <li>Correct information that is wrong or incomplete</li>
            <li>Delete your information</li>
            <li>Stop using your information</li>
          </ul>
          <p>To do any of these, or to raise a concern, email hello@needawebsite.in. We'll respond within 30 days.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">10. Children</h2>
          <p>Our website and services are meant for adults. We do not knowingly collect personal information from anyone under 18.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">11. Links to other websites</h2>
          <p>Our website may link to other websites. We're not responsible for their content or privacy practices.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">12. Changes to this policy</h2>
          <p>We may update this policy from time to time. The latest version will always be on this page, with the date above.</p>

          <h2 className="text-xl font-bold text-[#0A0A0A] dark:text-white mt-8 mb-2">13. Contact us</h2>
          <p>NeedAWebsite, Thane, Maharashtra, India<br />Email: hello@needawebsite.in</p>
        </div>
      </div>
    </div>
  );
}
