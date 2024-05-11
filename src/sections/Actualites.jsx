import React from "react";
import actu1 from "./../assets/actu1.jpg";
import actu2 from "./../assets/actu2.jpg";
import actu3 from "./../assets/actu3.jpg";

const Actualites = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1>Actualites</h1>
        <div className=" grid grid-cols-1 gap-y-5 mx-auto ">
          <div className="bg-grisActualite w-full md:w-400 lg:w-72 h-32 mx-auto grid grid-cols-3">
            <div className="col-span-1">
              <img src={actu1} className="h-auto" alt="" />
            </div>
            <div className="col-span-2">
              <h2>titre actualite 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem tempore voluptates .
              </p>
            </div>
          </div>
          <div className="bg-grisActualite w-full md:w-400 lg:w-72 h-32 mx-auto grid grid-cols-3">
            <div className="col-span-1">
              {" "}
              <img src={actu2} className="h-auto" alt="" />
            </div>
            <div className="col-span-2">
              <h2>titre actualite 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem tempore voluptates .
              </p>
            </div>
          </div>
          <div className="bg-grisActualite w-full md:w-400 lg:w-72 h-32 mx-auto grid grid-cols-3 overflow-auto">
            <div className="col-span-1">
              <img src={actu3} className="h-auto" alt="" />
            </div>
            <div className="col-span-2">
              <h2>titre actualite 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem tempore voluptates .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actualites;
