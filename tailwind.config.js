/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
    },
    extend: {
      colors: {
        pinkCustom: "#ed1c7c",
        paleGreen: "#9cd6a5",
        paleBg: "#f1f4ff",
        numBg: "#e9e8ef",
        textColor: "#2b2763",
        paleTextColor: "#9595b6",
      }
    },
  },
  plugins: [],
}
