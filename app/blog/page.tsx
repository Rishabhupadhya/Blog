import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/pagination";
import { getAllBlogs } from "@/lib/getBlogs";
import { AmbientBackground } from "@/components/Parallax";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const BLOGS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const allBlogs = getAllBlogs();

  const blogs = allBlogs.map((blog: any) => ({
    slug: blog.slug,
    title: blog.title || "Untitled",
    description: blog.description || "No description available.",
    date: blog.date || "Unknown date"
  }));

  const currentPage = Number(params.page) || 1;
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <main className="min-h-screen bg-[#FAFAF9] relative overflow-hidden">
      <AmbientBackground intensity={0.4} />

      <div className="max-w-5xl mx-auto px-6 pt-40 pb-32">
        <FadeIn>
          <div className="mb-20">
            <span className="text-eyebrow text-[#9A9A9A] mb-4 block">Archive</span>
            <h1 className="text-EDITORIAL-TITLE font-bold text-[#1A1A1A] text-5xl md:text-6xl tracking-tight mb-8">
              All Perspectives
            </h1>
            <p className="text-lg text-[#6B6B6B] max-w-2xl leading-relaxed">
              A comprehensive collection of our technical deep dives, architectural insights, and industry observations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4">
          {paginatedBlogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              index={index}
              featured={currentPage === 1 && index === 0}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-24 pt-12 border-t border-[#E8E8E6] flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </main>
  );
}
