import { getAIMLPostBySlug, getRelatedAIMLPosts, getAllAIMLPosts } from "@/lib/getAIML";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getAIMLPostBySlug(slug);

    if (!post) {
      return { title: 'Post Not Found' };
    }

    const title = post?.title ?? 'AI & ML Post';
    const description = post?.description ?? '';

    return {
      title: `${title} | AI & ML`,
      description,
    };
  } catch (error) {
    console.warn('[AI/ML generateMetadata] Failed to load metadata:', error);
    return {
      title: 'Post Not Found',
    };
  }
}

export async function generateStaticParams() {
  try {
    const posts = getAllAIMLPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('[AI/ML generateStaticParams] Failed to load posts:', error);
    return [];
  }
}

export default async function AIMLDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getAIMLPostBySlug(slug);
  } catch {
    return notFound();
  }

  const content = post?.content || '';
  const title = (post as any)?.title || '';
  const date = (post as any)?.date || '';

  if (!title || !content) {
    return notFound();
  }

  const headings = getHeadings(content);
  const relatedPosts = getRelatedAIMLPosts(slug);

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
              <span className="opacity-20">•</span>
              <span>AI & ML</span>
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

          {relatedPosts.length > 0 && (
            <ScrollReveal preset="fade" delay={0.2}>
              <section className="mt-32 border-t border-[#E5E5E1] pt-16">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-10">
                  Continue Reading
                </h2>

                <div className="grid gap-12">
                  {relatedPosts.map((relatedPost, index) => (
                    <ScrollReveal key={relatedPost.slug} preset="slide" direction="up" delay={index * 0.1}>
                      <Link
                        href={`/ai-ml/${relatedPost.slug}`}
                        className="group block"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#555555] mb-2 block opacity-60">
                          {'date' in relatedPost ? (relatedPost as any).date : ''}
                        </span>
                        <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:underline decoration-[#334155] underline-offset-4 decoration-1 transition-all">
                          {'title' in relatedPost ? (relatedPost as any).title : 'Untitled'}
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
