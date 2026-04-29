/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecycle-yellow': '#FFD700',
        'ecycle-black': '#000000',
      },
    },
  },
  plugins: [],
}