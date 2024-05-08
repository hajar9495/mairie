/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grisHeader: "#BCBCBC",
        // grisBody: "rgb(188, 188, 188)",
        grisBody: "rgb(230, 230, 230)",
      },
      screens: {
        // comme l'image du bandeau
        "1.5xl": "1240px",
        // mon ecran xD
        "2.5xl": "1920px ",
        "3xl": "2560px ",
      },
      width: {
        128: "1264px",
      },
    },
  },
  plugins: [],
};
