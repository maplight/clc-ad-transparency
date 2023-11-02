import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "button-primary-500": "#308973",
      "button-primary-600": "#035651",
      "primary-100": "#D9EDDF",
      "primary-200": "#65BF8F",
      "primary-500": "#308973",
      "primary-600": "#035651",
      "primary-700": "#384B42",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
