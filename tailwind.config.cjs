/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: {
          50: "#fcf8f0",
          100: "#f7eedd",
          200: "#eedaba",
          300: "#e3bf8e",
          400: "#daa66d",
          500: "#ce8541",
          600: "#c06f36",
          700: "#9f572f",
          800: "#80472c",
          900: "#683c26",
          950: "#381d12",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
