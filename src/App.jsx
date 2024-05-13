import "./index.css";
import { Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GRPG from "./pages/GRPGPage";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GRPG" element={<GRPG />} />
        </Routes>
      </Router> */}
      <Home></Home>
      {/* <GRPG></GRPG> */}
    </>
  );
}

export default App;
