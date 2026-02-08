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
      className="fixed w-56"
      aria-label="Table of contents"
    >
      <h3 className="text-eyebrow text-[#9A9A9A] mb-6">
        On This Page
      </h3>
      <ul className="space-y-3 max-h-[65vh] overflow-y-auto pr-4 scrollbar-subtle">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              className={`
                text-[13px] block transition-all duration-200 leading-relaxed
                ${activeId === heading.id
                  ? "text-[#1C1C1C] font-medium"
                  : "text-[#6B6B6B] hover:text-[#1C1C1C]"
                }
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
