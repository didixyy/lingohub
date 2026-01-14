
import React from 'react';
import { AppTab } from '../types';

interface NavigationProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-warm-beige/95 backdrop-blur-xl border-t border-orange-100/50 px-6 pb-8 pt-2.5 z-[100]">
      <div className="max-w-md mx-auto flex items-end justify-between">
        <button 
          onClick={() => setActiveTab(AppTab.HOME)}
          className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === AppTab.HOME ? 'text-brand-primary' : 'text-text-muted'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === AppTab.HOME ? 'fill-1' : ''}`}>home</span>
          <span className="text-[10px] font-bold">首页</span>
        </button>
        
        <button 
          onClick={() => setActiveTab(AppTab.COMMUNITY)}
          className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === AppTab.COMMUNITY ? 'text-brand-primary' : 'text-text-muted'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === AppTab.COMMUNITY ? 'fill-1' : ''}`}>forum</span>
          <span className="text-[10px] font-bold">社区</span>
        </button>

        <div className="relative -top-5">
          <button 
            onClick={() => setActiveTab(AppTab.AI_PRACTICE)}
            className="w-[3.75rem] h-[3.75rem] bg-brand-primary rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_-5px_rgba(255,142,83,0.5)] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[32px]">mic</span>
          </button>
        </div>

        <button 
          onClick={() => setActiveTab(AppTab.STUDY)}
          className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === AppTab.STUDY ? 'text-brand-primary' : 'text-text-muted'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === AppTab.STUDY ? 'fill-1' : ''}`}>school</span>
          <span className="text-[10px] font-bold">学习</span>
        </button>

        <button 
          onClick={() => setActiveTab(AppTab.PROFILE)}
          className={`flex flex-col items-center gap-1.5 transition-colors ${activeTab === AppTab.PROFILE ? 'text-brand-primary' : 'text-text-muted'}`}
        >
          <span className={`material-symbols-outlined text-[26px] ${activeTab === AppTab.PROFILE ? 'fill-1' : ''}`}>person</span>
          <span className="text-[10px] font-bold">我的</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
