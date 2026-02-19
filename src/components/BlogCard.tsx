"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLElement>(null);

  const animationProps = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1] as any,
        delay: index * 0.06,
      },
    };

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  if (featured) {
    return (
      <motion.article
        {...animationProps}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="featured-article group relative py-16 mb-12 border-b border-[#E8E8E6] hover:bg-white hover:shadow-xl transition-all duration-300 -mx-6 px-6 rounded-sm cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0) scale(${rotateX || rotateY ? 1.02 : 1})`,
          transition: "transform 0.1s ease-out, box-shadow 0.3s ease, background-color 0.3s ease",
        }}
      >
        <Link href={`${basePath}/${blog.slug}`} className="block">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-eyebrow text-[#1C1C1C] bg-[#F1F1EF] px-2.5 py-1 rounded-sm">
              Featured
            </span>
            <time className="text-meta text-[#9A9A9A]">
              {blog.date}
            </time>
          </div>

          <h2 className="text-page-title font-bold text-[#1C1C1C] mb-6 leading-[1.1] transition-colors duration-300 max-w-4xl group-hover:text-[#404040]">
            {blog.title}
          </h2>

          <p className="text-[#6B6B6B] text-lg leading-relaxed line-clamp-3 max-w-3xl mb-10 font-serif italic">
            {blog.excerpt || blog.description}
          </p>

          <span className="inline-flex items-center text-eyebrow text-[#1C1C1C] group-hover:gap-3 transition-all duration-300">
            Read Full Article
            <svg
              className="w-4 h-4 ml-2 transform transition-transform duration-300 ease-out group-hover:translate-x-1"
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
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative py-12 border-b border-[#E8E8E6] last:border-0 hover:bg-white hover:shadow-lg transition-all duration-300 -mx-6 px-6 rounded-sm cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0) scale(${rotateX || rotateY ? 1.01 : 1})`,
        transition: "transform 0.1s ease-out, box-shadow 0.3s ease, background-color 0.3s ease",
      }}
    >
      <Link href={`${basePath}/${blog.slug}`} className="block">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1 max-w-2xl">
            <time className="text-meta text-[#9A9A9A] block mb-3">
              {blog.date}
            </time>

            <h2 className="text-article-title font-bold text-[#1C1C1C] mb-4 leading-tight group-hover:text-[#404040] transition-colors duration-200">
              {blog.title}
            </h2>

            <p className="text-[#6B6B6B] text-[15px] leading-relaxed line-clamp-2 mb-6">
              {blog.excerpt || blog.description}
            </p>

            <span className="inline-flex items-center text-eyebrow text-[#9A9A9A] group-hover:text-[#1C1C1C] transition-colors duration-300">
              Read Full Article →
            </span>
          </div>
        </div>
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
