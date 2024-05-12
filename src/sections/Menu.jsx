import React from "react";
import { FaPenToSquare, FaHouseChimneyUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdLightbulbOutline, MdDateRange } from "react-icons/md";

export default function Menu({ className }) {
  return (
    <>
      {/* refaire en mode flex pour plus de flexibilite comme composant demarches */}
      <div className={className}>
        <div
          className="flex flex-wrap
        w-full mx-auto lg:w-auto h-44 lg:mx-3 text-white gap-2"
        >
          <div className=" bg-rouge h-77 w-74 content-start pt-2 ">
            <FaPenToSquare className="mx-auto text-2xl" />
            <p className="text-xs uppercase py-2 flex justify-center">
              démarches
            </p>
          </div>
          <div className=" bg-rose h-77 w-74 content-start pt-2 ">
            <FaClock className="mx-auto text-2xl" />
            <p className="text-xs uppercase py-2 flex justify-center">
              Activites
            </p>
          </div>
          <div className=" bg-orange h-77 w-74 content-start pt-2">
            <MdLightbulbOutline className="mx-auto text-2xl" />
            <p className="text-xs uppercase py-2 flex justify-center ">Infos</p>
          </div>
          <div className=" bg-bleu h-77 w-74 content-start pt-2">
            <FaHouseChimneyUser className="mx-auto text-2xl" />
            <p className="text-xs uppercase py-2 flex justify-center">mairie</p>
          </div>
          <div className=" bg-vert h-77 w-74 content-start pt-2">
            <MdDateRange className="mx-auto text-2xl" />
            <p className="text-xs uppercase py-2 flex justify-center">date</p>
          </div>
        </div>
      </div>
      {/* grid systeme */}
      {/* <div className={className}>
        <div className="w-full mx-auto lg:w-auto h-44 lg:mx-3 ">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 text-white">
            <div className=" bg-rouge h-77 flex items-center justify-center text-5xl">
              <FaPenToSquare />
            </div>
            <div className=" bg-rose h-77 flex items-center justify-center text-5xl">
              <FaClock />
            </div>
            <div className=" bg-orange h-77 flex items-center justify-center text-5xl">
              <MdLightbulbOutline />
            </div>
            <div className=" bg-bleu h-77 flex items-center justify-center text-5xl">
              <FaHouseChimneyUser />
            </div>
            <div className=" bg-vert h-77 flex items-center justify-center text-5xl">
              <MdDateRange />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
