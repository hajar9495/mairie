import React from "react";
import { FaPenToSquare, FaHouseChimneyUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdLightbulbOutline, MdDateRange } from "react-icons/md";
import DateTime from "./DateTime";

export default function Menu({ className }) {
  return (
    <>
      <div className={className}>
        <div
          className="flex flex-wrap
        w-full mx-auto h-44 sm:h-32 md:h-28 lg:h-44 lg:mx-3 text-white gap-2 font-body"
        >
          <div className=" bg-rouge h-77 w-74 content-start pt-2 rounded-md cursor-pointer">
            <FaPenToSquare className="mx-auto text-2xl" />
            <p className="text-sm uppercase py-2 flex justify-center">
              démarches
            </p>
          </div>
          <div className=" bg-rose h-77 w-74 content-start pt-2 rounded-md cursor-pointer ">
            <FaClock className="mx-auto text-2xl" />
            <p className="text-sm uppercase py-2 flex justify-center">
              Activites
            </p>
          </div>
          <div className=" bg-orange h-77 w-74 content-start pt-2 rounded-md cursor-pointer">
            <MdLightbulbOutline className="mx-auto text-2xl" />
            <p className="text-sm uppercase py-2 flex justify-center ">Infos</p>
          </div>
          <div className=" bg-bleu h-77 w-74 content-start pt-2 rounded-md cursor-pointer">
            <FaHouseChimneyUser className="mx-auto text-2xl" />
            <p className="text-sm uppercase py-2 flex justify-center">mairie</p>
          </div>
          <div className=" bg-vert h-77 w-74 content-start pt-2 rounded-md cursor-pointer">
            <MdDateRange className="mx-auto text-2xl" />
            <div className="text-sm uppercase py-2 flex justify-center">
              {/* date */}
              <DateTime></DateTime>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
