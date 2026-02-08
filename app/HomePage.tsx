"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "System Design",
    description: "Architecting scalable, resilient, and high-performance distributed systems at scale.",
    href: "/system-design",
    count: 4,
  },
  {
    title: "Backend Engineering",
    description: "Deep technical dives into APIs, databases, and JVM performance optimization.",
    href: "/backend-engineering",
    count: 3,
  },
  {
    title: "Cloud & DevOps",
    description: "Modern infrastructure, container orchestration, and automated delivery pipelines.",
    href: "/cloud-devops",
    count: 3,
  },
  {
    title: "AI & ML",
    description: "Practical applications of machine learning and large language models in production.",
    href: "/ai-ml",
    count: 3,
  },
  {
    title: "Technology",
    description: "Editorial perspectives on software, hardware, and the future of tech.",
    href: "/technology",
    count: 4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-eyebrow text-[#9A9A9A] mb-5 block">
            Engineering Journal
          </span>
          <h1 className="text-page-title font-bold text-[#1C1C1C] mb-8 leading-[1.12] tracking-tight text-4xl md:text-5xl">
            Thoughtful perspectives on <br className="hidden md:block" />
            <span className="text-[#6B6B6B]">modern software architecture.</span>
          </h1>
          <p className="text-base text-[#6B6B6B] leading-[1.7] max-w-2xl mb-10">
            A curated collection of deep dives into system design, backend engineering, and the evolving landscape of cloud infrastructure. Created for developers, by developers.
          </p>
          <div className="flex gap-4">
            <Link
              href="/technology"
              className="px-6 py-3 bg-[#1C1C1C] text-white text-sm font-medium rounded-sm hover:bg-[#2D2D2D] transition-colors duration-200"
            >
              Start Reading
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Categories / Sections */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#E8E8E6] pt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex justify-between items-end mb-14"
          >
            <div>
              <h2 className="text-section-header font-bold text-[#1C1C1C]">Curated Categories</h2>
              <p className="text-[#6B6B6B] text-sm mt-2">Focused deep-dives into specific domains.</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          >
            {categories.map((category) => (
              <motion.div key={category.href} variants={itemVariants} className="group">
                <Link href={category.href} className="block">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-meta font-mono text-[#9A9A9A]">0{categories.indexOf(category) + 1}</span>
                    <span className="text-eyebrow text-[#6B6B6B] border border-[#E8E8E6] px-2 py-1 rounded-sm group-hover:border-[#1C1C1C] group-hover:text-[#1C1C1C] transition-all duration-200">
                      {category.count} Articles
                    </span>
                  </div>
                  <h3 className="text-section-header font-bold text-[#1C1C1C] mb-3 relative inline-block">
                    {category.title}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#1C1C1C] transition-all duration-200 group-hover:w-full" />
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">
                    {category.description}
                  </p>
                  <div className="flex items-center text-eyebrow text-[#1C1C1C]">
                    <span>Explore Section</span>
                    <svg
                      className="w-3 h-3 ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-5xl mx-auto px-6 mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-[#E8E8E6] p-14 text-center rounded-sm"
        >
          <h2 className="text-section-header font-bold text-[#1C1C1C] mb-3">Join the conversation.</h2>
          <p className="text-sm text-[#6B6B6B] mb-8 max-w-sm mx-auto leading-relaxed">
            Stay updated with the latest in backend engineering and system design.
          </p>
          <Link
            href="mailto:rishabh.292002@gmail.com"
            className="inline-block px-8 py-3 border border-[#1C1C1C] text-[#1C1C1C] text-eyebrow hover:bg-[#1C1C1C] hover:text-white transition-colors duration-200"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
