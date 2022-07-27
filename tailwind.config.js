/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryColor : '#FF9F29',
        primaryColor : '#203239'
      }
    },
  },
  plugins: [],
}