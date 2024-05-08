// import React from 'react'

import Header from "./Header";
import Main from "./Main";

const Background = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-400">
        <Header></Header>
        <Main></Main>
        <p>background</p>
      </div>
    </>
  );
};

export default Background;
