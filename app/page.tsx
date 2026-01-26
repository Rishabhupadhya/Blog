import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/getBlogs";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen px-8 py-28 flex flex-col items-center justify-center">
      {/* PAGE CONTAINER */}
      <section className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14 text-center">
          Tech Blog
        </h1>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
          "
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

      </section>
    </main>
  );
}
