module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        media1200: "1200px",
        media440: "44px",
        media560: "560px",
        // lg: "992px",
        // => @media (min-width:992px){ ... }
      },
    },
  },
  variants: {},
  plugins: [],
};
