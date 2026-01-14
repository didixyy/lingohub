
import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-2 px-5 pb-32">
      {/* User Card Area */}
      <div className="relative mt-6 flex flex-col items-center">
        {/* Decorative Mascot */}
        <div className="absolute -top-6 -right-2 w-24 h-24 z-10">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              alt="Kitten" 
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLHN3rA4gsg1HNJau85nBQA4cgAK3WlILfIB3ncAFtv0_L-8sFXfLjTlq702kdG-H8yrp1nFuOBIQf9coLfq1IjQ4sYTPMSSHddLfnD-6bjDMlCJRqxn3LDwTp7OlGv7hR7Jcv4PkuV9Pg1-gMqL0X3j-STmx1RzBTE5Y2TKDE2SXQeLl7bwFySUaUaWyYoYi1ykZjkaAGASNJ-DYJ4DqDw1Oplak_SgqYwGzFfXy7oahgewb0JdnSfoGkwbpxL_rUhKGYGm1YMqs"
            />
            <div className="absolute bottom-2 right-2 bg-yellow-400 p-1 rounded-full border-2 border-white shadow-sm">
              <span className="material-symbols-outlined text-[14px] text-white fill-1">emoji_events</span>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="w-full bg-white rounded-3xl p-6 pt-8 ios-shadow border border-orange-50/50">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full border-4 border-orange-100/50 overflow-hidden shrink-0">
              <img 
                alt="User Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMEi2gYn-oBWPWQlwmB9PaPruJX7iG98myDtADfWJ-RBm58v9-6um1gYwRuD3DQh1Ug9RmPFzfDj3IimamSuRJJFpCSydnYY76JA3TaAKeV3UXSMqT1_g8-uU0zGi-E-Wa3BfOxg80J5JZ_L_lRf9e9RcfztFhGdwIVbJToCMfSdZW0HenBhuOvITPklSlIl26wU7g0IGPneVaCPHjSQdp3rf6OCFxz18VBS2-k96atv0m184nk2Edu76XvMY5eIiUVkwZtfO1RH8"
              />
            </div>
            <div className="flex flex-col gap-1 overflow-hidden">
              <h2 className="text-xl font-bold text-text-main truncate">暖暖的配音间</h2>
              <p className="text-[12px] text-text-muted">ID: 88291034</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                <span className="px-2 py-0.5 bg-orange-50 rounded-full text-[10px] font-medium text-text-main">磁性烟熏</span>
                <span className="px-2 py-0.5 bg-orange-50 rounded-full text-[10px] font-medium text-text-main">英伦腔</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-8 pt-4 border-t border-orange-100/30">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-text-main">42</span>
              <span className="text-[11px] text-text-muted">公开作品</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-text-main">128</span>
              <span className="text-[11px] text-text-muted">获赞</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-text-main">8</span>
              <span className="text-[11px] text-text-muted">被分享</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mt-8">
        <div className="flex gap-8 px-2 border-b border-orange-100/30">
          <button className="relative pb-2 text-[15px] font-bold text-brand-primary border-b-2 border-brand-primary">
            公开作品
          </button>
          <button className="relative pb-2 text-[15px] font-medium text-text-muted">
            草稿箱
          </button>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col active:scale-95 transition-transform">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
              <img 
                alt="Work Thumbnail" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKTbZ5oBWbc8N2XHz462itiHp6y4tvTDqo095crAYQkFY0DgLgWRbK_wN9suwfDwhM77sEzT0s9a_18ovqAq-OG9rSy1ZbVZXToRiCwg_rsO06JGA12jfsEslPIyS-G4Vg6qbVjWvYnr_-u8ODBLiMa5YRUh5mkY6VC-5syFg6ig_b-I1KSPJR-vo7_VtrJ9PE1WOu9IYG-opiZ9KXX4S-aphZfC3FO0-cbHeuFNWj0HidekqgIvYHIpucs-9dpmzsUxMT0iRKNQ"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/30 backdrop-blur-md px-1.5 py-0.5 rounded-md">
                <span className="material-symbols-outlined text-[12px] text-white">play_arrow</span>
                <span className="text-[10px] text-white">1.2k</span>
              </div>
            </div>
            <p className="mt-2 text-[13px] font-medium truncate text-text-main px-1">教父经典对白配音练习</p>
            <p className="text-[10px] text-text-muted px-1">3天前</p>
          </div>

          <div className="flex flex-col active:scale-95 transition-transform">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
              <img 
                alt="Work Thumbnail" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0-PwAeY5VRRGI_lXVkTsXbQTfUthof4WEgud1d_e7zerqjTVh5toSgBkEeyk8lZu5zAd6D0tHJgoEQ6iqmsHLq9ToEQzkvi9R8ZrkcNDIQNe0XhMIJuta24F4ziSrLQLzjs-k5-L0Fxu_WmbjnJ5dGue6CbANyxYzYfLgJx3lHKD6viYzGP4rmYYiL5RXq29lo7g2IqEt4eN4T2Kr9IyxV_ht_Nr-rmHz3KGJIlOCDdDMXInTG6-vKBD_ZOhsKY60T8o2dK8IULE"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/30 backdrop-blur-md px-1.5 py-0.5 rounded-md">
                <span className="material-symbols-outlined text-[12px] text-white">play_arrow</span>
                <span className="text-[10px] text-white">845</span>
              </div>
            </div>
            <p className="mt-2 text-[13px] font-medium truncate text-text-main px-1">猫咪的午后漫谈</p>
            <p className="text-[10px] text-text-muted px-1">1周前</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
