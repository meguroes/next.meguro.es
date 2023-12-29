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
      spacing: createConfig(),
      fontSize: createConfig(),
      width: createConfig(),
      height: {
        ...createConfig(),
        header: "var(--height-header)",
      },
      colors: {
        navy: "var(--color-navy)",
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
      zIndex: {
        header: "var(--z-index-header)",
      },
      borderRadius: createConfig(),
      lineHeight: {
        ...createConfig(),
      },
    },
  },
  plugins: [require("tailwind-children")],
};
