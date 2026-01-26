import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    slug: "system-design-basics",
    title: "System Design Basics",
    description: "Foundational concepts every backend engineer must know.",
    date: "Jan 2026",
  },
  {
    slug: "scaling-microservices",
    title: "Scaling Microservices",
    description: "How large systems scale reliably at FAANG.",
    date: "Feb 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
