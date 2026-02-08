"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxProps {
  children?: ReactNode;
  speed?: number; // -1 to 1, where negative = opposite direction
  className?: string;
  offset?: [string, string]; // viewport offset for scroll tracking
}

/**
 * Parallax component for subtle depth effects
 * Use sparingly for backgrounds and decorative elements only
 * Never apply to text content
 */
export default function Parallax({
  children,
  speed = 0.3,
  className = "",
  offset = ["start end", "end start"],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  // Calculate parallax range based on speed
  // Slow, subtle movement for atmospheric effect
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [speed * 100, -speed * 100]
  );

  // Respect reduced motion preference
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <motion.div
        style={{ y }}
        className="parallax-layer"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Ambient background layer with parallax
 * Creates subtle floating shapes for depth
 */
export function AmbientBackground({ 
  className = "",
  intensity = 0.5 
}: { 
  className?: string;
  intensity?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50 * intensity]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30 * intensity]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -70 * intensity]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div 
      ref={ref}
      className={`fixed inset-0 pointer-events-none overflow-hidden -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Top left ambient glow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-40"
      >
        <div className="w-full h-full bg-gradient-radial from-[#E8E8E6] to-transparent blur-3xl" />
      </motion.div>

      {/* Center right ambient glow */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full opacity-30"
      >
        <div className="w-full h-full bg-gradient-radial from-[#E8E8E6] to-transparent blur-3xl" />
      </motion.div>

      {/* Bottom ambient glow */}
      <motion.div
        style={{ y: y3 }}
        className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full opacity-25"
      >
        <div className="w-full h-full bg-gradient-radial from-[#E8E8E6] to-transparent blur-3xl" />
      </motion.div>
    </div>
  );
}

/**
 * Decorative separator with parallax
 */
export function ParallaxSeparator({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  if (shouldReduceMotion) {
    return <div className={`h-px bg-[#E8E8E6] my-16 ${className}`} />;
  }

  return (
    <div ref={ref} className={`relative h-px my-16 ${className}`}>
      <motion.div
        style={{ scaleX, opacity }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8E8E6] to-transparent origin-center"
      />
    </div>
  );
}
