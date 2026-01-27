import { getAllBlogs } from "./getBlogs";

export function getRelatedBlogs(
  currentSlug: string,
  limit: number = 3
) {
  const blogs = getAllBlogs();

  return blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
}
