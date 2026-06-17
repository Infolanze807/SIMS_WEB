import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, BLOG_SLUG_ALIASES } from '../data/blogPosts';
import { getBlogPostContent } from '../data/blogPostContent';
import BlogPostHero from '../Component/Blog/BlogPostHero';
import BlogPostBody from '../Component/Blog/BlogPostBody';
import BlogPostNav from '../Component/Blog/BlogPostNav';
import ServiceDetailFAQs from '../Component/Services/Detail/ServiceDetailFAQs';
import ServiceDetailCTA from '../Component/Services/Detail/ServiceDetailCTA';

const BlogPost = () => {
  const { slug } = useParams();
  const resolvedSlug = BLOG_SLUG_ALIASES[slug] || slug;
  const post = getBlogPostBySlug(resolvedSlug);
  const content = getBlogPostContent(resolvedSlug);

  if (!post || !content) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="font-sans antialiased">
      <BlogPostHero post={post} />
      <div className="bg-white">
        <BlogPostBody sections={content.sections} />
      </div>
      {content.faqs?.length > 0 && (
        <ServiceDetailFAQs title="Frequently Asked Questions" faqs={content.faqs} />
      )}
      {content.cta && (
        <div className="bg-[#FAFBFD] pb-20">
          <ServiceDetailCTA {...content.cta} />
        </div>
      )}
      <BlogPostNav previousSlug={content.previousSlug} nextSlug={content.nextSlug} />
    </div>
  );
};

export default BlogPost;
