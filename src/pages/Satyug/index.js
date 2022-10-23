import classes from "./satyug.module.css";
import { useNavigate } from "react-router-dom";
import satyugLogo from "../../assets/images/satyugLogo.png";

import React, { useRef } from "react";

const Dhyana = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  let screenWidth = getWindowDimensions().width;
  const v =
    screenWidth > 600
      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1665915468/Main_Video_1_gfaand.mp4"
      : "https://res.cloudinary.com/dde6glimb/video/upload/v1666419775/M-1_-_Compressed_with_FlexClip_dpfv1b.mp4";

  const navigate = useNavigate();
  const refVid = useRef();
  return (
    <>
    <div className="App">
      <div className="text-center clickToEnter" id="clickText">
        <div className={classes.linkHome}>
        <div className={classes.clickEnterText} onClick={
          ()=>{
            refVid.current.play();
            document.getElementById("clickText").style.display = "none";
          } 
        }>Click to Enter </div>&nbsp;
        <div className={classes.clickEnterText}
          onClick={() => {
            navigate("/about")
          }}
        >
          About Us
        </div>
        </div>
        <img src={satyugLogo} alt="Satyug Logo" />
      </div>
      <div className={classes.container}>
        <video
          src={v}
          className={classes.vidStyles}
          playsInline
          onEnded={() => navigate("/navigator")}
          ref = {refVid}
        />
      </div>
      </div>
    </>
  );
};

export default Dhyana;
