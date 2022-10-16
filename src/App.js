import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Setu from "./components/Setu";
import Contact from "./pages/Contact/Contact";
import Mask from "./pages/Mask/Mask";
import RamSita from "./pages/Ram_Sita/Ram_Sita";
import Bg_Video from "./assets/video/Waves.mp4";
import Satyug from "./pages/Satyug"
import Yog from "./pages/Yog/Yog"
import React from "react";
function App() {


  return (
    <div className="App">
    
    {
      window.location.href.includes("ram-setu") ?
        <video autoPlay muted loop id="myBGVideo">
          <source src={Bg_Video} type="video/mp4" ></source>
        </video> : null
    }
  

      <Routes>
        <Route path="/" element={<Satyug />}/>
        <Route path="/ram-setu/" element={<Home />} />
        <Route path="/ram-setu/setu" element={<Setu />} />
        <Route path="/ram-setu/mask" element={<Mask />} />
        <Route path="/ram-setu/contact" element={<Contact />} />
        <Route path="/ram-setu/ram-sita" element={<RamSita />} />
        <Route path="/Yog" element={<Yog/>} />
      </Routes>
     
    </div>
  );
}

export default App;
