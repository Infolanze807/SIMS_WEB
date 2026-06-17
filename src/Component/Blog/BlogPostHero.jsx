import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaFolderOpen, FaCalendarAlt, FaComment, FaArrowLeft } from 'react-icons/fa';

const BlogPostHero = ({ post }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-brand-dark via-brand-dark-mid to-brand-accent font-sans text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(79,195,192,0.15),transparent_50%)]" />
      <motion.div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-brand-accent-light"
          >
            <FaArrowLeft className="text-xs" />
            Back to Blog
          </Link>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="space-y-6 lg:col-span-7"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-black uppercase tracking-wider text-white/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-1.5">
                <FaUser className="text-[10px] text-brand-accent-light" />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-[10px] text-brand-accent-light" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <FaFolderOpen className="text-[10px] text-brand-accent-light" />
                <span>{post.category}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <FaComment className="text-[10px] text-brand-accent-light" />
                <span>{post.commentCount ?? 0}</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {post.title}
            </motion.h1>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHero;
