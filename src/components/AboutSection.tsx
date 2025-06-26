import React from 'react';
import { Mail } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
);

const AboutSection: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-bold text-white tracking-tight">Meet Isaura Santos</h2>
        <p className="text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
          <strong className="text-lazy-green font-semibold">Lazy Ops</strong> is the solo consulting practice of <strong className="text-lazy-green font-semibold">Isaura Santos</strong>.
          As your fractional CMO, she blends the creativity to drive growth with the structured discipline that supports ops—pairing sharp GTM strategy with an operational backbone that lasts. Isaura rallies teams and turns ideas into action by putting the right processes in place. Her experience spans AI startups, consulting services, design studios, content teams, brand agencies, and more. You work with her directly—no agency layers, just senior expertise ready to help you scale.
        </p>
        
        {/* Social icons */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <a
            href="mailto:isauraconsulting@gmail.com"
            className="text-lazy-green hover:text-green-400 transition-colors duration-200 p-3 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="Email"
          >
            <Mail className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/isaurasantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lazy-green hover:text-green-400 transition-colors duration-200 p-3 bg-white/5 rounded-full hover:bg-white/10"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;