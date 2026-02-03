import { getAllBlogs } from "./getBlogs";
import { getRelatedPosts } from "./getRelatedPosts";

export function getRelatedBlogs(
  currentSlug: string,
  limit: number = 3
) {
  const allBlogs = getAllBlogs();
  const currentBlog = allBlogs.find((blog) => blog.slug === currentSlug);
  
  if (!currentBlog) {
    return allBlogs.filter((blog) => blog.slug !== currentSlug).slice(0, limit);
  }

  return getRelatedPosts(allBlogs, currentBlog, limit);
}
