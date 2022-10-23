import classes from "./Yog.module.css";

import React from "react";
import { useNavigate } from "react-router-dom";

const Yog = () => {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }
    let screenWidth = getWindowDimensions().width;

  const v =
  screenWidth>600?
    "https://res.cloudinary.com/dde6glimb/video/upload/v1665915568/Yoga_Video_1_o9ddgc.mp4":
    "https://res.cloudinary.com/dde6glimb/video/upload/v1666363192/M-3_hupvky.mp4";

  const navigate = useNavigate();
  return (
    <div className="App">
    <div className={classes.container}>
      <video
        src={v}
        playsInline
        className={classes.vidStyles}
        autoPlay
        onEnded={() => navigate("/yogaToken")}
      />
    </div>
    </div>
  );
};

export default Yog;
