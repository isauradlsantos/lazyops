import React from 'react';
import { ArrowRight, CheckSquare, Phone, Rocket } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
);

const NextStepsSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Fit Check (3-min form)',
      description: 'confirm goals & readiness',
      icon: CheckSquare
    },
    {
      number: '2',
      title: '30-min Quick-Win Call',
      description: 'pinpoint highest-impact levers',
      icon: Phone
    },
    {
      number: '3',
      title: 'Kick-off Strategy Session',
      description: 'align roadmap & start the Sprint',
      icon: Rocket
    }
  ];

  return (
    <section className="py-32 px-8 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">Next Steps</h2>
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-zinc-950/50 backdrop-blur-sm rounded-3xl p-10 hover:bg-zinc-900/50 transition-all duration-300 border border-white/10 hover:border-lazy-green/30">
                <div className="w-16 h-16 bg-lazy-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-lazy-green/30 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-lazy-green" />
                </div>
                <div className="text-3xl font-bold text-lazy-green mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70 text-base">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-lazy-green to-green-400 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-black mb-6">
            Ready to unlock predictable, compounding growth?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-900 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 group hover:shadow-2xl cursor-pointer"
            >
              <span>Start Your Growth Sprint</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/isaurasantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-900 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 group hover:shadow-2xl cursor-pointer"
              aria-label="Connect on LinkedIn"
            >
              <LinkedInIcon />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;