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
  return (
    <>
     <Routes>
        <Route path="/" element={<Satyug />} />
        <Route path="/about" element={<Homee />} />
        <Route path="/ram-setu/" element={<Home />} />
        <Route path="/ram-setu/setu" element={<Setu />} />
        <Route path="/ram-setu/mask" element={<Mask />} />
        <Route path="/ram-setu/contact" element={<Contact />} />
        <Route path="/ram-setu/ram-sita" element={<RamSita />} />
        <Route path="/navigator" element={<Navigator />} />
        <Route path="/yog" element={<Yog />} />
        <Route path="/dhyana" element={<Dhyana />} />
        <Route path="/yogaToken" element={<YogaToken />} />
        <Route path="/dhyanaToken" element={<DhyanaToken />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
