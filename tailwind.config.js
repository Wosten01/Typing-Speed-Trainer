/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 1: Light theme
        light: {
          background: "#F3F4F6",
          text: "#1F2937",
          correct: "#34D399",
          incorrect: "#F87171",
          accent: "#3B82F6",
        },
        // 2: Dark theme
        dark: {
          background: "#313437",
          main: "#D1D0C5",
          secondary: "#626568",
          incorrect: "#BF455B",
          accent: "#E2B712",
        },
      },
    },
  },
  plugins: [],
};
