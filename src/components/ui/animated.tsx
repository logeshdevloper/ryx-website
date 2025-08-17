"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerParent } from "@/lib/motionVariants";

type CommonProps = {
  className?: string;
  delay?: number;
  children: ReactNode;
};

export function Reveal({ children, className, delay = 0 }: CommonProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



