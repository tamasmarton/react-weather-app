/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
