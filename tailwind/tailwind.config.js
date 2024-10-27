/** @type {import('tailwindcss').Config} */
module.exports = {
  // Yahan specify karna padega ke ki ham content actually kahan par likh rahe hain. To include all files use *.html
  // content: ["./dist/index.html"],
  content: ["./dist/*.html"],
  theme: {
    extend: {
      // extend ke andar ham custom colors, fonts, etc add kar sakte hain
      colors: {
        'custom-green': '#90DE83',
        'custom-pink': '#DFA1C1',
        'custom-blue': '#00B2CA',
        'custom-beige': '#F1F1E6',
        'custom-grey': '#334155',
        'custom-color': '#FFE8F7',
        'custom-color2': '#F9F871',
        'custom-physicsWallah-color': '#bfccff',
        'custom-physicsWallah-color2': '#2f3296',
        'custom-physicsWallah-color3': '#3b31c0',
        'custom-physicsWallah-color4': '#5a4bda',
        'custom-physicsWallah-color5': '#eaaa2e',
        'custom-physicsWallah-color6': '#757575',
      }
    },
  },
  plugins: [],
}

