/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
         fontFamily: {
        exo: ['Exo', 'sans-serif'],
         roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}