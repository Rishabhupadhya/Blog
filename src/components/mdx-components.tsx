import { useState } from "react";

export const mdxComponents = {
  pre: ({ children }: any) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
      await navigator.clipboard.writeText(
        children.props.children
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    return (
      <div className="relative">
        <button
          onClick={copy}
          className="absolute top-3 right-3 text-xs text-cyan-400 hover:underline"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre>{children}</pre>
      </div>
    );
  },
};
