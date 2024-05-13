import React from "react";
// import Home from "../pages/Home";
// import GRPG from "../pages/GRPGPage";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-5 bg-red-400 inline-flex justify-around">
        <p>
          <Link to="/">Accueil</Link>
        </p>
        <p>
          <Link to="/grpg">GRPPG</Link>
        </p>
        <p>
          <a href="https://mennai-hajar.fr">mennai-hajar.fr</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
