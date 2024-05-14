import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GRPG from "./pages/GRPGPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grpg" element={<GRPG />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
