/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
darkMode: "class",
  theme: {
    extend: {
      colors:{
        "dull-black":"#1C1C1C"
      },
      fontFamily:{
        "black-ops" :"'Baloo 2', cursive"
      }
    },
  },
  plugins: [],
}