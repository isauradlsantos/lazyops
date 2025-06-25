import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-5xl font-bold text-white tracking-tight">Meet Isaura Santos</h2>
        <p className="text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
          <strong className="text-lazy-green font-semibold">Lazy Ops</strong> is the growth consulting practice of 
          <strong className="text-lazy-green font-semibold"> Isaura Santos</strong>, an innovative and creative growth strategist 
          and fractional CMO who has scaled AI startups, consulting services, design studios, 
          multimedia production teams, brand agencies, and more. When you engage Lazy Ops, 
          you work directly with Isaura—no agency layers, just senior-level expertise 
          laser-focused on your metrics.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;