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
    setIsLoading(true);
    // Simulate AI processing - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSummary(
      "This article explores the core concepts and implementation details, providing practical insights for developers. Key takeaways include architectural patterns, performance considerations, and real-world applications."
    );
    setIsLoading(false);
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
    <div className="fixed bottom-6 right-6 z-40">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-assist-button w-12 h-12 bg-[#1C1C1C] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#2D2D2D] transition-colors duration-200"
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              {...animationProps}
              className="w-5 h-5"
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
              {...animationProps}
              className="w-5 h-5"
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

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...animationProps}
            className="absolute bottom-16 right-0 w-80 bg-white border border-[#E8E8E6] rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#E8E8E6] bg-[#FAFAF9]">
              <h3 className="text-sm font-semibold text-[#1C1C1C]">AI Reading Assistant</h3>
              <p className="text-xs text-[#9A9A9A] mt-0.5">Enhance your understanding</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E8E8E6]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-3 py-2.5 text-xs font-medium transition-colors duration-150 flex items-center justify-center gap-1.5 ${
                    activeTab === tab.id
                      ? "text-[#1C1C1C] border-b-2 border-[#1C1C1C] -mb-px"
                      : "text-[#6B6B6B] hover:text-[#1C1C1C]"
                  }`}
                >
                  <tab.icon />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 min-h-[140px]">
              <AnimatePresence mode="wait">
                {activeTab === "summary" && (
                  <motion.div key="summary" {...animationProps}>
                    {isLoading ? (
                      <div className="space-y-2">
                        <div className="h-3 bg-[#E8E8E6] rounded ai-shimmer" />
                        <div className="h-3 bg-[#E8E8E6] rounded w-4/5 ai-shimmer" />
                        <div className="h-3 bg-[#E8E8E6] rounded w-3/5 ai-shimmer" />
                      </div>
                    ) : summary ? (
                      <p className="text-sm text-[#1C1C1C] leading-relaxed">{summary}</p>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-[#6B6B6B] mb-3">
                          Get a quick summary of this article
                        </p>
                        <button
                          onClick={handleSummarize}
                          className="px-4 py-2 bg-[#1C1C1C] text-white text-xs font-medium rounded hover:bg-[#2D2D2D] transition-colors duration-150"
                        >
                          Summarize Article
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === "explain" && (
                  <motion.div key="explain" {...animationProps} className="text-center py-4">
                    <p className="text-sm text-[#6B6B6B] mb-2">
                      Select any text in the article to get an explanation
                    </p>
                    <p className="text-xs text-[#9A9A9A]">
                      Highlight complex concepts for AI clarification
                    </p>
                  </motion.div>
                )}

                {activeTab === "related" && (
                  <motion.div key="related" {...animationProps}>
                    <p className="text-xs text-[#9A9A9A] mb-3">Related articles you might enjoy:</p>
                    <ul className="space-y-2">
                      {["System Design Fundamentals", "Scaling Microservices", "Performance Patterns"].map(
                        (title) => (
                          <li key={title}>
                            <a
                              href="#"
                              className="text-sm text-[#1C1C1C] hover:text-[#6B6B6B] transition-colors duration-150 block py-1"
                            >
                              {title} →
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
