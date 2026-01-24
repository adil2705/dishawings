/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': {
          50: '#F5F4FE',
          100: '#E2E1FC',
          200: '#D6BEFA',
          300: '#CB94F7',
          400: '#B76CF4',
          500: '#A344F1',
          600: '#8F1CEE',
        },
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
