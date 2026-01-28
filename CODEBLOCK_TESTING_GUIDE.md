# CodeBlock Component Testing Guide 🧪

## Testing Instructions

I've added multiple code blocks across different MDX files to help you test the CodeBlock component with copy functionality.

### Updated Files with Code Examples:

1. **Technology - System Design Basics** (`/blog/system-design-basics`)
   - ✅ Python LoadBalancer class
   - ✅ JavaScript LoadBalancer class
   - ✅ YAML configuration example

2. **System Design - Intro to System Design** (`/system-design/intro-to-system-design`)
   - ✅ Docker Compose YAML
   - ✅ Python WeightedLoadBalancer
   - ✅ TypeScript LRU Cache implementation

3. **Backend Engineering - RESTful API Design** (`/backend-engineering/restful-api-design`)
   - ✅ Express.js REST endpoints
   - ✅ Flask API versioning
   - ✅ TypeScript JWT authentication middleware

4. **Cloud & DevOps - Docker Fundamentals** (`/cloud-devops/docker-fundamentals`)
   - ✅ Basic Dockerfile
   - ✅ Multi-stage Dockerfile
   - ✅ Docker Compose with multiple services
   - ✅ Bash commands for Docker CLI

## How to Test:

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Navigate to Test Pages

Visit these URLs to test the CodeBlock component:

- http://localhost:3000/blog/system-design-basics
- http://localhost:3000/system-design/intro-to-system-design
- http://localhost:3000/backend-engineering/restful-api-design
- http://localhost:3000/cloud-devops/docker-fundamentals

### 3. Test the Copy Functionality

For each page:

1. **Hover Test**: 
   - Hover over any code block
   - ✅ Verify the "Copy" button appears in the top-right corner
   - ✅ Verify it has a smooth fade-in animation

2. **Copy Test**:
   - Click the "Copy" button
   - ✅ Verify the button text changes to "Copied!"
   - ✅ Verify it changes back to "Copy" after 2 seconds

3. **Paste Test**:
   - Open any text editor
   - Paste (Cmd+V / Ctrl+V)
   - ✅ Verify the entire code block content is pasted correctly

4. **Multiple Code Blocks**:
   - Test copying from different code blocks on the same page
   - ✅ Verify each block works independently

### 4. Visual Testing

Check that the code blocks have:
- ✅ Proper syntax highlighting (if implemented)
- ✅ Cyan-colored copy button matching the theme
- ✅ Dark semi-transparent button background
- ✅ Smooth hover transitions
- ✅ Proper positioning (top-right corner)
- ✅ Readable code with proper spacing

### 5. Responsive Testing

Test on different screen sizes:
- ✅ Desktop (1920x1080)
- ✅ Tablet (768px width)
- ✅ Mobile (375px width)

Verify:
- Copy button is still accessible and clickable
- Code blocks scroll horizontally if needed
- Button doesn't overlap with code content

### 6. Browser Testing

Test in multiple browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari

### 7. Reading Progress + Code Block

Verify both features work together:
- ✅ Reading progress bar is visible at the top
- ✅ Scrolling updates the progress bar
- ✅ Code blocks don't interfere with the progress bar
- ✅ Copy button works while scrolling

## Expected Behavior:

### Copy Button States:
1. **Hidden**: Default state (opacity: 0)
2. **Visible**: On hover (opacity: 100, transition smooth)
3. **Clicked**: Shows "Copied!" for 2 seconds
4. **Reset**: Returns to "Copy" after 2 seconds

### Clipboard API:
- Uses `navigator.clipboard.writeText()` to copy text
- Works in modern browsers with HTTPS or localhost

## Known Limitations:

1. **Clipboard API**: Requires HTTPS or localhost
2. **Safari iOS**: May require user interaction for clipboard access
3. **Syntax Highlighting**: Currently not implemented (plain text in code blocks)

## Potential Enhancements:

If you want to improve the CodeBlock component, consider:

1. **Add Syntax Highlighting**:
   - Use `prism-react-renderer` or `highlight.js`
   - Detect language from code fence (```python, ```javascript)

2. **Add Language Badge**:
   - Show language name in top-left corner
   - Example: "Python", "JavaScript", "YAML"

3. **Add Line Numbers**:
   - Optional line numbers on the left side

4. **Download Button**:
   - Allow users to download code as a file

5. **Theme Selector**:
   - Multiple syntax themes (dark, light, etc.)

## Testing Checklist:

- [ ] All code blocks render correctly
- [ ] Copy button appears on hover
- [ ] Copy button copies correct content
- [ ] "Copied!" feedback displays for 2 seconds
- [ ] Multiple code blocks work independently
- [ ] Works across all 5 blog categories
- [ ] Responsive on mobile/tablet/desktop
- [ ] Works in Chrome, Firefox, Safari
- [ ] No console errors
- [ ] Reading progress bar works alongside code blocks

---

**Last Updated**: January 2026
**Component Location**: `/src/components/CodeBlock.tsx`
**Pages Updated**: 4 MDX files across different categories
