/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      primary: "#0D9488",
      secondary: "#D4A373",
      dark: "#0F172A",
      light: "#F8FAFC",
    },
  },
},
  plugins: [],
};