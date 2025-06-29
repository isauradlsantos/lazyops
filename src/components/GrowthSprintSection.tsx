import React from 'react';
import { Clock, Target, Zap, ArrowRight } from 'lucide-react';

const GrowthSprintSection: React.FC = () => {
  const outcomes = [
    'Strong brand clarity for every segment you serve',
    'Validated pricing, offering, and messaging for your service or product',
    'Operational systems & SOPs that keep growth humming without founder over-involvement'
  ];

  const deliverables = [
    { priority: 'Positioning & Narrative', outcome: 'Clear, differentiated value prop for each segment' },
    { priority: 'Ideal Customer Profiles', outcome: 'Data-driven ICPs for enterprise, mid-market, and self-serve' },
    { priority: 'Pricing & Packaging', outcome: 'Tested plans, usage tiers, and expansion levers' },
    { priority: 'Acquisition Funnel', outcome: 'High-conversion funnel & onboarding journeys' },
    { priority: 'Growth Agenda', outcome: 'Monthly experiment roadmap across content, paid media, partnerships, affiliate programs' },
    { priority: 'Growth-Supporting Ops', outcome: 'Documented SOPs & scaling roadmap with consultative recommendations' }
  ];

  const framework = [
    { step: '1. Position', description: 'market clarity, pricing strategy, messaging' },
    { step: '2. Pilot', description: 'ICP targeting, funnel testing, conversion events + RevOps quick wins' },
    { step: '3. Playbook', description: 'repeatable growth engine & supporting ops recommendations, training & hand-off' }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Flagship Offer — Growth Sprint</h2>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-base sm:text-lg text-white/70">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white/5 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10">
              <Clock className="w-5 h-5 text-lazy-green" />
              <span>6-Month Fixed-Scope Engagement</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-white/5 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/10">
              <Target className="w-5 h-5 text-lazy-green" />
              <span>Fractional CMO • ~10 high-ROI hours/week <span className="text-xs sm:text-sm">(hours for context; success is judged on deliverables)</span></span>
            </div>
          </div>
        </div>

        {/* North-Star Outcomes */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-12 text-center">North-Star Outcomes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-zinc-950/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-lazy-green/30 transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-lazy-green/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-lazy-green" />
                </div>
                <p className="text-white/80 leading-relaxed text-base sm:text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Priorities & Key Deliverables */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-12 text-center">Core Priorities & Key Deliverables</h3>
          <div className="bg-zinc-950/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-2 bg-lazy-green">
              <div className="p-4 sm:p-6">
                <h4 className="font-bold text-black text-base sm:text-lg">Priority</h4>
              </div>
              <div className="p-4 sm:p-6 border-l border-black/20">
                <h4 className="font-bold text-black text-base sm:text-lg">Outcome</h4>
              </div>
            </div>
            {deliverables.map((item, index) => (
              <div key={index} className="grid grid-cols-2 md:grid-cols-2 border-t border-white/10">
                <div className="p-4 sm:p-6">
                  <span className="font-semibold text-white text-base sm:text-lg">{item.priority}</span>
                </div>
                <div className="p-4 sm:p-6 border-l border-white/10">
                  <span className="text-white/70 text-base sm:text-lg">{item.outcome}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/50 mt-4 sm:mt-6 italic text-center text-sm sm:text-base">
            Included assets: positioning docs, funnel maps, creative templates, SOP library, Notion GTM hub, and Loom hand-off videos.
          </p>
        </div>

        {/* Framework */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-12 text-center">Our 3-Step Framework</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            {framework.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-lazy-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-lazy-green/30 transition-all duration-300">
                  <span className="text-xl sm:text-3xl font-bold text-lazy-green">{index + 1}</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">{item.step}</h4>
                <p className="text-white/70 text-base sm:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment */}
        <div className="bg-zinc-950/50 backdrop-blur-sm rounded-3xl p-6 sm:p-12 text-center border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-12">Investment</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-black/50 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h4 className="text-lg sm:text-xl font-bold text-lazy-green mb-2 sm:mb-4">6-Month Sprint</h4>
              <p className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">monthly retainer</p>
              <p className="text-white/60">renewable</p>
            </div>
            <div className="bg-black/50 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h4 className="text-lg sm:text-xl font-bold text-lazy-green mb-2 sm:mb-4">3-Month Quick-Wins Sprint</h4>
              <p className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">monthly retainer</p>
              <p className="text-white/60">reduced scope / renewable</p>
            </div>
          </div>
          <p className="text-lazy-green font-semibold text-lg sm:text-xl mb-6 sm:mb-8">
            Focus: Build the growth system—then step out.
          </p>
          <a 
            href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura-lazy-ops" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-lazy-green hover:bg-white text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 hover:shadow-2xl cursor-pointer inline-flex justify-center"
          >
            <span>Book a quick call to discuss pricing</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowthSprintSection;