/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CA0100',
          'red-dark': '#A30100',
          'red-light': '#E52222',
          black: '#111111',
          dark: '#1C1C1E',
          gray: '#7B7B7B',
          lightgray: '#F5F5F7',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
