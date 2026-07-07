'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type From = 'bottom' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  /** Arah asal animasi masuk. */
  from?: From;
  /** Jeda sebelum animasi dimulai (detik), untuk efek stagger. */
  delay?: number;
  duration?: number;
  className?: string;
}

const offsets: Record<From, { x: number; y: number }> = {
  bottom: { x: 0, y: 36 },
  left: { x: -44, y: 0 },
  right: { x: 44, y: 0 },
  none: { x: 0, y: 0 },
};

const Reveal = ({
  children,
  from = 'bottom',
  delay = 0,
  duration = 0.7,
  className,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
