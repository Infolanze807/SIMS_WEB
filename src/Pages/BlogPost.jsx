import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, BLOG_SLUG_ALIASES } from '../data/blogPosts';
import { getBlogPostContent } from '../data/blogPostLoader';
import PageLoader from '../Component/PageLoader';
import BlogPostHero from '../Component/Blog/BlogPostHero';
import BlogPostBody from '../Component/Blog/BlogPostBody';
import BlogPostNav from '../Component/Blog/BlogPostNav';
import ServiceDetailFAQs from '../Component/Services/Detail/ServiceDetailFAQs';
import ServiceDetailCTA from '../Component/Services/Detail/ServiceDetailCTA';
import Seo from '../Component/Seo';
import { blogPostingJsonLd, clipText, sectionsToPlainText, SITE_NAME } from '../seo/site';

const BlogPost = () => {
  const { slug } = useParams();
  const resolvedSlug = BLOG_SLUG_ALIASES[slug] || slug;
  const post = getBlogPostBySlug(resolvedSlug);

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    getBlogPostContent(resolvedSlug).then((result) => {
      if (!active) return;
      setContent(result);
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, [resolvedSlug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  if (loading) {
    return <PageLoader label="Loading article…" />;
  }

  if (!content) {
    return <Navigate to="/blog" replace />;
  }

  const articleBody = sectionsToPlainText(content.sections);
  const description = clipText(articleBody || post.excerpt);

  return (
    <div className="font-sans antialiased">
      <Seo
        title={`${post.title} | ${SITE_NAME}`}
        description={description}
        path={`/blog/${post.slug}`}
        jsonLd={blogPostingJsonLd({
          post,
          path: `/blog/${post.slug}`,
          articleBody,
          description,
          faqs: content.faqs,
        })}
      />
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
