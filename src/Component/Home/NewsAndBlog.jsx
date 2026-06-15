import React from 'react';
import { FaUser, FaFolderOpen, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const NewsAndBlog = () => {
  const articles = [
    {
      id: 1,
      day: "20",
      month: "Nov",
      author: "simshealthcare",
      category: "Uncategorized",
      title: "Post-Surgery & Rehabilitation Care Dubai – Heal Comfortably at Home",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600",
      excerpt: "Discover tailored recovery plans engineered to bring medical excellence and comprehensive physical rehabilitation directly into your private residence."
    },
    {
      id: 2,
      day: "06",
      month: "Nov",
      author: "simshealthcare",
      category: "Uncategorized",
      title: "Lab Tests at Home Dubai – Fast, Accurate & Convenient",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&q=80&w=600",
      excerpt: "Skip the waiting rooms. Certified clinical technicians deliver professional sample collection and swift diagnostics inside your comfort zone."
    },
    {
      id: 3,
      day: "01",
      month: "Nov",
      author: "simshealthcare",
      category: "Uncategorized",
      title: "Doctor on Call in Dubai – Fast, Reliable Healthcare at Your Doorstep",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      excerpt: "Access 24/7 top-tier DHA licensed medical consultation and localized acute treatment packages right at your home or hotel desk."
    }
  ];

  return (
    <section className="w-full bg-[#FAFBFD] py-28 px-6 lg:px-10 font-sans antialiased text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="flex flex-col items-center justify-center text-center gap-6 pb-8">
          <div className="space-y-3 max-w-xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25b8a7]/10 text-[#25b8a7] text-[10px] font-black tracking-widest uppercase">
              <span>Clinical Intelligence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#003d4d] leading-none">
              News & Blog
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((post) => (
            <article 
              key={post.id} 
              className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,61,77,0.02)] hover:shadow-[0_30px_60px_rgba(0,61,77,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              
              <div className="w-full aspect-[16/11] overflow-hidden relative bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                <div className="absolute bottom-4 left-4 bg-[#003d4d] text-white py-2 px-3.5 rounded-2xl flex items-center gap-2 shadow-lg backdrop-blur-md border border-white/10 z-10">
                  <FaCalendarAlt className="text-[#25b8a7] text-xs" />
                  <div className="flex items-baseline gap-0.5 leading-none">
                    <span className="text-sm font-black tracking-tight">{post.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">{post.month}</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              <div className="p-7 sm:p-8 flex flex-col flex-1 space-y-4">
                
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-black uppercase tracking-wider text-slate-400">
                  <div className="flex items-center gap-1.5 hover:text-[#25b8a7] transition-colors cursor-pointer">
                    <FaUser className="text-[#25b8a7]/70 text-[10px]" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-slate-200">•</span>
                  <div className="flex items-center gap-1.5 hover:text-[#25b8a7] transition-colors cursor-pointer">
                    <FaFolderOpen className="text-slate-400 text-[10px]" />
                    <span>{post.category}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#003d4d] tracking-tight leading-[1.3] group-hover:text-[#25b8a7] transition-colors duration-300 line-clamp-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed line-clamp-2 pt-1 flex-1">
                  {post.excerpt}
                </p>

                <div className="pt-4 flex items-center text-xs font-black text-[#003d4d] uppercase tracking-widest group/btn cursor-pointer">
                  <span className="group-hover/btn:text-[#25b8a7] transition-colors">Read Article</span>
                  <div className="ml-2 h-6 w-6 rounded-lg bg-slate-50 group-hover/btn:bg-[#25b8a7] group-hover/btn:text-white text-[#003d4d] flex items-center justify-center transition-all duration-300">
                    <FaArrowRight className="text-[9px] transform group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsAndBlog;