import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-white/60 mb-8">Last updated: September 2025</p>

        <p className="text-white/80 leading-relaxed mb-6">
          Lazy Ops uses cookies and similar technologies to improve and secure our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Types of Cookies We Use</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Essential – required for basic site functionality.</li>
          <li>Analytics – Google Analytics cookies help us understand how visitors use our site.</li>
          <li>Functional – may remember your preferences (e.g., language).</li>
        </ul>

        <p className="text-white/80 leading-relaxed mt-6">
          We do not use cookies to sell your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Managing Cookies</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          You can accept or reject non-essential cookies through our cookie banner when you first visit. You can also adjust your browser settings to block or delete cookies.
        </p>
        <p className="text-white/80 leading-relaxed mb-6">
          If you block essential cookies, parts of the site may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-white/80 leading-relaxed">
          For questions, contact us at <a href="mailto:isauraconsulting@gmail.com" className="text-lazy-green underline">isauraconsulting@gmail.com</a>.
          <br />For full details on who we are, please see our{' '}
          <a href="/privacy" className="text-lazy-green underline">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
};

export default CookiePolicy;


