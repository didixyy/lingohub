
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-warm-beige sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-[20px]">pets</span>
        </div>
        <h1 className="text-xl font-bold text-text-main tracking-tight">发现</h1>
      </div>
      <div className="flex items-center gap-5 text-text-main">
        <button className="flex items-center justify-center">
          <span className="material-symbols-outlined text-[26px]">search</span>
        </button>
        <button className="flex items-center justify-center relative">
          <span className="material-symbols-outlined text-[26px]">notifications</span>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-warm-beige"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
