import React from "react";
import Menu from "./Menu";
import "../index.css";
import EspacePerso from "./EspacePerso";
import SeConnecter from "./SeConnecter";
import TabsEspace from "./TabsEspace";
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
          {/* <TestFlowbite></TestFlowbite> */}
        </div>
        <div className="block col-span-5 md:hidden">
          {/* flowbite */}
          <TabsEspace></TabsEspace>
        </div>
        <div className="col-span-5 md:col-span-3 lg:col-span-1 lg:order-2 my-3">
          <Menu></Menu>
          <Actualites className={"mt-2"}></Actualites>
        </div>
        <div className="col-span-5 md:col-span-5 lg:col-span-2">
          <ContenuMain></ContenuMain>
          {/* <div className="w-full h-5 bg-red-400 mt-5"></div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
