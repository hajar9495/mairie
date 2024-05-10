// import React from "react";

// export const Card = (props) => {
export const Card = ({userName}) => {
//   console.log(props);
  return (
    <>
      <div>Card</div>
      <p>{userName}</p>
      {/* <p>{props.userName}</p>    */}
    </>
  );
};
