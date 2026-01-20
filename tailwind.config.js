/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        "background-light": "#fdf8ff",
        "background-dark": "#0a0118",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "orbit-html": "orbit-html 15s linear infinite",
        "orbit-js": "orbit-js 18s linear infinite",
        "orbit-react": "orbit-react 12s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "fade-in": "fade-in 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "orbit-html": {
          from: { transform: "rotate(0deg) translateX(180px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(180px) rotate(-360deg)" },
        },
        "orbit-js": {
          from: {
            transform: "rotate(120deg) translateX(180px) rotate(-120deg)",
          },
          to: { transform: "rotate(480deg) translateX(180px) rotate(-480deg)" },
        },
        "orbit-react": {
          from: {
            transform: "rotate(240deg) translateX(180px) rotate(-240deg)",
          },
          to: { transform: "rotate(600deg) translateX(180px) rotate(-600deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
