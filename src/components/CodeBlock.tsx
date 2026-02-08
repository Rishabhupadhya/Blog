"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  children,
  language,
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  // Extract text content from the code element
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";

    if (typeof node === "object" && "props" in node) {
      const props = (node as any).props;
      if (props.children) {
        return getTextContent(props.children);
      }
    }

    if (Array.isArray(node)) {
      return node.map(getTextContent).join("");
    }

    return "";
  };

  const handleCopy = async () => {
    const textContent = getTextContent(children);
    await navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }
        },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative group my-10"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#FAFAF9] border-t border-x border-[#E8E8E6] rounded-t-sm">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
          </div>
          {filename ? (
            <span className="text-meta text-[#6B6B6B] font-mono">{filename}</span>
          ) : language ? (
            <span className="text-eyebrow text-[#9A9A9A]">{language}</span>
          ) : (
            <span className="text-eyebrow text-[#9A9A9A]">Code</span>
          )}
        </div>
        
        <button
          onClick={handleCopy}
          className="
            text-eyebrow
            text-[#6B6B6B] 
            hover:text-[#1C1C1C]
            transition-colors
            duration-150
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#1C1C1C]
            focus-visible:ring-offset-2
            rounded-sm
            px-2 py-1
            flex items-center gap-1.5
          "
          aria-label={copied ? "Copied to clipboard" : "Copy code"}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="copied"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
                className="text-[#1C1C1C]"
              >
                Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code container */}
      <div className="bg-white border border-[#E8E8E6] rounded-b-sm overflow-hidden">
        <pre className="p-6 text-[14px] font-mono text-[#1C1C1C] overflow-x-auto leading-[1.7] scrollbar-subtle">
          {children}
        </pre>
      </div>

      {/* Subtle glow on hover */}
      <div 
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E6]/20 to-transparent blur-xl" />
      </div>
    </motion.div>
  );
}

/**
 * Inline code styling
 */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-[14px] font-mono text-[#1C1C1C] bg-[#FAFAF9] px-1.5 py-0.5 rounded border border-[#E8E8E6]">
      {children}
    </code>
  );
}
