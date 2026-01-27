"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280 }}
      className="
        rounded-2xl
        bg-black/40
        border border-white/10
        p-6
        h-full
      "
    >
      <Link href={`/blog/${blog.slug}`} className="block h-full">

        {/* SHARED TITLE */}
        <motion.h2
          layoutId={`blog-title-${blog.slug}`}
          className="text-xl font-semibold text-cyan-400 mb-3"
        >
          {blog.title}
        </motion.h2>

        <p className="text-sm text-gray-400 mb-4">
          {blog.date}
        </p>

        <p className="text-gray-300 text-sm line-clamp-4">
          {blog.excerpt}
        </p>

      </Link>
    </motion.div>
  );
}
