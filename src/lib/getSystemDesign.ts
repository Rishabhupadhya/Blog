import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";
import { getRelatedPosts } from "./getRelatedPosts";

export function getAllSystemDesignPosts(): Post[] {
  if (typeof window !== "undefined") {
    throw new Error("getAllSystemDesignPosts can only be run on the server");
  }
  const postsDir = path.join(process.cwd(), "src/content/system-design");
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(postsDir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);
    return {
      slug,
      ...data,
      content,
    };
  });
  // Sort by date (newest first)
  return posts.sort((a: any, b: any) => {
    const dateA = new Date(a.date || '1970-01-01');
    const dateB = new Date(b.date || '1970-01-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getSystemDesignPostBySlug(slug: string): Post {
  if (typeof window !== "undefined") {
    throw new Error("getSystemDesignPostBySlug can only be run on the server");
  }
  const filePath = path.join(process.cwd(), "src/content/system-design", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) throw new Error("Post not found");
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    ...data,
    content,
  };
}

export function getRelatedSystemDesignPosts(currentSlug: string, limit = 3): Post[] {
  const allPosts = getAllSystemDesignPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);
  
  if (!currentPost) {
    // Fallback: just filter out current slug and return first N posts
    return allPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
  }
  
  return getRelatedPosts(allPosts, currentPost, limit);
}
