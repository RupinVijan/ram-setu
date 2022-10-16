import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Setu from "./components/Setu";
import Contact from "./pages/Contact/Contact";
import Mask from "./pages/Mask/Mask";
import RamSita from "./pages/Ram_Sita/Ram_Sita";

import Satyug from "./pages/Satyug";
import Yog from "./pages/Yog/Yog";
import TestPage from "./pages/TestPage/TestPage"
import React from "react";
// import TestModal from "./pages/TestModal/TestModal";
function App() {
  const Bg_Video = "https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4";
  return (
    <div className="App">
      {window.location.href.includes("ram-setu") ? (
        <video autoPlay muted loop id="myBGVideo">
          <source src={Bg_Video} type=""></source>
        </video>
      ) : null}

      <Routes>
        <Route path="/" element={<Satyug />} />
        <Route path="/ram-setu/" element={<Home />} />
        <Route path="/ram-setu/setu" element={<Setu />} />
        <Route path="/ram-setu/mask" element={<Mask />} />
        <Route path="/ram-setu/contact" element={<Contact />} />
        <Route path="/ram-setu/ram-sita" element={<RamSita />} />
        <Route path="/Yog" element={<TestPage />} />
        <Route path="/TestPage" element={<TestPage/>} />
      </Routes>
    </div>
  );
}

export default App;
