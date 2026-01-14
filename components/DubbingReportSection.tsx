
import React, { useState, useEffect } from 'react';
import { DailyClip } from '../types';
import { getAIFeedback } from '../services/geminiService';

interface DubbingReportSectionProps {
  clip: DailyClip | null;
  onClose: () => void;
  onReplay: () => void;
}

const DubbingReportSection: React.FC<DubbingReportSectionProps> = ({ clip, onClose, onReplay }) => {
  const [activeVoiceType, setActiveVoiceType] = useState('AI');
  const [tone, setTone] = useState('成熟');
  const [emotion, setEmotion] = useState('自信');
  const [aiFeedback, setAiFeedback] = useState<string>("正在评估你的表现...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      if (clip) {
        setIsLoading(true);
        const feedback = await getAIFeedback(`I'm practicing lines from ${clip.title}. My tone is ${tone} and I feel ${emotion}.`);
        setAiFeedback(feedback || "评价生成失败，你的表现依然很棒！");
        setIsLoading(false);
      }
    };
    fetchFeedback();
  }, [clip, tone, emotion]);

  if (!clip) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-primary-beige font-display text-text-main flex flex-col overflow-y-auto hide-scrollbar animate-in fade-in duration-500 pb-10">
      {/* Header */}
      <div className="flex items-center p-4 justify-between sticky top-0 z-50 bg-primary-beige/80 backdrop-blur-md">
        <button 
          onClick={onClose}
          className="text-text-muted flex size-10 items-center justify-start active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </button>
        <h2 className="text-text-main text-lg font-bold flex-1 text-center">配音成果报告</h2>
        <div className="flex size-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 text-text-muted">
            <span className="material-symbols-outlined text-2xl">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Voice Version Toggle */}
      <div className="px-6 py-2">
        <div className="bg-deep-beige/20 p-1.5 rounded-full flex relative border border-deep-beige/30">
          <button 
            onClick={() => setActiveVoiceType('Original')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all ${activeVoiceType === 'Original' ? 'bg-white shadow-sm text-text-main font-bold border border-white' : 'text-text-muted'}`}
          >
            原声配音
          </button>
          <button 
            onClick={() => setActiveVoiceType('AI')}
            className={`flex-1 py-2.5 text-sm rounded-full shadow-sm transition-all flex items-center justify-center gap-1.5 ${activeVoiceType === 'AI' ? 'bg-white font-bold text-text-main border border-white' : 'text-text-muted font-medium'}`}
          >
            <span className={`material-symbols-outlined text-[18px] fill-1 ${activeVoiceType === 'AI' ? 'text-soft-orange' : 'text-text-muted'}`}>auto_awesome</span>
            AI 完美版
          </button>
        </div>
      </div>

      {/* Video Preview Section */}
      <div className="px-6 py-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 soft-shadow aspect-[4/5] border-4 border-white group">
          <img 
            alt="Video cover" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
            src={clip.imageUrl}
          />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-start">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white">
                <span className="size-2 rounded-full bg-soft-orange animate-pulse"></span>
                <span className="text-xs font-bold text-text-main">AI 已为你优化声线</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="size-20 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-transform active:scale-90">
                <span className="material-symbols-outlined text-5xl fill-1">play_arrow</span>
              </button>
            </div>
            <div className="space-y-3">
              <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-soft-orange w-1/3 rounded-full"></div>
              </div>
              <div className="flex justify-between text-[11px] text-white font-bold tracking-wider">
                <span>0:12</span>
                <span>0:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Styling Controls */}
      <div className="px-6 py-2">
        <div className="bg-white/80 rounded-[2rem] p-6 border border-white/50 soft-shadow">
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined text-soft-orange text-xl">tune</span>
            <h3 className="font-bold text-text-main text-base">调整你的声音风格</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-bold text-text-muted/60 mb-3 uppercase tracking-widest px-1">音色倾向</p>
              <div className="flex gap-2.5 overflow-x-auto hide-scrollbar">
                {['原声', '成熟', '软萌'].map((t) => (
                  <button 
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-6 py-2.5 rounded-full border text-sm whitespace-nowrap transition-all ${tone === t ? 'bg-accent-coral/10 border-accent-coral/20 font-bold text-accent-coral' : 'bg-deep-beige/10 border-deep-beige/20 text-text-muted'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-text-muted/60 mb-3 uppercase tracking-widest px-1">情感表达</p>
              <div className="flex gap-2.5 overflow-x-auto hide-scrollbar">
                {['冷静', '自信', '激昂'].map((e) => (
                  <button 
                    key={e}
                    onClick={() => setEmotion(e)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${emotion === e ? 'bg-accent-coral text-white shadow-md shadow-accent-coral/20' : 'bg-deep-beige/10 border border-deep-beige/20 text-text-muted'}`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mascot Feedback & Gemini Response */}
      <div className="px-6 py-4">
        <div className="bg-[#FFFDF9] rounded-[2rem] p-6 border-2 border-[#F0E6D2] relative overflow-hidden soft-shadow min-h-[220px]">
          <div className="absolute -right-6 -top-4 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]">pets</span>
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1 pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🐱</span>
                  <p className="text-text-main font-black text-lg">AI 教练点评</p>
                </div>
                <div className={`mt-3 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                  <p className="text-text-light text-sm leading-relaxed italic">
                    {aiFeedback}
                  </p>
                </div>
              </div>
              <div className="bg-white p-2 rounded-2xl border border-deep-beige/30 shadow-sm shrink-0">
                <span className="material-symbols-outlined text-soft-orange text-4xl">stars</span>
              </div>
            </div>

            {/* Simulated Radar Chart */}
            <div className="flex items-center justify-center py-4 relative">
              <div className="w-48 h-48 relative flex items-center justify-center">
                <div className="absolute inset-0 border border-deep-beige/20 radar-shape bg-deep-beige/5"></div>
                <div className="absolute inset-4 border border-deep-beige/20 radar-shape"></div>
                <div className="absolute inset-8 border border-deep-beige/20 radar-shape"></div>
                <div className="absolute inset-2 bg-soft-orange/30 radar-shape border-2 border-soft-orange/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-soft-orange opacity-40 text-4xl">pets</span>
                </div>
                <span className="absolute -top-1 text-[10px] font-bold text-text-muted">发音</span>
                <span className="absolute top-1/4 -right-4 text-[10px] font-bold text-text-muted">语调</span>
                <span className="absolute bottom-1/4 -right-4 text-[10px] font-bold text-text-muted">流利度</span>
                <span className="absolute -bottom-1 text-[10px] font-bold text-text-muted">情感</span>
                <span className="absolute bottom-1/4 -left-4 text-[10px] font-bold text-text-muted">契合度</span>
                <span className="absolute top-1/4 -left-4 text-[10px] font-bold text-text-muted">能量</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-4 p-6 space-y-4">
        <button className="flex w-full items-center justify-center rounded-full h-16 bg-accent-coral text-white font-bold text-lg gap-3 shadow-xl shadow-accent-coral/30 transition-transform active:scale-[0.97]">
          <span className="material-symbols-outlined">share_windows</span>
          分享我的配音
        </button>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center rounded-full h-14 bg-white border-2 border-deep-beige/20 text-text-main font-bold text-sm gap-2 transition-transform active:scale-[0.97] soft-shadow">
            <span className="material-symbols-outlined text-xl text-soft-orange">diversity_1</span>
            邀请共创
          </button>
          <button 
            onClick={onReplay}
            className="flex items-center justify-center rounded-full h-14 bg-white border-2 border-deep-beige/20 text-text-main font-bold text-sm gap-2 transition-transform active:scale-[0.97] soft-shadow"
          >
            <span className="material-symbols-outlined text-xl text-soft-orange">refresh</span>
            再配一段
          </button>
        </div>
      </div>
    </div>
  );
};

export default DubbingReportSection;
