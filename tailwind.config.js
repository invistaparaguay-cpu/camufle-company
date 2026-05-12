/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        gold: { DEFAULT: "#C9A24A", soft: "#E6C77A", deep: "#8B6B2A" },
        ink: "#06080C",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-22px)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-18px,18px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translate3d(30px,-20px,0) scale(1.08)", opacity: "0.55" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        "border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "shine-sweep": {
          "0%": { transform: "translateX(-100%) skewX(-20deg)", opacity: "0" },
          "20%": { opacity: "0.7" },
          "100%": { transform: "translateX(200%) skewX(-20deg)", opacity: "0" },
        },
        "draw-line": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "blink-caret": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        "scale-in": "scale-in 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "gradient-shift": "gradient-shift 8s ease infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "float-slower": "float-slower 18s ease-in-out infinite",
        aurora: "aurora 14s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "border-spin": "border-spin 8s linear infinite",
        "shine-sweep": "shine-sweep 2.5s ease-in-out infinite",
        "draw-line": "draw-line 1.4s cubic-bezier(0.16,1,0.3,1) both",
        "blink-caret": "blink-caret 1.1s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
