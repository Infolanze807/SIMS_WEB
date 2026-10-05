import { useEffect } from 'react';
import { absoluteUrl } from '../seo/site';

const upsertMeta = (name, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertJsonLd = (data) => {
  let el = document.getElementById('sims-jsonld');
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.id = 'sims-jsonld';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const Seo = ({ title, description, path = '/', jsonLd }) => {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta('description', description);
    upsertCanonical(absoluteUrl(path));
    upsertJsonLd(jsonLd);
  }, [title, description, path, jsonLd]);

  return null;
};

export default Seo;
