import React from "react";
import Image from "./../assets/gif.png";

const Gif = () => {
  return (
    <>
      <div className=" w-9/12 md:w-10/12 lg:w-11/12">
        <img
          src={Image}
          alt="illustration de la ville"
          className=" w-11/12 mx-auto mt-4"
        />
      </div>
    </>
  );
};

export default Gif;
