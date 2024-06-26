import React from "react";
import actu1 from "./../assets/actu1.jpg";
import actu2 from "./../assets/actu2.jpg";
import actu3 from "./../assets/actu3.jpg";

const Actualites = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1 className="mx-3 font-body uppercase text-xl"> les Actualités</h1>
        <div className=" grid grid-cols-1 gap-y-5 mx-3">
          <div
            className="bg-grisActualite w-full 
           lg:w-72 h-32 mx-auto grid grid-cols-3 overflow-auto  shadow-lg border border-gray-200 rounded-md"
          >
            <div className="col-span-1 flex items-center">
              <img src={actu1} className="w-11/12 h-11/12 mx-auto" alt="" />
            </div>
            <div className="col-span-2 px-2">
              <h2 className="text-base uppercase font-body">
                titre actualite 1
              </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem tempore voluptates .
              </p>
              <a href="" className="underline cursor-pointer text-xs">
                voir plus
              </a>
            </div>
          </div>
          <div className="bg-grisActualite w-full lg:w-72 h-32 mx-auto grid grid-cols-3 overflow-auto shadow-lg border border-gray-200 rounded-md">
            <div
              className="col-span-1 flex items-center 
            0"
            >
              <img src={actu2} className="w-11/12 h-11/12 mx-auto" alt="" />
            </div>
            <div className="col-span-2 text-xs px-2">
              <h2 className="text-base uppercase font-body">
                titre actualite 1
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem tempore voluptates .
              </p>
              <a href="" className="underline cursor-pointer">
                voir plus
              </a>
            </div>
          </div>
          <div className="bg-grisActualite w-full lg:w-72 h-32 mx-auto grid grid-cols-3 overflow-auto shadow-lg border border-gray-200 rounded-md">
            <div className="col-span-1 flex items-center">
              <img src={actu3} className="w-11/12 h-11/12 mx-autos" alt="" />
            </div>
            <div className="col-span-2 text-xs px-2">
              <h2 className="text-base uppercase font-body">
                titre actualite 1
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem tempore voluptates .
              </p>
              <a href="" className="underline cursor-pointer">
                voir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actualites;
