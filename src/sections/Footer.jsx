import React from "react";
// import Home from "../pages/Home";
// import GRPG from "../pages/GRPGPage";
import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="w-full h-6 bg-grisForm text-gray-700 inline-flex justify-around align-middle text-base mt-5 rounded-md">
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
      </div>
    </>
  );
};

export default Footer;
