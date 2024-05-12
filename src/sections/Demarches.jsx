import React from "react";
import illus_1 from "./../assets/illus_1.png";
import illus_2 from "./../assets/illus_2.png";
import illus_3 from "./../assets/illus_3.png";
import illus_4 from "./../assets/illus_4.png";
import illus_5 from "./../assets/illus_5.png";

const Demarches = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1>Demarches</h1>
        <div className="flex flex-wrap  gap-2">
          <div className="w-74 h-74 bg-grisForm rounded-md">
            <img src={illus_1} className="w-1/2 h-1/2 mx-auto pt-1" alt="" />
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md">
            <img src={illus_2} className="w-1/2 mx-auto pt-1" alt="" />
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md">
            <img src={illus_3} className="h-1/2 mx-auto pt-1" alt="" />
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md">
            <img src={illus_4} className="w-1/2 mx-auto pt-1" alt="" />
          </div>
          <div className="w-74 h-74 bg-grisForm rounded-md">
            <img src={illus_5} className="h-1/2 mx-auto pt-1" alt="" />
          </div>
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
