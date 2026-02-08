import { getBlogBySlug, getAllBlogs } from "@/lib/getBlogs";
import { getHeadings } from "@/lib/getHeadings";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import AIAssistant from "@/components/AIAssistant";
import { Metadata } from "next";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

/* ================================
   Related Blogs Helper
================================ */
function getRelatedBlogs(currentSlug: string, limit = 3) {
  return getAllBlogs()
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);
    const title = (blog as any).title || 'Blog Post';
    const description = (blog as any).description || '';

    return {
      title: `${title} | Blog`,
      description,
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export async function generateStaticParams() {
  try {
    const blogs = getAllBlogs();
    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.warn('[Blog generateStaticParams] Failed to load posts:', error);
    return [];
  }
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
  const content = blog?.content || '';
  const title = blog?.title || '';
  const date = blog?.date || '';

  if (!title || !content) {
    return notFound();
  }

  // Extract headings for table of contents
  const headings = getHeadings(content);

  // Get related blogs
  const relatedBlogs = getRelatedBlogs(slug);

  return (
    <main className="min-h-screen bg-[#F9F9F8] pt-32 pb-24">
      <ReadingProgress />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 text-black">
        <article className="max-w-[720px] w-full">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-widest text-[#555555] mb-4 block">
              Perspective
            </span>
            <h1 className="text-EDITORIAL-TITLE font-bold text-[#1A1A1A] mb-4 leading-tight text-4xl md:text-5xl">
              {title}
            </h1>

            <div className="flex items-center gap-4 text-xs font-medium text-[#555555] mb-12">
              <time>{date}</time>
            </div>

            <div className="h-px w-full bg-[#E5E5E1] mb-12" />

            <div
              className="
                prose
                prose-slate
                max-w-none
                prose-headings:text-[#1A1A1A]
                prose-headings:font-bold
                prose-headings:tracking-tight
                prose-p:text-[#1A1A1A]
                prose-p:leading-[1.75]
                prose-a:text-[#334155]
                prose-a:underline
                prose-a:underline-offset-4
                prose-strong:text-[#1A1A1A]
                prose-code:text-[#334155]
                prose-code:bg-[#334155]/5
                prose-code:px-1.5
                prose-code:py-0.5
                prose-code:rounded
                prose-code:before:content-none
                prose-code:after:content-none
                prose-pre:bg-[#FFFFFF]
                prose-pre:border
                prose-pre:border-[#E5E5E1]
                prose-pre:rounded-sm
                prose-pre:p-0
                prose-img:rounded-md
                prose-img:shadow-sm
              "
            >
              <MDXRemote
                source={content}
                components={{
                  h2: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                    return <h2 id={id} className="text-2xl mt-12 mb-6" {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^\w]+/g, "-");
                    return <h3 id={id} className="text-xl mt-8 mb-4" {...props}>{children}</h3>;
                  },
                  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
                }}
              />
            </div>
          </FadeIn>

          {relatedBlogs.length > 0 && (
            <ScrollReveal preset="fade" delay={0.2}>
              <section className="mt-32 border-t border-[#E5E5E1] pt-16">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
                  Continue Reading
                </h2>

                <div className="grid gap-12">
                  {relatedBlogs.map((post, index) => (
                    <ScrollReveal key={post.slug} preset="slide" direction="up" delay={index * 0.1}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#555555] mb-2 block opacity-60">
                          {'date' in post ? (post as any).date : ''}
                        </span>
                        <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:underline decoration-[#334155] underline-offset-4 decoration-1 transition-all">
                          {'title' in post ? (post as any).title : 'Untitled'}
                        </h3>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          )}
        </article>

        <aside className="hidden lg:block sticky top-32 h-fit">
          <TableOfContents headings={headings} />
        </aside>
      </div>

      {/* AI Reading Assistant */}
      <AIAssistant />
    </main>
  );
}
