/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Oswald: `Oswald, sans-serif`,
      MVBoli: `Indie Flower, cursive`,
      Lora: `Lora, serif`
    },
    colors: {
      red: "#D40C0C"
    },
    extend: {},
  },
  plugins: [],
}