
import React, { useState, useEffect } from 'react';
import FeaturedBanner from './components/FeaturedBanner';
import ThemeSection from './components/ThemeSection';
import DailyHotClips from './components/DailyHotClips';
import CommunitySection from './components/CommunitySection';
import StudySection from './components/StudySection';
import ProfileSection from './components/ProfileSection';
import WordChallengeSection from './components/WordChallengeSection';
import RoleSelectionSection from './components/RoleSelectionSection';
import AIVoiceAnalysisSection from './components/AIVoiceAnalysisSection';
import DubbingRoomSection from './components/DubbingRoomSection';
import DubbingReportSection from './components/DubbingReportSection';
import Navigation from './components/Navigation';
import { AppTab, DailyClip } from './types';
import { DAILY_CLIPS } from './constants';
import { GoogleGenAI, Type } from "@google/genai";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [isChallenging, setIsChallenging] = useState<boolean>(false);
  const [isSelectingRole, setIsSelectingRole] = useState<boolean>(false);
  const [isDubbing, setIsDubbing] = useState<boolean>(false);
  const [isReporting, setIsReporting] = useState<boolean>(false);
  const [isAnalyzingVoice, setIsAnalyzingVoice] = useState<boolean>(false);
  const [selectedClip, setSelectedClip] = useState<DailyClip | null>(null);
  const [selectedRoleName, setSelectedRoleName] = useState<string>('杰克');
  
  const [dailyQuote, setDailyQuote] = useState<{en: string, zh: string, movie: string} | null>(null);
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsQuoteLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Generate a powerful and short movie quote in English, its Chinese translation, and the movie name. Format: JSON {en, zh, movie}",
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                en: { type: Type.STRING },
                zh: { type: Type.STRING },
                movie: { type: Type.STRING }
              },
              required: ["en", "zh", "movie"]
            }
          }
        });
        const data = JSON.parse(response.text);
        setDailyQuote(data);
      } catch (err) {
        setDailyQuote({
          en: "I'm going to make him an offer he can't refuse.",
          zh: "我会给他一个无法拒绝的理由。",
          movie: "The Godfather"
        });
      } finally {
        setIsQuoteLoading(false);
      }
    };
    if (activeTab === AppTab.HOME) fetchQuote();
  }, [activeTab]);

  const handleSelectClip = (clip: DailyClip) => {
    setSelectedClip(clip);
    setIsSelectingRole(true);
  };

  const handleStartPractice = (roleName: string) => {
    setSelectedRoleName(roleName);
    setIsSelectingRole(false);
    setIsDubbing(true);
  };

  const handleFinishDubbing = () => {
    setIsDubbing(false);
    setIsReporting(true);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzingVoice(false);
    setSelectedClip(DAILY_CLIPS[0]);
    setIsSelectingRole(true);
  };

  const renderHomeQuote = () => {
    if (isQuoteLoading) return (
      <div className="px-6 mt-6 animate-pulse">
        <div className="h-24 bg-orange-100/30 rounded-3xl"></div>
      </div>
    );

    if (!dailyQuote) return null;

    return (
      <div className="px-6 mt-6 group">
        <div className="bg-white/80 backdrop-blur-md border border-orange-100/50 rounded-[2rem] p-6 soft-shadow relative overflow-hidden transition-all hover:shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-7xl">movie_edit</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="size-6 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px] fill-1">format_quote</span>
            </div>
            <span className="text-[11px] font-black text-brand-primary uppercase tracking-widest">Daily Inspo</span>
          </div>
          <p className="text-text-main font-black text-[16px] leading-tight mb-2 italic">"{dailyQuote.en}"</p>
          <p className="text-text-muted text-[12px] font-medium">{dailyQuote.zh}</p>
          <div className="mt-4 pt-4 border-t border-orange-50 flex items-center justify-between">
            <span className="text-[10px] text-text-muted font-bold tracking-tighter">— 《{dailyQuote.movie}》</span>
            <div className="flex gap-2">
              <button className="size-8 rounded-full bg-warm-beige flex items-center justify-center text-text-muted hover:text-brand-primary transition-colors active:scale-90">
                <span className="material-symbols-outlined text-[18px]">bookmark</span>
              </button>
              <button className="size-8 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return (
          <div className="animate-in fade-in duration-700">
            <FeaturedBanner />
            {renderHomeQuote()}
            <ThemeSection />
            <DailyHotClips onSelectClip={handleSelectClip} />
          </div>
        );
      case AppTab.COMMUNITY:
        return <CommunitySection />;
      case AppTab.STUDY:
        return <StudySection onStartChallenge={() => setIsChallenging(true)} />;
      case AppTab.PROFILE:
        return <ProfileSection />;
      default:
        return null;
    }
  };

  const getHeaderTitle = () => {
    switch(activeTab) {
      case AppTab.HOME: return "发现";
      case AppTab.COMMUNITY: return "合演社区";
      case AppTab.STUDY: return "我的课表";
      case AppTab.PROFILE: return "个人中心";
      case AppTab.AI_PRACTICE: return "声线测评";
      default: return "FilmVoice";
    }
  }

  return (
    <div className="min-h-screen max-w-md mx-auto bg-warm-beige relative overflow-x-hidden font-sans selection:bg-brand-primary/20">
      {/* Global Navbar */}
      {!isSelectingRole && !isAnalyzingVoice && !isDubbing && !isReporting && (
        <header className="flex items-center justify-between px-6 py-5 bg-warm-beige/80 backdrop-blur-xl sticky top-0 z-[100] border-b border-orange-100/20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brand-primary rounded-[12px] flex items-center justify-center shadow-lg shadow-brand-primary/20 rotate-3">
              <span className="material-symbols-outlined text-white text-[22px] fill-1">movie</span>
            </div>
            <h1 className="text-xl font-black text-text-main tracking-tight">{getHeaderTitle()}</h1>
          </div>
          <div className="flex items-center gap-4 text-text-main">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 active:scale-90 transition-transform ios-shadow">
              <span className="material-symbols-outlined text-[24px]">search</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 active:scale-90 transition-transform ios-shadow relative">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-warm-beige"></span>
            </button>
          </div>
        </header>
      )}

      {/* Main Container */}
      <main className="pb-32">
        {renderContent()}
      </main>

      {/* Overlays */}
      {isChallenging && <WordChallengeSection onClose={() => setIsChallenging(false)} />}
      {isSelectingRole && <RoleSelectionSection clip={selectedClip} onBack={() => setIsSelectingRole(false)} onStartPractice={handleStartPractice} />}
      {isDubbing && <DubbingRoomSection clip={selectedClip} selectedRole={selectedRoleName} onBack={() => setIsDubbing(false)} onFinish={handleFinishDubbing} />}
      {isReporting && <DubbingReportSection clip={selectedClip} onClose={() => setIsReporting(false)} onReplay={() => { setIsReporting(false); setIsDubbing(true); }} />}
      {isAnalyzingVoice && <AIVoiceAnalysisSection onClose={() => setIsAnalyzingVoice(false)} onComplete={handleAnalysisComplete} />}

      {/* Bottom Nav */}
      {!isChallenging && !isSelectingRole && !isAnalyzingVoice && !isDubbing && !isReporting && (
        <Navigation 
          activeTab={activeTab} 
          setActiveTab={(tab) => tab === AppTab.AI_PRACTICE ? setIsAnalyzingVoice(true) : setActiveTab(tab)} 
        />
      )}
    </div>
  );
};

export default App;
