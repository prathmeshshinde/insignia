const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#282828",
      white: "#ffffff",
      grey: "#212121",
      mainBlack: "#2b2d30",
      blue: "#30fbef",
      pink: "#ef63b7",
      purple: "#9c69e2",
      in: "#2d3033",
      border: "#3f354d",
    },
    fontFamily: {
      now: ["now", "san-serif"],
      nowre: ["nowre", "san-serif"],
    },

    extends: {
      width: {
        500: "80%",
        120: "350px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
