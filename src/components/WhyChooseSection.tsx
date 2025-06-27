import React from 'react';
import { Zap, Clock, FileText, Repeat } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Fractional-CMO Firepower',
      description: 'senior expertise exactly when you need it, and only for as long as you need it.'
    },
    {
      icon: Clock,
      title: 'Productized, Time-boxed Engagement',
      description: 'no scope creep.'
    },
    {
      icon: FileText,
      title: 'Documented Growth System & Ops Backbone',
      description: 'your team can run both in-house.'
    },
    {
      icon: Repeat,
      title: 'Reusable Growth Playbook',
      description: 'leverage the GTM plan and the supporting ops long after the engagement, at virtually no additional cost.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-14 md:mb-16 text-center tracking-tight">Why Choose Lazy Ops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lazy-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-lazy-green/30 transition-all duration-300">
                <reason.icon className="w-8 h-8 sm:w-10 sm:h-10 text-lazy-green" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-base md:text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;