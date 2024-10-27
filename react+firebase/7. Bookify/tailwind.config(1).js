/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "register-bg-color": "#6d9ac4",
        "register-button-color": "#ee5684",
        "add-books-bg-color": "#E3F4F4",
        "form-bg-color": "#80558C",
        "button-bg-color": "#1a1a1a",
        "hover-button-bg-color": "#646cff",
        "home-bg-color": "#F4F2DE",
      },
      fontFamily: {
        "custom-font": "PT Serif",
        "custom-font2": "Borel",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}


