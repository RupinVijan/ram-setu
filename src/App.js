import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Setu from "./components/Setu";
import Contact from "./pages/Contact/Contact";
import Mask from "./pages/Mask/Mask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setu" element={<Setu />} />
        <Route path="/mask" element={<Mask />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
