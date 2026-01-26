import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    title: "System Design Fundamentals",
    description:
      "A practical guide to designing scalable, reliable systems used in real-world products.",
    slug: "system-design-fundamentals",
    date: "Jan 2026",
  },
  {
    title: "Scaling Backend APIs",
    description:
      "Load balancing, caching, rate limiting, and database scaling explained clearly.",
    slug: "scaling-backend-apis",
    date: "Jan 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">
        Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
