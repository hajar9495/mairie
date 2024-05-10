import "./index.css";
import Home from "./pages/Home";
import { Card } from "./sections/Card";

function App() {
  return (
    <>
      {/* <Card userName={"sorry"}></Card> */}
      <Card className={"bg-red-500 w-9"}></Card>
      <Home></Home>
    </>
  );
}

export default App;
