"use client";

import { ReactNode } from "react";

export default function TiltCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        transform-gpu
        transition-transform
        duration-300
        hover:-translate-y-3
        hover:rotate-[0.6deg]
        hover:scale-[1.02]
      "
    >
      {children}
    </div>
  );
}
