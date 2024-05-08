// import React from "react";
import "../index.css";
import imgHeader from "../assets/mairie-header.png";
// import imgHeaderMobile from "../assets/mairie-header-mobile.png";

const Header = () => {
  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <header className="bg-grisHeader h-56">
        {/* autre image de bandeau pour la version  mobile 566 x 111 */}
        <img
          src={imgHeader}
          className="h-full w-auto mx-auto object-cover "
          alt="image de bandeau"
        />
      </header>
    </>
  );
};

export default Header;
