import React from 'react';
import { ArrowRight, CheckSquare, Phone, Rocket } from 'lucide-react';

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
        <h2 className="text-5xl font-bold text-white mb-16 tracking-tight">Next Steps</h2>
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-zinc-950/50 backdrop-blur-sm rounded-3xl p-10 hover:bg-zinc-900/50 transition-all duration-300 border border-white/10 hover:border-lazy-green/30">
                <div className="w-20 h-20 bg-lazy-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-lazy-green/30 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-lazy-green" />
                </div>
                <div className="text-4xl font-bold text-lazy-green mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70 text-lg">{step.description}</p>
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
          <h3 className="text-3xl font-bold text-black mb-6">
            Ready to unlock predictable, compounding growth?
          </h3>
          <a 
            href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura-lazy-ops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black hover:bg-zinc-900 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto group hover:shadow-2xl cursor-pointer"
          >
            <span>Start Your Growth Sprint</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;