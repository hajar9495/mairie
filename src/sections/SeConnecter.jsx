import React from "react";
import { BsPeopleFill } from "react-icons/bs";

const SeConnecter = () => {
  return (
    <>
      <div className="text-sm h-40 w-72  md:w-11/12  relative border bg-grisForm ">
        <div className="flex items-stretch bg-bleuForm text-white w-full text-lg">
          <BsPeopleFill className="self-center" />
          <p className="uppercase pl-2 ">Se Connecter</p>
        </div>
        <p className="w-11/12 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eaque veritatis velit cumque quis aliquid perspiciatis?
        </p>
        {/* <button className="bg-gray-200 absolute bottom-3 right-1">
          creer son espace perso
        </button> */}
        <button className="bg-gray-200 px-1 border font-semibold border-gray-500 rounded-md absolute bottom-4 right-1">
          Creer son espace perso
        </button>
      </div>
    </>
  );
};

export default SeConnecter;
