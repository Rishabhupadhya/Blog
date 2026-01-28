"use client";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";
import Pagination from "@/components/pagination";

const POSTS_PER_PAGE = 8;

export default function CloudDevOpsList({ posts = [] }: { posts?: any[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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
            Cloud & DevOps
          </h1>
          {filteredPosts.length === 0 ? (
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
                    basePath="/cloud-devops"
                  />
                ))}
              </div>

              {filteredPosts.length > 0 && (
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
