const MAX = 1200;
const EMPTY_ARRAY = [...new Array(MAX)];
const createConfig = () =>
  EMPTY_ARRAY.reduce((config, _, index) => {
    config[index] = `${index}px`;
    return config;
  }, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        ...createConfig(),
        header: "var(--spacing-header)",
      },
      fontSize: createConfig(),
      width: createConfig(),
      height: {
        ...createConfig(),
        header: "var(--height-header)",
      },
      colors: {
        navy: "var(--color-navy)",
        "navy-alpha80": "var(--color-navy-alpha80)",
        white: "var(--color-white)",
        "white-alpha12": "var(--color-white-alpha12)",
        "white-alpha16": "var(--color-white-alpha16)",
        darknavy: "var(--color-darknavy)",
        gray: "var(--color-gray)",
        "gradient-start": "var(--color-gradient-start)",
        "gradient-end": "var(--color-gradient-end)",
      },
      maxWidth: {
        ...createConfig(),
        content: "1440px",
      },
      maxHeight: createConfig(),
      fontFamily: {
        lobster: "var(--font-lobster)",
        sans: "var(--font-sans)",
      },
      fontWeight: {
        regular: 300,
        bold: 600,
        black: 800,
      },
      zIndex: {
        header: "var(--z-index-header)",
      },
      borderRadius: createConfig(),
      letterSpacing: {
        1: "1px",
        2: "2px",
      },
      lineHeight: {
        100: "100%",
        140: "140%",
        180: "180%",
      },
    },
  },
  plugins: [require("tailwind-children")],
};
