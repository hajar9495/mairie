import React from "react";
import Demarches from "./Demarches";

const ContenuMain = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="bg-red-500  overflow-hidden">
          <p>ContenuMain</p>
          <h1>Bienvenue sur votre espace citoyens</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            corporis minus, alias deleniti qui ipsa voluptatum debitis! Voluptas
            consequatur suscipit neque quos. Vel dolores nisi, eligendi sit,
            officiis aperiam optio repellendus eius hic corporis possimus
          </p>
          <h2>autre titre</h2>
          <ul>
            <li>liste-1</li>
            <li>liste-2</li>
            <li>liste-3</li>
            <li>liste-3</li>
            <li>liste-3</li>
            <li>liste-3</li>
          </ul>
          <a href="">lien externe</a>
          <Demarches></Demarches>
        </div>
      </div>
    </>
  );
};

export default ContenuMain;
