import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 bg-black relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lazy-green/5 via-transparent to-lazy-green/10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        <div className="space-y-8 lg:space-y-10 max-w-2xl">
          <div className="space-y-4 lg:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Build a <span className="text-lazy-green">repeatable growth</span> engine. Without founder chaos.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              Founding-level Growth, Marketing & Ops leadership for startups and scaleups ready to professionalize execution.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed">
              Led growth and operations inside fully remote organizations scaling to multi-million ARR.
            </p>
          </div>

          <a
            href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-lazy-green hover:bg-white text-black px-7 sm:px-9 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
          >
            <span>Book A Free 30-min Audit</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div className="absolute inset-4 sm:inset-6 bg-lazy-green/20 rounded-3xl blur-3xl -z-10" />
          <img
            src="/isaura-photo.png"
            alt="Isaura Santos"
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;