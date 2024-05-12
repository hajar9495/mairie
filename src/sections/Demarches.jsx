import React from "react";

const Demarches = ({ className }) => {
  return (
    <>
      <div className={className}>
        <h1>Demarches</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5   gap-4">
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>01</div>
          <div>09</div>
        </div>
      </div>
    </>
  );
};

export default Demarches;
