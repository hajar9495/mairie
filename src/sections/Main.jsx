import React from "react";
import Menu from "./Menu";
import "../index.css";
import EspacePerso from "./EspacePerso";
import SeConnecter from "./SeConnecter";
import Tabs from "./Tabs";
import ContenuMain from "./ContenuMain";
import Actualites from "./Actualites";
import Gif from "./Gif";
import TestFlowbite from "./TestFlowbite";

const Main = () => {
  return (
    <>
      <div className="w-screen h-screen bg-white mx-auto px-4 1.5xl:w-128 1.5xl:h-128 grid grid-cols-5 lg:grid-cols-4 auto-cols-max">
        <div className="hidden md:block md:col-span-2 lg:col-span-1 ">
          <EspacePerso className={"hidden md:block"}></EspacePerso>
          <SeConnecter></SeConnecter>
          <Gif></Gif>
          <TestFlowbite></TestFlowbite>
        </div>
        <div className="block col-span-5 md:hidden bg-zinc-900 text-white">
          <p>ok</p>
          {/* flowbite */}
          <Tabs></Tabs>
        </div>
        <div className="col-span-5 md:col-span-3 lg:col-span-1 lg:order-2 my-3">
          <Menu></Menu>
          <Actualites className={"mt-2"}></Actualites>
        </div>
        <div className="col-span-5 md:col-span-5 lg:col-span-2">
          <ContenuMain></ContenuMain>
        </div>
        {/* <p className="font-body">font family</p> */}

        {/* <Tabs></Tabs> */}
      </div>
    </>
  );
};

export default Main;
