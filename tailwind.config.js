/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cozy-blue": "#16192b",
        "warm-cream": "#fdf6e3",
        "cream-hover": "#f4e9d0",
        "text-ink": "#3b3327",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"], // Pastikan import font ini di index.html
        handwritten: ['"Caveat"', "cursive"], // Pastikan import font ini di index.html
      },
      animation: {
        "fade-in-slow": "fadeIn 2s ease-in-out forwards",
        unfold: "unfold 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        fold: "fold 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        breathe: "breathe 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        unfold: {
          "0%": { transform: "scaleY(0) translateY(50%)", opacity: "0" },
          "100%": { transform: "scaleY(1) translateY(0)", opacity: "1" },
        },
        fold: {
          "0%": { transform: "scaleY(1) translateY(0)", opacity: "1" },
          "100%": { transform: "scaleY(0) translateY(50%)", opacity: "0" },
        },
        breathe: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
