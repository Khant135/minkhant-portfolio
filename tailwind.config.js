/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      // Custormization for screen size
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'main-color' : '#96BB7C',
        'hover-main' : '#a0bf89',
        'secondary-color' : '#6C757D',
        'hover-secondary': '#f3f8f2',
      }
    },
  },
  plugins: [],
}
