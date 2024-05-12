import React from "react";
import { GoPersonFill } from "react-icons/go";

const EspacePerso = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="h-40 w-72 md:w-11/12 text-sm border bg-grisForm my-4">
          <div className="flex items-stretch bg-bleuForm text-white w-full text-lg content-center">
            <GoPersonFill className="self-center" />
            <p className="uppercase pl-2">Espace Perso</p>
          </div>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full h-7 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="identifiant"
            />
            <input
              type="password"
              name="mdp"
              id="mdp"
              className="block w-full h-7 rounded-md border-0 my-3 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="mot de passe"
            />
            <div className=" flex justify-around">
              <p> mot de passe oublié </p>
              <button className="bg-gray-200 px-1 border">connexion</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EspacePerso;
