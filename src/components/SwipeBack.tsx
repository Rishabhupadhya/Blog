"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SwipeBack({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 120 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) {
          router.back();
        }
      }}
    >
      {children}
    </motion.div>
  );
}
