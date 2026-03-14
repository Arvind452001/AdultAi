# Assets Setup Guide

## Overview
All static assets (CSS, images, fonts, and JavaScript) from your original project need to be placed in the `public` folder for the React + Vite project to work correctly.

## Assets Location

### Original Location (adult-ai/)
- CSS: `adult-ai/css/` → Contains: styles.css, plugins.css
- Images: `adult-ai/img/` → Contains: 100+ images organized in subfolders
- Fonts: `adult-ai/fonts/` → Contains: Font Awesome, Themify, and other fonts
- JavaScript: `adult-ai/js/` → Contains: main.js, jquery.min.js, bootstrap.min.js, etc.

### Target Location (public/)
```
public/
├── css/
│   ├── styles.css
│   └── plugins.css
├── img/
│   ├── about.png
│   ├── avatars/ (7 images)
│   ├── banner/ (4 images)
│   ├── bg/ (8 images)
│   ├── blog/ (15+ images)
│   ├── clients/ (8 images)
│   ├── content/ (25+ images)
│   ├── icons/ (7 images)
│   ├── logos/ (3 images)
│   ├── portfolio/ (12 images)
│   ├── service/ (10+ images)
│   └── team/ (9 images)
└── fonts/
    ├── fa-*.ttf (Font Awesome fonts)
    ├── fa-*.woff2 (Font Awesome fonts)
    ├── themify*.* (Themify fonts)
    └── lg*.* (Other fonts)
```

## How to Copy Assets

### Option 1: Using the Provided Script (Recommended)
```bash
# On macOS/Linux
chmod +x COPY_ASSETS.sh
./COPY_ASSETS.sh

# On Windows (using Git Bash or WSL)
./COPY_ASSETS.sh
```

### Option 2: Manual Copy

#### For macOS/Linux:
```bash
# Create directory structure
mkdir -p public/css
mkdir -p public/img/{avatars,banner,bg,blog,clients,content,icons,logos,portfolio,service,team}
mkdir -p public/fonts

# Copy CSS
cp adult-ai/css/*.css public/css/

# Copy images
cp adult-ai/img/*.png public/img/
cp adult-ai/img/*.jpg public/img/
cp adult-ai/img/*.gif public/img/
cp -r adult-ai/img/avatars/* public/img/avatars/
cp -r adult-ai/img/banner/* public/img/banner/
cp -r adult-ai/img/bg/* public/img/bg/
cp -r adult-ai/img/blog/* public/img/blog/
cp -r adult-ai/img/clients/* public/img/clients/
cp -r adult-ai/img/content/* public/img/content/
cp -r adult-ai/img/icons/* public/img/icons/
cp -r adult-ai/img/logos/* public/img/logos/
cp -r adult-ai/img/portfolio/* public/img/portfolio/
cp -r adult-ai/img/service/* public/img/service/
cp -r adult-ai/img/team/* public/img/team/

# Copy fonts
cp adult-ai/fonts/fa-*.* public/fonts/
cp adult-ai/fonts/themify* public/fonts/
cp adult-ai/fonts/lg* public/fonts/
```

#### For Windows (Command Prompt):
```bash
# Create directory structure
mkdir public\css
mkdir public\img\avatars
mkdir public\img\banner
mkdir public\img\bg
mkdir public\img\blog
mkdir public\img\clients
mkdir public\img\content
mkdir public\img\icons
mkdir public\img\logos
mkdir public\img\portfolio
mkdir public\img\service
mkdir public\img\team
mkdir public\fonts

# Copy CSS
xcopy adult-ai\css\*.css public\css\ /Y

# Copy images (use robocopy for better control)
robocopy adult-ai\img public\img *.png *.jpg *.gif /S
robocopy adult-ai\img\avatars public\img\avatars /S
robocopy adult-ai\img\banner public\img\banner /S
robocopy adult-ai\img\bg public\img\bg /S
robocopy adult-ai\img\blog public\img\blog /S
robocopy adult-ai\img\clients public\img\clients /S
robocopy adult-ai\img\content public\img\content /S
robocopy adult-ai\img\icons public\img\icons /S
robocopy adult-ai\img\logos public\img\logos /S
robocopy adult-ai\img\portfolio public\img\portfolio /S
robocopy adult-ai\img\service public\img\service /S
robocopy adult-ai\img\team public\img\team /S

# Copy fonts
xcopy adult-ai\fonts\fa-*.* public\fonts\ /Y
xcopy adult-ai\fonts\themify* public\fonts\ /Y
xcopy adult-ai\fonts\lg* public\fonts\ /Y
```

## Asset Referencing in React Components

### CSS
CSS files are imported in `src/styles/index.css`:
```css
@import url('/css/styles.css');
@import url('/css/plugins.css');
```

### Images
Reference images using absolute paths starting with `/`:
```jsx
<img src="/img/logos/logo.png" alt="Logo" />
<img src="/img/banner/slide-01.jpg" alt="Banner" />
<img src="/img/content/about1.jpg" alt="About" />
```

### Fonts
Fonts are loaded from CSS files. Make sure CSS imports reference:
```css
@font-face {
  font-family: 'FontAwesome';
  src: url('/fonts/fa-solid-900.woff2') format('woff2'),
       url('/fonts/fa-solid-900.ttf') format('truetype');
}
```

## Verification Checklist

After copying assets, verify the following:

- [ ] `public/css/styles.css` exists
- [ ] `public/css/plugins.css` exists
- [ ] `public/img/logos/logo.png` exists
- [ ] `public/img/logos/logo-inner.png` exists
- [ ] `public/img/logos/favicon.png` exists
- [ ] `public/img/banner/` folder has 4 images
- [ ] `public/img/avatars/` folder has 7 images
- [ ] `public/img/content/` folder has 25+ images
- [ ] `public/fonts/` folder has all font files
- [ ] `npm install` completes successfully
- [ ] `npm run dev` starts the development server
- [ ] Images display correctly in the browser
- [ ] CSS styles are applied correctly
- [ ] Fonts render properly

## Complete Setup Instructions

1. **Copy assets** using the script or manual method above
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Open in browser**: http://localhost:5173
5. **Verify all assets load** without console errors

## Troubleshooting

### Images not loading
- Check that `public/img/` folder exists
- Verify image paths start with `/` (not `./`)
- Check browser console for 404 errors
- Ensure file extensions match (case-sensitive on Linux)

### CSS not applying
- Check that `public/css/` folder exists
- Verify CSS imports in `src/styles/index.css`
- Clear browser cache and reload
- Check for CSS syntax errors in browser DevTools

### Fonts not rendering
- Check that `public/fonts/` folder contains all font files
- Verify font paths in CSS files
- Check browser DevTools for font loading errors
- Ensure font file permissions are correct

### Bootstrap not working
- Bootstrap is loaded from CDN in `index.html`
- Verify internet connection
- Check network tab in DevTools for CDN errors
- Consider downloading Bootstrap locally if CDN is unavailable

## Production Build

When building for production:
```bash
npm run build
```

All assets in `public/` will be automatically included in the build output. The production build will optimize images and CSS as needed.
