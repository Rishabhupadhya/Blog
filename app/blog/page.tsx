import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/pagination";
import { getAllBlogs } from "@/lib/getBlogs";

const BLOGS_PER_PAGE = 2; // Set to 2 to show pagination (will have 2 pages with 4 blogs)

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const allBlogs = getAllBlogs();
  
  // Map blogs to include all required properties
  const blogs = allBlogs.map((blog: any) => ({
    slug: blog.slug,
    title: blog.title || "Untitled",
    description: blog.description || "No description available.",
    date: blog.date || "Unknown date"
  }));
  
  const currentPage = Number(params.page) || 1;

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = blogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  // Debug info
  console.log({
    totalBlogs: blogs.length,
    blogsPerPage: BLOGS_PER_PAGE,
    totalPages,
    currentPage
  });

  return (
    <main className="min-h-screen px-8 py-28 bg-gradient-to-b from-black via-gray-900 to-black">
      <section className="max-w-7xl mx-auto">

        {/* DEBUG INFO */}
        <div className="mb-4 p-4 bg-yellow-500 text-black text-sm rounded">
          <p>Total Blogs: {blogs.length}</p>
          <p>Blogs Per Page: {BLOGS_PER_PAGE}</p>
          <p>Total Pages: {totalPages}</p>
          <p>Current Page: {currentPage}</p>
        </div>

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14 text-center">
          Tech Blog
        </h1>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* PAGINATION (above footer) */}
        <div className="mt-20 flex justify-center items-center gap-4 bg-red-500 p-8">
          <p className="text-white">Pagination Here:</p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>

      </section>
    </main>
  );
}
