"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";
type RevealPreset = "fade" | "slide" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  preset?: RevealPreset;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  staggerChildren?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const getDirectionOffset = (
  direction: RevealDirection,
  distance: number
): { x: number; y: number } => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

const getPresetVariants = (
  preset: RevealPreset,
  direction: RevealDirection,
  distance: number
): Variants => {
  const offset = getDirectionOffset(direction, distance);

  switch (preset) {
    case "fade":
      return {
        hidden: { opacity: 0, ...offset },
        visible: { opacity: 1, x: 0, y: 0 },
      };
    case "slide":
      return {
        hidden: { opacity: 0, ...offset },
        visible: { opacity: 1, x: 0, y: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.95, ...offset },
        visible: { opacity: 1, scale: 1, x: 0, y: 0 },
      };
    case "blur":
      return {
        hidden: { opacity: 0, filter: "blur(8px)", ...offset },
        visible: { opacity: 1, filter: "blur(0px)", x: 0, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

export default function ScrollReveal({
  children,
  direction = "up",
  preset = "fade",
  delay = 0,
  duration = 0.5,
  distance = 24,
  once = true,
  threshold = 0.1,
  className = "",
  staggerChildren,
  as = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  // Respect reduced motion preference
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = getPresetVariants(preset, direction, distance);

  const containerVariants: Variants = staggerChildren
    ? {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
          delayChildren: delay,
        },
      },
    }
    : variants;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={containerVariants}
      transition={{
        duration,
        delay: staggerChildren ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

// Child component for staggered animations
export function ScrollRevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
