"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";
import Pagination from "@/components/pagination";

const BLOGS_PER_PAGE = 8; // Changed to 8 so you can see pagination with 8 blogs (1 page)

export default function BlogList({ blogs = [] }: { blogs?: any[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Reset state when blogs change
  useEffect(() => {
    setSearch("");
    setCurrentPage(1);
  }, [blogs.length]);
  
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  // Reset to page 1 when search changes
  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    setCurrentPage(1);
  };

  return (
    <>
      <BlogHeader onSearch={handleSearch} />
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <section className="max-w-7xl mx-auto w-full overflow-hidden">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-12 sm:mb-16 break-words">
            Technology Blogs
          </h1>
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-400">
              No blogs found for "{search}"
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {paginatedBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>

              {/* Pagination - Always show if there are blogs */}
              {filteredBlogs.length > 0 && (
                <div className="mt-20 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </>
  );
}
