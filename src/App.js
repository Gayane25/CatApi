import { Routes, Route } from "react-router-dom";
import Boxes from "./pages/Boxes";
import Clothes from "./pages/Clothes";
import Hats from "./pages/Hats";
import Home from "./pages/Home";
import Sinks from "./pages/Sinks";
import Space from "./pages/Space";
import Sunglasses from "./pages/Sunglasses";
import Ties from "./pages/Ties";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boxes" element={<Boxes />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/hats" element={<Hats />} />
      <Route path="/sinks" element={<Sinks />} />
      <Route path="/space" element={<Space />} />
      <Route path="/sunglasses" element={<Sunglasses />} />
      <Route path="/ties" element={<Ties />} />
    </Routes>
  );
}

export default App;
