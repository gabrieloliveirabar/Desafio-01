/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {},
    screens: {
      'phone': '375px',
      'tablet': '640px',   
      'laptop': '1024px',
      'desktop': '1280px',
      
    },
  },
  plugins: [],
}
