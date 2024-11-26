/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'cursive'], // Add Rancho font
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}