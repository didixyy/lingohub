
import React, { useState } from 'react';
import { DailyClip } from '../types';

interface RoleSelectionSectionProps {
  clip: DailyClip | null;
  onBack: () => void;
  onStartPractice: (role: string) => void;
}

const RoleSelectionSection: React.FC<RoleSelectionSectionProps> = ({ clip, onBack, onStartPractice }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>('r1');

  if (!clip) return null;

  const roles = [
    { id: 'r1', name: '杰克 (Jack)', desc: '毒舌、语速快', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100', tag: '合配' },
    { id: 'r2', name: '莎拉 (Sarah)', desc: '勇敢、坚定', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', tag: '' },
    { id: 'r3', name: '老板 (The Boss)', desc: '威严、粗鲁', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100', tag: '未解锁', locked: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-warm-beige animate-in slide-in-from-right duration-300 z-[120] fixed inset-0">
      <header className="flex items-center justify-between px-4 py-3 sticky top-0 z-50 bg-warm-beige/90 backdrop-blur-md">
        <button 
          onClick={onBack}
          className="flex items-center justify-center p-2 rounded-full active:bg-orange-100/50 transition-colors active:scale-90"
        >
          <span className="material-symbols-outlined text-[22px] text-text-main">arrow_back_ios</span>
        </button>
        <h1 className="text-[17px] font-bold tracking-tight text-text-main">角色选择</h1>
        <button className="flex items-center justify-center p-2 rounded-full active:bg-orange-100/50 transition-colors active:scale-90">
          <span className="material-symbols-outlined text-[22px] text-text-main">more_horiz</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-36 hide-scrollbar">
        <div className="flex flex-col gap-6 mt-2">
          {/* Hero Preview Card */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden ios-shadow">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%), url("${clip.imageUrl}")` }}
            ></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium">经典片段</span>
              </div>
              <h2 className="text-xl font-bold mb-1">{clip.title}</h2>
              <div className="flex items-center gap-3 text-white/80 text-[11px]">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 02:45</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] fill-1 text-yellow-400">star</span> 4.9</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1 px-1">
              <h3 className="text-[15px] font-bold text-text-main">可选角色</h3>
              <button className="text-brand-primary text-[13px] font-medium flex items-center gap-1 active:scale-95 transition-transform">
                玩法说明 <span className="material-symbols-outlined text-[14px]">help</span>
              </button>
            </div>

            {/* Character Cards */}
            {roles.map((role) => (
              <div 
                key={role.id}
                onClick={() => !role.locked && setSelectedRoleId(role.id)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all border-2 cursor-pointer active:scale-[0.98] ${
                  role.locked ? 'bg-white/40 border-gray-100 opacity-60' : 
                  selectedRoleId === role.id ? 'bg-white ios-shadow border-brand-primary scale-[1.02]' : 'bg-white border-orange-50/50'
                }`}
              >
                <div className="relative shrink-0">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl h-14 w-14" 
                    style={{ backgroundImage: `url("${role.avatar}")`, filter: role.locked ? 'grayscale(1)' : 'none' }}
                  ></div>
                  {selectedRoleId === role.id && !role.locked && (
                    <div className="absolute -top-1 -left-1 bg-brand-primary text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold shadow-sm animate-bounce">已选</div>
                  )}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-base font-bold truncate ${role.locked ? 'text-gray-400' : 'text-text-main'}`}>{role.name}</p>
                    {role.tag && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${role.locked ? 'bg-gray-200 text-gray-500' : 'bg-orange-50 text-brand-primary'}`}>{role.tag}</span>
                    )}
                  </div>
                  <p className="text-text-muted text-[13px] truncate">{role.desc}</p>
                </div>
                <div className="shrink-0">
                  {role.locked ? (
                    <span className="material-symbols-outlined text-gray-400 text-[20px]">lock</span>
                  ) : (
                    <div className={`flex size-6 items-center justify-center rounded-full transition-colors ${selectedRoleId === role.id ? 'bg-brand-primary text-white' : 'bg-gray-100 text-transparent'}`}>
                      <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Scene Stats */}
            <div className="mt-4 p-4 rounded-3xl bg-white border border-orange-50/50 ios-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">场景参数</span>
                <div className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-brand-primary"></span>
                  <span className="text-[11px] text-brand-primary font-bold">中级难度</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center py-2 bg-warm-beige/50 rounded-2xl">
                  <span className="material-symbols-outlined text-brand-primary text-[20px] mb-1">record_voice_over</span>
                  <span className="text-[10px] text-text-muted">12 句对白</span>
                </div>
                <div className="flex flex-col items-center py-2 bg-warm-beige/50 rounded-2xl">
                  <span className="material-symbols-outlined text-brand-primary text-[20px] mb-1">speed</span>
                  <span className="text-[10px] text-text-muted">语速较快</span>
                </div>
                <div className="flex flex-col items-center py-2 bg-warm-beige/50 rounded-2xl">
                  <span className="material-symbols-outlined text-brand-primary text-[20px] mb-1">groups</span>
                  <span className="text-[10px] text-text-muted">3 人角色</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t border-orange-100/30">
        <div className="max-w-md mx-auto flex gap-4">
          <button className="flex-1 py-4 px-2 rounded-2xl border border-orange-100 text-text-main font-bold active:bg-orange-50 transition-all flex items-center justify-center gap-2 text-[15px] active:scale-95">
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            全片试听
          </button>
          <button 
            onClick={() => onStartPractice(roles.find(r => r.id === selectedRoleId)?.name || '杰克')}
            className="flex-[1.5] py-4 px-2 rounded-2xl bg-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-[15px]"
          >
            <span className="material-symbols-outlined text-[20px]">mic</span>
            开始配音
          </button>
        </div>
        <div className="h-4"></div>
      </footer>
    </div>
  );
};

export default RoleSelectionSection;
