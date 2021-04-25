const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "-4.5": "1.125rem",
        30: "7.5rem",
      },
      extend: {
        blue: {
          searchBorder: "#398bfd",
          searchRing: "#0f3171",
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue,
      black: {
        bg: "#0e1116",
        nav: "#161c23",
        button: "#21272c",
      },
      red: {
        salmon: "#f88166",
      },
      commitButton: "#21272c",
      verified: "#14221e",
      C: "#555555",
      CSS: "#563d7c",
      Dart: "#00B4AB",
      Go: "#375eab",
      Haskell: "#29b544",
      HTML: "#e44b23",
      Java: "#b07219",
      JavaScript: "#f1e05a",
      Kotlin: "#F18E33",
      Pascal: "#b0ce4e",
      Perl: "#0298c3",
      Perl6: "#0000fb",
      PHP: "#4F5D95",
      PLSQL: "#dad8d8",
      Python: "#3572A5",
      R: "#198ce7",
      Ruby: "#701516",
      Rust: "#dea584",
      Swift: "#ffac45",
      TypeScript: "#2b7489",
      Vue: "#2c3e50",
    },
  },
  variants: {
    extend: {
      ringOpacity: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
  plugins: [],
};
