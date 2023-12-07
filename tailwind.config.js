/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        104: "26rem",
        120: "30rem",
        144: "36rem",
        168: "42rem",
        192: "48rem",
        224: "56rem",
        256: "64rem",
        288: "72rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
      },
      colors: {
        navy: "#04243d",
        blue: "#2a597d",
        teal: "#00c6c7",
        offwhite: "#f6fcfc",
        gray: "#3a3a3a",
      },
    },
  },
  plugins: [],
};
