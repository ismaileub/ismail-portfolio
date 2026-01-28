# Ismail - Full Stack Developer Portfolio

## Live Demo

[View the live site here](https://ismail-portfolio-beta.vercel.app)

A modern, responsive portfolio website built with React, Tailwind CSS, Vite, Framer Motion, and shadcn/ui components. Features smooth animations, dark mode toggle, and an interactive tech stack showcase.

## Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Tailwind CSS for responsive design
- 🌙 Dark/Light mode toggle with theme persistence
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Interactive tech icons with orbital animations
- 🧩 shadcn/ui components for consistent UI
- 🚀 Production-ready build setup

## Technologies Used

- **React** 18.2 - UI library
- **Vite** 5.0 - Build tool & dev server
- **Tailwind CSS** 3.3 - Utility-first CSS
- **Framer Motion** 10.16 - Advanced animations
- **shadcn/ui** - Component library built on Radix UI
- **next-themes** - Theme management
- **JavaScript** (ES6+) - Programming language

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── index.js
│   │   └── Portfolio.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── components.json
└── README.md
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Update Profile Information

Edit `src/components/Portfolio.jsx`:

- Change name from "Meriem" to your name
- Update social links (GitHub, LinkedIn, Email)
- Replace profile image URL
- Update resume link
- Modify hero text and description

### Customize Colors & Theme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#a855f7",  // Change purple to your preference
  "background-light": "#fdf8ff",
  "background-dark": "#0a0118",
}
```

### Adjust Animations

Framer Motion animations can be customized in `Portfolio.jsx`:

- Modify animation variants (duration, ease, delay)
- Adjust stagger timings
- Change transition properties

### Use shadcn/ui Components

Additional shadcn/ui components can be added:

```bash
# Run shadcn-ui CLI to add components
npx shadcn-ui@latest add [component-name]
```

## Theme Provider

The project uses a custom `ThemeContext` for theme management with:

- Local storage persistence
- System preference detection
- Seamless dark/light mode toggle

## Animations

Powered by **Framer Motion**:

- Staggered animations for list items
- Floating effects on elements
- Rotation animations for icons
- Scale and opacity transitions
- Smooth navigation animations

## Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist` folder to:

- **Vercel** (recommended for Next.js-like features)
- **Netlify** (easy GitHub integration)
- **GitHub Pages** (free static hosting)
- **Any static hosting service**

## Deployment Steps (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy
5. Your site is live!

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out through the portfolio contact section or visit my social links.
