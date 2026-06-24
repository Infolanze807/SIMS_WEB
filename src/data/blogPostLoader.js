let contentModulePromise = null;

const loadBlogContentModule = () => {
  if (!contentModulePromise) {
    contentModulePromise = import('./blogPostContent');
  }
  return contentModulePromise;
};

export const getBlogPostContent = async (slug) => {
  const mod = await loadBlogContentModule();
  return mod.BLOG_POST_CONTENT[slug] ?? null;
};
