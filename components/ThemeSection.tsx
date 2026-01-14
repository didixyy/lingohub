
import React, { useState, useEffect } from 'react';
import { MovieTheme } from '../types';

const ThemeSection: React.FC = () => {
  const [themes, setThemes] = useState<MovieTheme[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 图片代理函数：如果地址是 http，则通过 weserv.nl 进行 HTTPS 代理
  const getSafeImageUrl = (url: string) => {
    if (!url) return 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400';
    if (url.startsWith('http://')) {
      // 使用免费开源的图片代理服务抓取 http 内容并以 https 返回
      return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
    }
    return url;
  };

  const getKeywordByTitle = (title: string) => {
    if (title.includes('科幻')) return 'scifi,space';
    if (title.includes('奥斯卡')) return 'cinema,oscar';
    if (title.includes('迪士尼') || title.includes('梦幻')) return 'disney,fantasy';
    return 'movie,acting';
  };

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        setIsLoading(true);
        const API_URL = 'https://fuw5fl-eq4cta.5rw-czupmhw816.motia.cloud/movies/themes';
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(API_URL, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data && data.themes) {
            const mappedThemes: MovieTheme[] = data.themes.map((t: any) => ({
              id: t.id,
              title: t.description || '精选专题',
              clipCount: t.movieCount || 0,
              imageUrl: getSafeImageUrl(t.cover) // 使用代理处理图片
            }));
            setThemes(mappedThemes);
          }
        }
      } catch (error) {
        console.error("FilmVoice Error: 无法获取专题数据", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchThemes();
  }, []);

  const handleThemeClick = (title: string) => {
    alert(`正在为您加载《${title}》精选内容...`);
  };

  if (!isLoading && themes.length === 0) return null;

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between px-6 mb-5">
        <div className="flex flex-col">
          <h3 className="text-[18px] font-black text-text-main tracking-tight">精选专题</h3>
          <div className="h-1 w-8 bg-brand-primary rounded-full mt-1"></div>
        </div>
        <button 
          onClick={() => alert("更多专题正在生成中...")}
          className="text-brand-primary text-[13px] font-bold flex items-center bg-orange-50 px-3 py-1.5 rounded-full active:scale-95 transition-all"
        >
          查看全部 <span className="material-symbols-outlined text-[16px] ml-0.5">chevron_right</span>
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto px-6 hide-scrollbar pb-4">
        {isLoading ? (
          [1, 2, 3].map((i) => (
            <div key={i} className="shrink-0 w-[160px] animate-pulse">
              <div className="aspect-[3/4] rounded-[1.8rem] bg-orange-100/40 mb-3 shadow-inner"></div>
              <div className="h-4 bg-orange-100/40 rounded-full w-3/4 mb-2"></div>
              <div className="h-3 bg-orange-100/20 rounded-full w-1/2"></div>
            </div>
          ))
        ) : (
          themes.map((theme) => (
            <div 
              key={theme.id} 
              className="shrink-0 w-[160px] cursor-pointer group"
              onClick={() => handleThemeClick(theme.title)}
            >
              <div className="relative aspect-[3/4] rounded-[1.8rem] overflow-hidden mb-3 ios-shadow-soft group-active:scale-95 transition-all duration-300 ring-4 ring-transparent group-hover:ring-brand-primary/10 bg-orange-50">
                <img 
                  src={theme.imageUrl} 
                  alt={theme.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const keyword = getKeywordByTitle(theme.title);
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400&sig=${theme.id}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 px-2 py-0.5 rounded-lg">
                    <span className="text-[9px] text-white font-black uppercase tracking-widest">Theme</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[15px] font-black leading-tight line-clamp-2 drop-shadow-md">{theme.title}</p>
                  <div className="flex items-center gap-1.5 mt-2 opacity-80">
                    <span className="material-symbols-outlined text-[12px]">layers</span>
                    <span className="text-[10px] font-bold">{theme.clipCount} Clips</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ThemeSection;
