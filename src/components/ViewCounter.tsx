"use client";

import { useViewCounter } from "@/hooks/useViewCounter";
import { motion } from "framer-motion";

interface ViewCounterProps {
  slug: string;
  shouldIncrement?: boolean;
  className?: string;
}

export default function ViewCounter({ 
  slug, 
  shouldIncrement = true,
  className = "" 
}: ViewCounterProps) {
  const { views, isLoading } = useViewCounter(slug, shouldIncrement);

  if (isLoading) {
    return (
      <span className={`text-[#9A9A9A] text-sm ${className}`}>
        <span className="inline-block w-12 h-4 bg-[#E8E8E6] animate-pulse rounded"></span>
      </span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center gap-1.5 text-[#9A9A9A] text-sm ${className}`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span>{views.toLocaleString()} views</span>
    </motion.span>
  );
}

/**
 * Compact view counter for cards/listings
 */
export function CompactViewCounter({ slug }: { slug: string }) {
  const { views, isLoading } = useViewCounter(slug, false);

  if (isLoading) {
    return (
      <span className="text-[#9A9A9A] text-xs">
        <span className="inline-block w-10 h-3 bg-[#E8E8E6] animate-pulse rounded"></span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-[#9A9A9A] text-xs">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      {views.toLocaleString()}
    </span>
  );
}
