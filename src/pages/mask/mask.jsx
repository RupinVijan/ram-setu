import React from "react";
import "../../assets/css/mask.css";
const mask = () => {
  return (
    <div className="background d-flex justify-content-center">
      
        <div className="mask"></div>
        <img src={require('../../assets/images/hanuman.png')} className ="hanuman"/>
    </div>
  );
};

export default mask;
