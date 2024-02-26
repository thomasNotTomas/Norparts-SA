/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#FFFFFF',
        'brand-900': '#171A2D',
        'brand-700': '#232F4D',
      },
    },
  },
  plugins: [],
}

