/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Root HTML file
    './*.html',     // Any other HTML files in the root directory
    './*.css',      // Any CSS files in the root directory
    './src/**/*.{html,js,jsx,ts,tsx}', // All files in src directory with specified extensions
    './articles/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        h1: ['Chivo Mono'],
        body: ['Montserrat'],
      },
      colors: {
        background: '#121214',
        primary: '#CFCFED',
        myred: '#FF6B79',
        myblue: '#4F9AFF',
      },
    },
  },
  plugins: [],
}