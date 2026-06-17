import React from 'react';
import { motion } from 'framer-motion';

const renderParts = (parts = []) =>
  parts.map((part, index) => {
    if (typeof part === 'string') {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
    if (part.bold) {
      return (
        <strong key={index} className="font-bold text-brand-dark">
          {part.bold}
        </strong>
      );
    }
    if (part.italic) {
      return (
        <em key={index} className="font-medium italic text-brand-dark/90">
          {part.italic}
        </em>
      );
    }
    return null;
  });

const AnimatedSection = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const BlogPostBody = ({ sections = [] }) => {
  return (
    <article className="prose-sims mx-auto max-w-3xl space-y-8 px-6 py-16 font-sans antialiased lg:px-0 lg:py-20">
      {sections.map((section, index) => {
        if (section.type === 'heading') {
          const Tag = section.level === 3 ? 'h3' : 'h2';
          const className =
            section.level === 3
              ? 'text-xl font-black tracking-tight text-brand-dark sm:text-2xl'
              : 'border-b border-slate-100 pb-4 text-2xl font-black tracking-tight text-brand-dark sm:text-3xl';

          return (
            <AnimatedSection key={index} index={index}>
              <Tag className={className}>{section.text}</Tag>
            </AnimatedSection>
          );
        }

        if (section.type === 'paragraph') {
          return (
            <AnimatedSection key={index} index={index}>
              <p className="text-base leading-relaxed text-slate-600">
                {renderParts(section.parts)}
              </p>
            </AnimatedSection>
          );
        }

        if (section.type === 'bullets') {
          return (
            <AnimatedSection key={index} index={index}>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-slate-600"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          );
        }

        if (section.type === 'list') {
          return (
            <AnimatedSection key={index} index={index}>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    className="flex gap-3 text-base leading-relaxed text-slate-600"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.06 }}
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                    <span>
                      <strong className="font-bold text-brand-dark">{item.label}</strong> {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          );
        }

        if (section.type === 'ordered-list') {
          return (
            <AnimatedSection key={index} index={index}>
              <ol className="space-y-5">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    className="flex gap-4 text-base leading-relaxed text-slate-600"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.08 }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-sm font-black text-brand-accent">
                      {itemIndex + 1}
                    </span>
                    <span className="pt-0.5">
                      <strong className="font-bold text-brand-dark">{item.label}</strong> {item.text}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </AnimatedSection>
          );
        }

        return null;
      })}
    </article>
  );
};

export default BlogPostBody;
