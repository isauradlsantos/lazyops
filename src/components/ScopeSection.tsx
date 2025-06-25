import React from 'react';
import { Check, X } from 'lucide-react';

const ScopeSection: React.FC = () => {
  const included = [
    'GTM strategy & positioning docs',
    'Funnel design & copy templates',
    'Experiment roadmap & analytics setup',
    'Playbook creation + 30-day Slack Q&A buffer'
  ];

  const notIncluded = [
    'Managing daily paid-ad operations',
    'Hiring or HR processes',
    'Ongoing community/event management',
    'Long-term ops/maintenance beyond 30-day buffer'
  ];

  return (
    <section className="py-32 px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center tracking-tight">Scope Guardrails</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <h3 className="text-3xl font-bold text-lazy-green mb-8 flex items-center">
              <Check className="w-8 h-8 mr-4" />
              Included
            </h3>
            <ul className="space-y-6">
              {included.map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-lazy-green flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <h3 className="text-3xl font-bold text-red-400 mb-8 flex items-center">
              <X className="w-8 h-8 mr-4" />
              Not Included
            </h3>
            <ul className="space-y-6">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;