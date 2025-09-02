import React from 'react';
import { CheckCircle } from 'lucide-react';

const BottleneckSection: React.FC = () => {
  const bottlenecks = [
    'Positioning is crystal-clear',
    'Funnels convert predictably',
    'Core operations are mapped and scalable',
    'Experiments run methodically'
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-14 md:mb-16 text-center tracking-tight">The Bottleneck We Break</h2>
        <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10">
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            High-potential companies stall when growth depends on inconsistent founder hustle, one-off campaigns, and scrappy back-office ops that can't keep up. Automation and tooling only click into place once:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {bottlenecks.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4 bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-lazy-green flex-shrink-0" />
                <span className="text-base sm:text-lg text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg sm:text-2xl font-semibold text-lazy-green text-center">
            Lazy Ops delivers that growth foundation in one focused sprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottleneckSection;