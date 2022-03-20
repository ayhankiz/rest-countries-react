module.exports = {
  content: [
    "./src/Layout/Header.js",
    "./public/index.html",
    "./src/App.js",
    "./src/components/Form/Form.js",
    "./src/components/Container/Container.js",
    "./src/components/Countries/Countries.js",
    "./src/components/Countries/Country.js",
    "./src/components/Spinner/Spinner.js",
    "./src/components/Button/Button.js",
    "./src/components/Countries/DetailedCountry.js",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {},
      border: {
        "border-1": "1px",
      },
    },
  },
  plugins: [],
};
