import React from "react";
import Demarches from "./Demarches";

const ContenuMain = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="overflow-hidden my-4">
          <h1 className="text-xl uppercase font-semibold">
            Bienvenue sur votre espace citoyens
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            corporis minus, alias deleniti qui ipsa voluptatum debitis! Voluptas
            consequatur suscipit neque quos. Vel dolores nisi, eligendi sit,
            officiis aperiam optio repellendus eius hic corporis possimus
          </p>
          <h2>autre titre</h2>
          <ul className="list-disc list-inside">
            <li>liste-1</li>
            <li>liste-2</li>
            <li>liste-3</li>
            <li>liste-3</li>
            <li>liste-3</li>
          </ul>
          <a href="" className="underline cursor-pointer">
            lien externe
          </a>
        </div>
        <Demarches className={"bg-red-300"}></Demarches>
      </div>
    </>
  );
};

export default ContenuMain;
