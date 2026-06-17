import React from 'react';
import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const AnimateInView = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  variants = fadeUp,
  as = 'div',
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
};

export default AnimateInView;
