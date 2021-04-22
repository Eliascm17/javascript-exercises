const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      black: {
        bg: "#0e1116",
        nav: "#161c23",
        button: "#21272c",
      },
      extend: {
        margin: {
          "-4.5": "1.125rem",
        },
      },
    },
  },
  variants: {
    extend: {
      ringOpacity: ["hover", "active"],
    },
  },
  plugins: [],
};
