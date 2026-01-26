import { getAllBlogs } from "@/lib/getBlogs";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const blogs = getAllBlogs();
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl py-16 px-4 sm:px-8">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-zinc-50 text-center">Tech Blog</h1>
        <div className="grid gap-8">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.slug}
              slug={blog.slug}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
