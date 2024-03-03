const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8A0917",
        primaryDark: "#6e0712",
        primaryLight: "#a13a45",
        "primary-dark": "#eab308",
        "primaryDark-dark": "#ca8a04",
        "primaryLight-dark": "#f5c429",
        secondary: "#EFE394",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
