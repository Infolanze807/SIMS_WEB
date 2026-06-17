import React from 'react';
import BlogHero from '../Component/Blog/BlogHero';
import BlogGrid from '../Component/Blog/BlogGrid';

const Blog = () => {
  return (
    <div className="font-sans antialiased">
      <BlogHero />
      <BlogGrid />
    </div>
  );
};

export default Blog;
