
import React from 'react';

const CommunitySection: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 slide-in-from-bottom-2 px-4 pb-32">
      {/* Mascot Tip Section */}
      <div className="flex items-end gap-3 mb-6 mt-4 ml-2">
        <div className="relative w-14 h-14 shrink-0 rounded-full bg-orange-100 overflow-hidden border-2 border-white shadow-sm">
          <img 
            alt="Kitten Mascot" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX35MZTH5M-S8ezca2WBFnyd_xJ6PqUuV5s7fZUCtUdi5bUOmp6aHkCxc0jv9I7g-71qUDGC_vA1mxbQL5vnNhYVhH0x7GRYeiWXGqgiUxFdKtLPO6k1qlCUL6YQ2JWiuretRDMXl3eMeeXIo6DXa9O-Q6irKV7cLJz_pU18PoUhBlkowwqo9516fAqwxaq1BW_Wh61kqHJinxXadmVHWdZuiYoR7g-sZ1tWSSbWPHFMSSa3DBpeesr8V73scJqeqgIG6nnU8guVg"
          />
        </div>
        <div className="relative bg-white px-4 py-2.5 rounded-2xl ios-shadow text-[13px] font-medium text-text-main after:content-[''] after:absolute after:left-5 after:-bottom-2 after:border-l-[8px] after:border-l-transparent after:border-r-[8px] after:border-r-transparent after:border-t-[8px] after:border-t-white">
          喵~ 快来看看大家发出的合演邀请吧！
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl overflow-hidden ios-shadow transition-transform active:scale-[0.98] border border-orange-50/50">
          <div className="relative h-44 overflow-hidden">
            <img alt="The Devil Wears Prada" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKTbZ5oBWbc8N2XHz462itiHp6y4tvTDqo095crAYQkFY0DgLgWRbK_wN9suwfDwhM77sEzT0s9a_18ovqAq-OG9rSy1ZbVZXToRiCwg_rsO06JGA12jfsEslPIyS-G4Vg6qbVjWvYnr_-u8ODBLiMa5YRUh5mkY6VC-5syFg6ig_b-I1KSPJR-vo7_VtrJ9PE1WOu9IYG-opiZ9KXX4S-aphZfC3FO0-cbHeuFNWj0HidekqgIvYHIpucs-9dpmzsUxMT0iRKNQ"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-brand-primary flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              正在招募
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-text-main mb-1">《穿普拉达的女王》</h3>
                <p className="text-[12px] text-text-muted">经典职场对白 • 角色：安德丽亚</p>
              </div>
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLHN3rA4gsg1HNJau85nBQA4cgAK3WlILfIB3ncAFtv0_L-8sFXfLjTlq702kdG-H8yrp1nFuOBIQf9coLfq1IjQ4sYTPMSSHddLfnD-6bjDMlCJRqxn3LDwTp7OlGv7hR7Jcv4PkuV9Pg1-gMqL0X3j-STmx1RzBTE5Y2TKDE2SXQeLl7bwFySUaUaWyYoYi1ykZjkaAGASNJ-DYJ4DqDw1Oplak_SgqYwGzFfXy7oahgewb0JdnSfoGkwbpxL_rUhKGYGm1YMqs"/>
                </div>
                <div className="size-8 rounded-full border-2 border-white bg-orange-50 flex items-center justify-center">
                  <span className="text-[10px] text-brand-primary font-bold">+1</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-warm-beige pt-4">
              <div className="flex items-center gap-2">
                <img className="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMEi2gYn-oBWPWQlwmB9PaPruJX7iG98myDtADfWJ-RBm58v9-6um1gYwRuD3DQh1Ug9RmPFzfDj3IimamSuRJJFpCSydnYY76JA3TaAKeV3UXSMqT1_g8-uU0zGi-E-Wa3BfOxg80J5JZ_L_lRf9e9RcfztFhGdwIVbJToCMfSdZW0HenBhuOvITPklSlIl26wU7g0IGPneVaCPHjSQdp3rf6OCFxz18VBS2-k96atv0m184nk2Edu76XvMY5eIiUVkwZtfO1RH8"/>
                <span className="text-[11px] text-text-muted">发起人: 小鱼酱</span>
              </div>
              <button className="bg-brand-primary text-white text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all">
                立即加入
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl overflow-hidden ios-shadow transition-transform active:scale-[0.98] border border-orange-50/50">
          <div className="relative h-44 overflow-hidden">
            <img alt="Zootopia" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0-PwAeY5VRRGI_lXVkTsXbQTfUthof4WEgud1d_e7zerqjTVh5toSgBkEeyk8lZu5zAd6D0tHJgoEQ6iqmsHLq9ToEQzkvi9R8ZrkcNDIQNe0XhMIJuta24F4ziSrLQLzjs-k5-L0Fxu_WmbjnJ5dGue6CbANyxYzYfLgJx3lHKD6viYzGP4rmYYiL5RXq29lo7g2IqEt4eN4T2Kr9IyxV_ht_Nr-rmHz3KGJIlOCDdDMXInTG6-vKBD_ZOhsKY60T8o2dK8IULE"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-brand-primary flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              缺一人
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-text-main mb-1">《疯狂动物城》</h3>
                <p className="text-[12px] text-text-muted">爆笑配音练习 • 角色：尼克</p>
              </div>
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClBjeefYlzQOpAcM72TA0KWzrfE5MsGFfYO40yGoWN-0wbfJmG3bh3AtkFFqhHF64prHyw2KqGtjJ5evueGYlr9tj9ANNLXMXubjoqYdEf8gNnakmGlxkZcRyjrWctCqq8MVS91Ao4BBpHtlF4khyxvS17UQ9rB_aB-n_r0CKsAz01hnaVF3ESZjNW4zLcCP0JWYRcEzc-ojD4zq80l7Ls57k3XOzqVQXZ6lygFEJ2oA4E3rAZwYMOQ78lzCvlwTUNGcREcxeqFvk"/>
                </div>
                <div className="size-8 rounded-full border-2 border-white bg-orange-50 flex items-center justify-center">
                  <span className="text-[10px] text-brand-primary font-bold">+2</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-warm-beige pt-4">
              <div className="flex items-center gap-2">
                <img className="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb617fkmTLCZvMyAY0j4PVxK8JtPyU0okI4Iyens6ARhGfr2G38PAnd_glldZET4NSkxgnEeagI5ibcLu4a7MzEULSMhk5HwZwiq0SNKvgrnAiqTIM3Nws3s1YO47qW2826eb3v_UjPMkDqnYZpKl36ASqYQb9oXr99NNoATpsZn05ny7Chp4mXnOtIoDnArOAfzM7bPfktBOg2cM2039TNaz8uI24zL5Y_XCCXhkxO0xOLGbFkQ6VM-Njx26yt1eqHVD_pgN16wA"/>
                <span className="text-[11px] text-text-muted">发起人: 英文课代表</span>
              </div>
              <button className="bg-brand-primary text-white text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all">
                立即加入
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl overflow-hidden ios-shadow opacity-90 border border-orange-50/50">
          <div className="relative h-44 overflow-hidden grayscale-[0.2]">
            <img alt="Titanic" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD35TfEgGlgupIKGDETzdmkeVX4m_uMukl_SSVBFCg4Vb6TDMVznzLRy-HSYU6tMrI5LEpX6ZVfg1mwncHlWFosvstXIXGp0EKqsWeCMP2h07eQOFICnmEhQPTo5wd_MYKvwpmVZCI_DNYsuZOB61cI6ntcXMFE4IoTpMu_16WgxI7tW5ksRIy-Sv2bJp5JYtZ5ggLackzf8hsi0SR_4i-s3SV-OtvCc3BwdnndULc8pDQsyi3ZSFkK4eRB0glq4UJ2kDln8Wq_qlU"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-text-main mb-1">《泰坦尼克号》</h3>
                <p className="text-[12px] text-text-muted">经典告别片段 • 角色：杰克</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-warm-beige pt-4">
              <div className="flex items-center gap-2">
                <img className="size-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNaBkd1OtZ28IK40cUBIIZDiONWijKZh8YiMrkWrZE-v4h5jiWvFm69vlndgrKWF4-oPAU1659XVWnw1rK9lpWMzC8TLyJcGUnp_YLOJk-sc3RqOGlWSenkbrmtvpbfq-ZaheCRfSjz0hyp32Fu4GlWwrjSPJ95XlENapSOlbdd-upZOXOy3tf226jjFSP2j96_KSpBEHWcM5Befs61x7dpMuAnnDI1bl2343qLbkT6bEhjaM-CbL5QHqSAqR_f0CV6JLowzadJiY"/>
                <span className="text-[11px] text-text-muted">发起人: 电影梦想家</span>
              </div>
              <button className="bg-brand-primary text-white text-[13px] font-bold px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all">
                立即加入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
