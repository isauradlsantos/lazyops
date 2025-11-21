import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/60 mb-8">Last updated: September 2025</p>

        <p className="text-white/80 leading-relaxed mb-6">
          Lazy Ops (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or book a call with us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Booking information: name, email, and any details you provide when scheduling a call via TidyCal.</li>
          <li>Analytics data: information about how you use our site (via Google Analytics), such as page views, browser type, and device.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>To schedule and manage calls you book with us.</li>
          <li>To understand how visitors use our site and improve the experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Who We Share With</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>TidyCal: to manage bookings.</li>
          <li>Google Analytics: to collect anonymized usage data.</li>
          <li>We do not sell or share your personal information for advertising purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Data Retention</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Booking information: kept as long as needed to manage our communication.</li>
          <li>Analytics data: kept up to 26 months (Google Analytics default).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights (EU GDPR)</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          You have the right to access, correct, delete, or limit use of your personal data. You can also object to processing or request portability of your data.
        </p>
        <p className="text-white/80 leading-relaxed mb-8">
          To exercise these rights, contact us at <a href="mailto:isauraconsulting@gmail.com" className="text-lazy-green underline">isauraconsulting@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">US Privacy Rights</h2>
        <p className="text-white/80 leading-relaxed mb-6">
          If you are a US resident, you may have additional rights under state laws (such as California CPRA). These include the right to know what personal information we collect, request deletion, and opt out of the sale or sharing of personal data. Since we do not sell or share your information for advertising, these rights are already fully respected.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-white/80 leading-relaxed">
          Lazy Ops — owned by Isaura Santos
          <br />📧 <a href="mailto:isauraconsulting@gmail.com" className="text-lazy-green underline">isauraconsulting@gmail.com</a>
          <br />📍 Rua Peixinho Júnior 1, 4E, 2770-136, Paço de Arcos, Portugal
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;


