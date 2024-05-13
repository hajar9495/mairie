import React, { useState, useEffect } from "react";

const DateTime = () => {
  let [date, setDate] = useState(new Date());

  return (
    <>
      <div>
        {/* <p>jour : {date.toDateString()}</p> */}
        <p>{date.toLocaleDateString()}</p>
        {/* <p>jour : {date.toString()}</p> */}
      </div>
    </>
  );
};

export default DateTime;
