"use client";

import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function BlogCard({
  title,
  description,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div
        className="
          group cursor-pointer
          rounded-2xl p-6
          bg-white/5 backdrop-blur
          border border-white/10
          transition-all duration-300
          hover:scale-[1.03]
          hover:-translate-y-2
          hover:shadow-[0_25px_80px_-15px_rgba(34,211,238,0.35)]
        "
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
