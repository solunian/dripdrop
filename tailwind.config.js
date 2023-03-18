/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'water': '#3498DB',
        'darkwater': '#1a689c',
      },
      fontFamily: {
        'edu': ['Edu VIC WA NT Beginner', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
