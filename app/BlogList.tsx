"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";
import Pagination from "@/components/pagination";
import { motion } from "framer-motion";

const BLOGS_PER_PAGE = 8;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function BlogList({ blogs = [], title = "Articles" }: { blogs?: any[]; title?: string }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSearch("");
    setCurrentPage(1);
  }, [blogs.length]);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <BlogHeader onSearch={handleSearch} />
      <main className="px-6 py-32">
        <section className="max-w-3xl mx-auto w-full">
          {/* Page Header */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <span className="text-eyebrow text-[#9A9A9A] block mb-3">
              Perspective
            </span>
            <h1 className="text-page-title font-bold text-[#1C1C1C]">
              {title}
            </h1>
          </motion.header>

          {/* Empty State */}
          {filteredBlogs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="py-24 text-center"
            >
              <p className="text-[#6B6B6B] text-base italic mb-2">
                "Nothing here yet. Still thinking."
              </p>
              <p className="text-[#9A9A9A] text-sm">
                Check back soon for new articles.
              </p>
            </motion.div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              {/* Featured article on first page */}
              {currentPage === 1 && paginatedBlogs.length > 0 && (
                <BlogCard 
                  key={paginatedBlogs[0].slug} 
                  blog={paginatedBlogs[0]} 
                  index={0} 
                  featured={true} 
                />
              )}
              
              {/* Regular articles */}
              {(currentPage === 1 ? paginatedBlogs.slice(1) : paginatedBlogs).map((blog, index) => (
                <BlogCard 
                  key={blog.slug} 
                  blog={blog} 
                  index={currentPage === 1 ? index + 1 : index} 
                />
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {filteredBlogs.length > 0 && totalPages > 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-24 flex justify-center border-t border-[#E8E8E6] pt-12"
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}
