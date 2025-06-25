import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const ProofSection: React.FC = () => {
  const cases = [
    {
      title: 'Two-Person Service Startup (2024)',
      snapshot: 'Began at €2,120 /mo with only two operational co-founders.',
      results: '€18,228 in Month 1 (+760%), €72,902.58 in the first 7 months, €101,265 in year one—even after a deliberate slow-down.',
      icon: TrendingUp
    },
    {
      title: 'B2B Startup – Pricing Reset (2025)',
      snapshot: 'Proposals were stuck at €10k and closing inconsistently. Isaura repackaged the offer and reframed its value.',
      results: 'New €25k proposals were accepted within the first 3 months, boosting average deal size 150%—and we\'re now actively testing €30k proposals to capture even more upside.',
      icon: DollarSign
    }
  ];

  return (
    <section className="py-32 px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center tracking-tight">Proof in the Wild</h2>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-lazy-green/30 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-lazy-green/20 rounded-2xl flex items-center justify-center mr-6">
                  <caseStudy.icon className="w-8 h-8 text-lazy-green" />
                </div>
                <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lazy-green mb-3 text-lg">Snapshot</h4>
                  <p className="text-white/70 text-lg leading-relaxed">{caseStudy.snapshot}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lazy-green mb-3 text-lg">Results</h4>
                  <p className="text-white/70 text-lg leading-relaxed">{caseStudy.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10">
          <h3 className="text-3xl font-bold text-lazy-green mb-6">Takeaway</h3>
          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
            Whether it's multiplying monthly revenue for a lean two-person team or ratcheting deal size 
            from €10k to €30k, the Growth Sprint installs a durable, scalable system 
            that grows on your terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;