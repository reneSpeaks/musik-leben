/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primary: "#bdbf01",
            secondary: "#373d20",
            accent: "#CDE895",
            background: "#1b191d",
            light: "#fcfcfc",
            attention: "#fb3640",
        },
        fontFamily: {
            primary: ["Primary", "sans-serif"],
            handwriting: ["Handwriting", "sans-serif"],
        },
    },
  },
  plugins: [],
}