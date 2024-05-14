import React from "react";
import illus_1 from "./../assets/illus_1.png";
import illus_2 from "./../assets/illus_2.png";
import illus_3 from "./../assets/illus_3.png";
import illus_4 from "./../assets/illus_4.png";
import illus_5 from "./../assets/illus_5.png";

const Demarches = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1 className="font-body text-xl uppercase">Demarches</h1>
        <div className="flex flex-wrap gap-2">
          <div className="w-74 h-74 bg-grisForm rounded-md text-xs cursor-pointer border-gray-200 shadow-md">
            <img src={illus_1} className="w-1/2 h-1/2 mx-auto pt-1 " alt="" />
            <p className="text-center capitalize">carte d'identité</p>
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md text-xs cursor-pointer border-gray-200 shadow-md">
            <img src={illus_2} className="w-1/2 mx-auto pt-1 " alt="" />
            <p className="text-center capitalize">travaux</p>
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md text-xs cursor-pointer border-gray-200 shadow-md">
            <img src={illus_3} className="h-1/2 mx-auto pt-1 " alt="" />
            <p className="text-center capitalize">tranquille</p>
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md text-xs cursor-pointer border-gray-200 shadow-md">
            <img src={illus_4} className="w-1/2 mx-auto pt-1 " alt="" />
            <p className="text-center capitalize">plan canicule</p>
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md text-xs cursor-pointer border-gray-200 shadow-md">
            <img src={illus_5} className="h-1/2 mx-auto pt-1 " alt="" />
            <p className="text-center capitalize">demande de logement</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demarches;
