# 🚀 Techies Journal

> A modern, full-featured tech blog built with Next.js 14, TypeScript, and Tailwind CSS

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A professional tech blog featuring 5 specialized categories: Technology, System Design, Backend Engineering, Cloud & DevOps, and AI & ML. Built for performance, SEO, and developer experience.

🌐 **Live Demo:** [Your URL Here]

---

## ✨ Features

### 🎨 **User Experience**
- ✅ Modern, animated homepage with category cards
- ✅ 5 specialized content categories
- ✅ Real-time search functionality
- ✅ Pagination (6 posts per page)
- ✅ Reading progress bar
- ✅ Table of contents with smooth scroll
- ✅ Related posts section
- ✅ Fully responsive design

### 💻 **Developer Features**
- ✅ MDX support for rich content
- ✅ Code blocks with copy-to-clipboard
- ✅ TypeScript for type safety
- ✅ SEO optimized with metadata
- ✅ Fast builds with static generation
- ✅ Hot module replacement in dev mode

### 📄 **Production Ready**
- ✅ Privacy Policy (GDPR/CCPA compliant)
- ✅ Terms & Conditions
- ✅ Cookie Policy
- ✅ Professional footer with social links
- ✅ Mobile-responsive navigation

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tech-blog.git
   cd tech-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
tech-blog/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   ├── technology/               # Technology category
│   ├── system-design/            # System Design category
│   ├── backend-engineering/      # Backend Engineering category
│   ├── cloud-devops/             # Cloud & DevOps category
│   ├── ai-ml/                    # AI & ML category
│   ├── privacy-policy/           # Privacy page
│   ├── terms/                    # Terms page
│   └── cookies/                  # Cookie policy page
│
├── src/
│   ├── components/               # React components
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Footer
│   │   ├── BlogCard.tsx         # Blog post card
│   │   ├── CodeBlock.tsx        # Code block with copy
│   │   ├── TableOfContents.tsx  # TOC component
│   │   └── ReadingProgress.tsx  # Progress bar
│   │
│   ├── content/                  # MDX blog posts
│   │   ├── blogs/               # Technology posts
│   │   ├── system-design/       # System design posts
│   │   ├── backend-engineering/ # Backend posts
│   │   ├── cloud-devops/        # DevOps posts
│   │   └── ai-ml/               # AI/ML posts
│   │
│   └── lib/                      # Utility functions
│       ├── getBlogs.ts          # Fetch blog posts
│       ├── getHeadings.ts       # Extract TOC headings
│       └── [category].ts        # Category-specific fetchers
│
├── public/                       # Static assets
├── FEATURES.md                   # Feature documentation
├── CONTENT_GUIDE.md             # Content management guide
└── README.md                     # This file
```

---

## 📝 Adding Content

### Create a New Blog Post

1. **Choose a category folder:**
   ```
   src/content/blogs/              # Technology
   src/content/system-design/      # System Design
   src/content/backend-engineering/ # Backend
   src/content/cloud-devops/       # Cloud/DevOps
   src/content/ai-ml/              # AI/ML
   ```

2. **Create an MDX file:**
   ```bash
   touch src/content/system-design/my-new-post.mdx
   ```

3. **Add frontmatter and content:**
   ```mdx
   ---
   title: "Understanding Microservices Architecture"
   date: "2026-01-28"
   description: "A comprehensive guide to microservices design patterns"
   tags: ["microservices", "architecture", "distributed-systems"]
   ---

   ## Introduction

   Your article content here...

   ```javascript
   // Code blocks automatically get copy buttons!
   function example() {
       console.log("Hello, World!");
   }
   ```
   ```

4. **Preview locally:**
   ```bash
   npm run dev
   ```

📚 **For detailed instructions, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add new content"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` triggers a new deployment
   - Preview deployments for pull requests
   - Rollback capability

### Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Build Locally

```bash
# Create production build
npm run build

# Test production build
npm start
```

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm start            # Run production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

### Environment Variables

Create a `.env.local` file:

```env
# Optional: Add environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🎨 Customization

### Update Site Information

**1. Update site name and branding:**
- Edit `src/components/Navbar.tsx` (logo text)
- Edit `src/components/Footer.tsx` (brand section)
- Edit `app/layout.tsx` (metadata)

**2. Change color scheme:**
- Edit `tailwind.config.ts` (custom colors)
- Primary color: `cyan-400`
- Background: `black` to `cyan-950` gradient

**3. Modify social links:**
- Edit `src/components/Footer.tsx` (social media icons)

**4. Update legal pages:**
- Edit `app/privacy-policy/page.tsx`
- Edit `app/terms/page.tsx`
- Edit `app/cookies/page.tsx`

---

## 📊 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **MDX** | Markdown with JSX support |
| **Framer Motion** | Animations and transitions |
| **React Icons** | Icon library |
| **next-mdx-remote** | MDX rendering |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first approach
- The open-source community

---

## 📞 Support

- 📧 Email: rishabh.292002@gmail.com
- 🌐 Portfolio: [https://rishabhupadhyay.vercel.app/](https://rishabhupadhyay.vercel.app/)
- 💼 LinkedIn: [Rishabh Upadhyay](https://linkedin.com/in/rishabh-upadhyay-880294220)
- 🐙 GitHub: [@Rishabhupadhya](https://github.com/Rishabhupadhya)

---

## 📚 Documentation

- [Features Documentation](./FEATURES.md) - Complete feature list
- [Content Management Guide](./CONTENT_GUIDE.md) - How to add and deploy content
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)

---

## 🗺️ Roadmap

### Coming Soon
- [ ] Newsletter subscription
- [ ] Comment system (Giscus/Utterances)
- [ ] Social media share buttons
- [ ] Article bookmarking
- [ ] Author profiles
- [ ] Dark/light theme toggle
- [ ] RSS feed
- [ ] Sitemap generation
- [ ] Analytics integration

### Future Enhancements
- [ ] Full-text search with Algolia
- [ ] Related posts with better algorithm
- [ ] Series/multi-part articles support
- [ ] Draft posts management
- [ ] Scheduled publishing
- [ ] Image optimization
- [ ] Video embedding support

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ by [Rishabh Upadhyay](https://rishabhupadhyay.vercel.app/)**

**Last Updated:** January 28, 2026
