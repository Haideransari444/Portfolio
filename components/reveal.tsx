"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 }
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  pop?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  pop = false
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset[direction].x,
        y: offset[direction].y,
        scale: pop ? 0.94 : 1
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        type: "spring",
        stiffness: 92,
        damping: 18,
        mass: 0.8,
        delay
      }}
    >
      {children}
    </motion.div>
  );
}
