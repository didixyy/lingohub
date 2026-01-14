
import React, { useState, useEffect } from 'react';

interface AIVoiceAnalysisSectionProps {
  onClose: () => void;
  onComplete: () => void;
}

const AIVoiceAnalysisSection: React.FC<AIVoiceAnalysisSectionProps> = ({ onClose, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFinished(true);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[150] flex items-end justify-center overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[1px] animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Bottom Sheet Container */}
      <div className="relative z-20 w-full max-w-md bg-warm-beige rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[85vh] animate-in slide-in-from-bottom duration-500">
        
        {/* Drag Handle & Header */}
        <div className="flex flex-col items-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full mb-4"></div>
          <h1 className="text-base font-bold text-text-main">AI 智能测评</h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-12 hide-scrollbar">
          {!isFinished ? (
            <>
              {/* Mascot Section */}
              <section className="flex items-start gap-3 mt-4">
                <div className="relative w-14 h-14 shrink-0">
                  <div className="absolute inset-0 bg-brand-accent/20 rounded-xl"></div>
                  <img 
                    alt="Casting Director Kitten" 
                    className="w-full h-full object-cover rounded-xl" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKTbZ5oBWbc8N2XHz462itiHp6y4tvTDqo095crAYQkFY0DgLgWRbK_wN9suwfDwhM77sEzT0s9a_18ovqAq-OG9rSy1ZbVZXToRiCwg_rsO06JGA12jfsEslPIyS-G4Vg6qbVjWvYnr_-u8ODBLiMa5YRUh5mkY6VC-5syFg6ig_b-I1KSPJR-vo7_VtrJ9PE1WOu9IYG-opiZ9KXX4S-aphZfC3FO0-cbHeuFNWj0HidekqgIvYHIpucs-9dpmzsUxMT0iRKNQ"
                  />
                  <div className="absolute -top-1 -right-1 bg-brand-primary text-white p-0.5 rounded-md">
                    <span className="material-symbols-outlined text-[10px]">movie</span>
                  </div>
                </div>
                <div className="relative bg-white p-3 rounded-xl rounded-tl-none ios-shadow-soft border border-orange-100/50 flex-1">
                  <p className="text-xs font-medium leading-relaxed">读出下面的句子，让我为你找寻最适合的角色！</p>
                </div>
              </section>

              {/* Quote Card */}
              <section className="mt-6">
                <div className="bg-cream rounded-3xl p-6 ios-shadow-soft border border-orange-100/30 flex flex-col items-center text-center">
                  <div className="size-8 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-brand-primary text-[20px]">format_quote</span>
                  </div>
                  <h2 className="text-xl font-bold text-text-main leading-tight mb-2">
                    To be or not to be,<br/>that is the question.
                  </h2>
                  <p className="text-text-muted font-mono text-[11px] tracking-wide mb-6">
                    /tuː biː ɔː nɒt tuː biː, ðæt ɪz ðə ˈkwestʃən/
                  </p>
                  <button className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full text-brand-primary font-bold text-xs active:scale-95 transition-transform">
                    <span className="material-symbols-outlined text-[18px] fill-1">play_circle</span>
                    听示范音
                  </button>
                </div>
              </section>

              {/* Analysis Progress */}
              <section className="mt-6">
                <div className="bg-white/40 backdrop-blur-sm px-5 py-3 rounded-xl flex flex-col items-center gap-3 w-full border border-white/60">
                  <div className="flex items-center gap-6 h-1">
                    <div className="dot-flashing"></div>
                  </div>
                  <p className="text-[11px] text-text-muted font-medium">AI 正在根据你的声线和水平进行分析...</p>
                  <div className="w-full h-1 bg-orange-100/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-primary transition-all duration-500 rounded-full" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </section>

              {/* Mic Area */}
              <footer className="mt-10 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-primary/20 rounded-full pulse-ring scale-125"></div>
                  <button className="relative size-16 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/30 flex items-center justify-center text-white z-10 active:scale-95 transition-transform">
                    <span className="material-symbols-outlined text-[28px] fill-1">mic</span>
                  </button>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-brand-primary font-bold text-[10px] whitespace-nowrap">正在录音</span>
                </div>
              </footer>
            </>
          ) : (
            <div className="flex flex-col items-center py-10 animate-in zoom-in-95 duration-500">
              <div className="size-24 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-brand-primary text-6xl">check_circle</span>
              </div>
              <h2 className="text-2xl font-black text-text-main mb-2">测评完成！</h2>
              <p className="text-text-muted text-sm text-center mb-10 px-6">
                喵！你的音色非常有魅力，我为你准备了几个最契合的角色建议。
              </p>
              <button 
                onClick={onComplete}
                className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                查看我的专属推荐
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIVoiceAnalysisSection;
