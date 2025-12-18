import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    'Senior operator, not an agency',
    'Fixed scope, no chaos',
    'Systems you keep after I leave'
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-[0.7fr,1.3fr] gap-8 md:gap-14 items-start">
          {/* Left side: Why Lazy Ops - bullet points */}
          <div className="space-y-4 md:ml-8 lg:ml-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 sm:mb-6">
              Why Lazy Ops
            </h2>
            <ul className="space-y-2.5 sm:space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-lazy-green mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Execution statement + CTA in a card */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-lazy-green/5 blur-xl pointer-events-none" />
            <div className="relative rounded-2xl border border-white/10 bg-black/40 px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Execution should get easier as you grow, not harder.
              </p>
              <a 
                href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-lazy-green hover:bg-white text-black px-7 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-4.5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-3 hover:shadow-2xl cursor-pointer w-full sm:w-auto"
              >
                <span>Start a Growth Sprint</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;