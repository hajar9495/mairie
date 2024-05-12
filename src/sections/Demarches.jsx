import React from "react";

const Demarches = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1>Demarches</h1>
        <div className="flex flex-wrap  gap-2">
          <div className=" w-74 h-74 bg-red-100">1</div>
          <div className=" w-74 h-74 bg-red-600">2</div>
          <div className=" w-74 h-74 bg-red-500">3</div>
          <div className=" w-74 h-74 bg-red-800">4</div>
          <div className=" w-74 h-74 bg-red-900">5</div>
        </div>
        {/* <div className="grid grid-cols-5 gap-1 bg-black">
          <div className="bg-red-700 w-74 h-74">01</div>
          <div className="bg-red-500 w-74 h-74">01</div>
          <div className="bg-red-800 w-74 h-74">01</div>
          <div className="bg-red-900 w-74 h-74">01</div>
          <div className="bg-red-100 w-74 h-74">01</div>
        </div> */}
      </div>
    </>
  );
};

export default Demarches;
