"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectionAssistant({ articleContent }: { articleContent?: string }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [selectedText, setSelectedText] = useState("");
    const [explanation, setExplanation] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSelection = (e: any) => {
            // Give the browser a moment to update the selection
            setTimeout(() => {
                const selection = window.getSelection();
                const text = selection?.toString().trim();

                // If clicking inside the assistant, don't re-trigger selection logic
                if (containerRef.current?.contains(e.target)) return;

                if (text && text.length > 5 && text.length < 500) {
                    const range = selection?.getRangeAt(0);
                    const rect = range?.getBoundingClientRect();

                    if (rect) {
                        let x = rect.left + rect.width / 2;
                        let y = rect.top - 15;

                        // Mobile-specific adjustments
                        const isMobile = window.innerWidth < 768;
                        const panelWidth = isMobile ? Math.min(320, window.innerWidth - 32) : 320;

                        // Safety margins
                        const margin = 16;
                        const halfWidth = panelWidth / 2;

                        // Clamp X so the panel (when translated -50%) stays on screen
                        x = Math.max(halfWidth + margin, Math.min(window.innerWidth - halfWidth - margin, x));

                        if (y < 120) { // If too high, show below
                            y = rect.bottom + 45;
                        }

                        setPosition({ x, y });
                        setSelectedText(text);
                        setIsVisible(true);
                        setExplanation(null); // Reset explanation for new selection
                    }
                } else {
                    if (!explanation && !isLoading) {
                        setIsVisible(false);
                    }
                }
            }, 50);
        };

        const handleDismiss = (e: MouseEvent | TouchEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                // If we have an explanation, maybe don't close immediately on selection change
                // but if they click outside, definitely close.
                setIsVisible(false);
                setExplanation(null);
            }
        };

        document.addEventListener("mouseup", handleSelection);
        document.addEventListener("touchend", handleSelection);
        document.addEventListener("mousedown", handleDismiss as any);
        document.addEventListener("touchstart", handleDismiss as any);
        return () => {
            document.removeEventListener("mouseup", handleSelection);
            document.removeEventListener("touchend", handleSelection);
            document.removeEventListener("mousedown", handleDismiss as any);
            document.removeEventListener("touchstart", handleDismiss as any);
        };
    }, [explanation, isLoading]);

    const handleExplain = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "explain",
                    text: selectedText,
                    context: articleContent?.slice(0, 1500),
                }),
            });
            const data = await response.json();
            if (data.output) {
                setExplanation(data.output);
            } else {
                setExplanation("Unable to generate explanation.");
            }
        } catch (error) {
            console.error("Explanation failed:", error);
            setExplanation("Connection error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div ref={containerRef}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10, x: '-50%' }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, scale: 0.95, y: 10, x: '-50%' }}
                        style={{
                            left: position.x,
                            top: position.y,
                        }}
                        className="fixed z-[var(--layer-overlay)] pointer-events-auto"
                    >
                        {!explanation ? (
                            <button
                                onClick={handleExplain}
                                disabled={isLoading}
                                className="bg-[#1C1C1C] text-white px-4 py-2 rounded-sm shadow-2xl flex items-center gap-2 hover:bg-[#2D2D2D] transition-all active:scale-95 disabled:opacity-80"
                            >
                                {isLoading ? (
                                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                    </svg>
                                )}
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    {isLoading ? "Analyzing..." : "Explain"}
                                </span>
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white border border-[#E8E8E6] p-5 rounded-sm shadow-2xl w-[85vw] max-w-[320px] relative"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]" />
                                        <span className="text-eyebrow text-[#1C1C1C]">AI Insight</span>
                                    </div>
                                    <button
                                        onClick={() => { setIsVisible(false); setExplanation(null); }}
                                        className="text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-[14px] text-[#404040] leading-relaxed font-serif italic border-l-2 border-[#F1F1EF] pl-4">
                                    {explanation}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
