"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ blog, basePath = "/blog" }: { blog: any; basePath?: string }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280 }}
      className="
        rounded-2xl
        bg-black/40
        border border-white/10
        p-4 sm:p-6
        h-full
        overflow-hidden
      "
    >
      <Link href={`${basePath}/${blog.slug}`} className="block h-full">

        {/* SHARED TITLE */}
        <motion.h2
          layoutId={`blog-title-${blog.slug}`}
          className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 break-words"
        >
          {blog.title}
        </motion.h2>

        <p className="text-xs sm:text-sm text-gray-400 mb-4 break-words">
          {blog.date}
        </p>

        <p className="text-gray-300 text-xs sm:text-sm line-clamp-4 break-words">
          {blog.excerpt}
        </p>

      </Link>
    </motion.div>
  );
}
