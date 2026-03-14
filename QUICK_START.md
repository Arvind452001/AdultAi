# Quick Start - React + Vite Project

## What's Ready

✅ **18 Pages** - All HTML pages converted to React components  
✅ **Routing** - React Router configured for all pages  
✅ **Components** - Reusable UI components created  
✅ **Styling** - All original CSS preserved  
✅ **Build Setup** - Vite configured and ready to run  

---

## 3-Step Setup

### Step 1: Install Dependencies
```bash
npm install
```
This will install React, React Router, Vite, and all other dependencies.

### Step 2: Copy Images
```bash
# Copy images from original project to React assets
cp -r adult-ai/img/* src/assets/img/
```

### Step 3: Run Development Server
```bash
npm run dev
```

The app will automatically open at: **http://localhost:5173**

---

## Available Pages (18 Total)

| Route | Page Name |
|-------|-----------|
| `/` | Home |
| `/login` | Login |
| `/otp-verify` | OTP Verification |
| `/about` | About Us |
| `/contact` | Contact Us |
| `/profile` | User Profile |
| `/dashboard` | Dashboard |
| `/text-ai` | Text AI Generator |
| `/image-ai` | Image AI Generator |
| `/audio-ai` | Audio AI Generator |
| `/video-ai` | Video AI Generator |
| `/spy-ai` | Spy AI Tool |
| `/creators-tools` | Creators Tools |
| `/marketplace` | Marketplace |
| `/projects` | Projects |
| `/create-project` | Create Project |
| `/sales-list` | Sales List |
| `/sell-product` | Sell Product |

---

## Project Structure

```
src/
├── pages/              ← 18 Page components
├── components/         ← Reusable UI components
├── styles/             ← CSS files
├── assets/             ← Images and media
├── App.jsx
└── main.jsx
```

---

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Key Features

- **Fast Development**: Vite provides instant HMR (Hot Module Replacement)
- **Routing**: All pages connected with React Router
- **Responsive**: Mobile-first design maintained
- **Ready for API**: Each page is ready to connect to backend APIs
- **Production Ready**: Build command generates optimized dist folder

---

## Next: Connect Your Backend

Each page is ready to connect to your API. For example, in LoginPage.jsx:

```javascript
// Example: Connect login form to your API
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('YOUR_API_URL/login', {
    method: 'POST',
    body: JSON.stringify({ phone, password })
  })
  // Handle response
}
```

---

## Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in ./dist folder
# Deploy the dist folder to your hosting
```

---

## Troubleshooting

### Images not showing?
Make sure you copied the images from `adult-ai/img/` to `src/assets/img/`

### Port already in use?
Edit `vite.config.js` to change the port:
```javascript
server: {
  port: 3000,  // Change this number
}
```

### Styling issues?
Make sure `src/styles/index.css` is imported in `src/main.jsx`

---

## Support

- Check individual page files in `src/pages/`
- Review component structure in `src/components/`
- Update routes in `src/main.jsx` if needed
- Read `ALL_PAGES_CREATED.md` for detailed documentation

---

**You're all set! Run `npm run dev` and start building!** 🚀
