# 📝 Content Management & Deployment Guide

## Overview

This guide explains how to add, update, and deploy blog content for Techies Journal.

---

## 📁 Content Structure

### Directory Organization

```
src/content/
├── blogs/              # Technology category
├── system-design/      # System Design category
├── backend-engineering/ # Backend Engineering category
├── cloud-devops/       # Cloud & DevOps category
└── ai-ml/             # AI & ML category
```

Each category folder contains MDX files (one file = one blog post).

---

## ✍️ Adding New Blog Posts

### Step 1: Choose the Right Category

Decide which category your article belongs to:
- **Technology** (`blogs/`) - General tech topics
- **System Design** (`system-design/`) - Architecture & scalability
- **Backend Engineering** (`backend-engineering/`) - APIs & databases
- **Cloud & DevOps** (`cloud-devops/`) - Containers & infrastructure
- **AI & ML** (`ai-ml/`) - Machine learning & AI

### Step 2: Create the MDX File

Navigate to the appropriate category folder and create a new `.mdx` file:

```bash
# Example: Creating a new System Design article
cd src/content/system-design/
touch my-new-article.mdx
```

**Naming Convention:**
- Use lowercase
- Separate words with hyphens
- Be descriptive but concise
- Example: `load-balancing-strategies.mdx`

### Step 3: Add Frontmatter Metadata

Every MDX file must start with frontmatter (YAML metadata):

```mdx
---
title: "Your Article Title"
date: "2026-01-28"
description: "A compelling description for SEO and previews"
tags: ["tag1", "tag2", "tag3"]
---

## Your Content Starts Here

Write your article content below the frontmatter...
```

#### Frontmatter Fields:

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | Article title | `"Understanding Load Balancers"` |
| `date` | ✅ Yes | Publication date (YYYY-MM-DD) | `"2026-01-28"` |
| `description` | ✅ Yes | SEO description (150-160 chars) | `"Learn how load balancers distribute traffic..."` |
| `tags` | ⚠️ Optional | Array of tags | `["nginx", "scalability", "devops"]` |

### Step 4: Write Your Content

Use standard Markdown with MDX enhancements:

#### **Headings**
```markdown
## Main Section (H2)
### Subsection (H3)
#### Detail (H4)
```

#### **Code Blocks** (with copy button)
````markdown
```javascript
function example() {
    console.log("Code blocks automatically get copy buttons!");
}
```
````

#### **Lists**
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

#### **Links**
```markdown
[Link text](https://example.com)
```

#### **Bold & Italic**
```markdown
**Bold text**
*Italic text*
```

#### **Images**
```markdown
![Alt text](/images/my-image.png)
```

### Step 5: Preview Locally

Before deploying, always preview your changes locally:

```bash
# Start the development server
npm run dev

# Navigate to your article
# Example: http://localhost:3000/system-design/my-new-article
```

---

## 📤 Deployment Process

### Method 1: Vercel (Recommended)

#### **Initial Setup:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add new blog post: Article Title"
   git push origin main
   ```

2. **Vercel Auto-Deploy**
   - Vercel automatically detects the push
   - Builds and deploys your changes
   - Usually takes 2-3 minutes

3. **Check Deployment**
   - Visit your Vercel dashboard
   - Confirm deployment status
   - Check the production URL

#### **Continuous Updates:**

Every time you push to GitHub:
```bash
git add src/content/
git commit -m "Update: Article name"
git push origin main
```

Vercel will automatically:
- ✅ Build the project
- ✅ Run type checks
- ✅ Deploy to production
- ✅ Update the live site

---

### Method 2: Manual Deployment

#### **Build Locally:**
```bash
# Build the production bundle
npm run build

# Test the production build
npm start
```

#### **Deploy to Vercel CLI:**
```bash
# Install Vercel CLI (first time only)
npm install -g vercel

# Deploy
vercel --prod
```

---

## 🔄 Content Update Workflow

### Adding a New Post:

```bash
# 1. Create new MDX file
touch src/content/system-design/new-post.mdx

# 2. Write content with frontmatter

# 3. Preview locally
npm run dev

# 4. Commit and push
git add .
git commit -m "Add: New post about X"
git push origin main

# 5. Vercel auto-deploys (wait 2-3 minutes)
```

### Updating an Existing Post:

```bash
# 1. Edit the MDX file
code src/content/system-design/existing-post.mdx

# 2. Preview changes
npm run dev

# 3. Commit and push
git add .
git commit -m "Update: Fix typo in article X"
git push origin main

# 4. Auto-deployment
```

### Deleting a Post:

```bash
# 1. Delete the MDX file
rm src/content/system-design/old-post.mdx

# 2. Commit and push
git add .
git commit -m "Remove: Outdated article X"
git push origin main
```

---

## 🎨 Content Best Practices

### 1. **SEO Optimization**
- Use descriptive titles (50-60 characters)
- Write compelling descriptions (150-160 characters)
- Include relevant tags
- Use proper heading hierarchy (H1 → H2 → H3)
- Add alt text to images

### 2. **Readability**
- Break content into sections with H2/H3 headings
- Use short paragraphs (2-4 sentences)
- Include code examples for technical topics
- Add bullet points and numbered lists
- Use bold for emphasis sparingly

### 3. **Code Examples**
- Always include language identifier in code blocks
- Add comments to explain complex code
- Keep examples concise and focused
- Test code before publishing

### 4. **Consistency**
- Use the same date format: `YYYY-MM-DD`
- Follow naming conventions for file slugs
- Maintain consistent tone and style
- Use standard tags across similar articles

---

## 🚨 Common Issues & Solutions

### Issue: "Blog post not showing up"
**Solution:** 
- Check file extension is `.mdx` not `.md`
- Verify frontmatter syntax (YAML requires exact spacing)
- Ensure file is in correct category folder
- Restart dev server: `npm run dev`

### Issue: "Build failing on deployment"
**Solution:**
- Check for TypeScript errors: `npm run build`
- Validate MDX syntax (no unclosed tags)
- Check for missing required frontmatter fields

### Issue: "Code block not rendering"
**Solution:**
- Ensure proper code fence syntax: ` ```language `
- Check for proper closing: ` ``` `
- Verify no special characters breaking Markdown

### Issue: "Related posts not showing"
**Solution:**
- Need at least 2 posts in the same category
- Check that other posts have valid frontmatter

---

## 📋 Pre-Deployment Checklist

Before pushing to production:

- [ ] Frontmatter complete (title, date, description)
- [ ] No spelling or grammar errors
- [ ] Code examples tested and working
- [ ] All links functional
- [ ] Images loading correctly
- [ ] Preview looks good locally
- [ ] No TypeScript errors (`npm run build`)
- [ ] Commit message descriptive

---

## 🔗 Quick Reference

### File Locations:
- Blog posts: `src/content/{category}/{slug}.mdx`
- Images: `public/images/` (optional)
- Components: `src/components/`

### Key Commands:
```bash
npm run dev          # Local development
npm run build        # Production build
npm start            # Test production build
git push origin main # Deploy to Vercel
```

### URLs:
- Local: `http://localhost:3000`
- Production: `https://your-domain.vercel.app`

---

## 📞 Need Help?

- Check the [Features Documentation](./FEATURES.md)
- Review existing MDX files for examples
- Test locally before deploying
- Check Vercel deployment logs if build fails

---

**Last Updated:** January 28, 2026  
**Version:** 1.0.0
