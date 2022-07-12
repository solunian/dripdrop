/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'edu': ['Edu VIC WA NT Beginner', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
