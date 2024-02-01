/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#ff7a7a8f",
        secondary: {
          100: "#2a0fd3",
          200: "#00005F",
        },
      },
      fontFamily: {
        bodyFont: ["Inter"],
      },
    },
  },
  plugins: [],
};
