"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { AmbientBackground, ParallaxSeparator } from "@/components/Parallax";
import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";
import Pagination from "@/components/pagination";
import BlogFilter, { SortOrder } from "@/components/BlogFilter";

const POSTS_PER_PAGE = 8;

export default function CloudDevOpsList({ posts = [] }: { posts?: any[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [dateRange, setDateRange] = useState<{ start?: string; end?: string }>({});
  
  // Reset state when posts change
  useEffect(() => {
    setSearch("");
    setCurrentPage(1);
  }, [posts.length]);
  
  const sortedAndFilteredPosts = useMemo(() => {
    const lowerSearch = (search || '').toLowerCase();
    let filtered = posts.filter((post) =>
      (post.title || '').toLowerCase().includes(lowerSearch) ||
      (post.description || '').toLowerCase().includes(lowerSearch)
    );

    // Apply date range filter if set
    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter((post) => {
        if (!post.date) return false;
        const postDate = new Date(post.date);
        if (isNaN(postDate.getTime())) return false;
        const start = new Date(dateRange.start!);
        const end = new Date(dateRange.end!);
        return postDate >= start && postDate <= end;
      });
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date || '1970-01-01');
      const dateB = new Date(b.date || '1970-01-01');
      
      if (sortOrder === "newest") {
        return dateB.getTime() - dateA.getTime();
      } else if (sortOrder === "oldest") {
        return dateA.getTime() - dateB.getTime();
      }
      return 0;
    });

    return sorted;
  }, [posts, search, sortOrder, dateRange]);

  const totalPages = Math.ceil(sortedAndFilteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = sortedAndFilteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    setCurrentPage(1);
  };

  const handleSortChange = (order: SortOrder, startDate?: string, endDate?: string) => {
    setSortOrder(order);
    if (order === "date-range" && startDate && endDate) {
      setDateRange({ start: startDate, end: endDate });
    } else {
      setDateRange({});
    }
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen relative">
      <AmbientBackground intensity={0.7} />
      <BlogHeader onSearch={handleSearch} />
      <main className="px-6 py-32">
        <section className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="text-eyebrow text-[#9A9A9A] mb-3 block">
              Perspective
            </span>
            <h1 className="text-page-title font-bold text-[#1C1C1C] tracking-tight mb-8">
              Cloud & DevOps
            </h1>
            <BlogFilter onSortChange={handleSortChange} />
          </motion.div>
          <ParallaxSeparator />

          {sortedAndFilteredPosts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="py-24 text-center"
            >
              <p className="text-[#6B6B6B] text-base italic mb-2">
                {search ? `No posts found for "${search}"` : '"Nothing here yet. Still thinking."'}
              </p>
              <p className="text-[#9A9A9A] text-sm">
                Check back soon for new articles.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Featured article on first page */}
              {currentPage === 1 && paginatedPosts.length > 0 && (
                <BlogCard 
                  key={paginatedPosts[0].slug}
                  blog={{
                    slug: paginatedPosts[0].slug,
                    title: paginatedPosts[0].title,
                    description: paginatedPosts[0].description,
                    date: paginatedPosts[0].date
                  }}
                  basePath="/cloud-devops"
                  index={0}
                  featured={true}
                />
              )}
              {/* Regular articles */}
              {(currentPage === 1 ? paginatedPosts.slice(1) : paginatedPosts).map((post, index) => (
                <BlogCard 
                  key={post.slug}
                  blog={{
                    slug: post.slug,
                    title: post.title,
                    description: post.description,
                    date: post.date
                  }}
                  basePath="/cloud-devops"
                  index={currentPage === 1 ? index + 1 : index}
                />
              ))}
            </motion.div>
          )}

          {sortedAndFilteredPosts.length > 0 && totalPages > 1 && (
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
