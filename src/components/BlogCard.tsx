import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function BlogCard({
  slug,
  title,
  description,
  date,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article
        className="
          rounded-2xl
          bg-white
          p-6
          shadow-md
          transition-transform duration-300
          hover:-translate-y-2
          hover:rotate-[0.5deg]
          hover:shadow-xl
          cursor-pointer
        "
      >
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </article>
    </Link>
  );
}
