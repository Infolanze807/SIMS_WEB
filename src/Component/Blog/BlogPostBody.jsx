import React from 'react';
import { Link } from 'react-router-dom';
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
    if (part.link && part.to) {
      return (
        <Link key={index} to={part.to} className="font-bold text-brand-accent hover:underline">
          {part.link}
        </Link>
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

        if (section.type === 'image') {
          return (
            <AnimatedSection key={index} index={index}>
              <figure className="space-y-3">
                <img
                  src={section.src}
                  alt={section.alt}
                  width="1200"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full rounded-[28px] object-cover"
                />
                {section.caption ? (
                  <figcaption className="text-center text-sm leading-relaxed text-slate-500">
                    {section.caption}
                  </figcaption>
                ) : null}
              </figure>
            </AnimatedSection>
          );
        }

        if (section.type === 'table') {
          return (
            <AnimatedSection key={index} index={index}>
              <div className="overflow-hidden rounded-[28px] border border-slate-100">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      {section.headers.map((header) => (
                        <th key={header} className="px-5 py-4 font-black">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-slate-100 odd:bg-white even:bg-[#FAFBFD]">
                        {row.map((cell) => (
                          <td key={cell} className="px-5 py-4 leading-relaxed text-slate-600">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
