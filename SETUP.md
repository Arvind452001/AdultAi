# Setup Guide for React + Vite Conversion

## Quick Start (3 steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Copy Image Assets
Copy all images from the original project:
```bash
# Copy from original adult-ai/img directory to src/assets/img
cp -r adult-ai/img/* src/assets/img/
```

Or manually:
1. Create folder: `src/assets/img/`
2. Copy these subfolders from `adult-ai/img/`:
   - `banner/`
   - `bg/`
   - `content/`
   - `logos/`
   - `avatars/`
   - `blog/`
   - `portfolio/`
   - `clients/`
   - `service/`
   - `team/`
   - `icons/`

### Step 3: Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000` with hot reload enabled.

## Detailed Setup Instructions

### Prerequisites
- Node.js 16+ (Check with: `node --version`)
- npm 8+ (Check with: `npm --version`)

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd adult-ai-react
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```
   This will install:
   - React & React DOM
   - Vite & build tools
   - ESLint & development tools

3. **Asset Setup:**
   
   **Option A: Command Line (Linux/Mac)**
   ```bash
   mkdir -p src/assets/img
   cp -r ../adult-ai/img/* src/assets/img/
   ```
   
   **Option B: Manual (All OS)**
   1. Create folder structure:
      - Right-click project → New Folder → `src`
      - Inside `src` → New Folder → `assets`
      - Inside `assets` → New Folder → `img`
   
   2. Copy image folders:
      - Open `adult-ai/img` from your original project
      - Select all subfolders (banner, bg, content, logos, etc.)
      - Drag to `src/assets/img/`

4. **Verify installation:**
   ```bash
   npm run dev
   ```
   You should see:
   ```
   Local:        http://localhost:3000/
   ```

## Directory Structure After Setup

```
adult-ai-react/
├── src/
│   ├── assets/
│   │   └── img/
│   │       ├── banner/          ← Your banner images
│   │       ├── bg/              ← Background images
│   │       ├── content/         ← Content images
│   │       ├── logos/           ← Logo images
│   │       ├── avatars/         ← Avatar images
│   │       └── ...              ← Other image folders
│   ├── components/              ← React components
│   ├── styles/                  ← CSS files
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── node_modules/                ← Auto-created after npm install
```

## Available NPM Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## Running in Development

When you run `npm run dev`:
- The dev server starts on `http://localhost:3000`
- Your browser opens automatically
- Any file changes automatically reload the page (HMR)
- Console shows any errors in real-time

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder containing:
- Minified JavaScript
- Optimized CSS
- Compressed images
- Production-ready files

**Size comparison:**
- Development: ~5MB (with node_modules)
- Production: ~200KB (minified + gzipped)

## Deploying to Production

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Build the project: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder

### Option 3: GitHub Pages
1. Update `vite.config.js`:
   ```js
   base: '/repository-name/'  // if not root domain
   ```
2. Build: `npm run build`
3. Push `dist` folder to GitHub Pages

## Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org)

### Issue: "Cannot find module 'react'"
**Solution:** 
```bash
npm install
```

### Issue: Images not displaying
**Solution:**
1. Check that images are in `src/assets/img/`
2. Verify folder structure matches original
3. Check browser console (F12) for 404 errors
4. Clear browser cache (Ctrl+Shift+Delete)

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Use different port
npm run dev -- --port 3001
```

### Issue: Styles not applying
**Solution:**
1. Save all files (Ctrl+S)
2. Hard refresh browser (Ctrl+Shift+R)
3. Check that CSS files are imported in components

### Issue: Hot reload not working
**Solution:**
1. Stop dev server (Ctrl+C)
2. Delete `.cache` folder if it exists
3. Run `npm run dev` again

## Environment Variables

For future API integration, create a `.env` file:

```
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=XynthraAi
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Next: Customization

After setup is complete, you can:

1. **Modify content** in component files (*.jsx)
2. **Update styles** in CSS files
3. **Add new components** following existing patterns
4. **Integrate APIs** for dynamic content

## Common Tasks

### Adding a New Page
1. Create new component in `src/components/NewPage.jsx`
2. Import in `App.jsx`
3. Add to route (if using React Router later)

### Updating Styles
1. Edit `/src/styles/index.css` for global styles
2. Edit `/src/styles/App.css` for component styles
3. Changes appear instantly in dev mode

### Using Images in Components
```javascript
import banner from '../assets/img/banner/slide-01.jpg'

export function MyComponent() {
  return <img src={banner} alt="Banner" />
}
```

## Performance Tips

- Vite automatically code-splits components
- CSS is scoped to prevent conflicts
- Images are optimized on build
- Development server uses ESM for fast loads

## Support Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Bootstrap Documentation](https://getbootstrap.com)
- [Font Awesome Icons](https://fontawesome.com)

## Git Setup (Optional)

If using version control:

```bash
git init
git add .
git commit -m "Initial React + Vite conversion"
git remote add origin your-repo-url
git push -u origin main
```

---

**You're all set! Run `npm install && npm run dev` to start developing.** 🚀
