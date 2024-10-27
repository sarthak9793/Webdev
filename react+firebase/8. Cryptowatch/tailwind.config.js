// Basically what we are doing is that we are using the class strategy to apply the dark mode instead of media query strategy. In media query strategy, whatever class we wrote with dark: was applied based on whether the dark mode was enabled in the browser/OS. But if we want to give user the option to turn on/off dark mode we will have to use the class strategy. What we do in class strategy is we first define the .light and .dark classes. Then we go to the tailwind config file and specify we are using the class strategy to apply dark mode by using darkMode: "class". Then we will extend the backgroundColor property with new classes using the names of css rules we defined in index.css. We could have given css rules different names in index.css depending on light or dark and defined seperate classes for dark mode and light mode colors in tailwind config, but the advantage of using var() is that depending on whether "dark" class is applied or not primary will mean different things. So if I have set class to dark, then primary will mean #2d3748 otherwise it will mean #ffffff. This is a lot cleaner
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
        
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        btnText: "var(--color-bg-secondary)"
      },
      borderColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        input: "var(--color-bg-input)",
        accent: "var(--color-text-accent)"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

