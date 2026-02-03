import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Post } from "@/types/post";
import { getRelatedPosts } from "./getRelatedPosts";

// Export blog utility functions only
export function getAllBlogs(): Post[] {
  // Only run on the server
  if (typeof window !== "undefined") {
    throw new Error("getAllBlogs can only be run on the server");
  }
  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const files = fs.readdirSync(blogsDir).filter((file) => file.endsWith(".mdx"));
  const blogs = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(blogsDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    return {
      slug,
      ...data,
      content,
    };
  });
  // Sort by date (newest first)
  return blogs.sort((a: any, b: any) => {
    const dateA = new Date(a.date || '1970-01-01');
    const dateB = new Date(b.date || '1970-01-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBlogBySlug(slug: string): Post {
  // Only run on the server
  if (typeof window !== "undefined") {
    throw new Error("getBlogBySlug can only be run on the server");
  }
  const filePath = path.join(process.cwd(), "src/content/blogs", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) throw new Error("Blog not found");
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    ...data,
    content,
  };
}

/* ================================
   Related Blogs Helper
================================ */
function getRelatedBlogs(currentSlug: string, limit = 3): Post[] {
  const allBlogs = getAllBlogs();
  const currentBlog = allBlogs.find((blog) => blog.slug === currentSlug);
  
  if (!currentBlog) {
    return allBlogs.filter((blog) => blog.slug !== currentSlug).slice(0, limit);
  }
  
  return getRelatedPosts(allBlogs, currentBlog, limit);
}
