import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaFolderOpen, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import AnimateInView, { fadeUp, staggerContainer } from '../Services/AnimateInView';
import physiotherapyAtHomeImage from '../../assets/PhysiotherapyAtHome003.webp';
import labTestAtHomeImage from '../../assets/LabTestAtHome02.webp';
import doctorOnCallImage from '../../assets/DoctorOnCall04.webp';

const articles = [
  {
    href: '/blog/post-surgery-rehabilitation-care-dubai-heal-comfortably-at-home',
    day: '20',
    month: 'Nov',
    author: 'Dr. Mamoona Fatima',
    category: 'Physiotherapy',
    title: 'Post-Surgery & Rehabilitation Care Dubai – Heal Comfortably at Home',
    image: physiotherapyAtHomeImage,
    excerpt:
      'Recovering after surgery can be stressful, especially when hospital visits are frequent or mobility is limited. SIMS Home Healthcare provides post-surgery and rehabilitation care in Dubai.',
  },
  {
    href: '/blog/lab-tests-at-home-dubai-fast-accurate-convenient',
    day: '06',
    month: 'Nov',
    author: 'Dr. Syeda Marsha Noor',
    category: 'Lab Tests',
    title: 'Lab Tests at Home Dubai – Fast, Accurate & Convenient',
    image: labTestAtHomeImage,
    excerpt:
      'SIMS Home Healthcare makes it easy with lab tests at home in Dubai, ensuring accurate, professional testing without leaving the comfort of your home.',
  },
  {
    href: '/blog/doctor-on-call-in-dubai-fast-reliable-healthcare-at-your-doorstep',
    day: '01',
    month: 'Nov',
    author: 'Dr. Syeda Marsha Noor',
    category: 'Doctor on Call',
    title: 'Doctor on Call in Dubai – Fast, Reliable Healthcare at Your Doorstep',
    image: doctorOnCallImage,
    excerpt:
      'SIMS Home Healthcare’s doctor on call service in Dubai brings professional medical care directly to your home, hotel, or office—timely, effective, and personalized.',
  },
];

const NewsAndBlog = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FAFBFD] px-6 py-28 font-sans antialiased text-slate-900 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-16">
        <AnimateInView className="flex flex-col items-center justify-center gap-6 pb-8 text-center">
          <div className="flex max-w-xl flex-col items-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-accent">
              <span>Clinical Intelligence</span>
            </div>
            <h2 className="text-4xl font-black leading-none tracking-tight text-brand-dark sm:text-5xl">
              News & Blog
            </h2>
          </div>
        </AnimateInView>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {articles.map((post) => (
            <motion.div key={post.title} variants={fadeUp} whileHover={{ y: -8 }}>
              <Link
                to={post.href}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-[0_15px_40px_rgba(0,61,77,0.02)] transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(0,61,77,0.08)]"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    width="640"
                    height="440"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-brand-dark px-3.5 py-2 text-white shadow-lg backdrop-blur-md">
                    <FaCalendarAlt className="text-xs text-brand-accent-light" />
                    <div className="flex items-baseline gap-0.5 leading-none">
                      <span className="text-sm font-black tracking-tight">{post.day}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        {post.month}
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col space-y-4 p-7 sm:p-8">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-black uppercase tracking-wider text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <FaUser className="text-[10px] text-brand-accent/70" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-slate-200">•</span>
                    <div className="flex items-center gap-1.5">
                      <FaFolderOpen className="text-[10px] text-slate-400" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  <h3 className="line-clamp-3 text-lg font-black leading-snug tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-brand-accent sm:text-xl">
                    {post.title}
                  </h3>

                  <p className="line-clamp-2 flex-1 pt-1 text-sm leading-relaxed text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center pt-4 text-xs font-black uppercase tracking-widest text-brand-dark">
                    <span className="transition-colors group-hover:text-brand-accent">Read Article</span>
                    <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-lg bg-slate-50 text-brand-dark transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                      <FaArrowRight className="transform text-[9px] transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <AnimateInView className="flex justify-center pt-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-accent/20 bg-white px-8 py-3 text-xs font-black uppercase tracking-widest text-brand-dark transition hover:border-brand-accent hover:text-brand-accent"
            >
              View All Articles
              <FaArrowRight className="text-[10px]" />
            </Link>
          </motion.div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default NewsAndBlog;
