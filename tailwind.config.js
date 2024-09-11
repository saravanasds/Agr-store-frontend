/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px', // Add custom breakpoint for 420px
        'xxl': '1440px'
      },
    },
  },
  plugins: [],
}

