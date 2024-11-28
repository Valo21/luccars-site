

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      opti: ["OPTI Futura", "sans-serif"],
      neue: ["Base Neue", "sans-serif"],
    },
    extend: {
      colors: {
        'brand-green': '#86ce05'
      },
      keyframes: {
        'slide-left': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'infinite-slide-left': 'slide-left 20s linear infinite'
      }
    },
  },
  plugins: [],
}