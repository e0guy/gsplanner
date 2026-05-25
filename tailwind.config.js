/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        gs: {
          bg: "#03040B",
          panel: "#080A14",
          card: "#0B0D18",
          line: "rgba(148, 93, 255, 0.22)",
          purple: "#7C3AED",
          pink: "#C084FC",
          soft: "#BBA6FF",
        },
      },
      boxShadow: {
        glow: "0 0 90px rgba(124, 58, 237, .34)",
        glowStrong: "0 0 140px rgba(124, 58, 237, .42)",
      },
    },
  },
  plugins: [],
};
