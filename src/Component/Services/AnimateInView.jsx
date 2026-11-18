import React, { useEffect, useRef, useState } from 'react';

/**
 * Lightweight CSS reveal — avoids shipping framer-motion on first paint / TBT.
 */
const AnimateInView = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
  animateOnMount = false,
}) => {
  const Component = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(animateOnMount);

  useEffect(() => {
    if (animateOnMount) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animateOnMount]);

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(18px)',
        transition: `opacity 0.45s ease ${delay}s, transform 0.45s ease ${delay}s`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
};

export const fadeUp = {};
export const fadeIn = {};
export const scaleIn = {};
export const slideFromLeft = {};
export const slideFromRight = {};
export const staggerContainer = {};

export default AnimateInView;
