# Component Asset References - Complete Guide

## Overview
This document shows how each React component should reference static assets from the `public/` folder.

---

## Global CSS Setup (src/styles/index.css)

```css
/* Import public CSS files */
@import url('/css/styles.css');
@import url('/css/plugins.css');

/* Font imports */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
```

---

## Header Component References

```jsx
// src/components/Header.jsx

export default function Header() {
  return (
    <>
      {/* Logo from public/img/logos/ */}
      <img src="/img/logos/logo.png" alt="Main Logo" />
      <img src="/img/logos/logo-inner.png" alt="Inner Logo" />
      
      {/* Font Awesome Icons - loaded via CSS */}
      <i className="fa fa-user"></i>
      <i className="fa fa-bars"></i>
    </>
  )
}
```

---

## Banner Component References

```jsx
// src/components/Banner.jsx

export default function Banner() {
  const slides = [
    { image: '/img/banner/slide-01.jpg' },
    { image: '/img/banner/slide-02.jpg' },
    { image: '/img/banner/slide-03.jpg' },
    { image: '/img/banner/slide-04.jpg' },
  ];

  return (
    <div className="banner-slider">
      {slides.map((slide, index) => (
        <img 
          key={index}
          src={slide.image} 
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
```

---

## Testimonials Component References

```jsx
// src/components/Testimonials.jsx

export default function Testimonials() {
  const testimonials = [
    { 
      avatar: '/img/avatars/avatar-01.jpg',
      name: 'John Doe'
    },
    { 
      avatar: '/img/avatars/avatar-02.jpg',
      name: 'Jane Smith'
    },
    // ... more testimonials
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="avatar"
          />
          <h4>{testimonial.name}</h4>
        </div>
      ))}
    </div>
  )
}
```

---

## Page Components - Image References

### HomePage.jsx
```jsx
// Background images
<section style={{ backgroundImage: 'url(/img/bg/bg-01.jpg)' }}>
  {/* Content */}
</section>

// About image
<img src="/img/about.png" alt="About Us" />
```

### AboutPage.jsx
```jsx
<section className="about-section">
  <img src="/img/about.png" alt="About" />
  <img src="/img/bg/bg-02.jpg" alt="Background" />
</section>
```

### ProfilePage.jsx
```jsx
<div className="profile">
  <img src="/img/avatars/avatar-01.jpg" alt="Profile Picture" />
</div>
```

### DashboardPage.jsx
```jsx
<div className="dashboard">
  <img src="/img/banner/slide-01.jpg" alt="Dashboard Header" />
</div>
```

### ContactPage.jsx
```jsx
<section style={{ backgroundImage: 'url(/img/bg/service-bg.jpg)' }}>
  {/* Form content */}
</section>
```

---

## AI Tool Pages - Image References

### TextAIPage.jsx
```jsx
<section className="hero">
  <img src="/img/bg/bg-03.png" alt="Text AI Background" />
</section>
```

### ImageAIPage.jsx
```jsx
<section className="hero">
  <img src="/img/bg/bg-04.jpg" alt="Image AI Background" />
</section>
```

### AudioAIPage.jsx
```jsx
<section className="hero">
  <img src="/img/bg/bg-05.png" alt="Audio AI Background" />
</section>
```

### VideoAIPage.jsx
```jsx
<section className="hero" style={{ backgroundImage: 'url(/img/bg/vide-bg-img.jpg)' }}>
  {/* Content */}
</section>
```

---

## Footer Component References

```jsx
// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer style={{ backgroundImage: 'url(/img/bg/footer-bg.jpg)' }}>
      {/* Footer content */}
    </footer>
  )
}
```

---

## Client/Logo References

```jsx
// Use in any component displaying client logos
const clients = [
  { logo: '/img/clients/01.png', name: 'Client 1' },
  { logo: '/img/clients/02.png', name: 'Client 2' },
  { logo: '/img/clients/03.png', name: 'Client 3' },
  { logo: '/img/clients/04.png', name: 'Client 4' },
  { logo: '/img/clients/05.png', name: 'Client 5' },
];

return (
  <div className="clients-grid">
    {clients.map((client, index) => (
      <img 
        key={index}
        src={client.logo} 
        alt={client.name}
      />
    ))}
  </div>
)
```

---

## Blog/Content References

```jsx
// Blog post images
const blogPost = {
  thumbnail: '/img/blog/blog-01.jpg',
  detailImage: '/img/blog/blog-details-01.jpg',
  nextImage: '/img/blog/next-blog.jpg',
  prevImage: '/img/blog/prev-blog.jpg',
};

return (
  <article className="blog-post">
    <img src={blogPost.thumbnail} alt="Blog Thumbnail" />
    <img src={blogPost.detailImage} alt="Blog Detail" />
  </article>
)
```

---

## Font Icon References

### Font Awesome Icons
```jsx
// Font Awesome icons (loaded via CSS)
<i className="fas fa-home"></i>
<i className="far fa-star"></i>
<i className="fab fa-facebook"></i>
```

### Themify Icons
```jsx
// Add to CSS
@import url('/fonts/themify-icons.css');

// Use in components
<i className="ti ti-home"></i>
<i className="ti ti-search"></i>
```

---

## Background Image Patterns

### Full Page Background
```jsx
<section style={{ 
  backgroundImage: 'url(/img/bg/bg-01.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh'
}}>
  {/* Content */}
</section>
```

### Tiled Background
```jsx
<div style={{ 
  backgroundImage: 'url(/img/bg/pattern.png)',
  backgroundRepeat: 'repeat',
  padding: '2rem'
}}>
  {/* Content */}
</div>
```

### Parallax Background
```jsx
<section 
  className="parallax"
  style={{ backgroundImage: 'url(/img/bg/bg-02.jpg)' }}
>
  {/* Content */}
</section>
```

---

## Asset Path Validation

### Correct Paths ✅
```jsx
<img src="/img/banner/slide-01.jpg" alt="Banner" />
<img src="/img/avatars/avatar-01.jpg" alt="Avatar" />
<img src="/img/clients/01.png" alt="Client" />
```

### Incorrect Paths ❌
```jsx
// DON'T use these:
<img src="./img/banner/slide-01.jpg" alt="Banner" />
<img src="../public/img/banner/slide-01.jpg" alt="Banner" />
<img src="adult-ai/img/banner/slide-01.jpg" alt="Banner" />
```

---

## Import vs URL References

### For Static Assets in Components ✅
```jsx
// Use public paths
<img src="/img/banner/slide-01.jpg" alt="Banner" />

// Use style attributes
<section style={{ backgroundImage: 'url(/img/bg/bg-01.jpg)' }} />
```

### For Dynamic Imports (if needed)
```jsx
// Only for dynamic module imports
import { lazy } from 'react'

const Page = lazy(() => import('/src/pages/HomePage.jsx'))
```

---

## Complete File Structure Reference

```
project/
├── public/
│   ├── css/
│   │   ├── styles.css          ← Main stylesheet
│   │   └── plugins.css         ← Plugin styles
│   ├── img/
│   │   ├── logos/              ← Logo files
│   │   ├── banner/             ← Banner/slider images
│   │   ├── avatars/            ← User avatars
│   │   ├── bg/                 ← Background images
│   │   ├── blog/               ← Blog post images
│   │   ├── clients/            ← Client logos
│   │   └── about.png           ← About page image
│   ├── fonts/
│   │   ├── fa-solid-900.*      ← Font Awesome solid
│   │   ├── fa-brands-400.*     ← Font Awesome brands
│   │   ├── fa-regular-400.*    ← Font Awesome regular
│   │   ├── lg8306.*            ← Light Gallery font
│   │   └── themify*.*          ← Themify icons font
│   └── js/
│       └── main.js             ← Main JS (if needed)
├── src/
│   ├── components/
│   │   ├── Header.jsx          ← Header component
│   │   ├── Banner.jsx          ← Banner component
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ...
│   ├── styles/
│   │   ├── index.css           ← Global styles
│   │   └── App.css             ← App styles
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

---

## Testing Asset References

### In Development (npm run dev)
All `/` paths reference the `public/` folder:
```
/img/banner/slide-01.jpg → public/img/banner/slide-01.jpg
/fonts/fa-solid-900.woff2 → public/fonts/fa-solid-900.woff2
/css/styles.css → public/css/styles.css
```

### In Production (npm run build)
All assets are optimized and referenced consistently:
```
/img/banner/slide-01.jpg → dist/img/banner/slide-01.jpg
/fonts/fa-solid-900.woff2 → dist/fonts/fa-solid-900.woff2
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Images show broken | Check path starts with `/` |
| Icons don't display | Verify fonts are in `public/fonts/` |
| CSS not applying | Check if CSS file is in `public/css/` |
| 404 errors | Use absolute paths from `public/` |

---

## Summary

✅ All static assets should be in the `public/` folder
✅ Reference with `/` prefix in components
✅ Use `public/css/`, `public/img/`, `public/fonts/`
✅ Never use relative paths like `./` or `../`
✅ Test in development to verify all assets load
