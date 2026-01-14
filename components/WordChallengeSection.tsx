
import React from 'react';

interface WordChallengeSectionProps {
  onClose: () => void;
}

const WordChallengeSection: React.FC<WordChallengeSectionProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-beige animate-in slide-in-from-right duration-300 z-[110] fixed inset-0">
      <header className="px-6 pt-8 pb-4 bg-warm-beige/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between mb-2">
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-start active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-text-muted">close</span>
          </button>
          <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Step 3 of 10</span>
          <div className="w-8"></div> 
        </div>
        <div className="relative w-full h-2.5 bg-orange-100/30 rounded-full overflow-visible">
          <div className="absolute left-0 top-0 h-full bg-brand-primary rounded-full transition-all duration-500" style={{ width: '30%' }}>
            <div className="absolute -right-3 -top-2.5 w-8 h-8 bg-white rounded-full flex items-center justify-center soft-shadow paw-glow border border-orange-50">
              <span className="material-symbols-outlined text-brand-primary text-xl fill-1">pets</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-5 py-4 space-y-6 overflow-y-auto hide-scrollbar pb-32">
        {/* Word Info */}
        <section className="text-center py-4">
          <h1 className="text-4xl font-bold tracking-tight text-text-main">Adventure</h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-text-muted font-medium italic text-lg">/ədˈventʃər/</span>
            <button className="w-10 h-10 rounded-full bg-pastel-orange flex items-center justify-center active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-brand-primary">volume_up</span>
            </button>
          </div>
        </section>

        {/* Movie Clip Card */}
        <section className="bg-white rounded-3xl overflow-hidden soft-shadow border border-orange-50">
          <div className="relative aspect-video bg-gray-200">
            <img 
              alt="Movie Scene" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdiKBJuNtvHiCPFDCOrpy8Yncy022rSQXJ_mpryv6OoiPup41h9pBNE77bQE1uGgkLbC0NnXP11RsJF4nqK7Iw-LoKDYrMhHKMZh9cAnHOuSY6lAp9tUdcbMIeyDNPYIJ5jzD_HXL8vWR16P8Cps4CTQLzB7cuD8fg8LyXlUCAfXUsSKytx09rfN5vuvG2S_4KTaA32NUtCzniGBSJycBUXFahKXXoktpoNR2GVNXoUmNUrTAA_tJwioE3TkXKmqQsX4sBA6tPaUw"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
              </div>
            </div>
            <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-[10px] text-white font-medium">
              《Up》 飞屋环游记
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="text-[15px] leading-relaxed text-text-main italic">
              "Thanks for the <span className="text-brand-primary font-bold">adventure</span>—now go have a new one!"
            </p>
            <p className="text-xs text-text-muted mt-1">“谢谢你带给我的冒险——现在去开始一段新的旅程吧！”</p>
          </div>
        </section>

        {/* Mic Practice */}
        <section className="bg-pastel-blue/30 rounded-3xl p-5 border border-blue-100 soft-shadow">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-blue-500">mic</span>
            <h3 className="font-bold text-sm text-blue-800 uppercase tracking-wide">Role-play Practice</h3>
          </div>
          <div className="bg-white/80 rounded-2xl p-4 border border-white">
            <p className="text-lg font-medium text-text-main mb-3">Life is a daring adventure.</p>
            <div className="flex justify-center py-2">
              <button className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/30 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-white text-3xl">mic</span>
              </button>
            </div>
            <p className="text-center text-[10px] text-text-muted mt-3">点击并按住开始配音练习</p>
          </div>
        </section>

        {/* Kitten Teacher Bubble */}
        <section className="flex items-end gap-4 px-2 pt-4">
          <div className="w-16 h-16 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-pastel-orange rounded-2xl rotate-3"></div>
            <img 
              alt="Kitten Teacher" 
              className="relative z-10 w-16 h-16 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBprC9KUkr8bVF1gkXFTE361wL0ivKq3qTQZqRugYhPTIsKQ5BvurZHXlZJv5D4D_DP86IcQZ171leQnt_tac_lCWdbLcpvsc1GyyH-ceNM5XpTWw4NBrY0yc-mQOrN6-jG3GZXQcXBGR6dAhqxS0LIHZon2sZOYkoFHiYyeNDFw7Erv-QjCEosGcj4uCuG8Qzc6qNXFNmTe_8NR4mffyjl1ITP_0UD_dmC9lum_vF6udLopm2U6JCSHKG2m2lvEh-RfqxXStfwpks"
            />
          </div>
          <div className="flex-1 bg-white rounded-2xl rounded-bl-none p-3 soft-shadow border border-orange-50 relative mb-2">
            <p className="text-sm font-medium leading-snug text-text-main">
              这个词在电影里非常经典喵！跟我读一遍，要注意 "ture" 的发音哦~
            </p>
          </div>
        </section>
      </main>

      {/* Footer Button */}
      <footer className="p-6 bg-white/80 backdrop-blur-xl border-t border-orange-100/30 sticky bottom-0">
        <button 
          onClick={onClose}
          className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-brand-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          下一词 (Next Word)
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default WordChallengeSection;
