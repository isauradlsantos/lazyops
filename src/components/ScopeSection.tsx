import React from 'react';
import { Check, X } from 'lucide-react';

const ScopeSection: React.FC = () => {
  const included = [
    'Founding-level Growth, Marketing & Ops leadership (hands-on)',
    'Clear scope, timelines, and ownership',
    'Productized execution systems installed with your team',
    'Clean system handoff — no long-term dependency'
  ];

  const notIncluded = [
    'Hourly consulting',
    'Coaching or courses',
    'Retainers',
    '"Growth hacks" without systems or ownership'
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-10 items-start">
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Scope guardrails
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              Clear lines so the engagement stays focused on system installation instead of open-ended support.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-lazy-green flex items-center gap-2">
                <Check className="w-4 h-4" />
                Included
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-lazy-green mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight invisible">
              Scope guardrails
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed invisible">
              Clear lines so the engagement stays focused on system installation instead of open-ended support.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-red-400 flex items-center gap-2">
                <X className="w-4 h-4" />
                Explicitly not included
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 text-center space-y-3">
          <h3 className="text-sm sm:text-base md:text-lg text-white/70">
            If you're looking for advice-only, this isn't a fit.
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            If you want <span className="text-lazy-green">execution that compounds,</span> it is.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;