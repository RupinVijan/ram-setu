import React from "react";
import "../../assets/css/Mask.css";
const Mask = () => {
  return (
    <div className="d-flex ">
      <div className=" d-flex mask"></div>
      <img
        src={require("../../assets/images/hanuman.png")}
        className="hanuman d-flex align-items-center"
        alt="Hanuman img"
      />
    </div>
  );
};

export default Mask;
