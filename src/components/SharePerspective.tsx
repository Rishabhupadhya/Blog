"use client";

import { useState, useEffect } from "react";

interface SharePerspectiveProps {
    title: string;
}

export default function SharePerspective({ title }: SharePerspectiveProps) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const shareLinks = [
        {
            name: 'Twitter',
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
            name: 'LinkedIn',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
        {
            name: 'Instagram',
            href: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing via web
        },
        {
            name: 'Copy',
            onClick: () => {
                navigator.clipboard.writeText(url);
                alert("Link copied to clipboard!");
            }
        }
    ];

    return (
        <div className="pt-8 border-t border-[#E8E8E6] mt-auto">
            <h4 className="text-eyebrow text-[#1C1C1C] mb-4">Share Perspective</h4>
            <div className="flex flex-wrap gap-4">
                {shareLinks.map((platform) => (
                    platform.onClick ? (
                        <button
                            key={platform.name}
                            onClick={platform.onClick}
                            className="text-meta text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors uppercase tracking-widest text-[10px]"
                        >
                            {platform.name}
                        </button>
                    ) : (
                        <a
                            key={platform.name}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-meta text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors uppercase tracking-widest text-[10px]"
                        >
                            {platform.name}
                        </a>
                    )
                ))}
            </div>
        </div>
    );
}
