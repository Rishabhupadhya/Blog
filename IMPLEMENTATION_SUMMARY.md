# Tech Blog - Multi-Category Implementation

## 🎉 Summary

Successfully created 4 new category sections that replicate ALL functionality from the main Technology/Blog page:

### ✅ Created Categories:
1. **System Design** (`/system-design`)
2. **Backend Engineering** (`/backend-engineering`)
3. **Cloud & DevOps** (`/cloud-devops`)
4. **AI & ML** (`/ai-ml`)

---

## 📁 Project Structure

### Content Folders
```
src/content/
├── blogs/                    # Original Technology blogs (4 files)
├── system-design/            # System Design posts (2 files)
├── backend-engineering/      # Backend Engineering posts (2 files)
├── cloud-devops/            # Cloud & DevOps posts (2 files)
└── ai-ml/                   # AI & ML posts (2 files)
```

### App Routes
```
app/
├── page.tsx                         # Homepage (Technology)
├── BlogList.tsx                     # Technology list component
├── blog/[slug]/page.tsx            # Technology detail pages
│
├── system-design/
│   ├── page.tsx                    # System Design listing
│   ├── SystemDesignList.tsx        # Client component with search/pagination
│   └── [slug]/page.tsx             # System Design detail pages
│
├── backend-engineering/
│   ├── page.tsx                    # Backend Engineering listing
│   ├── BackendEngineeringList.tsx  # Client component with search/pagination
│   └── [slug]/page.tsx             # Backend Engineering detail pages
│
├── cloud-devops/
│   ├── page.tsx                    # Cloud & DevOps listing
│   ├── CloudDevOpsList.tsx         # Client component with search/pagination
│   └── [slug]/page.tsx             # Cloud & DevOps detail pages
│
└── ai-ml/
    ├── page.tsx                    # AI & ML listing
    ├── AIMLList.tsx                # Client component with search/pagination
    └── [slug]/page.tsx             # AI & ML detail pages
```

### Library Functions
```
src/lib/
├── getBlogs.ts              # Technology blog functions
├── getSystemDesign.ts       # System Design functions
├── getBackendEngineering.ts # Backend Engineering functions
├── getCloudDevOps.ts        # Cloud & DevOps functions
└── getAIML.ts              # AI & ML functions
```

---

## 🚀 Features (All Categories)

Each category has **IDENTICAL** functionality:

### ✅ List Page Features:
- **Search functionality** - Filter posts by title/description
- **Pagination** - 8 posts per page with navigation
- **BlogHeader** - Sticky header with search bar
- **Responsive grid** - 1/2/4 column layout
- **Dark theme** - Black background with cyan accents
- **Hover effects** - Card animations on hover

### ✅ Detail Page Features:
- **Table of Contents** - Desktop sidebar + mobile floating button
- **MDX rendering** - Full markdown support with syntax highlighting
- **Related posts** - Shows 3 related posts from same category
- **Responsive design** - Mobile-first approach
- **Heading anchors** - Click ToC to jump to sections
- **Prose styling** - Beautiful typography for content

### ✅ Shared Components:
- `BlogCard` - Updated with `basePath` prop for flexible routing
- `BlogHeader` - Search bar with "Rishabh Blogs" home link
- `TableOfContents` - Responsive ToC with active section highlighting
- `Pagination` - Client-side page navigation
- `Navbar` - Fixed top navigation
- `Footer` - Links to all categories in "Communities" section

---

## 🔗 Navigation

### Footer Links (Communities Section):
- **Technology** → `/` (Homepage)
- **System Design** → `/system-design`
- **Backend Engineering** → `/backend-engineering`
- **Cloud & DevOps** → `/cloud-devops`
- **AI & ML** → `/ai-ml`

### Sample Posts Created:

**System Design:**
- intro-to-system-design.mdx
- microservices-architecture.mdx

**Backend Engineering:**
- restful-api-design.mdx
- database-optimization.mdx

**Cloud & DevOps:**
- docker-fundamentals.mdx
- kubernetes-deployments.mdx

**AI & ML:**
- intro-to-machine-learning.mdx
- nlp-basics.mdx

---

## 🛠️ Technical Implementation

### Data Fetching Pattern:
Each category follows the same pattern:

1. **Library functions** (`get*.ts`) - Read MDX files, parse frontmatter
2. **Server component** (`page.tsx`) - Fetch data on server
3. **Client component** (`*List.tsx`) - Handle search, pagination, interactivity
4. **Detail page** (`[slug]/page.tsx`) - Render MDX with ToC and related posts

### MDX Frontmatter Format:
```yaml
---
title: "Post Title"
date: "Jan 2026"
description: "Post description"
---
```

### Key Files Modified:
- `BlogCard.tsx` - Added `basePath` prop for category routing
- `Footer.tsx` - Added links to all 4 categories
- `BlogHeader.tsx` - Made logo clickable to homepage

---

## 🎨 Styling

Consistent across all categories:
- **Background:** Black with gradient to gray/cyan
- **Accent color:** Cyan (#22d3ee)
- **Text:** White headings, gray body text
- **Cards:** Black/40 background with white/10 borders
- **Hover effects:** Cyan borders and glow effects

---

## ✅ Build Status

✅ **Build successful** - All pages compile without errors
✅ **TypeScript valid** - No type errors
✅ **Routes generated:**
- Static: `/`, `/system-design`, `/backend-engineering`, `/cloud-devops`, `/ai-ml`
- Dynamic: All `[slug]` routes for each category

---

## 🌐 URLs

- Homepage (Technology): `http://localhost:3000/`
- System Design: `http://localhost:3000/system-design`
- Backend Engineering: `http://localhost:3000/backend-engineering`
- Cloud & DevOps: `http://localhost:3000/cloud-devops`
- AI & ML: `http://localhost:3000/ai-ml`

### Example Detail Pages:
- `/system-design/intro-to-system-design`
- `/backend-engineering/restful-api-design`
- `/cloud-devops/docker-fundamentals`
- `/ai-ml/intro-to-machine-learning`

---

## 📝 Next Steps (Optional)

To add more content:

1. **Create new MDX files** in respective content folders
2. **Follow frontmatter format** (title, date, description)
3. **Write markdown content** with ## headings for ToC
4. Posts will **automatically appear** on listing pages

---

## 🎯 What Was Replicated

Every feature from the original Technology page:
✅ Search functionality
✅ Pagination (8 posts per page)
✅ BlogHeader with search
✅ BlogCard grid layout
✅ Table of Contents (desktop + mobile)
✅ Related posts section
✅ MDX rendering with syntax highlighting
✅ Responsive design
✅ Dark theme with cyan accents
✅ Hover animations
✅ Navigation links
✅ Footer integration

All 4 categories are **fully functional** and **independent** from each other!
