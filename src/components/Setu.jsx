import React from "react";
import "../assets/css/Setu.css";
import india_Top from "../assets/images/india-top-view.png";
import Bridge from "../assets/images/setu-top-view.png";
import Island from "../assets/images/lanka-top-view.png";
import water from "../assets/images/water-top-view.png";
import chat from "../assets/images/callout1.png";
import stone from "../assets/images/stone.png";
const Setu = () => {
  return (
    <div className="imgContainer">
      <img src={india_Top} alt="india-top" className="india-top" />
      <img src={water} alt="water-top" className="water-top" />
      <img src={Bridge} alt="setu-top" className="setu-top" />
      <img
        src={stone}
        alt="stone"
        className="stone"
      />
      <div className="Goal"></div>
      <div className="chatContainer">
      <img src={chat} alt="chat" className="chat" />
      </div>
      <img src={Island} alt="sri-lanka-top" className="sri-lanka-top" />
    </div>
  );
};

export default Setu;