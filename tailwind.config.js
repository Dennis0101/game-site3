/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1e1e1e",
        accent: "#26a69a"
      }
    }
  },
  plugins: []
}
