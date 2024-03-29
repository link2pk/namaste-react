/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#f4f0dd",
        "shimmer-bg": "#d3d3d3",
        "primary-brown": "#66391c",
        yellow: "#caa847",
        green: "#3d9b6d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
