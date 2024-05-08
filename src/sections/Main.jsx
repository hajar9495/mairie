import Menu from "./Menu";
import "../index.css";

const Main = () => {
  return (
    <>
      {/* ancienne configuration */}
      {/* <div className="relative w-screen h-screen bg-white mx-auto px-4 1.5xl:w-128 1.5xl:h-128">
        <p>main</p>
        <div className="absolute top-0 right-0 bg-red-500 h-96 w-36">Menu</div>
      </div> */}

      <div className="relative w-screen h-screen bg-white mx-auto px-4 1.5xl:w-128 1.5xl:h-128">
        <Menu className="absolute top-0 bottom-0 h-52 w-12"></Menu>
      </div>
      {/* <Menu className="absolute bottom-0 right-0"></Menu> */}
    </>
  );
};

export default Main;
