import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { EASE } from "../../lib/motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Enables staggerChildren for direct motion children instead of animating this node itself. */
  stagger?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  stagger,
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE, delay },
        },
      };

  const containerVariants: Variants | undefined = stagger
    ? {
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }
    : undefined;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants ?? itemVariants}
    >
      {children}
    </motion.div>
  );
}
