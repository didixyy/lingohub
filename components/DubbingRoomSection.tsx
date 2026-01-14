
import React, { useState, useEffect, useRef } from 'react';
import { DailyClip } from '../types';

interface DubbingRoomSectionProps {
  clip: DailyClip | null;
  selectedRole: string;
  onBack: () => void;
  onFinish: () => void;
}

const DubbingRoomSection: React.FC<DubbingRoomSectionProps> = ({ clip, selectedRole, onBack, onFinish }) => {
  const [mode, setMode] = useState<'all' | 'single'>('single');
  const [isRecording, setIsRecording] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const recordingTimer = useRef<number | null>(null);
  const audioStream = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      stopMicrophone();
      if (recordingTimer.current) clearInterval(recordingTimer.current);
    };
  }, []);

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioStream.current = stream;
      setPermissionDenied(false);
      return true;
    } catch (err) {
      console.error("Mic access denied:", err);
      setPermissionDenied(true);
      return false;
    }
  };

  const stopMicrophone = () => {
    if (audioStream.current) {
      audioStream.current.getTracks().forEach(track => track.stop());
      audioStream.current = null;
    }
  };

  const startRecording = async () => {
    const success = await startMicrophone();
    if (success) {
      setIsRecording(true);
      setCurrentTime(0);
      recordingTimer.current = window.setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    stopMicrophone();
    if (recordingTimer.current) {
      clearInterval(recordingTimer.current);
      recordingTimer.current = null;
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!clip) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-background-warm font-display text-text-main flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="flex items-center bg-background-warm/95 backdrop-blur-md p-4 justify-between sticky top-0 z-50">
        <button 
          onClick={onBack}
          className="text-text-main flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/50 active:scale-90 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-brand-primary text-[10px] font-bold leading-tight tracking-wider uppercase">正在配音 04/12</h2>
          <p className="text-text-main text-sm font-bold truncate max-w-[180px]">{clip.title}</p>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-full size-10 bg-transparent text-text-main hover:bg-white/50 active:scale-90 transition-all">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Video Player Area */}
      <div className="w-full bg-black relative">
        <div 
          className="relative flex items-center justify-center aspect-video w-full overflow-hidden bg-[#2D2825] bg-cover bg-center"
          style={{ backgroundImage: `url("${clip.imageUrl}")` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="flex shrink-0 items-center justify-center rounded-full size-14 bg-white/30 text-white backdrop-blur-md border border-white/40 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </button>
          
          {/* Player Progress */}
          <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/50 to-transparent">
            <div className="flex h-1.5 items-center justify-center mb-1.5">
              <div className="h-1.5 rounded-full bg-brand-primary transition-all duration-1000" style={{ width: isRecording ? `${Math.min(100, (currentTime / 10) * 100)}%` : '0%' }}></div>
              <div className="relative">
                <div className="absolute -left-1.5 -top-1 size-3 rounded-full bg-white shadow-md border-2 border-brand-primary"></div>
              </div>
              <div className="h-1.5 flex-1 rounded-full bg-white/20"></div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-[10px] font-medium opacity-90">{formatTime(currentTime)}</p>
              <p className="text-white text-[10px] font-medium opacity-90">02:45</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex px-5 py-4">
        <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#EFE9DD]/60 p-1.5">
          <button 
            onClick={() => setMode('all')}
            className={`flex h-full grow items-center justify-center rounded-full px-4 text-xs font-bold transition-all ${mode === 'all' ? 'bg-white shadow-sm text-brand-primary' : 'text-text-muted'}`}
          >
            全篇配音
          </button>
          <button 
            onClick={() => setMode('single')}
            className={`flex h-full grow items-center justify-center rounded-full px-4 text-xs font-bold transition-all ${mode === 'single' ? 'bg-white shadow-sm text-brand-primary' : 'text-text-muted'}`}
          >
            角色扮演
          </button>
        </div>
      </div>

      {/* Dialogue List */}
      <div className="flex-1 overflow-y-auto px-5 pb-36 space-y-4 hide-scrollbar">
        {/* Previous Dialogue */}
        <div className="flex items-end gap-3 opacity-60 scale-95 origin-left transition-all">
          <div className="flex-1 flex gap-4 bg-white/50 rounded-xl p-4 border border-[#EFE9DD]">
            <div className="flex items-start gap-3 flex-1">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 shrink-0 border-2 border-[#EFE9DD]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100")' }}></div>
              <div className="flex flex-col">
                <p className="text-text-muted text-[10px] font-bold uppercase tracking-wide">CASE</p>
                <p className="text-text-main text-sm font-medium italic mt-0.5">“这是不可能的。”</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="text-brand-primary text-[10px] font-bold bg-brand-primary/10 px-1.5 py-0.5 rounded-full">匹配度 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Dialogue (Active Card) */}
        <div className={`flex flex-col gap-4 bg-white rounded-xl p-5 border-2 shadow-sm relative overflow-hidden transition-all duration-300 ${isRecording ? 'border-brand-primary ring-4 ring-brand-primary/10 scale-[1.02]' : 'border-brand-primary/20'}`}>
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-primary/5 rounded-full -mr-8 -mt-8"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-4 border-brand-accent/30 shadow-sm" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100")' }}></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <p className="text-brand-primary text-[10px] font-bold uppercase tracking-wide">{selectedRole} (你)</p>
                  <span className="bg-brand-primary/10 text-brand-primary text-[8px] px-1 rounded font-bold">主角</span>
                </div>
                <p className="text-text-main text-lg font-bold leading-tight mt-1">“不，这是必须的。”</p>
                <p className="text-text-muted text-xs italic">"No, it's necessary."</p>
              </div>
            </div>
            <button className="size-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-primary active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-2xl">volume_up</span>
            </button>
          </div>

          {/* Waveform Recording Visualization */}
          <div className="flex flex-col gap-3 pt-3 relative z-10">
            <div className="flex items-end justify-center h-10 gap-[3px]">
              {[4, 6, 8, 5, 10, 7, 9, 6, 5, 8, 4, 6, 8, 5, 10].map((h, i) => (
                <div 
                  key={i} 
                  className={`waveform-bar w-[3px] rounded-full transition-all duration-200 ${isRecording ? 'bg-brand-primary animate-pulse' : 'bg-[#EFE9DD]'}`}
                  style={{ 
                    height: isRecording ? `${h * (Math.random() * 0.5 + 3.5)}px` : '4px',
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s'
                  }}
                ></div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className={`size-1.5 rounded-full ${isRecording ? 'bg-brand-primary animate-pulse' : 'bg-gray-300'}`}></span>
              <span className={`text-xs font-bold tracking-wide ${isRecording ? 'text-brand-primary' : 'text-text-muted'}`}>
                {isRecording ? '正在录音...' : (permissionDenied ? '麦克风权限被拒绝' : '准备就绪')}
              </span>
            </div>
          </div>
        </div>

        {/* Future Dialogue */}
        <div className="flex gap-4 bg-white/30 rounded-xl p-4 border border-[#EFE9DD]/50 opacity-40 scale-95 origin-left">
          <div className="flex items-start gap-3 flex-1">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 shrink-0 border border-[#EFE9DD]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100")' }}></div>
            <div className="flex flex-col">
              <p className="text-text-muted/60 text-[10px] font-bold uppercase tracking-wide">CASE</p>
              <p className="text-text-muted text-sm font-medium mt-0.5">“耐力号，我们正在启动旋转。”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Control Actions (Sticky Bottom) */}
      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background-warm via-background-warm/95 to-transparent pt-16">
        <div className="flex items-center justify-between max-w-xs mx-auto">
          <button 
            onClick={() => { stopRecording(); setCurrentTime(0); }}
            className="flex items-center justify-center rounded-full size-12 bg-white border border-[#EFE9DD] text-text-muted shadow-sm active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">replay</span>
          </button>
          
          <div className="relative">
            {isRecording && <div className="absolute inset-0 rounded-full bg-brand-primary/20 scale-150 blur-md animate-pulse"></div>}
            <button 
              onMouseDown={startRecording}
              onMouseUp={stopRecording}
              onTouchStart={startRecording}
              onTouchEnd={stopRecording}
              className={`relative flex items-center justify-center rounded-full size-20 text-white shadow-xl shadow-brand-primary/30 transition-all duration-300 active:scale-90 ${isRecording ? 'bg-red-500 scale-110' : 'bg-brand-primary'}`}
            >
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isRecording ? 'stop' : 'mic'}
              </span>
            </button>
          </div>

          <button 
            onClick={onFinish}
            className={`flex items-center justify-center rounded-full size-12 bg-white border border-[#EFE9DD] shadow-sm active:scale-90 transition-transform ${currentTime > 0 ? 'text-brand-primary border-brand-primary' : 'text-text-muted'}`}
          >
            <span className="material-symbols-outlined">done_all</span>
          </button>
        </div>
        
        <div className="h-6 mt-6 flex flex-col items-center gap-2">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
            {isRecording ? '松开停止录音' : '长按话筒开始配音'}
          </p>
          <div className="w-32 h-1 bg-[#EFE9DD] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DubbingRoomSection;
