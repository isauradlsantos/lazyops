import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-white/60 mb-8">Last updated: September 2025</p>

        <p className="text-white/80 leading-relaxed mb-6">
          Welcome to Lazy Ops. By using our website, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Purpose</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          Lazy Ops is an informational website about our services. It allows visitors to learn about us and book calls via TidyCal.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Use of the Website</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>You may use the site for lawful purposes only.</li>
          <li>You may not attempt to gain unauthorized access or disrupt the site.</li>
          <li>Content on this site is owned by Lazy Ops and may not be copied or reused without permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          This website is provided “as is.” We make no guarantees about availability or results. To the fullest extent permitted by law, Lazy Ops is not liable for any indirect or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Governing Law</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          These Terms are governed by Portuguese law, and disputes shall be resolved in Portuguese courts.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-white/80 leading-relaxed">
          For questions, contact us at <a href="mailto:isauraconsulting@gmail.com" className="text-lazy-green underline">isauraconsulting@gmail.com</a>.
        </p>
      </div>
    </main>
  );
};

export default TermsConditions;


