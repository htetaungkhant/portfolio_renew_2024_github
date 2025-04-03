'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] // Custom easing function for smoother animation
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}