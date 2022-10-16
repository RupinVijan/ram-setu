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
import TestPage from "./pages/TestPage/TestPage"
import React from "react";
import Dhyana from "./pages/Satyug/dhyana/dhyana"

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
        <Route path="/darshan/" element={<Home />} />
        <Route path="/darshan/setu" element={<Setu />} />
        <Route path="/darshan/mask" element={<Mask />} />
        <Route path="/darshan/contact" element={<Contact />} />
        <Route path="/darshan/ram-sita" element={<RamSita />} />
        <Route path="/yog" element={<Yog/>} />
        <Route path="/dhayana" element={<Dhyana />} />
        <Route path="/testPage" element={<TestPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
