
import React from 'react';

interface StudySectionProps {
  onStartChallenge: () => void;
}

const StudySection: React.FC<StudySectionProps> = ({ onStartChallenge }) => {
  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-2 px-5 pb-32">
      {/* Header Info Section */}
      <div className="flex items-center justify-between mb-6 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center soft-shadow overflow-hidden border border-orange-50">
            <img 
              alt="Kitten Mascot" 
              className="w-10 h-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBprC9KUkr8bVF1gkXFTE361wL0ivKq3qTQZqRugYhPTIsKQ5BvurZHXlZJv5D4D_DP86IcQZ171leQnt_tac_lCWdbLcpvsc1GyyH-ceNM5XpTWw4NBrY0yc-mQOrN6-jG3GZXQcXBGR6dAhqxS0LIHZon2sZOYkoFHiYyeNDFw7Erv-QjCEosGcj4uCuG8Qzc6qNXFNmTe_8NR4mffyjl1ITP_0UD_dmC9lum_vF6udLopm2U6JCSHKG2m2lvEh-RfqxXStfwpks"
            />
          </div>
          <div>
            <h2 className="text-base font-bold text-text-main leading-tight">加油练习喵~</h2>
            <p className="text-[10px] text-text-muted">已连续打卡 7 天</p>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center soft-shadow border border-orange-50 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-brand-primary">calendar_today</span>
        </button>
      </div>

      {/* Word Library */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[15px] font-bold text-text-main">我的单词库</h2>
          <span className="text-xs text-brand-primary font-medium">查看全部</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 rounded-full bg-pastel-blue text-blue-600 text-sm font-medium soft-shadow bubble-float">
            Adventure
          </div>
          <div className="px-4 py-2 rounded-full bg-pastel-green text-green-600 text-sm font-medium soft-shadow bubble-float" style={{ animationDelay: '0.5s' }}>
            Delicious
          </div>
          <div className="px-4 py-2 rounded-full bg-pastel-purple text-purple-600 text-sm font-medium soft-shadow bubble-float" style={{ animationDelay: '1s' }}>
            Harmony
          </div>
          <div className="px-4 py-2 rounded-full bg-pastel-orange text-orange-600 text-sm font-medium soft-shadow bubble-float" style={{ animationDelay: '0.2s' }}>
            Sunshine
          </div>
          <div className="px-4 py-2 rounded-full bg-white text-gray-400 text-sm font-medium soft-shadow border border-dashed border-gray-200">
            + 新增
          </div>
        </div>
      </section>

      {/* Daily Goal Card */}
      <section className="mt-8">
        <div className="bg-white rounded-3xl p-5 soft-shadow relative overflow-hidden border border-orange-100/30">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-primary/5 rounded-full"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="bg-brand-primary/10 text-brand-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">今日目标</span>
                <h3 className="text-xl font-bold mt-1 text-text-main">10词每日挑战</h3>
                <p className="text-xs text-text-muted mt-1">已完成 4/10 单词</p>
              </div>
              <div className="w-14 h-14 bg-warm-beige rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-primary text-3xl">school</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-brand-primary h-full rounded-full" style={{ width: '40%' }}></div>
            </div>
            <button 
              onClick={onStartChallenge}
              className="w-full py-3.5 bg-brand-primary text-white rounded-2xl font-bold text-sm shadow-lg shadow-brand-primary/20 active:scale-[0.98] transition-transform"
            >
              继续挑战
            </button>
          </div>
        </div>
      </section>

      {/* Lightweight Courses */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-4 px-1">
          <h2 className="text-[15px] font-bold text-text-main">轻量课程</h2>
          <span className="material-symbols-outlined text-text-muted text-xl">chevron_right</span>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-1 px-1">
          <div className="min-w-[140px] flex flex-col gap-2">
            <div className="w-[140px] h-[180px] rounded-2xl bg-white soft-shadow p-3 flex flex-col border border-gray-50 active:scale-95 transition-transform">
              <div className="flex-1 rounded-xl bg-pastel-blue flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-blue-400">movie</span>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[13px] font-bold truncate text-text-main">经典台词赏析</p>
                <p className="text-[10px] text-text-muted">8 课时</p>
              </div>
            </div>
          </div>
          <div className="min-w-[140px] flex flex-col gap-2">
            <div className="w-[140px] h-[180px] rounded-2xl bg-white soft-shadow p-3 flex flex-col border border-gray-50 active:scale-95 transition-transform">
              <div className="flex-1 rounded-xl bg-pastel-green flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-green-400">campaign</span>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[13px] font-bold truncate text-text-main">口语发音进阶</p>
                <p className="text-[10px] text-text-muted">12 课时</p>
              </div>
            </div>
          </div>
          <div className="min-w-[140px] flex flex-col gap-2">
            <div className="w-[140px] h-[180px] rounded-2xl bg-white soft-shadow p-3 flex flex-col border border-gray-50 active:scale-95 transition-transform">
              <div className="flex-1 rounded-xl bg-pastel-purple flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-purple-400">auto_awesome</span>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[13px] font-bold truncate text-text-main">生活场景对话</p>
                <p className="text-[10px] text-text-muted">5 课时</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudySection;
