import React from 'react';

const BottleneckSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 mt-16 lg:mt-32 bg-black">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-[0.7fr,1.3fr] gap-8 md:gap-14 items-start">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-lazy-green/5 blur-xl pointer-events-none" />
            <div className="relative rounded-2xl border border-white/10 bg-black/40 px-5 py-6 sm:px-6 sm:py-7 md:px-7 md:py-8 space-y-3">
              <p className="uppercase tracking-[0.18em] text-xs sm:text-[13px] text-white/40">
                The real bottleneck
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                Most teams don't stall because of a lack of ideas.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
                They stall because execution is held together by founder effort instead of systems.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:ml-8 lg:ml-12">
            <p className="text-sm sm:text-base md:text-lg text-white/70">
              In most teams, this looks like:
            </p>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start">
                <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-lazy-green mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                  Growth depends on founder effort instead of systems
                </span>
              </li>
              <li className="flex items-start">
                <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-lazy-green mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                  Execution is ad-hoc and doesn't compound
                </span>
              </li>
              <li className="flex items-start">
                <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-lazy-green mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                  Marketing, sales, and ops don't move as one system
                </span>
              </li>
              <li className="flex items-start">
                <span className="relative top-[0.45em] h-2 w-2 rounded-full bg-lazy-green mr-3 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                  Momentum breaks as soon as priorities shift
                </span>
              </li>
            </ul>
            <div className="pt-2 space-y-1">
              <p className="text-sm sm:text-base md:text-lg text-white/70">
                More tools and agencies won't fix this.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-lazy-green leading-tight">
                Installing execution systems does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottleneckSection;