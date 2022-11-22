/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
darkMode: "class",
  theme: {
    extend: {
      colors:{
        "dull-black":"#1C1C1C",
        "dull-gray":"#1F1F20",
      },
      fontFamily:{
        "black-ops" :"'Baloo 2', cursive"
      },
      width:{
        30 : "7.5rem" // 120px
      },
      height:{
       22 : "5.5rem" // 88px
      }
    },
  },
  plugins: [],
}