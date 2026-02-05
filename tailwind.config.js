/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Hajduvet brand colors - világoskék téma
        'hajdu': {
          'primary': '#0066B3',      // Fő kék szín
          'secondary': '#00A0E3',    // Világosabb kék
          'light': '#E8F4FC',        // Nagyon világos kék háttér
          'lighter': '#F0F8FF',      // Legvilágosabb kék
          'dark': '#004A82',         // Sötétebb kék
          'accent': '#00B4D8',       // Accent kék
          'navy': '#003366',         // Sötét navy
        },
        'text': {
          'primary': '#1a1a2e',
          'secondary': '#4a4a6a',
          'muted': '#6b7280'
        }
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 102, 179, 0.1)',
        'hover': '0 8px 30px rgba(0, 102, 179, 0.2)',
        'card': '0 2px 15px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}



