module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#00AF91",
          secondary: "#007965",
          tertiary: "#F58634",
          quaternary: "#FFCC29",
        },
        dark: {
          primary: "#1A1D24",
          secondary: "#222831",
          tertiary: "#F58634",
          quaternary: "#FFCC29",
        },
      },
      fontFamily: {
        primary: ["Mada"],
        secondary: ["Mali"],
        paragraph: ["Source Sans Pro"],
      },
    },
  },
  plugins: [],
};
