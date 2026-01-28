"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaCubes, FaServer, FaCloud, FaBrain } from "react-icons/fa";

const categories = [
  {
    title: "Technology",
    description: "Explore the latest in tech trends, tutorials, and insights across various domains",
    icon: FaCode,
    href: "/technology",
    color: "from-cyan-500 to-blue-500",
    image: "🚀",
  },
  {
    title: "System Design",
    description: "Master scalable architecture, distributed systems, and design patterns",
    icon: FaCubes,
    href: "/system-design",
    color: "from-purple-500 to-pink-500",
    image: "🏗️",
  },
  {
    title: "Backend Engineering",
    description: "Deep dive into APIs, databases, performance optimization, and server-side development",
    icon: FaServer,
    href: "/backend-engineering",
    color: "from-green-500 to-teal-500",
    image: "⚙️",
  },
  {
    title: "Cloud & DevOps",
    description: "Learn cloud platforms, containerization, CI/CD, and infrastructure automation",
    icon: FaCloud,
    href: "/cloud-devops",
    color: "from-blue-500 to-indigo-500",
    image: "☁️",
  },
  {
    title: "AI & ML",
    description: "Discover machine learning algorithms, neural networks, and artificial intelligence",
    icon: FaBrain,
    href: "/ai-ml",
    color: "from-orange-500 to-red-500",
    image: "🤖",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Techies Journal

            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your gateway to System Design, Backend Engineering, Cloud & AI
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Dive deep into cutting-edge technologies, learn best practices, and stay ahead in the ever-evolving tech landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={category.href} variants={itemVariants}>
                  <Link href={category.href}>
                    <div className="group relative h-full">
                      {/* Card */}
                      <div
                        className="
                          relative
                          h-full
                          bg-gradient-to-br from-black/80 to-gray-900/80
                          backdrop-blur-sm
                          border border-white/10
                          rounded-3xl
                          p-8
                          overflow-hidden
                          transition-all
                          duration-500
                          hover:border-cyan-400/50
                          hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.5)]
                          hover:-translate-y-2
                        "
                      >
                        {/* Gradient overlay on hover */}
                        <div
                          className={`
                            absolute inset-0 opacity-0 group-hover:opacity-10
                            bg-gradient-to-br ${category.color}
                            transition-opacity duration-500
                          `}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon & Emoji */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <IconComponent className="text-3xl text-cyan-400" />
                            </div>
                            <span className="text-5xl group-hover:scale-125 transition-transform duration-500">
                              {category.image}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {category.title}
                          </h2>

                          {/* Description */}
                          <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {category.description}
                          </p>

                          {/* CTA */}
                          <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                            <span>Explore</span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Animated border gradient */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} blur-xl opacity-50`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-4xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-400 text-sm">Articles</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Free Content</div>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm">Learning</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-gray-300 mb-8">
              Choose a category above and start your learning journey today
            </p>
            <Link
              href="/technology"
              className="
                inline-block
                px-8 py-4
                bg-gradient-to-r from-cyan-500 to-purple-500
                text-white font-semibold rounded-full
                hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.8)]
                hover:scale-105
                transition-all duration-300
              "
            >
              Start Reading
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
