"use client";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import BlogHeader from "@/components/BlogHeader";

export default function BlogList({ blogs = [] }: { blogs?: any[] }) {
  const [search, setSearch] = useState("");
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <BlogHeader onSearch={setSearch} />
      <main className="min-h-screen px-8 py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-16">
            Tech Blog
          </h1>
          {filteredBlogs.length === 0 ? (
            <p className="text-center text-gray-400">
              No blogs found for "{search}"
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
