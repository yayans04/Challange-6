/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
        quicksand: ["Quicksand"],
        montserrat: ["Montserrat"],
      },
      backgroundImage: {
        "header-poster": "url('/public/images/endgame_poster.jpg')",
      },
    },
  },
  plugins: [],
};
