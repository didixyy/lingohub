
import React from 'react';
import { DAILY_CLIPS } from '../constants';
import { DailyClip } from '../types';

interface DailyHotClipsProps {
  onSelectClip: (clip: DailyClip) => void;
}

const DailyHotClips: React.FC<DailyHotClipsProps> = ({ onSelectClip }) => {
  return (
    <section className="mt-8 px-6 pb-32">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[17px] font-bold text-text-main">每日热门片段</h3>
        <div className="bg-orange-100/50 px-2 py-1 rounded">
          <span className="text-[10px] text-brand-primary font-bold">10:00 更新</span>
        </div>
      </div>
      <div className="space-y-4">
        {DAILY_CLIPS.map((clip) => (
          <div 
            key={clip.id} 
            onClick={() => onSelectClip(clip)}
            className="bg-cream p-3.5 rounded-2xl flex gap-4 ios-shadow border border-orange-50/50 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
              <img 
                src={clip.imageUrl} 
                alt={clip.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="material-symbols-outlined text-white text-[32px] fill-1 drop-shadow-md">play_circle</span>
              </div>
            </div>
            <div className="flex flex-col justify-between py-0.5 flex-1">
              <div>
                <h4 className="text-[14px] font-bold text-text-main leading-tight line-clamp-1">{clip.title}</h4>
                <p className="text-text-muted text-[11px] mt-1.5 font-medium flex items-center gap-1.5">
                  难度：{clip.difficulty} <span className="w-1 h-1 bg-text-muted/30 rounded-full"></span> {clip.count} 人已配
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {clip.avatars.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="w-5 h-5 rounded-full border-2 border-cream"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                <button className="text-brand-primary text-[12px] font-bold tracking-wide">
                  立即练习
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyHotClips;
