/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // header
        grisHeader: "#BCBCBC",
        // background
        grisBody: "rgb(230, 230, 230)",
        // symbole
        rouge: "#8c0047",
        rose: "#e52676",
        orange: "#f08a00",
        bleu: "#095780",
        vert: "#97be45",
        // formulaire
        grisForm: "#deedef",
        // bandeau formulaire
        bleuForm: "#00497e",
        // actualites
        grisActualite: "#F4F4F4",
      },
      screens: {
        // comme l'image du bandeau
        "1.5xl": "1240px",
        // mon ecran xD
        "2.5xl": "1920px ",
        "3xl": "2560px ",
      },
      // largeur souhaité
      width: {
        74: "74px",
        128: "1240px",
        400: "400px",
      },
      // hauteur souhaité
      height: {
        74: "74px",
        77: "77px",
        128: "710px",
      },
    },
  },
  plugins: ["require('flowbite/plugin')"],
};
