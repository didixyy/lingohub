
import React from 'react';

const FeaturedBanner: React.FC = () => {
  return (
    <section className="px-5 mt-2">
      <div 
        onClick={() => alert("开始探索今日主推内容！")}
        className="relative w-full aspect-[1.5/1] rounded-[2rem] overflow-hidden ios-shadow group cursor-pointer"
      >
        <img 
          alt="Director Cat" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-7">
          <span className="bg-brand-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-full w-fit mb-3">今日主推</span>
          <h2 className="text-2xl font-black text-white leading-tight">
            像电影导演一样<br />开口说英语
          </h2>
          <p className="text-white/80 text-xs mt-2 font-medium">和小猫导演一起重温经典对白</p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-6 opacity-30">
          <p className="text-white font-mono text-sm tracking-[0.2em]">COFFEGUN</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
