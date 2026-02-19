import { getCategoryCounts } from "@/lib/getCategoryCounts";
import HomePage from "./HomePage";

// This is now a Server Component that fetches data at build time
export default function Page() {
  // Dynamically count posts from each category
  const counts = getCategoryCounts();

  const categories = [
    {
      title: "Technology",
      description: "Editorial perspectives on software, hardware, and the future of tech.",
      href: "/technology",
      count: counts.technology,
    },
    {
      title: "System Design",
      description: "Architecting scalable, resilient, and high-performance distributed systems at scale.",
      href: "/system-design",
      count: counts.systemDesign,
    },
    {
      title: "Backend Engineering",
      description: "Deep technical dives into APIs, databases, and JVM performance optimization.",
      href: "/backend-engineering",
      count: counts.backendEngineering,
    },
    {
      title: "Cloud & DevOps",
      description: "Modern infrastructure, container orchestration, and automated delivery pipelines.",
      href: "/cloud-devops",
      count: counts.cloudDevOps,
    },
    {
      title: "AI & ML",
      description: "Practical applications of machine learning and large language models in production.",
      href: "/ai-ml",
      count: counts.aiMl,
    },
  ];

  return <HomePage categories={categories} />;
}

// ISR: Revalidate every hour to update counts
export const revalidate = 3600;
