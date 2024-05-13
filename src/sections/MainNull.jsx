import React from "react";
import Footer from "./Footer";
import "../index.css";

const Main = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white mx-auto px-4 1.5xl:w-128 1.5xl:h-128 ">
        <Footer></Footer>
        <div>
          <h1 className="text-center font-body text-3xl uppercase mt-4">
            Mentions legales
          </h1>
          <p
            className="font-poppins 
           w-3/4 mx-auto"
          >
            Hebergeur : Ionos EURL composé d'un capital de 100 000 Euros
            Registre du commerce et des sociétés Sarreguemines B 431 303 775
            Code d'Activité principale exercée (APE) 6311Z Numéro de TVA : FR 13
            431 303 775 Siège Sociale de l'entreprise : 7 place de la Gare -
            57200 Sarreguemines - France
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
