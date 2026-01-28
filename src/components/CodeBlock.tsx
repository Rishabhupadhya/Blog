"use client";

import { useState } from "react";

export default function CodeBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  // Extract text content from the code element
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";
    
    // Handle React elements
    if (typeof node === "object" && "props" in node) {
      const props = (node as any).props;
      if (props.children) {
        return getTextContent(props.children);
      }
    }
    
    // Handle arrays
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

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="
          absolute top-3 right-3
          text-xs px-2 py-1 rounded
          bg-black/60 text-cyan-400
          opacity-0 group-hover:opacity-100
          transition
          z-10
        "
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre className="overflow-x-auto">{children}</pre>
    </div>
  );
}
