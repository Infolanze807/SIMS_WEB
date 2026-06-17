import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getBlogPostBySlug } from '../../data/blogPosts';
import AnimateInView, { slideFromLeft, slideFromRight } from '../Services/AnimateInView';

const PostLink = ({ post, direction }) => {
  const isPrevious = direction === 'previous';

  return (
    <AnimateInView variants={isPrevious ? slideFromLeft : slideFromRight}>
      <motion.div whileHover={{ y: -4 }}>
        <Link
          to={`/blog/${post.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-[28px] border border-slate-100 bg-[#FAFBFD] p-6 transition hover:border-brand-accent/20 hover:shadow-lg"
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent transition group-hover:bg-brand-accent group-hover:text-white ${!isPrevious ? 'order-2' : ''}`}
          >
            {isPrevious ? <FaArrowLeft className="text-sm" /> : <FaArrowRight className="text-sm" />}
          </div>
          <div className={`space-y-1 ${!isPrevious ? 'order-1 text-right' : ''}`}>
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent">
              {isPrevious ? 'Previous Post' : 'Next Post'}
            </p>
            <p className="text-base font-black leading-snug text-brand-dark transition group-hover:text-brand-accent">
              {post.title}
            </p>
          </div>
        </Link>
      </motion.div>
    </AnimateInView>
  );
};

const BlogPostNav = ({ previousSlug, nextSlug }) => {
  const previousPost = previousSlug ? getBlogPostBySlug(previousSlug) : null;
  const nextPost = nextSlug ? getBlogPostBySlug(nextSlug) : null;

  if (!previousPost && !nextPost) return null;

  return (
    <section className="border-t border-slate-100 bg-white px-6 py-12 font-sans antialiased lg:px-10">
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {previousPost ? (
          <PostLink post={previousPost} direction="previous" />
        ) : (
          <div className="hidden sm:block" />
        )}
        {nextPost && <PostLink post={nextPost} direction="next" />}
      </div>
    </section>
  );
};

export default BlogPostNav;
