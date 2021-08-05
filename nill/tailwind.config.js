module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: "0.4em",
    },
    colors: {
      keppel: {
        DEFAULT: "#38B2AC",
        WHITE: "#fff",
        50: "#DCF4F3",
        100: "#C8EEEC",
        200: "#A1E2DE",
        300: "#7BD5D1",
        400: "#54C9C3",
        500: "#38B2AC",
        600: "#2C8B87",
        700: "#206461",
        800: "#133E3C",
        900: "#071716",
      },
      "cadet-blue": {
        DEFAULT: "#A0AEC0",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FCFCFD",
        300: "#DDE2E9",
        400: "#BFC8D4",
        500: "#A0AEC0",
        600: "#8194AC",
        700: "#647A96",
        800: "#4F6178",
        900: "#3B4859",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
