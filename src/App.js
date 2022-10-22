import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Setu from "./components/Setu";
import Contact from "./pages/Contact/Contact";
import Mask from "./pages/Mask/Mask";
import RamSita from "./pages/Ram_Sita/Ram_Sita";

import Satyug from "./pages/Satyug";
import Yog from "./pages/Yog/Yog";
import React from "react";
import Dhyana from "./pages/Satyug/dhyana/dhyana";
// import TestModal from "./pages/TestModal/TestModal";
import Navigator from "./pages/Navigator/Navigator";
import YogaToken from "./pages/YogaToken/YogaToken";
import DhyanaToken from "./pages/Satyug/dhyanaToken/DhyanaToken";
import ComingSoon from "./pages/comingSoon and 404/ComingSoon";
import NotFound from "./pages/comingSoon and 404/NotFound";
import Homee from './pages/Homee'
// import TestModal from "./pages/TestModal/TestModal";
function App() {
  const Bg_Video =
    "https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4";
  return (
    <div className="App">
      {window.location.href.includes("ram-setu") ? (
        <video autoPlay muted loop id="myBGVideo">
          <source src={Bg_Video} type=""></source>
        </video>
      ) : null}

      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/home" element={<Satyug />} />
        <Route path="/ram-setu/" element={<Home />} />
        <Route path="/ram-setu/setu" element={<Setu />} />
        <Route path="/ram-setu/mask" element={<Mask />} />
        <Route path="/ram-setu/contact" element={<Contact />} />
        <Route path="/ram-setu/ram-sita" element={<RamSita />} />
        <Route path="/navigator" element={<Navigator />} />
        <Route path="/yog" element={<Yog />} />
        <Route path="/dhyana" element={<Dhyana />} />
        <Route path="/yogaToken" element={<YogaToken />} />
        {/* <Route path="/test" element={<TestModal />} /> */}
        <Route path="/dhyanaToken" element={<DhyanaToken />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
