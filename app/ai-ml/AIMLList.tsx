"use client";
import { useState, useEffect, useMemo } from "react";
import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";
import Pagination from "@/components/pagination";
import BlogFilter, { SortOrder } from "@/components/BlogFilter";

const POSTS_PER_PAGE = 8;

export default function AIMLList({ posts = [] }: { posts?: any[] }) {
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
        const postDate = new Date(post.date);
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
    <>
      <BlogHeader onSearch={handleSearch} />
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <section className="max-w-7xl mx-auto w-full overflow-hidden">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-12 sm:mb-16 break-words">
            AI & ML
          </h1>
          <BlogFilter onSortChange={handleSortChange} />
          {sortedAndFilteredPosts.length === 0 ? (
            <p className="text-center text-gray-400">
              {search ? `No posts found for "${search}"` : "No posts available yet"}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {paginatedPosts.map((post) => (
                  <BlogCard 
                    key={post.slug} 
                    blog={{
                      slug: post.slug,
                      title: post.title,
                      description: post.description,
                      date: post.date
                    }}
                    basePath="/ai-ml"
                  />
                ))}
              </div>

              {sortedAndFilteredPosts.length > 0 && (
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
