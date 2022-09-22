import React from "react";
import "../../assets/css/Mask.css";
const Mask = () => {
  return (
    <div className="background d-flex justify-content-center">
      <div className="mask"></div>
      <img
        src={require("../../assets/images/hanuman.png")}
        className="hanuman"
        alt="Hanuman img"
      />
    </div>
  );
};

export default Mask;
