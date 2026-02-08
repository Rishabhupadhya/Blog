import { getSystemDesignPostBySlug, getRelatedSystemDesignPosts, getAllSystemDesignPosts } from "@/lib/getSystemDesign";
import { getHeadings } from "@/lib/getHeadings";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import AIAssistant from "@/components/AIAssistant";
import SelectionAssistant from "@/components/SelectionAssistant";
import { Metadata } from "next";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getSystemDesignPostBySlug(slug);

    if (!post) {
      return { title: 'Post Not Found' };
    }

    const title = post?.title ?? 'System Design Post';
    const description = post?.description ?? '';

    return {
      title: `${title} | System Design`,
      description,
    };
  } catch (error) {
    console.warn('[System Design generateMetadata] Failed to load metadata:', error);
    return {
      title: 'Post Not Found',
    };
  }
}

export async function generateStaticParams() {
  try {
    const posts = getAllSystemDesignPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('[System Design generateStaticParams] Failed to load posts:', error);
    return [];
  }
}

export default async function SystemDesignDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getSystemDesignPostBySlug(slug);
  } catch {
    return notFound();
  }

  const content = post?.content || '';
  const title = post?.title || '';
  const date = post?.date || '';

  if (!title || !content) {
    return notFound();
  }

  const headings = getHeadings(content);
  const relatedPosts = getRelatedSystemDesignPosts(slug);

  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24">
      <ReadingProgress />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-14 text-black">
        <article className="max-w-[720px] w-full">
          <FadeIn>
            <span className="text-eyebrow text-[#9A9A9A] mb-4 block">
              System Architecture
            </span>
            <h1 className="text-page-title font-bold text-[#1C1C1C] mb-5 leading-tight">
              {title}
            </h1>

            <div className="flex items-center gap-4 text-meta text-[#6B6B6B] mb-12">
              <time>{date}</time>
              <span className="text-[#E8E8E6]">•</span>
              <span>System Design</span>
            </div>

            <div className="h-px w-full bg-[#E8E8E6] mb-14" />

            <div
              className="
                prose
                prose-slate
                max-w-none
                prose-headings:text-[#1C1C1C]
                prose-headings:font-bold
                prose-headings:tracking-tight
                prose-p:text-[#1C1C1C]
                prose-p:leading-[1.75]
                prose-a:text-[#2D2D2D]
                prose-a:underline
                prose-a:underline-offset-4
                prose-a:decoration-[#E8E8E6]
                prose-a:hover:decoration-[#1C1C1C]
                prose-strong:text-[#1C1C1C]
                prose-code:text-[#1C1C1C]
                prose-code:bg-[#FAFAF9]
                prose-code:px-1.5
                prose-code:py-0.5
                prose-code:rounded
                prose-code:border
                prose-code:border-[#E8E8E6]
                prose-code:before:content-none
                prose-code:after:content-none
                prose-pre:bg-[#FFFFFF]
                prose-pre:border
                prose-pre:border-[#E8E8E6]
                prose-pre:rounded-sm
                prose-pre:p-0
                prose-img:rounded-sm
                prose-img:border
                prose-img:border-[#E8E8E6]
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

          {relatedPosts.length > 0 && (
            <ScrollReveal preset="fade" delay={0.2}>
              <section className="mt-32 border-t border-[#E8E8E6] pt-16">
                <h2 className="text-section-header font-bold text-[#1C1C1C] mb-10">
                  Continue Reading
                </h2>

                <div className="grid gap-10">
                  {relatedPosts.map((relatedPost, index) => (
                    <ScrollReveal key={relatedPost.slug} preset="slide" direction="up" delay={index * 0.1}>
                      <Link
                        href={`/system-design/${relatedPost.slug}`}
                        className="group block"
                      >
                        <span className="text-eyebrow text-[#9A9A9A] mb-2 block">
                          {'date' in relatedPost ? (relatedPost as any).date : ''}
                        </span>
                        <h3 className="text-lg font-bold text-[#1C1C1C] relative inline-block">
                          {'title' in relatedPost ? (relatedPost as any).title : 'Untitled'}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#1C1C1C] transition-all duration-200 group-hover:w-full" />
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
      <AIAssistant articleContent={content} />
      <SelectionAssistant articleContent={content} />
    </main>
  );
}
