"use client";

import Link from "next/link";
import TiltCard from "./TiltCard";

type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block h-full">
      <TiltCard>
        <article
          className="
            h-full
            flex
            flex-col
            justify-between
            rounded-2xl
            border border-white/10
            bg-black/40
            backdrop-blur
            p-6
            transition-all
            duration-300
            hover:border-cyan-400/50
            min-h-[320px]
          "
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-3">
            {blog.title}
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            {blog.date}
          </p>

          {/* pushes content evenly */}
          <p className="text-gray-300 leading-relaxed flex-grow">
            {blog.description}
          </p>
        </article>
      </TiltCard>
    </Link>
  );
}
