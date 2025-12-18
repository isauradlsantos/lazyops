import React from 'react';
import { ArrowRight } from 'lucide-react';

const NextStepsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
          Execution should get easier as you grow — not harder.
        </p>
        <a 
          href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-lazy-green hover:bg-white text-black px-7 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-4.5 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] flex items-center space-x-3 hover:shadow-2xl cursor-pointer inline-flex justify-center"
        >
          <span>Start a Growth Sprint</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default NextStepsSection;