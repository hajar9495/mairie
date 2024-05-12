import React from "react";
import { FaPenToSquare, FaHouseChimneyUser } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdLightbulbOutline, MdDateRange } from "react-icons/md";

export default function Menu({ className }) {
  return (
    <>
      <div className={className}>
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
      </div>
    </>
  );
}
