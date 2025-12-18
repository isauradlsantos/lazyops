import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Proof from recent client work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70">
            Recent examples of system-led growth installed during founding-level engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 bg-black/40">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
              Service business (2024)
            </h3>
            <p className="text-sm sm:text-base text-white/60 mb-4 sm:mb-5 md:mb-6">Founding-level growth & ops engagement</p>
            <div className="space-y-4 md:space-y-5">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-lazy-green leading-tight">€2k → €18k MRR in 30 days</p>
              <p className="text-base sm:text-lg md:text-xl text-white/80">€101k year-one revenue</p>
              <p className="text-base sm:text-lg text-white/60">Built on a ~16-hour weekly execution system</p>
            </div>
          </div>
          
          <div className="rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 bg-black/40">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
              B2B startup — growth reset (2025)
            </h3>
            <p className="text-sm sm:text-base text-white/60 mb-4 sm:mb-5 md:mb-6">Founding-level growth reset engagement</p>
            <div className="space-y-4 md:space-y-5">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-lazy-green leading-tight">Average deal size €10k → €25k+ in 90 days</p>
              <p className="text-base sm:text-lg md:text-xl text-white/80">Clearer positioning and productized offers</p>
              <p className="text-base sm:text-lg text-white/60">Execution stabilized and stopped leaking energy</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs sm:text-sm md:text-base text-white/60">
            Results driven by system installation — not tactics or one-off campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;