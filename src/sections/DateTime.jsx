import React, { useState } from "react";

const DateTime = () => {
  let [date, setDate] = useState(new Date());

  return (
    <>
      <div>{date.toLocaleDateString()}</div>
    </>
  );
};

export default DateTime;
