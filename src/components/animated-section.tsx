"use client";

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  children?: ReactNode;
}

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      {...props}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
