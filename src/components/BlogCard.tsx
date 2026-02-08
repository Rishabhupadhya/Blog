"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    excerpt?: string;
    description?: string;
    date: string;
    readingTime?: string;
  };
  basePath?: string;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ 
  blog, 
  basePath = "/blog", 
  index = 0,
  featured = false 
}: BlogCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.06,
        },
      };

  if (featured) {
    return (
      <motion.article
        {...animationProps}
        className="featured-article group relative py-12 mb-8"
      >
        <Link href={`${basePath}/${blog.slug}`} className="block">
          {/* Featured badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-eyebrow text-[#1C1C1C] bg-[#E8E8E6] px-2 py-1 rounded-sm">
              Featured
            </span>
            <time className="text-meta text-[#9A9A9A]">
              {blog.date}
            </time>
          </div>

          {/* Large title for featured */}
          <h2 className="text-page-title font-bold text-[#1C1C1C] mb-4 leading-tight transition-colors duration-200 max-w-3xl">
            <span className="relative">
              {blog.title}
              <span 
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1C1C1C] transition-all duration-300 ease-out group-hover:w-full"
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Excerpt - more prominent for featured */}
          <p className="text-[#6B6B6B] text-base leading-relaxed line-clamp-3 max-w-2xl mb-8">
            {blog.excerpt || blog.description}
          </p>

          {/* Read link with arrow */}
          <span className="inline-flex items-center text-eyebrow text-[#1C1C1C] group-hover:text-[#2D2D2D]">
            <span className="relative overflow-hidden">
              Read Article
            </span>
            <svg
              className="w-4 h-4 ml-2 transform transition-transform duration-200 ease-out group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      {...animationProps}
      className="group relative py-10 border-b border-[#E8E8E6] last:border-0"
    >
      <Link href={`${basePath}/${blog.slug}`} className="block">
        {/* Date - subtle, positioned above */}
        <time className="text-eyebrow text-[#9A9A9A] block mb-3">
          {blog.date}
        </time>

        {/* Title with subtle hover underline */}
        <h2 className="text-article-title font-bold text-[#1C1C1C] mb-3 leading-tight transition-colors duration-200">
          <span className="relative">
            {blog.title}
            <span 
              className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#2D2D2D] transition-all duration-280 ease-out group-hover:w-full"
              aria-hidden="true"
            />
          </span>
        </h2>

        {/* Excerpt */}
        <p className="text-[#6B6B6B] text-[15px] leading-relaxed line-clamp-2 max-w-2xl mb-6">
          {blog.excerpt || blog.description}
        </p>

        {/* Read link with arrow */}
        <span className="inline-flex items-center text-eyebrow text-[#1C1C1C] group-hover:text-[#2D2D2D]">
          <span className="relative overflow-hidden">
            Read Article
          </span>
          <svg
            className="w-3 h-3 ml-2 transform transition-transform duration-200 ease-out group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </Link>
    </motion.article>
  );
}

/**
 * Compact blog card for sidebar or related articles
 */
export function CompactBlogCard({
  blog,
  basePath = "/blog",
}: {
  blog: { slug: string; title: string; date: string };
  basePath?: string;
}) {
  return (
    <Link
      href={`${basePath}/${blog.slug}`}
      className="group block py-4 border-b border-[#E8E8E6] last:border-0"
    >
      <time className="text-meta text-[#9A9A9A] block mb-1.5">{blog.date}</time>
      <h3 className="text-sm font-medium text-[#1C1C1C] leading-snug group-hover:text-[#6B6B6B] transition-colors duration-150">
        {blog.title}
      </h3>
    </Link>
  );
}
