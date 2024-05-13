import React from "react";
import Header from "./Header";
import MainNull from "./MainNull";

const Background = () => {
  return (
    <>
      <div className="min-h-screen bg-grisBody">
        <Header></Header>
        <MainNull></MainNull>
      </div>
    </>
  );
};

export default Background;
