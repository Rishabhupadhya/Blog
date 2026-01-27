"use client";

import { useEffect, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop TOC - Fixed Sidebar */}
      <nav className="hidden lg:block fixed top-32 right-8 w-64 z-10">
        <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 shadow-lg">
          <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
            On This Page
          </h3>
          <ul className="space-y-2 max-h-[60vh] overflow-y-auto">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "ml-4" : ""}
              >
                <a
                  href={`#${heading.id}`}
                  className={`
                    text-sm block transition-colors
                    ${
                      activeId === heading.id
                        ? "text-cyan-400 font-medium"
                        : "text-gray-400 hover:text-cyan-300"
                    }
                  `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile TOC - Collapsible Button */}
      <div className="lg:hidden fixed bottom-8 right-8 z-50">
        {isOpen && (
          <div className="mb-4 bg-black/90 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 shadow-2xl max-w-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                On This Page
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-2 max-h-[50vh] overflow-y-auto">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={heading.level === 3 ? "ml-4" : ""}
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-sm block transition-colors
                      ${
                        activeId === heading.id
                          ? "text-cyan-400 font-medium"
                          : "text-gray-400 hover:text-cyan-300"
                      }
                    `}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-cyan-400 text-black font-bold shadow-lg hover:bg-cyan-300 transition flex items-center justify-center"
          aria-label="Toggle Table of Contents"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </>
  );
}
