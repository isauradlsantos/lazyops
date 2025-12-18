import React from 'react';

const GrowthSprintSection: React.FC = () => {
  const included = [
    'Positioning, ICP, and pricing clarity',
    'Predictable acquisition and pipeline rhythm',
    'Growth, delivery, and ops operating systems',
    'Hands-on implementation with your team',
    'Clean handoff so execution runs without me'
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-10 items-start">
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              The Growth Sprint
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              A fixed-scope, time-boxed engagement where I step in as founding-level Growth & Ops leadership to install the execution systems your team needs — then step out.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
              I typically step in when a founder needs their first real growth operator but doesn't want to hire too early or create long-term dependency.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-lazy-green leading-relaxed">
              This is not consulting. This is system installation.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white">
              What's included:
            </p>
            <ul className="space-y-2.5 sm:space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lazy-green mr-3 mt-1 text-lg">•</span>
                  <span className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSprintSection;