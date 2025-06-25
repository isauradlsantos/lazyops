import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/lazy-ops.png" 
            alt="Lazy Ops" 
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-white tracking-tight">Lazy Ops</span>
        </div>
        <a 
          href="https://tidycal.com/isaurasantos/30-minute-meeting-with-isaura-lazy-ops" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-lazy-green hover:bg-lazy-green/90 text-black px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lazy-green/25 cursor-pointer"
        >
          START YOUR GROWTH SPRINT
        </a>
      </div>
    </header>
  );
};

export default Header;