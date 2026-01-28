import { getBlogBySlug, getAllBlogs } from "@/lib/getBlogs";
import { getHeadings } from "@/lib/getHeadings";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";

/* ================================
   Related Blogs Helper
================================ */
function getRelatedBlogs(currentSlug: string, limit = 3) {
  return getAllBlogs()
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let blog;
  try {
    blog = getBlogBySlug(slug);
  } catch {
    return notFound();
  }

  // blog is { slug, content, ...frontmatter }
  const content = blog.content;
  const title = (blog as any).title || '';
  const date = (blog as any).date || '';

  if (!title) return notFound();

  // Extract headings for table of contents
  const headings = getHeadings(content);

  // Get related blogs
  const relatedBlogs = getRelatedBlogs(slug);

  return (
    <main className="min-h-screen px-6 py-28 bg-gradient-to-b from-black via-black to-cyan-950">
      
      {/* ===== TABLE OF CONTENTS ===== */}
      <TableOfContents headings={headings} />

      <article className="max-w-4xl mx-auto">

          {/* ===== TITLE ===== */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            {title}
          </h1>

          {/* ===== META ===== */}
          <p className="text-sm text-gray-400 mb-10">
            {date}
          </p>

          {/* ===== DIVIDER ===== */}
          <div className="h-[2px] w-24 bg-cyan-400 mb-12" />

          {/* ===== BLOG CONTENT ===== */}
          <div
            className="
              prose prose-invert
              prose-headings:text-cyan-400
              prose-headings:scroll-mt-20
              prose-a:text-cyan-400
              prose-strong:text-white
              prose-code:text-cyan-300
              prose-pre:bg-black/40
              prose-pre:border
              prose-pre:border-white/10
              prose-pre:rounded-xl
              max-w-none
            "
          >
            <MDXRemote 
              source={content}
              components={{
                h2: ({ children, ...props }) => {
                  const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({ children, ...props }) => {
                  const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                  return <h3 id={id} {...props}>{children}</h3>;
                },
              }}
            />
          </div>

          {/* ===== RELATED POSTS ===== */}
          {relatedBlogs.length > 0 && (
            <section className="mt-32">
              <h2 className="text-2xl font-bold text-cyan-400 mb-8">
                Related Posts
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedBlogs.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="
                      group
                      block
                      p-6
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/40
                      transition-all
                      hover:-translate-y-1
                      hover:border-cyan-400
                      hover:shadow-[0_12px_50px_-15px_rgba(34,211,238,0.45)]
                    "
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                      {'title' in post ? (post as any).title : 'Untitled'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {'date' in post ? (post as any).date : ''}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

        </article>
    </main>
  );
}
