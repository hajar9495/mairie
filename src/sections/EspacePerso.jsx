// import React from 'react'
import { GoPersonFill } from "react-icons/go";

const EspacePerso = () => {
  return (
    <>
      <div className="h-40 w-64 text-sm border ">
        <div className="inline-flex">
          <GoPersonFill />
          EspacePerso
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
          <div className=" inline-flex">
            <p>mon mot de passe oublié </p>
            <button className="bg-gray-500">connexion</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EspacePerso;
