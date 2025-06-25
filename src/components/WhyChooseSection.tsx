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
      title: 'Documented Growth System',
      description: 'your team can run in-house.'
    },
    {
      icon: Repeat,
      title: 'Reusable Growth Playbook',
      description: 'you can leverage long after the engagement, at virtually no additional cost.'
    }
  ];

  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center tracking-tight">Why Choose Lazy Ops</h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-lazy-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-lazy-green/30 transition-all duration-300">
                <reason.icon className="w-10 h-10 text-lazy-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;