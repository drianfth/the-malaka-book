module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
      sourceSansPro: ["Source Sans Pro", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/image/bg.png')",
      },
      colors: {
        primary: "#00BAC7",
      },
    },
  },
  plugins: [],
};
