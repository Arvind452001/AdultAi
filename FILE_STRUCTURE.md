# Complete File Structure & References

## Directory Tree

```
adult-ai-react/
│
├── 📄 index.html                 # HTML entry point for Vite
├── 📄 package.json               # npm dependencies & scripts
├── 📄 vite.config.js             # Vite build configuration
├── 📄 .eslintrc.cjs              # ESLint rules
├── 📄 .gitignore                 # Git ignore patterns
│
├── 📁 src/                       # Source code (your main folder)
│   │
│   ├── 📄 main.jsx               # React app entry point
│   ├── 📄 App.jsx                # Main App component
│   │
│   ├── 📁 components/            # Reusable components
│   │   ├── 📄 Header.jsx         # Header & navigation
│   │   ├── 📄 Banner.jsx         # Hero section slider
│   │   ├── 📄 Features.jsx       # Features grid
│   │   ├── 📄 About.jsx          # About section
│   │   ├── 📄 Testimonials.jsx   # Testimonials carousel
│   │   ├── 📄 FAQ.jsx            # FAQ accordion
│   │   ├── 📄 Footer.jsx         # Footer
│   │   └── 📄 ScrollToTop.jsx    # Scroll to top button
│   │
│   ├── 📁 styles/                # CSS files
│   │   ├── 📄 index.css          # Global styles + animations
│   │   └── 📄 App.css            # Layout styles
│   │
│   └── 📁 assets/                # Static files
│       └── 📁 img/               # Images
│           ├── 📁 banner/        # Banner images
│           ├── 📁 bg/            # Background images
│           ├── 📁 content/       # Content images
│           ├── 📁 logos/         # Logo images
│           ├── 📁 avatars/       # Avatar images
│           ├── 📁 blog/          # Blog images
│           ├── 📁 portfolio/     # Portfolio images
│           └── ... (other folders)
│
├── 📁 node_modules/              # Dependencies (auto-created)
│
├── 📁 dist/                      # Production build (auto-created)
│   ├── 📄 index.html
│   ├── 📁 assets/
│   └── ... (minified & optimized files)
│
└── 📚 Documentation Files
    ├── 📄 README.md              # Full documentation
    ├── 📄 SETUP.md               # Setup instructions
    ├── 📄 QUICKSTART.md          # 5-minute start
    ├── 📄 MIGRATION.md           # Conversion details
    ├── 📄 PROJECT_SUMMARY.md     # Project overview
    └── 📄 FILE_STRUCTURE.md      # This file
```

---

## Core Files Explained

### 🔵 Entry Points

#### `index.html`
- The HTML entry point for Vite
- Loads `src/main.jsx`
- Minimal HTML, all content comes from React

```html
<!DOCTYPE html>
<html>
  <head>...</head>
  <body>
    <div id="root"></div>           <!-- React mounts here -->
    <script src="/src/main.jsx"></script>
  </body>
</html>
```

#### `src/main.jsx`
- React entry point
- Renders App component to #root
- Imports global CSS

```javascript
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

---

### 🟢 Main App

#### `src/App.jsx` (118 lines)
The main app component that:
- Manages page loading state
- Renders all components
- Shows preloader during load

```javascript
export default function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Banner />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
```

---

### 🟡 Components (8 Total)

#### 1. `Header.jsx` (79 lines)
**Purpose:** Navigation bar with logo & menu  
**Features:**
- Dynamic logo switching on scroll
- Mobile menu toggle
- Responsive navigation
- Active state tracking

**Used for:** Top navigation on all pages

```javascript
<header>
  <logo src={logoSrc} />
  <nav>
    <menu />
  </nav>
  <loginBtn />
</header>
```

---

#### 2. `Banner.jsx` (63 lines)
**Purpose:** Hero section with auto-rotating slider  
**Features:**
- Image carousel auto-rotation
- 5-second slide interval
- Call-to-action button
- Decorative elements

**Used for:** Main hero/landing area

```javascript
const slides = [
  { image: slide1, title: 'Slide 1' },
  { image: slide2, title: 'Slide 2' }
]
// Rotates every 5 seconds
```

---

#### 3. `Features.jsx` (44 lines)
**Purpose:** Display AI features in a grid  
**Features:**
- 7 feature cards
- Font Awesome icons
- Responsive grid layout
- Hover effects

**Used for:** Features showcase section

```javascript
const features = [
  { icon: 'fa-comment', title: 'Text AI' },
  { icon: 'fa-image', title: 'Image AI' },
  // ... more features
]
```

---

#### 4. `About.jsx` (46 lines)
**Purpose:** About section with image & content  
**Features:**
- Two-column layout
- Image hover effect
- About content
- Read more button

**Used for:** About section

```javascript
<section>
  <column1>
    <image />
  </column1>
  <column2>
    <content />
    <button />
  </column2>
</section>
```

---

#### 5. `Testimonials.jsx` (71 lines)
**Purpose:** Rotating customer testimonials  
**Features:**
- Auto-rotating carousel
- 5-second rotation
- Customer avatars
- Testimonial content

**Used for:** Testimonials section

```javascript
const testimonials = [
  { text: '...', author: 'John', avatar: '...' },
  // ... more testimonials
]
```

---

#### 6. `FAQ.jsx` (112 lines)
**Purpose:** Expandable FAQ accordion  
**Features:**
- Accordion component
- Click to expand/collapse
- 4 FAQ items
- Two-column layout

**Used for:** FAQ section

```javascript
const faqs = [
  { question: 'Q1?', answer: 'A1' },
  { question: 'Q2?', answer: 'A2' },
  // ...
]
// Click to toggle active accordion
```

---

#### 7. `Footer.jsx` (14 lines)
**Purpose:** Page footer  
**Features:**
- Simple footer
- Copyright text
- Dark background

**Used for:** Page footer

```javascript
<footer className="bg-dark">
  <p>© 2024 XynthraAi. All rights reserved.</p>
</footer>
```

---

#### 8. `ScrollToTop.jsx` (44 lines)
**Purpose:** Scroll-to-top button  
**Features:**
- Fixed position button
- Shows/hides on scroll
- Smooth scroll animation
- Red background with hover effect

**Used for:** Fixed scroll button

```javascript
const handleScroll = () => {
  window.scrollY > 500 ? show() : hide()
}
```

---

### 🔵 Styling Files

#### `src/styles/index.css` (796 lines)
**Contents:**
- Font imports (Mulish, Quicksand, Poppins)
- Global color variables
- Button styles
- Animation keyframes
- Utility classes
- Component-specific styles

**Key Sections:**
```css
/* Colors */
--primary-color: #FF0000
--secondary-color: #1f2732

/* Animations */
@keyframes fadeInUp
@keyframes shine
@keyframes ani-top-bottom

/* Utilities */
.text-primary, .bg-primary
.btn-style1, .btn-style1:hover
.flex-*, .justify-*, .align-*
```

---

#### `src/styles/App.css` (221 lines)
**Contents:**
- Layout styles
- Navbar styles
- Container styles
- Row/column grid
- Section padding
- Responsive breakpoints

**Key Sections:**
```css
/* Navigation */
.navbar-brand, .navbar-toggler
.navbar-nav, .attr-nav

/* Grid System */
.container, .row
.col-12, .col-md-*, .col-lg-*

/* Responsive */
@media (max-width: 992px)
@media (max-width: 576px)
```

---

### 📦 Configuration Files

#### `package.json`
**Purpose:** npm project configuration  
**Contains:**
- Project metadata
- Dependencies (5 packages)
- Scripts (dev, build, preview, lint)

```json
{
  "name": "adult-ai-react",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

---

#### `vite.config.js`
**Purpose:** Vite build configuration  
**Contains:**
- React plugin
- Dev server settings
- Build output settings

```javascript
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
}
```

---

#### `.eslintrc.cjs`
**Purpose:** Code quality rules  
**Checks:**
- JavaScript best practices
- React patterns
- React Hooks rules

---

#### `.gitignore`
**Purpose:** Tell git what to ignore  
**Ignores:**
- node_modules/
- dist/ (production build)
- .env files
- OS specific files

---

### 📚 Documentation Files

| File | Lines | Purpose |
|------|-------|---------|
| README.md | 253 | Complete project documentation |
| SETUP.md | 285 | Detailed setup instructions |
| QUICKSTART.md | 213 | 5-minute quick start |
| MIGRATION.md | 403 | Conversion explanation |
| PROJECT_SUMMARY.md | 399 | Project overview |
| FILE_STRUCTURE.md | This | File reference guide |

---

## Component Dependencies

### Import Graph
```
App.jsx
├── Header.jsx
│   └── (uses state & effects)
├── Banner.jsx
│   └── (uses state & effects)
├── Features.jsx
│   └── (uses data mapping)
├── About.jsx
│   └── (uses imports)
├── Testimonials.jsx
│   └── (uses state & effects)
├── FAQ.jsx
│   └── (uses state management)
├── Footer.jsx
│   └── (simple component)
└── ScrollToTop.jsx
    └── (uses state & effects)
```

### CSS Cascade
```
index.html
└── src/main.jsx
    └── src/styles/index.css (global)
    └── src/App.jsx
        └── src/styles/App.css (layout)
        └── Components (use classes from CSS)
```

---

## File Sizes

| File | Size | Lines |
|------|------|-------|
| src/App.jsx | 3.5 KB | 118 |
| src/components/Header.jsx | 2.2 KB | 79 |
| src/components/Banner.jsx | 1.8 KB | 63 |
| src/components/Features.jsx | 1.3 KB | 44 |
| src/components/About.jsx | 1.4 KB | 46 |
| src/components/Testimonials.jsx | 2.1 KB | 71 |
| src/components/FAQ.jsx | 3.3 KB | 112 |
| src/components/Footer.jsx | 0.4 KB | 14 |
| src/components/ScrollToTop.jsx | 1.3 KB | 44 |
| **Components Total** | **17 KB** | **591** |
| src/styles/index.css | 24 KB | 796 |
| src/styles/App.css | 8 KB | 221 |
| **Styles Total** | **32 KB** | **1,017** |
| **Source Code Total** | **~50 KB** | **~1,700 lines** |

---

## Editing Guide

### To Change Text Content
**File:** `src/components/[ComponentName].jsx`  
**Example:** Change hero title in Banner.jsx line 35

### To Change Colors
**File:** `src/styles/index.css`  
**Example:** Change primary color at line 47
```css
--primary-color: #FF0000  /* Change this */
```

### To Change Fonts
**File:** `src/styles/index.css`  
**Lines:** 1-4 (font imports)

### To Add Images
**Folder:** `src/assets/img/`  
**File:** Component that uses image

### To Add New Component
**Create:** `src/components/NewComponent.jsx`  
**Import:** In `src/App.jsx`  
**Render:** In `App.jsx` JSX

---

## Key Locations for Common Tasks

| Task | File | Location |
|------|------|----------|
| Change page title | index.html | `<title>` tag |
| Change header logo | src/components/Header.jsx | Line 8-9 |
| Change banner text | src/components/Banner.jsx | Line 35-37 |
| Change feature cards | src/components/Features.jsx | Line 8-14 |
| Change about text | src/components/About.jsx | Line 20-27 |
| Change FAQ items | src/components/FAQ.jsx | Line 8-24 |
| Change colors | src/styles/index.css | Line 47-58 |
| Change animations | src/styles/index.css | Line 400-500 |
| Change responsive layout | src/styles/App.css | Line 160-200 |

---

## Common Operations

### Add New Feature Card
```javascript
// In src/components/Features.jsx
const features = [
  // ... existing
  { id: 8, icon: 'fa-star', title: 'New Feature' }  // Add this
]
```

### Add New FAQ Item
```javascript
// In src/components/FAQ.jsx
const faqs = [
  // ... existing
  { id: 5, question: 'New Q?', answer: 'New A.' }  // Add this
]
```

### Change Button Color
```css
/* In src/styles/index.css, line 245 */
.btn-style1 {
  background: #FF0000;  /* Change this */
}
```

### Add New Font
```css
/* In src/styles/index.css, line 1 */
@import url("your-font-url");  /* Add here */
```

---

## Deployment Files

### Production Build Output (`dist/`)
```
dist/
├── index.html              # Minified HTML
├── assets/
│   ├── index-HASH.js       # Minified JavaScript
│   ├── index-HASH.css      # Minified CSS
│   └── [image files]       # Optimized images
└── vite.svg               # Icon
```

### Files to Deploy
Upload the `dist/` folder to your hosting service.

---

## Version Control

### What to Commit
```
✅ src/
✅ package.json
✅ vite.config.js
✅ index.html
✅ Documentation files
✅ .gitignore
```

### What NOT to Commit
```
❌ node_modules/          (ignore - huge folder)
❌ dist/                  (ignore - rebuild on deploy)
❌ .env.local            (ignore - local settings)
❌ .DS_Store             (ignore - OS files)
```

---

## File Organization Best Practices

### Keep It Clean
- One component per file
- Components in `src/components/`
- Styles in `src/styles/`
- Assets in `src/assets/`

### Naming Conventions
- Components: PascalCase (`Header.jsx`)
- Files: Same as component name
- CSS classes: kebab-case (`main-wrapper`)
- Variables: camelCase (`isLoading`)

### File Size Guidelines
- Component: < 200 lines
- CSS file: < 1000 lines
- If larger: Split into smaller files

---

## Quick Reference

**New to this project?** Start here:
1. Read QUICKSTART.md (5 min)
2. Run `npm install && npm run dev`
3. Explore the components in `src/components/`
4. Check CSS in `src/styles/`
5. Modify content and see changes instantly

**Ready to customize?**
1. Edit component files directly
2. Update styles in CSS files
3. Add images to `src/assets/img/`
4. Test with `npm run dev`
5. Build with `npm run build`

---

**Happy coding!** All files are organized and ready for development. 🚀
