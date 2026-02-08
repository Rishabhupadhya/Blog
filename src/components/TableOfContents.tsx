"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="w-full"
      aria-label="Table of contents"
    >
      <h3 className="text-eyebrow text-[#1C1C1C] mb-8 pb-4 border-b border-[#E8E8E6]">
        On This Page
      </h3>
      <ul className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 scrollbar-subtle scroll-py-4">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              className={`
                text-[13px] block transition-all duration-300 leading-relaxed relative
                ${activeId === heading.id
                  ? "text-[#1C1C1C] font-bold translate-x-1"
                  : "text-[#9A9A9A] hover:text-[#1C1C1C]"
                }
              `}
            >
              {activeId === heading.id && (
                <motion.span
                  layoutId="toc-indicator"
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#1C1C1C]"
                />
              )}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
