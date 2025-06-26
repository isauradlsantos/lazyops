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
    <section className="py-32 px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center tracking-tight">The Bottleneck We Break</h2>
        <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <p className="text-2xl text-white/80 mb-12 leading-relaxed">
            High-potential companies stall when growth depends on inconsistent founder hustle, one-off campaigns, and scrappy back-office ops that can't keep up. Automation and tooling only click into place once:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {bottlenecks.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-2xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-lazy-green flex-shrink-0" />
                <span className="text-lg text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-2xl font-semibold text-lazy-green text-center">
            Lazy Ops delivers that growth foundation in one focused sprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottleneckSection;