import React from "react";
import { Tabs } from "flowbite-react";
import SeConnecter from "./SeConnecter";
import EspacePerso from "./EspacePerso";

const TabsEspace = () => {
  return (
    <>
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="Espace Perso">
          <EspacePerso className={"w-11/12 flex justify-center"}></EspacePerso>
        </Tabs.Item>
        <Tabs.Item title="creer un compte">
          <SeConnecter className={"w-11/12 flex justify-center"}></SeConnecter>
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default TabsEspace;
