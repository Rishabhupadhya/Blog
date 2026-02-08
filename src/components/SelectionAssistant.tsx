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
        const handleSelection = () => {
            setTimeout(() => {
                const selection = window.getSelection();
                const text = selection?.toString().trim();

                if (text && text.length > 5 && text.length < 500) {
                    const range = selection?.getRangeAt(0);
                    const rect = range?.getBoundingClientRect();

                    if (rect) {
                        // Position above the selection
                        // 1. Calculate center X
                        let x = rect.left + rect.width / 2;
                        // 2. Calculate top Y (subtract some space for the button)
                        let y = rect.top - 45;

                        // 3. Clamp X to stay within viewport (with 20px padding)
                        // Responsive clamping for X
                        const minX = window.innerWidth < 480 ? 80 : 160;
                        x = Math.max(minX, Math.min(window.innerWidth - minX, x));

                        // 4. Handle top collision (if too close to top, show below selection instead)
                        if (y < 80) {
                            y = rect.bottom + 10;
                        }

                        setPosition({ x, y });
                        setSelectedText(text);
                        setIsVisible(true);
                    }
                } else {
                    if (!explanation) {
                        setIsVisible(false);
                    }
                }
            }, 0);
        };

        const handleDismiss = (e: MouseEvent | TouchEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
    }, [explanation]);

    const handleExplain = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                body: JSON.stringify({
                    action: "explain",
                    text: selectedText,
                    context: articleContent?.slice(0, 2000), // Limit context size
                }),
            });
            const data = await response.json();
            if (data.output) {
                setExplanation(data.output);
            } else {
                setExplanation("I couldn't generate an explanation right now.");
            }
        } catch (error) {
            console.error("Explanation failed:", error);
            setExplanation("Could not connect to the editorial assistant.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div ref={containerRef}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        style={{
                            left: position.x,
                            top: position.y,
                            transform: 'translate(-50%, -100%)'
                        }}
                        className="fixed z-[var(--layer-overlay)] pointer-events-auto"
                    >
                        {!explanation ? (
                            <button
                                onClick={handleExplain}
                                className="bg-[#1C1C1C] text-white px-3 py-1.5 rounded-sm shadow-xl flex items-center gap-2 hover:bg-[#2D2D2D] transition-colors"
                                title="Explain this section"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                </svg>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Explain</span>
                            </button>
                        ) : (
                            <motion.div
                                initial={{ width: 40, height: 40 }}
                                animate={{ width: window.innerWidth < 480 ? window.innerWidth - 40 : 320, height: 'auto' }}
                                className="bg-white border border-[#E8E8E6] p-5 rounded-sm shadow-2xl overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]" />
                                    <span className="text-eyebrow text-[#1C1C1C]">AI Explanation</span>
                                </div>
                                <p className="text-[13px] text-[#404040] leading-relaxed font-serif italic">
                                    {explanation}
                                </p>
                                <button
                                    onClick={() => { setIsVisible(false); setExplanation(null); }}
                                    className="mt-4 text-[10px] font-bold text-[#9A9A9A] hover:text-[#1C1C1C] uppercase tracking-widest"
                                >
                                    Dismiss
                                </button>
                            </motion.div>
                        )}

                        {isLoading && (
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-sm">
                                <div className="w-4 h-4 border-2 border-[#1C1C1C] border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
