/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
  extend: {
    colors:{
      'blueColor': '#90b1db',
      'greenIsh': '#7eb37a',
      'cardShadow': '#f7f8f9',
      'textColor': '#252b36',
    }
  },
},
plugins: [],
}