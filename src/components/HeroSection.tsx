import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 bg-black relative overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lazy-green/5 via-transparent to-lazy-green/10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
              Build Your{' '}
              <span className="text-lazy-green">Growth OS + Scalable Ops Plan</span>{' '}
              in One Focused Sprint
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              A fractional-CMO sprint led by Isaura Santos that sharpens your GTM, 
              accelerates pipeline, installs a scalable ops backbone, and hands off a repeatable acquisition system 
              your team can run on its own.
            </p>
          </div>
          
          <a 
            href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura-lazy-ops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-lazy-green hover:bg-white text-black px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 hover:shadow-2xl cursor-pointer"
          >
            <span>Start Your Growth Sprint</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-lazy-green/20 rounded-3xl blur-3xl scale-110"></div>
          <img 
            src="/isaura-photo.png" 
            alt="Isaura Santos" 
            className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;