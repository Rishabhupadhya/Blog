"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface AIAssistantProps {
  children?: ReactNode;
  articleContent?: string;
}

/**
 * AI Assistant - A quiet, contextual helper
 * Opt-in, non-intrusive AI features for enhanced reading
 */
export default function AIAssistant({ articleContent }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "explain" | "related">("summary");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleSummarize = async () => {
    if (!articleContent) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "summarize",
          text: articleContent,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Server responded with ${response.status}`);
      }

      if (data.output) {
        setSummary(data.output);
      } else {
        setSummary("I encountered an issue while summarizing. Please try again later.");
      }
    } catch (error: any) {
      console.error("Summarization failed:", error);
      setSummary(`Editorial Assistant: ${error.message || "Could not connect."}`);
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: "summary" as const, label: "Summary", icon: SummaryIcon },
    { id: "explain" as const, label: "Explain", icon: ExplainIcon },
    { id: "related" as const, label: "Related", icon: RelatedIcon },
  ];

  const animationProps = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 8, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 4, scale: 0.98 },
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[var(--layer-overlay)]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...(animationProps as any)}
            className="absolute bottom-16 right-0 w-[calc(100vw-48px)] md:w-80 bg-white border border-[#E8E8E6] rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[#E8E8E6] bg-[#FAFAF9]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C] animate-pulse" />
                <h3 className="text-eyebrow text-[#1C1C1C]">Editorial Assistant</h3>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E8E8E6] bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === tab.id
                    ? "text-[#1C1C1C] border-b border-[#1C1C1C]"
                    : "text-[#9A9A9A] hover:text-[#1C1C1C]"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 min-h-[160px] bg-white">
              <AnimatePresence mode="wait">
                {activeTab === "summary" && (
                  <motion.div key="summary" {...(animationProps as any)}>
                    {isLoading ? (
                      <div className="space-y-3">
                        <div className="h-2 bg-[#F1F1EF] rounded w-full ai-shimmer" />
                        <div className="h-2 bg-[#F1F1EF] rounded w-5/6 ai-shimmer" />
                        <div className="h-2 bg-[#F1F1EF] rounded w-4/6 ai-shimmer" />
                      </div>
                    ) : summary ? (
                      <p className="text-[13px] text-[#404040] leading-relaxed font-serif italic">
                        {summary}
                      </p>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-[13px] text-[#6B6B6B] mb-5">
                          Get a contextual summary to accelerate your understanding.
                        </p>
                        <button
                          onClick={handleSummarize}
                          className="w-full py-2.5 border border-[#1C1C1C] text-[#1C1C1C] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1C1C1C] hover:text-white transition-all duration-200"
                        >
                          Summarize Article
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === "explain" && (
                  <motion.div key="explain" {...(animationProps as any)} className="text-center py-4">
                    <p className="text-[13px] text-[#6B6B6B] mb-2 leading-relaxed">
                      Highlight any section of the text for a deep-dive explanation.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#9A9A9A] uppercase tracking-widest">
                      <span className="w-1 h-1 rounded-full bg-[#E8E8E6]" />
                      Contextual Mode Active
                    </div>
                  </motion.div>
                )}

                {activeTab === "related" && (
                  <motion.div key="related" {...(animationProps as any)}>
                    <p className="text-eyebrow text-[#9A9A9A] mb-4">Deep Dives</p>
                    <ul className="space-y-4">
                      {["System Design Fundamentals", "Scaling Microservices", "Performance Patterns"].map(
                        (title) => (
                          <li key={title} className="border-b border-dashed border-[#E8E8E6] pb-3 last:border-0 last:pb-0">
                            <a
                              href="#"
                              className="text-[13px] text-[#1C1C1C] hover:text-[#6B6B6B] transition-colors duration-150 block"
                            >
                              {title}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#1C1C1C] text-white rounded-sm shadow-2xl flex items-center justify-center hover:bg-[#2D2D2D] transition-colors duration-200 relative overflow-hidden group"
        whileHover={shouldReduceMotion ? {} : { y: -2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1C1C] to-[#404040] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

// Icon components
function SummaryIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  );
}

function ExplainIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function RelatedIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}

/**
 * Inline AI Explainer - For complex sections
 * Shows "Explain this" option on hover
 */
export function InlineExplainer({
  children,
  explanation
}: {
  children: ReactNode;
  explanation?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative group">
      {children}

      {/* Explain button - appears on hover */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#9A9A9A] hover:text-[#1C1C1C]"
        aria-label="Explain this section"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </button>

      {/* Explanation panel */}
      <AnimatePresence>
        {isExpanded && explanation && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 p-4 bg-[#FAFAF9] border border-[#E8E8E6] rounded text-sm text-[#6B6B6B] leading-relaxed"
          >
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-[#9A9A9A] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <p>{explanation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
