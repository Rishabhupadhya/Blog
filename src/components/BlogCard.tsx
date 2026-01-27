import Link from "next/link";

type BlogCardProps = {
  blog: {
    slug: string;
    title: string;
    date: string;
    description?: string;
  };
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <article
        className="
          h-full
          rounded-2xl
          border
          border-white/10
          bg-black/40
          p-6
          transition-all
          hover:-translate-y-1
          hover:border-cyan-400
          hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.5)]
          cursor-pointer
        "
      >
        <h3 className="text-lg font-semibold text-cyan-400 mb-3">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          {blog.date}
        </p>

        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {blog.description}
        </p>
      </article>
    </Link>
  );
}
