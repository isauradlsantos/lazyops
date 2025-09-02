import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 py-16 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center space-x-4">
          <img 
            src="/lazy-ops.png" 
            alt="Lazy Ops" 
            className="w-12 h-12"
          />
          <span className="text-3xl font-bold text-white tracking-tight">Lazy Ops</span>
        </div>
        <p className="text-white/60 text-lg">Growth consulting by Isaura Santos</p>
        <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
          <a href="/privacy" className="underline hover:text-white transition-colors">Privacy policy</a>
          <span className="text-white/30">•</span>
          <a href="/terms" className="underline hover:text-white transition-colors">Terms & conditions</a>
          <span className="text-white/30">•</span>
          <a href="/cookies" className="underline hover:text-white transition-colors">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;