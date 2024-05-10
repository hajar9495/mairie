import Menu from "./Menu";
import "../index.css";
import EspacePerso from "./EspacePerso";
import SeConnecter from "./SeConnecter";
import Tabs from "./Tabs";
// Tabs;

const Main = () => {
  return (
    <>
      <div className="relative w-screen h-screen bg-white mx-auto px-4 1.5xl:w-128 1.5xl:h-128">
        <Menu></Menu>
        <EspacePerso></EspacePerso>
        <SeConnecter></SeConnecter>
        <Tabs></Tabs>
      </div>
    </>
  );
};

export default Main;
