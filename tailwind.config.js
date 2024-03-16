/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

    },
    fontFamily: {
      "mullish": ["Mulish", "sans-serif"]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

