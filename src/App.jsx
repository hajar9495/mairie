import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./sections/Footer";

import Home from "./pages/Home";
import GRPG from "./pages/GRPGPage";

function App() {
  return (
    <>
      <Router>
        {/* <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/grpg">GRPPG</Link>
        </p> */}
        {/* <Footer></Footer> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grpg" element={<GRPG />} />
        </Routes>
      </Router>

      {/* <Home></Home> */}
    </>
  );
}

export default App;
