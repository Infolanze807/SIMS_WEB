import React from 'react';
import Seo from '../Component/Seo';
import { BLOG_POSTS } from '../data/blogPosts';
import { blogIndexJsonLd, SITE_NAME } from '../seo/site';
import BlogHero from '../Component/Blog/BlogHero';
import BlogGrid from '../Component/Blog/BlogGrid';

const Blog = () => {
  return (
    <div className="font-sans antialiased">
      <Seo
        title={`Healthcare Guides for Dubai | ${SITE_NAME} Blog`}
        description="Guides on doctor visits, IV drips, lab tests, and post-surgery rehab at home in Dubai, written by SIMS Home Healthcare."
        path="/blog"
        jsonLd={blogIndexJsonLd(BLOG_POSTS)}
      />
      <BlogHero />
      <BlogGrid />
    </div>
  );
};

export default Blog;
