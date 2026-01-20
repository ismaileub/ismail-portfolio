# Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### Step 3: Customize Your Portfolio
Edit `src/components/Portfolio.jsx` and update:
- Your name
- Hero text
- Social media links
- Profile image
- Resume download link

---

## 🎨 What's New

### ✅ Theme Provider
- Automatic dark/light mode toggle
- Persists to localStorage
- System preference detection

### ✅ Framer Motion Animations
- Smooth page transitions
- Hover effects on all interactive elements
- Orbital tech icon animations
- Staggered list animations
- Float effects on profile image

### ✅ shadcn/ui Components
- Professional Button component
- Flexible Card component
- Built on Radix UI & Tailwind CSS
- Ready for more components

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   └── index.js
│   └── Portfolio.jsx          # Main component
├── context/
│   └── ThemeContext.jsx       # Theme management
├── lib/
│   └── utils.js               # Utility functions
├── App.jsx                    # App wrapper
├── main.jsx                   # Entry point
└── index.css                  # Global styles
```

---

## 🚀 Key Features

| Feature | Status | Location |
|---------|--------|----------|
| Dark/Light Mode | ✅ | `src/context/ThemeContext.jsx` |
| Framer Motion | ✅ | `src/components/Portfolio.jsx` |
| shadcn/ui Button | ✅ | `src/components/ui/button.jsx` |
| shadcn/ui Card | ✅ | `src/components/ui/card.jsx` |
| Theme Persistence | ✅ | `src/context/ThemeContext.jsx` |

---

## 🎯 Common Tasks

### Change Primary Color
File: `tailwind.config.js`
```javascript
colors: {
  primary: "#your-color-here", // Change this
}
```

### Add New Animation
File: `src/components/Portfolio.jsx`
```javascript
const myAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

<motion.div {...myAnimation}>
  Content
</motion.div>
```

### Use Button Component
```javascript
import { Button } from '@/components/ui/button'

<Button variant="outline">Click Me</Button>
```

### Use Theme Hook
```javascript
import { useTheme } from '@/context/ThemeContext'

const { isDark, toggleTheme } = useTheme()
```

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview build locally
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect at vercel.com
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect at netlify.com
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```
Upload the `dist` folder to any static host

---

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Theme not persisting?**
Clear browser localStorage and reload

---

## 🎉 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Customize portfolio content
4. ✅ Test animations in browser
5. ✅ Deploy to production

Enjoy! 🚀
