/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#1D9BF0",
        background: "#edf2f6",
      },
    },
  },
  plugins: [],
};
